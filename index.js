var value_array = [];
//query database for some interesting weather data
function getWx() {      
  $.getJSON( "wx.php", function (returnedJSON) {
    var i = 0;
    $.each(returnedJSON, function (index, value) {
//  vars 1 & 3 are whole number humidity values, so don't need precision
// also, indexes (index) provided by dbase and returned in JSON are iterated through (each) but otherwise unused
      if (!(i == 1 || i == 3))             
        value = Number(value).toFixed(1);
      value_array[i] = value;
      $("#v" + i).html(value_array[i]);
	    i++;
    });
  });
  move();
}
$(document).ready(function(){
  setInterval(getWx, 5000);
  getWx();
  $( "#lampButton" ).click(function(){
    $("#display").toggleClass('lit');
    });
  $( "#heat" ).click(switchVar);
});

function switchVar() {
  if ( $("#heat").html() == "HEAT INDEX" ) {
    $("#heat").html("DEW POINT");
    $("#v5").attr("id", "v6");
    $( "#v6" ).html(value_array[6]);
  }
  else {
    $("#heat").html("HEAT INDEX");
    $("#v6").attr("id", "v5");
    $( "#v5" ).html(value_array[5]);
  }
}
function move() {
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      $("#progressBar").width(width + '%'); 
    }
  }
}