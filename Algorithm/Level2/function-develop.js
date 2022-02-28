// 기능 개발

function solution(progresses, speeds) {
  const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  let maxDay = days[0];

  const result = [];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count += 1;
    } else {
      maxDay = days[i];
      result.push(count);
      count = 1;
    }
  }

  result.push(count);

  console.log(result);
}

// 테스트
solution([93, 30, 55], [1, 30, 5]); // [2, 1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]

/*  문제 풀이

  1. 기능 개발한 것을 며칠 후에 배포할 수 있는지에 대한 값을 담는 배열을 만듭니다.
    1-1. Math.ceil()을 활용한 것은 소수점 단위로 나올 경우, 정수 부분을 올림 처리 하기 위해서 사용했습니다.
    1-2. (100 - 개발 진척도(progresses)) / 개발 속도(speeds))를 통해 며칠 후에 개발이 완료되어 배포할 수 있는지 값을 구할 수 있습니다.

  2. 배열의 첫번 째 인덱스 값을 최대 값으로 설정합니다.
  
  3. for문 루프를 돌려, 최대 값과 비교를 통해 값을 구하도록 합니다.
    3-1. 최대값 보다 작거나 같은 경우
      3-1-1. count값 1 증가
    
    3-2. 최대값 보다 큰 경우
      3-2-1. 해당 값을 최대 값으로 설정
      3-2-2. count 값을 return 할 배열에 푸시
      3-2-3. count 값을 1로 초기화

  4. <3> 과정을 모두 마친 후, 최종적으로 result 배열에 count값을 한번 더 푸시하여, 최종 값까지 result 배열에 포함될 수 있도록 합니다.

 */
