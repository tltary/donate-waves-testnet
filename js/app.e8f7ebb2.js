(function(t){function e(e){for(var s,c,r=e[0],o=e[1],l=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/donate-waves-testnet/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;i.push([1,"chunk-vendors"]),a()})({0:function(t,e){},"0253":function(t,e,a){"use strict";a("41d2")},"0c5b":function(t){t.exports=JSON.parse('{"recipient":"3N3X47YHGLUkDfxueGtunroxcezH3d3SVrs","nodeUrl":"https://testnode2.wavesnodes.com","statisticUrl":"https://testnode2.wavesnodes.com"}')},"0fdf":function(t,e,a){},1:function(t,e,a){t.exports=a("56d7")},"13a5":function(t,e,a){"use strict";a("a13f")},"373a":function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:s,data:n,children:i=[]}=e,{class:c,staticClass:r,style:o,staticStyle:l,attrs:u={},...d}=n;return a("svg",{class:[c,r],style:[o,l],attrs:Object.assign({width:"14",height:"14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),...d},i.concat([a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M13.702 6.314a.668.668 0 00-.927.185l-.02.03A6.395 6.395 0 006.386.613 6.394 6.394 0 000 7a6.394 6.394 0 006.386 6.386.891.891 0 100-1.782A4.61 4.61 0 011.783 7a4.61 4.61 0 014.603-4.604 4.61 4.61 0 014.571 4.055.668.668 0 00-1.076.79l1.323 1.985c.157.234.41.374.68.374a.82.82 0 00.68-.374l1.324-1.985a.669.669 0 00-.186-.927z",fill:"#fff"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("path",{attrs:{fill:"#fff",d:"M0 0h14v14H0z"}})])])]))}}},"41d2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("5530"),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("dca8"),a("2b0e")),i=(a("d3b7"),a("bc3a")),c=a.n(i),r={},o=c.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("header-block",{attrs:{description:""+t.description}}),a("div",{staticClass:"col-12"},[a("div",{staticClass:"mobile__button-block"},[a("button",{staticClass:"mobile__button",class:{active:t.view},on:{click:function(e){t.view=!0}}},[t._v(" Донат ")]),a("button",{staticClass:"mobile__button",class:{active:!t.view},on:{click:function(e){t.view=!1}}},[t._v(" Статистика ")])])]),a("div",{staticClass:"col-lg-7 mobile__statistics",class:{active:!t.view}},[a("statistics-block",{attrs:{recipient:t.recipient,goal:parseInt(t.goal,10)}})],1),a("div",{staticClass:"col-lg-5 mobile__donate",class:{active:t.view}},[a("donate-form",{attrs:{recipient:t.recipient}})],1)],1)])])},u=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"donate__block"},[null!==t.user.address?a("div",{staticClass:"donate__user-block"},[a("span",{staticClass:"donate__user-title"},[t._v(" Текущий адрес ")]),a("span",{staticClass:"donate__user-address"},[t._v(" "+t._s(t.user.address)+" ")])]):a("div",{staticClass:"donate__user-block"},[a("button",{staticClass:"button button--active",on:{click:function(e){return t.wavesLogin()}}},[t._v(" Войти в аккаунт ")])]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Введите сумму")]),a("div",{staticClass:"donate__input-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control donate__input",attrs:{type:"number",min:"1"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),a("WavesIcon",{staticClass:"input-icon"})],1)]),a("div",{staticClass:"mb-3",class:{error:t.comment.length>140}},[a("label",{staticClass:"form-label"},[t._v("Введите комментарий "+t._s(t.comment.length)+"/140")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control donate__input",attrs:{rows:"5"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),a("button",{staticClass:"button",class:[t.amount>0?"button--active":"button--default"],on:{click:function(e){return t.donate()}}},[t._v(" Задонатить ")])])},f=[],_=a("1da1"),v=(a("96cf"),a("c57f")),p=a.n(v),h=a("0760"),b={name:"DonateForm",components:{WavesIcon:p.a},data:function(){return{asset:"WAVES",amount:1,comment:"",currencies:this.$config.currencies,user:{address:null,balance:0}}},props:{recipient:{type:String,default:""}},computed:{transferData:function(){var t={recipient:this.recipient,amount:this.amount*Math.pow(10,8),assetId:this.asset.assetId,attachment:Object(h["base58Encode"])(Object(h["stringToBytes"])(this.comment))};return t}},methods:{donate:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("0"!==t.amount){e.next=2;break}return e.abrupt("return",!1);case 2:if(!(t.comment.length>140)){e.next=5;break}return t.$swal.fire({icon:"error",title:"Ошибка",text:"Комментарий не может быть больше 140 символов"}),e.abrupt("return",!1);case 5:return e.next=7,t.$signer.transfer(Object(s["a"])({},t.transferData)).broadcast().then((function(e){t.$swal.fire({icon:"success",title:"Успех!",html:"Ваш донат принят!<br>ID транзакции - ".concat(e.id)}),t.user.address=e.sender,t.$root.$emit("refresh_statistic")}),(function(t){console.error(t)}));case 7:case"end":return e.stop()}}),e)})))()},wavesLogin:function(){var t=this;this.$signer.login().then((function(e){t.user.address=e.address,t.getUserBalance()}),(function(t){console.error(t)}))},getUserBalance:function(){var t=this;this.$signer.getBalance().then((function(e){for(var a in e)if("WAVES"===e[a].assetId)return t.user.balance=e[a].amount/Math.pow(10,8),!1}),(function(t){console.error(t)}))}}},m=b,g=(a("0253"),a("2877")),w=Object(g["a"])(m,d,f,!1,null,"4efad112",null),C=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-3"},[a("p",{staticClass:"statistic__title"},[t._v(" Всего собранно - "+t._s(t.wavesBalance)+" "),a("WavesIcon",{staticClass:"statistic__title-icon"}),a("button",{staticClass:"statistic__refresh",on:{click:function(e){return t.refreshStatistic()}}},[t._v(" Обновить "),a("RefreshIcon",{staticClass:"statistic__refresh-icon"})],1)],1)]),0!==t.goal?a("div",{staticClass:"mb-3"},[a("div",{staticClass:"goal__block"},[a("div",{staticClass:"goal__percentage",style:"width: "+t.goalPercentage+"%"}),a("span",{staticClass:"goal__num"},[t._v(" "+t._s(t.goalPercentage.toFixed(2))+"% ")])])]):t._e(),t.chainLoaded?a("div",[t.chainData.length>0?a("div",{staticClass:"table__block"},[t._m(0),a("div",{staticClass:"table__body"},t._l(t.chainData,(function(e,s){return a("div",{key:s,staticClass:"table__row",on:{click:function(a){return t.openData(e)}}},[a("div",{staticClass:"table__item table__item--address"},[t._v(" "+t._s(e.sender)+" ")]),a("div",{staticClass:"table__item table__item--comment"},[void 0!==e.attachment?a("span",[t._v(" "+t._s(t._f("decodeAttachment")(e.attachment))+" ")]):t._e()]),a("div",{staticClass:"table__item table__item--amount"},[t._v(" "+t._s(e.amount/Math.pow(10,8))+" "),a("WavesIcon",{staticClass:"icon"})],1),e.active&&void 0!==e.active?a("div",{staticClass:"table__content"},[a("div",{staticClass:"table__content-item"},[a("span",{staticClass:"table__content-label"},[t._v(" ID транзакции ")]),a("p",{staticClass:"table__content-description"},[t._v(" "+t._s(e.id)+" ")])]),a("div",{staticClass:"table__content-item"},[a("span",{staticClass:"table__content-label"},[t._v(" От кого ")]),a("p",{staticClass:"table__content-description"},[t._v(" "+t._s(e.sender)+" ")])]),void 0!==e.attachment||e.attachment.length>0?a("div",{staticClass:"table__content-item"},[a("span",{staticClass:"table__content-label"},[t._v(" Комментарий ")]),a("p",{staticClass:"table__content-description"},[t._v(" "+t._s(t._f("decodeAttachment")(e.attachment))+" ")])]):t._e(),a("div",{staticClass:"table__content-item"},[a("span",{staticClass:"table__content-label"},[t._v(" Сколько ")]),a("p",{staticClass:"table__content-description"},[t._v(" "+t._s(e.amount/Math.pow(10,8))+" "),a("WavesIcon",{staticClass:"icon"})],1)])]):t._e()])})),0)]):t._e()]):a("div",[a("p",[t._v(" Загрузка ")])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table__row table__row--header"},[a("div",{staticClass:"table__item table__item--address"},[t._v(" От кого ")]),a("div",{staticClass:"table__item table__item--comment"},[t._v(" Комментарий ")]),a("div",{staticClass:"table__item table__item--amount"},[t._v(" Сколько ")])])}],O=(a("a9e3"),a("99af"),a("373a")),j=a.n(O),k=a("fb5b"),S={name:"Statistics",data:function(){return{address:null,chainData:[],wavesBalance:0,chainLoaded:!1}},components:{WavesIcon:p.a,RefreshIcon:j.a},mounted:function(){var t=this;this.refreshStatistic(),this.$root.$on("refresh_statistic",this.refreshStatistic),setInterval((function(){t.refreshStatistic()}),3e4)},filters:{decodeAttachment:function(t){return Object(h["bytesToString"])(Object(h["base58Decode"])(t))}},props:{goal:{type:Number,default:0},recipient:{type:String,default:""}},computed:{goalPercentage:function(){var t=100/this.goal*this.wavesBalance;return t}},methods:{openData:function(t){if(void 0===t.active)return this.$set(t,"active",!0),!1;t.active=!t.active},changeAddress:function(t){this.address=t},refreshStatistic:function(){var t=this;this.axios.get("".concat(this.$config.statisticUrl,"/transactions/address/").concat(this.recipient,"/limit/10")).then((function(e){t.chainData=e.data[0],t.getBalance(),t.chainLoaded||(t.chainLoaded=!0)}),(function(t){console.error(t)}))},getBalance:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k["nodeInteraction"].balanceDetails(t.recipient,t.$config.nodeUrl);case 2:a=e.sent,t.wavesBalance=a.available/Math.pow(10,8);case 4:case"end":return e.stop()}}),e)})))()}}},$=S,P=(a("5fb9"),Object(g["a"])($,y,x,!1,null,"424f1b91",null)),M=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"logo__block"},[a("span",{staticClass:"logo__annotation"},[t._v(" powered by ")]),a("WavesLogo",{staticClass:"logo"})],1)])]),t.description.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7"},[a("p",{staticClass:"header__description"},[t._v(" "+t._s(t.description)+" ")])])]):t._e()])},z=[],D=a("e937"),L=a.n(D),U={name:"Header",components:{WavesLogo:L.a},props:{description:{type:String,default:""}}},B=U,W=(a("7d3d"),Object(g["a"])(B,I,z,!1,null,"db7b1896",null)),A=W.exports,E={name:"App",components:{"donate-form":C,"statistics-block":M,"header-block":A},data:function(){return{recipient:this.$config.recipient,description:"Сбор средст на “Мощьную пекарню”",goal:400,view:!0}}},R=E,N=(a("13a5"),Object(g["a"])(R,l,u,!1,null,null,null)),H=N.exports,T=a("59d7"),F=a("c3c4"),J=null;J=new T["Signer"]({NODE_URL:"https://testnode2.wavesnodes.com"}),J.setProvider(new F["a"]("https://testnet.waves.exchange/signer/"));var V=J,G=a("0c5b"),q=a("5886");a("4413");n["a"].config.productionTip=!1,n["a"].use(q["a"]);var X={};X.recipient=Object.freeze(G.recipient),X.nodeUrl=Object.freeze(G.nodeUrl),X.statisticUrl=Object.freeze(G.statisticUrl),n["a"].prototype.$config=Object(s["a"])({},X),n["a"].prototype.$signer=V,new n["a"]({render:function(t){return t(H)}}).$mount("#app")},"5fb9":function(t,e,a){"use strict";a("fbb8")},"7d3d":function(t,e,a){"use strict";a("0fdf")},a13f:function(t,e,a){},c57f:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:s,data:n,children:i=[]}=e,{class:c,staticClass:r,style:o,staticStyle:l,attrs:u={},...d}=n;return a("svg",{class:[c,r],style:[o,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 294.16 294.16"},u),...d},i.concat([a("path",{attrs:{d:"M.004 147.08L147.083.002 294.16 147.08 147.083 294.158z",fill:"#0055fe"}})]))}}},e937:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:s,data:n,children:i=[]}=e,{class:c,staticClass:r,style:o,staticStyle:l,attrs:u={},...d}=n;return a("svg",{class:[c,r],style:[o,l],attrs:Object.assign({width:"216",height:"54",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),...d},i.concat([a("path",{attrs:{d:"M215.552 11.206l-11.178 11.178-11.178-11.178L204.374.028l11.178 11.178z",fill:"#05F"}}),a("path",{attrs:{d:"M49.717 11.54h-6.173l-.667.667L36.37 34.73l-7.174-22.856-.667-.334h-6.84l-.668.334-7.007 22.522-6.506-22.523-.668-.333H.334L0 11.874l10.177 31.698.667.668h6.173l.668-.668 7.174-22.856 7.173 22.856 1.002.668h6.506l.667-.668 10.177-31.699-.667-.333zM120.789 11.54h-6.507l-.667.667-8.842 23.524-8.843-23.524-.667-.667h-6.507l-.333.334 12.513 31.698.667.668h5.839l.667-.668 12.513-31.699v-.333h.167zM153.656 28.89l-.667.668h-23.691c.334 2.67 1.335 4.838 3.003 6.507a9.21 9.21 0 006.507 2.669c3.67 0 6.173-1.335 7.507-4.338l.668-.667h5.839l.333.667c-1.001 3.67-3.336 6.507-5.839 8.175-2.335 1.668-5.505 2.336-8.842 2.336-4.838 0-8.842-1.669-11.512-4.838-3.003-3.004-4.337-7.508-4.337-12.18 0-4.67 1.334-8.508 4.337-11.845 3.003-3.337 6.841-5.172 11.178-5.172 4.838 0 8.509 1.669 11.178 4.838 2.67 3.003 4.338 7.508 4.338 12.513v.668zM138.14 17.045c-4.004 0-7.507 2.67-8.508 6.84h17.017c-.834-2.836-3.17-6.84-8.509-6.84zM77.578 11.873l.668-.333h5.505l.668.667v32.032l-.668.668h-5.505l-.668-.668v-3.336c-.667 1-2.002 2.002-3.003 2.669-.333 0-.667.334-.667.334h-.334c-1.668 1-3.67 1.334-5.839 1.334-4.004 0-7.508-1.668-10.51-5.172-3.004-3.503-4.338-7.507-4.338-12.178 0-4.672 1.334-8.843 4.337-12.18 3.004-3.336 6.507-5.171 10.511-5.171 2.002 0 4.004.333 5.84 1.334.333 0 .667.334 1 .334 1.335.667 2.336 1.668 3.337 2.67v-3.004h-.334zm-9.176 26.861c2.67 0 4.839-1.001 6.507-3.003 1.001-1.335 2.002-2.67 2.336-4.839v-6.506c-.334-2.002-1.335-3.337-2.336-4.838a9.21 9.21 0 00-6.507-2.67c-2.669 0-4.337 1.001-6.172 3.003-1.836 2.002-2.67 4.839-2.67 7.842 0 3.336 1.001 5.839 2.67 7.84 1.668 2.003 3.336 3.171 6.172 3.171zM175.845 25.22s-3.337-.667-6.507-1.334c-2.669-.668-4.004-1.335-4.004-3.337 0-2.002 2.002-3.67 6.173-3.67s6.507 1.668 6.507 3.336l.667.668h5.839l.334-.334c0-4.338-3.671-9.51-13.18-9.51-9.843 0-12.847 6.173-12.847 9.844 0 3.003 1.002 7.174 8.843 8.842 0 0 3.67.667 6.506 1.334 3.337.668 4.839 2.003 4.839 3.67 0 1.67-1.669 4.005-6.507 4.005-4.505 0-6.84-2.002-6.84-4.338L165 33.73h-6.506l-.334.667c.667 5.506 4.338 10.51 14.348 10.51 10.844 0 12.846-6.84 12.846-10.176 0-4.838-2.669-7.841-9.509-9.51z",fill:"#fff"}})]))}}},fbb8:function(t,e,a){}});
//# sourceMappingURL=app.e8f7ebb2.js.map