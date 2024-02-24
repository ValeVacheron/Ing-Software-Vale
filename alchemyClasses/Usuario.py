from sqlalchemy import Column, Integer, String
from alchemyClasses import db


class Usuario(db.Model):

    __tablename__ = 'usuarios'
    idUsuario = Column(Integer, primary_key=True)
    nombre = Column(String(200))
    apPat = Column(String(200))
    apMat = Column(String(200), nullable=True)
    password = Column(String(64))
    email = Column(String(500), nullable=True,default=None)
    profilePicture= Column(Integer, nullable=True)
    superUser=Column(Integer,nullable=True,default=None)

    def __init__(self, nombre, apPat, apMat=None, password=None,email=None,profilePicture=None,superUser=None):
        self.nombre = nombre
        self.apPat = apPat
        self.apMat = apMat
        self.password = password
        self.email = email
        self.profilePicture = profilePicture
        self.superUser = superUser
        
    def __str__(self):
        return f'\nNombre:{self.nombre}, {self.apPat},{self.apMat}\n '