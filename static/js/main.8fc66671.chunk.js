(this["webpackJsonpmovie-lister"]=this["webpackJsonpmovie-lister"]||[]).push([[0],{29:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(19),r=a.n(i),s=(a(29),a(7)),o=a.n(s),u=a(8),l=a(20),h=a(3),m=(a(31),a(21)),j=a.n(m),b=a(22),d=(a(50),a(23)),v=a.n(d),O=a(1),g=[{key:"POPULAR",value:"Popular"},{key:"TOPRATED",value:"Top Rated"},{key:"UPCOMING",value:"Upcoming"}];function f(e){var t=e.setFilterType,a=e.selectedFilterType,c=e.resetState,i=e.setSearchMovieText,r=function(e){c(),i(e.target.value)},s=Object(n.useMemo)((function(){return v()(r,150)}),[]);return Object(n.useEffect)((function(){return function(){s.cancel()}}),[]),Object(O.jsxs)("div",{className:"navbar-container",children:[g.map((function(e){return Object(O.jsx)("button",{className:"".concat(e.key===a?"active":""," navbar-container--button"),onClick:function(){return t(e.key)},children:e.value},e.value)})),Object(O.jsx)("input",{className:"navbar-container--input",type:"text",placeholder:"Search for a movie...",onChange:s})]})}a(53),a(54);var p=function(e){var t=c.a.useState(!1),a=Object(h.a)(t,2),n=a[0],i=a[1];return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("img",{className:"image image--thumb ".concat(n?"image--thumb-loaded":"image--thumb-not-loaded"),alt:e.alt,src:e.thumbnail,width:e.width,height:e.height}),Object(O.jsx)("img",{onLoad:function(){i(!0)},className:"image image--full ".concat(n?"image--loaded":"image--not-loaded"),width:e.width,height:e.height,alt:e.alt,src:e.src})]})};function x(e){var t=e.data,a=e.width,n=e.height,c=t.title,i=t.poster_path,r=t.release_date,s="https://image.tmdb.org/t/p/w200/"+i,o="https://image.tmdb.org/t/p/w500/"+i;return Object(O.jsxs)("div",{className:"movie-item--container",style:{width:a,height:n},children:[Object(O.jsx)(p,{alt:c,src:o,thumbnail:s,width:a,height:n}),Object(O.jsx)("div",{className:"movie-item--overlay"}),Object(O.jsxs)("div",{className:"movie-item--overlay-text",children:[Object(O.jsx)("p",{className:"movie-item--title movie-item--title-1",children:c}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"movie-item--title movie-item--title-2",children:r.split("-")[0]})]})]})}var y=a(24),w=a.n(y);function T(e){var t=e.height,a=e.width;return Object(O.jsx)(w.a,{count:1,height:t,width:a})}var P="7c211e20b9f4a7b93823508b71ead123",k=function(e,t){var a=t.currentPage,n=t.searchMovieText,c="https://api.themoviedb.org/3";return c+="SEARCH"===e&&n?"/search/movie?api_key=".concat(P,"&query=").concat(n):"TOPRATED"===e?"/movie/top_rated?api_key=".concat(P):"UPCOMING"===e?"/movie/upcoming?api_key=".concat(P):"/movie/popular?api_key=".concat(P),a&&(c+="&page=".concat(a)),c};var N=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("POPULAR"),r=Object(h.a)(i,2),s=r[0],m=r[1],d=Object(n.useState)(1),v=Object(h.a)(d,2),g=v[0],p=v[1],y=Object(n.useState)([]),w=Object(h.a)(y,2),P=w[0],N=w[1],S=Object(n.useState)(""),C=Object(h.a)(S,2),F=C[0],M=C[1],_=function(){N([]),p(1)},A=Object(n.useCallback)(Object(l.a)(o.a.mark((function e(){var t,a,n,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]&&i[0],console.log({currentPage:g,nextData:t}),e.next=4,j.a.get(k(s,{currentPage:t?g:1,searchMovieText:F}));case 4:a=e.sent,n=a.data,t?(p(g+1),N([].concat(Object(u.a)(P),Object(u.a)(n.results)))):(p(2),N(n.results)),c(n.total_pages);case 8:case"end":return e.stop()}}),e)}))),[P,g,s,F]);return Object(n.useEffect)((function(){_(),setTimeout((function(){A()}),500)}),[s]),Object(n.useEffect)((function(){_(),m(F&&""!==F?"SEARCH":"POPULAR"),setTimeout((function(){A()}),500)}),[F]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{setFilterType:m,selectedFilterType:s,resetState:_,setSearchMovieText:M}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(b.a,{dataLength:P.length,next:function(){return A(!0)},loader:Object(O.jsx)("div",{className:"movie-container",children:Array.from(Array(20).keys()).map((function(e,t){return Object(O.jsx)(T,{height:300,width:200},t)}))}),hasMore:g<a,endMessage:Object(O.jsx)("hr",{}),children:Object(O.jsx)("div",{className:"movie-container",children:P.filter((function(e){return null!==e.poster_path&&e.release_date})).map((function(e,t){return Object(O.jsx)(x,{data:e,height:300,width:200},t)}))})})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),S()}},[[58,1,2]]]);
//# sourceMappingURL=main.8fc66671.chunk.js.map