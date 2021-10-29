function solution(n, lost, reserve) {
  // 파라미터 값이 변하지 않도록 변수에 파라미터를 깊은 복사
  const copyLost = lost.slice();
  const copyReserve = reserve.slice();

  // 각각의 배열을 오름차순 정렬
  copyLost.sort((a, b) => a - b);
  copyReserve.sort((a, b) => a - b);

  const count = new Array(n); // 각 번호의 학생이 가진 체육복 개수

  // 모든 학생들이 체육복을 1벌씩 가지고 있다고 가정
  count.fill(1);

  // 여벌의 옷이 있는 학생의 경우 증가
  copyReserve.forEach((v) => {
    const index = v - 1;

    if (!copyLost.includes(v)) {
      count[index] = 2;
    }
  });

  // 잃어버린 학생 중 빌릴 수 있는 여부 체크
  copyLost.forEach((v) => {
    if (!copyReserve.includes(v)) {
      const index = v - 1;

      if (count[index - 1] === 2) {
        count[index - 1] = 1;
        count[index] = 1;
      } else if (count[index + 1] === 2) {
        count[index + 1] = 1;
        count[index] = 1;
      } else {
        // 빌리지 못한 경우
        count[index] = 0;
      }
    }
  });

  const target = count.filter((c) => c >= 1);

  console.log(target.length);
}

// 테스트
solution(5, [2, 4, 1], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); // 2
