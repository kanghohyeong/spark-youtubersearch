import Avatar from 'react-avatar';
import { MdThumbUp } from "react-icons/md";
import React, {useState, useEffect, Component} from 'react';

export default class Review extends Component {

    render() {
  
      const style = {
        backgroundColor : "#384259",
        borderRadius: 20,
        margin: 10,
        height: 50,
        padding: 20,
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
  
      const profileStyle = {
  
      }
  
      const likeStyle = {
        display: "inline-block",
        color: "#FFF",
      }
  
      return(
        <div style={style}>
          <div style={{display: "inline-block"}}>
            <Avatar name="말강님" round={true} size={30}/>
            <p style={nameStyle}>{this.props.name}</p>
          </div>
          <p style={commentStyle}>{this.props.comment}</p>
          <div style={likeStyle}>
            <MdThumbUp/>{this.props.like}
          </div>
        </div>
      )
    }
  }