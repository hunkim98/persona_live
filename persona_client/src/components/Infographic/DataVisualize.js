import * as d3 from "d3";

export default function DataVisualize(
  personality,
  sum_of_personality,
  json_data,
  mask_names,
  personality_array,
  mask_raw
) {
  //this is for d3
  json_data = { children: [] };
  for (let j = 0; j < 9; j++) {
    json_data.children[j] = {
      name: mask_names[j],
      value: personality_array[j],
      id: j + 1,
    };
  }
  sum_of_personality = personality_array.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log(json_data);
  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 700 700")
    .classed("svg-content", true)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // read json data
  // d3.json("./data.json", function (data) {
  // Give the data to this cluster layout:
  var root = d3.hierarchy(json_data).sum(function (d) {
    console.log(d);
    return d.value;
  }); // Here the size of each leave is given in the 'value' field in input data

  // Then d3.treemap computes the position of each element of the hierarchy
  d3.treemap().size([width, height]).paddingInner(8)(
    // Padding between each rectangle
    //.paddingOuter(6)
    //.padding(20)
    root
  );

  var font_size = d3
    .scaleLinear()
    .domain([Math.min(...personality_array), Math.max(...personality_array)])
    .range([20, 40]);

  // use this information to add rectangles:
  let box_index = 0;

  svg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
    .attr("class", function () {
      box_index = box_index + 1;
      return "box-" + box_index; //added class for each
    })
    .attr("x", function (d) {
      return d.x0;
    })
    .attr("y", function (d) {
      return d.y0;
    })
    .attr("width", function (d) {
      return d.x1 - d.x0;
    })
    .attr("height", function (d) {
      return d.y1 - d.y0;
    })
    .style("stroke", "black")
    .style("fill", function (d) {
      if (personality === d.data.id) {
        switch (personality) {
          case 1:
            return "#FFC312";
          case 2:
            return "#FDA7DF";
          case 3:
            return "#12CBC4";
          case 4:
            return "#9980FA";
          case 5:
            return "#12CBC4";
          case 6:
            return "#FDA7DF";
          case 7:
            return "#C4E538";
          case 8:
            return "#EA2027";
          case 9:
            return "#FDA7DF";
        }
      } else {
        return "#656565";
      }
    });

  svg
    .selectAll("images")
    .data(root.leaves())
    .enter()
    .append("image")
    .attr("class", function (d) {
      return "image" + d.data.id; //added class for each
    })
    .attr("xlink:href", function (d) {
      return mask_raw[d.data.id - 1];
    })
    .attr("x", function (d) {
      if (d.x1 - d.x0 > d.y1 - d.y0) {
        return d.x0 + (d.x1 - d.x0) / 2 - (d.y1 - d.y0) / 2;
      } else {
        return d.x0;
      }
    })
    .attr("y", function (d) {
      if (d.x1 - d.x0 > d.y1 - d.y0) {
        return d.y0;
      } else {
        return d.y0 + (d.y1 - d.y0) / 2 - (d.x1 - d.x0) / 2;
      }
    })
    .attr("width", function (d) {
      if (d.x1 - d.x0 > d.y1 - d.y0) {
        return d.y1 - d.y0;
      } else {
        return d.x1 - d.x0;
      }
    })
    .attr("height", function (d) {
      if (d.x1 - d.x0 > d.y1 - d.y0) {
        return d.y1 - d.y0;
      } else {
        return d.x1 - d.x0;
      }
    });

  // and to add the text labels
  svg
    .selectAll("vals")
    .data(root.leaves())
    .enter()
    .append("text")
    .attr("class", function (d) {
      if (personality === d.data.id) {
        return null;
      } else {
        return "value " + "type" + d.data.id; //added class for each
      }
    })
    .attr("x", function (d) {
      return d.x1 - 10;
    }) // +10 to adjust position (more right)
    .attr("y", function (d) {
      return d.y1 - 10;
    }) // +20 to adjust position (lower)
    .text(function (d) {
      return ((d.data.value / sum_of_personality) * 100).toFixed(2) + "%";
    })
    .attr("font-size", function (d) {
      return font_size(d.data.value);
    })
    .attr("fill", "black")
    .attr("text-anchor", "end");

  svg
    .selectAll("vals")
    .data(root.leaves())
    .enter()
    .append("text")
    .attr("class", function (d) {
      if (personality === d.data.id) {
        return null;
      } else {
        return "value " + "type" + d.data.id; //added class for each
      }
    })
    .attr("x", function (d) {
      return d.x0 + 10;
    }) // +10 to adjust position (more right)
    .attr("y", function (d) {
      return d.y0 + 20;
    }) // +20 to adjust position (lower)
    .text(function (d) {
      return d.data.value;
    })
    .attr("font-size", 15)
    .attr("fill", "white")
    .attr("text-anchor", "start");
}
