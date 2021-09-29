function solution(arr) {
  if (arr.length <= 1) {
    console.log([-1]);
  }

  const minIndex = arr.indexOf(Math.min(...arr));
  arr.splice(minIndex, 1);

  console.log(arr);
}

// 테스트
solution([4, 2, 1, 3]);
