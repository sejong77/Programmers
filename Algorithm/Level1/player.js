function solution(participant, completion) {
  let partSort = participant.sort();
  let comSort = completion.sort();

  let answer = '';

  for (let i = 0; i < partSort.length; i++) {
    if (partSort[i] !== comSort[i]) {
      answer = partSort[i];
      console.log(answer);
    }
  }
}

// 테스트
solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']);
solution(['mislav', 'stanko', 'mislav', 'ana', 'steve'], ['stanko', 'ana', 'mislav', 'steve']);
