function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return (a > b) - (a < b);
    } else {
      return (a[n] > b[n]) - (a[n] < b[n]);
    }
  });

  console.log(answer);
}

// 테스트
solution(['sun', 'bed', 'car', 'app'], 1);
solution(['abce', 'abcd', 'cdx'], 2);
