/* 최솟값 만들기 */

function solution(A, B) {
  // 1. 인자의 원래 값을 변하지 않게 하기 위해 변수에 인자를 복사한다.
  const copyA = A.slice();
  const copyB = B.slice();

  // 2. 배열 A는 오름차순 정렬, B는 내림차순 정렬
  copyA.sort((a, b) => a - b);
  copyB.sort((a, b) => b - a);

  // 3. 결과 값을 할당할 변수 선언 (0으로 초기화)
  let sum = 0;

  // 4. 배열 A의 각 요소와 배열 B의 각 요소를 곱한 값을 sum에 누적 할당
  for (let i = 0; i < copyA.length; i++) {
    sum += copyA[i] * copyB[i];
  }

  console.log(sum);
}

// 테스트
solution([1, 4, 2], [5, 4, 4]);
solution([1, 2], [3, 4]);
