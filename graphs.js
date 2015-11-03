(function() {
  var dataset = [];
  var height = 50;
  var width = 500;
  for(var i = 0; i < 5; i++) {
    dataset.push(Math.ceil(Math.random() * 10));
  };

  var svg = d3.select('body').append('svg')
              .attr('width', width)
              .attr('height', height);

  var circles = svg.selectAll('circle').data(dataset)
    .enter()
    .append('circle');

  circles.attr("cx", function(d, i) {return (i * 50) + 25;})
    .attr('cy', height/2)
    .attr('r', function(d) {return d;});
})();
