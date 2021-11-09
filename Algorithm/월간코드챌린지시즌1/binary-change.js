/* 이진 변환 반복하기 */

function solution(s) {
  let zeroCount = 0; // 변환 과정에서 사리진 0의 개수를 담을 변수 선언
  let changeCount = 0; // 이진 변환의 횟수를 담을 변수 선언
  let strToArr = s.split(''); // 주어진 문자열을 배열로 변환

  // 1. '1'이 될 때까지 무한 반복하는 반복문 선언
  while (strToArr.length > 1) {
    // 2. '0'이면 zeroCount 1증가, '1'이면 strToArr의 요소에 추가
    strToArr = strToArr.filter((x) => {
      if (x === '0') {
        zeroCount += 1;
      } else {
        return x;
      }
    });

    // 3. filter를 통해 새로 생긴 배열의 길이(n) --> n을 다시 2진수 형태의 문자열로 변환
    let binary = strToArr.length.toString(2);

    // 4. 2진수 형태의 문자열을 배열로 변환
    strToArr = binary.split('');

    // 5. 이진 변환 횟수 1증가
    changeCount += 1;
  }

  console.log([changeCount, zeroCount]);
}

// 테스트
solution('110010101001');
solution('01110');
solution('1111111');
