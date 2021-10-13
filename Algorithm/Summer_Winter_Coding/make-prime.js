function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        answer += 1;

        for (let n = 2; n <= Math.sqrt(sum); n++) {
          if (sum % n === 0) {
            answer -= 1;
            break;
          }
        }
      }
    }
  }

  console.log(answer);
}

// 테스트
solution([1, 2, 3, 4]);
solution([1, 2, 7, 6, 4]);
