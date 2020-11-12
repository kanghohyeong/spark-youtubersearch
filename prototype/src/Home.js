import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import Tab from './tab';
import './Home.css'

export default function Home() {

  // const style = {
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   padding: 5
  // }

  // const welcomeStyle = {
  //   backgroundColor: "#384259",
  //   padding: 10,
  //   margin: 10,
  //   textAlign: "center",
  //   color: "white"
  // }
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let welcome;
  if (!isLoggedIn) {
    welcome = 
    <div className="reco-box">
      <h2>회원님의 취향을 분석하여 회원님께 딱 맞는 유튜버 추천 서비스를 제공합니다.</h2>
      <button>맞춤 추천 시작</button>
    </div> 
  }

  return(
    <div className="home-box">
      {welcome}
      <Tab/>
    </div>
  )
}