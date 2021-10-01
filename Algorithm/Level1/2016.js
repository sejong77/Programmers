function solution(a, b) {
  const date = new Date(2016, a - 1, b).getDay();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  console.log(days[date]);
}

// 테스트
solution(11, 16);
solution(8, 24);
