/* 피보나치 수 */

function solution(n) {
  // 1. 0과 1은 고정 값이므로 배열에 할당
  let newArr = [0, 1];

  // 2. 피보나치 수열의 n번째 수와 나눌 값
  const divisor = 1234567;

  // 3. 피보나치 수열을 divisor와 나눈 나머지 값을 newArr 배열에 할당
  for (let i = 2; i <= n; i++) {
    newArr[i] = (newArr[i - 1] + newArr[i - 2]) % divisor;
  }

  console.log(newArr[n]);
}

// 테스트
solution(3);
solution(5);
