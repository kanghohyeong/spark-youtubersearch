import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';


export default function Banner() {

  const style = {
    width: "100%",
    backgroundColor: "#384259",
    display: "flex",
    justifyContent: "space-around",
    padding: 5
  }

  const font = {
    // fontFamily: "luckiest-guy"
    color: "#F73859",
    fontSize: 30
  }

  const textColor = {
    color: "#FFF"
  }

  return(
    <div style={style}>
      <h2><Link to="/" style={font}>Youreco!</Link></h2>
      <input type={"text"} placeholder={"유튜버를 검색하세요"}/>
      <h2 style={textColor}>로그인 회원가입</h2>
    </div>
  )
}