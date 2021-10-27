function solution(board, move) {
  // 뽑은 인형을 담아둘 배열
  let basket = [];

  // 각 라인의 인형을 담을 배열
  let lineArr = [];

  // 사라진 인형 개수
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    lineArr.push([]);

    for (let j = 0; j < board[i].length; j++) {
      lineArr[i].push(board[j][i]);
    }
  }

  for (let i = 0; i < move.length; i++) {
    let val = move[i] - 1;

    for (let j = 0; j < lineArr[val].length; j++) {
      if (lineArr[val][j] !== 0) {
        if (basket[basket.length - 1] !== lineArr[val][j]) {
          basket.push(lineArr[val][j]);
          lineArr[val][j] = 0;
        } else {
          basket.pop();
          lineArr[val][j] = 0;
          result += 2;
        }
        break;
      }
    }
  }

  console.log(result);
}

// 태스트
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
