import React, {Component} from 'react';
import ReactWordcloud from 'react-wordcloud';

export default function WordCloud(props) {
  const style = {
    display: "flex",
    alignItems: "center"
  }

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 30],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  const cloudStyle = {
    width: 600,
    height: 400,
  }

  return(
    <div>
      <h2>유레코 분석결과</h2>
      <div style={style}><ReactWordcloud style={cloudStyle} options={options} words={props.characters}/></div>
    </div>
  )

}