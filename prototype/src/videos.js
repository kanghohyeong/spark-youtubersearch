import React from 'react';
import './videos.css'

export default function Videos(props) {
  const best = changeToImg(props.bestVideo)
  const latest = changeToImg(props.latestVideo)
  const latest2 = changeToImg(props.latestVideo2)
  
  return(
    <div className="video-contain">
      <div className="video">
        <h3>최고 인기 영상</h3>
        <a className="video_item" href={props.bestVideo} rel="noreferrer" target={'_blank'}><img alt={"유튜브 비디오"} src={best}/></a>
      </div>
      <div className="video">
        <h3>최근 업로드</h3>
        <div className="latestvideos-box">
          <a className="video_item" href={props.latestVideo} rel="noreferrer" target={'_blank'}><img alt={"유튜브 비디오"} src={latest}/></a>
          <a className="video_item" href={props.latestVideo2} rel="noreferrer" target={'_blank'}><img alt={"유튜브 비디오"} src={latest2}/></a>
        </div>
        
      </div>
    </div>
  )
}

function changeToImg(src) {
  const findStr = "watch?v="
  const code = src.split(findStr)[1]
  return `http://img.youtube.com/vi/${code}/mqdefault.jpg`
}