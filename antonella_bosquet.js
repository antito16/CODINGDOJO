function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//Qué indicará console.log cuando se llame a esta función?
//el año en que nacio o el que puso.

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
//Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log?

//naci en 1980

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
//resultado 30