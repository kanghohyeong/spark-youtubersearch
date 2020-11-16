import React, {useState} from 'react';
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
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScKgmzMRdMO9G9aQIMpMBBx2eldE31zOLg3vomsRHMSWFjGQw/viewform?usp=sf_link";
      // window.location.reload()
    })
    .catch(function(error) {
    });

    
  }



  return (
    <div className="top-banner">
     <h2 className="logo-contain"><Link to="/spark-youtubersearch" className="title-logo">YouReco!</Link></h2>
     <input className="search-box" type={"text"} placeholder={"유튜버를 검색하세요"}/>
     <button className="end-button blinking" onClick={() => setOpenEndModal(true)}>종료하기</button>
     <ReactModal className="end-modal" isOpen={openEndModal}>
       <h1>정말 종료하시겠습니까?</h1>
       <p>종료 후 반드시 테스터 설문조사에 참여바랍니다.</p>
       <button onClick={() => setOpenEndModal(false)}>취소</button>
       <button onClick={() => finish()}>확인</button>
     </ReactModal>
   </div>
  );
}

