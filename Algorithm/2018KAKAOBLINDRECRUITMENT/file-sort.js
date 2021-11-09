/* 파일명 정렬하기 */

function solution(files) {
  // 1. 원본 배열을 변하지 않게 하기 위해 복사하여, 할당함
  const copyArr = files.slice();

  copyArr.sort((a, b) => {
    const first = tokenize(a);
    const second = tokenize(b);

    return fileSort(first, second);
  });

  console.log(copyArr);
}

// 2. Head와 Number를 구분하여, 리턴하는 함수 생성
function tokenize(file) {
  let startIdx;
  let endIdx;

  // 3. for문을 돌려, Number 부분의 인덱스만 각 변수에 할당
  for (let i = 0; i < file.length; i++) {
    if (!startIdx && isNumber(file[i])) {
      startIdx = i;
    }

    if (startIdx && !isNumber(file[i + 1])) {
      endIdx = i;
      break;
    }
  }

  const head = file.slice(0, startIdx);
  const number = file.slice(startIdx, endIdx + 1);

  // 대, 소문자 구분을 하지 않기 위해 모두 소문자로 변경한 후에 리턴함
  return [head.toLowerCase(), number * 1];
}

// 4. 파라미터의 타입이 string인지 number인지의 여부를 리턴하는 함수 생성
function isNumber(char) {
  return !isNaN(parseInt(char));
}

// 5. 문제의 조건에 맞게, 오름차순 혹은 내람차순을 할 수 있도록 값을 리턴하는 함수 생성
function fileSort(first, second) {
  // 6. 비구조화 할당을 통해 head, num에 각각 할당함
  let [firstHead, firstNum] = first;
  let [secondHead, secondNum] = second;

  // 7. 비교를 통해 오름 차순, 내림 차순 여부를 리턴
  // 7- 1. 먼저 Head를 비교
  // 7 - 2. Head가 동일할 경우, Number를 비교
  if (firstHead < secondHead) {
    return -1;
  } else if (firstHead > secondHead) {
    return 1;
  } else {
    return firstNum - secondNum;
  }
}

// 테스트
solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']);
solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']);
