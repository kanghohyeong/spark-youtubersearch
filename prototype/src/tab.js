import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import YoutuberList from './youtuberList'
import './tab.css'

const category = ["게임", "음악", "요리", "브이로그", "패션"]


export default function Tab(props) {

  // const style = {
  //   width: "500",
  //   justifyContent: "center",
  //   padding: 5
  // }

  const tabStyle = {
    display: "flex",
  }

  const tabItemStyle = {
    flexGrow: 1,
    backgroundColor:" white"
  }

  const clickStyle = {
    flexGrow: 1,
    backgroundColor: "#384259",
    color: "white"
  }

  const [tabIdx, setTabIdx] = useState(0)

  return(
    <div className="list-tab-contain">
      <div>
        <div>
          <h2 className="sub-title">분류별 유튜버 추천</h2>
          <div className="button-box">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <div className="tab-box">
          {category.map((name, idx) => {
            return (
              <button onClick={() => setTabIdx(idx)} style={tabIdx === idx? clickStyle : tabItemStyle}>{name}</button>
            );
          })}
        </div>
      </div>
      <YoutuberList category={category[tabIdx]} isLoggedIn={props.isLoggedIn}/>
    </div>
  )
}