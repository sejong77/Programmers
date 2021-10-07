function solution(array, commands) {
  let answer = [];
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    for (let j = 0; j < commands[i].length; j++) {
      answer.push(commands[i][j]);
    }

    result.push(
      array
        .slice(answer[0] - 1, answer[1])
        .sort((a, b) => a - b)
        .find((v, i) => i === answer[2] - 1)
    );

    answer = [];
  }

  console.log(result);
}

// 테스트
solution(
  [1, 5, 2, 6, 3, 7, 14],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 7],
  ]
);
