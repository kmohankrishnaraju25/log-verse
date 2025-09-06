let a=60
if(a>50){
    console.log("a is greater than 50")
}
else if(a==50){
    console.log("a is equal to 50")
}   
else{
    console.log("a is less than 50")
}
// switch case
let day=3
switch(day){
    case 1: 
        console.log("Monday")
        break
    case 2: 
        console.log("Tuesday")
        break
    case 3: 
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day") 
        break
}
// for loop
for(let i=1;i<=5;i++){
    console.log(i)
}   
// while loop
let j=6
while(j<=10){
    console.log(j)
    j++
}
//` do while loop
let k=11
do{
    console.log(k)
    k++
}while(k<=15)
let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(let b of arr){
    console.log(b)
}
let obj={
    name: "mohan",
    age: 18,
    city: "bangalore"
}
for(let key in obj){
    console.log( `${key}: ${obj[key]}`)
}