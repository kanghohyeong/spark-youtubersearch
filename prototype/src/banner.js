import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal'
import './banner.css';
import {db} from './App.js'
export default function Banner() {

  const [openEndModal, setOpenEndModal] = useState(false)

  const finish = () => {
    const survey = localStorage.getItem("survey")

    db.collection("survey").add(JSON.parse(survey))
    .then(function(docRef) {
      localStorage.removeItem("survey")
      window.location.reload()
    })
    .catch(function(error) {
    });
  
  }

  return (
    <div className="top-banner">
     <h2 className="logo-contain"><Link to="/" className="title-logo">YouReco!</Link></h2>
     <input className="search-box" type={"text"} placeholder={"유튜버를 검색하세요"}/>
     <button className="end-button" onClick={() => setOpenEndModal(true)}>종료하기</button>
     <ReactModal isOpen={openEndModal}>
       <h1>정말 종료하시겠습니까?</h1>
       <button onClick={() => setOpenEndModal(false)}>취소</button>
       <button onClick={() => finish()}>확인</button>
     </ReactModal>
   </div>
  );
}

