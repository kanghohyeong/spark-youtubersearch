import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import Card from './card'
import './cardList.css'

export default function CardList(props) {

  // const style = {
  //   width: "500",
  //   justifyContent: "center",
  //   display: "flex",
  //   padding: 5
  // };

  const card = props.name.map(it => <Card name={it.name} subscribers={it.subscribers} characters={it.characters}/>);

  return(
    <div className="cardList-contain">
      <h2>{props.title}</h2>
      <div className="card-contain">
        {card}
      </div>
    </div>
  )
}