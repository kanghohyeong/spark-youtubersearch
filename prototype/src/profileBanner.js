import React, {Component} from 'react';
import Avatar from 'react-avatar';


export default function ProfileBanner(props) {

  const style = {
    backgroundColor: "#384259",
    display: "flex",
    padding: 50,
    margin: 10,
    alignItems: "center"
  }

  const buttonStyle = {
    flexWrap: "wrap",
    width: 100,
    height: 100,
    margin: 10,
  }

  const fontStyle = {
    color: "white",
    margin: 10,
  }

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    margin: 3,
  }

  const avatarStyle = {
    margin: 10,
  }

  return(
    <div style={style}>
      <Avatar style={avatarStyle} src={process.env.PUBLIC_URL + `/img/${props.name}.jpg`} round={true} size={150}/>
      <div>
        <h1 style={fontStyle}>{props.name}</h1>
        <h2 style={fontStyle}>구독자 수 : {props.subscribers}</h2>
      </div>
      <div style={columnStyle}>
        <a href={props.link}><button style={buttonStyle}>보러가기</button></a>
        <button style={buttonStyle}>차단목록 추가</button>
      </div>
      <div style={columnStyle}>
        <button style={buttonStyle}>관심목록 추가</button>
        <button style={buttonStyle}>평가하기</button>
      </div>
    </div>
  )

}