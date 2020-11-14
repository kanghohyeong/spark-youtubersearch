import React from 'react';
import Profile from './profile'
import './similar.css';

export default function Similar(props) {
  const profiles = props.similar.map(it => <Profile name={it}/>)

	return (
		<div className="similar-contain" >
      <h2>유사 유튜버 추천</h2>
      <div className="similar-list">
        {profiles}
      </div>
		</div>
	);
}