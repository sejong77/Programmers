/* 최솟값 만들기 */

function solution(A, B) {
  const copyA = A.slice();
  const copyB = B.slice();

  copyA.sort((a, b) => a - b);
  copyB.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < copyA.length; i++) {
    sum += copyA[i] * copyB[i];
  }

  console.log(sum);
}

// 테스트
solution([1, 4, 2], [5, 4, 4]);
solution([1, 2], [3, 4]);
