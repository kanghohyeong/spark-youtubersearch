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
        <h2>회원님의 취향에 딱 맞는 맞춤 유튜버 추천을 받고 싶다면 아래 버튼을 눌러주세요!</h2>
        <button className="btn" onClick={() => setOpenModal(true)}>{`맞춤 추천 ${loginText}`}</button>
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