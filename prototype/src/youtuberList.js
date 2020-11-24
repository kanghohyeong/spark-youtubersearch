import React from 'react';
import data from './data/listData.json'
import youtuberData from './data/new_youtuberData.json'
import CardList from './cardList'
import './youtuberList.css'

export default function YoutuberList(props) {
  const category = props.category
  const item = data.category
  const current = item.filter((it) => it.name === category)[0]
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

  const card = info.map(it => <CardList key={it.title} title={it.title} name={it.names} color={props.color}/>)

  return(
    <div>
      {card}
    </div>
  )
}