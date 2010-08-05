/*
Copyright 2010, KISSY UI Library v1.1.1dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("event",function(d,j){function i(a,b,e,h,g){if(d.isString(b))b=d.query(b);if(d.isArray(b)){d.each(b,function(k){q[a](k,e,h,g)});return true}if((e=d.trim(e))&&e.indexOf(w)>0){d.each(e.split(w),function(k){q[a](b,k,h,g)});return true}}function m(a){return f(a)?a[u]:-1}function l(a,b){if(!f(a))return d.error("Text or comment node is not valid event target.");try{a[u]=b}catch(e){d.error(e)}}function c(a){try{a[u]=j;delete a[u]}catch(b){}}function f(a){return a&&a.nodeType!==3&&a.nodeType!==
8}var p=window,r=document,x=r.addEventListener?function(a,b,e,h){a.addEventListener&&a.addEventListener(b,e,!!h)}:function(a,b,e){a.attachEvent&&a.attachEvent("on"+b,e)},y=r.removeEventListener?function(a,b,e,h){a.removeEventListener&&a.removeEventListener(b,e,!!h)}:function(a,b,e){a.detachEvent&&a.detachEvent("on"+b,e)},u="ksEventTargetId",w=" ",z=d.now(),t={},q={EVENT_GUID:u,special:{},add:function(a,b,e,h){if(!i("add",a,b,e,h)){var g=m(a),k,o;if(!(g===-1||!b||!d.isFunction(e))){if(!g){l(a,g=z++);
t[g]={target:a,events:{}}}o=t[g].events;k=!a.isCustomEventTarget&&q.special[b]||{};if(!o[b]){g=function(n,s){if(!n||!n.fixed){n=new d.EventObject(a,n,b);d.isPlainObject(s)&&d.mix(n,s)}k.setup&&k.setup(n);return(k.handle||q._handle)(a,n,o[b].listeners)};o[b]={handle:g,listeners:[]};if(a.isCustomEventTarget)a._addEvent&&a._addEvent(b,g);else x(a,k.fix||b,g,k.capture)}o[b].listeners.push({fn:e,scope:h})}}},remove:function(a,b,e){if(!i("remove",a,b,e)){var h=m(a),g,k,o,n,s,v;if(h!==-1)if(h&&(g=t[h]))if(g.target===
a){g=g.events||{};if(k=g[b]){o=k.listeners;s=o.length;if(d.isFunction(e)&&s&&d.inArray(e,o)){v=[];for(n=0;n<s;++n)e!==o[n]&&v.push(o[n]);s=v.length}if(e===j||s===0){if(a.isCustomEventTarget)a._addEvent&&a._removeEvent(b,k.handle);else y(a,b,k.handle);delete g[b]}}if(b===j||d.isEmptyObject(g)){for(b in g)q.remove(a,b);delete t[h];c(a)}}}},_handle:function(a,b,e){e=e.slice(0);for(var h,g=0,k=e.length;g<k;++g){h=e[g];h=h.fn.call(h.scope||a,b);if(h===false&&a.isCustomEventTarget||b.isImmediatePropagationStopped)break}return h},
_getCache:function(a){return t[a]},_simpleAdd:x,_simpleRemove:y};q.on=q.add;d.Event=q;p.attachEvent&&!p.addEventListener&&p.attachEvent("onunload",function(){var a,b;for(a in t)if(b=t[a].target)try{q.remove(b)}catch(e){}})});
KISSY.add("event-object",function(d,j){function i(c,f,p){this.currentTarget=c;this.originalEvent=f||{};if(f){this.type=f.type;this._fix()}else{this.type=p;this.target=c}this.fixed=true}var m=document,l="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");d.augment(i,
{_fix:function(){var c=this.originalEvent,f=l.length,p,r=this.currentTarget;for(r=r.nodeType===9?r:r.ownerDocument||m;f;){p=l[--f];this[p]=c[p]}if(!this.target)this.target=this.srcElement||m;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===j&&this.clientX!==j){c=r.documentElement;f=r.body;this.pageX=this.clientX+(c&&c.scrollLeft||f&&f.scrollLeft||
0)-(c&&c.clientLeft||f&&f.clientLeft||0);this.pageY=this.clientY+(c&&c.scrollTop||f&&f.scrollTop||0)-(c&&c.clientTop||f&&f.clientTop||0)}if(this.which===j)this.which=this.charCode!==j?this.charCode:this.keyCode;if(this.metaKey===j)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==j)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var c=this.originalEvent;if(c.preventDefault)c.preventDefault();else c.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var c=
this.originalEvent;if(c.stopPropagation)c.stopPropagation();else c.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var c=this.originalEvent;c.stopImmediatePropagation?c.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(c){c?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});d.EventObject=i});
KISSY.add("event-target",function(d,j){var i=d.Event,m=i.EVENT_GUID;d.EventTarget={isCustomEventTarget:true,fire:function(l,c){if((l=((i._getCache(this[m]||-1)||{}).events||{})[l])&&d.isFunction(l.handle))return l.handle(j,c)},on:function(l,c,f){i.add(this,l,c,f)},detach:function(l,c){i.remove(this,l,c)}}});
KISSY.add("event-mouseenter",function(d){var j=d.Event;d.UA.ie||d.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(i){j.special[i.name]={fix:i.fix,setup:function(m){m.type=i.name},handle:function(m,l,c){var f=l.relatedTarget;try{for(;f&&f!==m;)f=f.parentNode;f!==m&&j._handle(m,l,c)}catch(p){}}}})});
KISSY.add("event-focusin",function(d){var j=d.Event;document.addEventListener&&d.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(i){j.special[i.name]={fix:i.fix,capture:true,setup:function(m){m.type=i.name}}})});
