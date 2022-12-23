let num = [1,2,3,4,5]
// this function converts an array into string
let b = num.toString()
console.log(b)
// this function joins an additional keywords between the strings
let c = num.join(" and ")
console.log(c)
// typeof is used to return the type of element
console.log(typeof c)
// pop removes the last element
num.pop()
console.log(num)
// push adds a new element to the end of the array
let d = num.push(6)
console.log(num);
// shift removes the elements from the beginning of the array
let e = num.shift(1)
console.log(num)
// unshift is used to add an element at the beginning of the array
let f = num.unshift(1)
console.log(num)
