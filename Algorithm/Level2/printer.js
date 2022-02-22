// 프린터

function solution(priorities, location) {
  let count = 0;
  let myIndex = location;

  while (priorities.length > 0) {
    let output = priorities.shift();

    if (priorities.filter((value) => value > output).length > 0) {
      priorities.push(output);
    } else {
      count += 1;

      if (myIndex === 0) {
        console.log(count);
        break;
      }
    }

    myIndex -= 1;

    if (myIndex === -1) {
      myIndex = priorities.length - 1;
    }
  }
}

// 테스트
solution([2, 1, 3, 2], 2); // 1
solution([1, 1, 9, 1, 1, 1], 0); // 5
solution([3, 1, 4, 2], 3); // 3

/* 문제 풀이

1. location 값을 할당할 변수 myIndex(내 문서 위치)와 카운트 변수 count를 선언
2. 우선 순위 배열에서 가장 앞 문서를 꺼내, 우선순위를 비교
3. 우선순위가 가장 높지 않을 경우, 배열의 맨 뒤에 삽입하고 가장 높을 경우 count 변수의 값을 1 증가
4. myIndex 값이 0이면 while 반복문을 끝내고 count를 출력
5. <4>번 조건을 충족할 때 까지 반복을 계속하고, 한 번의 반복이 끝날 때 마다 myIndex 값을 1 감소 
6. 만일 myIndex 값이 -1일 경우 인덱스를 맨 뒤로 바꿔준다.

*/
