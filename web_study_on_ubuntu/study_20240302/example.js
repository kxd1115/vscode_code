fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => alert(response.headers.get('Content-Type')));


// 迭代所有 header
// for (let [key, value] of response.headers) {
//   alert(`${key} = ${value}`);
// }