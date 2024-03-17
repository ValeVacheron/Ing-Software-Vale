from flask import Blueprint, render_template, flash, redirect, url_for, request
from alchemyClasses import db
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Rentar import Rentar
from alchemyClasses.Pelicula import Pelicula

usuario_blueprint = Blueprint('usuario', __name__, url_prefix='/usuario')

@usuario_blueprint.route('/ver') #localhost:5000/usuario/ver
def ver_usuarios():
    for usuario in Usuario.query.all():
        print(usuario)

