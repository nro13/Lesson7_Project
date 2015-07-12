//Program Name: Recipe Display Application 

//Author: Nicholas Orluski

//Date: 7/12/15

//Filename: script.js


function display(event){

    $(event.currentTarget).next().fadeIn("slow");

}//end of display()

$("h3").click(display);