function solution(s) {
  let pCount = s.split('').filter((v) => v === 'p' || v === 'P');

  let yCount = s.split('').filter((v) => v === 'y' || v === 'Y');

  if (pCount.length === yCount.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// 테스트
solution('pPoooyY');
solution('PpyyY');
