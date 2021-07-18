// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        // declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonombre=fila.insertcell(0);
        var tituloapellido=fila.insertcell(1);
        var titulocorreo=fila.insertcell(2);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloapellido.innerHTML=listaregistro[i].apellido;
        titulocorreo=innerHeight=listaregistro[i].correo;
        tbody.appendchild(fila);
    }
}
// creamos un precedimiento para registrar los datos
function registroDatos(){
    // capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    // llamamos al precedimiento Registrar
    Registrar(nom,ape,cor);
    MostrarRegistro();
}
// agregamos un evento al boton
// btnRegistrar.addEventListener("click",function(){
    // alert("Hola");
// }
// agregamos el evento al boton
btnRegistrar.addEventListener("click",RegsitrarDatos);