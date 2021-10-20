function solution(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // 1단계 (모두 소문자로 변경)
  let lower = str.toLowerCase();

  // 2단계 (소문자 && 숫자 && . && _ && - 빼고 전부 제거)
  let two = lower.split('').filter((v) => {
    if (v === '.' || v === '-' || v === '_' || !isNaN(v) || alphabet.includes(v)) {
      return v;
    }
  });

  // 3단계 (.은 무조건 하나만 --> 중복되는 .을 모두 하나로 만들라는 의미)
  let dotArr = [];
  let three = '';

  for (let i = 1; i < two.length; i++) {
    if (two[i - 1] === '.' && two[i] === '.') {
      dotArr.push(i - 1);
    }
  }

  three = two
    .filter((v, i) => {
      if (!dotArr.includes(i)) {
        return v;
      }
    })
    .join('');

  // 4단계 (.가 처음 혹은 끝에 위치한다면 제거)
  let four = '';
  let chk = false;
  let returnChk = false;

  if (three[0] === '.') {
    four = three.substring(1, three.length);
    chk = true;
    returnChk = true;
  }

  if (three[three.length - 1] === '.') {
    if (chk) {
      four = four.substring(0, four.length - 1);
    } else {
      four = three.substring(0, three.length - 1);
    }

    returnChk = true;
  }

  // 5단계 (빈 문자열이라면 'a'를 대입)
  let five = returnChk ? four : three;

  if (five === '') {
    five = 'a';
  }

  // 6단계 (16자 이상이면, 첫 15자의 문자열로 만들고, 그 후에 마지막 문자가 .이면 제거)
  let six = '';

  if (five.length >= 16) {
    six = five.substring(0, 15);

    if (six[14] === '.') {
      six = six.substring(0, 14);
    }
  }

  // 7단계 (길이가 2자 이하이면, 문자열의 마지막 문자를 길이가 3자 이상이 될 떄까지 이어 붙힌다.)
  let seven = six ? six : five;

  if (seven.length <= 2) {
    let plusStr = seven[seven.length - 1];

    while (seven.length < 3) {
      seven += plusStr;
    }
  }

  console.log(seven);
}

solution('...!@BaT#*..y.abcdefgh.ijklm4.');
solution('z-+.^.');
solution('=.=');
solution('123_.def');
solution('abcdefghijklmn.p');
