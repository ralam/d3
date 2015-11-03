(function() {
  var dataset = [];
  var svgHeight = 100;
  var svgWidth = 500;
  var barPadding = 1;
  for(var i = 0; i < 25; i++) {
    dataset.push(Math.ceil(Math.random() * 30));
  };

  var svg = d3.select('body').append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight);

  var bars = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {return i * (svgWidth / dataset.length);})
    .attr('y', function(d) {return svgHeight - d * 4;})
    .attr('fill', 'steelblue')
    .attr('width', svgWidth / dataset.length - barPadding)
    .attr('height', function (d) {return d * 4;});
})();
