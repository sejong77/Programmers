/* 연속하는 숫자의 합 중 최대 값을 구해라 */

function solution(arr) {
  // 1. 최대 값을 할당할 변수 선언
  let maxValue = 0;

  // 2. 배열의 요소를 순회하며, 현재 값을 할당할 변수 선언
  let currentValue = 0;

  // 3-1. 배열 arr를 순회하며, 더한 값이 0보다 작을 경우, currentValue를 0으로 초기화
  // 3-2. currentvalue와 maxValue를 비교하여, 더 큰 값을 maxValue에 할당
  arr.forEach((v) => {
    currentValue = Math.max(0, currentValue + v);
    maxValue = Math.max(maxValue, currentValue);
  });

  console.log(maxValue);
}

// 테스트
solution([1, -2, 2, 4, 5, -6, 3]); // 결과 11 -> 2 + 4 + 5
solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 결과 6 -> 4 - 1 + 2 + 1
