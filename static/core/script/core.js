"use strict";var _slicedToArray=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(function(){var e,t,n,r,a,i,o,s,c,u,l,p,f,h,d,m,g,v,b,w,y,k,C,x,S,j,q,A,E,T,z,D,O,B,P,M,R,F=[].indexOf;t=$(window),e=$(document),n=$("#stage"),window.cordova={notCordova:!0},$.ajaxSetup({cache:!0}),window.app={startTime:$.now(),status:{},fn:{},model:{},dom:{}},app.dom.root=t,app.dom.document=e,app.dom.stage=n,_.merge(app,n.data()),app.version="0.0.1",app.salt="9n0sfbck",x=navigator.userAgent,v=navigator.platform,m={},o={},S=x.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=x.match(/(Android);?[\s\/]+([\d.]+)?/),g=!!x.match(/\(Macintosh\; Intel /),p=x.match(/(iPad).*OS\s([\d_]+)/),h=x.match(/(iPod)(.*OS\s([\d_]+))?/),f=!p&&x.match(/(iPhone\sOS)\s([\d_]+)/),j=x.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),A=/Win\d{2}|Windows/.test(v),E=x.match(/Windows Phone ([\d.]+)/),C=j&&x.match(/TouchPad/),d=x.match(/Kindle\/([\d.]+)/),k=x.match(/Silk\/([\d._]+)/),i=x.match(/(BlackBerry).*Version\/([\d.]+)/),a=x.match(/(BB10).*Version\/([\d.]+)/),w=x.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=x.match(/PlayBook/),s=x.match(/Chrome\/([\d.]+)/)||x.match(/CriOS\/([\d.]+)/),c=x.match(/Firefox\/([\d.]+)/),u=x.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),l=x.match(/MSIE\s([\d.]+)/)||x.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),y=(q=!s&&x.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/))||x.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),(o.webkit=!!S)&&(o.version=S[1]),r&&(m.android=!0,m.version=r[2]),f&&!h&&(m.ios=m.iphone=!0,m.version=f[2].replace(/_/g,".")),p&&(m.ios=m.ipad=!0,m.version=p[2].replace(/_/g,".")),h&&(m.ios=m.ipod=!0,m.version=h[3]?h[3].replace(/_/g,"."):null),E&&(m.wp=!0,m.version=E[1]),j&&(m.webos=!0,m.version=j[2]),C&&(m.touchpad=!0),i&&(m.blackberry=!0,m.version=i[2]),a&&(m.bb10=!0,m.version=a[2]),w&&(m.rimtabletos=!0,m.version=w[2]),b&&(o.playbook=!0),d&&(m.kindle=!0,m.version=d[1]),k&&(o.silk=!0,o.version=k[1]),!k&&m.android&&x.match(/Kindle Fire/)&&(o.silk=!0),s&&(o.chrome=!0,o.version=s[1]),c&&(o.firefox=!0,o.version=c[1]),u&&(m.firefoxos=!0,m.version=u[1]),l&&(o.ie=!0,o.version=l[1]),y&&(g||m.ios||A)&&(o.safari=!0,m.ios||(o.version=y[1])),q&&(o.webview=!0),m.tablet=!!(p||b||r&&!x.match(/Mobile/)||c&&x.match(/Tablet/)||l&&!x.match(/Phone/)&&x.match(/Touch/)),m.phone=!(m.tablet||m.ipod||!(r||f||j||i||a||s&&x.match(/Android/)||s&&x.match(/CriOS\/([\d.]+)/)||c&&x.match(/Mobile/)||l&&x.match(/Touch/))),$.os=m,$.browser=o,function(){var e,t,r,a;if(null!=n?n.length:void 0)r=[],a=navigator.userAgent,e=function(){switch(!1){case!$.os.android:return["os-android","android"];case!$.os.ios:return["os-ios","ios"];default:return["os-web","web"]}}(),r.push(e[0]),app.os=e[1],e=function(){switch(!1){case!$.os.phone:return["device-phone","phone"];case!$.os.tablet:return["device-tablet","tablet"];default:return["device-desktop","desktop"]}}(),r.push(e[0]),app.device=e[1],e=function(){var e,n,i;switch(!1){case!~a.search(/MicroMessenger/i):return["shell-wechat","wechat"];case!~a.search(/Electron/i):return["shell-electron","electron"];case!("undefined"!=typeof cordova&&null!==cordova?cordova.notCordova:void 0):for(e=0,n=(i=["chrome","ie","firefox","safari"]).length;e<n;e++)if(t=i[e],$.browser[t]){app.browser=t,r.push("browser-"+t);break}return["shell-browser","browser"];default:return["shell-application","application"]}}(),r.push(e[0]),app.shell=e[1],n.addClass(r.join(" "))}(),window.Data=function(){var e,t=function(){function t(n){var r;if(_classCallCheck(this,t),this[e]={},"undefined"===(r=$.type(n)))return this;if("object"===r)return this.set(n);throw new Error("invalid type <"+r+">")}return _createClass(t,[{key:"get",value:function(e){return null==e?this:this[e]}},{key:"observe",value:function(){for(var t,n,r,a=this,i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];var c=function(){switch(o.length){case 2:return[o[0],void 0,o[1]];case 3:return o;default:throw new Error("invalid length")}}(),u=_slicedToArray(c,3);return n=u[0],t=u[1],r=u[2],Object.defineProperty(this,n,{configurable:!0,enumerable:!0,get:function(){var r;return r=a[e][n],t?t(r):r},set:function(t){var i;return i=a[e][n],a[e][n]=t,r(t,i)}}),this}},{key:"set",value:function(){for(var e,t,n,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];switch(a.length){case 1:if("object"!==$.type(a[0]))throw new Error("type of value must be object");for(e in t=a[0])n=t[e],this[e]=n;break;case 2:if(e=a[0],n=a[1],"string"!==$.type(e))throw new Error("type of key must be string");this[e]=n;break;default:throw new Error("invalid length")}return this}}]),t}();return e="__data__",t}.call(this),$.ago=function(e){var t,n,r,a,i,o,s,c,u,l,p,f,h;return t=new Date,p=(h=(f=new Date(e)).getFullYear())+"年",u=1+(c=f.getMonth())+"月"+(n=f.getDate())+"日",l=(o=f.getHours())+"时"+function(e){return e>9?e:"0"+e}(s=f.getMinutes())+"分","前天","昨天","今天","刚刚",h!==t.getFullYear()?""+p+u+" "+l:c!==t.getMonth()?u+" "+l:(r=t.getDate()-n)>2?u+" "+l:2===r?"前天 "+l:1===r?"昨天 "+l:(a=t.getHours()-o)>12?"今天 "+l:a>0?a+"小时前":(i=t.getMinutes()-s)>0?i+"分钟前":"刚刚"},z=window.localStorage,(T=$.cache=function(){var e,t,n;switch(arguments.length){case 0:return z;case 1:switch($.type(arguments.length<=0?void 0:arguments[0])){case"string":return(e=T).get.apply(e,arguments);default:return(t=T).set.apply(t,arguments)}break;case 2:return(n=T).set.apply(n,arguments);default:return z}}).namespace="cache",T.prefix=function(e){return T.namespace+"::"+e},T.get=function(e){return $.parseJson(z.getItem(T.prefix(e)))},T.set=function(){var e,t,n;T.check();for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];switch(a.length){case 1:for(e in t=a[0]){if(n=t[e],e=T.prefix(e),null==n)return z.removeItem(e);z.setItem(e,$.parseString(n))}break;case 2:if(e=a[0],n=a[1],e=T.prefix(e),null==n)return z.removeItem(e);z.setItem(e,$.parseString(n))}return z},T.clear=function(){var e,t,n,r,a,i,o;for(o={},e=0,r=(i=$.Cache.list).length;e<r;e++)o[n=i[e]]=T.get(n);for(z.clear(),t=0,a=i.length;t<a;t++)null!=o[n=i[t]]&&T.set(n,o[n]);return z},T._limit=1024*("ios"===app.os?2:4)*1024,T.check=function(){if($.parseString($.cache()).length>T._limit)return $.i("cache","cleared because localStorage was full"),T.clear()},$.Cache=function(e,t){var n,r;return((n=$.Cache).list||(n.list=[])).push(e),(r=function(){var e,t,n;switch(arguments.length){case 0:return r.data;case 1:switch($.type(arguments.length<=0?void 0:arguments[0])){case"string":return(e=r).get.apply(e,arguments);default:return(t=r).set.apply(t,arguments)}break;case 2:return(n=r).set.apply(n,arguments);default:return r.data}}).get=function(e){return r.data[e]},r.set=function(){for(var e,t,n,a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];switch(i.length){case 1:for(e in t=i[0])null==(n=t[e])?r.remove(e):r.data[e]=n;break;case 2:e=i[0],null==(n=i[1])?r.remove(e):r.data[e]=n}return r.save()},r.remove=function(e){return delete r.data[e]},r.save=function(){return $.cache(e,r.data),r.data},r.clear=function(){return r.data=_.clone(r._data),r.save()},r._data=_.clone(t),r.data=$.extend({},r._data,$.cache(e)),r},$.cubicBezier=function(e){var t;return((t=$.cubicBezier).__map__||(t.__map__={ease:"ease","ease-in":"ease-in","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-out":"ease-in-out","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-out":"ease-out","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)",linear:"linear"}))[e]||function(){throw new Error("invalid name '"+e+"'")}()},$.fn.animateBy=function(e,t){if(!$.fn.onAnimationEnd)throw new Error("have to require $.fn.onAnimationEnd()");return"array"!==$.type(e)&&(e=[e]),this.each(function(){return $.animateBy($(this),e,0,t)})},$.animateBy=function(e,t,n,r){return n>=t.length?("function"==typeof r&&r(),e):e.onAnimationEnd(function(){return e.removeClass(t[n]),$.animateBy(e,t,n+1,r)}).addClass(t[n])},$.fn.onAnimationEnd=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i,o=function(){switch(t.length){case 1:return[!1,t[0]];case 2:return t;default:throw new Error("invalid argument length")}}(),s=_slicedToArray(o,2);return i=s[0],a=s[1],r=window.WebKitTransitionEvent?"webkitTransitionEnd webkitAnimationEnd":"mozTransitionEnd MSTransitionEnd otransitionend transitionend mozAnimationEnd MSAnimationEnd oanimationend animationend",this.each(function(){var e;return e=$(this),i||e.off(r),e.one(r,function(){return a(e)})})},$.fn.switchClass=function(e){return this.each(function(){return $(this).addClass(e).siblings("."+e).removeClass(e)})},(D=function(e){return D.get(e)}).get=function(e){var t;return t=D.parse(),e?t[e]:t},D.parse=function(e){var t,n,r,a,i,o;for(e||(e=(cordova.notCordova?location.hash:$.session("pathname"))||""),o={},r=0,a=(i=e.length?e.replace(/.*#/,"").replace(/[?&].*/,"").split(";"):[]).length;r<a;r++)(t=i[r]).length&&(o[(n=t.split("="))[0]]=decodeURIComponent(n[1]));return o},$.hash=D,$.i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i,o=function(){switch(t.length){case 1:return["log","default",t[0]];case 2:return["log",t[0],t[1]];default:return t}}(),s=_slicedToArray(o,3);return r=s[0],i=s[1],a=s[2],F.call($.i.forbidden,i)>=0?a:(console[r]("default"===i?a:"<"+i.toUpperCase()+"> "+a),a)},$.i.forbidden=[],$.i.forbid=function(e){return $.i.forbidden=_.union($.i.forbidden,"array"!==$.type(e)?[e]:e)},function(){var e,t;if(!(e=$("#layer-info")).length)throw new Error("invalid element");(t=function(e){var n,r;return null==e?e:(r=$.parseString(e),n=(t.$item||(t.$item=$("<div>"))).clone(),t.render(n,r),t.show(n,function(){return t.check()}),$.next(2e3,function(){return t.hide(n,function(){return t.check()})}),r)}).check=function(){var n;if((n=e.children(".item")).length)return n.length>5?t.remove(n.eq(0)):void 0;t.clear()},t.clear=function(){return e.empty().addClass("hidden")},t.hide=function(e,n){return e.animateBy("fadeOut",function(){return t.remove(e),"function"==typeof n?n():void 0})},t.remove=function(e){return e.next().remove(),e.remove()},t.render=function(t,n){var r;return r=["item"],~(n=n.replace(/[\r\n]+/g,"<br>").replace(/。</g,"<").replace(/。$/g,"")).search(/<br>/)&&r.push("with-break"),0===n.search(/<i/)&&r.push("with-icon"),t.attr("class",r.join(" ")).html(n).appendTo(e.removeClass("hidden")).after("<br>")},t.show=function(e,t){return e.animateBy("fadeIn",function(){return"function"==typeof t?t():void 0})},$.info=t}(),$.insertStyle=function(e,t){var n,r,a;if(e&&t)return r=(a=$.insertStyle).$target||(a.$target=$("head")),(n=$("#"+e)).length?(n.html(t),t):($("<style>").attr({id:e}).html(t).appendTo(r),t)},$.next=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i=function(){switch(t.length){case 1:return[0,t[0]];default:return t}}(),o=_slicedToArray(i,2);return a=o[0],r=o[1],setTimeout(r,a)},$.parseJson=function(e){switch($.type(e)){case"array":case"object":return e;case"string":try{return $.parseJSON(e)}catch(t){return t,e}break;default:return e}},$.parseSafe=_.escape,$.parseShortDate=function(e){var t,n,r,a,i,o;for(a=i=0,o=(n=[(r="date"===$.type(e)?e:new Date(e)).getFullYear(),1+r.getMonth(),r.getDate()]).length;i<o;a=++i)t=n[a],n[a]=$.parseString(t),a&&n[a].length<2&&(n[a]="0"+n[a]);return n.join("")},$.parseSize=function(e){var t;if(!e)return"0 B";switch(t=parseInt(e),!1){case!(t>1099511627776):return(t/1099511627776).toFixed(2)+" TB";case!(t>1073741824):return(t/1073741824).toFixed(2)+" GB";case!(t>1048576):return(t/1048576).toFixed(2)+" MB";case!(t>1024):return(t/1024).toFixed(2)+" KB";default:return t+" B"}},$.parseString=function(e){var t;switch($.type(t=e)){case"array":return JSON.stringify({_obj:t}).replace(/\{(.*)\}/,"$1").replace(/"_obj":/,"");case"boolean":case"number":return t.toString();case"null":return"null";case"object":return JSON.stringify(t);case"string":return t;case"undefined":return"undefined";default:try{return t.toString()}catch(e){return e,""}}},$.parseTemp=function(e,t){var n,r,a;if("string"!==$.type(e))return"";for(n in r=e,t)a=t[n],r=r.replace(new RegExp("\\["+n+"\\]","g"),a);return r},$.preload=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i,o,s,c,u=function(){switch(t.length){case 1:return[t[0],null];case 2:return t;default:throw new Error("invalid argument length")}}(),l=_slicedToArray(u,2);return s=l[0],a=l[1],s=_.uniq(function(){switch($.type(s)){case"string":return s.split(" ");case"array":return s;default:throw new Error("invalid list")}}()),o=$.Deferred(),s.length?((r=$("<img>")).on("error",function(){return i()}).on("load",function(){return i(r.attr("src"))}),i=function(e){return s.length?(o.notify(e),c()):(r.remove(),o.notify(e),o.resolve(),void("function"==typeof a&&a()))},(c=function(){return r.attr("src",s.shift())})(),o.promise()):(o.resolve(),"function"==typeof a&&a(),o.promise())},function(){var e,t,n,r,a;e=$("body"),t=$("head"),a=app.salt,n=function(){var n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"get",value:function(e,t){var n,r,a,i=this;return n=$.Deferred(),r=function(){var t,n,r,i;for(i=[],t=0,n=(r=e.style).length;t<n;t++)a=r[t],i.push(this.getStyle(a));return i}.call(this),$.when.apply($,r).fail(function(e){return n.reject(e)}).done(function(){return r=function(){var t,n,r,i;for(i=[],t=0,n=(r=e.html).length;t<n;t++)a=r[t],i.push(this.getHtml(a));return i}.call(i),$.when.apply($,r).fail(function(e){return n.reject(e)}).done(function(){return r=function(){var t,n,r,i;for(i=[],t=0,n=(r=e.script).length;t<n;t++)a=r[t],i.push(this.getScript(a));return i}.call(i),$.when.apply($,r).fail(function(e){return n.reject(e)}).done(function(){return n.resolve(),"function"==typeof t?t():void 0})})}),n.promise()}},{key:"getHtml",value:function(e){var t,n,r,a;return n=e+".html",this.cache.html[e]?($.i("require","hit '"+n+"'"),this.cache.html[e]):(t=$.Deferred(),a=""+(r=this.setting.html).prefix+e+r.suffix,$.get(a).fail(function(){return t.reject("'"+n+"' not found")}).done(function(a){return $.i("require","loaded '"+n+"'"),r.callback(a,e),t.resolve()}),this.cache.html[e]=t.promise())}},{key:"getScript",value:function(e){var t,n,r,a;return n=e+".js",this.cache.script[e]?($.i("require","hit '"+n+"'"),this.cache.script[e]):(t=$.Deferred(),a=""+(r=this.setting.script).prefix+e+r.suffix,$.getScript(a).fail(function(){return t.reject("'"+n+"' not found")}).done(function(){return $.i("require","loaded '"+n+"'"),t.resolve()}),this.cache.script[e]=t.promise())}},{key:"getStyle",value:function(e){var n,r,a,i;return r=e+".css",this.cache.style[e]?($.i("require","hit '"+r+"'"),this.cache.style[e]):(n=$.Deferred(),i=""+(a=this.setting.style).prefix+e+a.suffix,$("<link>").one("error",function(){return n.reject("'"+r+"' not found")}).one("load",function(){return $.i("require","loaded '"+r+"'"),n.resolve()}).attr({href:i,rel:"stylesheet"}).appendTo(t),this.cache.style[e]=n.promise())}},{key:"set",value:function(e){return this.setting=_.merge(this.setting,e)}}]),e}();return n.prototype.cache={html:{},script:{},style:{}},n.prototype.setting={html:{callback:function(t){return e.append(t)},prefix:"html/",suffix:".html?salt="+a},script:{prefix:"script/",suffix:".js?salt="+a},style:{prefix:"style/",suffix:".css?salt="+a}},n}.call(this),r=function(e,t){var a,i,o,s,c,u,l,p,f;if(!e)return r.avatar?($.i("$.require() overloaded"),r.avatar):r.avatar=new n;if("array"===(p=$.type(e)))return a=$.Deferred(),$.when.apply($,function(){var t,n,a;for(a=[],t=0,n=e.length;t<n;t++)c=e[t],a.push(r(c));return a}()).fail(function(e){return a.reject(e)}).done(function(){return a.resolve(),"function"==typeof t?t():void 0}),a.promise();for(u=function(){switch(p){case"string":return{html:e,style:e,script:e};case"object":return e;default:throw new Error("invalid argument type")}}(),i=0,s=(l=["html","script","style"]).length;i<s;i++)f=u[o=l[i]]||(u[o]=[]),"array"!==$.type(f)&&(u[o]=[f]),$.unique(u[o]);return r.avatar.get(u,t)},$.require=r}(),$.serialize=function(e){var t,n,r,a,i,o,s;switch($.type(e)){case"object":return e;case"string":if(!~e.search(/=/))return{};for(o={},n=0,a=(i=_.trim(e.replace(/\?/g,"")).split("&")).length;n<a;n++){t=i[n].split("=");var c=[_.trim(t[0]),_.trim(t[1])];s=c[1],(r=c[0]).length&&(o[r]=s)}return o;default:return{}}},$.timeStamp=function(e){var t,n,r,a,i,o;return"number"===(o=$.type(e))?_.floor(e,-3):"string"!==o?_.floor(_.now(),-3):(i=_.trim(e).replace(/\s+/g," ").replace(/[-|\/]/g,"."),a=new Date,r=(n=i.split(" "))[0].split("."),a.setFullYear(r[0],r[1]-1,r[2]),(t=n[1])?(t=t.split(":"),a.setHours(t[0],t[1],t[2]||0,0)):a.setHours(0,0,0,0),a.getTime())},$.cache.namespace="anitama",app.config=$.Cache("config",{_data:{version:"0.0.1"},debug:!1}),app.config("debug")?app.path={home:"http://pre.anitama.net",api:"http://dev.anitama.net/api",cdn:"http://pre.anitama.net"}:app.path={home:"http://www.anitama.cn",api:"https://app.anitama.net",cdn:"http://www.anitama.cn"},app.path.store="http://a.app.qq.com/o/simple.jsp?pkgname=cn.anitama.tamako&g_f=991653",$.require().set({html:{prefix:"/_static/",suffix:"?salt="+app.salt,callback:function(e){return app.dom.stage.append(e)}},style:{prefix:app.path.cdn+"/static/index/style/require/",suffix:".css?salt="+app.salt},script:{prefix:app.path.cdn+"/static/index/script/require/",suffix:".js?salt="+app.salt}}),app.storage=$.Cache("system",{_data:{version:"0.0.1"}}),O=function(e){if(e.setRequestHeader("X-Agent","browser-desktop/"+app.version),app.user.isLogin())return e.setRequestHeader("X-Csrf",app.cookie("token"))},app.get=function(e,t){var n;return n=$.Deferred(),~e.search("://")||(e=""+app.path.api+e),t&&(e+="?"+$.param(t)),$.ajax({url:e,type:"GET",xhrFields:{withCredentials:!0},beforeSend:function(e){return O(e)}}).fail(function(e){return n.reject(e)}).done(function(e){if(null!=e?e.success:void 0)return n.resolve(e.data);n.reject(e?e.info:"API Server is DOWN")}),n.promise()},app.post=function(e,t){var n;return n=$.Deferred(),~e.search("://")||(e=""+app.path.api+e),$.ajax({url:e,type:"POST",data:t,xhrFields:{withCredentials:!0},beforeSend:function(e){return O(e)}}).fail(function(e){return n.reject(e)}).done(function(e){if(null!=e?e.success:void 0)return n.resolve(e.data);n.reject(e?e.info:"API Server is DOWN")}),n.promise()},(B=function(e){return"function"==typeof B[e]?B[e]():void 0}).debug=function(){var e;return(e=app.config("debug"))?n.addClass("mode-debug"):n.removeClass("mode-debug"),e},B.login=function(){return app.user.check()},app.check=B,(P=function(e){var t,n,r,a;if("string"!==(a=$.type(e))&&"array"!==a)return!1;for("string"===a&&(e=e.replace(/\s+/g," ").split(" ")),t=0,r=e.length;t<r;t++)if(n=e[t],!0===function(){switch(n){case"login":return!app.user.isLogin();case"application":return"application"!==app.shell}}())return P.execute(n),!0;return!1}).execute=function(e){switch(e){case"application":return app.confirm({message:"该功能需要客户端支持，是否立刻获取客户端？",title:"获取客户端"}).done(function(){return app.open("http://www.anitama.cn/")});case"login":return app.confirm({message:"该功能需要用户身份认证，是否立刻登录？",title:"身份认证"}).done(function(){return location.href="/login"})}},app.lack=P,function(){var e,t,n;if(t=window.Cookies)return t.defaults={path:"/",domain:((n=location.host.split("."))[0]="",n.join(".")),expires:12096e5},(e=app.cookie=function(){var t,n,r;switch(arguments.length){case 1:switch($.type(arguments.length<=0?void 0:arguments[0])){case"string":return(t=e).get.apply(t,arguments);default:(n=e).set.apply(n,arguments)}break;case 2:(r=e).set.apply(r,arguments)}return document.cookie}).get=function(e){return t.get(e)},e.set=function(){for(var n,r,a,i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];switch(o.length){case 1:for(n in r=o[0])null==(a=r[n])?e.remove(n):t.set(n,a);break;case 2:n=o[0],null==(a=o[1])?e.remove(n):t.set(n,a)}return document.cookie},e.remove=function(e){return t.expire(e),document.cookie};$.i("Plugin [Cookies] is not existed.")}(),app.debug=function(e){var t,r;return app.config("debug")?"string"===$.type(e)?app.debug.data[e]||null:((r=app.debug.data=$.extend({},e)).shell&&("browser"===app.shell&&"application"===r.shell&&$.next(function(){return $(document).triggerHandler("deviceready")}),app.shell=r.shell,n.removeClass(function(){var e,n,r,a;for(a=[],e=0,n=(r=["browser","application","wechat","electron"]).length;e<n;e++)t=r[e],a.push("shell-"+t);return a}().join(" ")).addClass("shell-"+r.shell)),r.os&&(app.os=r.os,n.removeClass(function(){var e,n,r,a;for(a=[],e=0,n=(r=["web","android","ios"]).length;e<n;e++)t=r[e],a.push("os-"+t);return a}().join(" ")).addClass("os-"+r.os)),null!=r.cache&&app.config({cache:r.cache}),"pub"===r.source&&(app.path={home:"http://m.anitama.cn",api:"https://app.anitama.net"}),app.debug.night=function(){return app.config({night:!app.config("night")}),location.reload()},app.debug.login=function(){return app.user.logout(),app.route.go("/login"),$.next(1e3,function(){return $("#btn-weibo-login").click()})}):null},app.confirm=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;return a=$.Deferred(),$.require("card-confirm",function(){var t,r;return(t=r=app.model.card("card-confirm")).bind.apply(t,[a].concat(n)),r.render(e),r.show()}),a.promise()},app.prompt=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;return a=$.Deferred(),$.require("card-prompt",function(){var t,r;return(t=r=app.model.card("card-prompt")).bind.apply(t,[a].concat(n)),r.render(e),r.show()}),a.promise()},app.selector=function(e){return"string"===$.type(e)?$(e):e},app.temp=function(e,t){var n,r;if(app.template||(app.template={}),!e)return app.template;if(e=e.replace(/#/g,""),r=app.template[e])return r;if(1!==(n=$("#"+e)).length)throw new Error("invalid selector <#"+e+">");return r=n.html().replace(/\s*[\n\r]\s*/g,"").replace(/>\s+</g,"><"),r=_.trim(r),t&&(r=t(r)),n.remove(),app.template[e]=r},app.el=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,i,o,s,c;if("string"!==$.type(t[0]))return r=[(o=$.extend({tag:"span",html:""},t[0])).tag],o.id&&r.push("id='"+o.id+"'"),o.class&&r.push("class='"+o.class+"'"),o.attr&&r.push(function(){var e,t;for(i in t=[],e=o.attr)c=e[i],t.push(i+"='"+c+"'");return t}().join(" ")),o.data&&r.push(function(){var e,t;for(i in t=[],e=o.data)c=e[i],t.push("data-"+i+"='"+c+"'");return t}().join(" ")),("<"+r.join(" ")+">"+o.html+"</"+o.tag+">").replace(/'/g,'"');switch(t[0]){case"alert":var u=function(){switch(t.length){case 2:return[null,t[1]];case 3:return[t[1],t[2]]}}(),l=_slicedToArray(u,2);return s=l[0],a=l[1],s=s?"alert "+s:"alert",app.el({tag:"p",class:s,html:a});case"icon":return app.el({tag:"i",class:"icon icon-"+t[1]})}},app.pager=function(e){var t,n,r,a,i,o,s,c;if((i=$.extend({page:1,count:0,size:10,long:5},e)).count<=i.size)return"";for(i.total||(i.total=Math.ceil(i.count/i.size)),n=function(e){return"<i class='icon icon-"+e+"'></i>"},o=function(e){return $.parseTemp('<a class="pager [class]" data-page="[page]" [href]>[content]</a>',{class:e.class,page:e.page,content:e.content,href:i.href?"href='"+$.parseTemp(i.href,{page:e.page})+"'":""})},i.first="",i.page>1&&(i.first=o({class:"pager-last",page:1,content:n("skip-previous")})),i.last="",i.page!==i.total&&(i.last=o({class:"pager-first",page:i.total,content:n("skip-next")})),i.fores="",t=r=i.page-1,s=i.page-i.long;r>s;t=r+=-1)t>=1&&(i.fores=o({class:"pager-hinds",page:t,content:t})+i.fores);for(i.hinds="",t=a=i.page+1,c=i.page+i.long;a<c;t=a+=1)t<=i.total&&(i.hinds+=o({class:"pager-fores",page:t,content:t}));return i.here="",i.total>0&&(i.here=o({class:"pager-here active",page:i.page,content:i.page})),i.hint="<span class='hint'>"+i.page+" / "+i.total+"页</span>",[i.first,i.fores,i.here,i.hinds,i.last,i.hint].join("")},function(){var e,t,n,r,a;if((e=$("#area-tool-fixed")).length)app.dom.fixed=e,n=e.data(),r=n.fn={},a=n.status={},r.bindComment=function(){var e;if(!(e=$("#btn-comment-fixed")))throw new Error("invalid element");return e.on("click",function(){if(!app.model.editor)return $("#comment").one("event-render",function(){return app.model.editor("editor").focus()}),app.fn.comment.check("force");app.model.editor("editor").focus()})},r.bindFavor=function(e){var t;if(!e)throw new Error("invalid argument");if(!(t=$("#btn-favor-fixed")).length)throw new Error("invalid element");return t.on("click",function(){if(!app.lack("login"))return $.require({script:"favor"},function(){if(!t.hasClass("active"))return t.addClass("active"),$.info(e.feedback[0]),app.fn.favor.add(e.type,e.id);app.confirm({message:e.message,title:e.title},function(){return t.removeClass("active"),$.info(e.feedback[1]),app.fn.favor.remove(e.type,e.id)})})})},r.bindShare=function(e){var t,n,r,a;if(!e)throw new Error("invalid argument");if(!(n=$("#btn-share-fixed")).length)throw new Error("invalid element");for(a in t=$("#block-share-baidu"),r={moments:"weixin",weibo:"tsina",qq:"sqq",qqzone:"qzone",tieba:"tieba"},n.on("click",function(){return app.fn.copy(location.href,function(){return $.info("已将当前地址复制至剪贴板")})}),r)!function(e,n){$("#btn-"+e+"-share").on("click",function(){return t.children("a.bds_"+n)[0].click()})}(a,r[a]);return window._bd_share_config={common:{bdSnsKey:{tsina:791006433},bdUrl:"",bdText:"",bdPic:"",onBeforeClick:function(t){var n;return{bdUrl:(n=e(t)).url,bdText:n.text,bdPic:n.thumb}}},share:{}},$.getScript("//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date/36e5))},r.setCommentCount=function(e){var t,n,r;if(!(t=$("#btn-comment-fixed")).length)throw new Error("invalid element");if(n=t.children("span.pts"),e!==a.commentCount)return a.commentCount=e,r=e?"removeClass":"addClass",n.text(e),n[r]("not-visible"),t.removeClass("not-ready")},r.setFavorStatus=function(e){var t;if(!(t=$("#btn-favor-fixed")).length)throw new Error("invalid element");return e&&t.addClass("active"),t.removeClass("not-ready")},r.top=function(){return app.fn.scroll(0)},(t=$("#btn-top-fixed")).length&&t.on("click",function(){return r.top()}),e.add($("#footer")).find("img.qrcode").each(function(){var e;return(e=$(this)).closest("a").one("mouseenter",function(){return e.attr("src",e.data().src)})})}(),app.fn.comment=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a,i,o,s,c;if(o="scroll.comment",i=$("#footer"),!(a=$("#area-reply")).length)throw new Error("invalid element");return c=app.fn.comment,s={},c.bind=function(){return t.on(o,function(){return c.check()}),c.check(),app.dom.fixed.data().fn.bindComment()},c.check=function(e){if(!s.isReady&&(e||!(t.scrollTop()+2*t.innerHeight()<(i.offset().top||65535))))return s.isReady=!0,t.off(o),c.require(function(){var e;return a.removeClass("hidden"),(e=app).comment.apply(e,n)})},c.require=function(e){return $.require({style:["../../../lib/style/editor.min","editor","comment"],script:["../../../lib/script/editor.min","../../../core/script/model/editor","../../../core/script/model/comment","comment"]},function(){return"function"==typeof e?e():void 0})},c.bind()},app.fn.copy=function(e,t){var n,r,a;return(n=$("<span class='to-be-copied'>"+e+"</span>")).appendTo($("body")),(r=document.createRange()).selectNode(n[0]),(a=document.getSelection()).removeAllRanges(),a.addRange(r),document.execCommand("copy"),a.toString()===e&&"function"==typeof t&&t(),n.remove()},app.fn.keepStay=function(e){return e?t.one("beforeunload",function(t){return t.returnValue=e}):t.off("beforeunload")},app.fn.lazyLoad=function(e){var t;return t=function(){switch($.type(e)){case"array":return e;case"string":return[e];default:throw new Error("invalid type")}}(),window.lozad(t.join(", ")).observe()},app.fn.parseContent=function(e){return e.replace(/:(\w{1,4})\.(\d{1,4}):/g,'<img class="emotion" src="http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/$1/$2.gif">')},app.fn.remove=function(e,t){var n;return(n=app.selector(e)).animateBy("animate-remove",function(){return n.remove(),"function"==typeof t?t():void 0})},app.fn.scroll=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return e=(t=app.dom)["scroll-stage"]||(t["scroll-stage"]=$("html, body")),n="number"===$.type(r)?r:app.selector(r).offset().top,e.animate({scrollTop:n},a)},app.fn.shadow=function(e){var t;if("show"!==e&&"hide"!==e)throw new Error("invalid action");return(t=app.fn.shadow).vm||(t.vm=app.model.shadow($("#shadow"))),app.fn.shadow.vm[e]()},app.fn.shake=function(e,t){return app.selector(e).animateBy("animated shake",function(){return"function"==typeof t?t():void 0})},app.fn.share=function(e){var t;switch(e){case"confirm-application":if("application"!==app.shell)return;if(e="version-share-app",app.version===app.storage(e))return;return $.require("require/card-share-app",function(){return $("#card-share-app").data().show(),app.storage(e,app.version)});case"application":return t=app.path.store,app.share("application",{id:app.version,url:t,title:"",image:"http://www.anitama.cn/style/image/share.jpg",message:["讲道理的动漫媒体Anitama，讲述创作者自己的故事。下载链接："+t,"讲道理的动漫媒体#Anitama#，讲述创作者自己的故事。下载链接："+t,"讲道理的动漫媒体#Anitama#，讲述创作者自己的故事。"]})}},app.fn.title=function(e){var t,n;return t=(n=app.fn.title).data||(n.data=_.trim(document.title.replace(/.* - Anitama/,"Anitama"))),document.title=e+" - "+t},function(){var e;(e=$.Cache("user",{_data:{version:"0.0.1"}})).login=function(t){var n;return n=$.Deferred(),app.get("/member/info").fail(function(t,r){return 2===r&&e.logout(),n.reject(t)}).done(function(t){var r;return r=t.user,e({uid:r.uid,name:r.nickname,avatar:r.avatarUrl,expire:r.expireAt}),e.check(),n.resolve()}),n.promise()},e.logout=function(){var t;return t=$.Deferred(),app.post("/auth/logout").always(function(){return app.cookie({isLogin:null,token:null}),e.clear(),e.check()}).fail(function(e){return t.reject(e)}).done(function(){return t.resolve()}),t.promise()},e.isLogin=function(){return!!app.cookie("isLogin")},e.check=function(){return"user-login",e.isLogin()?n.addClass("user-login"):n.removeClass("user-login"),e.isLogin()},app.user=e}(),window.Toggleable=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return _inherits(t,Data),_createClass(t,[{key:"__init__",value:function(){var e=this;return this.__data__={},this.isDetachable&&(app.dom[this.$el.attr("id")]=this.$el),this.observe("isVisible",function(t,n){if(t!==n)return e[t?"__show__":"__hide__"]()})}},{key:"__hide__",value:function(){var e=this;return this.isDetachable&&this.$el.hasClass("hidden")&&this.$el.detach().removeClass("hidden"),this.$el.removeClass("animate-in animate-out"),this.$el.animateBy("animate-out",function(){return e.isDetachable?e.$el.detach():e.$el.addClass("hidden")}),this.$el.triggerHandler("event-hide")}},{key:"__show__",value:function(){return this.$el.removeClass("animate-in animate-out"),this.$el.animateBy("animate-in"),this.isDetachable?this.$el.hasClass("hidden")?this.$el.removeClass("hidden"):this.$el.appendTo(app.dom.stage):this.$el.removeClass("hidden"),this.$el.triggerHandler("event-show")}},{key:"hide",value:function(){return!1,this.set({isVisible:!1})}},{key:"show",value:function(){return!0,this.set({isVisible:!0})}},{key:"toggle",value:function(){return this[this.isVisible()?"hide":"show"]()}}]),t}(),window.Card=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.$el=e,n.isDetachable=!0,n.__init__(),n}return _inherits(t,Toggleable),_createClass(t,[{key:"bindShadow",value:function(){var e,t=this;return e="click.bindShadow",this.$el.on("event-show",function(){return app.fn.shadow("show"),app.dom.shadow.off(e).on(e,function(){return t.hide()})}).on("event-hide",function(){return app.fn.shadow("hide"),app.dom.shadow.off(e)})}}]),t}(),app.model.card=function(e){var t,n;switch(n=(t=app.model.card).map||(t.map={}),$.type(e)){case"string":return n[e];case"object":return n[e.attr("id")]=new Card(e);default:return n}},window.Shadow=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.$el=e,n.isDetachable=!0,n.__init__(),n.$el.on("event-show",function(){var e;return e="#stage{overflow:hidden;width:"+app.dom.stage.width()+"px}",$.insertStyle("style-noScrollable",e)}),n.$el.on("event-hide",function(){return $(this).onAnimationEnd("kept",function(){return $("#style-noScrollable").remove()})}),n}return _inherits(t,Toggleable),t}(),app.model.shadow=function(e){return new Shadow(e)},$.i.forbid(["require","cache","history"]),app.check("debug"),app.check("login"),function(){var e;if(e=app.user("avatar"))$("#avatar-bar").css({"background-image":"url("+e+")"})}(),function(){var e,t,n,r;if((n=$("#subbar")).length)e=$("#bar"),t=n.children(".inner"),(r=n.data()).show=function(){return n.addClass("status-visible")},r.hide=function(){return n.removeClass("status-visible")},r.render=function(e){var n,a;switch((n=e.data()).text||(n.text=_.trim(e.text()))){case"文章":return a=e.position().left-.5*(160-e.outerWidth()),t.css("padding-left",a).html('<a href="/channel">全部文章</a> <a href="/channel/series">系列文章</a>'),r.show();case"节目":return a=e.position().left-.5*(160-e.outerWidth()),t.css("padding-left",a).html('<a href="/bangumi">今日节目</a> <a href="/bangumi/all">全部节目</a>'),r.show();default:return r.hide()}},e.children(".inner").children(".left").children("a").on("mouseenter",function(){return r.render($(this))}).on("mouseleave",function(){return r.hide()}),t.on("mouseenter",function(){return r.show()}).on("mouseleave",function(){return r.hide()})}(),R=$("#ipt-search-bar"),(M=$("#btn-search-bar")).on("click",function(){var e;return(e=_.trim($.parseSafe(R.val()))).length?window.open("/search?keyword="+encodeURIComponent(e||"")):($.info("请输入搜索内容"),void app.fn.shake(R))}),R.on("keypress",function(e){var t;if(10===(t=e.which)||13===t)return M.click()}),window._hmt||(window._hmt=[]),$("<script>").attr({src:"//hm.baidu.com/hm.js?8d009a2184bc44535c95921b63be5cc7"}).appendTo(n),$.i("stat","baidu tongji inserted")}).call(void 0);