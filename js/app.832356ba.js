(function(t){function e(e){for(var n,i,a=e[0],s=e[1],c=e[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return d.push.apply(d,c||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},d=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=s;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=o("43f9"),d=o.n(r),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item"}),o("div",{staticClass:"md-layout-item md-size-50 todo-container"},[o("md-card",[o("md-card-content",[o("md-card-header",{staticClass:"center-content"},[o("h1",[t._v("toDo")])]),o("md-field",[o("md-input",{staticClass:"font",attrs:{placeholder:"Add a toDo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}}),o("button",{staticClass:"hover",on:{click:function(e){return t.addTodo()}}},[o("md-icon",[t._v("add")])],1)],1),o("div",{staticClass:"center-content"},[o("ul",{staticClass:"todos"},t._l(t.todos,(function(e){return o("li",{key:e.id},[o("span",{staticClass:"todo-font-size"},[o("br"),t._v(" --"+t._s(e.label)+"-- ")]),o("br"),o("span",[o("input",{staticClass:"hover",attrs:{type:"checkbox"}}),t._v("Completed ")]),o("br"),o("span",{staticClass:"hover",on:{click:function(o){return t.removeTodo(e)}}},[o("md-icon",[t._v("delete_forever")]),t._v("Delete ")],1)])})),0)])],1)],1)],1),o("div",{staticClass:"md-layout-item"})])])},a=[],s=(o("c975"),o("a434"),{data:function(){return{todos:[],currentTodo:""}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1}),this.currentTodo=""},removeTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},editTodo:function(t){var e=this.todos.indexOf(t);this.todos[e].editing=!this.todos[e].editing},clickToEdit:function(t){this.editTodoId=t.id},saveEdit:function(){this.editTodoId=null}}}),c=s,u=(o("034f"),o("2877")),l=Object(u["a"])(c,i,a,!1,null,null,null),f=l.exports,p=o("9c30");o("51de"),o("0759"),o("d48d");n["default"].use(d.a),n["default"].use(p["MdField"]),n["default"].use(p["MdCard"]),n["default"].use(p["MdCheckbox"]),n["default"].use(p["MdSwitch"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.832356ba.js.map