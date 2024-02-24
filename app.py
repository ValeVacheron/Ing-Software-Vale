from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Pelicula import Pelicula
from alchemyClasses.Rentar import Rentar

from model.model_usuarios import *
from model.model_peliculas import *
from model.model_rentar import *
from cryptoUtils.CryptoUtils import cipher
from hashlib import sha256

#mysql+pymysql://ferfong:Developer123!@localhost:3306/ing_soft
#<dialecto>+<driver>://<usuario>:<passwd>@localhost:3306/<db>
#mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_soft
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

if __name__ == '__main__':
    with app.app_context():
        print("Bienvenido a Clon-Buster!!")
        print("1. Mostrar los registros de una tabla.")
        print("2. Filtrar los registros de una tabla por id.")
        print("3. Actualizar el nombre/fecha de un registro.")
        print("4. Eliminar un registro.")
        print("5. Eliminar todos los registros.")

        opcion=int(input("\nIngresa el número de acción que desees realizar: "))

        while opcion not in [1,2,3,4,5]:
            try:
                opcion = int(input("Ingresa el número de acción que deseas realizar: "))
                if opcion not in [1,2,3,4,5]:
                    print("Ingresa una opcion válida")
            except ValueError:
                print("Ingresa una opcion válida")

        if(opcion==1):
            while True:
                print("1. Mostrar todo los usuarios.")
                print("2. Mostrar todas las peliculas.")
                print("3. Mostrar todas las rentas.")
                print("4. Regresar\n")
                try:
                    opcion = int(input("Ingresa el número de acción que deseas realizar: "))
                    if opcion == 1:
                        registros_usuario()
                    elif opcion == 2:
                        registros_pelicula()
                    elif opcion == 3:
                        registros_rentar()
                    elif opcion == 4:
                        break
                    else:
                        print("Ingresa una opcion valida")
                except ValueError:
                    print("Ingresa una opcion válida")
        
        if(opcion==2):
            while True:
                print("1. Filtrar usuario por su id.")
                print("2. Filtrar película por su id.")
                print("3. Filtrar renta por su id.")
                print("4. Regresar\n")
                try:
                    opcion = int(input("Ingresa el número de acción que deseas realizar: "))
                    
                    if opcion == 1:
                        idUsuario = 0
                        while idUsuario < 1:
                            try:
                                idUsuario = int(input("Ingresa el id del usuario que buscas: "))
                            except ValueError:
                                print("Escribe un id válido.")
                        filtra_us(idUsuario)

                    elif opcion == 2:
                        idPelicula= 0
                        while idPelicula < 1:
                            try:
                                idPelicula = int(input("Ingresa el id de la película que buscas: "))
                            except ValueError:
                                print("Escribe un id válido.")
                        filtra_pelicula(idPelicula)

                    elif opcion == 3:
                        idRentar= 0
                        while idRentar < 1:
                            try:
                                idRentar = int(input("Ingresa el id de la renta que buscas: "))
                            except ValueError:
                                print("Escribe un id válido.")
                        filtra_rentar(idRentar)
                    elif opcion == 4:
                        break
                    else:
                        print("Ingresa una opcion valida")
                except ValueError:
                    print("Ingresa una opcion válida")
        
        if(opcion==3):
            while True:
                print("1. Actualizar nombre de un usuario.")
                print("2. Actualizar nombre de una película.")
                print("3. Actualizar fecha de una renta.")
                print("4. Regresar\n")
                try:
                    opcion = int(input("Ingresa el número de acción que deseas realizar: "))
                    
                    if opcion == 1:
                        idUsuario = 0
                        while idUsuario < 1:
                            try:
                                idUsuario = int(input("Ingresa el id del usuario que deseas actualizar: "))
                            except ValueError:
                                print("Escribe un id válido.")

                        nombre=input("Ingresa el nuevo nombre:")
                        update_us(nombre,idUsuario)

                    elif opcion == 2:
                        idPelicula= 0
                        while idPelicula < 1:
                            try:
                                idPelicula = int(input("Ingresa el id de la película que deseas actualizar: "))
                            except ValueError:
                                print("Escribe un id válido.")
                        
                        nombre=input("Ingresa el nuevo nombre:")
                        update_peli(nombre,idPelicula)

                    elif opcion == 3:
                        idRentar= 0
                        while idRentar < 1:
                            try:
                                idRentar = int(input("Ingresa el id de la renta que deseas actualizar: "))
                            except ValueError:
                                print("Escribe un id válido.")

                        fecha_renta = input("Escribe la nueva fecha de renta (yyyy-mm-dd HH:MM:SS): ")
                        update_rentar(fecha_renta,idRentar)

                    elif opcion == 4:
                        break
                    else:
                        print("Ingresa una opcion valida")
                except ValueError:
                    print("Ingresa una opcion válida")