function solution(arr, divisor) {
  let newArray = arr
    .filter((v) => v % divisor === 0)
    .sort((a, b) => {
      return a - b;
    });

  if (newArray.length === 0) {
    newArray = [-1];
  }

  console.log(newArray);
}

// 테스트
solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
