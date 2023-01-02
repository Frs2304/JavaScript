// Practice set 5 - Q5
// Use reduce function to calculate the factorial of the given numbers of the array
let arr = [1,2,3,4,5]
let n = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)