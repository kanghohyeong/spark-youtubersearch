import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import './wordCloud.css';

export default function WordCloud(props) {
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20,40],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 10,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return(
    <div className="wordcloud-contain">
      <h2>유레코 분석결과</h2>
      <div className="wordcloud"><ReactWordcloud  options={options} words={props.characters}/></div>
    </div>
  )
}