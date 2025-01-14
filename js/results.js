import { results ,  mbtis } from './data.js';

//http://127.0.0.1:5500/results.html?str=isfj

// 1. str=infj 중에 infj를 추출
// 2. infj가 data.js mbtis 값 중 몇번째 값인지 확인
//    결과 infj = 2;
// 3. 결과 값과 일치하는 results 배열에서 2번째 배열 값을 가져와서 출력

// ?str=infj === 쿼리스트링

const resultMBTI = new URLSearchParams(location.search).get("str");
console.log("resultMBTI" + resultMBTI);

console.log(resultMBTI + "의 mbti 값은 : " + mbtis[resultMBTI] );

// MBTI 값을 색인값으로 전환 처리
let findIndex =  mbtis[resultMBTI];

// 색인 값으로 results에서 찾기
let find = results[findIndex];

const title = find.title;
console.log(title);

// 각 위치에 있는 태그 위치 가져오기
const titleEl = document.querySelector('.page-title');
titleEl.innerHTML = title;

// 캐릭터 종류
const characterEl = document.querySelector('.character');
// src="./images/result_character1.png"
// character: '/images/result_character1.png',
const resultImgUrl = find.character;
characterEl.src = resultImgUrl;

// 결과 4개 얻어오기
const boxElement = document.querySelectorAll('.box');
console.log(boxElement[3]);
// boxElement 배열을 순회하면서 값을 넣어주면 됨
boxElement.forEach((x, index) => {
  console.log(find.results[index]);
  x.innerHTML = find.results[index];
})

// 직업 상자 결과 연결
const jobEl = document.querySelectorAll('.job');
console.log(jobEl);
jobEl.forEach((x, index) => {
  console.log(find.jobs[index]);
  x.innerHTML =  find.jobs[index];
}) 

// 결과에 따른 lectureImg 연결
const lectureImgEl = document.querySelector('.lecture-img');
const lectureImg = find.lectureImg;
lectureImgEl.src = lectureImg;

// 결과에 따른 lectureUrl 연결
const lectureUrlEl = document.querySelector('.lecture');
// const lectureUrl = find.lectureUrl;
// lectureUrlEl.src = lectureUrl;
lectureUrlEl.href = "http://127.0.0.1:5500/lecture.html";