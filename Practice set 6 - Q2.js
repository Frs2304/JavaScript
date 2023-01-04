// Practice Set 6 - Q2
let age = prompt("Enter your age : ")
let n = Number.parseInt(age)
let runAgain = true
while (runAgain) {
    if (n < 18) {
        console.log("You cannot drive!")
    }
    else {
        console.log("You can drive :)")
    }
    runAgain = confirm("Do you want to Enter age again?")
}