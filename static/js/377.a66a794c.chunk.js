"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[377],{9905:function(n,e,t){t.d(e,{TP:function(){return u},Zy:function(){return d},gH:function(){return o},rj:function(){return s},tx:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"bcffd2e7e681aa94b83a55719216dc7b",language:"en-US",include_adult:!1};var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6377:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,c,i,s,o,u=t(5861),d=t(9439),l=t(7757),p=t.n(l),f=t(2791),x=t(7689),h=t(6036),v=t(9905),g=t(5320),m=t(168),w=t(6444),j=t(1087),Z=(0,w.ZP)(j.OL)(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 10px 10px;\n  width: 130px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #141314;\n  background-color: #dfebe8;\n  /*  */\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n"]))),b=w.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),k=w.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: #250c27;\n"]))),y=(0,w.ZP)(j.OL)(i||(i=(0,m.Z)(["\n  display: block;\n  padding: 8px 16px;\n  width: 60px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  padding: 10px 20px;\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n\n  &.active {\n    color: #1a39a0;\n    background-color: #ffcc00;\n  }\n"]))),_=w.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n"]))),P=w.ZP.p(o||(o=(0,m.Z)(["\n  color: #4a4646;\n  font-size: 18px;\n  line-height: 1.67;\n  font-weight: 500;\n"]))),z=t(184),L=function(){var n,e,t=(0,f.useState)([]),r=(0,d.Z)(t,2),a=r[0],c=r[1],i=(0,x.UO)().movieId,s=null!==(n=null===(e=(0,x.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,v.TP(i);case 5:e=n.sent,c(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]);var o=a.title,l=a.poster_path,m=a.vote_average,w=a.overview,j=a.genres;return(0,z.jsxs)("main",{children:[(0,z.jsxs)(Z,{to:s,children:[(0,z.jsx)(h.VG_,{size:24}),"Go to back"]}),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(b,{children:[(0,z.jsx)("img",{src:l?"http://image.tmdb.org/t/p/w500".concat(l):g,width:"340px",alt:o}),(0,z.jsxs)(k,{children:[(0,z.jsx)("h2",{children:o}),(0,z.jsxs)(P,{children:["User score: ",(0,z.jsxs)("span",{children:[m," %"]})]}),(0,z.jsx)("h3",{children:"Overview"}),(0,z.jsx)(P,{children:w}),(0,z.jsx)("h3",{children:"Genres"}),j&&(0,z.jsx)(P,{children:j.map((function(n){return n.name})).join(" ")})]})]}),(0,z.jsx)(P,{children:"Additional information"})]}),(0,z.jsxs)(_,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(y,{to:"cast",state:{from:"".concat(s)},children:"Cast"})},"cast"),(0,z.jsx)("li",{children:(0,z.jsx)(y,{to:"reviews",state:{from:"".concat(s)},children:"Reviews"})},"reviews")]}),(0,z.jsx)(f.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading detalis..."}),children:(0,z.jsx)(x.j3,{id:i})})]})}},5320:function(n,e,t){n.exports=t.p+"static/media/dog-loader.0eccc6991dce4536fc9e.jpg"}}]);
//# sourceMappingURL=377.a66a794c.chunk.js.map