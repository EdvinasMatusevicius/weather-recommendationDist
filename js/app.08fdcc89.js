(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("5c0b"),n("2877")),i={},s=Object(a["a"])(i,c,o,!1,null,null,null),u=s.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"top"},[n("select",{staticClass:"selectCity"},t._l(t.cityList,(function(t){return n("select-option",{key:t.code,attrs:{city:t}})})),1),n("div",{staticClass:"getVals",on:{click:t.getProducts}},[t._v("Get product suggestions")])]),t.cityProducts?n("div",{staticClass:"bottom"},[n("hr"),n("div",[t._v("City: "+t._s(t.cityProducts.name))]),t._l(t.cityProducts.dates,(function(t,e){return n("city-days-products",{key:e,attrs:{date:e,dateData:t}})}))],2):t._e()])},d=[],f=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("option",{domProps:{value:t.city.code}},[n("div",[t._v(" "+t._s(t.city.name)+" ")]),n("div",[t._v(" "+t._s(t.city.administrativeDivision)+" ")]),n("div",[t._v(" "+t._s(t.city.countryCode)+" ")])])},m=[],y={name:"option-line",props:["city"]},h=y,b=Object(a["a"])(h,v,m,!1,null,"cdbb3a84",null),g=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"day"},[n("h4",[t._v(t._s(t.date))]),n("h5",[t._v("Day's weather : "+t._s(t.dateData.conditionCode))])]),t._l(t.dateData.recommendedProducts,(function(t,e){return n("product-row",{key:e,attrs:{product:t}})}))],2)},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v(t._s("Name: "+t.product.name+" , price: "+t.product.price+", sku: "+t.product.sku+", product for: "+t.product.weather))])])},O=[],j={name:"product-row",props:["product"]},C=j,P=(n("ff28"),Object(a["a"])(C,x,O,!1,null,"29271728",null)),k=P.exports,R={name:"day",props:["date","dateData"],components:{ProductRow:k}},D=R,S=(n("9f46"),Object(a["a"])(D,_,w,!1,null,"16f87186",null)),$=S.exports,E=n("bc3a"),M=n.n(E),T="http://product-api.serverpi.ddns.me/api/",L={getCities:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H().get(T+"cities");case 3:r=t.sent,e(r.data.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,n){return t.apply(this,arguments)}return e}(),getRecommendations:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,n,r){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H().get(T+"products/recommended/"+e);case 3:c=t.sent,n(c.data.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,n,r){return t.apply(this,arguments)}return e}()};function H(){return M.a.create({headers:{"Content-Type":"application/json"}})}var J={name:"Home",props:[],components:{selectOption:g,CityDaysProducts:$},data:function(){return{cityList:[],cityProducts:null}},created:function(){this.getCities()},methods:{getProducts:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.querySelector(".selectCity").value,e.next=3,L.getRecommendations(n,(function(e){console.log(e),t.cityProducts=e}),(function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getCities:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getCities((function(e){t.cityList=e}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},q=J,G=(n("d75b"),Object(a["a"])(q,p,d,!1,null,"ad725cdc",null)),N=G.exports;r["a"].use(l["a"]);var V=[{path:"/",name:"Home",component:N}],z=new l["a"]({mode:"history",base:"/",routes:V}),A=z,B=n("2f62");r["a"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:F,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},"9c0c":function(t,e,n){},"9f46":function(t,e,n){"use strict";var r=n("bbc1"),c=n.n(r);c.a},a806:function(t,e,n){},bbc1:function(t,e,n){},d75b:function(t,e,n){"use strict";var r=n("a806"),c=n.n(r);c.a},ff1c:function(t,e,n){},ff28:function(t,e,n){"use strict";var r=n("ff1c"),c=n.n(r);c.a}});
//# sourceMappingURL=app.08fdcc89.js.map