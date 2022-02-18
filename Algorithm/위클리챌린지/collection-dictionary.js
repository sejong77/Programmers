/* 모음 사전 */
function solution(word) {
  const alpha = ['A', 'E', 'I', 'O', 'U'];

  for (let i = 1; i <= 5; i++) {
    dfs(alpha, 0, i);
  }

  console.log(answers.sort().indexOf(word) + 1);
}

let answers = [];

function dfs(alpha, depth, num, arr = []) {
  if (depth === num) {
    let str = arr.join('');
    answers.push(str);
  } else {
    for (let i = 0; i < alpha.length; i++) {
      arr.push(alpha[i]);
      dfs(alpha, depth + 1, num, arr);
      arr.pop();
    }
  }
}

// 테스트
// solution('AAAAE');
// solution('AAAE');
solution('I');
// solution('EIO');
