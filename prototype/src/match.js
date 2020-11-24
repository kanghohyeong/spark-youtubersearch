import React from 'react';
import './match.css'

export default function Match(props) {  
  const squareColor = {
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor : "#F73859",
    padding:10,
  }
  const innerColor = {
    backgroundColor : "#F73859",
    border: "1px solid white",
    textAlign: "center",
    height: 95,
    width: 95,
  }

  const fontColor = {
    color: "white",
    
  }

  const me = props.me.map(it => mapWord.get(it))
  
	return (
		<div className="match-contain">
      <h2>당신과의 궁합</h2>
      <div className="match-contents" >
        <div style={squareColor}><div style={innerColor}><p style={fontColor}>예상선호도</p><h3 style={fontColor}>{props.rate}</h3></div></div>
        <div className="match-desc" >{me}</div>
      </div>
		</div>
	);
}


const highlightText = {
  color:"#4ECDC4", display:"inline-block"
}

const normalText = {
  display:"inline-block", color:"white"
}

const mapWord = new Map([
  ["트위치tv", <p style={normalText}><p style={highlightText}>트위치tv</p>에서 방송 중 입니다.</p>],
  ["높은텐션", <p style={normalText}><p style={highlightText}>높은 텐션</p>을 가지고 있습니다.</p>],
  ["리그오브레전드", <p style={normalText}><p style={highlightText}>리그오브레전드</p>를 플레이합니다.</p>],
  ["아프리카tv", <p style={normalText}><p style={highlightText}>아프리카tv</p>에서 방송 중 입니다.</p>],
  ["미녀", <p style={normalText}><p style={highlightText}>미녀</p> 입니다.</p>],
  ["실력", <p style={normalText}><p style={highlightText}>실력</p>이 뛰어납니다.</p>],
  ["서포터", <p style={normalText}><p style={highlightText}>서포터</p> 챔피언을 주로 플레이합니다.</p>],
  ["원딜", <p style={normalText}><p style={highlightText}>원거리딜러</p> 챔피언을 주로 플레이합니다.</p>],
  ["실험적인", <p style={normalText}><p style={highlightText}>실험적인</p> 플레이를 합니다.</p>],
  ["뉴메타", <p style={normalText}><p style={highlightText}>뉴메타</p>를 시도합니다.</p>],
  ["얄미운", <p style={normalText}><p style={highlightText}>얄미운</p> 성격을 가지고 있습니다.</p>],
  ["롤토체스", <p style={normalText}><p style={highlightText}>롤토체스</p>를 플레이합니다.</p>],
  ["프로출신", <p style={normalText}><p style={highlightText}>프로출신</p> 유튜버입니다.</p>],
  ["특이한성격", <p style={normalText}><p style={highlightText}>특이한 성격</p>을 가지고 있습니다.</p>],
  ["긍정적인태도", <p style={normalText}><p style={highlightText}>긍정적인 태도</p>를 가지고 플레이합니다.</p>],
  ["독특한 편집 스타일", <p style={normalText}><p style={highlightText}>독특한 편집 스타일</p>을 가지고 있습니다.</p>],
  ["공식", <p style={normalText}><p style={highlightText}>공식</p> 유튜브 채널입니다.</p>],
  ["먹방", <p style={normalText}><p style={highlightText}>먹방</p> 유튜버 입니다.</p>],
  ["장인", <p style={normalText}><p style={highlightText}>장인</p> 플레이어입니다.</p>],
  ["엔터테인먼트", <p style={normalText}><p style={highlightText}>엔터테인먼트</p> 카테고리입니다.</p>],
  ["감탄하는", <p style={normalText}><p style={highlightText}>감탄하는</p> 반응을 얻습니다.</p>],
  ["연예인", <p style={normalText}><p style={highlightText}>연예인</p>이 나옵니다.</p>],
  ["재미있는", <p style={normalText}><p style={highlightText}>재미있는</p> 반응을 얻습니다.</p>],
  ["체험", <p style={normalText}><p style={highlightText}>체험</p> 컨텐츠를 진행합니다.</p>],
  ["인터뷰", <p style={normalText}><p style={highlightText}>인터뷰</p> 가 주요 컨텐츠입니다.</p>],
  ["자극적인", <p style={normalText}><p style={highlightText}>자극적인</p> 컨텐츠를 다룹니다.</p>]


])
