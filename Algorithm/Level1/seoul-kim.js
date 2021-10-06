function solution(seoul) {
  let index;

  for (let i = 0; i < seoul.length; i++) {
    if ('Kim' === s[i]) {
      index = i;
    }
  }

  console.log(`김서방은 ${index}에 있다`);
}

// 테스트
solution(['Jane', 'Kim']);
