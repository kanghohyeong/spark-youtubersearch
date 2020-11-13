import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './profile.css';

export default function Profile(props) {

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
  
	return (
		<div className="profile-box">
      <a href={`/youtuber/${props.name}`}>
        <Avatar size={200} round={true} src={process.env.PUBLIC_URL + `/img/${props.name}.jpg`}/>
        <h3>{props.name}</h3>
      </a>
		</div>
	);
}