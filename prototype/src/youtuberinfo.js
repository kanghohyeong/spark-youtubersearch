import React from 'react';
import Review from './review'
import ProfileBanner from './profileBanner'
import Videos from './videos'
import WordCloud from './wordCloud';

export default function YoutuberInfo({match}) {

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
	
	return (
		<div style={style}>
			<ProfileBanner name={match.params.name} subscribers="144만명"/>
			<Videos/>
			{/* 
			<Match/>
			*/}
			<WordCloud/>
			<Review name="말강님" comment="아프리카 롤통령 김민교. 철없는 놈처럼 보이지만 책임감있는 태도와 의젓한 모습을 가진 외유내강의 사나이.. 너란남자.." like="231"/>
			{/* <Similar/> */}
		</div>
	);
}
  