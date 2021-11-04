/* 최댓값과 최솟값 */

function solution(s) {
  // 1. 문자열 s를 배열로 변환 후 변수에 할당
  const strToArray = s.split(' ');

  // 2. 결과 값을 할당할 배열 선언
  let answer = [];

  // 3. 배열의 요소 중 최대 값, 최소 값을 0, 1 인덱스에 할당
  answer[0] = Math.min(...strToArray);
  answer[1] = Math.max(...strToArray);

  // 4. 배열을 join() 메서드를 사용해 문자열로 변환 후 출력
  console.log(answer.join(' '));
}

// 테스트
solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
