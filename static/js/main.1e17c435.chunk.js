(this["webpackJsonpteam-git"]=this["webpackJsonpteam-git"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(12),r=n.n(i),s=(n(21),n(22),n(4)),o=n(0),l=function(t){var e=Object(c.useState)("https://api.nasa.gov/planetary/earth/imagery"),n=Object(s.a)(e,2),a=n[0],i=(n[1],Object(c.useState)("zaxtk9rKvXyBmxXTh0eSgBGL5QSYKVjbXQs66gJy")),r=Object(s.a)(i,2),l=r[0],j=(r[1],Object(c.useState)("")),u=Object(s.a)(j,2),h=(u[0],u[1]);return"geolocation"in navigator?(console.log("Location is available"),navigator.geolocation.getCurrentPosition((function(t){console.log(t.coords.longitude),console.log(t.coords.latitude)}))):console.log("Location is not available"),Object(c.useEffect)((function(){fetch("".concat(a,"?api_key=").concat(l,"&lon=","-86.06","&lat=","40.04")).then((function(t){return t.blob()})).then((function(t){return h(a.createObjectURL(t))})).catch((function(t){return console.log(t)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Latitude: "}),Object(o.jsx)("h1",{children:"Longitude: "})]})},j=n(13),u=n(14),h=n(9),d=n(16),b=n(15),O=n(29),p=n(30),x=n(31),g=n(32),f=function(t){return console.log(t),Object(o.jsx)("div",{children:0===Object.keys(t.main).length&&0===t.weather.length?Object(o.jsx)("div",{children:" Loading... "}):Object(o.jsxs)("div",{children:[" ",Object(o.jsxs)(O.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"},children:[Object(o.jsx)(p.a,{children:Object(o.jsx)("h1",{children:t.city})}),Object(o.jsx)(x.a,{children:Object(o.jsxs)("h3",{children:[Math.round(t.main.temp),"\xb0"]})}),Object(o.jsx)("div",{style:{textAlign:"center"},children:Object(o.jsx)(g.a,{src:"http://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),alt:"weather icon",style:{height:"50px",width:"50px"}})}),Object(o.jsxs)("p",{style:{fontSize:"12px",marginTop:"3em"},children:["Last update at ",t.time]})]})]})})},m=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).state={baseURL:"https://api.openweathermap.org/data/2.5/weather",city:"Indianapolis",apiKey:"37f707e1986a973647faed4122426481",main:{},weather:[],time:null,unit:"imperial"},c.cfSwitch=c.cfSwitch.bind(Object(h.a)(c)),c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.fetchInterval=setInterval((function(){fetch("".concat(t.state.baseURL,"?q=").concat(t.state.city,"&units=").concat(t.state.unit,"&appid=").concat(t.state.apiKey)).then((function(t){return t.json()})).then((function(e){return t.setState({main:e.main,weather:e.weather})})).catch((function(t){return console.log(t)}))}),1500)}},{key:"componentDidUpdate",value:function(t,e){console.log(e.main.temp,this.state.main.temp);var n=(new Date).toLocaleTimeString();e.main.temp!==this.state.main.temp&&(console.log("state has changed"),this.setState({time:n}))}},{key:"componentWillUnmount",value:function(){console.log("clearing interval"),clearInterval(this.fetchInterval)}},{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"mainDiv",style:{textAlign:"center"},children:[Object(o.jsx)("button",{onClick:function(){return t.cfSwitch()},children:"'Merica/Cel"}),Object(o.jsx)(f,{city:this.state.city,main:this.state.main,weather:this.state.weather,time:this.state.time,unit:this.state.unit})]})})}},{key:"cfSwitch",value:function(){"imperial"==this.state.unit?this.state.unit="metric":this.state.unit="imperial"}}]),n}(a.a.Component),v=n(8),y=n.n(v),w=n(11),S=function(t){var e=t.events,n=t.changePage;return console.log(e),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(t){return n(t,"down")},children:"Previous 10"}),Object(o.jsx)("button",{onClick:function(t){return n(t,"up")},children:"Next 10"})]}),e.map((function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t.name}),Object(o.jsx)("p",{children:t.type}),Object(o.jsx)("a",{href:t.web_url,children:Object(o.jsx)("button",{children:"Find Out More!"})})]},t._id)}))]})},k=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=(e[0],e[1],function(){var t=Object(w.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.geolocation.getCurrentPosition((function(t){console.log("Latitude is: ",t.coords.latitude),console.log("Longitude is: ",t.coords.longitude)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),a=Object(c.useState)(""),i=Object(s.a)(a,2),r=i[0],l=i[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),h=u[0],d=void 0===h?{position:n}:h,b=(u[1],Object(c.useState)("")),O=Object(s.a)(b,2),p=O[0],x=O[1],g=Object(c.useState)(""),f=Object(s.a)(g,2),m=f[0],v=f[1],k=Object(c.useState)(0),C=Object(s.a)(k,2),L=C[0],N=C[1],T=Object(c.useState)([]),D=Object(s.a)(T,2),P=D[0],I=D[1],E=function(){var t=Object(w.a)(y.a.mark((function t(){var e,n,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat("https://app.ticketmaster.com/discovery/v2/events.json","?apikey=").concat("FGYnq11NCzOT2Nsw8GyhfycPCAnJXEix","&page=").concat(L),e=r?e+"&postalCode=".concat(r):e,e=d?e+"&latlong=".concat(d,"&locale=*"):e,e=p?e+"&beging_date=".concat(p):e,e=m?e+"&end_date=".concat(m):e,t.next=7,fetch(e);case 7:return n=t.sent,t.next=10,n.json();case 10:c=t.sent,I(c),console.log(c);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),E(),N(0)}(t)},children:[Object(o.jsx)("span",{children:"Enter postal code (required) : "}),Object(o.jsx)("input",{type:"number",name:"postalCode",onChange:function(t){return l(t.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Enter a start date: "}),Object(o.jsx)("input",{type:"date",name:"startDateTime",pattern:"[0-9]{8}",onChange:function(t){return x(t.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Enter an end date: "}),Object(o.jsx)("input",{type:"date",name:"endDateTime",pattern:"[0-9]{8}",onChange:function(t){return v(t.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"submit",children:"Submit search"})]}),P.length>0?Object(o.jsx)(S,{results:P,changePage:function(t,e){t.preventDefault(),"down"===e&&L>0&&(N(L-1),E()),"up"===e&&(N(L+1),E())}}):null]})})};var C=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"App",children:["\xa0 \xa0 \xa0   ",Object(o.jsx)("h1",{children:"Team 5: 24hr Project"}),"\xa0 \xa0 \xa0   ",Object(o.jsx)("h2",{children:"Reagan, Nolan, Ginea"}),"\xa0 \xa0 \xa0   ",Object(o.jsx)("hr",{})]}),"\xa0 \xa0 \xa0 ",Object(o.jsxs)("div",{children:["\xa0 \xa0 \xa0 \xa0 ","\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)("h3",{children:"Nasa"}),"\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)(l,{}),"\xa0 \xa0 \xa0 "]}),"\xa0 \xa0 \xa0 ",Object(o.jsxs)("div",{children:["\xa0 \xa0 \xa0 \xa0 ","\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)("h3",{children:"Weather"}),"\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)(m,{}),"\xa0 \xa0 \xa0 "]}),"\xa0 \xa0 \xa0 ",Object(o.jsxs)("div",{children:["\xa0 \xa0 \xa0 \xa0 ","\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)("h3",{children:"Ticketmaster"}),"\xa0 \xa0 \xa0 \xa0 ",Object(o.jsx)(k,{}),"\xa0 \xa0 \xa0 "]}),"\xa0 \xa0 "]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),L()}},[[27,1,2]]]);
//# sourceMappingURL=main.1e17c435.chunk.js.map