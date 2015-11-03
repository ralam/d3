(function() {
  var dataset = [];
  for(var i = 0; i < 25; i++) {
    var x = Math.round(Math.random() * 1000);
    var y = Math.round(Math.random() * 1000);
    dataset.push([x, y])
  };

  var padding = 40;
  var svgWidth = 500;
  var svgHeight = 500;
  var svg = d3.select('body').append('svg')
              .attr('width', svgWidth)
              .attr('height', svgHeight)

  var xScale = d3.scale.linear()
                  .domain([0, d3.max(dataset, function(d) {return d[0];})])
                  .range([padding, svgWidth - padding]);
  var yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset, function(d) {return d[1];})])
                  .range([svgHeight - padding, padding])

  var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient('bottom');
  var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient('left');

  svg.selectAll('circle').data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d){return xScale(d[0])})
    .attr('cy', function(d){return yScale(d[1])})
    .attr('r', 5);


  svg.selectAll('text').data(dataset)
    .enter()
    .append('text')
    .text(function(d) {return d[0] + "," + d[1]})
    .attr('x', function(d) {return xScale(d[0])})
    .attr('y', function(d) {return yScale(d[1])})
    .attr('class', 'scatter-labels');

  svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0, '+ (svgHeight - padding) + ')')
      .call(xAxis);

  svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate('+ (padding) + ', 0)')
      .call(yAxis);
})();
