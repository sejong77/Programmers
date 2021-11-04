/* 숫자의 표현 */

function solution(n) {
  // 1. 결과 값을 할당할 변수 선언 (0으로 초기화)
  let answer = 0;

  // 2. 2중 for문을 활용하여, 1부터 n까지 더하는 반복문 선언
  for (let i = 1; i <= n; i++) {
    // 3. 1부터 n까지 누적된 합을 할당할 변수 선언 (0으로 초기화)
    let sum = 0;

    for (let j = i; j <= n; j++) {
      sum += j;

      // 4 - 1. 1부터 n까지 더하는 과정에서 sum과 n이 같으면 answer 1 증가
      // 4 - 2. sum이 n보다 커지면 반복문 종료 후, i를 1증가 시켜 위의 과정 반복
      if (sum === n) {
        answer += 1;
      } else if (sum > n) {
        break;
      }
    }
  }

  console.log(answer);
}

// 테스트
solution(15);
solution(8);
