function myJsAboutUsFuntion(){
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    let x = name + " thank you for your details. We will be in touch via "+email + " shortly.";
    document.getElementById("myReturn").innerHTML = x;    //
    document.getElementById("contactUsForm").style.display= "none";   //hiding the form
    alert(x);
}
