function song(){
    var x="bottles of beer on the wall,";
    var y="bottle";
    var i=99;
    //looping only to >3, as the last 2 lines have unique values, ie.  bottle and the text
    for(i=99;i>=3;i--){
        document.getElementById("demo").innerHTML+="<br/>"+i+" "+x+ " "+i+" bottles of beer, Take one down and pass it around " +(i-1)+" "+x+"";    
    }

    //ouputing last 2 lines that have unique values
    document.getElementById("demo").innerHTML+="<br/> 2 bottles of beer on the wall, 2 bottles of beer take one down and pass it around, 1 bottle of beer on the wall,";
    document.getElementById("demo").innerHTML+="<br/>  No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall";
        

}


