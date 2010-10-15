/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Oct 15 14:08
*/
KISSY.add("ua",function(a){var n=navigator.userAgent,q="",j="",b,h={},i=function(d){var p=0;return parseFloat(d.replace(/\./g,function(){return p++===0?".":""}))};if((b=n.match(/AppleWebKit\/([\d.]*)/))&&b[1]){h[q="webkit"]=i(b[1]);if((b=n.match(/Chrome\/([\d.]*)/))&&b[1])h[j="chrome"]=i(b[1]);else if((b=n.match(/\/([\d.]*) Safari/))&&b[1])h[j="safari"]=i(b[1]);if(/ Mobile\//.test(n))h.mobile="apple";else if(b=n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))h.mobile=b[0].toLowerCase()}else if((b=
n.match(/Presto\/([\d.]*)/))&&b[1]){h[q="presto"]=i(b[1]);if((b=n.match(/Opera\/([\d.]*)/))&&b[1]){h[j="opera"]=i(b[1]);if((b=n.match(/Opera\/.* Version\/([\d.]*)/))&&b[1])h[j]=i(b[1]);if((b=n.match(/Opera Mini[^;]*/))&&b)h.mobile=b[0].toLowerCase();else if((b=n.match(/Opera Mobi[^;]*/))&&b)h.mobile=b[0]}}else if((b=n.match(/MSIE\s([^;]*)/))&&b[1]){h[q="trident"]=0.1;h[j="ie"]=i(b[1]);if((b=n.match(/Trident\/([\d.]*)/))&&b[1])h[q]=i(b[1])}else if(b=n.match(/Gecko/)){h[q="gecko"]=0.1;if((b=n.match(/rv:([\d.]*)/))&&
b[1])h[q]=i(b[1]);if((b=n.match(/Firefox\/([\d.]*)/))&&b[1])h[j="firefox"]=i(b[1])}h.core=q;h.shell=j;h._numberify=i;a.UA=h});
KISSY.add("ua-extra",function(a){var n=a.UA,q=navigator.userAgent,j,b,h={},i=n._numberify;if(q.match(/360SE/))h[b="se360"]=3;else if(q.match(/Maxthon/)&&(j=window.external)){b="maxthon";try{h[b]=i(j.max_version)}catch(d){h[b]=0.1}}else if(j=q.match(/TencentTraveler\s([\d.]*)/))h[b="tt"]=j[1]?i(j[1]):0.1;else if(q.match(/TheWorld/))h[b="theworld"]=3;else if(j=q.match(/SE\s([\d.]*)/))h[b="sougou"]=j[1]?i(j[1]):0.1;b&&(h.shell=b);a.mix(n,h)});
KISSY.add("dom",function(a,n){function q(j,b){return j&&j.nodeType===b}a.DOM={_isElementNode:function(j){return q(j,1)},_isKSNode:function(j){return a.Node&&q(j,a.Node.TYPE)},_getWin:function(j){return j&&"scrollTo"in j&&j.document?j:q(j,9)?j.defaultView||j.parentWindow:j===n?window:false},_nodeTypeIs:q}});
KISSY.add("selector",function(a,n){function q(c,f){var e,g,k=[],r;f=j(f);if(a.isString(c)){c=a.trim(c);if(m.test(c)){if(g=b(c.slice(1),f))k=[g]}else if(e=l.exec(c)){g=e[1];r=e[2];e=e[3];if(f=g?b(g,f):f)if(e)if(!g||c.indexOf(o)!==-1)k=i(e,r,f);else{if((g=b(g,f))&&x.hasClass(g,e))k=[g]}else if(r)k=h(r,f)}else if(a.ExternalSelector)return a.ExternalSelector(c,f);else d(c)}else if(c&&(c[t]||c[u]))k=c[t]?[c[t]()]:c[u]();else if(c&&(a.isArray(c)||c&&!c.nodeType&&c.item&&c!=window))k=c;else if(c)k=[c];if(k&&
!k.nodeType&&k.item&&k!=window)k=a.makeArray(k);k.each=function(w,s){return a.each(k,w,s)};return k}function j(c){if(c===n)c=p;else if(a.isString(c)&&m.test(c))c=b(c.slice(1),p);else if(c&&c.nodeType!==1&&c.nodeType!==9)c=null;return c}function b(c,f){if(f.nodeType!==9)f=f.ownerDocument;return f.getElementById(c)}function h(c,f){return f.getElementsByTagName(c)}function i(c,f,e){e=c=e.getElementsByClassName(c);var g=0,k=0,r=c.length,w;if(f&&f!==v){e=[];for(f=f.toUpperCase();g<r;++g){w=c[g];if(w.tagName===
f)e[k++]=w}}return e}function d(c){a.error("Unsupported selector: "+c)}var p=document,x=a.DOM,o=" ",v="*",t="getDOMNode",u=t+"s",m=/^#[\w-]+$/,l=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var c=p.createElement("div");c.appendChild(p.createComment(""));if(c.getElementsByTagName(v).length>0)h=function(f,e){var g=e.getElementsByTagName(f);if(f===v){for(var k=[],r=0,w=0,s;s=g[r++];)if(s.nodeType===1)k[w++]=s;g=k}return g}})();p.getElementsByClassName||(i=p.querySelectorAll?function(c,f,
e){return e.querySelectorAll((f?f:"")+"."+c)}:function(c,f,e){f=e.getElementsByTagName(f||v);e=[];var g=0,k=0,r=f.length,w,s;for(c=o+c+o;g<r;++g){w=f[g];if((s=w.className)&&(o+s+o).indexOf(c)>-1)e[k++]=w}return e});a.query=q;a.get=function(c,f){return q(c,f)[0]||null};a.mix(x,{query:q,get:a.get,filter:function(c,f){var e=q(c),g,k,r,w=[];if(a.isString(f)&&(g=l.exec(f))&&!g[1]){k=g[2];r=g[3];f=function(s){return!(k&&s.tagName!==k.toUpperCase()||r&&!x.hasClass(s,r))}}if(a.isFunction(f))w=a.filter(e,
f);else if(f&&a.ExternalSelector)w=a.ExternalSelector._filter(c,f);else d(f);return w},test:function(c,f){var e=q(c);return x.filter(e,f).length===e.length}})});
KISSY.add("dom-data",function(a,n){var q=window,j=a.DOM,b="_ks_data_"+a.now(),h={},i={},d={EMBED:1,OBJECT:1,APPLET:1};a.mix(j,{data:function(p,x,o){if(a.isPlainObject(x))for(var v in x)j.data(p,v,x[v]);else if(o===n){p=a.get(p);var t;if(!(!p||d[p.nodeName])){if(p==q)p=i;t=(v=p&&p.nodeType)?h:p;p=t[v?p[b]:b];if(a.isString(x)&&p)return p[x];return p}}else a.query(p).each(function(u){if(!(!u||d[u.nodeName])){if(u==q)u=i;var m=h,l;if(u&&u.nodeType){if(!(l=u[b]))l=u[b]=a.guid()}else{l=b;m=u}if(x&&o!==
n){m[l]||(m[l]={});m[l][x]=o}}})},removeData:function(p,x){a.query(p).each(function(o){if(o){if(o==q)o=i;var v,t=h,u,m=o&&o.nodeType;if(m)v=o[b];else{t=o;v=b}if(v){u=t[v];if(x){if(u){delete u[x];a.isEmptyObject(u)&&j.removeData(o)}}else{if(m)o.removeAttribute&&o.removeAttribute(b);else try{delete o[b]}catch(l){}m&&delete t[v]}}}})}})});
KISSY.add("dom-class",function(a,n){function q(i,d,p,x){if(!(d=a.trim(d)))return x?false:n;i=a.query(i);var o=0,v=i.length;d=d.split(b);for(var t;o<v;o++){t=i[o];if(j._isElementNode(t)){t=p(t,d,d.length);if(t!==n)return t}}if(x)return false}var j=a.DOM,b=/[\.\s]\s*\.?/,h=/[\n\t]/g;a.mix(j,{hasClass:function(i,d){return q(i,d,function(p,x,o){if(p=p.className){p=" "+p+" ";for(var v=0,t=true;v<o;v++)if(p.indexOf(" "+x[v]+" ")<0){t=false;break}if(t)return true}},true)},addClass:function(i,d){q(i,d,function(p,
x,o){var v=p.className;if(v){var t=" "+v+" ";v=v;for(var u=0;u<o;u++)if(t.indexOf(" "+x[u]+" ")<0)v+=" "+x[u];p.className=a.trim(v)}else p.className=d})},removeClass:function(i,d){q(i,d,function(p,x,o){var v=p.className;if(v)if(o){v=(" "+v+" ").replace(h," ");for(var t=0,u;t<o;t++)for(u=" "+x[t]+" ";v.indexOf(u)>=0;)v=v.replace(u," ");p.className=a.trim(v)}else p.className=""})},replaceClass:function(i,d,p){j.removeClass(i,d);j.addClass(i,p)},toggleClass:function(i,d,p){var x=a.isBoolean(p),o;q(i,
d,function(v,t,u){for(var m=0,l;m<u;m++){l=t[m];o=x?!p:j.hasClass(v,l);j[o?"removeClass":"addClass"](v,l)}})}})});
KISSY.add("dom-attr",function(a,n){var q=a.UA,j=q.ie,b=j&&j<8,h=document.documentElement.textContent!==n?"textContent":"innerText",i=a.DOM,d=i._isElementNode,p=/^(?:href|src|style)/,x=/^(?:href|src|colspan|rowspan)/,o=/\r/g,v=/^(?:radio|checkbox)/,t={readonly:"readOnly"},u={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};b&&a.mix(t,{"for":"htmlFor","class":"className"});a.mix(i,{attr:function(m,l,c,f){if(a.isPlainObject(l)){f=c;for(var e in l)i.attr(m,e,l[e],f)}else if(l=a.trim(l)){l=
l.toLowerCase();if(f&&u[l])return i[l](m,c);l=t[l]||l;if(c===n){m=a.get(m);if(!d(m))return n;var g;p.test(l)||(g=m[l]);if(g===n)g=m.getAttribute(l);if(b)if(x.test(l))g=m.getAttribute(l,2);else if(l==="style")g=m.style.cssText;return g===null?n:g}a.each(a.query(m),function(k){if(d(k))if(l==="style")k.style.cssText=c;else{if(l==="checked")k[l]=!!c;k.setAttribute(l,""+c)}})}},removeAttr:function(m,l){a.each(a.query(m),function(c){if(d(c)){i.attr(c,l,"");c.removeAttribute(l)}})},val:function(m,l){if(l===
n){var c=a.get(m);if(!d(c))return n;if(c&&c.nodeName.toUpperCase()==="option".toUpperCase())return(c.attributes.value||{}).specified?c.value:c.text;if(c&&c.nodeName.toUpperCase()==="select".toUpperCase()){var f=c.selectedIndex,e=c.options;if(f<0)return null;else if(c.type==="select-one")return i.val(e[f]);c=[];for(var g=0,k=e.length;g<k;++g)e[g].selected&&c.push(i.val(e[g]));return c}if(q.webkit&&v.test(c.type))return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(o,"")}a.each(a.query(m),
function(r){if(r&&r.nodeName.toUpperCase()==="select".toUpperCase()){if(a.isNumber(l))l+="";var w=a.makeArray(l),s=r.options,y;g=0;for(k=s.length;g<k;++g){y=s[g];y.selected=a.inArray(i.val(y),w)}if(!w.length)r.selectedIndex=-1}else if(d(r))r.value=l})},text:function(m,l){if(l===n){var c=a.get(m);if(d(c))return c[h]||"";else if(i._nodeTypeIs(c,3))return c.nodeValue}else a.each(a.query(m),function(f){if(d(f))f[h]=l;else if(i._nodeTypeIs(f,3))f.nodeValue=l})}})});
KISSY.add("dom-style",function(a,n){function q(f,e){var g=a.get(f),k=e===p?g.offsetWidth:g.offsetHeight;a.each(e===p?["Left","Right"]:["Top","Bottom"],function(r){k-=parseFloat(b._getComputedStyle(g,"padding"+r))||0;k-=parseFloat(b._getComputedStyle(g,"border"+r+"Width"))||0});return k}function j(f,e,g){var k=g;if(g===x&&v.test(e)){k=0;if(b.css(f,"position")==="absolute"){g=f[e==="left"?"offsetLeft":"offsetTop"];if(h.ie===8||h.opera)g-=o(b.css(f.offsetParent,"border-"+e+"-width"))||0;k=g-(o(b.css(f,
"margin-"+e))||0)}}return k}var b=a.DOM,h=a.UA,i=document,d=i.documentElement,p="width",x="auto",o=parseInt,v=/^(?:left|top)/,t=/^(?:width|height|top|left|right|bottom|margin|padding)/i,u=/-([a-z])/ig,m=function(f,e){return e.toUpperCase()},l={},c={};a.mix(b,{_CUSTOM_STYLES:l,_getComputedStyle:function(f,e){var g="",k=f.ownerDocument;if(f.style)g=k.defaultView.getComputedStyle(f,null)[e];return g},css:function(f,e,g){if(a.isPlainObject(e))for(var k in e)b.css(f,k,e[k]);else{if(e.indexOf("-")>0)e=
e.replace(u,m);e=l[e]||e;if(g===n){f=a.get(f);k="";if(f&&f.style){k=e.get?e.get(f):f.style[e];if(k===""&&!e.get)k=j(f,e,b._getComputedStyle(f,e))}return k===n?"":k}else{if(g===null||g==="")g="";else if(!isNaN(new Number(g))&&t.test(e))g+="px";(e===p||e==="height")&&parseFloat(g)<0||a.each(a.query(f),function(r){if(r&&r.style){e.set?e.set(r,g):r.style[e]=g;if(g==="")r.style.cssText||r.removeAttribute("style")}})}}},width:function(f,e){if(e===n)return q(f,p);else b.css(f,p,e)},height:function(f,e){if(e===
n)return q(f,"height");else b.css(f,"height",e)},show:function(f){a.query(f).each(function(e){if(e){e.style.display=b.data(e,"display")||"";if(b.css(e,"display")==="none"){var g=e.tagName,k=c[g],r;if(!k){r=i.createElement(g);i.body.appendChild(r);k=b.css(r,"display");b.remove(r);c[g]=k}b.data(e,"display",k);e.style.display=k}}})},hide:function(f){a.query(f).each(function(e){if(e){var g=e.style,k=g.display;if(k!=="none"){k&&b.data(e,"display",k);g.display="none"}}})},toggle:function(f){a.query(f).each(function(e){if(e)e.style.display===
"none"?b.show(e):b.hide(e)})},addStyleSheet:function(f,e){var g;if(e)g=a.get("#"+e);if(!g){g=b.create("<style>",{id:e});a.get("head").appendChild(g);if(g.styleSheet)g.styleSheet.cssText=f;else g.appendChild(i.createTextNode(f))}}});if(d.style.cssFloat!==n)l["float"]="cssFloat";else if(d.style.styleFloat!==n)l["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(a,n){if(a.UA.ie){var q=a.DOM,j=document,b=j.documentElement,h=q._CUSTOM_STYLES,i=/^-?\d+(?:px)?$/i,d=/^-?\d/,p=/^(?:width|height)$/;try{if(b.style.opacity===n&&b.filters)h.opacity={get:function(o){var v=100;try{v=o.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(t){try{v=o.filters("alpha").opacity}catch(u){}}return v/100+""},set:function(o,v){var t=o.style,u=(o.currentStyle||0).filter||"";t.zoom=1;if(u)if(u=u.replace(/alpha\(opacity=.+\)/ig,""))u+=", ";
t.filter=u+"alpha(opacity="+v*100+")"}}}catch(x){}if(!(j.defaultView||{}).getComputedStyle&&b.currentStyle)q._getComputedStyle=function(o,v){var t=o.style,u=o.currentStyle[v];if(p.test(v))u=q[v](o)+"px";else if(!i.test(u)&&d.test(u)){var m=t.left,l=o.runtimeStyle.left;o.runtimeStyle.left=o.currentStyle.left;t.left=v==="fontSize"?"1em":u||0;u=t.pixelLeft+"px";t.left=m;o.runtimeStyle.left=l}return u}}});
KISSY.add("dom-offset",function(a,n){function q(g){var k=0,r=0,w=x(g[u]);if(g[e]){g=g[e]();k=g[m];r=g[l];if(b.mobile!=="apple"){k+=j[c](w);r+=j[f](w)}}return{left:k,top:r}}var j=a.DOM,b=a.UA,h=window,i=document,d=j._isElementNode,p=j._nodeTypeIs,x=j._getWin,o=i.compatMode==="CSS1Compat",v=Math.max,t=parseInt,u="ownerDocument",m="left",l="top",c="scrollLeft",f="scrollTop",e="getBoundingClientRect";a.mix(j,{offset:function(g,k){if(!(g=a.get(g))||!g[u])return null;if(k===n)return q(g);var r=g;if(j.css(r,
"position")==="static")r.style.position="relative";var w=q(r),s={},y,z;for(z in k){y=t(j.css(r,z),10)||0;s[z]=y+k[z]-w[z]}j.css(r,s)},scrollIntoView:function(g,k,r,w){if((g=a.get(g))&&g[u]){w=w===n?true:!!w;r=r===n?true:!!r;if(!k||k===h)return g.scrollIntoView(r);k=a.get(k);if(p(k,9))k=x(k);var s=k&&"scrollTo"in k&&k.document,y=j.offset(g),z=s?{left:j.scrollLeft(k),top:j.scrollTop(k)}:j.offset(k),A={left:y[m]-z[m],top:y[l]-z[l]};y=s?j.viewportHeight(k):k.clientHeight;z=s?j.viewportWidth(k):k.clientWidth;
var C=j[c](k),D=j[f](k),B=C+z,E=D+y,H=g.offsetHeight;g=g.offsetWidth;var G=A.left+C-(t(j.css(k,"borderLeftWidth"))||0);A=A.top+D-(t(j.css(k,"borderTopWidth"))||0);var I=G+g,K=A+H,F,J;if(H>y||A<D||r)F=A;else if(K>E)F=K-y;if(w)if(g>z||G<C||r)J=G;else if(I>B)J=I-z;if(s){if(F!==n||J!==n)k.scrollTo(J,F)}else{if(F!==n)k[f]=F;if(J!==n)k[c]=J}}}});a.each(["Left","Top"],function(g,k){var r="scroll"+g;j[r]=function(w){var s=0,y=x(w),z;if(y&&(z=y.document))s=y[k?"pageYOffset":"pageXOffset"]||z.documentElement[r]||
z.body[r];else if(d(w=a.get(w)))s=w[r];return s}});a.each(["Width","Height"],function(g){j["doc"+g]=function(k){k=k||i;return v(o?k.documentElement["scroll"+g]:k.body["scroll"+g],j["viewport"+g](k))};j["viewport"+g]=function(k){var r="inner"+g;k=x(k);var w=k.document;return r in k?k[r]:o?w.documentElement["client"+g]:w.body["client"+g]}})});
KISSY.add("dom-traversal",function(a,n){function q(i,d,p,x){if(!(i=a.get(i)))return null;if(d===n)d=1;var o=null,v,t;if(a.isNumber(d)&&d>=0){if(d===0)return i;v=0;t=d;d=function(){return++v===t}}for(;i=i[p];)if(h(i)&&(!d||b.test(i,d))&&(!x||x(i))){o=i;break}return o}function j(i,d,p){var x=[];var o=i=a.get(i);if(i&&p)o=i.parentNode;if(o){p=0;for(o=o.firstChild;o;o=o.nextSibling)if(h(o)&&o!==i&&(!d||b.test(o,d)))x[p++]=o}return x}var b=a.DOM,h=b._isElementNode;a.mix(b,{parent:function(i,d){return q(i,
d,"parentNode",function(p){return p.nodeType!=11})},next:function(i,d){return q(i,d,"nextSibling")},prev:function(i,d){return q(i,d,"previousSibling")},siblings:function(i,d){return j(i,d,true)},children:function(i,d){return j(i,d)},contains:function(i,d){var p=false;if((i=a.get(i))&&(d=a.get(d)))if(i.contains)return i.contains(d);else if(i.compareDocumentPosition)return!!(i.compareDocumentPosition(d)&16);else for(;!p&&(d=d.parentNode);)p=d==i;return p}})});
KISSY.add("dom-create",function(a,n){function q(s){var y=s.cloneNode(true);if(d.ie<8)y.innerHTML=s.innerHTML;return y}function j(s,y,z,A){if(z){var C=a.guid("ks-tmp-"),D=RegExp(m);y+='<span id="'+C+'"></span>';a.available(C,function(){var B=a.get("head"),E,H,G,I,K,F;for(D.lastIndex=0;E=D.exec(y);)if((G=(H=E[1])?H.match(c):false)&&G[2]){E=h.createElement("script");E.src=G[2];if((I=H.match(f))&&I[2])E.charset=I[2];E.async=true;B.appendChild(E)}else if((F=E[2])&&F.length>0)a.globalEval(F);(K=h.getElementById(C))&&
i.remove(K);a.isFunction(A)&&A()});b(s,y)}else{b(s,y);a.isFunction(A)&&A()}}function b(s,y){y=(y+"").replace(m,"");try{s.innerHTML=y}catch(z){for(;s.firstChild;)s.removeChild(s.firstChild);y&&s.appendChild(i.create(y))}}var h=document,i=a.DOM,d=a.UA,p=d.ie,x=i._nodeTypeIs,o=i._isElementNode,v=i._isKSNode,t=h.createElement("div"),u=/<(\w+)/,m=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,l=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,c=/\ssrc=(['"])(.*?)\1/i,f=/\scharset=(['"])(.*?)\1/i;a.mix(i,{create:function(s,
y,z){if(x(s,1)||x(s,3))return q(s);if(v(s))return q(s[0]);if(!(s=a.trim(s)))return null;var A=null;A=i._creators;var C,D="div",B;if(C=l.exec(s))A=(z||h).createElement(C[1]);else{if((C=u.exec(s))&&(B=C[1])&&a.isFunction(A[B=B.toLowerCase()]))D=B;s=A[D](s,z).childNodes;if(s.length===1)z=s[0].parentNode.removeChild(s[0]);else{s=s;B=z||h;z=null;if(s&&(s.push||s.item)&&s[0]){B=B||s[0].ownerDocument;z=B.createDocumentFragment();if(s.item)s=a.makeArray(s);B=0;for(A=s.length;B<A;B++)z.appendChild(s[B])}z=
z}A=z}z=A;o(z)&&a.isPlainObject(y)&&i.attr(z,y,true);return z},_creators:{div:function(s,y){var z=y?y.createElement("div"):t;z.innerHTML=s;return z}},html:function(s,y,z,A){if(y===n){s=a.get(s);if(o(s))return s.innerHTML}else a.each(a.query(s),function(C){o(C)&&j(C,y,z,A)})},remove:function(s){a.each(a.query(s),function(y){o(y)&&y.parentNode&&y.parentNode.removeChild(y)})}});if(d.gecko||p){var e=i._creators,g=i.create,k=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,r={option:"select",td:"tr",
tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},w;for(w in r)(function(s){e[w]=function(y,z){return g("<"+s+">"+y+"</"+s+">",null,z)}})(r[w]);if(p){e.script=function(s,y){var z=y?y.createElement("div"):t;z.innerHTML="-"+s;z.removeChild(z.firstChild);return z};if(p<8)e.tbody=function(s,y){var z=g("<table>"+s+"</table>",null,y),A=z.children.tags("tbody")[0];z.children.length>1&&A&&!k.test(s)&&A.parentNode.removeChild(A);return z}}a.mix(e,{optgroup:e.option,th:e.td,thead:e.tbody,tfoot:e.tbody,
caption:e.tbody,colgroup:e.tbody})}});KISSY.add("dom-insertion",function(a){a.mix(a.DOM,{insertBefore:function(n,q){if((n=a.get(n))&&(q=a.get(q))&&q.parentNode)q.parentNode.insertBefore(n,q);return n},insertAfter:function(n,q){if((n=a.get(n))&&(q=a.get(q))&&q.parentNode)q.nextSibling?q.parentNode.insertBefore(n,q.nextSibling):q.parentNode.appendChild(n);return n}})});
KISSY.add("event",function(a,n){function q(m,l,c,f,e){if(a.isString(l))l=a.query(l);if(a.isArray(l)){a.each(l,function(g){u[m](g,c,f,e)});return true}if((c=a.trim(c))&&c.indexOf(o)>0){a.each(c.split(o),function(g){u[m](l,g,f,e)});return true}}function j(m,l){b(m)&&i.data(m,x,l)}function b(m){return m&&m.nodeType!==3&&m.nodeType!==8}var h=document,i=a.DOM,d=h.addEventListener?function(m,l,c,f){m.addEventListener&&m.addEventListener(l,c,!!f)}:function(m,l,c){m.attachEvent&&m.attachEvent("on"+l,c)},
p=h.removeEventListener?function(m,l,c,f){m.removeEventListener&&m.removeEventListener(l,c,!!f)}:function(m,l,c){m.detachEvent&&m.detachEvent("on"+l,c)},x="ksEventTargetId",o=" ",v=a.now(),t={},u={EVENT_GUID:x,special:{},add:function(m,l,c,f){if(!q("add",m,l,c,f)){var e=b(m)?i.data(m,x):-1,g,k,r,w,s;if(!(e===-1||!l||!a.isFunction(c))){if(!e){j(m,e=v++);t[e]={target:m,events:{}}}k=t[e].events;if(!k[l]){g=((e=!m.isCustomEventTarget)||m._supportSpecialEvent)&&u.special[l]||{};r=function(y,z){if(!y||
!y.fixed){y=new a.EventObject(m,y,l);a.isPlainObject(z)&&a.mix(y,z)}g.setup&&g.setup(y);return(g.handle||u._handle)(m,y,k[l].listeners)};k[l]={handle:r,listeners:[]};w=g.fix||l;s=g.capture;if(e)d(m,w,r,s);else m._addEvent&&m._addEvent(w,r,s)}k[l].listeners.push({fn:c,scope:f||m})}}},remove:function(m,l,c,f){if(!q("remove",m,l,c,f)){var e=b(m)?i.data(m,x):-1,g,k,r,w,s,y,z;if(e!==-1)if(e&&(g=t[e]))if(g.target===m){f=f||m;g=g.events||{};if(k=g[l]){r=k.listeners;y=r.length;if(a.isFunction(c)&&y){s=w=
0;for(z=[];w<y;++w)if(c!==r[w].fn||f!==r[w].scope)z[s++]=r[w];k.listeners=z;y=z.length}if(c===n||y===0){if(m.isCustomEventTarget)m._addEvent&&m._removeEvent(l,k.handle);else{c=u.special[l]||{};p(m,c.fix||l,k.handle)}delete g[l]}}if(l===n||a.isEmptyObject(g)){for(l in g)u.remove(m,l);delete t[e];i.removeData(m,x)}}}},_handle:function(m,l,c){c=c.slice(0);for(var f,e=0,g=c.length;e<g;++e){f=c[e];f=f.fn.call(f.scope||m,l);if(f===false&&m.isCustomEventTarget||l.isImmediatePropagationStopped)break}return f},
_getCache:function(m){return t[m]},_simpleAdd:d,_simpleRemove:p};u.on=u.add;a.Event=u});
KISSY.add("event-object",function(a,n){function q(h,i,d){this.currentTarget=h;this.originalEvent=i||{};if(i){this.type=i.type;this._fix()}else{this.type=d;this.target=h}this.currentTarget=h;this.fixed=true}var j=document,b="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");a.augment(q,
{_fix:function(){var h=this.originalEvent,i=b.length,d,p=this.currentTarget;for(p=p.nodeType===9?p:p.ownerDocument||j;i;){d=b[--i];this[d]=h[d]}if(!this.target)this.target=this.srcElement||j;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===n&&this.clientX!==n){h=p.documentElement;i=p.body;this.pageX=this.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||
0)-(h&&h.clientLeft||i&&i.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}if(this.which===n)this.which=this.charCode!==n?this.charCode:this.keyCode;if(this.metaKey===n)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==n)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var h=this.originalEvent;if(h.preventDefault)h.preventDefault();else h.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var h=
this.originalEvent;if(h.stopPropagation)h.stopPropagation();else h.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var h=this.originalEvent;h.stopImmediatePropagation?h.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(h){h?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});a.EventObject=q});
KISSY.add("event-target",function(a,n){var q=a.Event;a.EventTarget={isCustomEventTarget:true,fire:function(j,b){var h=a.DOM.data(this,q.EVENT_GUID)||-1;if((h=((q._getCache(h)||{}).events||{})[j])&&a.isFunction(h.handle))return h.handle(n,b);return this},on:function(j,b,h){q.add(this,j,b,h);return this},detach:function(j,b,h){q.remove(this,j,b,h);return this}}});
KISSY.add("event-mouseenter",function(a){var n=a.Event;a.UA.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(q){n.special[q.name]={fix:q.fix,setup:function(j){j.type=q.name},handle:function(j,b,h){if(a.DOM._isKSNode(j))j=j[0];var i=b.relatedTarget;try{for(;i&&i!==j;)i=i.parentNode;i!==j&&n._handle(j,b,h)}catch(d){}}}})});
KISSY.add("event-focusin",function(a){var n=a.Event;document.addEventListener&&a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(q){n.special[q.name]={fix:q.fix,capture:true,setup:function(j){j.type=q.name}}})});
KISSY.add("node",function(a){function n(j,b,h){if(!(this instanceof n))return new n(j,b,h);if(j){if(a.isString(j)){j=q.create(j,b,h);if(j.nodeType===11)return new a.NodeList(j.childNodes)}else if(j instanceof n)return j;else j=j;this[0]=j}else this.length=0}var q=a.DOM;n.TYPE="-ks-Node";a.augment(n,{length:1,getDOMNode:function(){return this[0]},nodeType:n.TYPE});a.one=function(j,b){var h=a.get(j,b);return h?new n(h):null};a.Node=n});
KISSY.add("nodelist",function(a){function n(b){if(!(this instanceof n))return new n(b);j.push.apply(this,a.makeArray(b)||[])}var q=a.DOM,j=Array.prototype;a.mix(n.prototype,{length:0,item:function(b){var h=null;if(q._isElementNode(this[b]))h=new a.Node(this[b]);return h},getDOMNodes:function(){return j.slice.call(this)},each:function(b,h){var i=this.length,d=0,p;for(p=new a.Node(this[0]);d<i&&b.call(h||p,p,d,this)!==false;p=new a.Node(this[++d]));return this}});a.all=function(b,h){return new n(a.query(b,
h,true))};a.NodeList=n});
KISSY.add("node-attach",function(a,n){function q(l,c,f,e){l=[this[l?v:o]()].concat(a.makeArray(c));if(c[f]===n)return e.apply(b,l);else{e.apply(b,l);return this}}function j(l,c){a.each(l,function(f){a.each([p,x],function(e,g){e[f]=function(k){switch(c){case t:return function(){return q.call(this,g,arguments,1,k)};case u:return function(){return q.call(this,g,arguments,0,k)};case m:return function(){var r=this[g?v:o]();return(r=k.apply(b,[r].concat(a.makeArray(arguments))))?new (a[a.isArray(r)?"NodeList":
"Node"])(r):null};default:return function(){var r=this[g?v:o]();r=k.apply(b,[r].concat(a.makeArray(arguments)));return r===n?this:r}}}(b[f])})})}var b=a.DOM,h=a.Event,i=b._nodeTypeIs,d=b._isKSNode,p=a.Node.prototype,x=a.NodeList.prototype,o="getDOMNode",v=o+"s",t=1,u=2,m=4;a.mix(p,{one:function(l){return a.one(l,this[0])},all:function(l){return a.all(l,this[0])}});j(["data","removeData"],t);j(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);j(["attr","removeAttr"],t);j(["val","text"],
u);j(["css"],t);j(["width","height"],u);j(["offset"],u);j(["scrollIntoView"]);j(["parent","next","prev","siblings","children"],m);j(["contains"]);j(["html"],u);j(["remove"]);a.each(["insertBefore","insertAfter"],function(l){p[l]=function(c){b[l].call(b,this[0],c);return this}});a.each([p,x],function(l,c){a.mix(l,{append:function(f){f&&a.each(this,function(e){var g;if(c||a.isString(f))g=b.create(f);else{if(i(f,1)||i(f,3))g=f;if(d(f))g=f[0]}e.appendChild(g)});return this},appendTo:function(f){if((f=
a.get(f))&&f.appendChild)a.each(this,function(e){f.appendChild(e)});return this}})});a.each([p,x],function(l){a.mix(l,a.EventTarget);l._supportSpecialEvent=true;l._addEvent=function(c,f,e){for(var g=0,k=this.length;g<k;g++)h._simpleAdd(this[g],c,f,e)};l._removeEvent=function(c,f,e){for(var g=0,k=this.length;g<k;g++)h._simpleRemove(this[g],c,f,e)};delete l.fire})});
KISSY.add("cookie",function(a){var n=document,q=encodeURIComponent,j=decodeURIComponent;a.Cookie={get:function(b){var h;if(a.isString(b)&&b!=="")if(b=n.cookie.match("(?:^| )"+b+"(?:(?:=([^;]*))|;|$)"))h=b[1]?j(b[1]):"";return h},set:function(b,h,i,d,p,x){h=q(h);var o=i;if(typeof o==="number"){o=new Date;o.setTime(o.getTime()+i*864E5)}if(o instanceof Date)h+="; expires="+o.toUTCString();if(a.isString(d)&&d!=="")h+="; domain="+d;if(a.isString(p)&&p!=="")h+="; path="+p;if(x)h+="; secure";n.cookie=b+
"="+h},remove:function(b,h,i,d){this.set(b,"",0,h,i,d)}}});
KISSY.add("json",function(a){function n(o){return o<10?"0"+o:o}function q(o){h.lastIndex=0;return h.test(o)?'"'+o.replace(h,function(v){var t=p[v];return typeof t==="string"?t:"\\u"+("0000"+v.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+o+'"'}function j(o,v){var t,u,m,l,c=i,f,e=v[o];if(e&&typeof e==="object"&&typeof e.toJSON==="function")e=e.toJSON(o);if(typeof x==="function")e=x.call(v,o,e);switch(typeof e){case "string":return q(e);case "number":return isFinite(e)?String(e):"null";case "boolean":case "null":return String(e);
case "object":if(!e)return"null";i+=d;f=[];if(Object.prototype.toString.apply(e)==="[object Array]"){l=e.length;for(t=0;t<l;t+=1)f[t]=j(t,e)||"null";m=f.length===0?"[]":i?"[\n"+i+f.join(",\n"+i)+"\n"+c+"]":"["+f.join(",")+"]";i=c;return m}if(x&&typeof x==="object"){l=x.length;for(t=0;t<l;t+=1){u=x[t];if(typeof u==="string")if(m=j(u,e))f.push(q(u)+(i?": ":":")+m)}}else for(u in e)if(Object.hasOwnProperty.call(e,u))if(m=j(u,e))f.push(q(u)+(i?": ":":")+m);m=f.length===0?"{}":i?"{\n"+i+f.join(",\n"+i)+
"\n"+c+"}":"{"+f.join(",")+"}";i=c;return m}}a=a.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+n(this.getUTCMonth()+1)+"-"+n(this.getUTCDate())+"T"+n(this.getUTCHours())+":"+n(this.getUTCMinutes())+":"+n(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i,d,p={"":"\\b","\t":"\\t","\n":"\\n","":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},x;if(typeof a.stringify!=="function")a.stringify=function(o,v,t){var u;d=i="";if(typeof t==="number")for(u=0;u<t;u+=1)d+=" ";else if(typeof t==="string")d=t;if((x=v)&&typeof v!=="function"&&(typeof v!=="object"||typeof v.length!=="number"))throw Error("JSON.stringify");return j("",{"":o})};if(typeof a.parse!==
"function")a.parse=function(o,v){function t(m,l){var c,f,e=m[l];if(e&&typeof e==="object")for(c in e)if(Object.hasOwnProperty.call(e,c)){f=t(e,c);if(f!==undefined)e[c]=f;else delete e[c]}return v.call(m,l,e)}var u;o=String(o);b.lastIndex=0;if(b.test(o))o=o.replace(b,function(m){return"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(o.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
""))){u=eval("("+o+")");return typeof v==="function"?t({"":u},""):u}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(a){var n=Math,q=n.PI,j=n.pow,b=n.sin,h=1.70158,i={easeNone:function(d){return d},easeIn:function(d){return d*d},easeOut:function(d){return(2-d)*d},easeBoth:function(d){return(d*=2)<1?0.5*d*d:0.5*(1- --d*(d-2))},easeInStrong:function(d){return d*d*d*d},easeOutStrong:function(d){return 1- --d*d*d*d},easeBothStrong:function(d){return(d*=2)<1?0.5*d*d*d*d:0.5*(2-(d-=2)*d*d*d)},elasticIn:function(d){if(d===0||d===1)return d;return-(j(2,10*(d-=1))*b((d-0.075)*2*q/0.3))},
elasticOut:function(d){if(d===0||d===1)return d;return j(2,-10*d)*b((d-0.075)*2*q/0.3)+1},elasticBoth:function(d){if(d===0||(d*=2)===2)return d;if(d<1)return-0.5*j(2,10*(d-=1))*b((d-0.1125)*2*q/0.45);return j(2,-10*(d-=1))*b((d-0.1125)*2*q/0.45)*0.5+1},backIn:function(d){if(d===1)d-=0.0010;return d*d*((h+1)*d-h)},backOut:function(d){return(d-=1)*d*((h+1)*d+h)+1},backBoth:function(d){if((d*=2)<1)return 0.5*d*d*(((h*=1.525)+1)*d-h);return 0.5*((d-=2)*d*(((h*=1.525)+1)*d+h)+2)},bounceIn:function(d){return 1-
i.bounceOut(1-d)},bounceOut:function(d){return d<1/2.75?7.5625*d*d:d<2/2.75?7.5625*(d-=1.5/2.75)*d+0.75:d<2.5/2.75?7.5625*(d-=2.25/2.75)*d+0.9375:7.5625*(d-=2.625/2.75)*d+0.984375},bounceBoth:function(d){if(d<0.5)return i.bounceIn(d*2)*0.5;return i.bounceOut(d*2-1)*0.5+0.5}};i.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};
a.Easing=i});
KISSY.add("anim",function(a,n){function q(c,f,e,g,k,r){if(c=a.get(c)){if(!(this instanceof q))return new q(c,f,e,g,k,r);var w=a.isPlainObject(e);f=f;this.domEl=c;if(a.isPlainObject(f))f=a.param(f,";").replace(/=/g,":");var s={},y=t.length,z;v.innerHTML='<div style="'+f+'"></div>';for(c=v.firstChild.style;y--;)if(z=c[t[y]])s[t[y]]=h(z);this.props=s;this.targetStyle=f;if(w)w=a.merge(l,e);else{w=a.clone(l);if(e)w.duration=o(e)||1;if(a.isString(g)||a.isFunction(g))w.easing=g;if(a.isFunction(k))w.complete=k;
if(r!==n)w.nativeSupport=r}this.config=w;if(w.nativeSupport&&j()&&a.isString(g=w.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(g)||(g=x.NativeTimeFunction[g])){w.easing=g;this.transitionName=j()}a.isFunction(k)&&this.on(m,k)}}function j(){var c="transition",f;if(v.style[c]!==n)f=c;else a.each(["Webkit","Moz","O"],function(e){if(v.style[c=e+"Transition"]!==n){f=c;return false}});j=function(){return f};return f}function b(c,f,e){a.UA.ie&&e.indexOf(u)>-1&&p.css(c,u,f[u].v);c.style.cssText+=";"+e}function h(c){var f=
o(c);c=(c+"").replace(/^[-\d.]+/,"");return isNaN(f)?{v:c,u:"",f:d}:{v:f,u:c,f:i}}function i(c,f,e){return(c+(f-c)*e).toFixed(3)}function d(c,f,e){for(var g=2,k,r,w=[],s=[];k=3,r=arguments[g-1],g--;)if(r.substr(0,4)==="rgb(")for(r=r.match(/\d+/g);k--;)w.push(~~r[k]);else if(r.substr(0,1)==="#"){if(r.length===4)r="#"+r.substr(1,1)+r.substr(1,1)+r.substr(2,1)+r.substr(2,1)+r.substr(3,1)+r.substr(3,1);for(;k--;)w.push(parseInt(r.substr(1+k*2,2),16))}else return f;for(;k--;){g=~~(w[k+3]+(w[k]-w[k+3])*
e);s.push(g<0?0:g>255?255:g)}return"rgb("+s.join(",")+")"}var p=a.DOM,x=a.Easing,o=parseFloat,v=p.create("<div>"),t="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
u="opacity",m="complete",l={duration:1,easing:"easeNone",nativeSupport:true};a.augment(q,a.EventTarget,{run:function(){var c=this,f=c.config,e=c.domEl,g,k,r,w,s=c.props,y={},z;for(z in s)y[z]=h(p.css(e,z));if(c.fire("start")!==false){c.stop();if(c.transitionName)c._nativeRun();else{g=f.duration*1E3;r=a.now();w=r+g;k=f.easing;if(a.isString(k))k=x[k]||x.easeNone;c.timer=a.later(f=function(){var A=a.now(),C=A>w?1:(A-r)/g,D,B,E;for(z in s){D=y[z];B=s[z];if(B.v==0)B.u=D.u;if(D.u!==B.u)D.v=0;p.css(e,z,
B.f(D.v,B.v,k(C))+B.u)}if(c.fire("step")===false||(E=A>w)){c.stop();E&&c.fire(m)}},13,true);f()}return c}},_nativeRun:function(){var c=this,f=c.config,e=c.domEl,g=c.props,k=f.duration*1E3;f=f.easing;var r=c.transitionName,w={};w[r+"Property"]="all";w[r+"Duration"]=k+"ms";w[r+"TimingFunction"]=f;p.css(e,w);a.later(function(){b(e,g,c.targetStyle)},0);a.later(function(){c.stop(true)},k)},stop:function(c){if(this.transitionName)this._nativeStop(c);else{if(this.timer){this.timer.cancel();this.timer=n}if(c){b(this.domEl,
this.props,this.targetStyle);this.fire(m)}}return this},_nativeStop:function(c){var f=this.domEl,e=this.transitionName,g=this.props,k;if(c){p.css(f,e+"Property","none");this.fire(m)}else{for(k in g)p.css(f,k,p._getComputedStyle(f,k));p.css(f,e+"Property","none")}}});q.supportTransition=function(){return!!j()};a.Anim=q});
KISSY.add("anim-node-plugin",function(a,n){function q(m,l,c,f,e){if(l==="toggle"){e=j.css(m,h)===i?1:0;l="show"}if(e)j.css(m,h,j.data(m,h)||"");var g={};a.each(u[l],function(k){if(k===d)j.css(m,d,p);else if(k===x){g.opacity=e?1:0;e&&j.css(m,x,0)}else if(k===o){g.height=e?j.css(m,o)||m.naturalHeight:0;e&&j.css(m,o,0)}else if(k===v){g.width=e?j.css(m,v)||m.naturalWidth:0;e&&j.css(m,v,0)}});(new a.Anim(m,g,c,"easeOut",function(){if(!e){var k=m.style,r=k[h];if(r!==i){r&&j.data(m,h,r);k[h]=i}j.css(m,{height:t,
width:t,overflow:t,opacity:1})}f&&a.isFunction(f)&&f()})).run()}var j=a.DOM,b=a.Anim,h="display",i="none",d="overflow",p="hidden",x="opacity",o="height",v="width",t="auto",u={show:[d,x,o,v],fade:[x],slide:[d,o]};a.each([a.Node.prototype,a.NodeList.prototype],function(m){m.animate=function(){var l=a.makeArray(arguments);a.each(this,function(c){b.apply(n,[c].concat(l)).run()});return this};a.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",
1],slideUp:["slide",0]},function(l,c){m[c]=function(f,e){j[c]&&arguments.length===0?j[c](this):a.each(this,function(g){q(g,l[0],f,e,l[1])});return this}})})});
KISSY.add("attribute",function(a,n){function q(){}function j(b){b+="";return b.charAt(0).toUpperCase()+b.substring(1)}a.augment(q,{__initAttrs:function(){if(!this.__attrs){this.__attrs={};this.__attrVals={}}},addAttr:function(b,h){this.__initAttrs();this.__attrs[b]=a.clone(h||{});return this},addAttrs:function(b,h){var i=this;a.each(b,function(d,p){if(p in h)d.value=h[p];i.addAttr(p,d)});return i},hasAttr:function(b){return b&&b in(this.__attrs||{})},removeAttr:function(b){if(this.hasAttr(b)){delete this.__attrs.name;
delete this.__attrVals.name}return this},set:function(b,h){var i=this.get(b);if(i!==h)if(false!==this.__fireAttrChange("before",b,i,h)){this.__set(b,h);this.__fireAttrChange("after",b,i,this.__attrVals[b]);return this}},__fireAttrChange:function(b,h,i,d){return this.fire(b+j(h)+"Change",{attrName:h,prevVal:i,newVal:d})},__set:function(b,h){var i,d=this.__attrs[b];if(d=d&&d.setter)i=d.call(this,h);if(i!==n)h=i;this.__attrVals[b]=h},get:function(b){var h;this.__initAttrs();h=(h=this.__attrs[b])&&h.getter;
b=b in this.__attrVals?this.__attrVals[b]:this.__getDefAttrVal(b);if(h)b=h.call(this,b);return b},__getDefAttrVal:function(b){b=this.__attrs[b];var h;if(b){if(h=b.valueFn){h=h.call(this);if(h!==n)b.value=h;delete b.valueFn}return b.value}},reset:function(b){if(this.hasAttr(b))return this.set(b,this.__getDefAttrVal(b));for(b in this.__attrs)this.hasAttr(b)&&this.reset(b);return this}});a.Attribute=q});
KISSY.add("base",function(a){function n(q){for(var j=this.constructor,b,h;j;){if(h=j.ATTRS)for(b in h)if(h.hasOwnProperty(b)&&!this.hasAttr(b)){if(b in q)h[b].value=q[b];this.addAttr(b,h[b])}j=j.superclass?j.superclass.constructor:null}}a.augment(n,a.EventTarget,a.Attribute);a.Base=n});KISSY.add("core");
