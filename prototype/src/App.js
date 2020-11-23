import React from 'react';
import { Route } from 'react-router-dom';
import YoutuberInfo from './youtuberinfo'
import Banner from './banner'
import New_Home from './new_Home'
//import Home from './Home'
import './App.css'
//import StartPage from './startpage'
import New_StartPage from './new_startpage'
import firebase from 'firebase';
import 'firebase/firestore';
require('dotenv').config();

export let db;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID
};

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore()

  const didSurvey = localStorage.getItem("survey") !== null
  let ret;
  if(didSurvey) {
    ret = (
      <div>
        <Route path="/spark-youtubersearch" component={Banner}/>
        <Route exact path="/spark-youtubersearch" component={New_Home}/>
        <Route path="/spark-youtubersearch/youtuber/:name" component={YoutuberInfo}/>
      </div>
    )
  } else {
    ret = <New_StartPage/>
  }

  return ret;
}


export default App;
