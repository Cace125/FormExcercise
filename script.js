let tabla = [];
let persona = [];


function Persona(fname,lname,weight,dob) {
    this.fname = fname;
    this.lname = lname;
    this.weight = weight;
    this.dob = dob;

    persona.push(fname,lname,weight,dob);
    tabla.push(
        {nombre:persona[0],apellido:persona[1],peso:persona[2],fecha:persona[3]}
        );
    persona = [];
}

function registrar() {
    var nombres=document.getElementById("fname").value;
    var apellidos=document.getElementById("lname").value;
    var peso=document.getElementById("weight").value;
    var fnacimiento=document.getElementById("dob").value;

    if (nombres == "" || apellidos == "" || peso == "" || fnacimiento == "") {
        alert("Por favor llenar todos los campos");
    } else {
        console.log(nombres,apellidos,peso,fnacimiento);
        Persona(nombres,apellidos,peso,fnacimiento);

        console.log(tabla);

        document.getElementById("tablaPersonas").innerHTML = crearTabla(tabla);

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("dob").value = "";
    }
    
}

let crearTabla = function(lista){
    let stringTabla = "";
    for(let person of lista){
        let fila = "<td>";
        fila += person.nombre;
        fila += "</td>";

        fila += "<td>";
        fila += person.apellido;
        fila += "</td>";

        fila += "<td>";
        fila += person.peso;
        fila += "</td>";

        fila += "<td>";
        fila += person.fecha;
        fila += "</td>";

        stringTabla += fila;
    }

    return stringTabla;
}