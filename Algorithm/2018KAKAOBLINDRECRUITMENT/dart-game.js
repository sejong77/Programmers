function solution(dartResult) {
  let scoreArray = []; // 각각의 점수를 담을 배열
  let score = ''; // 점수를 누적하기 위한 변수

  for (let i = 0; i < dartResult.length; i++) {
    let currentValue = dartResult[i]; // dartResult의 현재 요소 값

    // S, D, T, *, # 인지 판별
    // score = '' 해주는 이유는 scoreArray에 push한 후 초기화를 시켜주어 다음 점수를 할당하기 위함
    if (currentValue === 'S') {
      scoreArray.push(parseInt(score));
      score = '';
    } else if (currentValue === 'D') {
      scoreArray.push(Math.pow(parseInt(score), 2));
      score = '';
    } else if (currentValue === 'T') {
      scoreArray.push(Math.pow(parseInt(score), 3));
      score = '';
    } else if (currentValue === '*') {
      // *이 첫번 째 기회에서 나왔는지, 아닌지를 판별
      if (scoreArray.length === 1) {
        scoreArray[0] *= 2;
      } else if (scoreArray.length > 1) {
        scoreArray[scoreArray.length - 1] *= 2;
        scoreArray[scoreArray.length - 2] *= 2;
      }
    } else if (currentValue === '#') {
      scoreArray[scoreArray.length - 1] *= -1;
    }
    // 위의 문자가 아니라면 점수를 score 변수에 누적
    else {
      score += currentValue;
    }
  }

  console.log(scoreArray.reduce((acc, cnt) => acc + cnt));
}

// 테스트
solution('1S2D*3T');
solution('1D2S#10S');
solution('1D2S0T');
solution('1S*2T*3S');
solution('1D#2S*3S');
solution('1T2D3D#');
solution('1D2S3T*');
