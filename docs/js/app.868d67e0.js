(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{"chunk-2d217a99":"67952424","chunk-2d21a3d2":"40bf4ed8","chunk-2d21abe1":"edc55032","chunk-2d225482":"fc65c910","chunk-39e72620":"b4625bda","chunk-4d6234fa":"4de77694","chunk-4d6dc6f2":"9488035e","chunk-b6479d74":"b7610aa4","chunk-fc8dabfa":"af66454f","chunk-fddf09ce":"0ba38bcd","chunk-737e8f52":"d448b462","chunk-dd241c54":"d7edd3d3","chunk-2d20f156":"b39a1514","chunk-2d212c40":"e2fc1bf2","chunk-17e15706":"a31ce021","chunk-984c6eec":"b94a6278",canvg:"1d5193d6","chunk-1fc15dcb":"72e6c162","chunk-2c6cd070":"d032838a",pdfmake:"c4230492",xlsx:"eb362dd8"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-39e72620":1,"chunk-4d6234fa":1,"chunk-b6479d74":1,"chunk-737e8f52":1,"chunk-dd241c54":1,"chunk-984c6eec":1,"chunk-1fc15dcb":1,"chunk-2c6cd070":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{"chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d21abe1":"31d6cfe0","chunk-2d225482":"31d6cfe0","chunk-39e72620":"184bf24c","chunk-4d6234fa":"e19a73c8","chunk-4d6dc6f2":"31d6cfe0","chunk-b6479d74":"57c16d1d","chunk-fc8dabfa":"31d6cfe0","chunk-fddf09ce":"31d6cfe0","chunk-737e8f52":"53394c79","chunk-dd241c54":"9952c3e0","chunk-2d20f156":"31d6cfe0","chunk-2d212c40":"31d6cfe0","chunk-17e15706":"31d6cfe0","chunk-984c6eec":"ebb82de4",canvg:"31d6cfe0","chunk-1fc15dcb":"51cc727a","chunk-2c6cd070":"42403283",pdfmake:"31d6cfe0",xlsx:"31d6cfe0"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"344e":function(e,t,r){"use strict";var n=r("3f5f"),a=r.n(n);a.a},"3f5f":function(e,t,r){},4360:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("1da1"),a=r("2b0e"),o=r("2f62"),c=(r("b0c0"),r("8468")),s=r("59ca"),i=r.n(s),u={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,i.a.auth().signInWithEmailAndPassword(a,o);case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,c=t.email,s=t.password,u=t.name,r.prev=2,r.next=5,i.a.auth().createUserWithEmailAndPassword(c,s);case 5:return r.next=7,n("getUid");case 7:return l=r.sent,r.next=10,i.a.database().ref("/users/".concat(l,"/info")).set({bill:1e4,name:u,locale:o.locale,temp:!1});case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},registerTestUser:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,e.getters,t.prev=1,t.next=4,i.a.auth().createUserWithEmailAndPassword("test-".concat(Date.now(),"@mail.ru"),"123456789");case 4:return t.next=6,r("getUid");case 6:return a=t.sent,t.next=9,i.a.functions().httpsCallable("createTestUser")(a);case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},deleteTestUser:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return Object(c["a"])(e),r.next=3,i.a.database().ref("/users/".concat(t)).remove();case 3:if(n=i.a.auth().currentUser,!n){r.next=7;break}return r.next=7,n.delete();case 7:case"end":return r.stop()}}),r)})))()},getUid:function(){var e=i.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,i.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:if(o=t.sent.val(),!o.temp){t.next=13;break}return t.next=11,r("deleteTestUser",a);case 11:t.next=15;break;case 13:return t.next=15,i.a.auth().signOut();case 15:n("clearInfo"),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](1),n("setError",t.t0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})))()}}},l=r("5530"),d={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,s=Object(l["a"])({},o.info,{},t),r.next=8,i.a.database().ref("/users/".concat(c,"/info")).update(s);case 8:a("setInfo",s),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,i.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},f=(r("99af"),r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,i.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(l["a"])({id:e},o[e])})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object(l["a"])({},c,{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.id,c=t.title,s=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,i.a.database().ref("/users/".concat(u,"/categories")).child(o).update({title:c,limit:s});case 8:r.sent,r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()},updateCategoryMonths:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.id,c=t.months,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,i.a.database().ref("/users/".concat(s,"/categories/").concat(o)).child("months").update(c);case 8:r.sent,r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()},createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,c=t.limit,s=t.months,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,i.a.database().ref("/users/".concat(u,"/categories")).push({title:o,limit:c,months:s});case 8:return l=r.sent,r.abrupt("return",{title:o,limit:c,id:l.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},deleteCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/categories")).child(t).remove();case 7:r.next=13;break;case 9:throw r.prev=9,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}}),h=(r("4de4"),r("3ca3"),r("ddb0"),{actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,i.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(l["a"])({id:e},o[e])})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordsByMonth:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/records")).orderByChild("dateSection").equalTo(t).once("value");case 7:return c=r.sent.val(),r.abrupt("return",Object.keys(c).map((function(e){return Object(l["a"])({id:e},c[e])})));case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object(l["a"])({},c,{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},fetchRecordByCategoryId:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/records")).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object.keys(c).map((function(e){return Object(l["a"])({id:e},c[e])})).filter((function(e){return e.categoryId===t})));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},deleteRecords:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,a("fetchRecordByCategoryId",t);case 7:return c=r.sent,s=c.map((function(e){return e.id})),r.next=11,Promise.all(s.map((function(e){return i.a.database().ref("/users/".concat(o,"/records")).child(e).remove()})));case 11:r.next=17;break;case 13:throw r.prev=13,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()},deleteRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,i.a.database().ref("/users/".concat(o,"/records")).child(t).remove();case 7:r.next=13;break;case 9:throw r.prev=9,r.t0=r["catch"](1),n("setError",r.t0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}});a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null,locale:"ru-RU"},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null},updateLocale:function(e,t){e.locale=t}},getters:{error:function(e){return e.error},locale:function(e){return e.locale}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?symbols=USD,RUB");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,r.rates["EUR"]=1,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))()}},modules:{auth:u,info:d,category:f,record:h}})},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=r("8832"),s=r.n(c),i=r("58ca"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"})],1)},l=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},f=[],h=r("b444"),m={name:"EmptyLayout",computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(h["a"][e.code]||"Что-то пошло не так")}}},p=m,g=r("2877"),b=Object(g["a"])(p,d,f,!1,null,"618e00f2",null),v=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("loader"):r("div",{staticClass:"app-main-layout"},[r("navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("sidebar",{key:e.locale,on:{close:e.closeSidebar},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"CreateNewRecord",expression:"'CreateNewRecord'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},w=[],C=(r("b64b"),r("d3b7"),r("96cf"),r("1da1")),k={name:"MainLayout",data:function(){return{isOpen:!1,loading:!0}},components:{Navbar:function(){return r.e("chunk-2d225482").then(r.bind(null,"e474"))},Sidebar:function(){return r.e("chunk-2d21abe1").then(r.bind(null,"bd8a"))}},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale||"ru-RU"}},watch:{error:function(e){this.$error(h["a"][e.code]||"Что-то пошло не так")}},methods:{closeSidebar:function(){document.documentElement.clientWidth<600&&(this.isOpen=!1)}},mounted:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isOpen=document.documentElement.clientWidth>600,Object.keys(e.$store.getters.info).length){t.next=4;break}return t.next=4,e.$store.dispatch("fetchInfo");case 4:e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},x=k,_=Object(g["a"])(x,y,w,!1,null,"3a3236a4",null),R=_.exports,E={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:v,MainLayout:R}},O=E,j=(r("5c0b"),Object(g["a"])(O,u,l,!1,null,null,null)),N=j.exports,U=(r("45fc"),r("8c4f")),T=r("59ca"),A=r.n(T);n["a"].use(U["a"]);var D=[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-4d6234fa").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-39e72620").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-4d6dc6f2").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return Promise.all([r.e("chunk-fddf09ce"),r.e("chunk-737e8f52")]).then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return Promise.all([r.e("chunk-fddf09ce"),r.e("chunk-dd241c54")]).then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-b6479d74").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-fc8dabfa").then(r.bind(null,"43ef"))}}],P=new U["a"]({mode:"history",base:"/",routes:D});P.beforeEach((function(e,t,r){var n=A.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var B=P,I=r("4360");r("caad"),r("2532");function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=I["a"].getters.info.locale||I["a"].getters.locale;return new Intl.DateTimeFormat(n,r).format(new Date(e))}var S=r("5bb3"),H=r("e977"),$={bind:function(e,t){var r=t.value,n=t.modifiers;M.Tooltip.init(e,{html:n.noloc?r:Object(H["a"])(r)})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},F=(r("99af"),{install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(H["a"])("Error"),"]: ").concat(Object(H["a"])(e))})}}}),W={install:function(e){e.prototype.$title=function(e){var t="Home Accounting CRM";return"".concat(Object(H["a"])(e)," | ").concat(t)}}},q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],z={name:"Loader",computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},V=z,Y=Object(g["a"])(V,q,J,!1,null,"55ae997c",null),G=Y.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"sort-content"},[e.isAscend?r("i",{staticClass:"sort material-icons",on:{click:function(t){return e.sort("down-up")}}},[e._v(" arrow_upward ")]):r("i",{staticClass:"sort material-icons",on:{click:function(t){return e.sort("up-down")}}},[e._v(" arrow_downward ")])])},Q=[],X=(r("b0c0"),{name:"Sort",props:["name","type"],data:function(){return{isAscend:!0}},methods:{sort:function(e){this.isAscend=!this.isAscend;var t={key:this.name,type:this.type,sort:e};this.$emit("sort",t)}}}),Z=X,ee=(r("344e"),Object(g["a"])(Z,K,Q,!1,null,"9d70804e",null)),te=ee.exports,re=r("9483");Object(re["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ne;r("6885"),r("ea7b"),r("66ce"),r("8934");n["a"].config.productionTip=!1,n["a"].use(F),n["a"].use(W),n["a"].use(o.a),n["a"].use(i["a"]),n["a"].filter("date",L),n["a"].filter("currency",S["a"]),n["a"].filter("localize",H["a"]),n["a"].directive("tooltip",$),n["a"].component("Loader",G),n["a"].component("paginate",s.a),n["a"].component("sort",te),A.a.initializeApp({apiKey:"AIzaSyBvjq4Mfy33_iwFNo5x-2GsCSr7wx3iEi8",authDomain:"vue-h-a-crm.firebaseapp.com",databaseURL:"https://vue-h-a-crm.firebaseio.com",projectId:"vue-h-a-crm",storageBucket:"vue-h-a-crm.appspot.com",messagingSenderId:"261082134",appId:"1:261082134:web:8eb7bf05a7cdadb9583937",measurementId:"G-6TDBHG0KDB"}),A.a.auth().onAuthStateChanged((function(){ne||(ne=new n["a"]({router:B,store:I["a"],render:function(e){return e(N)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Name":"Имя","Message_EnterName":"Введите имя","Update":"Обновить","Menu_Bill":"Счет","Menu_History":"История","Menu_Planning":"Планирование","Menu_NewRecord":"Новая запись","Menu_Categories":"Категории","DetailTitle":"Запись","LoginTitle":"Войти","RegisterTitle":"Зарегистрироваться","Categories_NoCat":"Категорий пока нет","CategoriesCreate_Create":"Создать","CategoriesCreate_Title":"Название","CategoriesCreate_MsgTitle":"Введите название категории","CategoriesCreate_Limit":"Лимит","CategoriesCreate_MsgMinLength":"Минимальное значение","CategoriesEdit_Edit":"Редактировать","CategoriesEdit_SelectCategory":"Выберите категорию","Amount":"Сумма","Date":"Дата","Description":"Описание","Message_EnterDescription":"Введите описание","Category":"Категория","Detail_MsgNoRec":"Не найдено записи с","Income":"Доход","Outcome":"Расход","History_Title":"История записей","NoRecords":"Записей нет","AddFirst":"Добавьте первую","Type":"Тип","Open":"Открыть","Delete":"Удалить","OpenRecord":"Посмотреть запись","DeleteRecord":"Удалить запись","CreateNewRecord":"Создать новую запись","CostsForCategories":"Расходы по категориям","MoreThan":"Превышение на","Stayed":"Осталось","Of":"из","Bill":"Счет","BillInCurrency":"Счет в валюте","CurrencyAmountTitle":"Курс валют","Currency":"Валюта","CurrencyType":"Курс","CRM_Title":"Домашняя бухгалтерия","Message_EmailRequired":"Поле Email не должно быть пустым","Message_EmailValid":"Введите корретный Email","Password":"Пароль","Message_EnterPassword":"Введите пароль","Message_MinLengthPassword":"Количество символов в пароле должно быть минимум","Message_LengthNowPassword":"Сейчас их","NoAccount":"Нет аккаунта?","HasAccount":"Уже есть аккаунт?","Register":"Зарегистрироваться","Logout":"Вы вышли из системы","FirstLogin":"Для начала войдите в систему","NoUserWithEmail":"Пользователя с таким email не существует","WrongPassword":"Неверный пароль","EmailInUse":"Email уже занят","Error":"Ошибка","NotEnoughMoney":"Недостаточно средств на счете","RecordHasBeenCreated":"Запись успешно создана","AcceptRules":"С правилами согласен","NeedAgree":"Согласны ли Вы с нашими правилами?","ProfileHasBeenUpdated":"Профиль успешно обновлен","Message_EmptyField":"Поле не должно быть пустым","Message_MinValue":"Минимальное значение","Category_HasBeenCreated":"Категория была создана","Category_HasBeenUpdated":"Категория упешно обновлена","Category_name":"Категория","Category_HasBeenDeleted":"и ее записи успешно удалены","Category_Deleted":"Удалить категорию","Category_DeletedCat":"безвозвратно? Это приведет к удалению всех записей этой категории","Record_HasBeenDeleted":"Запись успешно удалена","Record_Deleted":"Удалить запись безвозвратно?","Yes":"Да","No":"Нет","month-1":"Январь","month-2":"Февраль","month-3":"Март","month-4":"Апрель","month-5":"Май","month-6":"Июнь","month-7":"Июль","month-8":"Август","month-9":"Сентябрь","month-10":"Октябрь","month-11":"Ноябрь","month-12":"Декабрь","Search":"Поиск","ChooseCategory":"Все категории","ChoosePeriod":"За все время","ChooseType":"Все типы","Clear":"Очистить","All":"Все","CategoryOutcome":"Расходы","TestInput":"Тестовый вход"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logout",login:"FirstLogin","auth/user-not-found":"NoUserWithEmail","auth/wrong-password":"WrongPassword","auth/email-already-in-use":"EmailInUse"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("4360"),a=r("7704"),o=r("edd4"),c={"ru-RU":a,"en-US":o};function s(e){var t=n["a"].getters.info.locale||n["a"].getters.locale;return c[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Name":"Name","Message_EnterName":"Enter name","Update":"Update","Menu_Bill":"Bill","Menu_History":"History","Menu_Planning":"Planning","Menu_NewRecord":"New record","Menu_Categories":"Categories","DetailTitle":"Detail","LoginTitle":"Login","RegisterTitle":"Register","Categories_NoCat":"No categories","CategoriesCreate_Create":"Create","CategoriesCreate_Title":"Title","CategoriesCreate_MsgTitle":"Enter category name","CategoriesCreate_Limit":"Limit","CategoriesCreate_MsgMinLength":"Minimum length is","CategoriesEdit_Edit":"Edit","CategoriesEdit_SelectCategory":"Select category","Amount":"Amount","Date":"Date","Description":"Description","Message_EnterDescription":"Enter description","Category":"Category","Detail_MsgNoRec":"No record with","Income":"Income","Outcome":"Outcome","History_Title":"Records history","NoRecords":"No records","AddFirst":"Add first","Type":"Type","Open":"Open","Delete":"Delete","OpenRecord":"Open record","DeleteRecord":"Delete record","CreateNewRecord":"Create new record","CostsForCategories":"Categories costs","MoreThan":"Excess on","Stayed":"Left","Of":"of","Bill":"Bill","BillInCurrency":"Bill in currencies","CurrencyAmountTitle":"Currencies rates","Currency":"Currency","CurrencyType":"Rate","CRM_Title":"Home Accounting CRM","Message_EmailRequired":"Email field is required","Message_EmailValid":"Enter valid email","Password":"Password","Message_EnterPassword":"Enter password","Message_MinLengthPassword":"Minimum length is","Message_LengthNowPassword":"Now","NoAccount":"Has no account?","HasAccount":"Has account?","Register":"Register","Logout":"You have logged out","FirstLogin":"First login","NoUserWithEmail":"No user with email","WrongPassword":"Invalid password","EmailInUse":"Email is already in use","Error":"Ошибка","NotEnoughMoney":"Not enough money","RecordHasBeenCreated":"Record has been created","AcceptRules":"Agree with rules","NeedAgree":"Do you agree with our rules?","ProfileHasBeenUpdated":"Profile has been updated","Message_EmptyField":"The field must not be empty","Message_MinValue":"Minimum value is","Category_HasBeenCreated":"Category has been created","Category_HasBeenUpdated":"Category has been updated","Category_name":"Category","Category_HasBeenDeleted":"and records have been deleted","Category_Deleted":"Are you sure you want to permanently delete","Category_DeletedCat":"category? This will delete all records in this category.","Record_HasBeenDeleted":"Record has been deleted","Record_Deleted":"Are you sure you want to permanently delete record?","Yes":"Yes","No":"No","month-1":"January","month-2":"February","month-3":"March","month-4":"April","month-5":"May","month-6":"June","month-7":"July","month-8":"August","month-9":"September","month-10":"October","month-11":"November","month-12":"December","Search":"Search","ChooseCategory":"All categories","ChoosePeriod":"All time","ChooseType":"All types","Clear":"Clear","All":"All","CategoryOutcome":"Outcome","TestInput":"Test"}')}});
//# sourceMappingURL=app.868d67e0.js.map