function myJsAboutUsFuntion(){
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    let x = name + " thank you for your details. We will be in touch via "+email + " shortly.";
    document.getElementById("demo").innerHTML = x;    //
    document.getElementById("myForm").style.display= "none";   //hiding the form
    alert(x);
}
