  // 리액트는 JSX라는 JavaScript 확장 문법을 사용한다

  // HTML과 JS를 섞어 사용하면서, React 컴포넌트를 HTML구조와
  // JS 로직을 모두 포함하는 방식으로 표현 할 수 있게 해준다

  // 오타 및 빨간줄 시 터미널에서 에러로 알려줌(라인번호, 에러내용)

  // JSX 문법

  // 1. className
  // JSX에서는 기존 class를 사용하는 HTML, CSS와 다르게 className을 사용해야 한다
  // (class 만 사용하면 class를 사용하는 문법을 선언한다는 의미)

  // 2. html에 변수 넣기
  // { post } (JSX 문법) { 변수명 }
  // 상상하는 모든곳에 { 변수명 } 사용가능 ex) id, className = {변수명}
  // 전문용어로 [데이터 바인딩] 이라고 한다

  // (JS 문법) [JSX는 다르게 해야함]
  // document.querySelector('h4'(적용할 태그)).innerHTML = post(변수명);

  // 3. html에 style 넣기
  // <h4 style={ {color : 'red'} }>블로그임</h4> 처럼 스타일을 여기서 지정 가능
  // style 넣을 때는 style={{스타일명:'값'}} 사용
  // 다른스타일도 넣고싶다면 { {color : 'red', fontSize : '16px'} }
  // HTML, CSS와 달리 JS는 fontSize 라고 작성(JS에서는 -를 빼기 할때만 사용)
  
  // React는 HTML을 return () 소괄호 안에 작성해야 한다
  // return 안에는 병렬로 태그 2개 이상 기입금지!!!!!!!!!!!!!!
  // ex) <div></div><div></div>

import logo from './logo.svg';
import './App.css'; // 외부 css 파일 연결
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; /* post 변수 선언 */
  // 변수는 let, var, const
  let [글제목, 글제목변경] = useState(['남자코드 추천', '강남 우동맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState(0); // state 0 값 넣어두기

/*
  let [글제목1, a] = useState('남자코트 추천');
  let [글제목2, b] = useState('강남 우동맛집');
  let [글제목3, c] = 
  useState('파이썬독학');
  */
  // useState('남자 코드 추천');
  // let [a, b] = useState(자료); = 자료 사용
  // a = state에 보관했던 자료 나옴
  // b = steate변경도와주는 함수
  // state = 자료를 잠깐 저장할 때 사용
  // useState + 엔터 = import{useState} 생성

  // 변수와 state의 차이점
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영안됨 = 직접 수정
  // state는 갑자기 변경되면 state쓰던 html이 자동 재렌더링 됌(매우편함)

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

    <button onClick={()=>{
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy);
    }}>여자</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;

// 컴포넌트 문법 <Modal/>
// HTML내용을 짧게 축소해서 작성하게 도와줌
/**
 * 컴포넌트 만드는 법
 * 1. fuction 만들고 (다른 함수 바깥에 만들어야 함)
 * 2. return () 안에 html담기
 * (return 안에는 병렬로 태그 2개 이상 기입금지)
 * (* 만약 병렬이 하고싶다면 div 두개를 div로 감싸기 or <></> 가능)
 * 3. <함수명></함수명>쓰기
 * 
 * 참고
 * <함수명></함수명>, <함수명/> 둘 다 가능
 * 
 * 어떤걸 컴포넌트로 만들면 좋은가
 * 1. 반복적인 html축약할 때
 * 2. 큰 페이지들
 * 3. 자주변경되는 것들(아닐수도있음)
 * 
 * 컴포넌트의 단점
 * state 가져다쓸 때 문제생김
 * (A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없음)
 * 
 * arrow 이용한 컴포넌트 예시
 * const Modal () => {
 *    return (
 *      <div></div>
 *   )
 * }
 */