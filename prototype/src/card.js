import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
export default function Card(props) {

  const style = {
    width: "500",
    justifyContent: "center",
    padding: 5
  };

  const characters = props.characters.map(it => <h3>{it}</h3>)

  return(
    <Link to={`/youtuber/${props.name}`}>
      <h2>{props.name}</h2>
      <h2>{props.subscribers}</h2>
      {characters}
    </Link>
  )
}