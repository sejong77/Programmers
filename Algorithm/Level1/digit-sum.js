function solution(n) {
  const answer = String(n);
  let sum = 0;

  for (let i = 0; i < answer.length; i++) {
    sum += Number(answer[i]);
  }

  console.log(sum);
}

// 테스트
solution(987);
solution(123);
