/* 가장 큰 수 */

function solution(numbers) {
  let answer = numbers
    .map((v) => String(v)) // 1. numbers 배열의 각 요소를 문자열 타입으로 바꿔줌
    .sort((a, b) => b + a - (a + b)) // 2. (b+a) => 문자열을 그대로 연결한 수, (a+b) => 앞 뒤 문자열을 바꾸고, 그대로 연결한 수
    .join(''); // 3. 배열을 문자열 형태로 변경

  // 4. 삼항 연산자를 사용하는 이유 ==> 파라미터로 [0, 0, 0, 0] 와 같은 배열이 올 수 있기 때문
  console.log(answer[0] === '0' ? '0' : answer);
}

// 테스트
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
