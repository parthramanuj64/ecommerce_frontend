import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.count);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg.selectAll("path").remove();
    svg.selectAll("text").remove();

    svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.region));

    svg
      .selectAll("text")
      .data(pie(data))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .text((d) => d.data.region);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default PieChart;
