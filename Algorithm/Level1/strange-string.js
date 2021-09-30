function solution(s) {
  let answer = String(s).split(' ');
  let result = [];

  for (let i = 0; i < answer.length; i++) {
    let words = answer[i]
      .split('')
      .map((v, i) => {
        if (i % 2) {
          return v.toLowerCase();
        } else {
          return v.toUpperCase();
        }
      })
      .join('');

    result.push(words);
  }

  console.log(result.join(' '));
}

// 테스트
solution('try hello world');
solution('t Dd aFeP');
