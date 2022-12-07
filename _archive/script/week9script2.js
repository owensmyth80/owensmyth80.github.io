function grades(){
    var userInput; 
    userInput=document.getElementById("number").value;
    var myGrades;


    //looping to userInput from html , gooing +1
    for(i=0;i<userInput;i++){
        var myGrades=prompt("What did you get in class "+(i+1));
          if(myGrades >= 80 && myGrades <= 100){
            alert("that is an A")
          }
          else if(myGrades >= 70 && myGrades < 80){
            alert("that is an B")
          }
          else if(myGrades >= 60 && myGrades < 70){
            alert("that is an C")
          }
          else if(myGrades >= 40 && myGrades < 60){
            alert("that is an D")
          }
          else if(myGrades >= 0 && myGrades < 40){
            alert("that is an Fail")
          }
          else{
            alert("invalid input")
          }
      //  document.getElementById("demo").innerHTML+="<br/>"+i+" ";    
    }

    //ouputing last 2 lines that have unique values


}


