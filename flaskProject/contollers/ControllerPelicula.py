from flask import Blueprint, render_template, flash, redirect, url_for, request
from alchemyClasses import db
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Rentar import Rentar
from alchemyClasses.Pelicula import Pelicula

pelicula_blueprint = Blueprint('pelicula', __name__, url_prefix='/pelicula')

@pelicula_blueprint.route('/ver', methods=['GET'])
def ver_peliculas():
    peliculas = Pelicula.query.all()
    return render_template('ver_peliculas.html', peliculas=peliculas)


@pelicula_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_pelicula():
    if request.method == 'POST':
        nombre = request.form['nombre']
        genero = request.form['genero']
        duracion = request.form['duracion']
        inventario = request.form['inventario']

        consulta= Pelicula.query.filter(Pelicula.nombre==nombre).first()
        if consulta is not None:
            flash('Esa película ya está registrada')
            return redirect(url_for('pelicula.agregar_pelicula'))
        pelicula = Pelicula(nombre=nombre, genero=genero, duracion=duracion, inventario=inventario)
        db.session.add(pelicula)
        db.session.commit()
        flash('Película agregada correctamente')

    return render_template('add_movie.html')

@pelicula_blueprint.route('/update/<int:id_pelicula>', methods=['GET', 'POST'])
def update_movie(id_pelicula):
    if request.method == 'POST':
        nombre = request.form['nombre']
        genero = request.form['genero']
        duracion = request.form['duracion']
        inventario = request.form['inventario']

        consulta= Pelicula.query.filter(Pelicula.idPelicula==id_pelicula).first()
        if consulta is None:
            return "No se puede actualizar porque no hay pelicula con ese id"

        db.session.query(Pelicula).filter(Pelicula.idPelicula==id_pelicula).update({Pelicula.nombre:nombre})
        db.session.query(Pelicula).filter(Pelicula.idPelicula==id_pelicula).update({Pelicula.genero:genero})
        db.session.query(Pelicula).filter(Pelicula.idPelicula==id_pelicula).update({Pelicula.duracion:duracion})
        db.session.query(Pelicula).filter(Pelicula.idPelicula==id_pelicula).update({Pelicula.inventario:inventario})
        db.session.commit()
        flash('Película actualizada correctamente')

    return render_template('update_movie.html')

@pelicula_blueprint.route('/delete/<int:id_pelicula>', methods=['GET', 'POST'])
def delete_pelicula(id_pelicula):
    pelicula = Pelicula.query.filter(Pelicula.idPelicula==id_pelicula).first()
    try:
        db.session.delete(pelicula)
        db.session.commit()
        return "Película eliminado"
    except Exception:
        db.session.rollback()
        return "No se pudo eliminar la película"