function solution(numbers) {
  let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = numArray.reduce((acc, cnt) => acc + cnt);

  let answer = sum - numbers.reduce((acc, cnt) => acc + cnt);

  console.log(answer);
}

// 테스트
solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);
