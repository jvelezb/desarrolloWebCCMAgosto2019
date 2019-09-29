var mensaje = "saludos a la banda";
console.log(mensaje);
var enunciado = true;
var numero = 12;
var mensaje2 = "salu2";
var numero2 = 2;
var constante = 22;
var resultado = mensaje + numero;
console.log(resultado);
var str = '2';
var numero3 = str;
var numero4 = 4;
var res = +numero3 + numero4;
console.log(res);
function funcion(id, nombre, email) {
    if (nombre === void 0) { nombre = "hola"; }
    console.log("ID", id);
    console.log("Nombre", nombre);
    if (email != undefined) {
        console.log("email", email);
    }
}
funcion(12, "juan", "juan@tec.mx");
funcion(122, "juan2");
funcion(122);
function funcion2() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var resultado = 0;
    var i;
    for (i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i];
    }
    console.log("Resultado", resultado);
    //console.log("str",strs[0]);
}
funcion2(1, 2, 3);
funcion2(2, 3, 4, 5, 6, 3, 4, 6, 3, 45, 6, 3, 2, 3);
var arr;
arr = [1, 2, 3, 4, 5, 6];
var strs = ["2", "3", "2"];
console.log(strs[0]);
var arr2 = new Array(5);
for (var i = 0; i < arr2.length; i++) {
    arr2[i] = i * 2;
}
console.log(arr2[arr2.length - 1]);
var tupla = [];
tupla[0] = "string";
tupla[1] = 1;
var tupla2 = [1, 2, "saludos"];
console.log("Tupla", tupla.length);
tupla.push(12);
console.log("Tupla", tupla.length);
tupla.pop();
console.log("Tupla despues de pop", tupla.length);
