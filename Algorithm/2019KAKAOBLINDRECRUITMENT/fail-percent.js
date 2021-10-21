function solution(n, stages) {
  let userNumber = stages.length;
  let failRateArr = [];

  for (let i = 1; i <= n; i++) {
    let failStageNum = stages.filter((x) => x === i).length;
    let failRate = 0;

    if (failStageNum === 0) {
      failRate = 0;
    } else {
      failRate = failStageNum / userNumber;
    }

    userNumber -= failStageNum;

    failRateArr.push({ idx: i, rate: failRate });
  }

  failRateArr.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else if (a.rate < b.rate) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  console.log(failRateArr.map((x) => x.idx));
}

// 테스트
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);
