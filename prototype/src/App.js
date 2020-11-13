import React, {useState, useEffect, Component} from 'react';
import { Route } from 'react-router-dom';
import YoutuberInfo from './youtuberinfo'
import Banner from './banner'
import Home from './Home'
import './App.css'
import StartPage from './startpage'

function App() {

  const didSurvey = localStorage.getItem("survey") !== null
  console.log(localStorage.getItem("survey"))
  let ret;
  if(didSurvey) {
    ret = (
      <div>
        <Route path="/" component={Banner}/>
        <Route exact path="/" component={Home}/>
        <Route path="/youtuber/:name" component={YoutuberInfo}/>
      </div>
    )
  } else {
    ret = <StartPage/>
  }

  return ret;
}


export default App;
