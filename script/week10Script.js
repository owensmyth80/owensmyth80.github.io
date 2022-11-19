function grades(){
    var userInput; 
    userInput=document.getElementById("number").value;
    var myGrades;
  // var count=0;
    let myArray=[];
    var total=0;



    //populating the array first going +1
    for(i=0;i<userInput;i++){
        myArray[i]= myGrades=prompt("What did you get in class "+(i+1));
        
      }


      //looping array for output to html with grade result 

      for(i=0;i<myArray.length;i++){

        if(myArray[i] >= 80 && myArray[i] <= 100){
          document.getElementById("demo").innerHTML+="<br/>"+myArray[i]+" that is an A";
        }
        else if(myArray[i] >= 70 && myArray[i] < 80){
          document.getElementById("demo").innerHTML+="<br/>"+myArray[i]+" that is an B";
        }
        else if(myArray[i] >= 60 && myArray[i] < 70){
          document.getElementById("demo").innerHTML+="<br/>"+myArray[i]+" that is an C";
        }
        else if(myArray[i] >= 40 && myArray[i] < 60){
          document.getElementById("demo").innerHTML+="<br/>"+myArray[i]+" that is an D";
        }
        else if(myArray[i] > 0 && myArray[i] < 40){
          document.getElementById("demo").innerHTML+="<br/>"+myArray[i]+" that is an FAIL";
        }
        else{
          alert("invalid input")
        
      }

    }
    for(i=0;i<myArray.length;i++){
      total+= +myArray[i];    //had to use the + in front of the array here to coerces string to number!!! as it was outputting the result as a string and not adding
  }
  average = total/myArray.length;
  document.getElementById("demo").innerHTML+="<br/> Your Grade Average based on taking "+myArray.length+ " classes equals to "+average;
}
     /*   



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
          else if(myGrades < 40 && myGrades < 50){
            alert("that is an Fail")
          }
          else{
            alert("invalid input")
          }
      //  document.getElementById("demo").innerHTML+="<br/>"+i+" ";    
    }

    //ouputing last 2 lines that have unique values

*/