Vue.component('nav-counter', {
	 props: ['todos'],
  template: '<div><li><a href="/index.html">HOME</a></li><li><a href="/html/life/index.html">LIFE</a></li><li><a href="/html/note/index.html">NOTE</a></li><li><a href="/html/others/index.html">OTHER</a></li></div>'
});
new Vue({ el: '#nav-counter' 
  });