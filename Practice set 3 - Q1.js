// Practice Set 3 - Q1
// Print marks of student using for loop
let marks = {
    Tushar: 90,
    Yash: 95,
    Lovish: 56,
    Harry: 71
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " +marks[Object.keys(marks)[i]])
}