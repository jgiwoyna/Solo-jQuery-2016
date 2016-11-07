var redCubeCount = 0,
    yellowCubeCount = 0,
    greenCubeCount = 0,
    blueCubeCount = 0,
    pickedColor = "";

$(document).ready(function(){
  $("#color-button").on("click", function (){

  function addCube() {
    $(".container").append('<div class="color-cube ' + pickedColor + '"></div>'); //add a div to the DOM
  }


});
})
