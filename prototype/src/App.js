import React, {useState, useEffect, Component} from 'react';
import { Route } from 'react-router-dom';
import YoutuberInfo from './youtuberinfo'
import Banner from './banner'
import Home from './Home'
import './App.css'

function App() {

  return (
    <div>
      <Route path="/" component={Banner}/>
      <Route exact path="/" component={Home}/>
      <Route path="/youtuber/:name" component={YoutuberInfo}/>
    </div>
  );
}


export default App;
