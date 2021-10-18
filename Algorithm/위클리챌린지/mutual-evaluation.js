function solution(scores) {
  let answer = [];
  let n = scores.length;

  for (let i = 0; i < n; i++) {
    let temp = [];
    let average = 0;

    for (let j = 0; j < n; j++) {
      temp.push(scores[j][i]);
    }

    let max = Math.max(...temp);
    let min = Math.min(...temp);
    let chk = checkUniq(max, min, temp);

    switch (chk) {
      case 'maxmin':
        let flag = false;

        if (!flag && temp[i] === max) {
          temp.splice(temp.indexOf(max), 1);
          flag = true;
        }

        if (!flag && temp[i] === min) {
          temp.splice(temp.indexOf(min), 1);
          flag = true;
        }

        break;

      case 'max':
        temp[i] === max ? temp.splice(temp.indexOf(max), 1) : (temp = temp);
        break;

      case 'min':
        temp[i] === min ? temp.splice(temp.indexOf(min), 1) : (temp = temp);
        break;
    }

    average = calc(temp);
    answer.push(calcLank(average));
  }

  console.log(answer.join(''));
}

function calc(temp) {
  let average = 0;
  temp.forEach((v) => {
    average += v;
  });

  average /= temp.length;

  return average;
}

function calcLank(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

function checkUniq(max, min, temp) {
  let mxChk = 0;
  let mnChk = 0;

  temp.forEach((v) => {
    if (v === max) {
      mxChk += 1;
    }

    if (v === min) {
      mnChk += 1;
    }
  });

  if (mxChk === 1 && mnChk === 1) {
    return 'maxmin';
  } else if (mxChk === 1 && mnChk !== 1) {
    return 'max';
  } else if (mxChk !== 1 && mnChk === 1) {
    return 'min';
  } else {
    return 'noUnique';
  }
}

// 테스트
solution([
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
]);
solution([
  [50, 90],
  [50, 87],
]);
solution([
  [70, 49, 90],
  [68, 50, 38],
  [73, 31, 100],
]);
