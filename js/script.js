

var currentPlayer="X";

var numberOfTurns=0
var isGameOver=false;
function performLogic(buttonId,tileId){
    console.log(tileId);
    $(buttonId).hide();

    console.log("currentPlayer", currentPlayer);
    $(tileId).text(currentPlayer);

    //creates an x or o
    //remove the button 
    //identify the next players turn
    playerTwo();
    addOneToNumberOfTurns();



    //check if there is a win or a draw
}
function playerTwo(){
    if( currentPlayer==="X"){
    currentPlayer ="O"

    }
    else if( currentPlayer==="O"){
        currentPlayer="X"
    }
}

function addOneToNumberOfTurns() {
  numberOfTurns = numberOfTurns+1

  if(numberOfTurns===9){
    $("h1").text("Its a draw!") ;
    isGameOver=true; 
  }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
