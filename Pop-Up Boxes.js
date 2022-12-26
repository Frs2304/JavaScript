// alert box
alert("Enter the value of a!")
// prompt can also have a default value
let a = prompt("Enter a here" , "23")
a = Number.parseInt(a)
document.write(a)
//confirm box
let write = confirm("Do you want to proceed?")
if(write){
    document.write(a)
}
else{
    document.write("You cannot proceed!")
}
