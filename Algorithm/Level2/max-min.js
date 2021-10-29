/* 최댓값과 최솟값 */

function solution(s) {
  const strToArray = s.split(' ');

  let answer = [];

  answer[0] = Math.min(...strToArray);
  answer[1] = Math.max(...strToArray);

  console.log(answer.join(' '));
}

// 테스트
solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
