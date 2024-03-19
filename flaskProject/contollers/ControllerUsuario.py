from flask import Blueprint, render_template, flash, redirect, url_for, request
from alchemyClasses import db
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Rentar import Rentar
from alchemyClasses.Pelicula import Pelicula
from datetime import datetime


usuario_blueprint = Blueprint('usuario', __name__, url_prefix='/usuario')

@usuario_blueprint.route('/ver', methods=['GET']) #localhost:5000/usuario/ver
def ver_usuarios():
    usuarios = Usuario.query.all()
    return render_template('ver_usuarios.html', usuarios=usuarios)

@usuario_blueprint.route('/id/<int:id_usuario>/<string:nombre>')
def ver_usuario_id(id_usuario, nombre):
    consulta = Usuario.query.filter(Usuario.idUsuario==id_usuario).first()
    if consulta:
        return consulta.__str__()
    else:
        return "Usuario no encontrado"

@usuario_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_usuario():
    if request.method == 'POST':
        nombre = request.form['nombre']
        apPat = request.form['apPat']
        apMat = request.form['apMat']
        password = request.form['password']
        email = request.form['email']

        consulta= Usuario.query.filter(Usuario.email==email).first()
        if consulta is not None:
            flash('Ya existe una cuenta con ese correo', 'danger')
            return redirect(url_for('usuario.agregar_usuario'))
        usuario = Usuario(nombre=nombre, apPat=apPat, apMat=apMat, password=password, email=email,
                                profilePicture=None, superUser=1)
        db.session.add(usuario)
        db.session.commit()
        flash('Usuario agregado correctamente')

    return render_template('add_user.html')

@usuario_blueprint.route('/update/<int:id_usuario>', methods=['GET', 'POST'])
def update_user(id_usuario):
    if request.method == 'POST':
        nombre = request.form['nombre']
        apPat = request.form['apPat']
        apMat = request.form['apMat']
        password = request.form['password']
        email = request.form['email']

        consulta= Usuario.query.filter(Usuario.idUsuario==id_usuario).first()
        if consulta is None:
            return "No se puede actualizar porque no hay usuario con ese id"
        
        db.session.query(Usuario).filter(Usuario.idUsuario==id_usuario).update({Usuario.nombre:nombre})
        db.session.query(Usuario).filter(Usuario.idUsuario==id_usuario).update({Usuario.apPat:apPat})
        db.session.query(Usuario).filter(Usuario.idUsuario==id_usuario).update({Usuario.apMat:apMat})
        db.session.query(Usuario).filter(Usuario.idUsuario==id_usuario).update({Usuario.password:password})
        db.session.query(Usuario).filter(Usuario.idUsuario==id_usuario).update({Usuario.email:email})
        db.session.commit()
        flash('Usuario actualizado correctamente')

    return render_template('update_user.html')

@usuario_blueprint.route('/delete/<int:id_usuario>', methods=['GET', 'POST'])
def delete_user(id_usuario):
    usuario = Usuario.query.filter(Usuario.idUsuario==id_usuario).first()
    try:
        db.session.delete(usuario)
        db.session.commit()
        return "Usuario eliminado"
    except Exception:
        db.session.rollback()
        return "No se pudo eliminar al usuario"
    
    