import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import './banner.css';



class banner extends Component {
  render() {
    return (
      <div className="top-banner">
       <h2 className="logo-contain"><Link to="/" className="title-logo">YouReco!</Link></h2>
       <input className="search-box" type={"text"} placeholder={"유튜버를 검색하세요"}/>
       <button className="end-button">종료하기</button>
     </div>
    );
  }
}

export default banner;


// export default function Banner() {

//   const style = {
//     width: "100%",
//     backgroundColor: "#384259",
//     display: "flex",
//     justifyContent: "space-around",
//     padding: 5
//   }

//   const font = {
//     // fontFamily: "luckiest-guy"
//     color: "#F73859",
//     fontSize: 30
//   }

//   const textColor = {
//     color: "#FFF"
//   }

//   return(
//     <div style={style}>
//       <h2><Link to="/" style={font}>YouReco!</Link></h2>
//       <input type={"text"} placeholder={"유튜버를 검색하세요"}/>
//       <h2 style={textColor}>로그인 회원가입</h2>
//     </div>
//   )
// }