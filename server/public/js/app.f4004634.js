(function(t){function e(e){for(var n,l,r=e[0],s=e[1],c=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var s=i[r];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},o={app:0},a=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),o=i.n(n);o.a},"42e4":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],l=(i("034f"),i("2877")),r={},s=Object(l["a"])(r,o,a,!1,null,null,null),c=s.exports,u=i("9483");Object(u["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var d=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pickMovie",on:{click:function(e){return t.closeFilmList()}}},[i("div",{staticClass:"container"},[t.$auth.isAuthenticated?i("h2",[t._v(t._s(t.$auth.user.name))]):t._e(),t.$auth.isAuthenticated?i("p",[t._v(t._s(t.$auth.user.email))]):t._e(),i("h2",[t._v("What Shall We Watch")]),i("div",{staticClass:"blah"},[i("b-form-input",{attrs:{list:"film-list",placeholder:"Search For A Film...",debounce:"300"},on:{update:t.searchFilm},model:{value:t.newFilm,callback:function(e){t.newFilm=e},expression:"newFilm"}}),i("div",{staticClass:"list-group",attrs:{id:"myList"}},t._l(t.searchResults,(function(e){return i("button",{key:e.imdbID,staticClass:"list-group-item list-group-item-action",attrs:{type:"button"},on:{click:function(i){return t.addfilm(e)}}},[t._v(" "+t._s(e.Title)+" ")])})),0)],1),i("div",[i("b-collapse",{ref:"filmList",staticClass:"movieList",attrs:{id:"collapse-1"}},t._l(t.films,(function(t,e){return i("FilmListItem",{key:t+e,attrs:{filmId:t.imdbID}})})),1)],1),i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],class:{openedListIcon:t.toggleClicked},attrs:{id:"toggleListIcon"},on:{click:function(e){return t.toggleStyleClick()}}},[t.toggleClicked?t._e():i("b-icon-list-task",{attrs:{variant:"info"}}),t.toggleClicked?i("b-icon-x"):t._e()],1),i("div",{attrs:{id:"moviePick"}},[i("MoviePicker")],1)])])},f=[];const m="films",p=i("bc3a");function g(t){return p.get("/api/imdb/search/"+t)}function v(){return localStorage.getItem(m)}var b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("b-card",{staticClass:"mb-2",attrs:{"img-src":t.filmInfo.Poster,"img-alt":"Card image","img-left":""}},[i("b-card-title",[t._v(t._s(t.filmInfo.Title))]),i("b-card-text",[t._v(" Imdb - "+t._s(t.filmInfo.imdbRating)+" "),i("input",{attrs:{type:"button",value:"x"},on:{click:t.removeItem}})])],1)],1)},w=[],y={name:"FilmListItem",props:["filmId"],data(){return{filmInfo:{}}},mounted(){this.title="test"},methods:{removeItem(){(void 0)(this.filmInfo.imdbID)}}},k=y,C=(i("6b76"),Object(l["a"])(k,b,w,!1,null,"25324a6a",null)),_=C.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-button",{attrs:{variant:"danger"},on:{click:function(e){t.showOverlay=!0}}},[t._v("PICK ME A MOVIE")]),t.showOverlay?i("div",{attrs:{id:"overlay"},on:{click:function(e){t.showOverlay=!1}}},[i("p",[t._v("The Film you will be watching is...")]),i("div",{staticClass:"slide-up"},[i("p",[t._v(t._s(t.pickMovie()))])])]):t._e()],1)},I=[],S={name:"MoviePicker",data(){return{films:[],index:0,runTextChange:!0,showOverlay:!1}},mounted(){try{this.films=JSON.parse(localStorage.getItem("films")),console.log(this.runTextChange),this.index=Math.floor(Math.random()*this.films.length)}catch(t){localStorage.removeItem("films")}},methods:{pickMovie(){let t=Math.floor(Math.random()*this.films.length);return this.films[t].Title}}},x=S,F=(i("a43c"),Object(l["a"])(x,O,I,!1,null,"4d058c63",null)),P=F.exports,j={name:"Home",components:{FilmListItem:_,MoviePicker:P},data(){return{films:[],newFilm:"",searchResults:"",toggleClicked:!1}},mounted(){var t=v();if(t)try{this.films=JSON.parse(t)}catch(e){localStorage.removeItem("films")}},methods:{addfilm(t){this.films.push(t),this.newFilm="",this.searchResults="",this.savefilms(),this.$toasted.show("Added "+t.Title,{theme:"bubble",position:"bottom-center",duration:2e3})},savefilms(){const t=JSON.stringify(this.films);localStorage.setItem("films",t)},searchFilm(){this.newFilm.length<=3?this.searchResults="":g(this.newFilm).then(t=>this.searchResults=t.data)},toggleStyleClick(){this.toggleClicked=!this.toggleClicked},closeFilmList(){console.log(this.$refs),console.log(this.$root)}}},M=j,T=(i("667e"),Object(l["a"])(M,h,f,!1,null,"46f33b36",null)),A=T.exports;n["default"].use(d["a"]);const L=[{path:"/",name:"AddMovie",component:A}],R=new d["a"]({mode:"history",base:"/",routes:L});var $=R,W=i("5f5b"),E=i("b1e0"),N=(i("f9e3"),i("2dd8"),i("f669"),i("a65d")),J=i.n(N),U=i("8160"),D=i("9767");const q=()=>window.history.replaceState({},document.title,window.location.pathname);let B;const X=({onRedirectCallback:t=q,redirectUri:e=window.location.origin,...i})=>B||(B=new n["default"]({data(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{async loginWithPopup(t){this.popupOpen=!0;try{await this.auth0Client.loginWithPopup(t)}catch(e){console.error(e)}finally{this.popupOpen=!1}this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0},async handleRedirectCallback(){this.loading=!0;try{await this.auth0Client.handleRedirectCallback(),this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0}catch(t){this.error=t}finally{this.loading=!1}},loginWithRedirect(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup(t){return this.auth0Client.getTokenWithPopup(t)},logout(t){return this.auth0Client.logout(t)}},async created(){this.auth0Client=await Object(D["a"])({domain:i.domain,client_id:i.clientId,audience:i.audience,redirect_uri:e});try{if(window.location.search.includes("code=")&&window.location.search.includes("state=")){const{appState:e}=await this.auth0Client.handleRedirectCallback();t(e)}}catch(n){this.error=n}finally{this.isAuthenticated=await this.auth0Client.isAuthenticated(),this.user=await this.auth0Client.getUser(),this.loading=!1}}}),B),H={install(t,e){t.prototype.$auth=X(e)}};n["default"].use(H,{domain:U["b"],clientId:U["a"],onRedirectCallback:t=>{$.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),n["default"].use(W["a"]),n["default"].use(E["a"]),n["default"].use(J.a),n["default"].config.productionTip=!1,new n["default"]({router:$,render:t=>t(c)}).$mount("#app")},"667e":function(t,e,i){"use strict";var n=i("69d8"),o=i.n(n);o.a},"69d8":function(t,e,i){},"6b76":function(t,e,i){"use strict";var n=i("42e4"),o=i.n(n);o.a},8160:function(t){t.exports=JSON.parse('{"b":"dev-a3-gmuu0.eu.auth0.com","a":"8f7qneofgLBXDTLJSLESjosi3YXhPo4O"}')},"85ec":function(t,e,i){},"94b3":function(t,e,i){},a43c:function(t,e,i){"use strict";var n=i("94b3"),o=i.n(n);o.a},f669:function(t,e,i){}});
//# sourceMappingURL=app.f4004634.js.map