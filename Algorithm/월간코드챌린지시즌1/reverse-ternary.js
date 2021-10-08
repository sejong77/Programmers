function solution(n) {
  let answer = n.toString(3).split('').reverse().join('');

  console.log(parseInt(answer, 3));
}

// 테스트
solution(45);
solution(125);
