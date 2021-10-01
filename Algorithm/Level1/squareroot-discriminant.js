function solution(n) {
  const num = Math.sqrt(n);
  const answer = Number.isInteger(num) ? (num + 1) * (num + 1) : -1;

  console.log(answer);
}

// 테스트
solution(121);
solution(3);
