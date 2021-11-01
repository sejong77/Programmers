/* JadenCase 문자열 만들기 */

function solution(s) {
  const strToArr = s.toLowerCase().split(' ');
  let result = [];

  for (let i = 0; i < strToArr.length; i++) {
    let index = strToArr[i];

    if (isNaN(index[0]) && index[0] !== undefined) {
      index = index.replace(index[0], index[0].toUpperCase());
    }

    result.push(index);
  }

  console.log(result.join(' '));
}

// 테스트
solution('3people unFollowed me');
solution('for the last week');
// solution(' a  b');
