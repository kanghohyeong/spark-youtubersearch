import React, {useState, useEffect, Component} from 'react';
import ReactModal from 'react-modal'
export default function Start() {
  const list = category.map(it => false)

  const [gender, setGender] = useState()
  const [usual, setUsual] = useState(list)
  const [want, setWant] = useState(list)
  const [usualEtc, setUsualEtc] = useState("")
  const [wantEtc, setWantEtc] = useState("")
  const [isLastPage, setIsLastPage] = useState(false)
  const [disabled, setDisabled] = useState(true)
  
  // 입력을 모두 했는지 검사해 disabled 변경
  useEffect(() => {
    if(!gender || usual.indexOf(true) === -1 || want.indexOf(true) === -1) setDisabled(true)
    else setDisabled(false)
  }, [usual, want, gender])

  // 마지막 안내 후 시작하기 눌렀을 때
  const submit = () => {
    const usualList = []
    usual.forEach((it, idx) => {if(it) usualList.push(category[idx])})
    if(usual[usual.length - 1] && usualEtc != "") {
      usualList.pop()
      usualList.push(usualEtc)
    }
    const wantList = []
    want.forEach((it, idx) => {if(it) wantList.push(category[idx])})
    if(want[want.length - 1] && wantEtc != "") {
      wantList.pop()
      wantList.push(wantEtc)
    }
    localStorage.setItem("survey", JSON.stringify({gender: gender, usual: usualList, want: wantList}))
    window.location.reload()
  }

  const handleChange = (target, setTarget, idx) => {
    setTarget(target.map((it, i) => i === idx? !target[idx] : target[i]))
  }


  // Modal 다룰때 사용하는 style 이렇게 써야됨
  const style= {
    content: {
      top: '0%',
      left: '50%',
      bottom: 'auto',
      right: 'auto'
    }
  }

  return(
    <div>
      <p>당신의 취향에 맞는 유튜버 서비스</p>
      <h1>YOURECO!</h1>
      <div>
        <label for="gender">성별
          <input type='radio' name='gender' value='male' checked={gender === "남성"} onChange={()=>setGender("남성")}/>남성
          <input type='radio' name='gender' value='female' checked={gender === "여성"} onChange={()=>setGender("여성")}/>여성
        </label>
        <br/>
        <label for="usual">평소 유튜브 시청 카테고리
          {category.map((it, idx) => <div><input type="checkbox" name="usual" value={it} checked={usual[idx]} onChange={() => handleChange(usual, setUsual, idx)}/>{it}</div>)}
          {usual[usual.length - 1]? <input type="text" placeholder="기타에 해당하는 카테고리 입력" value={usualEtc} onChange={(e) => setUsualEtc(e.target.value)}/> : null}
        </label>
        <br/>
        <label for="new">새로운 유튜버를 추천받고싶은 카테고리
          {category.map((it, idx) => <div><input type="checkbox" name="new" value={it} checked={want[idx]} onChange={() => handleChange(want, setWant, idx)}/>{it}</div>)}
          {want[want.length - 1]? <input type="text" placeholder="기타에 해당하는 카테고리 입력" value={wantEtc} onChange={(e) => setWantEtc(e.target.value)}/> : null}
          <br/>
        </label>
        <button type="button" onClick={() => setIsLastPage(true)} disabled={disabled} >시작하기</button>
      </div>

      <ReactModal isOpen={isLastPage} contentLabel="마지막안내" style={style}>
      <button onClick={()=>{setIsLastPage(false)}}>X</button>
      <h2>테스트 종료시에는반드시 '종료하기' 버튼을 누르고설문조사를 해주세요!서비스 개선에 큰 도움이 됩니다.감사합니다!</h2>
        <button onClick={submit}>완료</button>
      </ReactModal>

    </div>
  );
}

const category = [
  "패션", "뷰티", "푸드/먹방", "엔터테인먼트",
  "Vlog일상", "IT/과학", "여행", "ASMR",
  "게임", "펫/동물","영화/애니", "자동차",
  "음악", "스포츠","FUN","뉴스/정치",
  "교육","키즈","사회/종교","기타"
]