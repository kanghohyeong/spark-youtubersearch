import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import './wordCloud.css';

export default function WordCloud(props) {

  const callbacks = {
    getWordColor: word => {
      if (word.prop === 0) return "#1f77b4"; //컨텐츠 키워드
      else if (word.prop === 1) return "#ff7f0e"; //방송성격 키워드
      else return "#2ca02c"; //시청자 반응 키워드
    }
  };

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
      <div className="text-contain">
        <h2>유레코 분석결과</h2>
        <div className="word-color">
          <span >키워드 유형 : </span>
          <span style={{color:"#1f77b4",fontWeight:"bolder" }}>컨텐츠</span>
          <span style={{color:"#ff7f0e",fontWeight:"bolder"}}>연관 태그</span>
          <span style={{color:"#2ca02c",fontWeight:"bolder"}}>시청자 반응</span>
        </div>
      </div>
      
      <div className="wordcloud"><ReactWordcloud  callbacks={callbacks} options={options} words={props.characters}/></div>
    </div>
  )
}