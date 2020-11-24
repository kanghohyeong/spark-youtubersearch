import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal'
import './new_startpage.css';


export default function Start() {
 

  // 시작하기 눌렀을 때
  const submit = () => {
    localStorage.setItem("survey", "okay")
    window.location.reload()
  }


  const opensurvey = () => {
    // window.parent.location.href = "https://forms.gle/ee1KoYa5fmmpe53JA"
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfL2ZgfU4CVorkG2lZ55klv-dVbFJqr5vp6QAAlkyyPLzVa2g/viewform?usp=sf_link","", "_blank")
  }

  return(
    <div className="startpage-contain">
      <div className="top-title">
        <p>당신의 유튜버 탐색 도우미</p>
        <h1>YouReco!</h1>
      </div>
      
      <div className="int-contain">
        <div>
            <h1>테스트 안내사항</h1>
            <hr/>
            <ol>
                <li><span>'시작하기'</span> 버튼을 누르시면 테스트화면과 함께 설문조사 화면이 생성됩니다.</li>
                <li>먼저 테스트를 진행해주시고, 테스트 종료시에는 반드시 <span>'종료하기'</span> 버튼을 누르고 설문조사를 해주세요.</li>
                <li><span>pc환경</span>에서 테스트해주세요.(크롬 브라우저에서 실행을 추천드립니다)</li>
                <li>본 테스트는 현재 제작중인 유튜버 탐색 서비스의 프로토타입으로 다양한 유튜버와 만나고 싶어하시는 사용자분들에게 어떤 기능이 필요할지 테스트하고 있습니다.</li>
                <li>최소 기능만 구현되어 있으며 입력된 유튜버 정보가 실제와 다를 수 있으니 양해바랍니다.</li>
                <li>리스트마다 중복되는 유튜버가 많습니다. 실제 서비스에는 더 다양한 유튜버들을 소개해드리니 감안하고 테스트해주세요.</li>
            </ol>

            <p>여러분의 적극적인 참여가 저희에게 큰 힘이 됩니다! 테스트 후 꼭 설문조사에 임해주세요. 다양한 의견을 수렴하여 더 좋은 서비스 제작을 위해 노력하겠습니다!</p>

        </div>

        <button className="start-button" type="button" onClick={() => {opensurvey(); submit(); }} >시작하기</button>
      </div>

    </div>
  );
}

