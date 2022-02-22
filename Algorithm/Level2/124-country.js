// 124 나라의 숫자

function solution(n) {
  let answer = '';
  const numArr = [4, 1, 2];

  while (n) {
    answer = numArr[n % 3] + answer;

    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  console.log(answer);
}

// 테스트
solution(1); // 1
solution(2); // 2
solution(3); // 4
solution(4); // 11
solution(11); // 42

/* 문제 풀이
  주어진 수를 3으로 나눈 나머지가 
    - 0일 경우 4의 값을 갖도록 0번째 인덱스에 4를 선언
    - 1일 경우 1의 값을 갖도록 1번째 인덱스에 1을 선언
    - 2일 경우 2의 값을 갖도록 2번째 인덱스에 2를 선언

  따라서 [4, 1, 2] 형태의 배열을 선언한다.

  answer = numArr[n%3] + answer를 통해 주어진 수의 맞게 124 형태로 변환
  그 후, 나머지가 0이면 몫에서 1을 빼주고, 0이 아니라면 주어진 수를 3으로 나눈 후 정수 부분만 가져와 다시 while문을 실행한다.
 */
