function rock(){
    var computerInput=Math.floor(Math.random() * 3);

    if(computerInput==0){
        document.getElementById("demo").innerHTML = "You picked Rock, computer picked Rock = DRAW!";    
    }
    
    else if(computerInput==1){
        document.getElementById("demo").innerHTML = "You picked Rock, computer picked Paper = Paper Covers Rock, you lost";    
    }
    
    else if(computerInput==2){
        document.getElementById("demo").innerHTML = "You picked Rock, computer picked Scissors = Rock beats scissors you WIN!";    
    }   
}

function paper(){
    var computerInput=Math.floor(Math.random() * 3);

    if(computerInput==0){
        document.getElementById("demo").innerHTML = "You picked Paper, computer picked Rock = Paper beats Rock, you WIN!";    
    }
    
    else if(computerInput==1){
        document.getElementById("demo").innerHTML = "You picked Paper, computer picked Paper = DRAW!";    
    }
    
    else if(computerInput==2){
        document.getElementById("demo").innerHTML = "You picked Paper, computer picked Scissors = Scissors beats Paper you LOST!";    
    }   
}

function scissors(){
    var computerInput=Math.floor(Math.random() * 3);

    if(computerInput==0){
        document.getElementById("demo").innerHTML = "You picked Scissors, computer picked Rock = Rock beats Scissors, you LOST!";    
    }
    
    else if(computerInput==1){
        document.getElementById("demo").innerHTML = "You picked Scissors, computer picked Paper = Scissors beats Paper, you WIN!";    
    }
    
    else if(computerInput==2){
        document.getElementById("demo").innerHTML = "You picked Scissors, computer picked Scissors = DRAW";    
    }   
}



/*

    var email = document.getElementById("email").value;
    let x = name + " thank you for your details. We will be in touch via "+email + " shortly.";
    document.getElementById("demo").innerHTML = x;    //
    document.getElementById("myForm").style.display= "none";   //hiding the form
    alert(x);
*/

