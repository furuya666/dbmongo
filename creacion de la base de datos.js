conn = new Mongo();
db = conn.getDB("Niños_Adopcion");
 db.createUser(
     {
         user: "Gary",
         pwd: "123456",
         roles: [ { role: "readWrite", db: "Niños_Adopcion" } ]
     }
 );
db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [ { role: "dbAdmin", db: "Niños_Adopcion" } ]
    }
);
db.niño.insert([
    { _id: "1", Nombre: "Gina", Apellido_Paterno: "Greenholt", Apellido_Materno: "Mamani",Edad:5,Estatura:1.30,Peso:40},
    { _id: "2", Nombre: "Judah", Apellido_Paterno: "Runolfsson", Apellido_Materno: "Quispe",Edad:6,Estatura:1.30,Peso:35 },
    { _id: "3", Nombre: "Kristofer", Apellido_Paterno: "Schmeler", Apellido_Materno: "Condori",Edad:4,Estatura:1.28,Peso:30 },
    { _id: "4", Nombre: "Gabriela", Apellido_Paterno: "Abernathy", Apellido_Materno: "Cortez" ,Edad:3,Estatura:1.20,Peso:30}
   
  
]);
db.padre_adoptivo.insert([
    { _id: "1", Nombre_Padre: "Marcos", Apellido_P_Padre: "Greenholt", Apellido_M_Padre: "Mamani", CI_Padre:"111111",Nombre_Madre: "Maria", Apellido_P_Madre: "Greenholt", Apellido_M_Madre: "Mamani", CI_Madre:"11111100"},
    { _id: "2", Nombre_Padre: "Kevin", Apellido_P_Padre: "Runolfsson", Apellido_M_Padre: "Quispe", CI_Padre:"112222",Nombre_Madre: "Martha", Apellido_P_Madre: "Gomez", Apellido_M_Madre: "Mamani", CI_Madre:"111111999" },
    { _id: "3", Nombre_Padre: "Carlos", Apellido_P_Padre: "Schmeler", Apellido_M_Padre: "Condori", CI_Padre:"1223332",Nombre_Madre: "Marcela", Apellido_P_Madre: "Velarde", Apellido_M_Madre: "Mamani", CI_Madre:"122222" },
    { _id: "4", Nombre_Padre: "Raul", Apellido_P_Padre: "Abernathy", Apellido_M_Padre: "Cortez" , CI_Padre:"1114444",Nombre_Madre: "Gabriela", Apellido_P_Madre: "Greenholt", Apellido_M_Madre: "Mamani", CI_Madre:"3333333"}
]);
db.cita_programada.insert( { _id: "1", niño: "1",padre_adoptivo:"2" });

db.cita_programada.insert( { _id: "2",niño: "3",padre_adoptivo:"4" } );

