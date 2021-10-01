function solution(n) {
  let answer = [];

  for (let i = 0; i < n.length - 1; i++) {
    for (let j = i + 1; j < n.length; j++) {
      const sum = n[i] + n[j];

      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  console.log(
    answer.sort((a, b) => {
      return a - b;
    })
  );
}

// 테스트
solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);
