function solution(n) {
  const answer = String(n)
    .split('')
    .reverse()
    .map((v) => Number(v));

  console.log(answer);
}

// 테스트
solution(12345);
