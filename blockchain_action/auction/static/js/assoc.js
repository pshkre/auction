// custom define constants
var width = 960, centerW = 260;
var height = 480, centerH = height>>1;
var radius = [80, 160, 240];

// global funcs
var graph = d3.select("#graph")
    .attr('width', width)
    .attr('height', height);

function getGroup() {
    return graph
        .append('g')
        .attr('transform', 'translate('+ centerW +','+ centerH +')')
}

// center circle
function draw_center(disp_text) {
    var g = getGroup();

    g.append('circle')
        .style('fill', '#ff0000') // color
        .attr('r', radius[0]);

    g.append('text')
        .attr('text-anchor', 'middle')
        .attr("dy", ".35em")
        .text(disp_text);

}

// arc
function draw_arcs(data, color, innerRadius, outerRadius) {
    var arc = d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    var pie = d3.pie()
        .value(function(d) { return d.val; })
        .sort(function(d) { return d.val; });

    var g = getGroup()
        .selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d, i) { return color(i); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function(d, i) { return data[i].name; });
}
