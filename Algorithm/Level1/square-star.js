// 1. 함수 형태로 호출 하는 경우
function solution(a, b) {
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      process.stdout.write('*');
    }
    console.log();
  }
}

// 테스트
solution(5, 3);

// 2. 프로그래머스 테스트 케이스에 사용한 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let str = '';

    for (let j = 0; j < a; j++) {
      str += '*';
    }

    console.log(str);
  }
});
