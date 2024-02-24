from alchemyClasses.Usuario import Usuario
from alchemyClasses import db

def registros_usuario():
    for usuario in Usuario.query.all():
        print(usuario)
          
def filtra_us(idUsuario):
    consulta = Usuario.query.filter(Usuario.idUsuario == idUsuario).first()
    if consulta is not None:
        print(consulta)
    else:
        print("No hay usuarios con ese id")

def update_us(nombre,idUsuario):
    db.session.query(Usuario).filter(Usuario.idUsuario==idUsuario).update({Usuario.nombre:nombre})
    db.session.commit()

def borra_us(idUsuario):
    usuario = Usuario.query.filter(Usuario.idUsuario).first()
    db.session.delete(usuario)
    db.session.commit()

def borra_todosUs(idUsuario):
    db.session.query(Usuario).delete()
    db.session.commit()