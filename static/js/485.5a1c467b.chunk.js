"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{9905:function(n,t,e){e.d(t,{TP:function(){return s},Zy:function(){return p},gH:function(){return i},rj:function(){return o},tx:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"bcffd2e7e681aa94b83a55719216dc7b",language:"en-US",include_adult:!1};var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,u,o,i,s=e(5861),p=e(9439),f=e(7757),d=e.n(f),l=e(9905),h=e(5119),x=e(2791),m=e(168),v=e(6444),g=e(1087),Z=v.ZP.h2(r||(r=(0,m.Z)(["\n  color: #141314;\n"]))),w=v.ZP.ul(a||(a=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n"]))),b=v.ZP.li(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 250px;\n  gap: 10px;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.2;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 0 rgb(0 0 0 / 0%);\n\n  &:hover {\n    transform: scale(0.97);\n    box-shadow: 0 0 15px 3px #000;\n  }\n"]))),k=(0,v.ZP)(g.OL)(u||(u=(0,m.Z)(["\n  text-decoration: none;\n  width: 100%;\n  color: #141314;\n"]))),y=v.ZP.img(o||(o=(0,m.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  padding-bottom: 12px;\n"]))),j=v.ZP.p(i||(i=(0,m.Z)(["\n  text-transform: uppercase;\n  width: 250px;\n  margin: 0;\n  padding-left: 10px;\n  margin-bottom: 3px;\n"]))),_=e(184),P=function(){var n=(0,x.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1];return(0,x.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.rj();case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,_.jsxs)("main",{children:[(0,_.jsx)(Z,{children:"Trending today"}),(0,_.jsx)(w,{children:e.map((function(n){return(0,_.jsx)(b,{children:(0,_.jsxs)(k,{to:"/movies/".concat(n.id),state:{from:"/"},children:[(0,_.jsx)(y,{src:n.backdrop_path?"http://image.tmdb.org/t/p/w500".concat(n.backdrop_path):h,alt:n.title||n.name}),(0,_.jsx)(j,{children:n.title||n.name})]})},n.id)}))})]})}},5119:function(n,t,e){n.exports=e.p+"static/media/cat-6747298_960_720.fc628cd3ca5fc986d00e.jpg"}}]);
//# sourceMappingURL=485.5a1c467b.chunk.js.map