//declaring the variables for the height and width of the grid.
var height = 0;
var width = 0;
//Now that the variables have been declared, its time to make use of the values.
//this quick function will take the values, store them, and then call the
//make grid function to create the grid in the correct size.
$('#sizePicker').submit(function (getGridSize) {
  getGridSize.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
});

//This make grid function makes use of the height and width input to build the
//grid by adding <tr>/<td> elements to act as the pixels.
function makeGrid(h, w) {
  $('tr').remove();
  for(var rowCount = 1; rowCount <= h; rowCount++) {
    $('#pixelCanvas').append('<tr id=grid' + rowCount + '></tr>');
    for (var colCount = 1; colCount <= w; colCount++) {
      $('#grid' + rowCount).append('<td></td>');
      $('td').attr('class', 'pixels');
//Down here is where is we add the function to add a listener to the Grid so it
//waits for a click from the user. It uses the colorPicker id to get the chosen
//color and then stores it in the color variable so it can change the background
//color of any element in the .pixels class.
      $('.pixels').click(function(colorPixel) {
       var color = $('#colorPicker').val();
       $(this).css('background-color', color);
      })
    }
  }
}
