// Practice Set 5 - Q3
// Filter for numbers divisible by 10 from a given array
let arr = [11,30,50,230,75,83,7]
let n = arr.filter((x)=>{
    return x%10 == 0
})
console.log(n)