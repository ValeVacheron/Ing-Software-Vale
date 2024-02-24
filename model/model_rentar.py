from alchemyClasses.Rentar import Rentar
from alchemyClasses import db

def registros_rentar():
    for renta in Rentar.query.all():
        print(renta)

def filtra_rentar(idRentar):
    consulta = Rentar.query.filter(Rentar.idRentar == idRentar).first()
    if consulta is not None:
        print(consulta)
    else:
        print("No hay rentas con ese id")

def update_rentar(fecha_renta,idRentar):
    db.session.query(Rentar).filter(Rentar.idRentar==idRentar).update({Rentar.fecha_renta:fecha_renta})
    db.session.commit()

def borra_rentar(idRentar):
    rentar = Rentar.query.filter(Rentar.idRentar).first()
    db.session.delete(rentar)
    db.session.commit()

def borra_todosrentar(idRentar):
    db.session.query(idRentar).delete()
    db.session.commit()