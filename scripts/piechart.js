(function(){
  if(typeof Display === "undefined") {
    window.Display = {};
  };

  var Piechart = Display.Piechart = function() {
    this.svgWidth = 500;
    this.svgHeight = 500;
    this.radius = Math.min(this.svgWidth, this.svgHeight) / 2;
    this.color = d3.scale.ordinal()
                  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    this.svg = d3.select('body').append('svg')
                .attr('width', this.svgWidth)
                .attr('height', this.svgHeight)
                .append('g')
                .attr('transform', 'translate(' + this.svgWidth / 2 + ',' + this.svgHeight / 2 + ')');
  }

  Piechart.prototype.render = function(dataset) {
    var svg = d3.select('svg')
                .attr('width', this.svgWidth)
                .attr('height', this.svgHeight)
                .append('g')
                .attr('transform', 'translate(' + this.svgWidth / 2 + ',' + this.svgHeight / 2 + ')');

    var arc = d3.svg.arc()
                .outerRadius(this.radius - 10)
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
      .style("fill", function(d) { return this.color(d.data[0]); }.bind(this));

    var text = graph.append('text')
      .attr('transform', function(d) {return 'translate(' + arc.centroid(d) + ')';})
      .attr('dy', '.35em')
      .style("text-anchor", "middle")
      .text(function(d) {return d.data[0];});
  };

})();
