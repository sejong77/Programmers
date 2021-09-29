function solution(s) {
  const answer = s.substr(Math.round(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);

  console.log(answer);
}

// 테스트
solution('abcde');
solution('qwer');
solution('adsfasdf');
solution('adsfsdf');
