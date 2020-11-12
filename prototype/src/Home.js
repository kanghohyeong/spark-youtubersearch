import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import Tab from './tab';

export default function Home() {

  const style = {
    width: "500",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5
  }

  const welcomeStyle = {
    backgroundColor: "#384259",
    padding: 10,
    margin: 10,
    textAlign: "center",
    color: "white"
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let welcome;
  if (!isLoggedIn) {
    welcome = 
    <div style={welcomeStyle}>
      <h2>로그인 시 회원님의 유튜브 구독 리스트를 분석하여취향에 딱 맞는 개인 추천 서비스를 제공합니다.</h2>
      <button>로그인</button>
    </div> 
  }

  return(
    <div style={style}>
      {welcome}
      <Tab/>
    </div>
  )
}