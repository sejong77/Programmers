/* 행렬의 곱셈 */

function solution(arr1, arr2) {
  // 행렬의 곱을 삽입할 배열
  let result = [];

  // 3중 for문을 활용하여, 행렬의 곱셉을 구함
  for (let i = 0; i < arr1.length; i++) {
    result.push([]);

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i].push(sum);
    }
  }

  console.log(result);
}

// 테스트
solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);

solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
