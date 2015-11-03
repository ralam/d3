(function() {
  var dataset = [];
  for(var i = 0; i < 25; i++) {
    dataset.push(Math.ceil(Math.random() * 30));
  };

  d3.select('body').selectAll('p').data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) {return d * 5 + "px"})
    .style('margin-right', '2px');
})();
