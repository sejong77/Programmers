// H-Index

function solution(citations) {
  let hIdx = 0;

  citations.sort((a, b) => b - a);

  while (hIdx + 1 <= citations[hIdx]) {
    hIdx += 1;
  }

  console.log(hIdx);
}

// 테스트
solution([3, 0, 6, 1, 5]); // 3

/*  문제 풀이
  
  1. 이 문제에서 h-index는 주어진 저자의 논문이 각각 최소 h번 인용된 h개 이상의 논문을 출판 한 h의 최대값을 구하는 것입니다.
  2. 배열을 내림차순 정렬을 합니다.
  3. hIndex 값을 0부터 1씩 증가시키면서 해당 값을 배열의 인덱스와 비교합니다.
  4. hIndex보다 작은 값을 배열의 인덱스 값에서 발견하면, while 반복문을 종료합니다.
  5. 0부터 1씩 증가시킨 hIndex 값을 출력합니다.

 */
