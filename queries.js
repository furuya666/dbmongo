﻿//Creando mis collections
db.createCollection("niño");
db.createCollection("padre_adoptivo");
db.createCollection("cita_programada");
//Para hacer un listado de mis documnetos de mis collections de mi base de datos
db.niño.find();
db.cita_programada.find();
db.padre_adoptivo.find();
//Para modificar los datos de los niños 
//Por ejemplo modificando la edad del niño con _id=2
db.niño.update({_id:"2"},{$set:{Edad:6}});
//Para eliminar de la lista aun niño ya adoptado
//En este caso se eliminra al niño con el  _id=1
db.niño.deleteOne({_id:"2"});




