(function() {
  var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

  var svgWidth = 500;
  var svgHeight = 500
  var svg = d3.select('body').append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight)

  svg.selectAll('circle').data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d){return d[0]})
    .attr('cy', function(d){return d[1]})
    .attr('r', 5);
})();
