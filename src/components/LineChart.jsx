import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 20, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => new Date(d.date)))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.amount)])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(d3.timeMonth.every(1));
    const yAxis = d3.axisLeft(yScale);

    svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

    svg.append("g").call(yAxis);

    const line = d3
      .line()
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.amount))
      .curve(d3.curveMonotoneX);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return (
    <div className="bg-lightPrimaryColor rounded-lg shadow-xl">
      <svg ref={svgRef}></svg>;
    </div>
  );
};

export default LineChart;
