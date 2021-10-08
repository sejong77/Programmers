function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }

  console.log(answer.reduce((acc, cnt) => acc + cnt));
}

// 테스트
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);
