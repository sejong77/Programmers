/* 땅따먹기 */

function solution(land) {
  // 1. 인자의 원래 값이 변하지 않도록 복사
  let copyLand = land.slice();

  // 2. 결과 값을 할당할 변수
  let answer = 0;

  // 3-1. copyLand 배열의 길이만큼 반복문 실행
  // 3-2. 각 행을 순회하며, 본인이 속한 열을 제외한 나머지 열의 값들 중 최대 값을 구하여, 각 행의 열에 더함
  for (let i = 1; i < copyLand.length; i++) {
    copyLand[i][0] += Math.max(copyLand[i - 1][1], copyLand[i - 1][2], copyLand[i - 1][3]);
    copyLand[i][1] += Math.max(copyLand[i - 1][0], copyLand[i - 1][2], copyLand[i - 1][3]);
    copyLand[i][2] += Math.max(copyLand[i - 1][0], copyLand[i - 1][1], copyLand[i - 1][3]);
    copyLand[i][3] += Math.max(copyLand[i - 1][0], copyLand[i - 1][1], copyLand[i - 1][2]);
  }

  // 4. copyLand 배열의 마지막 인덱스 값을 back 변수에 할당
  const back = copyLand.length - 1;

  // 5. copyLand 배열의 마지막 인덱스에 있는 배열의 요소들 중 최대 값을 answer 변수에 할당
  answer = Math.max(copyLand[back][0], copyLand[back][1], copyLand[back][2], copyLand[back][3]);

  console.log(answer);
}

// 테스트
solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);

solution([
  [1, 2, 6, 7],
  [2, 3, 10, 8],
  [1, 3, 9, 4],
  [7, 11, 9, 4],
]);
