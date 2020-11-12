import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import YoutuberList from './youtuberList'

const category = ["게임", "음악", "요리", "브이로그", "패션"]


export default function Tab() {

  const style = {
    width: "500",
    justifyContent: "center",
    padding: 5
  }

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
  }

  const [tabIdx, setTabIdx] = useState(0)

  return(
    <div>
      <div style={style}>
        <p>분류별 유튜버 추천</p>
        <button>&lt;</button>
        <button>&gt;</button>
        <div style={tabStyle}>
          {category.map((name, idx) => {
            return (
              <button onClick={() => setTabIdx(idx)} style={tabIdx === idx? clickStyle : tabItemStyle}>{name}</button>
            );
          })}
        </div>
      </div>
      <YoutuberList category={category[tabIdx]}/>
    </div>
  )
}