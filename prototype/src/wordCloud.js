import React, {Component} from 'react';
import ReactWordcloud from 'react-wordcloud';

export default class WordCloud extends Component{
  render() {

    const style = {
      backgroundColor: "#FFF",
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
      transitionDuration: 1000
    };
    
    const words = [
      {
        text: '리그오브레전드',
        value: 19,
      },
      {
        text: 'pc게임',
        value: 17,
      },
      {
        text: '아프리카tv',
        value: 16,
      },
      {
        text: '피즈',
        value: 17,
      },
      {
        text: '긍정적태도',
        value: 15,
      },
      {
        text: '얼굴안나옴',
        value: 15,
      },
    ];
    

    return(
      <div style={style}>
        <ReactWordcloud options={options} words={words}/>
      </div>
    )
  }

}