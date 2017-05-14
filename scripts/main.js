

$(document).ready(function() {

  //declare the variables globally 
  var boxCountW = 16;
  var boxCountH = 16;
  

  

  var makeBlock = function() {
    //boxcount lets us set how many times we want the for loop to run...when we change the columns/rows later this variable will be updated
    var boxSize = boxCountW * boxCountH;
  //
    for (var i = 0; i < boxSize; i++) { //loop through each box
    //any code you place in here will execute each time we loop around
      $('.container').append("<div class='block'></div>");
    }
    //we only want to declare this once so we place it after the loop
    $(".block").width((500 / boxCountW)-2);
    $(".block").height((500 / boxCountH)-2);
    $('.block').mouseover(function() {
        $(this).css("background-color","blue");
      
    });
  }

  makeBlock();

$('.reset').click(function(){
$('.block').css("background-color","white");

});


$('.size').click(function(){

$('div').remove('.block');

    var squaresW = prompt("How many squares wide? (must be a number)");

    var squaresH = prompt("How many squares High? (must be a number)");
   //prompt returns a string...use parseInt to turn that number string into an integer
    boxCountW = parseInt(squaresW);
    boxCountH = parseInt(squaresH);
    makeBlock();

});

});
 




