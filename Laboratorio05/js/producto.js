// creamos un vector para el producto
var producto=[];
// creamos un procedimiento para registrar
// categoria se va a registrar de un Combobox -> select
// categoria: Entretenimiento, tecnologia, linea blanca
function Registrar(nomproducto, preproducto, catproducto, canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    registro.push(NuevoProducto);
}
// creamos una funcion para obtener los valores del registro
function Mostrar(){
    return producto;
}