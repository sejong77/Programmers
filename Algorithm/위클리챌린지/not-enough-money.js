function solution(price, money, count) {
  let originPrice = price;
  let sum = [];

  for (let i = 1; i <= count; i++) {
    price = originPrice * i;
    sum.push(price);
  }

  let answer = sum.reduce((acc, cnt) => acc + cnt);

  if (answer > money) {
    console.log(answer - money);
  } else {
    console.log(0);
  }
}

// 테스트
solution(3, 20, 4);
