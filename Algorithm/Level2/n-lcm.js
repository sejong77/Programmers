/* N개의 최소공배수 */

function solution(arr) {
  // 1. gcd -> 최대공약수, lcm -> 최소공배수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // 2. 결과 값을 할당할 변수 선언 (1로 초기화)
  let result = 1;

  // 3. 배열의 길이만큼 최소공배수를 구하는 함수를 반복 실행하여, result에 할당
  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  console.log(result);
}

// 테스트
solution([2, 6, 8, 14]);
solution([1, 2, 3]);
