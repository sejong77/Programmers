function solution(absolutes, signs) {
  let arr = [];

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      arr.push(absolutes[i]);
    } else {
      arr.push(absolutes[i] * -1);
    }
  }

  let answer = arr.reduce((acc, cu) => acc + cu);
  console.log(answer);
}

// 테스트
solution([4, 7, 12], [true, false, true]);
solution([1, 2, 3], [false, false, true]);
