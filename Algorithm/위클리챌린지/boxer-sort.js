function solution(weights, head2head) {
  let arr = [];

  for (let i = 0; i < weights.length; i++) {
    let tmp = head2head[i];
    arr.push([]);

    for (let j = 0; j < tmp.length; j++) {
      arr[i].push(tmp[j]);
    }
  }

  let total = [];
  let heavyWin = new Array(weights.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let all = 0;
    let win = 0;

    for (let j = 0; j < arr[i].length; j++) {
      switch (arr[i][j]) {
        case 'N':
          break;

        case 'W':
          all += 1;
          win += 1;

          if (weights[i] < weights[j]) {
            heavyWin[i] += 1;
          }

          break;

        case 'L':
          all += 1;
          break;
      }
    }

    let winRate = (win / all) * 100;
    isNaN(winRate) ? (winRate = 0) : winRate;

    total.push([i + 1, weights[i], heavyWin[i], winRate]);
  }

  total.sort((a, b) => {
    if (b[3] === a[3]) {
      if (b[2] === a[2]) {
        if (b[1] === a[1]) {
          if (a[0] > b[0]) {
            return 1;
          } else {
            return -1;
          }
        } else if (b[1] > a[1]) {
          return 1;
        } else {
          return -1;
        }
      } else if (b[2] > a[2]) {
        return 1;
      } else {
        return -1;
      }
    } else if (b[3] > a[3]) {
      return 1;
    } else {
      return -1;
    }
  });

  let answer = [];

  total.forEach((v) => {
    answer.push(v[0]);
  });

  console.log(answer);
}

// 테스트
solution([50, 82, 75, 120], ['NLWL', 'WNLL', 'LWNW', 'WWLN']);
solution([145, 92, 86], ['NLW', 'WNL', 'LWN']);
solution([60, 70, 60], ['NNN', 'NNN', 'NNN']);
