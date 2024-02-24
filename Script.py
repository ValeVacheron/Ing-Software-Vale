from datetime import datetime
import pymysql.cursors
import random

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='lab',
                             password='Developer123!',
                             database='lab_ing_software',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

nombres=["Yexalen", "Erika", "Eduardo", "Alan", "Cesar", "Kenia", "Gabriel"]
apellidos=["Garcia", "Martínez", "López", "Garduño", "Arellano", "Salgado"]
pelis=["Ratatouille", "Up", "Lalaland", "About Time", "Monsters Inc.", "Orgullo y Prejuicio"]
generos=["Rom-com", "Animada", "Romantica", "Acción"]

def ingresa():
    with connection:
        with connection.cursor() as cursor:

            nombre=random.choice(nombres)
            apPat=random.choice(apellidos)
            apMat=random.choice(apellidos)
            email=str(random.randint(100,9999999999999))+ "@gmail.com"
            sqlu = "INSERT INTO `usuarios` ( `nombre`, `apPat`, `apMat`, `password`, `email`, `profilePicture`,`superUser`) VALUES (%s, %s,%s,%s,%s,%s,%s)"
            cursor.execute(sqlu, (nombre, apPat, apMat, 'hola123', email, '12345678910', '1'))
            idUsuario=cursor.lastrowid

            pelicula=random.choice(pelis)
            genero=random.choice(generos)
            sqlp = "INSERT INTO `peliculas` ( `nombre`, `genero`, `duracion`, `inventario`) VALUES (%s, %s,%s,%s)"
            cursor.execute(sqlp, (pelicula, genero, '2', '5'))
            idPeli=cursor.lastrowid

            sqlr = "INSERT INTO `rentar` (`idUsuario`, `idPelicula`, `fecha_renta`, `dias_de_renta`, `estatus`) VALUES (%s, %s,%s,%s,%s)"
            cursor.execute(sqlr, (idUsuario, idPeli, datetime.now(), 5, 0))
        
        connection.commit()

def filtra(apellido):
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT `idUsuario`, `nombre`, `apPat`, `apMat` FROM `usuarios` WHERE `apPat` LIKE %s OR `apMat` LIKE %s"
            cursor.execute(sql, (f"%{apellido}",))
            result = cursor.fetchall()
        return result

def updatePeli(peli,gen):
    with connection:
        with connection.cursor() as cursor:
            sql = "UPDATE `peliculas` SET `gen` = %s WHERE `peli` = %s"
            cursor.execute(sql, (gen, peli))
        connection.commit()


def borraRentas():
    with connection.cursor() as cursor:
        limite = datetime.now() - timedelta(days=3)
        formatted_limit = limite.strftime("%Y-%m-%d")
        cursor.execute(
            "DELETE FROM `rentar` WHERE `fecha_renta` < %s",
            (formatted_limit,)
        )

    connection.commit()
