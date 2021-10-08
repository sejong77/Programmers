function solution(answers) {
  let answer = [];

  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === s1[i % s1.length]) {
      score[0] += 1;
    }

    if (answers[i] === s2[i % s2.length]) {
      score[1] += 1;
    }

    if (answers[i] === s3[i % s3.length]) {
      score[2] += 1;
    }
  }

  const max = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) {
      answer.push(i + 1);
    }
  }

  console.log(answer.sort());
}
// 테스트
solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
