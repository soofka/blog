var disqus_config = function () {
  this.page.url = 'http://soofka.pl';
  this.page.identifier = document.location.href.substr(document.location.href.indexOf(this.page.url)+this.page.url.length);
};
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://soofka-pl.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();