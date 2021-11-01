/* 다음 큰 숫자 */

function solution(n) {
  // 주어진 수를 2진법으로 변환한 뒤 1의 개수를 할당하는 변수
  const binary = n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length;

  let idx = n; // 파라미터로 주어진 수

  // 무한 반복을 실행함
  while (true) {
    idx += 1;

    // 주어진 수 보다 큰 수 중에, 2진수로 변환한 후, 1의 개수가 같은 경우, 해당 값을 출력
    if (
      binary ===
      idx
        .toString(2)
        .split('')
        .filter((x) => x === '1').length
    ) {
      console.log(idx);
      break;
    }
  }
}

// 테스트
solution(78);
solution(15);
