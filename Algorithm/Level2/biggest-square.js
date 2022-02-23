// 가장 큰 정사각형 찾기

function solution(board) {
  let answer = 0;

  let row = board.length;
  let col = board[0].length;

  if (row < 2 || col < 2) {
    answer = 1;
    return;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        let min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);

        board[i][j] = min + 1;
      }

      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  console.log(answer * answer);
}

// 테스트
solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
]); // 3

solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]); // 2

/* 문제 풀이

1. 행과 열의 값 중 어떠한 값이라도 1이면 넓이는 1이 됩니다.
  -> 정사각형의 넓이를 구하는 것이므로, 행과 열 중에서 하나라도 1일 경우, 결과적으로 가장 큰 정사각형은 가로, 세로가 1인 정사각형의 넓이를 구하는 것이나 마찬가지입니다.

2. for 루프를 돌려 현재 위치(자신의 인덱스)의 값이 1 이상일 경우, 자신의 위치 기준으로 왼쪽, 위쪽, 왼쪽 상단 대각선의 위치에 있는 값들 중 최소값을 구합니다.

3. 그 후, 자신의 위치의 값에 (최솟값 + 1)을 할당합니다.

4. <2>번, <3>번 과정이 끝난 후에, 최종적으로 할당된 자신의 위치 값을 2번 곱하여 넓이를 리턴해주면 됩니다.

*/
