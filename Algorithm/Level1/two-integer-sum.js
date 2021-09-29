function solution(a, b) {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  console.log(sum);
}

solution(3, 5);
solution(6, 2);
solution(3, 3);
