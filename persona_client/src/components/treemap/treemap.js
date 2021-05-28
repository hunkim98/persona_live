import React from "react";
import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { mask_raw } from "../masks/mask_raw";

function Treemap({ personality, data, personalityArray }) {
  let sum_of_personality = personalityArray.reduce(function (a, b) {
    return a + b;
  }, 0);
  var font_size = d3
    .scaleLinear()
    .domain([Math.min(...personalityArray), Math.max(...personalityArray)])
    .range([20, 40]);
  const svgRef = useRef(null);

  var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 700 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

  function renderTreemap() {
    console.log(data);
    const svg = d3
      .select(svgRef.current)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 700 700")
      .classed("svg-content", true);

    const root = d3.hierarchy(data).sum((d) => d.value);

    const treemapRoot = d3.treemap().size([width, height]).paddingInner(8)(
      root
    );

    const nodes = svg
      .selectAll("g")
      .data(treemapRoot.leaves())
      .join("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let box_index = 0;
    nodes
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

    nodes
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

    nodes
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
  }

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      renderTreemap();
    }
  }, [data]);

  return (
    <div className="temperary">
      <svg ref={svgRef} />
    </div>
  );
}

export default Treemap;
