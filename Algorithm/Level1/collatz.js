function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count > 500) {
      return -1;
    }

    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }

    count += 1;
  }

  return count;
}

// 테스트
solution(6);
solution(16);
solution(626331);
