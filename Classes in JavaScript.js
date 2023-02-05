class RailwayForm {
    submit() {
        alert("form submitted");
    }
    cancel(){
        alert("This form is cancelled");
    }
}

let tushar = new RailwayForm();
let yash = new RailwayForm();

tushar.submit();
yash.submit();
yash.cancel();
