"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[51],{905:function(t,r,e){e.d(r,{TP:function(){return o},Zy:function(){return p},gH:function(){return i},rj:function(){return s},tx:function(){return f}});var n=e(861),a=e(757),u=e.n(a),c=e(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"bcffd2e7e681aa94b83a55719216dc7b",language:"en-US",include_adult:!1};var s=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day");case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},51:function(t,r,e){e.r(r);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(689),i=e(251),o=e(791),p=e(905),f=e(184);r.default=function(){var t=(0,s.UO)().movieId,r=(0,o.useState)([]),e=(0,a.Z)(r,2),u=e[0],l=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,p.Zy(t);case 5:e=r.sent,l(e),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,f.jsx)("ul",{children:u?u.map((function(t){var r=t.id,e=t.profile_path,n=t.original_name,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e?"http://image.tmdb.org/t/p/w500".concat(e):i,width:"100px",alt:n}),(0,f.jsx)("p",{children:n}),(0,f.jsx)("p",{children:a})]},r)})):null})}},251:function(t,r,e){t.exports=e.p+"static/media/cats-4945658_960_720.0f2368920fb8e2463d84.png"}}]);
//# sourceMappingURL=51.26a6aaee.chunk.js.map