import React from 'react';
import ReviewList from './reviewList';
import ProfileBanner from './profileBanner';
import Videos from './videos';
import WordCloud from './wordCloud';
import data from './data/youtuberData.json';
import Similar from './similar';
import Match from './match'

export default function YoutuberInfo({match}) {

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    margin: "0 auto"
  }

  const youtuber = data.youtubers.filter(it => it.name === match.params.name)[0]
  
	return (
		<div style={style}>
			<ProfileBanner name={youtuber.name} subscribers={youtuber.subscribers} link={youtuber.link}/>
			<Videos bestVideo={youtuber.bestVideo} latestVideo={youtuber.latestVideo} latestVideo2={youtuber.latestVideo2}/>
      <hr width={"100%"}color={"#CFCFCF"}/>
			<Match rate={youtuber.rate} me={youtuber.me}/>
      <hr width={"100%"}color={"#CFCFCF"}/>
			<WordCloud characters={youtuber.characters}/>
      <hr width={"100%"}color={"#CFCFCF"}/>
			<ReviewList comments={youtuber.comments}/>
      <hr width={"100%"}color={"#CFCFCF"}/>
			<Similar similar={youtuber.similar}/>
		</div>
	);
}