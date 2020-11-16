import React, { useState } from 'react';
import Avatar from 'react-avatar';
import './profileBanner.css'
import Rating from 'react-rating'
import ReactModal from 'react-modal'

export default function ProfileBanner(props) {
  const avatarStyle = {
    margin: 10,
  }

  const [openRating, setOpenRating] = useState(false)

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
          <a href={props.link} target={"_blank"}><button>보러가기</button></a>
          <button className="not-allowed">차단목록 추가</button>
        </div>
        <div className="button-column">
          <button className="not-allowed">관심목록 추가</button>
          <button onClick={() => setOpenRating(true)}>평가하기</button>
        </div>

      </div>

      <ReactModal className="modal" isOpen={openRating} onRequestClose={() => setOpenRating(false)}>
        <div className="rating-star">
          <span>별점 </span>
          <Rating
            stop={5}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x low"
            style={
              {color: "#FDCC0D"}
            }
          />
        </div>
        <div className="rating-text">
          <div>이 유튜버에 대해 평가해주세요.</div>
          <textarea/>
        </div>
        
        <button onClick={() => setOpenRating(false)}>확인</button>
      </ReactModal>
    </div>
  )

}