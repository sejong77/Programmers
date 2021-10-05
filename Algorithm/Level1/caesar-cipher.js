function solution(s, n) {
  let newStr = String(s);

  let answer = newStr
    .split('')
    .map((value) => {
      if (value === ' ') {
        return value;
      }

      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() - 26 + n)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join('');

  console.log(answer);
}

// 테스트
solution('ABD Ca', 1);
solution('z', 25);
solution('a B Z', 4);
