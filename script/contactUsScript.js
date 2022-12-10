function myJsContactUsFuntion(){
    let name = document.getElementById("nameField").value;
    let textBox = document.getElementById("message").value;
    var email = document.getElementById("emailField").value;
    let x = name + " Thank you for your details. We will be in touch via "+email + " shortly.";
    let count = 0;
    
    for(i=0;i<textBox.length;i++){

        if (textBox[i] =="*" || textBox[i] == "(" || textBox[i] == ")" || textBox[i] == "{" || textBox[i] == "}" || textBox[i] == "=" || textBox[i] == "[" || textBox[i] == "]"){
            count++;
        }
    } 

    if(count == 0){
        document.getElementById("myReturn").innerHTML = x;    //
        document.getElementById("contactUsForm").style.display= "none";   //hiding the form
        return;
    }
    else{
        alert("Form entry blocked, due to illegal character entries. \n *()[]{}= are not permitted!! \n We found " +count + " of these. \n Try again without any of these characters");
        return;
    }
} 

