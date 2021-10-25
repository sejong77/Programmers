function solution(nums) {
  const numsLength = nums.length / 2;
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      newArr.push(nums[i]);
    }

    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
    }
  }

  const resultLength = newArr.length;

  console.log(resultLength <= numsLength ? resultLength : numsLength);
}

// 테스트
solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
