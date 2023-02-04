class RailwayForm {
    constructor(givvenname,trainno,address){
        console.log("Constructor Called")
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    submit() {
        alert("form submitted")
    }
    cancel(){
        alert("This form is cancelled")
    }
}

let tushar = new RailwayForm()
let yash = new RailwayForm()

tushar.submit()
yash.submit()
yash.cancel()