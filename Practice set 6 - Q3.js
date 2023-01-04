// Practice Set 6 - Q3
// Use console.error to display error if the entered age is negative
let age = prompt("Enter your age : ")
let n = Number.parseInt(age)
let runAgain = true
while (runAgain) {
    let age = prompt("Enter your age : ")
    let n = Number.parseInt(age)
    if (n < 18) {
        console.log("You cannot drive!")
    }
    else if(n<0){
        console.error("Age cannot be negative")
        break;
    }
    else {
        console.log("You can drive :)")
    }
    runAgain = confirm("Do you want to Enter age again?")
}