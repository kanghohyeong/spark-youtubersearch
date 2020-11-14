import Avatar from 'react-avatar';
import { MdThumbUp } from "react-icons/md";
import React from 'react';
import './review.css';

export default function Review(props) {
  return(
    <div className="review-list">
      <Avatar src={process.env.PUBLIC_URL + `/img/guest.png`} round={true} size={100}/>
      <div className="review-box">
        <div className="review-who">
          <p>{props.comment.name}</p>
          <p className="like">
            <MdThumbUp/>
            <p>{props.comment.like}</p>
          </p>
          
        </div>
        <p className="review-contents">{props.comment.text}</p>
      </div>
    </div>
  )
}