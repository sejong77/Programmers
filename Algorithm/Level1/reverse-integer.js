function solution(n) {
  const answer = Number(String(n).split('').sort().reverse().join(''));

  console.log(answer);
}

// 테스트
solution(118372);
