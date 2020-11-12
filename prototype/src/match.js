import React from 'react';

export default function Match(props) {

  const style = {
    display: "flex",
    alignItems: "center"
  }
  
  const squareColor = {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor : "#FA3838",
    padding:10,
  }
  const innerColor = {
    backgroundColor : "#FA3838",
    border: "1px solid white",
    textAlign: "center"
  }

  const fontColor = {
    color: "white",
  }

  const boxStyle = {
    backgroundColor: "#384259",
    borderRadius: 20,
    padding: 10,
  }

  const me = props.me.map(it => mapWord.get(it))
	return (
		<div>
      <h2>당신과의 궁합</h2>
      <div style={style}>
        <div style={squareColor}><div style={innerColor}><p style={fontColor}>예상선호도</p><h3 style={fontColor}>{props.rate}</h3></div></div>
        <div style={boxStyle}>{me}</div>
      </div>
		</div>
	);
}

const mapWord = new Map([
  ["트위치tv", <div><p style={{color:"#4ECDC4", display:"inline-block", fontSize:25}}>트위치tv</p><p style={{display:"inline-block", color:"white", fontSize:25}}>에서 방송 중 입니다.</p></div>],
  ["높은텐션", <p>높은 텐션을 가지고 있습니다.</p>],
  ["리그오브레전드", <p>리그오브레전드를 플레이합니다.</p>]
])
