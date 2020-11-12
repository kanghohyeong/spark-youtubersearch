import React, {Component} from 'react';
import Avatar from 'react-avatar';


export default class ProfileBanner extends Component{
  render() {

    const style = {
      backgroundColor: "#384259",
    }

    return(
      <div style={style}>
        <Avatar name={this.props.name} round={true} size={30}/>
        <h2>{this.props.name}</h2>
        <p>구독자 수 : {this.props.subscribers}</p>
        <button>보러가기</button>
        <button>관심목록 추가</button>
        <button>차단목록 추가</button>
        <button>평가하기</button>
      </div>
    )
  }

}