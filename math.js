// type_1
function greet(){
    console.log("Hello, World!");
}
greet();
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
// type_2
console.log("Sum:", sum);
let subtract = function(a, b) {
    return a - b;
}
console.log("Difference:", subtract(10, 5));
const multiply = function(a, b) {
    return a * b;
}
console.log("Product:", multiply(5, 10));
// type_3
const divide = (a, b) =>{
    console.log(a,b)
    return a / b
}
console.log("Quotient:", divide(10, 2)); 
