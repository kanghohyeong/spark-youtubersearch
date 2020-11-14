import React from 'react';
import Review from './review';
import './reviewList.css';

export default function ReviewList(props) {
  const review = props.comments.map(it => <Review comment={it}/>)

  return(
    <div className="review-contain">
      <h2>{`${props.comments.length}건의 유레코 사용자 평가`}</h2>
      {review}
    </div>
  )
}