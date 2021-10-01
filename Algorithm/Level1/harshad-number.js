function solution(x) {
  let num = x.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  console.log(x % sum ? false : true);
}

// 테스트
solution(10);
solution(11);
solution(12);
solution(13);
