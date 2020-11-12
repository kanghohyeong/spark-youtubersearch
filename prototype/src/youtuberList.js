import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import data from './data/listData.json'
import youtuberData from './data/youtuberData'
import CardList from './cardList'
export default function YoutuberList(props) {

  const style = {
    width: "500",
    justifyContent: "center",
    padding: 5
  }

  const category = props.category
  const current = data.category.filter((it) => it.name === category)[0]
  const info = current.query.map((it, idx) => {
    return({
      title: it,
      names: current.youtubers[idx].map((it) => {
        const value = youtuberData.youtubers.filter(youtuber => youtuber.name === it)[0];
        const characters = value.characters.slice(0, 3).map(it => it.text)
        return({
          name: it,
          subscribers: value.subscribers,
          characters: characters
        });
      })  
    })
  })

  const card = info.map(it => <CardList title={it.title} name={it.names}/>)

  return(
    <div>
      {card}
    </div>
  )
}