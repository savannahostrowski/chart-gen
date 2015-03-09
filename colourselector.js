$(document).ready(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 70;
    var start = 0;
    var end = 0.5;
    var counterClockwise = false;
    var colours = ['#303f9f', '#f50057', '#ffab00', '#00bfa5'];

    function drawSegmentCircle() {
        startAngle = start * Math.PI;
        endAngle = end * Math.PI;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = 100;
        //line colour
        context.strokeStyle = colours[0];
        context.stroke();

        var SEGMENTS = 4;
        var FULL_CIRCLE = 2 * Math.PI;
        // First, determine what angle each segment will be (like, how big)
        // then we can just bump this up by one for each iteration.
        // In this case, each segment will have angle Math.PI / 2
        var segmentAngle = FULL_CIRCLE / SEGMENTS;
        for (var i = 0; i < SEGMENTS; ++i) {
            var startAngle = segmentAngle * i;
            var endAngle = startAngle + segmentAngle;
            // Draw()
            context.beginPath();
            context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            context.lineWidth = 100;
            //line colour
            context.strokeStyle = colours[i];
            context.stroke();
        }
    }        

    drawSegmentCircle();

});