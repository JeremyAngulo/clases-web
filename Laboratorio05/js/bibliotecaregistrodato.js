var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var tbRegistro=document.getElementById("tbRegistro");

// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

function Mostrar(){
    var db = datbase.ref().child('registro');
    db.once("value").then(function(snapshot){
        snapshot.forEach(function(data){
            var nom=data.val().nombre;
            var ape=data.val().apellido;
            var cor=data.val().correo;
        })
    })
}


function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese su nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingresa su apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        
        var db=database.ref('registro');

        var registros=db.push();

        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
    }
}

btnRegistrar.addEventListener("click",Registrar);