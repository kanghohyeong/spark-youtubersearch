import React from 'react';
import Avatar from 'react-avatar';
import './profileBanner.css'

export default function ProfileBanner(props) {
  const avatarStyle = {
    margin: 10,
  }

  return(
    <div className="profile-contain" >
      <div className="avatar-desc-contain">
        <Avatar style={avatarStyle} src={process.env.PUBLIC_URL + `/img/${props.name}.jpg`} round={true} size={150}/>
        <div className="youtuber-desc">
          <h1 >{props.name}</h1>
          <h2 >구독자 수 : {props.subscribers}</h2>
        </div>
      </div>
      
      <div className="button-contain">
        <div className="button-column">
          <a href={props.link} target={"_black"}><button>보러가기</button></a>
          <button >차단목록 추가</button>
        </div>
        <div className="button-column">
          <button >관심목록 추가</button>
          <button >평가하기</button>
        </div>
      </div>
    </div>
  )

}