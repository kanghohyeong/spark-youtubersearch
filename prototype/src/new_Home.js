import React, {useState} from 'react';
import Tab from './tab';
import './Home.css'
import ReactModal from 'react-modal'

export default function Home() {
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
          <h2>회원가입시 추천 리스트에서 이미 구독중인 유튜버가 제외되며,<br/> 회원님의 취향을 분석하여 더 좋아할만한 유튜버들을 소개해드립니다.</h2>
          <button className="btn" onClick={() => setOpenModal(true)}>{`회원가입`}</button>
          <ReactModal className="end-modal" isOpen={openModal}>
            <h1>{`본 테스트에서는 회원가입을 지원하지 않습니다. 실제 서비스를 기대해주세요!`}</h1>
            <p></p>
            <button onClick={() => setOpenModal(false)}>확인</button>
          </ReactModal>
        </div> 
        <Tab isLoggedIn={isLoggedIn}/>
      </div>
    )

  



  
}