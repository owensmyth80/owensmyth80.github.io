/* script by Owen Smyth, the 1st if is to count the amount of illegal characters found in the textBox, if there are characters found then the form does not complete. 
This is an example of how to limit risk of code injection but as there is no database being used it is only an example of what i'd implement if the data was being submitted to a db*/
function myJsContactUsFuntion(){
    let name = document.getElementById("nameField").value;
    let textBox = document.getElementById("message").value;
    var email = document.getElementById("emailField").value;
    let x = name + " Thank you for your details. We will be in touch via "+email + " shortly.";
    let count = 0;
    
    for(i=0;i<textBox.length;i++){

        if (textBox[i] =="*" || textBox[i] == "(" || textBox[i] == ")" || textBox[i] == "{" || textBox[i] == "}" || textBox[i] == "=" || textBox[i] == "[" || textBox[i] == "]"){  //checking for characters not allowed
            count++;   //counting characters found
        }
    } 

    if(count == 0){
        document.getElementById("myReturn").innerHTML = x;    //returning to html the value of X , feedback to uer form is completed
        document.getElementById("contactUsForm").style.display= "none";   //hiding the form after submission
        return;
    }
    else{
        alert("Form entry blocked, due to illegal character entries. \n *()[]{}= are not permitted!! \n We found " +count + " of these. \n Try again without any of these characters");  //notifying the user why form blocked
        return;
    }
} 

