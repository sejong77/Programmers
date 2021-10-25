function solution(n, arr1, arr2) {
  let binaryArr1 = [];
  let binaryArr2 = [];

  // 각 배열의 요소를 2진수로 전환하여 새로운 배열에 대입
  binaryArr1 = arr1.map((x) => x.toString(2));
  binaryArr2 = arr2.map((x) => x.toString(2));

  // 가로 길이와 같아지도록 2진수 앞에 0을 추가
  for (let i = 0; i < n; i++) {
    while (binaryArr1[i].length < n) {
      binaryArr1[i] = '0' + binaryArr1[i];
    }
  }

  for (let i = 0; i < n; i++) {
    while (binaryArr2[i].length < n) {
      binaryArr2[i] = '0' + binaryArr2[i];
    }
  }

  // 배열 1과 배열 2의 각 자릿 수를 비교하여 공백 혹은 '#'을 배열에 푸시해줌
  let answerArr = [];

  for (let i = 0; i < n; i++) {
    answerArr.push([]);
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === '0' && binaryArr2[i][j] === '0') {
        answerArr[i].push(' ');
      } else {
        answerArr[i].push('#');
      }
    }
  }

  console.log(answerArr.map((x) => x.join('')));
}

// 테스트
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
