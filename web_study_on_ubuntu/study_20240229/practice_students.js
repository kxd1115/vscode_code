let students = [
  { name: "Susan", ID: 1, score: "90", rank: 6 },
  { name: "Jackson", ID: 2, score: "88", rank: 7 },
  { name: "Bob", ID: 3, score: "45", rank: 18 },
  { name: "Jennie", ID: 3, score: "99", rank: 1 },
  { name: "Amy", ID: 3, score: "39", rank: 21 },
  { name: "Lisa", ID: 3, score: "78", rank: 8 },
];

let studentsFullInfo = students.map((val) => `${val.name}: 学号${val.ID}总分${val.score}排名第${val.rank}`);
// console.log(studentsFullInfo);

let failList = students.filter((val) => val.score < 60);
// console.log(failList);

// 自己实现一个foreach()方法
Array.prototype.myForEach = function(fn) {
  for (let i; i < this.length; i++) {
    fn(this[i], i, this);
  };
}
