let num = [3,23,1,2,4]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
// for each loop
num.forEach((element)=>{
    // to print square of array elements
    console.log(element*element)
})
// .from is used to create an array from any object
let name = "Tushar"
let arr = Array.from(name)
console.log(arr)
// for of loop
for(let i of num){
    console.log(i)
}
// for in loop
for(let i in num){
    console.log(i)
}
