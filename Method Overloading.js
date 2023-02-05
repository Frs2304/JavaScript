class Employee {
    login(){
        console.log("Employee has logged in");
    }
    logout(){
        console.log("Employee has logged out");
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}
class Programmer extends Employee {
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(5)
            console.log("One extra is granted");
    }
}
let e = new Programmer();
e.login();
e.logout();
e.requestCoffee(5);
e.requestLeaves(6);
