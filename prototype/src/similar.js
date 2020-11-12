import React from 'react';
import Profile from './profile'

export default function Similar(props) {

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
  
  const profileStyle = {
    display: "flex",
  }

  const profiles = props.similar.map(it => <Profile name={it}/>)

	return (
		<div style={style}>
      <h2>유사 유튜버 추천</h2>
      <div style={profileStyle}>
        {profiles}
      </div>
		</div>
	);
}