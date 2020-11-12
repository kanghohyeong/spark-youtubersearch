import Avatar from 'react-avatar';
import { MdThumbUp } from "react-icons/md";
import React, {useState, useEffect, Component} from 'react';

export default function Review(props) {
  const style = {
    display: "flex",
  }

  const nameStyle = {
    color: "#C7F464",
    fontFamily: "sans-serif"
  }

  const commentStyle = {
  }

  const blockStyle = {
    width: 400,
    border: "1px solid #CFCFCF",
    backgroundColor: "white",
    borderRadius: 10
  }

  const likeStyle = {
    display: "flex",
    alignItems: "center"
  }
  
  return(
    <div >
      <div style={style}>
        <Avatar name="말강님" round={true} size={30}/>
        <div style={blockStyle}>
          <div style={likeStyle}>
            <p>{props.comment.name}</p>
            <MdThumbUp/>
            <div>{props.comment.like}</div>
          </div>
          <h3 style={commentStyle}>{props.comment.text}</h3>
        </div>
      </div>
    </div>
  )
}