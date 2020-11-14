import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import Tab from './tab';
import './Home.css'
import ReactModal from 'react-modal'

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
  const [openModal, setOpenModal] = useState(false)
  
  const loginText = isLoggedIn? "종료" : "시작"

  const setLogin = () => {
    setOpenModal(false)
    setIsLoggedIn(!isLoggedIn)
  }

  return(
    <div className="home-box">
      <div className="reco-box">
        <h2>회원님의 취향을 분석하여 회원님께 딱 맞는 유튜버 추천 서비스를 제공합니다.</h2>
        <button onClick={() => setOpenModal(true)}>{`맞춤 추천 ${loginText}`}</button>
        <ReactModal className="end-modal" isOpen={openModal}>
          <h1>{`맞춤 추천을 ${loginText}하시겠습니까?`}</h1>
          <p></p>
          <button onClick={() => setOpenModal(false)}>취소</button>
          <button onClick={() => setLogin()}>확인</button>
        </ReactModal>
      </div> 
      <Tab isLoggedIn={isLoggedIn}/>
    </div>
  )
}