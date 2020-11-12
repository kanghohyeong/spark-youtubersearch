import React, {Component} from 'react';


export default class Videos extends Component{
  render() {

    const style = {
      backgroundColor: "#FFF",
      display: "inline-block"
    }

    return(
      <div style={style}>
        <img src="http://img.youtube.com/vi/x96iLmXqRYk/0.jpg"/>
      </div>
    )
  }

}