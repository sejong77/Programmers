/* 신고 결과 받기 */

function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);

  const reportList = {};

  id_list.map((user) => {
    reportList[user] = [];
  });

  report.map((user) => {
    const [userId, reportId] = user.split(' ');

    if (!reportList[reportId].includes(userId)) {
      reportList[reportId].push(userId);
    }
  });

  for (const key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  console.log(answer);
}

// 테스트
solution(['muzi', 'frodo', 'apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2);
solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3);
