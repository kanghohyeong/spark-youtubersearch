import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import './card.css'

export default function Card(props) {

  // const style = {
  //   width: "500",
  //   justifyContent: "center",
  //   padding: 5
  // };

  const characters = props.characters.map(it => <p>{it}</p>)

  return(
    <Link className="card-link" to={`/youtuber/${props.name}`}>
      <div className="card">
        <div className="name-img">
          <h3>{props.name}</h3>
        </div>
        <div className="subs-char">
          <h3>구독자 : {props.subscribers}</h3>
          {characters}
        </div>
        
      </div>
      
    </Link>
  )
}