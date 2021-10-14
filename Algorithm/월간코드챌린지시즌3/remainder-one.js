function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      answer.push(i);
    }
  }

  console.log(Math.min(...answer));
}

// 테스트
solution(10);
solution(12);
solution(3);
