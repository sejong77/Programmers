function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  console.log(Number(answer));
}

// 테스트
solution('one4seveneight');
solution('23four5six7');
solution('2three45sixseven');
solution('123');
