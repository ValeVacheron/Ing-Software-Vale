from alchemyClasses import db
from sqlalchemy import Column, Integer, ForeignKey, DateTime
from datetime import date
from alchemyClasses.Pelicula import Pelicula
from alchemyClasses.Usuario import Usuario

class Rentar(db.Model):

    __tablename__ = 'rentar'
    idRentar= Column(Integer, primary_key=True)
    idUsuario = Column(Integer, ForeignKey('usuarios.idUsuario'))
    idPelicula = Column(Integer, ForeignKey('peliculas.idPelicula'))
    fecha_renta= Column(DateTime, nullable=False)
    dias_de_renta=Column(Integer,default=5)
    estatus=Column(Integer,default=0)


    def __init__(self, idUsuario, idPelicula, fecha=date.today(), dias_de_renta=5, estatus=0):
        self.idUsuario = idUsuario
        self.idPelicula= idPelicula
        self.fecha = fecha
        self.dias_de_renta=dias_de_renta
        self.estatus=estatus

    def __str__(self):
        usuario= Usuario.query.get(self.idUsuario)
        pelicula = Pelicula.query.get(self.idPelicula)
        return f'\nUsuario:{usuario.nombre}, Pelicula:{pelicula.nombre}, Fecha de renta:{self.fecha_renta}\n'