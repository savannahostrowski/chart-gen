var data = 0;
var w = 500;
var h = 100;
var padding = 2;
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr ("height", h);
 //toggle to select chart type


function submitdata(frm){
	data = frm.dataBox.value.split(',');
	for (var i=0; i < data.length; i++){
		data[i] = +data[i];
	}
	console.log('The data used is ' + data);
	barChart();
}

function colourSelect(){
  var cw = Raphael.colorwheel($("#colourSelect .colorwheel")[0],150),
      onchange_el = $("#colourSelect .onchange"),
      ondrag_el = $("#colourSelect .ondrag");
      cw.color("#F00");

  function start(){ondrag_el.show()}
  function stop(){ondrag_el.hide()}

  cw.ondrag(start, stop);
  cw.onchange(function(color)
    {
      var colors = [parseInt(color.r), parseInt(color.g), parseInt(color.b)]
      onchange_el.css("background", color.hex).text("RGB:"+colors.join(", "))
    })

}
//submit data
	// error for numbers in pie unless fraction/percent
	//bar,scatter, line -> numbers

//bar function
function barChart() {
	drawBars(data);
	drawLabelsBar(data);
}

function drawBars(){
	// i is the index/position of element, d is the dataset being passed in
	svg.selectAll('rect')
		.data(data)
		.enter()
		.append("rect")
			.attr({
				x: function(d, i){return (i * (w / data.length));},
			 	y: function(d){return h - (d * 4);},
				width: w / data.length - padding,
				height: function(d){return (d * 4);},
				"fill": "#AA3939" //function(d){return colourPicker(d);}
			});
		}
function drawLabelsBar(){
	// labels for bar chart		
	svg.selectAll("text")
		.data(data)
		.enter()
		.append("text")
		.text (function (d) { return d;})
		.attr({
			"text-anchor":"middle",
			x: function(d, i){return i * (w / data.length) + 
				(w / data.length - padding) / 2;},
			y:function(d){return h - (d * 4) + 14;},
			"font-family": "sans-serif",
			"font-size": 12,
			"fill": "#ffffff"
		});
	}

colourSelect();

