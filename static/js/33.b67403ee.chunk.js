"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{9245:function(e,n,i){i.d(n,{a:function(){return l}});var t,r=i(5243),s=i(168),a=i(7402).Z.div(t||(t=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=i(184),l=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(r.Fe,{height:"150",width:"150",color:"black",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""})})}},5033:function(e,n,i){i.r(n),i.d(n,{default:function(){return b}});var t,r,s,a,c,l=i(9439),o=i(2791),d=i(9245),h=i(7689),p=i(1087),u=i(168),x=i(8789),f=x.ZP.div(t||(t=(0,u.Z)(["\n  padding-bottom: 20px;\n  display: flex;\n  gap: 15px;\n  border-bottom: 1px solid #c4c4c4;\n"]))),j=x.ZP.img(r||(r=(0,u.Z)(["\n  max-width: 30vw;\n"]))),g=x.ZP.h1(s||(s=(0,u.Z)(["\n  font-size: 22px;\n"]))),v=x.ZP.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 0;\n"]))),m=(0,x.ZP)(p.rU)(c||(c=(0,u.Z)(["\n  padding-bottom: 8px;\n  display: inline-block;\n  /* cursor: pointer; */\n"]))),w=i(184),b=function(){var e=(0,h.UO)().movieId,n=(0,o.useState)(),i=(0,l.Z)(n,2),t=i[0],r=i[1],s=(0,o.useState)(!1),a=(0,l.Z)(s,2),c=a[0],u=a[1],x=(0,h.TH)().state,b=(0,o.useRef)(null===x?"/":x.from);return(0,o.useEffect)((function(){u(!0),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US")).then((function(e){return e.json()})).then((function(e){r(e),u(!1),e.status_message&&r()}))}),[e]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{to:b.current,children:"\u2190 Back to previous page"}),c&&(0,w.jsx)(d.a,{}),t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(j,{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:""}),(0,w.jsxs)("div",{children:[(0,w.jsx)(g,{children:"".concat(t.title," (").concat(t.release_date,")")}),(0,w.jsxs)("p",{children:["User Score: ",Math.ceil(10*t.vote_average),"%"]}),(0,w.jsx)("h2",{children:"Owerview"}),(0,w.jsx)("p",{children:t.overview}),(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsx)(v,{children:t.genres&&t.genres.map((function(e){var n=e.name;return(0,w.jsx)("li",{children:n},n)}))})]})]}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)(v,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(o.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading subpage..."}),children:(0,w.jsx)(h.j3,{})})]}):(0,w.jsx)("p",{children:"The resource you requested could not be found."})]})}}}]);
//# sourceMappingURL=33.b67403ee.chunk.js.map