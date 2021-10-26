function solution(lottos, win_nums) {
  // 당첨 번호와 본인의 로또 번호가 일치하는 개수
  let win = 0;

  // 알 수 없는 번호의 개수
  let unknown = 0;

  for (let i = 0; i < lottos.length; i++) {
    // 당첨 번호와 일치하는 본인의 로또 번호가 있을 때마다 win 변수 값 1씩 증가
    if (win_nums.includes(lottos[i])) {
      win += 1;
    }

    // 본인의 로또 번호 중 0이 있을 때 마다 unknown 변수 값 1씩 증가
    if (lottos[i] === 0) {
      unknown += 1;
    }
  }

  const maxValue = win + unknown;
  const minValue = win;

  let result = [];

  result.push(checkLanking(maxValue), checkLanking(minValue));

  console.log(result);
}

function checkLanking(num) {
  if (num === 6) {
    return 1;
  } else if (num === 5) {
    return 2;
  } else if (num === 4) {
    return 3;
  } else if (num === 3) {
    return 4;
  } else if (num === 2) {
    return 5;
  } else {
    return 6;
  }
}

// 테스트
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
