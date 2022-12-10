function myJsContactUsFuntion(){
    let name = document.getElementById("nameField").value;
    let textBox = document.getElementById("message").value;
    var email = document.getElementById("emailField").value;
    let x = name + " Thank you for your details. We will be in touch via "+email + " shortly.";
//    var nameArray = [document.getElementById("nameField")];    this isn't needed as i can loop already to check for the illegal characters
    let count = 0;
    //    nameArray = name;

    for(i=0;i<textBox.length;i++){

        if (textBox[i] =="*" || textBox[i] == "(" || textBox[i] == ")" || textBox[i] == "{" || textBox[i] == "}" || textBox[i] == "=" || textBox[i] == "[" || textBox[i] == "]"){
//            alert("bad entry");
            count++;
        }
//        else{
//            alert("OK Entry")
//       }
//        alert(count);

    } 

//    alert(count);   //  checking that count keeps the cout out of the loop 


    if(count == 0){
        document.getElementById("myReturn").innerHTML = x;    //
        document.getElementById("contactUsForm").style.display= "none";   //hiding the form
//        alert(x);
        return;
    }
    else{
        alert("Form entry blocked, due to illegal character entries. \n *()[]{}= are not permitted!! \n We found " +count + " of these. \n Try again without any of these characters");
        return;
    }
} 
    /*       else{
            document.getElementById("myReturn").innerHTML = x;    //
            document.getElementById("contactUsForm").style.display= "none";   //hiding the form
            alert(x);
        }
        }
    }
/*
    let x = name + " thank you for your details. We will be in touch via "+email + " shortly.";
    document.getElementById("myReturn").innerHTML = x;    //
    document.getElementById("contactUsForm").style.display= "none";   //hiding the form
    alert(x);
*/
