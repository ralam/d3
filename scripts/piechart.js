(function(){
  if(typeof Display === "undefined") {
    window.Display = {};
  };

  var Piechart = Display.Piechart = function(dataset) {
    var svgWidth = 500;
    var svgHeight = 500;
    var radius = Math.min(svgWidth, svgHeight) / 2;
    var color = d3.scale.ordinal()
                  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var svg = d3.select('body').append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .append('g')
                .attr('transform', 'translate(' + svgWidth / 2 + ',' + svgHeight / 2 + ')');

    var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

    var pie = d3.layout.pie()
                .sort(null)
                .value(function(d){return d[1];});

    var graph = svg.selectAll('arc').data(pie(dataset))
      .enter()
      .append('g')
      .attr('class', 'arc');

    graph.append('path')
      .attr('d', arc)
      .style("fill", function(d) { return color(d.data[0]); });

    var text = graph.append('text')
      .attr('transform', function(d) {return 'translate(' + arc.centroid(d) + ')';})
      .attr('dy', '.35em')
      .style("text-anchor", "middle")
      .text(function(d) {return d.data[0];});
  };

  Piechart.prototype.rerender = function(dataset) {
    var svgWidth = 500;
    var svgHeight = 500;
    var radius = Math.min(svgWidth, svgHeight) / 2;
    var color = d3.scale.ordinal()
                  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var svg = d3.select('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .append('g')
                .attr('transform', 'translate(' + svgWidth / 2 + ',' + svgHeight / 2 + ')');

    var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

    var pie = d3.layout.pie()
                .sort(null)
                .value(function(d){return d[1];});

    var graph = svg.selectAll('arc').data(pie(dataset))
      .enter()
      .append('g')
      .attr('class', 'arc');

    graph.append('path')
      .attr('d', arc)
      .style("fill", function(d) { return color(d.data[0]); });

    var text = graph.append('text')
      .attr('transform', function(d) {return 'translate(' + arc.centroid(d) + ')';})
      .attr('dy', '.35em')
      .style("text-anchor", "middle")
      .text(function(d) {return d.data[0];});
  };

})();
