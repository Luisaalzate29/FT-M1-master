# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);//5   incorrecta  - correcta 8 porque al invocar la funcion abajo se le dio variables a cada una c(8, 9, 10)
   var f = function (a, b, c) {
      b = a;
      console.log(b);//5 incorrecta - correcta 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);// 10   incorrecta - correcta 9
};
c(8, 9, 10);
console.log(b);//9  incorrecta   - correcta 10
console.log(x);//10 incorrecta   - correcta 1
```

```javascript
console.log(bar);//Undefined
console.log(baz);//error no esta definida, porque no se definio a baz dentro tipo de variable (var-let o const)
foo();// automaticamente js sube la funcion y de esta forma se puede invocar la funcion, a diferencia de las variables no lo hace js. Por eso sale undefinet
function foo() {
   console.log('Hola!'); //Hola
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor);//Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//Franco  contexto de la funcion
   }
})();
console.log(instructor);//Tony   contexto global
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);//The Flash
   console.log(pm);//Reverse Flash
}
console.log(instructor);//Tony
console.log(pm);//Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // 6/3
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5 //$9   incorrecta-correcta $45
"4" - 2 //2
"4px" - 2 // 2xp incorrecta  -correcta NaN
7 / 0  // error incorrecto - correcto Infinity
{}[0] // objeto con array cero - length 1
parseInt("09") // 9 
5 && 2 // 5
2 && 5 // 2
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] //23
3>2>1 // 3>2 = true luego true>1 =false
[] == ![] // no entiendo la respuesta 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  // 2 - lo que entiendo es que como el console de (a) esta arriba de la variable definida de a, no trae
// a la consola ese valor; el resultado es 2 porque la funcion pide return para la funcion foo , y aunque 
//este definida antes de la accion del retur, esta se sale y al invocar la funcion con el console foo retorna 2.
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // yo pienso que al retornar snack me trae Meow Mix, pues me dice que la funcion getFood 
//es falsa, es decir que no es food, por lo que si es falsa me trae el resultado de la variable.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // returna : Aurelio de Rosa dado que esta prinicpalmente dentro de prop y prop esta dentro de Obj.

var test = obj.prop.getFullname;

console.log(test()); // se define otro objeto el cual tiene como nombre test y una value el cual es otro objeto que contiene una funcion getfllname la cual retorna ths.fullname. Por lo que al buscar fullname dentro no lo encuentra, sale y encuenta a fullname q es una variable y retorna esta como this de este objeto.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // No se cual es la respuesta -- la respuesta de la consola es 1 4 y luego 3 2. la funcion setTimeout le da la orden a la consola de que se demore 1000 seg para imprimir el valor 2 y lo mismo con 0 ceero para imprimir el valor de 3. Aunque primero imprime el 3 luego el 2. y antes de estos primero se imprime el 1 y luego el 4. luego lo mencionado.
```
