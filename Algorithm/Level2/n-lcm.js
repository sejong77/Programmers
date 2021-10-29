/* N개의 최소공배수 */

function solution(arr) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  console.log(result);
}

// 테스트
solution([2, 6, 8, 14]);
solution([1, 2, 3]);
