function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let answer = [];

  answer.push(gcd(n, m), lcm(n, m));

  console.log(answer);
}

// 테스트
solution(3, 12);
solution(2, 5);
solution(6, 32);
