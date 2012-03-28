var svg = d3.select("body")
  .append("svg")
    .attr("width", 150)
    .attr("height", 150);

// rect: http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html

var data = [
  {"x": 62, "y": 25, "height": 110, "width": 16, fill: "rgb(100%, 50%, 50%)"},
  {"x": 35, "y": 35, "height":  30, "width": 50, fill: "red"},
  {"x":  5, "y": 60, "height":  30, "width": 50, fill: "#f88"},
  {"x": 25, "y": 70, "height":  30, "width": 50, fill: "#ff8888"},
  {"x": 65, "y": 60, "height":  30, "width": 50, fill: "#eac"},
  {"x": 85, "y": 70, "height":  30, "width": 50, fill: "#eeaacc"},
  {"x": 55, "y": 95, "height":  30, "width": 50, fill: "rgb(255, 0, 0)"}
];

svg.selectAll("rect")
    .data(data)
  .enter().append("rect")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("height", function(d) { return d.height; })
    .attr("width", function(d) { return d.width; })
    .style("fill", function(d) { return d.fill; })
    .attr("stroke-width", 2)
    .attr("stroke", "#222");
