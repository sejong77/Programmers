function solution(left, right) {
  let num = [];
  let divisor = [];
  let sum = 0;

  for (let i = left; i <= right; i++) {
    num.push(i);
  }

  for (let i = 0; i < num.length; i++) {
    let divisorCount = 0;

    for (let j = 1; j <= num[i]; j++) {
      if (num[i] % j === 0) {
        divisorCount += 1;
      }
    }
    divisor.push(divisorCount);
  }

  for (let i = 0; i < num.length; i++) {
    if (divisor[i] % 2) {
      sum -= num[i];
    } else {
      sum += num[i];
    }
  }

  console.log(num);
  console.log('약수의 갯수: ', divisor);
  console.log('총합: ', sum);
}

// 테스트
solution(13, 17);
solution(24, 27);
