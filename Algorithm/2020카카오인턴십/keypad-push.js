function solution(numbers, hand) {
  // 풀이를 돕기 위해 아래와 같이 취급했다.
  // * -> 10, 0 -> 11, # -> 12

  let result = '';
  let center = [2, 5, 8, 11];

  let locationL = 10;
  let locationR = 12;

  let distL = 0;
  let distR = 0;

  for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];

    if (numbers[i] === 0) {
      val = 11;
    }

    if (val === 1 || val === 4 || val === 7) {
      result += 'L';
      locationL = val;
    } else if (val === 3 || val === 6 || val === 9) {
      result += 'R';
      locationR = val;
    } else {
      distL = center.includes(locationL) ? Math.abs(val - locationL) / 3 : Math.abs(val - 1 - locationL) / 3 + 1;
      distR = center.includes(locationR) ? Math.abs(val - locationR) / 3 : Math.abs(val + 1 - locationR) / 3 + 1;

      if (distL > distR) {
        result += 'R';
        locationR = val;
      } else if (distL < distR) {
        result += 'L';
        locationL = val;
      } else {
        if (hand === 'right') {
          result += 'R';
          locationR = val;
        } else {
          result += 'L';
          locationL = val;
        }
      }
    }
  }

  console.log(result);
}

// 테스트
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right');
