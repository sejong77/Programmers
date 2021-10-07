function solution(n) {
  let num = [];
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    num[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (num[j] === 0) {
      continue;
    }

    for (let k = j * 2; k <= n; k += j) {
      num[k] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (num[i] !== 0) {
      answer += 1;
    }
  }

  console.log(answer);
}

// 테스트
solution(10);
solution(5);
