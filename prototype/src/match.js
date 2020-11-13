import React from 'react';
import './match.css'

export default function Match(props) {

  // const style = {
  //   display: "flex",
  //   alignItems: "center"
  // }
  
  const squareColor = {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor : "#F73859",
    padding:10,
  }
  const innerColor = {
    backgroundColor : "#F73859",
    border: "1px solid white",
    textAlign: "center",
    height: 95,
    width: 95,
  }

  const fontColor = {
    color: "white",
    
  }

  // const boxStyle = {
  //   backgroundColor: "#384259",
  //   borderRadius: 20,
  //   padding: 10,
  // }

  const me = props.me.map(it => mapWord.get(it))
	return (
		<div className="match-contain">
      <h2>당신과의 궁합</h2>
      <div className="match-contents" >
        <div style={squareColor}><div style={innerColor}><p style={fontColor}>예상선호도</p><h3 style={fontColor}>{props.rate}</h3></div></div>
        <div className="match-desc" >{me}</div>
      </div>
		</div>
	);
}


const highlightText = {
  color:"#4ECDC4", display:"inline-block"
}

const normalText = {
  display:"inline-block", color:"white"
}

const mapWord = new Map([
  ["트위치tv", <p style={normalText}><p style={highlightText}>트위치tv</p>에서 방송 중 입니다.</p>],
  ["높은텐션", <p style={normalText}><p style={highlightText}>높은 텐션</p>을 가지고 있습니다.</p>],
  ["리그오브레전드", <p style={normalText}><p style={highlightText}>리그오브레전드</p>를 플레이합니다.</p>]

])
