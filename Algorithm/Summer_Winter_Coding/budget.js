function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    answer += 1;
    sum += d[i];

    if (sum > budget) {
      answer -= 1;
    }
  }

  console.log(answer);
}

// 테스트
solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
