$(document).ready(function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 70;
    var start = 0;
    var end = 0.5;
    var counterClockwise = false;
    var colours = ['#303f9f','#f50057','#ffab00','#00bfa5']

    function drawSegmentCircle() {
        for (i = 0; i < 4; i++) {
        	startAngle = start * Math.PI;
        	endAngle = end * Math.PI
        	for (i = 1; i < 4; i++){
      			startAngle = endAngle;
      			endAngle = (startAngle + 0.5) * Math.PI;
       		}
       		for (i = 0; i < colours.length; i++){
      			colour = colours[i];
      			console.log(colour);
      		}
            context.beginPath();
            context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            context.lineWidth = 100;
            //line colour
            context.strokeStyle = colour;
            context.stroke();
        }
    }
    drawSegmentCircle();
});


