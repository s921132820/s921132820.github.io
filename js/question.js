// data.js 를 참조해서 작업

import { questions } from './data.js';

const numberElement = document.querySelector('.number');
const questionElement =  document.querySelector('.question');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const progressValue = document.querySelector('.value');

// 현재 문제 번호를 변수로 만들기
let currentNumber = 0;

// mbti 결과를 저장할 변수
let mbti = '';

function renderQuestion() {
  let question = questions[currentNumber];

  // data.js의 첫번째 질문의 번호
  numberElement.innerHTML = question.number;
  questionElement.innerHTML = question.question;
  choice1.innerHTML = question.choices[0].text;
  choice2.innerHTML = question.choices[1].text;
  progressValue.style.width = ((currentNumber + 1)) * 10 + '%';

  
}

// 현재 페이지 로딩 시 실행
renderQuestion();

// 처리 절차
// 1. 어느 버튼이 눌렸는지 확인(이벤트 리스너 달아줘야함)
// 2. 아래쪽 버튼 두개 중 한개를 클릭하면 
// -- 다음 문제를 보여줘야 함
// -- mbti 타입을 어딘가에 저장해야함

// 버튼에 이벤트리스너 달기
choice1.addEventListener('click', () => nextQuestion(0));
choice2.addEventListener('click', () => nextQuestion(1));


function nextQuestion(choice) {
  // 1. mbti = istj
  // 2. 10문제 문항을 모두 선택하면 문제가 없습니다. ==> alert로 출력
  
  // 전체 배열의 수 출력
  console.log('문제 수 : ' + questions.length);
  
  let question = questions[currentNumber];

  if(currentNumber < (questions.length) - 1 ) {
    // mbti 결과 생성(버튼 눌렀을 때 처리 -- 보류)
    mbti = mbti + question.choices[choice].value;
    console.log("MBTI : " + question.choices[choice].value)
    currentNumber ++;  
    renderQuestion();
  } else {
    // mbti 검사 결과를 보여줄 페이지로 이동
    window.location.href = '../results.html?str=' + mbti;
    return;
  }
}
