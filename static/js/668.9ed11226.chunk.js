"use strict";(self.webpackChunkenzo_filmes=self.webpackChunkenzo_filmes||[]).push([[668],{5186:function(e,t,n){var s=n(5306),i=n(9981),r=n(1660),o=n(1441),a=n(184);t.Z=function(e){return e.content.map((function(e,t){return(0,a.jsxs)(s.y,{children:[(0,a.jsx)(s.NZ,{children:e.slug}),(0,a.jsx)(r.tq,{modules:[i.W_],navigation:!0,slidesPerView:"auto",className:"mySwiper",loop:"true",breakpoints:{0:{slidesPerView:1.15},350:{slidesPerView:1.5},400:{slidesPerView:1.6},460:{slidesPerView:2.1},500:{slidesPerView:2.3},550:{slidesPerView:2.5},600:{slidesPerView:2.8},680:{slidesPerView:3.3},800:{slidesPerView:3.8},900:{slidesPerView:4.2},1080:{slidesPerView:5.3},1300:{slidesPerView:5.8},1400:{slidesPerView:6.2},1500:{slidesPerView:6.5},1600:{slidesPerView:6.8},1700:{slidesPerView:7.5},1800:{slidesPerView:7.5}},children:e.content.map((function(e,t){return(0,a.jsx)(r.o5,{children:(0,a.jsx)(s.QJ,{children:(0,a.jsx)(o.Z,{variant:"rounded",sx:{background:"#1C1C1C",width:"200px",height:"250px"}})})},t)}))})]},t)}))}},6518:function(e,t,n){n.d(t,{Z:function(){return a}});var s,i=n(168),r=n(7691).ZP.main(s||(s=(0,i.Z)(["\n    padding: 0 1.5em;\n"]))),o=n(184);function a(e){var t=e.children;return(0,o.jsx)(r,{children:t})}},2030:function(e,t,n){var s=n(6731),i=n(9981),r=n(2791),o=n(1660),a=n(74),c=n(5306),d=n(184);function l(e){var t=e.content;return(0,d.jsxs)(c.y,{children:[(0,d.jsxs)(c.NZ,{children:[t.slug," ",t.icon]}),(0,d.jsx)(o.tq,{modules:[i.W_,i.oM],navigation:!0,slidesPerView:"auto",className:"mySwiper",loop:"true",lazy:!0,preloadImages:!1,on:{lazyImageReady:function(e){console.log(e)}},breakpoints:{0:{slidesPerView:1.15},350:{slidesPerView:1.5},400:{slidesPerView:1.6},460:{slidesPerView:2.1},500:{slidesPerView:2.3},550:{slidesPerView:2.5},600:{slidesPerView:2.8},680:{slidesPerView:3.3},800:{slidesPerView:3.8},900:{slidesPerView:4.2},1080:{slidesPerView:5.3},1300:{slidesPerView:5.8},1400:{slidesPerView:6.2},1500:{slidesPerView:6.5},1600:{slidesPerView:6.8},1700:{slidesPerView:7.5},1800:{slidesPerView:7.5}},children:t.content.results.map((function(e){return(0,d.jsx)(o.o5,{className:"swiper-lazy",children:(0,d.jsx)(c.QJ,{children:(0,d.jsxs)(s.rU,{to:"/detalhes/".concat(e.id,'?type="').concat(t.type||t.media_type,'"'),children:[(0,d.jsx)(a.Z,{height:250,offset:.95,children:(0,d.jsx)(c.Ee,{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)})}),(0,d.jsxs)(c.oK,{children:[" ",e.vote_average.toFixed(1)]})]})})},e.id)}))})]})}t.Z=(0,r.memo)(l)},5306:function(e,t,n){n.d(t,{Ee:function(){return p},NZ:function(){return h},QJ:function(){return u},oK:function(){return f},y:function(){return l}});var s,i,r,o,a,c=n(168),d=n(7691),l=d.ZP.section(s||(s=(0,c.Z)(["\n    width: 100%;\n    margin: 2em 0 2em 0 ;\n   \n\n    svg{\n        width:25px;\n        margin: auto 0\n    }\n    "]))),u=d.ZP.div(i||(i=(0,c.Z)(["\n    width: 200px;\n    height: 250px;\n    position: relative;\n\n"]))),f=d.ZP.div(r||(r=(0,c.Z)(["\n    position: absolute;\n    top: 1em;\n    right: 1em;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 2px #FFFF;\n    display: grid;\n    place-items: center;\n    background-color: #000000;\n    color:#FFFF\n"]))),p=d.ZP.img(o||(o=(0,c.Z)(["\n    width: 95%;\n    height: 95%;\n    "]))),h=d.ZP.h2(a||(a=(0,c.Z)(["\n        color: #FFFF;\n        margin-bottom: 0.5em;\n        font-size: 2em;\n        font-weight: normal ;\n        display: flex;\n        align-items: center;\n        gap: 0.5em;\n    "])))},5668:function(e,t,n){n.r(t);var s=n(4165),i=n(5861),r=n(1933),o=(n(2791),n(2030)),a=n(6518),c=n(5186),d=n(8820),l=n(6856),u=n(8014),f=n(7425),p=n(7692),h=n(3853),x=n(74),m=n(184);t.default=function(){function e(){return(e=(0,i.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=(0,m.jsx)(d.o$9,{}),e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4db00bcf6b586a0afd9fb29afa56fa26");case 3:return e.next=5,e.sent.json();case 5:return e.t1=e.sent,e.t2={slug:"Em Alta",icon:e.t0,content:e.t1},e.t3=(0,m.jsx)(l.xki,{}),e.next=10,fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=4db00bcf6b586a0afd9fb29afa56fa26");case 10:return e.next=12,e.sent.json();case 12:return e.t4=e.sent,e.t5={slug:"Recomendados",icon:e.t3,type:"tv",content:e.t4},e.t6=(0,m.jsx)(u.E3f,{}),e.next=17,fetch("https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=28");case 17:return e.next=19,e.sent.json();case 19:return e.t7=e.sent,e.t8={slug:"A\xe7\xe3o",icon:e.t6,type:"movie",content:e.t7},e.t9=(0,m.jsx)(u.O$m,{}),e.next=24,fetch("https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=10759");case 24:return e.next=26,e.sent.json();case 26:return e.t10=e.sent,e.t11={slug:"Aventura",icon:e.t9,type:"tv",content:e.t10},e.t12=(0,m.jsx)(f.F0D,{}),e.next=31,fetch("https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=27");case 31:return e.next=33,e.sent.json();case 33:return e.t13=e.sent,e.t14={slug:"Terror",icon:e.t12,type:"movie",content:e.t13},e.t15=(0,m.jsx)(p.z_D,{}),e.next=38,fetch("https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=35");case 38:return e.next=40,e.sent.json();case 40:return e.t16=e.sent,e.t17={slug:"Com\xe9dia",type:"tv",icon:e.t15,content:e.t16},e.t18=(0,m.jsx)(h.hbr,{}),e.next=45,fetch("https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=99");case 45:return e.next=47,e.sent.json();case 47:return e.t19=e.sent,e.t20={slug:"Document\xe1rios",icon:e.t18,type:"movie",content:e.t19},t=[e.t2,e.t5,e.t8,e.t11,e.t14,e.t17,e.t20],e.abrupt("return",t);case 51:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=(0,r.useQuery)({queryKey:["homeMidia"],queryFn:function(){return e.apply(this,arguments)},refetchOnWindowFocus:!1});return t.isLoading?(0,m.jsx)(a.Z,{children:(0,m.jsx)(c.Z,{content:[{slug:"Em Alta",content:["","","","","","","","",""]},{slug:"Recomendados",type:"tv",content:["","","","","","","","",""]},{slug:"A\xe7\xe3o",type:"movie",content:["","","","","","","","",""]},{slug:"Aventura",type:"tv",content:["","","","","","","","",""]},{slug:"Terror",type:"movie",content:["","","","","","","","",""]},{slug:"Com\xe9dia",type:"tv",content:["","","","","","","","",""]},{slug:"Document\xe1rios",type:"movie",content:["","","","","","","","",""]}]})}):(0,m.jsx)(a.Z,{children:t.data&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{content:t.data[0]}),(0,m.jsx)(o.Z,{content:t.data[1]}),(0,m.jsx)(x.Z,{offset:.8,children:(0,m.jsx)(o.Z,{content:t.data[2]})}),(0,m.jsx)(x.Z,{offset:.8,children:(0,m.jsx)(o.Z,{content:t.data[3]})}),(0,m.jsx)(x.Z,{offset:.8,children:(0,m.jsx)(o.Z,{content:t.data[4]})}),(0,m.jsx)(x.Z,{offset:.8,children:(0,m.jsx)(o.Z,{content:t.data[5]})}),(0,m.jsx)(x.Z,{offset:.8,children:(0,m.jsx)(o.Z,{content:t.data[6]})})]})})}}}]);
//# sourceMappingURL=668.9ed11226.chunk.js.map