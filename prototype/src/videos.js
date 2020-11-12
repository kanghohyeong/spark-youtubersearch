import React, {Component} from 'react';


export default function Videos(props) {
  const style = {
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "space-around"
  }

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  }

  const best = changeToImg(props.bestVideo)
  const latest = changeToImg(props.latestVideo)
  
  return(
    <div style={style}>
      <div style={itemStyle}>
        <h3>최고 인기 영상</h3>
        <a href={props.bestVideo}><img src={best}/></a>
      </div>
      <div style={itemStyle}>
        <h3>최근 업로드</h3>
        <a href={props.latestVideo}><img src={latest}/></a>
      </div>
    </div>
  )
}

function changeToImg(src) {
  const findStr = "watch?v="
  const code = src.split(findStr)[1]
  return `http://img.youtube.com/vi/${code}/mqdefault.jpg`
}