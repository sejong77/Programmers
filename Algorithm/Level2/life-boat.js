// 구명 보트

function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    let sum = people[left] + people[right];

    if (sum > limit) {
      left += 1;
    } else {
      left += 1;
      right -= 1;
    }

    count += 1;
  }

  if (left === right) {
    count += 1;
  }

  console.log(count);
}

// 테스트
solution([70, 50, 80, 50], 100); // 3
solution([70, 80, 50], 100); // 3

/* 문제 풀이

1. 배열을 내림차순 정렬합니다.
2. 가장 큰 수와 작은 수를 합한 값이 limit 값 보다 큰 지의 여부를 따져봅니다.
  2-1. 합한 값이 limit보다 같거나 작을 경우
  -> right 값을 1 감소 시켜줍니다.

3. left, count 값을 1 증가 시켜줍니다.
4. while 반복문이 끝난 후, left 값과 right 값이 동일할 경우, count를 1증가 시켜줍니다.
  4-1. left와 right 값이 같은 경우, while 반복문 처리 과정에서 계산이 안된 값이기 때문에 보트를 1개 추가 시켜줘야 하므로 필요한 코드입니다.

 */
