(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(13),o=t.n(c),r=(t(47),t(28)),m=t(87),l=t(86),i=(t(48),t(88)),u=t(83),p=t(84),f=(t(49),Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(i.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(u.a,{className:"message__custom"},s.a.createElement(p.a,{color:"white",variant:"h5",component:"h2"},s.a.createElement("strong",{className:"username__strong"},!n&&"".concat(t.username||"Unknown User",": "))," ",t.message))))}))),d=t(27),g=t.n(d),b=g.a.initializeApp({apiKey:"AIzaSyDpyhfpB-NqW1FbNLOmVluBDHNGBlk7IMs",authDomain:"facebook-messenger-clone-7fc0b.firebaseapp.com",databaseURL:"https://facebook-messenger-clone-7fc0b.firebaseio.com",projectId:"facebook-messenger-clone-7fc0b",storageBucket:"facebook-messenger-clone-7fc0b.appspot.com",messagingSenderId:"442606317761",appId:"1:442606317761:web:04b5e4777b7147c9252440",measurementId:"G-MVDHK1T7DJ"}).firestore(),h=t(39),E=t(38),_=t.n(E),v=t(85);var k=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),i=Object(r.a)(o,2),u=i[0],p=i[1],d=Object(n.useState)(""),E=Object(r.a)(d,2),k=E[0],w=E[1];return Object(n.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){w(prompt("Please enter your full name"))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__center"},s.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),s.a.createElement("h1",null,"Hello World \ud83d\ude80"),s.a.createElement("h2",null,"Welcome ",k)),s.a.createElement("form",{className:"app__form"},s.a.createElement(m.a,{className:"app__formControl"},s.a.createElement(l.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return c(e.target.value)}}),s.a.createElement(v.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:t,username:k,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),c("")}},s.a.createElement(_.a,null)))),s.a.createElement(h.a,null,u.map((function(e){var a=e.id,t=e.message;return s.a.createElement(f,{key:a,username:k,message:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.baeb7760.chunk.js.map