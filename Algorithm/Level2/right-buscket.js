/* 올바른 괄호 */

function solution(s) {
  // 출력할 값
  let answer = true;

  // 1. 문자열의 첫번 째 괄호가 ')' 이거나 마지막 괄호가 '(' 이면 false
  if (s.charAt(0) === ')' || s.charAt(s.length - 1) === '(') {
    answer = false;
  }

  // 2. 문자열에 여는, 닫는 괄호의 개수를 각각의 변수에 할당
  const a = s.split('').filter((x) => x === '(').length;
  const b = s.split('').filter((x) => x === ')').length;

  // 3, 괄호의 개수가 다르면 false
  if (a !== b) {
    answer = false;
  }

  let openCnt = 0;

  // 4. 문자열을 순회하면서, 여는 괄호면 openCnt 1증가, 아니면 1 감소
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      openCnt += 1;
    } else {
      openCnt -= 1;
    }

    // 5. openCnt가 0보다 작을 경우 --> 연속적으로 나타나는 괄호의 종류가 닫는괄호가 여는 괄호보다 더 많을 경우 false
    if (openCnt < 0) {
      answer = false;
    }
  }

  console.log(answer);
}

// 테스트
solution('()()');
solution('(())()');
solution(')()(');
solution('(()(');
solution('()))((()');
