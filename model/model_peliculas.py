from alchemyClasses.Pelicula import Pelicula
from alchemyClasses import db

def registros_pelicula():
    for peli in Pelicula.query.all():
        print(peli)

def filtra_pelicula(idPelicula):
    consulta = Pelicula.query.filter(Pelicula.idPelicula == idPelicula).first()
    if consulta is not None:
        print(consulta)
    else:
        print("No hay películas con ese id")

def update_peli(nombre,idPelicula):
    db.session.query(Pelicula).filter(Pelicula.idPelicula==idPelicula).update({Pelicula.nombre:nombre})
    db.session.commit()

def borrapeli(idPelicula):
    pelicula = Pelicula.query.filter(Pelicula.idPelicula).first()
    db.session.delete(pelicula)
    db.session.commit()

def borra_todopeli(idPelicula):
    db.session.query(idPelicula).delete()
    db.session.commit()