function solution(s) {
  const answer = s.split('').sort().reverse().join('');

  console.log(answer);
}

// 테스트
solution('Zbcdefg');
solution('baefgEdAz');
