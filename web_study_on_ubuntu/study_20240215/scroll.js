window.addEventListener('scroll', function() {
  this.document.getElementById('showScroll').innerHTML = window.pageYOffset + "px";
})