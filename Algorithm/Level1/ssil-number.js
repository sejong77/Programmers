function solution(x, n) {
  let plus = x;
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(x);
    x += plus;
  }

  console.log(arr);
}

// 테스트
solution(2, 5);
solution(4, 3);
solution(-4, 2);
