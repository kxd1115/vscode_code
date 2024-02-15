console.log(new Date());

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask(
  "Are you sure?",
  function() {alert('you are argeed.')},
  function() {alert("I'm not sure.")}
);

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript('hello.js');

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`),
);

promise.then(script => alert("Another handler..."));

