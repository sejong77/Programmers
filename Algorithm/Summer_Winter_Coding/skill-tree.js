// 스킬트리

function solution(skill, skill_trees) {
  let newStr = '';
  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    /**
     * 1. skill_trees 배열의 각 요소의 문자열을 배열 형태로 변환
     * 2. skill의 문자열에 포함되는 값만 뽑아서 새로운 배열로 리턴
     * 3. 새로운 배열을 문자열 형태로 변환
     */
    newStr = skill_trees[i]
      .split('')
      .filter((value) => skill.includes(value))
      .join('');

    /**
     * skill의 문자열을 처음부터 newStr의 길이 - 1의 index까지의 문자열과 newStr을 비교하여, 동일할 경우 count 값을 1 증가
     */
    if (newStr === skill.substring(0, newStr.length)) {
      count += 1;
    }
  }

  console.log(count);
}

// 테스트
solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']); // 2
