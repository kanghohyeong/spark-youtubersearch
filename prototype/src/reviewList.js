import React, {useState, useEffect, Component} from 'react';
import Review from './review';
import './reviewList.css';

export default function ReviewList(props) {
  const style = {
    borderRadius: 20,
    margin: 10,
    height: 50,
    padding: 20,
    display: "flex",
  }

  const nameStyle = {
    color: "#C7F464",
    fontFamily: "sans-serif"
  }

  const commentStyle = {
    overflow: "hidden",
    fontFamily: "sans-serif",
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    fontStyle: "normal",
    display: "inline-block"
  }

  const blockStyle = {
    border: "1px solid #CFCFCF",
    backgroundColor: "white",
    borderRadius: 10
  }

  const likeStyle = {
    display: "flex",
  }

  const review = props.comments.map(it => <Review comment={it}/>)

  return(
    <div className="review-contain">
      <h2>{`${props.comments.length}건의 유레코 사용자 평가`}</h2>
      {review}
    </div>
  )

}