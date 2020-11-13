import Avatar from 'react-avatar';
import { MdThumbUp } from "react-icons/md";
import React, {useState, useEffect, Component} from 'react';
import './review.css';


export default function Review(props) {
  // const style = {
  //   display: "flex",
  // }

  // const nameStyle = {
  //   color: "#C7F464",
  //   fontFamily: "sans-serif"
  // }


  // const blockStyle = {
  //   width: 400,
  //   border: "1px solid #CFCFCF",
  //   backgroundColor: "white",
  //   borderRadius: 10
  // }

  // const likeStyle = {
  //   display: "flex",
  //   alignItems: "center"
  // }
  
  return(
    <div className="review-list">
      <Avatar name="말강님" round={true} size={100}/>
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