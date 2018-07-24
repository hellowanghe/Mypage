Vue.component('nav-counter', {
	 props: ['todos'],
  template: '<div><li><a href="/mypage/index.html">HOME</a></li><li><a href="/mypage/html/life/index.html">LIFE</a></li><li><a href="/mypage/html/note/index.html">NOTE</a></li><li><a href="/mypage/html/others/index.html">OTHER</a></li></div>'
});
new Vue({ el: '#nav-counter' 
  });