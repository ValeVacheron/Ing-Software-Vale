from flask import Blueprint, render_template, flash, redirect, url_for, request
from alchemyClasses import db
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Rentar import Rentar
from alchemyClasses.Pelicula import Pelicula
from datetime import datetime

renta_blueprint = Blueprint('renta', __name__, url_prefix='/renta')

@renta_blueprint.route('/ver', methods=['GET'])
def ver_rentas():
    rentas = Rentar.query.all()
    return render_template('ver_rentar.html', rentas=rentas)

@renta_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_renta():
    if request.method == 'POST':
        idUsuario = request.form['idUsuario']
        idPelicula = request.form['idPelicula']
        fecha_renta = request.form['fecha_renta']
        dias_de_renta = request.form['dias_de_renta']

        usuario= Usuario.query.get(idUsuario)
        if usuario is None:
            return "No hay usuarios con el id especificado"

        pelicula= Pelicula.query.get(idPelicula)
        if pelicula is None:
            return "No hay peliculas con el id especificado"

        renta = Rentar(idUsuario=idUsuario, idPelicula=idPelicula, fecha_renta=fecha_renta, dias_de_renta=dias_de_renta, estatus=0)
        db.session.add(renta)
        db.session.commit()
        flash('Renta agregada correctamente')

    return render_template('add_rent.html')

@renta_blueprint.route('/update/<int:id_renta>', methods=['GET', 'POST'])
def update_rent(id_renta):
    if request.method == 'POST':
        estatus = request.form['estatus']

        consulta= Rentar.query.filter(Rentar.idRentar==id_renta).first()
        if consulta is None:
            return "No se puede actualizar porque no hay renta con ese id"

        try:
            db.session.query(Rentar).filter(Rentar.idRentar==id_renta).update({Rentar.estatus:estatus})
            db.session.commit()
            flash('Renta editada correctamente')
            return render_template('update_rent.html')
        except Exception as e:
            db.session.rollback()
            flash('Error al editar Renta')


    return render_template('update_rent.html')