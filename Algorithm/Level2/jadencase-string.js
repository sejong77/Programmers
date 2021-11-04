/* JadenCase 문자열 만들기 */

function solution(s) {
  // 1. 주어진 문자열을 모두 소문자로 변경 후, 공백을 기준으로 나눈 배열 형태로 변경
  const strToArr = s.toLowerCase().split(' ');

  // 2. 결과 값을 담을 배열 생성
  let result = [];

  for (let i = 0; i < strToArr.length; i++) {
    let index = strToArr[i];

    // 3. 배열의 각 요소 중에 인덱스 0에 해당하는 문자의 조건을 따져봄
    // 4. 조건 -> 숫자가 아니고, undefined가 아니다.
    if (isNaN(index[0]) && index[0] !== undefined) {
      index = index.replace(index[0], index[0].toUpperCase());
    }

    result.push(index);
  }

  // 5. 배열을 다시 문자열 형태로 변경
  console.log(result.join(' '));
}

// 테스트
solution('3people unFollowed me');
solution('for the last week');
// solution(' a  b');
