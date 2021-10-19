function solution(sizes) {
  let width = sizes.map((v) => v[0]);
  let height = sizes.map((v) => v[1]);

  for (let i = 0; i < sizes.length; i++) {
    if (width[i] < height[i]) {
      let tmp = width[i];
      width[i] = height[i];
      height[i] = tmp;
    }
  }

  const maxWidth = Math.max(...width);
  const maxHeight = Math.max(...height);

  const result = maxWidth * maxHeight;

  console.log(result);
}

// 테스트
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
