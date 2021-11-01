/* 숫자의 표현 */

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;

    for (let j = i; j <= n; j++) {
      sum += j;

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
