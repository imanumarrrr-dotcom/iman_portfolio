(()=>{var yf=Object.defineProperty;var Mf=(i,t,e)=>t in i?yf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var vt=(i,t,e)=>Mf(i,typeof t!="symbol"?t+"":t,e);function Fn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Sh(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},xo,Ce,ae,hn=1e8,te=1/hn,lo=Math.PI*2,Sf=lo/4,bf=0,bh=Math.sqrt,wf=Math.cos,Tf=Math.sin,Me=function(t){return typeof t=="string"},fe=function(t){return typeof t=="function"},kn=function(t){return typeof t=="number"},Fr=function(t){return typeof t=="undefined"},Pn=function(t){return typeof t=="object"},Xe=function(t){return t!==!1},yo=function(){return typeof window!="undefined"},Cr=function(t){return fe(t)||Me(t)},wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Le=Array.isArray,Ef=/random\([^)]+\)/g,Af=/,\s*/g,ph=/(?:-?\.?\d|\.)+/gi,Mo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,So=/[+-]=-?[.\d]+/,Cf=/[^,'"\[\]\s]+/gi,Rf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ce,Cn,co,bo,tn={},Lr={},Th,Eh=function(t){return(Lr=os(t,tn))&&De},Br=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qs=function(t,e){return!e&&console.warn(t)},Ah=function(t,e){return t&&(tn[t]=e)&&Lr&&(Lr[t]=e)||tn},tr=function(){return 0},Pf={suppressEvents:!0,isStart:!0,kill:!1},Rr={suppressEvents:!0,kill:!1},If={suppressEvents:!0},wo={},ai=[],ho={},Ch,Ge={},no={},mh=30,Pr=[],To="",Eo=function(t){var e=t[0],n,s;if(Pn(e)||fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=Pr.length;s--&&!Pr[s].targetTest(e););n=Pr[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Po(t[s],n)))||t.splice(s,1);return t},oi=function(t){return t._gsap||Eo(un(t))[0]._gsap},Ao=function(t,e,n){return(n=t[e])&&fe(n)?t[e]():Fr(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},le=function(t){return Math.round(t*1e7)/1e7||0},Ni=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},Lf=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},Dr=function(){var t=ai.length,e=ai.slice(0),n,s;for(ho={},ai.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Co=function(t){return!!(t._initted||t._startAt||t.add)},Rh=function(t,e,n,s){ai.length&&!Ce&&Dr(),t.render(e,n,s||!!(Ce&&e<0&&Co(t))),ai.length&&!Ce&&Dr()},Ph=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Cf).length<2?e:Me(t)?t.trim():t},Ih=function(t){return t},en=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Df=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},os=function(t,e){for(var n in e)t[n]=e[n];return t},gh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Ur=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},Zs=function(t){var e=t.parent||ce,n=t.keyframes?Df(Le(t.keyframes)):en;if(Xe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Uf=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},Lh=function(t,e,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t[s],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},kr=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ii=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Nf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},uo=function(t,e,n,s){return t._startAt&&(Ce?t._startAt.revert(Rr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},Of=function i(t){return!t||t._ts&&i(t.parent)},_h=function(t){return t._repeat?ls(t._tTime,t=t.duration()+t._rDelay)*t:0},ls=function(t,e){var n=Math.floor(t=le(t/e));return t&&n===t?n-1:n},Nr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zr=function(t){return t._end=le(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},Vr=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zr(t),n._dirty||Ii(n,t)),t},Dh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nr(t.rawTime(),e),(!e._dur||ir(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Ii(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Rn=function(t,e,n,s){return e.parent&&li(e),e._start=le((kn(n)?n:n||t!==ce?cn(t,n,e):t._time)+e._delay),e._end=le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lh(t,e,"_first","_last",t._sort?"_start":0),fo(e)||(t._recent=e),s||Dh(t,e),t._ts<0&&Vr(t,t._tTime),t},Uh=function(t,e){return(tn.ScrollTrigger||Br("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},Nh=function(t,e,n,s,r){if(Do(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ch!==We.frame)return ai.push(t),t._lazy=[r,s],1},Ff=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},fo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Bf=function(t,e,n,s){var r=t.ratio,a=e<0||!e&&(!t._start&&Ff(t)&&!(!t._initted&&fo(t))||(t._ts<0||t._dp._ts<0)&&!fo(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=ir(0,t._tDur,e),h=ls(l,o),t._yoyo&&h&1&&(a=1-a),h!==ls(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Ce||s||t._zTime===te||!e&&t._zTime){if(!t._initted&&Nh(t,e,s,n,l))return;for(d=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&uo(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&li(t,1),!n&&!Ce&&(Qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kf=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},cs=function(t,e,n,s){var r=t._repeat,a=le(e)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:le(a*(r+1)+t._rDelay*r):a,o>0&&!s&&Vr(t,t._tTime=t._tDur*o),t.parent&&zr(t),n||Ii(t.parent,t),t},vh=function(t){return t instanceof Ie?Ii(t):cs(t,t._dur)},zf={_start:0,endTime:tr,totalDuration:tr},cn=function i(t,e,n){var s=t.labels,r=t._recent||zf,a=t.duration()>=hn?r.endTime(!1):t._dur,o,l,c;return Me(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in s||(s[e]=a),s[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Le(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Js=function(t,e,n){var s=kn(e[1]),r=(s?2:1)+(t<2?0:1),a=e[r],o,l;if(s&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Xe(l.vars.inherit)&&l.parent;a.immediateRender=Xe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new me(e[0],a,e[r+1])},ci=function(t,e){return t||t===0?e(t):e},ir=function(t,e,n){return n<t?t:n>e?e:n},Re=function(t,e){return!Me(t)||!(e=Rf.exec(t))?"":e[1]},Vf=function(t,e,n){return ci(n,function(s){return ir(t,e,s)})},po=[].slice,Oh=function(t,e){return t&&Pn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pn(t[0]))&&!t.nodeType&&t!==Cn},Hf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return Me(s)&&!e||Oh(s,1)?(r=n).push.apply(r,un(s)):n.push(s)})||n},un=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Me(t)&&!n&&(co||!hs())?po.call((e||bo).querySelectorAll(t),0):Le(t)?Hf(t,n):Oh(t)?po.call(t,0):t?[t]:[]},mo=function(t){return t=un(t)[0]||Qs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return un(e,n.querySelectorAll?n:n===t?Qs("Invalid scope")||bo.createElement("div"):t)}},Fh=function(t){return t.sort(function(){return .5-Math.random()})},Bh=function(t){if(fe(t))return t;var e=Pn(t)?t:{each:t},n=Li(e.ease),s=e.from||0,r=parseFloat(e.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=e.axis,h=s,d=s;return Me(s)?h=d={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(h=s[0],d=s[1]),function(u,p,_){var g=(_||e).length,m=a[g],f,b,M,v,R,E,T,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,hn])[1],!x){for(T=-hn;T<(T=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],f=l?Math.min(x,g)*h-.5:s%x,b=x===hn?0:l?g*d/x-.5:s/x|0,T=0,C=hn,E=0;E<g;E++)M=E%x-f,v=b-(E/x|0),m[E]=R=c?Math.abs(c==="y"?v:M):bh(M*M+v*v),R>T&&(T=R),R<C&&(C=R);s==="random"&&Fh(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Re(e.amount||e.each)||0,n=n&&g<0?ep(n):n}return g=(m[u]-m.min)/m.max||0,le(m.b+(n?n(g):g)*m.v)+m.u}},go=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=le(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(kn(n)?0:Re(n))}},kh=function(t,e){var n=Le(t),s,r;return!n&&Pn(t)&&(s=n=t.radius||hn,t.values?(t=un(t.values),(r=!kn(t[0]))&&(s*=s)):t=go(t.increment)),ci(e,n?fe(t)?function(a){return r=t(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=hn,h=0,d=t.length,u,p;d--;)r?(u=t[d].x-o,p=t[d].y-l,u=u*u+p*p):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!s||c<=s?t[h]:a,r||h===a||kn(a)?h:h+Re(a)}:go(t))},zh=function(t,e,n,s){return ci(Le(t)?!e:n===!0?!!(n=0):!s,function(){return Le(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},Gf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,a){return a(r)},s)}},Wf=function(t,e){return function(n){return t(parseFloat(n))+(e||Re(n))}},Xf=function(t,e,n){return Hh(t,e,0,1,n)},Vh=function(t,e,n){return ci(n,function(s){return t[~~e(s)]})},qf=function i(t,e,n){var s=e-t;return Le(t)?Vh(t,i(0,t.length),e):ci(n,function(r){return(s+(r-t)%s)%s+t})},Yf=function i(t,e,n){var s=e-t,r=s*2;return Le(t)?Vh(t,i(0,t.length-1),e):ci(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>s?r-a:a)})},us=function(t){return t.replace(Ef,function(e){var n=e.indexOf("[")+1,s=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Af);return zh(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},Hh=function(t,e,n,s,r){var a=e-t,o=s-n;return ci(r,function(l){return n+((l-t)/a*o||0)})},$f=function i(t,e,n,s){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=Me(t),o={},l,c,h,d,u;if(n===!0&&(s=1)&&(n=null),a)t={p:t},e={p:e};else if(Le(t)&&!Le(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(i(t[c-1],t[c]));d--,r=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else s||(t=os(Le(t)?[]:{},t));if(!h){for(l in e)Io.call(o,t,l,"get",e[l]);r=function(_){return Oo(_,o)||(a?t.p:t)}}}return ci(n,r)},xh=function(t,e,n){var s=t.labels,r=hn,a,o,l;for(a in s)o=s[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Qe=function(t,e,n){var s=t.vars,r=s[e],a=ae,o=t._ctx,l,c,h;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&ai.length&&Dr(),o&&(ae=o),h=l?r.apply(c,l):r.call(c),ae=a,h},Ys=function(t){return li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&Qe(t,"onInterrupt"),t},as,Gh=[],Wh=function(t){if(t)if(t=!t.name&&t.default||t,yo()||t.headless){var e=t.name,n=fe(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:tr,render:Oo,add:Io,kill:up,modifier:hp,rawVars:0},a={targetTest:0,get:0,getSetter:Hr,aliases:{},register:0};if(hs(),t!==s){if(Ge[e])return;en(s,en(Ur(t,r),a)),os(s.prototype,os(r,Ur(t,a))),Ge[s.prop=e]=s,t.targetTest&&(Pr.push(s),wo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ah(e,s),t.register&&t.register(De,s,Be)}else Gh.push(t)},Qt=255,$s={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},io=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},Xh=function(t,e,n){var s=t?kn(t)?[t>>16,t>>8&Qt,t&Qt]:0:$s.black,r,a,o,l,c,h,d,u,p,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$s[t])s=$s[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Qt,s&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(ph),!e)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,s.length>3&&(s[3]*=1),s[0]=io(l+1/3,r,a),s[1]=io(l,r,a),s[2]=io(l-1/3,r,a);else if(~t.indexOf("="))return s=t.match(Mo),n&&s.length<4&&(s[3]=1),s}else s=t.match(ph)||$s.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/Qt,a=s[1]/Qt,o=s[2]/Qt,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(p=d-u,c=h>.5?p/(2-d-u):p/(d+u),l=d===r?(a-o)/p+(a<o?6:0):d===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},qh=function(t){var e=[],n=[],s=-1;return t.split(Bn).forEach(function(r){var a=r.match(Ui)||[];e.push.apply(e,a),n.push(s+=a.length+1)}),e.c=n,e},yh=function(t,e,n){var s="",r=(t+s).match(Bn),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Xh(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=qh(t),l=n.c,l.join(s)!==h.c.join(s)))for(c=t.replace(Bn,"1").split(Ui),d=c.length-1;o<d;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Bn),d=c.length-1;o<d;o++)s+=c[o]+r[o];return s+c[d]},Bn=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $s)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),Zf=/hsl[a]?\(/,Ro=function(t){var e=t.join(" "),n;if(Bn.lastIndex=0,Bn.test(e))return n=Zf.test(e),t[1]=yh(t[1],n),t[0]=yh(t[0],n,qh(t[1])),!0},er,We=function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,a=r,o=[],l,c,h,d,u,p,_=function g(m){var f=i()-s,b=m===!0,M,v,R,E;if((f>t||f<0)&&(n+=f-e),s+=f,R=s-n,M=R-a,(M>0||b)&&(E=++d.frame,u=R-d.time*1e3,d.time=R=R/1e3,a+=M+(M>=r?4:r-M),v=1),b||(l=c(g)),v)for(p=0;p<o.length;p++)o[p](R,u,E,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Th&&(!co&&yo()&&(Cn=co=window,bo=Cn.document||{},tn.gsap=De,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(De.version),Eh(Lr||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),Gh.forEach(Wh)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},er=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),er=0,c=tr},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,f,b){var M=f?function(v,R,E,T){m(v,R,E,T),d.remove(M)}:m;return d.remove(m),o[b?"unshift":"push"](M),hs(),M},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},d}(),hs=function(){return!er&&We.wake()},Vt={},Jf=/^[\d.\-M][\d.\-,\s]/,Kf=/["']/g,jf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[s]=isNaN(c)?c.replace(Kf,"").trim():+c,s=l.substr(o+1).trim();return e},Qf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},tp=function(t){var e=(t+"").split("("),n=Vt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[jf(e[1])]:Qf(t).split(",").map(Ph)):Vt._CE&&Jf.test(t)?Vt._CE("",t):n},ep=function(t){return function(e){return 1-t(1-e)}},Li=function(t,e){return t&&(fe(t)?t:Vt[t]||tp(t))||e},Oi=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},a;return Fe(t,function(o){Vt[o]=tn[o]=r,Vt[a=o.toLowerCase()]=n;for(var l in r)Vt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Vt[o+"."+l]=r[l]}),r},Yh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},so=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/lo*(Math.asin(1/s)||0),o=function(h){return h===1?1:s*Math.pow(2,-10*h)*Tf((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Yh(o);return r=lo/r,l.config=function(c,h){return i(t,c,h)},l},ro=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Yh(n);return s.config=function(r){return i(t,r)},s};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Oi(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;Oi("Elastic",so("in"),so("out"),so());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<s?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Oi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Oi("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Oi("Circ",function(i){return-(bh(1-i*i)-1)});Oi("Sine",function(i){return i===1?1:-wf(i*Sf)+1});Oi("Back",ro("in"),ro("out"),ro());Vt.SteppedEase=Vt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,a=1-te;return function(o){return((s*ir(0,a,o)|0)+r)*n}}};js.ease=Vt["quad.out"];Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return To+=i+","+i+"Params,"});var Po=function(t,e){this.id=bf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ao,this.set=e?e.getSetter:Hr},nr=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cs(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),er||We.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(hs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Vr(this,n),!r._dp||r.parent||Dh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rh(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_h(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_h(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?ls(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nr(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(ir(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),zr(this),Nf(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=le(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Rn(s,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Xe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nr(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=If);var s=Ce;return Ce=n,Co(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,vh(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(cn(this,n),Xe(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,Xe(s)),this._dur||(this._zTime=-te),this},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-te)},t.eventCallback=function(n,s,r){var a=this.vars;return arguments.length>1?(s?(a[n]=s,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete a[n],this):a[n]},t.then=function(n){var s=this,r=s._prom;return new Promise(function(a){var o=fe(n)?n:Ih,l=function(){var h=s.then;s.then=null,r&&r(),fe(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=h),a(o),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Ys(this)},i}();en(nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Ie=function(i){Sh(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Xe(n.sortChildren),ce&&Rn(n.parent||ce,Fn(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Uh(Fn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,a){return Js(0,arguments,this),this},e.from=function(s,r,a){return Js(1,arguments,this),this},e.fromTo=function(s,r,a,o){return Js(2,arguments,this),this},e.set=function(s,r,a){return r.duration=0,r.parent=this,Zs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new me(s,r,cn(this,a),1),this},e.call=function(s,r,a){return Rn(this,me.delayedCall(0,s,r),a)},e.staggerTo=function(s,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new me(s,a,cn(this,l)),this},e.staggerFrom=function(s,r,a,o,l,c,h){return a.runBackwards=1,Zs(a).immediateRender=Xe(a.immediateRender),this.staggerTo(s,r,a,o,l,c,h)},e.staggerFromTo=function(s,r,a,o,l,c,h,d){return o.startAt=a,Zs(o).immediateRender=Xe(o.immediateRender),this.staggerTo(s,r,o,l,c,h,d)},e.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:le(s),d=this._zTime<0!=s<0&&(this._initted||!c),u,p,_,g,m,f,b,M,v,R,E,T;if(this!==ce&&h>l&&s>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,s+=this._time-o),u=h,v=this._start,M=this._ts,f=!M,d&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(u=le(h%m),h===l?(g=this._repeat,u=c):(R=le(h/m),g=~~R,g&&g===R&&(u=c,g--),u>c&&(u=c)),R=ls(this._tTime,m),!o&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),E&&g&1&&(u=c-u,T=1),g!==R&&!this._lock){var C=E&&R&1,x=C===(E&&g&1);if(g<R&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:le(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=g),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=kf(this,le(o),le(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&h&&c&&!r&&!R&&(Qe(this,"onStart"),this._tTime!==h))return this;if(u>=o&&s>=0)for(p=this._first;p;){if(_=p._next,(p._act||u>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,a),u!==this._time||!this._ts&&!f){b=0,_&&(h+=this._zTime=-te);break}}p=_}else{p=this._last;for(var y=s<0?s:u;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,r,a||Ce&&Co(p)),u!==this._time||!this._ts&&!f){b=0,_&&(h+=this._zTime=y?-te:te);break}}p=_}}if(b&&!r&&(this.pause(),b.render(u>=o?0:-te)._zTime=u>=o?1:-1,this._ts))return this._start=v,zr(this),this.render(s,r,a);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&li(this,1),!r&&!(s<0&&!o)&&(h||o||!l)&&(Qe(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var a=this;if(kn(r)||(r=cn(this,r,s)),!(s instanceof nr)){if(Le(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Me(s))return this.addLabel(s,r);if(fe(s))s=me.delayedCall(0,s);else return this}return this!==s?Rn(this,s,r):this},e.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof me?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},e.remove=function(s){return Me(s)?this.removeLabel(s):fe(s)?this.killTweensOf(s):(s.parent===this&&kr(this,s),s===this._recent&&(this._recent=this._last),Ii(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(We.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=cn(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,a){var o=me.delayedCall(0,r||tr,a);return o.data="isPause",this._hasPause=1,Rn(this,o,cn(this,s))},e.removePause=function(s){var r=this._first;for(s=cn(this,s);r;)r._start===s&&r.data==="isPause"&&li(r),r=r._next},e.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)ri!==o[l]&&o[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var a=[],o=un(s),l=this._first,c=kn(r),h;l;)l instanceof me?Lf(l._targets,o)&&(c?(!ri||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(s,r){r=r||{};var a=this,o=cn(a,s),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,p,_=me.to(a,en({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&cs(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,d||[])}},r));return u?_.render(0):_},e.tweenFromTo=function(s,r,a){return this.tweenTo(r,en({startAt:{time:cn(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),xh(this,cn(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),xh(this,cn(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=le(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return Ii(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ii(this)},e.totalDuration=function(s){var r=0,a=this,o=a._last,l=hn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Rn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=le(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;cs(a,a===ce&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(ce._ts&&(Rh(ce,Nr(s,ce)),Ch=We.frame),We.frame>=mh){mh+=qe.autoSleep||120;var r=ce._first;if((!r||!r._ts)&&qe.autoSleep&&We._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||We.sleep()}}},t}(nr);en(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var np=function(t,e,n,s,r,a,o){var l=new Be(this._pt,t,e,0,1,No,null,r),c=0,h=0,d,u,p,_,g,m,f,b;for(l.b=n,l.e=s,n+="",s+="",(f=~s.indexOf("random("))&&(s=us(s)),a&&(b=[n,s],a(b,t,e),n=b[0],s=b[1]),u=n.match(eo)||[];d=eo.exec(s);)_=d[0],g=s.substring(c,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ni(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=eo.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(So.test(s)||f)&&(l.e=0),this._pt=l,l},Io=function(t,e,n,s,r,a,o,l,c,h){fe(s)&&(s=s(r||0,t,a));var d=t[e],u=n!=="get"?n:fe(d)?c?t[e.indexOf("set")||!fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,p=fe(d)?c?op:Jh:Uo,_;if(Me(s)&&(~s.indexOf("random(")&&(s=us(s)),s.charAt(1)==="="&&(_=Ni(u,s)+(Re(u)||0),(_||_===0)&&(s=_))),!h||u!==s||_o)return!isNaN(u*s)&&s!==""?(_=new Be(this._pt,t,e,+u||0,s-(u||0),typeof d=="boolean"?cp:Kh,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&Br(e,s),np.call(this,t,e,u,s,p,l||qe.stringFilter,c))},ip=function(t,e,n,s,r){if(fe(t)&&(t=Ks(t,r,e,n,s)),!Pn(t)||t.style&&t.nodeType||Le(t)||wh(t))return Me(t)?Ks(t,r,e,n,s):t;var a={},o;for(o in t)a[o]=Ks(t[o],r,e,n,s);return a},Lo=function(t,e,n,s,r,a){var o,l,c,h;if(Ge[t]&&(o=new Ge[t]).init(r,o.rawVars?e[t]:ip(e[t],s,r,a,n),n,s,a)!==!1&&(n._pt=l=new Be(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ri,_o,Do=function i(t,e,n){var s=t.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,d=s.yoyoEase,u=s.keyframes,p=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,b=f&&f.data==="nested"?f.vars.targets:m,M=t._overwrite==="auto"&&!xo,v=t.timeline,R=s.easeReverse||d,E,T,C,x,y,P,z,O,G,q,B,$,L;if(v&&(!u||!r)&&(r="none"),t._ease=Li(r,js.ease),t._rEase=R&&(Li(R)||t._ease),t._from=!v&&!!s.runBackwards,t._from&&(t.ratio=1),!v||u&&!s.stagger){if(O=m[0]?oi(m[0]).harness:0,$=O&&s[O.prop],E=Ur(s,wo),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?Rr:Pf),g._lazy=0),a){if(li(t._startAt=me.set(m,en({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Xe(l),startAt:null,delay:0,onUpdate:c&&function(){return Qe(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!p)&&t._startAt.revert(Rr),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),C=en({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Xe(l),immediateRender:o,stagger:0,parent:f},E),$&&(C[O.prop]=$),li(t._startAt=me.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(Rr):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Xe(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],z=y._gsap||Eo(m)[T]._gsap,t._ptLookup[T]=q={},ho[z.id]&&ai.length&&Dr(),B=b===m?T:b.indexOf(y),O&&(G=new O).init(y,$||E,t,B,b)!==!1&&(t._pt=x=new Be(t._pt,y,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(Y){q[Y]=x}),G.priority&&(P=1)),!O||$)for(C in E)Ge[C]&&(G=Lo(C,E,t,B,y,b))?G.priority&&(P=1):q[C]=x=Io.call(t,y,C,"get",E[C],B,b,0,s.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),M&&t._pt&&(ri=t,ce.killTweensOf(y,q,t.globalTime(e)),L=!t.parent,ri=0),t._pt&&l&&(ho[z.id]=1)}P&&Fo(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!L,u&&e<=0&&v.render(hn,!0,!0)},sp=function(t,e,n,s,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,p;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,p=t._targets.length;p--;){if(h=u[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _o=1,t.vars[e]="+=0",Do(t,o),_o=0,l?Qs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)d=c[p],h=d._pt||d,h.s=(s||s===0)&&!r?s:h.s+(s||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=pe(n)+Re(d.e)),d.b&&(d.b=h.s+Re(d.b))},rp=function(t,e){var n=t[0]?oi(t[0]).harness:0,s=n&&n.aliases,r,a,o,l;if(!s)return e;r=os({},e);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},ap=function(t,e,n,s){var r=e.ease||s||"power1.inOut",a,o;if(Le(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Ks=function(t,e,n,s,r){return fe(t)?t.call(e,n,s,r):Me(t)&&~t.indexOf("random(")?us(t):t},$h=To+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zh={};Fe($h+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Zh[i]=1});var me=function(i){Sh(t,i);function t(n,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=i.call(this,a?s:Zs(s))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=s.parent||ce,b=(Le(n)||wh(n)?kn(n[0]):"length"in s)?[n]:un(n),M,v,R,E,T,C,x,y;if(o._targets=b.length?Eo(b):Qs("GSAP target "+n+" not found. https://gsap.com",!qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||u||Cr(c)||Cr(h)){s=o.vars;var P=s.easeReverse||s.yoyoEase;if(M=o.timeline=new Ie({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:b}),M.kill(),M.parent=M._dp=Fn(o),M._start=0,u||Cr(c)||Cr(h)){if(E=b.length,x=u&&Bh(u),Pn(u))for(T in u)~$h.indexOf(T)&&(y||(y={}),y[T]=u[T]);for(v=0;v<E;v++)R=Ur(s,Zh),R.stagger=0,P&&(R.easeReverse=P),y&&os(R,y),C=b[v],R.duration=+Ks(c,Fn(o),v,C,b),R.delay=(+Ks(h,Fn(o),v,C,b)||0)-o._delay,!u&&E===1&&R.delay&&(o._delay=h=R.delay,o._start+=h,R.delay=0),M.to(C,R,x?x(v,C,b):0),M._ease=Vt.none;M.duration()?c=h=0:o.timeline=0}else if(_){Zs(en(M.vars.defaults,{ease:"none"})),M._ease=Li(_.ease||s.ease||"none");var z=0,O,G,q;if(Le(_))_.forEach(function(B){return M.to(b,B,">")}),M.duration();else{R={};for(T in _)T==="ease"||T==="easeEach"||ap(T,_[T],R,_.easeEach);for(T in R)for(O=R[T].sort(function(B,$){return B.t-$.t}),z=0,v=0;v<O.length;v++)G=O[v],q={ease:G.e,duration:(G.t-(v?O[v-1].t:0))/100*c},q[T]=G.v,M.to(b,q,z),z+=q.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!xo&&(ri=Fn(o),ce.killTweensOf(b),ri=0),Rn(f,Fn(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(d||!c&&!_&&o._start===le(f._time)&&Xe(d)&&Of(Fn(o))&&f.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-h)||0)),m&&Uh(Fn(o),m),o}var e=t.prototype;return e.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,h=s<0,d=s>l-te&&!h?l:s<te?0:s,u,p,_,g,m,f,b,M;if(!c)Bf(this,s,r,a);else if(d!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,a);if(u=le(d%g),d===l?(_=this._repeat,u=c):(m=le(d/g),_=~~m,_&&_===m?(u=c,_--):u>c&&(u=c)),f=this._yoyo&&_&1,f&&(u=c-u),m=ls(this._tTime,g),u===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(le(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Nh(this,h?s:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var R=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=R?(v?-1:1)/R:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(Qe(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;M&&M.render(s<0?s:M._dur*M._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&uo(this,s,r,a),Qe(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&uo(this,s,!0,!0),(s||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&li(this,1),!r&&!(h&&!o)&&(d||o||f)&&(Qe(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,a,o,l){er||We.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Do(this,c),h=this._ease(c/this._dur),sp(this,s,r,a,o,h,c,l)?this.resetTo(s,r,a,o,1):(Vr(this,0),this.parent||Lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ys(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,ri&&ri.vars.overwrite!==!0)._first||Ys(this),this.parent&&a!==this.timeline.totalDuration()&&cs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?un(s):o,c=this._ptLookup,h=this._pt,d,u,p,_,g,m,f;if((!r||r==="all")&&Uf(o,l))return r==="all"&&(this._pt=0),Ys(this);for(d=this._op=this._op||[],r!=="all"&&(Me(r)&&(g={},Fe(r,function(b){return g[b]=1}),r=g),r=rp(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){u=c[f],r==="all"?(d[f]=r,_=u,p={}):(p=d[f]=d[f]||{},_=r);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&kr(this,m,"_pt"),delete u[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Ys(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Js(1,arguments)},t.delayedCall=function(s,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(s,r,a){return Js(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,a){return ce.killTweensOf(s,r,a)},t}(nr);en(me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fe("staggerTo,staggerFrom,staggerFromTo",function(i){me[i]=function(){var t=new Ie,e=po.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Uo=function(t,e,n){return t[e]=n},Jh=function(t,e,n){return t[e](n)},op=function(t,e,n,s){return t[e](s.fp,n)},lp=function(t,e,n){return t.setAttribute(e,n)},Hr=function(t,e){return fe(t[e])?Jh:Fr(t[e])&&t.setAttribute?lp:Uo},Kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},cp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},No=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},Oo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hp=function(t,e,n,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(t,e,n),r=a},up=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?kr(this,e,"_pt"):e.dep||(n=1),e=s;return!n},dp=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},Fo=function(t){for(var e=t._pt,n,s,r,a;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:a=e,e=n}t._pt=r},Be=function(){function i(e,n,s,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=s,this.r=o||Kh,this.d=l||this,this.set=c||Uo,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=dp,this.m=n,this.mt=r,this.tween=s},i}();Fe(To+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return wo[i]=1});tn.TweenMax=tn.TweenLite=me;tn.TimelineLite=tn.TimelineMax=Ie;ce=new Ie({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qe.stringFilter=Ro;var Di=[],Ir={},fp=[],Mh=0,pp=0,ao=function(t){return(Ir[t]||fp).map(function(e){return e()})},vo=function(){var t=Date.now(),e=[];t-Mh>2&&(ao("matchMediaInit"),Di.forEach(function(n){var s=n.queries,r=n.conditions,a,o,l,c;for(o in s)a=Cn.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ao("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Mh=t,ao("matchMedia"))},jh=function(){function i(e,n){this.selector=n&&mo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pp++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){fe(n)&&(r=s,s=n,n=fe);var a=this,o=function(){var c=ae,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=mo(r)),ae=a,d=s.apply(a,arguments),fe(d)&&a._r.push(d),ae=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===fe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var s=ae;ae=null,n(this),ae=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof me&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ie?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof me)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=Di.length;a--;)Di[a].id===this.id&&Di.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),mp=function(){function i(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){Pn(n)||(n={matches:n});var a=new jh(0,r||this.scope),o=a.conditions={},l,c,h;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=n;for(c in n)c==="all"?h=1:(l=Cn.matchMedia(n[c]),l&&(Di.indexOf(a)<0&&Di.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(vo):l.addEventListener("change",vo)));return h&&s(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Or={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return Wh(s)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return ce.getTweensOf(t,e)},getProperty:function(t,e,n,s){Me(t)&&(t=un(t)[0]);var r=oi(t||{}).get,a=n?Ih:Ph;return n==="native"&&(n=""),t&&(e?a((Ge[e]&&Ge[e].get||r)(t,e,n,s)):function(o,l,c){return a((Ge[o]&&Ge[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=un(t),t.length>1){var s=t.map(function(h){return De.quickSetter(h,e,n)}),r=s.length;return function(h){for(var d=r;d--;)s[d](h)}}t=t[0]||{};var a=Ge[e],o=oi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;as._pt=0,d.init(t,n?h+n:h,as,0,[t]),d.render(1,d),as._pt&&Oo(1,as)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var s,r=De.to(t,en((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Li(t.ease,js.ease)),gh(js,t||{})},config:function(t){return gh(qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!Ge[o]&&!tn[o]&&Qs(e+" effect requires "+o+" plugin.")}),no[e]=function(o,l,c){return n(un(o),en(l||{},r),c)},a&&(Ie.prototype[e]=function(o,l,c){return this.add(no[e](o,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Vt[t]=Li(e)},parseEase:function(t,e){return arguments.length?Li(t,e):Vt},getById:function(t){return ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),s,r;for(n.smoothChildTiming=Xe(t.smoothChildTiming),ce.remove(n),n._dp=0,n._time=n._tTime=ce._time,s=ce._first;s;)r=s._next,(e||!(!s._dur&&s instanceof me&&s.vars.onComplete===s._targets[0]))&&Rn(n,s,s._start-s._delay),s=r;return Rn(ce,n,0),n},context:function(t,e){return t?new jh(t,e):ae},matchMedia:function(t){return new mp(t)},matchMediaRefresh:function(){return Di.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||vo()},addEventListener:function(t,e){var n=Ir[t]||(Ir[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ir[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:qf,wrapYoyo:Yf,distribute:Bh,random:zh,snap:kh,normalize:Xf,getUnit:Re,clamp:Vf,splitColor:Xh,toArray:un,selector:mo,mapRange:Hh,pipe:Gf,unitize:Wf,interpolate:$f,shuffle:Fh},install:Eh,effects:no,ticker:We,updateRoot:Ie.updateRoot,plugins:Ge,globalTimeline:ce,core:{PropTween:Be,globals:Ah,Tween:me,Timeline:Ie,Animation:nr,getCache:oi,_removeLinkedListItem:kr,reverting:function(){return Ce},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return xo=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Or[i]=me[i]});We.add(Ie.updateRoot);as=Or.to({},{duration:0});var gp=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_p=function(t,e){var n=t._targets,s,r,a;for(s in e)for(r=n.length;r--;)a=t._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=gp(a,s)),a&&a.modifier&&a.modifier(e[s],t,n[r],s))},oo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Me(r)&&(l={},Fe(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}_p(o,r)}}}},De=Or.registerPlugin({name:"attr",init:function(t,e,n,s,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oo("roundProps",go),oo("modifiers"),oo("snap",kh))||Or;me.version=Ie.version=De.version="3.15.0";Th=1;yo()&&hs();var vp=Vt.Power0,xp=Vt.Power1,yp=Vt.Power2,Mp=Vt.Power3,Sp=Vt.Power4,bp=Vt.Linear,wp=Vt.Quad,Tp=Vt.Cubic,Ep=Vt.Quart,Ap=Vt.Quint,Cp=Vt.Strong,Rp=Vt.Elastic,Pp=Vt.Back,Ip=Vt.SteppedEase,Lp=Vt.Bounce,Dp=Vt.Sine,Up=Vt.Expo,Np=Vt.Circ;var Qh,hi,fs,Go,zi,Op,tu,Wo,Fp=function(){return typeof window!="undefined"},Vn={},ki=180/Math.PI,ps=Math.PI/180,ds=Math.atan2,eu=1e8,Xo=/([A-Z])/g,Bp=/(left|right|width|margin|padding|x)/i,kp=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ko=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zp=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vp=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hp=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gp=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},cu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},hu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wp=function(t,e,n){return t.style[e]=n},Xp=function(t,e,n){return t.style.setProperty(e,n)},qp=function(t,e,n){return t._gsap[e]=n},Yp=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},$p=function(t,e,n,s,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Zp=function(t,e,n,s,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},he="transform",Ye=he+"Origin",Jp=function i(t,e){var n=this,s=this.target,r=s.style,a=s._gsap;if(t in Vn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=In[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=zn(s,o)}):this.tfm[t]=a.x?a[t]:zn(s,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return In.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(he)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=he}(r||e)&&this.props.push(t,e,r[t])},uu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Kp=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Xo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Wo(),(!r||!r.isStart)&&!n[he]&&(uu(n),s.zOrigin&&n[Ye]&&(n[Ye]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},du=function(t,e){var n={target:t,props:[],revert:Kp,save:Jp};return t._gsap||De.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return n.save(s)}),n},fu,zo=function(t,e){var n=hi.createElementNS?hi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hi.createElement(t);return n&&n.style?n:hi.createElement(t)},nn=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Xo,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,ms(e)||e,1)||""},nu="O,Moz,ms,Ms,Webkit".split(","),ms=function(t,e,n){var s=e||zi,r=s.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(nu[a]+t in r););return a<0?null:(a===3?"ms":a>=0?nu[a]:"")+t},Vo=function(){Fp()&&window.document&&(Qh=window,hi=Qh.document,fs=hi.documentElement,zi=zo("div")||{style:{}},Op=zo("div"),he=ms(he),Ye=he+"Origin",zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fu=!!ms("perspective"),Wo=De.core.reverting,Go=1)},iu=function(t){var e=t.ownerSVGElement,n=zo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",n.appendChild(s),fs.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),fs.removeChild(n),r},su=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},pu=function(t){var e,n;try{e=t.getBBox()}catch{e=iu(t),n=1}return e&&(e.width||e.height)||n||(e=iu(t)),e&&!e.width&&!e.x&&!e.y?{x:+su(t,["x","cx","x1"])||0,y:+su(t,["y","cy","y1"])||0,width:0,height:0}:e},mu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pu(t))},di=function(t,e){if(e){var n=t.style,s;e in Vn&&e!==Ye&&(e=he),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(Xo,"-$1").toLowerCase())):n.removeAttribute(e)}},ui=function(t,e,n,s,r,a){var o=new Be(t._pt,e,n,0,1,a?hu:cu);return t._pt=o,o.b=s,o.e=r,t._props.push(n),o},ru={deg:1,rad:1,turn:1},jp={grid:1,flex:1},fi=function i(t,e,n,s){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=zi.style,l=Bp.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=s==="px",p=s==="%",_,g,m,f;if(s===a||!r||ru[s]||ru[a])return r;if(a!=="px"&&!u&&(r=i(t,e,n,"px")),f=t.getCTM&&mu(t),(p||a==="%")&&(Vn[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],pe(p?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(u?a:s),g=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===hi||!g.appendChild)&&(g=hi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===We.time&&!m.uncache)return pe(r/m.width*d);if(p&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+s,_=t[h],b?t.style[e]=b:di(t,e)}else(p||a==="%")&&!jp[nn(g,"display")]&&(o.position=nn(t,"position")),g===t&&(o.position="static"),g.appendChild(zi),_=zi[h],g.removeChild(zi),o.position="absolute";return l&&p&&(m=oi(g),m.time=We.time,m.width=g[h]),pe(u?_*r/d:_&&r?d/_*r:0)},zn=function(t,e,n,s){var r;return Go||Vo(),e in In&&e!=="transform"&&(e=In[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vn[e]&&e!=="transform"?(r=ar(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Wr(nn(t,Ye))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Gr[e]&&Gr[e](t,e,n)||nn(t,e)||Ao(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?fi(t,e,r,n)+n:r},Qp=function(t,e,n,s){if(!n||n==="none"){var r=ms(e,t,1),a=r&&nn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=nn(t,"borderTopColor"))}var o=new Be(this._pt,t.style,e,0,1,No),l=0,c=0,h,d,u,p,_,g,m,f,b,M,v,R;if(o.b=n,o.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=nn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[e],t.style[e]=s,s=nn(t,e)||s,g?t.style[e]=g:di(t,e)),h=[n,s],Ro(h),n=h[0],s=h[1],u=n.match(Ui)||[],R=s.match(Ui)||[],R.length){for(;d=Ui.exec(s);)m=d[0],b=s.substring(l,d.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ni(p,m)+v),f=parseFloat(m),M=m.substr((f+"").length),l=Ui.lastIndex-M.length,M||(M=M||qe.units[e]||v,l===s.length&&(s+=M,o.e+=M)),v!==M&&(p=fi(t,e,g,M)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=e==="display"&&s==="none"?hu:cu;return So.test(s)&&(o.e=0),this._pt=o,o},au={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tm=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=au[n]||n,e[1]=au[s]||s,e.join(" ")},em=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Vn[o]&&(l=1,o=o==="transformOrigin"?Ye:he),di(n,o);l&&(di(n,he),a&&(a.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ar(n,1),a.uncache=1,uu(s)))}},Gr={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var a=t._pt=new Be(t._pt,e,n,0,0,em);return a.u=s,a.pr=-10,a.tween=r,t._props.push(n),1}}},rr=[1,0,0,1,0,0],gu={},_u=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ou=function(t){var e=nn(t,he);return _u(e)?rr:e.substr(7).match(Mo).map(pe)},qo=function(t,e){var n=t._gsap||oi(t),s=t.style,r=ou(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?rr:r):(r===rr&&!t.offsetParent&&t!==fs&&!n.svg&&(l=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,fs.appendChild(t)),r=ou(t),l?s.display=l:di(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):fs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ho=function(t,e,n,s,r,a){var o=t._gsap,l=r||qo(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],b=l[5],M=e.split(" "),v=parseFloat(M[0])||0,R=parseFloat(M[1])||0,E,T,C,x;n?l!==rr&&(T=p*m-_*g)&&(C=v*(m/T)+R*(-g/T)+(g*b-m*f)/T,x=v*(-_/T)+R*(p/T)-(p*b-_*f)/T,v=C,R=x):(E=pu(t),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),R=E.y+(~(M[1]||M[0]).indexOf("%")?R/100*E.height:R)),s||s!==!1&&o.smooth?(f=v-c,b=R-h,o.xOffset=d+(f*p+b*g)-f,o.yOffset=u+(f*_+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=R,o.smooth=!!s,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(ui(a,o,"xOrigin",c,v),ui(a,o,"yOrigin",h,R),ui(a,o,"xOffset",d,o.xOffset),ui(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},ar=function(t,e){var n=t._gsap||new Po(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=nn(t,Ye)||"0",h,d,u,p,_,g,m,f,b,M,v,R,E,T,C,x,y,P,z,O,G,q,B,$,L,Y,tt,st,lt,zt,X,Q;return h=d=u=g=m=f=b=M=v=0,p=_=1,n.svg=!!(t.getCTM&&mu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[he]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[he]!=="none"?l[he]:"")),s.scale=s.rotate=s.translate="none"),T=qo(t,n.svg),n.svg&&(n.uncache?(L=t.getBBox(),c=n.xOrigin-L.x+"px "+(n.yOrigin-L.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Ho(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,E=n.yOrigin||0,T!==rr&&(P=T[0],z=T[1],O=T[2],G=T[3],h=q=T[4],d=B=T[5],T.length===6?(p=Math.sqrt(P*P+z*z),_=Math.sqrt(G*G+O*O),g=P||z?ds(z,P)*ki:0,b=O||G?ds(O,G)*ki+g:0,b&&(_*=Math.abs(Math.cos(b*ps))),n.svg&&(h-=R-(R*P+E*O),d-=E-(R*z+E*G))):(Q=T[6],zt=T[7],tt=T[8],st=T[9],lt=T[10],X=T[11],h=T[12],d=T[13],u=T[14],C=ds(Q,lt),m=C*ki,C&&(x=Math.cos(-C),y=Math.sin(-C),$=q*x+tt*y,L=B*x+st*y,Y=Q*x+lt*y,tt=q*-y+tt*x,st=B*-y+st*x,lt=Q*-y+lt*x,X=zt*-y+X*x,q=$,B=L,Q=Y),C=ds(-O,lt),f=C*ki,C&&(x=Math.cos(-C),y=Math.sin(-C),$=P*x-tt*y,L=z*x-st*y,Y=O*x-lt*y,X=G*y+X*x,P=$,z=L,O=Y),C=ds(z,P),g=C*ki,C&&(x=Math.cos(C),y=Math.sin(C),$=P*x+z*y,L=q*x+B*y,z=z*x-P*y,B=B*x-q*y,P=$,q=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=pe(Math.sqrt(P*P+z*z+O*O)),_=pe(Math.sqrt(B*B+Q*Q)),C=ds(q,B),b=Math.abs(C)>2e-4?C*ki:0,v=X?1/(X<0?-X:X):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!_u(nn(t,he)),$&&t.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=pe(p),n.scaleY=pe(_),n.rotation=pe(g)+o,n.rotationX=pe(m)+o,n.rotationY=pe(f)+o,n.skewX=b+o,n.skewY=M+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[Ye]=Wr(c)),n.xOffset=n.yOffset=0,n.force3D=qe.force3D,n.renderTransform=n.svg?im:fu?vu:nm,n.uncache=0,n},Wr=function(t){return(t=t.split(" "))[0]+" "+t[1]},Bo=function(t,e,n){var s=Re(e);return pe(parseFloat(e)+parseFloat(fi(t,"x",n+"px",s)))+s},nm=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vu(t,e)},Fi="0deg",sr="0px",Bi=") ",vu=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,b=n.target,M=n.zOrigin,v="",R=f==="auto"&&t&&t!==1||f===!0;if(M&&(d!==Fi||h!==Fi)){var E=parseFloat(h)*ps,T=Math.sin(E),C=Math.cos(E),x;E=parseFloat(d)*ps,x=Math.cos(E),a=Bo(b,a,T*x*-M),o=Bo(b,o,-Math.sin(E)*-M),l=Bo(b,l,C*x*-M+M)}m!==sr&&(v+="perspective("+m+Bi),(s||r)&&(v+="translate("+s+"%, "+r+"%) "),(R||a!==sr||o!==sr||l!==sr)&&(v+=l!==sr||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Bi),c!==Fi&&(v+="rotate("+c+Bi),h!==Fi&&(v+="rotateY("+h+Bi),d!==Fi&&(v+="rotateX("+d+Bi),(u!==Fi||p!==Fi)&&(v+="skew("+u+", "+p+Bi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Bi),b.style[he]=v||"translate(0, 0)"},im=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,b=n.forceCSS,M=parseFloat(a),v=parseFloat(o),R,E,T,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ps,c*=ps,R=Math.cos(l)*d,E=Math.sin(l)*d,T=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=ps,x=Math.tan(c-h),x=Math.sqrt(1+x*x),T*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),R*=x,E*=x)),R=pe(R),E=pe(E),T=pe(T),C=pe(C)):(R=d,C=u,E=T=0),(M&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(M=fi(p,"x",a,"px"),v=fi(p,"y",o,"px")),(_||g||m||f)&&(M=pe(M+_-(_*R+g*T)+m),v=pe(v+g-(_*E+g*C)+f)),(s||r)&&(x=p.getBBox(),M=pe(M+s/100*x.width),v=pe(v+r/100*x.height)),x="matrix("+R+","+E+","+T+","+C+","+M+","+v+")",p.setAttribute("transform",x),b&&(p.style[he]=x)},sm=function(t,e,n,s,r){var a=360,o=Me(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ki:1),c=l-s,h=s+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*eu)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*eu)%a-~~(c/a)*a)),t._pt=u=new Be(t._pt,e,n,s,c,zp),u.e=h,u.u="deg",t._props.push(n),u},lu=function(t,e){for(var n in e)t[n]=e[n];return t},rm=function(t,e,n){var s=lu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,p,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[he]=e,o=ar(n,1),di(n,he),n.setAttribute("transform",c)):(c=getComputedStyle(n)[he],a[he]=e,o=ar(n,1),a[he]=c);for(l in Vn)c=s[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=Re(c),_=Re(h),d=p!==_?fi(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new Be(t._pt,o,l,d,u-d,ko),t._pt.u=_||0,t._props.push(l));lu(o,s)};Fe("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",a=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(o){return t<2?i+o:"border"+o+i});Gr[t>1?"border"+i:i]=function(o,l,c,h,d){var u,p;if(arguments.length<4)return u=a.map(function(_){return zn(o,_,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,p,d)}});var Yo={name:"css",register:Vo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,p,_,g,m,f,b,M,v,R,E,T,C,x;Go||Vo(),this.styles=this.styles||du(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ge[g]&&Lo(g,e,n,s,t,r)))){if(p=typeof h,_=Gr[g],p==="function"&&(h=h.call(n,s,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=us(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Bn.lastIndex=0,Bn.test(c)||(m=Re(c),f=Re(h),f?m!==f&&(c=fi(t,g,c,f)+f):m&&(h+=m)),this.add(o,"setProperty",c,h,s,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,t,r):l[g],Me(c)&&~c.indexOf("random(")&&(c=us(c)),Re(c+"")||c==="auto"||(c+=qe.units[g]||Re(zn(t,g))||""),(c+"").charAt(1)==="="&&(c=zn(t,g))):c=zn(t,g),u=parseFloat(c),b=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),g in In&&(g==="autoAlpha"&&(u===1&&zn(t,"visibility")==="hidden"&&d&&(u=0),C.push("visibility",0,o.visibility),ui(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=In[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Vn,M){if(this.styles.save(g),x=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=nn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=nn(t,"perspective"),y?t.style.perspective=y:di(t,"perspective")}d=parseFloat(h)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||ar(t,e.parseTransform),E=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new Be(this._pt,o,he,0,1,R.renderTransform,R,0,-1),v.dep=1),g==="scale")this._pt=new Be(this._pt,R,"scaleY",R.scaleY,(b?Ni(R.scaleY,b+d):d)-R.scaleY||0,ko),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Ye,0,o[Ye]),h=tm(h),R.svg?Ho(t,h,0,E,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==R.zOrigin&&ui(this,R,"zOrigin",R.zOrigin,f),ui(this,o,g,Wr(c),Wr(h)));continue}else if(g==="svgOrigin"){Ho(t,h,1,E,0,this);continue}else if(g in gu){sm(this,R,g,u,b?Ni(u,b+h):h);continue}else if(g==="smoothOrigin"){ui(this,R,"smooth",R.smooth,h);continue}else if(g==="force3D"){R[g]=h;continue}else if(g==="transform"){rm(this,h,t);continue}}else g in o||(g=ms(g)||g);if(M||(d||d===0)&&(u||u===0)&&!kp.test(h)&&g in o)m=(c+"").substr((u+"").length),d||(d=0),f=Re(h)||(g in qe.units?qe.units[g]:m),m!==f&&(u=fi(t,g,c,f)),this._pt=new Be(this._pt,M?R:o,g,u,(b?Ni(u,b+d):d)-u,!M&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?Gp:ko),this._pt.u=f||0,M&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Hp):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Vp);else if(g in o)Qp.call(this,t,g,c,b?b+h:h);else if(g in t)this.add(t,g,c||t[g],b?b+h:h,s,r);else if(g!=="parseTransform"){Br(g,h);continue}M||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}T&&Fo(this)},render:function(t,e){if(e.tween._time||!Wo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zn,aliases:In,getSetter:function(t,e,n){var s=In[e];return s&&s.indexOf(",")<0&&(e=s),e in Vn&&e!==Ye&&(t._gsap.x||zn(t,"x"))?n&&tu===n?e==="scale"?Yp:qp:(tu=n||{})&&(e==="scale"?$p:Zp):t.style&&!Fr(t.style[e])?Wp:~e.indexOf("-")?Xp:Hr(t,e)},core:{_removeProperty:di,_getMatrix:qo}};De.utils.checkPrefix=ms;De.core.getStyleSaver=du;(function(i,t,e,n){var s=Fe(i+","+t+","+e,function(r){Vn[r]=1});Fe(t,function(r){qe.units[r]="deg",gu[r]=1}),In[s[13]]=i+","+t,Fe(n,function(r){var a=r.split(":");In[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){qe.units[i]="px"});De.registerPlugin(Yo);var Se=De.registerPlugin(Yo)||De,qy=Se.core.Tween;var xu="1.3.27";function Su(i,t,e){return Math.max(i,Math.min(t,e))}function am(i,t,e){return(1-e)*i+e*t}function om(i,t,e,n){return am(i,t,1-Math.exp(-e*n))}function lm(i,t){return(i%t+t)%t}var cm=class{constructor(){vt(this,"isRunning",!1);vt(this,"value",0);vt(this,"from",0);vt(this,"to",0);vt(this,"currentTime",0);vt(this,"lerp");vt(this,"duration");vt(this,"easing");vt(this,"onUpdate")}advance(i){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let n=Su(0,this.currentTime/this.duration,1);t=n>=1;let s=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=om(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:r,onUpdate:a}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=a}};function hm(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var um=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){vt(this,"width",0);vt(this,"height",0);vt(this,"scrollHeight",0);vt(this,"scrollWidth",0);vt(this,"debouncedResize");vt(this,"wrapperResizeObserver");vt(this,"contentResizeObserver");vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=hm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,t;(i=this.wrapperResizeObserver)==null||i.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bu=class{constructor(){vt(this,"events",{})}emit(i,...t){var n;let e=this.events[i]||[];for(let s=0,r=e.length;s<r;s++)(n=e[s])==null||n.call(e,...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}}off(i,t){var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},dm=100/6,pi={passive:!1};function yu(i,t){return i===1?dm:i===2?t:1}var fm=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){vt(this,"touchStart",{x:0,y:0});vt(this,"lastDelta",{x:0,y:0});vt(this,"window",{width:0,height:0});vt(this,"emitter",new bu);vt(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});vt(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});vt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});vt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,s=yu(n,this.window.width),r=yu(n,this.window.height);t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,pi),this.element.addEventListener("touchstart",this.onTouchStart,pi),this.element.addEventListener("touchmove",this.onTouchMove,pi),this.element.addEventListener("touchend",this.onTouchEnd,pi)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,pi),this.element.removeEventListener("touchstart",this.onTouchStart,pi),this.element.removeEventListener("touchmove",this.onTouchMove,pi),this.element.removeEventListener("touchend",this.onTouchEnd,pi)}},Mu=i=>Math.min(1,1.001-2**(-10*i)),wu=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:f,overscroll:b=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:R=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:x=!1,respectReducedMotion:y=!0}={}){vt(this,"_isScrolling",!1);vt(this,"_isStopped",!1);vt(this,"_isLocked",!1);vt(this,"_preventNextNativeScrollEvent",!1);vt(this,"_resetVelocityTimeout",null);vt(this,"_rafId",null);vt(this,"_isDraggingSelection",!1);vt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));vt(this,"isTouching");vt(this,"isIos");vt(this,"time",0);vt(this,"userData",{});vt(this,"lastVelocity",0);vt(this,"velocity",0);vt(this,"direction",0);vt(this,"options");vt(this,"targetScroll");vt(this,"animatedScroll");vt(this,"animate",new cm);vt(this,"emitter",new bu);vt(this,"dimensions");vt(this,"virtualScroll");vt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});vt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});vt(this,"onTransitionEnd",i=>{var t;(t=i.propertyName)!=null&&t.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});vt(this,"onClick",i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(s=>e.host===s.host&&e.pathname===s.pathname&&s.hash);if(n){let s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});vt(this,"onPointerDown",i=>{i.button===1&&this.reset()});vt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");if(s&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let a=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,m,f,b,M;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||h==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||h==="horizontal"&&((f=_.hasAttribute)==null?void 0:f.call(_,"data-lenis-prevent-horizontal"))||s&&((b=_.hasAttribute)==null?void 0:b.call(_,"data-lenis-prevent-touch"))||r&&((M=_.hasAttribute)==null?void 0:M.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=s&&this.options.syncTouch,p=s&&n.type==="touchend";p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});vt(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=xu,window.lenis||(window.lenis={}),window.lenis.version=xu,d==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=Mu:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:p,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:f,overscroll:b,autoRaf:M,anchors:v,autoToggle:R,allowNestedScroll:E,naiveDimensions:C,stopInertiaOnNavigate:x,respectReducedMotion:y},this.dimensions=new um(i,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new fm(e,{touchMultiplier:p,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=i.targetTouches[0])!=null?c:i.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let s=n[0],r=n[n.length-1],a=40,o=Math.hypot(e.clientX-s.left,e.clientY-s.top)<=a,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:a=s?this.options.duration:void 0,easing:o=s?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(s?e=!0:(r=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=i,p=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let _=null;if(typeof u=="string"?(_=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),_||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(_=u),_){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?v.left:v.top}let g=_.getBoundingClientRect(),m=getComputedStyle(_),f=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),b=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);u=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(f)?0:f)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;let _=u-this.animatedScroll;_>this.limit/2?u-=this.limit:_<-this.limit/2&&(u+=this.limit)}}else u=Su(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=u),typeof a=="number"&&typeof o!="function"?o=Mu:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:o,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),s&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){var E;let n=Date.now();i._lenis||(i._lenis={});let s=i._lenis,r,a,o,l,c,h,d,u,p,_;if(n-((E=s.time)!=null?E:0)>2e3){s.time=Date.now();let T=window.getComputedStyle(i);if(s.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),a=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=a,!(r||a))return!1;d=i.scrollWidth,u=i.scrollHeight,p=i.clientWidth,_=i.clientHeight,o=d>p,l=u>_,s.isScrollableX=o,s.isScrollableY=l,s.scrollWidth=d,s.scrollHeight=u,s.clientWidth=p,s.clientHeight=_,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=h}else o=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,a=s.hasOverflowY,d=s.scrollWidth,u=s.scrollHeight,p=s.clientWidth,_=s.clientHeight,c=s.hasOverscrollBehaviorX,h=s.hasOverscrollBehaviorY;if(!(r&&o||a&&l))return!1;let g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,f,b,M,v,R;if(g==="horizontal")m=Math.round(i.scrollLeft),f=d-p,b=t,M=r,v=o,R=c;else if(g==="vertical")m=Math.round(i.scrollTop),f=u-_,b=e,M=a,v=l,R=h;else return!1;return!R&&(m>=f||m<=0)?!0:(b>0?m<f:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let i=this.options.wrapper;return this.isHorizontal?(t=i.scrollX)!=null?t:i.scrollLeft:(e=i.scrollY)!=null?e:i.scrollTop}get scroll(){return this.options.infinite?lm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var Ue={name:"Iman Umar",email:"imanumarrrr@gmail.com",whatsapp:"923107695950",github:"https://github.com/imanumarrrr-dotcom",linkedin:"",instagram:"",cv:"assets/Iman_Umar_CV.docx",formEndpoint:"",openaiModel:"gpt-4o-mini"},Xr=["Frontend Developer","AI App Builder","Creative Coder","RAG & LLM Tinkerer"],Tu=[{n:8,label:"Projects built"},{n:7,label:"AI apps"},{n:2,label:"Internships"},{n:1,label:"E-commerce store"}],Eu=[{k:"01",t:"Creative Frontend",d:"Responsive, mobile-first interfaces in HTML5, CSS3 and vanilla JavaScript with motion that supports the story."},{k:"02",t:"AI Apps & RAG",d:"Chat assistants that read PDFs, Word and Excel files, cite their sources and stream answers."},{k:"03",t:"Full-stack PHP / MySQL",d:"Database-driven pages and a working e-commerce store with a storefront and an admin panel."},{k:"04",t:"Motion & 3D",d:"Animated themes, particle scenes and interaction details that make a page feel alive."}],$o=[["HTML5","Frontend"],["CSS3","Frontend"],["JavaScript","Frontend"],["Responsive Design","Frontend"],["PHP","Backend"],["MySQL","Backend"],["XAMPP","Backend"],["Python","AI"],["LangChain","AI"],["OpenAI API","AI"],["Streamlit","AI"],["RAG","AI"],["Git & GitHub","Tools"],["Canva","Tools"],["MS Office","Tools"]],qr=[{id:"minddesk",title:"MindDesk",kicker:"RAG + custom ChatGPT workspace",category:"ai",year:"2026",motif:"docs",palette:["#8B6CFF","#5CFFC8","#1a1240"],status:"Case study",links:{},summary:"One calm workspace that merges a multi-chat assistant with document search. Upload PDF, Word, PowerPoint, Excel, CSV or text files and ask questions with numbered citations.",bullets:["Spreadsheet-aware: every sheet gets a deterministic summary so totals and averages come from real figures.","Data explorer with chart builder, animated themes and an API-key gate before the console opens.","Pure NumPy vector store with MMR re-ranking and an on-disk embedding cache."],stack:["Python","Streamlit","OpenAI API","RAG","Plotly"],role:"Design, prompts, retrieval and UI",ask:"MindDesk is a Streamlit app that combines a ChatGPT-style assistant with RAG over PDF, Word, PowerPoint, Excel, CSV, text and JSON files. It cites sources, builds table summaries for spreadsheets, has a data explorer with charts and themes, and asks for an OpenAI API key before opening the console."},{id:"supportpearlz",title:"SupportPearlz AI",kicker:"RAG customer-support assistant",category:"ai",year:"2026",motif:"pearls",palette:["#FF7AC8","#7AD7FF","#1c1030"],status:"Case study",links:{},summary:"A LangChain retrieval assistant for customer support that answers from a knowledge base, shows where each answer came from and can rebuild its index on demand.",bullets:["Document ingestion pipeline with a one-click index rebuild.","Source citations so support staff can verify every answer.","Animated Streamlit interface with an API-key gate."],stack:["Python","LangChain","ChromaDB","Streamlit","OpenAI API"],role:"Ingestion, retrieval chain and UI",ask:"SupportPearlz AI is a LangChain RAG customer-support assistant built with Streamlit (assignment AAI-407). It ingests documents into a vector index, answers with citations and lets the user rebuild the index."},{id:"finwise",title:"FinWise AI",kicker:"Personal finance & budget assistant",category:"ai",year:"2026",motif:"bars",palette:["#EAAA00","#5CFFC8","#0f1a14"],status:"Case study",links:{},summary:"Enter income and expenses; Python computes the ratios and a preliminary score, then an LLM turns the numbers into structured, educational budgeting advice.",bullets:["Strict split: deterministic maths in Python, interpretation by the model.","Structured JSON output validated with a safe fallback.","Streaming recommendation, in-memory and SQLite caching, charts and downloadable report."],stack:["Python","LangChain","Streamlit","Plotly","SQLite"],role:"Calculations, prompts, chain and dashboard",ask:"FinWise AI is a LangChain and Streamlit personal-finance assistant. Python calculates totals, savings and expense ratios and a preliminary score; the LLM returns structured JSON insights and streams a written recommendation. It supports in-memory and SQLite caching and is for education only."},{id:"mediguide",title:"MediGuide AI",kicker:"Safety-first symptom guidance",category:"ai",year:"2026",motif:"pulse",palette:["#FF5C7A","#5CE1FF","#1a0c16"],status:"Case study",links:{},summary:"An educational symptom-guidance assistant that never claims a diagnosis. A Python red-flag screen sets a minimum urgency that the AI can raise but never lower.",bullets:["Urgency levels LOW / MEDIUM / HIGH / EMERGENCY with clear next steps.","Rule-based safety net plus a supportive message for self-harm keywords.","Answers in multiple languages including Urdu, with right-to-left support."],stack:["Python","LangChain","Streamlit","OpenAI API"],role:"Safety rules, prompts and interface",ask:"MediGuide AI is an educational symptom-guidance app. It collects symptoms, runs a Python red-flag safety check that sets a minimum urgency, then asks an LLM for structured guidance. It never presents a confirmed diagnosis and always tells users to seek emergency help in urgent cases."},{id:"marketmind",title:"MarketMind AI",kicker:"Autonomous market-research agent",category:"ai",year:"2026",motif:"radar",palette:["#5CFFC8","#8B6CFF","#0c1a1a"],status:"Live demo",links:{live:"https://marketmind-1.streamlit.app",github:"https://github.com/imanumarrrr-dotcom/marketmind"},summary:"A research agent that plans, searches a corpus, saves evidence with source references and writes a report, with a named human approving before anything is published.",bullets:["Every claim is traceable to evidence and typed as fact, inference or recommendation.","Quality-control pass, injection flags, cost ceiling and an audit trail.","Console with live log, tool dispatcher lab and downloadable run bundle."],stack:["Python","OpenAI API","Streamlit","Pydantic"],role:"Agent loop, evidence model and console UI",ask:"MarketMind AI is an autonomous business-research agent in Streamlit. It analyses a request, plans sub-questions, searches a corpus with tools, stores evidence with source references, runs QC and drafts a report that a named human must approve. It has a live demo and a GitHub repository."},{id:"customai",title:"Custom AI Chat",kicker:"ChatGPT-style assistant",category:"ai",year:"2026",motif:"chat",palette:["#8B6CFF","#FF7A59","#170f2a"],status:"Case study",links:{},summary:"A customised multi-chat assistant with a sidebar of conversations, editable system roles, streaming answers and saved history.",bullets:["Create, search and delete chats; each chat keeps its own system role.","Streaming tokens with a thinking indicator and clean reveal animation.","History saved to disk and exported as Markdown."],stack:["Python","Streamlit","LangChain","OpenAI API"],role:"Product design and implementation",ask:"Custom AI Chat is a ChatGPT-style Streamlit assistant with multiple chats, search, per-chat system roles, streaming responses and saved history. It was later merged with the RAG agent to become MindDesk."},{id:"ragagent",title:"RAG Agent (DocMind)",kicker:"Ask your PDFs",category:"ai",year:"2026",motif:"nodes",palette:["#5CE1FF","#8B6CFF","#0b1424"],status:"Case study",links:{},summary:"A document question-answering agent: upload PDFs, split and embed them, retrieve diverse passages with MMR and answer with page-level sources.",bullets:["Chunking, embeddings and MMR retrieval over uploaded PDFs.","Quick actions for summaries and key points.","Source passages shown beside every answer."],stack:["Python","LangChain","FAISS","Streamlit"],role:"Retrieval pipeline and interface",ask:"The RAG Agent (DocMind) lets users upload PDFs and ask questions. It splits documents into chunks, embeds them with FAISS, retrieves passages with MMR and answers with source pages and quick actions like summarize and key points."},{id:"ceramichub",title:"CeramicHub",kicker:"E-commerce store + admin panel",category:"web",year:"2026",motif:"vase",palette:["#EAAA00","#FF7A59","#2a140c"],status:"Case study",links:{},summary:"A fully working PHP and MySQL ceramics store with product listings, database-driven pages and an admin panel to manage the catalogue.",bullets:["Storefront with product listings and database-driven pages.","Admin dashboard for managing products and orders.","Built and tested locally on XAMPP (Apache + MySQL)."],stack:["PHP","MySQL","JavaScript","HTML5","CSS3","XAMPP"],role:"Full-stack developer",ask:"CeramicHub is a ceramic e-commerce website built with PHP, MySQL, JavaScript, HTML and CSS on XAMPP. It has a customer storefront with product listings and an admin panel for managing the store."}],Au=[{when:"Nov 2022 \u2013 Jun 2026",t:"BS Information Technology",d:"Software engineering, database systems, web technologies and computer networks. Modules: Web Development, Human-Computer Interaction, Database Management, Computer Networks, IT Project Management."},{when:"2024",t:"Front-End Development Website",d:"Responsive multi-page site in HTML5, CSS3 and vanilla JavaScript, built mobile-first for cross-device compatibility."},{when:"Feb \u2013 Mar 2026",t:"Software Engineer Intern \xB7 Algolix Technologies",d:"Eight weeks on live software projects in a collaborative engineering team, adapting to new tools and codebases under real deadlines."},{when:"2026",t:"ISPR Summer Internship Programme",d:"Selected for a competitive 12-day national programme with 6,000+ interns across 21 stations. Documented expert sessions on media literacy, misinformation and national security in a structured report."},{when:"Now",t:"Learning \xB7 Huawei HCCDA-AI",d:"Studying AI at Corvit Lahore while building LLM and RAG applications."}],Cu=[{id:"about",title:"About Iman",tags:"who iman umar introduction summary graduate developer",text:"Iman Umar is a recent BS Information Technology graduate from Gujranwala, Pakistan. She builds responsive, user-friendly websites and AI applications, works across front end and back end with HTML, CSS, JavaScript, PHP and MySQL, and is a quick learner with strong leadership and teamwork skills looking to grow as a web developer and contribute to real projects from day one."},{id:"education",title:"Education",tags:"degree bsit university study studied graduate semester modules",text:"Bachelor of Science in Information Technology, November 2022 to June 2026, covering software engineering, database systems, web technologies and computer networks. Relevant modules include Web Development, Human-Computer Interaction, Database Management, Computer Networks and IT Project Management."},{id:"algolix",title:"Internship \xB7 Algolix Technologies",tags:"internship intern algolix software engineer experience job work",text:"Software Engineer Intern at Algolix Technologies (Pvt.) Ltd., February to March 2026: an 8-week internship contributing to live software projects in a collaborative team, adapting quickly to new tools and codebases under real-world deadlines, with recognition for work ethic and quality of output."},{id:"ispr",title:"Internship \xB7 ISPR",tags:"ispr internship summer programme media literacy national security report experience",text:"ISPR Summer Internship Programme 2026: selected for a competitive 12-day national programme alongside 6,000+ interns across 21 stations. Attended expert sessions on media literacy, misinformation and disinformation detection and national security, and wrote a structured 12-day professional report."},{id:"learning",title:"Currently learning",tags:"learning learn huawei hccda ai course certification studying",text:"Iman is currently learning Huawei HCCDA-AI at Corvit Lahore, alongside building LLM, RAG and Streamlit applications."},{id:"skills",title:"Skills",tags:"skills technologies tech stack languages tools frameworks",text:"Technical: HTML5, CSS3, JavaScript, PHP, MySQL, XAMPP, responsive and mobile-first design. AI: Python, LangChain, OpenAI API, Streamlit and retrieval-augmented generation. Tools: Git and GitHub, Canva, MS Office. Soft skills: leadership, teamwork, communication, time management and problem solving."},{id:"contact",title:"Contact",tags:"contact email hire reach message whatsapp github linkedin instagram connect available",text:`You can email Iman at ${Ue.email}, message her on WhatsApp or use the contact form at the bottom of this page. Her code is on GitHub at ${Ue.github}. She is open to junior web developer roles, internships and selected freelance projects.`},{id:"availability",title:"Availability",tags:"available availability hire freelance job opportunity open work remote",text:"Iman is open to junior web developer and AI application roles, internships and selected freelance work. She is based in Gujranwala, Pakistan and can work remotely."},{id:"cv",title:"CV",tags:"cv resume download curriculum vitae",text:"The CV can be downloaded from the Download CV button in the About section or from the contact section."},...qr.map(i=>({id:i.id,title:`Project \xB7 ${i.title}`,tags:`project ${i.title} ${i.kicker} ${i.stack.join(" ")} ${i.category==="ai"?"ai llm rag":"web ecommerce php"}`,text:`${i.ask} Tech: ${i.stack.join(", ")}. Status: ${i.status}.${i.links.live?" Live demo: "+i.links.live+".":""}${i.links.github?" GitHub: "+i.links.github+".":""}`})),{id:"projects",title:"All projects",tags:"projects portfolio work built made list everything",text:"Iman has built eight projects: MindDesk (RAG plus custom ChatGPT), SupportPearlz AI (RAG support assistant), FinWise AI (finance assistant), MediGuide AI (symptom guidance), MarketMind AI (research agent), Custom AI Chat, RAG Agent (DocMind) and CeramicHub (PHP and MySQL e-commerce)."}],Ru=["What did Iman build?","Tell me about MindDesk","Which internships has she done?","What is her tech stack?","How can I contact her?"];var Hc="170";var pm=0,Pu=1,mm=2;var Nd=1,gm=2,Yn=3,Ti=0,Je=1,Zn=2,Si=0,bi=1,Qi=2,Iu=3,Lu=4,_m=5,$i=100,vm=101,xm=102,ym=103,Mm=104,Sm=200,bm=201,wm=202,Tm=203,El=204,Al=205,Em=206,Am=207,Cm=208,Rm=209,Pm=210,Im=211,Lm=212,Dm=213,Um=214,Cl=0,Rl=1,Pl=2,Us=3,Il=4,Ll=5,Dl=6,Ul=7,Od=0,Nm=1,Om=2,wi=0,Fm=1,Bm=2,km=3,zm=4,Vm=5,Hm=6,Gm=7;var Fd=300,Ns=301,Os=302,Nl=303,Ol=304,Xa=306,Fl=1e3,Ki=1001,Bl=1002,wn=1003,Wm=1004;var Yr=1005;var Dn=1006,Zo=1007;var ji=1008;var ti=1009,Bd=1010,kd=1011,gr=1012,Gc=1013,ts=1014,Jn=1015,Sr=1016,Wc=1017,Xc=1018,Fs=1020,zd=35902,Vd=1021,Hd=1022,Sn=1023,Gd=1024,Wd=1025,Is=1026,Bs=1027,Xd=1028,qc=1029,qd=1030,Yc=1031;var $c=1033,xa=33776,ya=33777,Ma=33778,Sa=33779,kl=35840,zl=35841,Vl=35842,Hl=35843,Gl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,$l=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,ba=36492,ac=36494,oc=36495,Yd=36283,lc=36284,cc=36285,hc=36286;var wa=2300,uc=2301,Jo=2302,Du=2400,Uu=2401,Nu=2402;var Xm=3200,qm=3201;var Ym=0,$m=1,Mi="",fn="srgb",Vs="srgb-linear",qa="linear",jt="srgb";var gs=7680;var Ou=519,Zm=512,Jm=513,Km=514,$d=515,jm=516,Qm=517,tg=518,eg=519,Fu=35044;var Bu="300 es",Kn=2e3,Ta=2001,Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ko=Math.PI/180,dc=180/Math.PI;function br(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function ng(i,t){return(i%t+t)%t}function jo(i,t,e){return(1-e)*i+e*t}function or(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],b=s[1],M=s[4],v=s[7],R=s[2],E=s[5],T=s[8];return r[0]=a*g+o*b+l*R,r[3]=a*m+o*M+l*E,r[6]=a*f+o*v+l*T,r[1]=c*g+h*b+d*R,r[4]=c*m+h*M+d*E,r[7]=c*f+h*v+d*T,r[2]=u*g+p*b+_*R,r[5]=u*m+p*M+_*E,r[8]=u*f+p*v+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=e*d+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Ut;function Zd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ig(){let i=Ea("canvas");return i.style.display="block",i}var ku={};function fr(i){i in ku||(ku[i]=!0,console.warn(i))}function sg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ag(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?qa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zu=[.64,.33,.3,.6,.15,.06],Vu=[.2126,.7152,.0722],Hu=[.3127,.329],Gu=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Vs]:{primaries:zu,whitePoint:Hu,transfer:qa,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:Vu,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:zu,whitePoint:Hu,transfer:jt,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:Vu,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});var _s,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Ea("canvas")),_s.width=t.width,_s.height=t.height;let n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},og=0,Aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lg=0,pn=class i extends Ei{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=Dn,a=ji,o=Sn,l=ti,c=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=br(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Fd;pn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(p+1)/2,R=(f+1)/2,E=(h+u)/4,T=(d+g)/4,C=(_+m)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=T/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-g)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ca=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==u||c!==p||h!==_){let m=1-o,f=l*u+c*p+h*_+d*g,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let R=Math.sqrt(M),E=Math.atan2(R,f*b);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let v=o*b;if(l=l*m+u*v,c=c*m+p*v,h=h*m+_*v,d=d*m+g*v,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*p-c*u,t[e+1]=l*_+h*u+c*d-o*p,t[e+2]=c*_+h*p+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new k,Xu=new Ai,es=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Zr.subVectors(this.max,lr),vs.subVectors(t.a,lr),xs.subVectors(t.b,lr),ys.subVectors(t.c,lr),mi.subVectors(xs,vs),gi.subVectors(ys,xs),Vi.subVectors(vs,ys);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!nl(e,vs,xs,ys,Zr)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,vs,xs,ys,Zr))?!1:(Jr.crossVectors(mi,gi),e=[Jr.x,Jr.y,Jr.z],nl(e,vs,xs,ys,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hn=[new k,new k,new k,new k,new k,new k,new k,new k],xn=new k,$r=new es,vs=new k,xs=new k,ys=new k,mi=new k,gi=new k,Vi=new k,lr=new k,Zr=new k,Jr=new k,Hi=new k;function nl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cg=new es,cr=new k,il=new k,ns=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(il)),this.expandByPoint(cr.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new k,sl=new k,Kr=new k,_i=new k,rl=new k,jr=new k,al=new k,_r=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sl.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=_i.dot(this.direction),l=-_i.dot(Kr),c=_i.lengthSq(),h=Math.abs(1-a*a),d,u,p,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sl).addScaledVector(Kr,u),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){rl.subVectors(e,t),jr.subVectors(n,t),al.crossVectors(rl,jr);let a=this.direction.dot(al),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(jr.crossVectors(_i,jr));if(l<0)return null;let c=o*this.direction.dot(rl.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(al);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,_,g,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,_,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,_=c*h,g=c*d;e[0]=u+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,_=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,_=o*h,g=o*d;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=_*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+_,e[10]=u-g*d}else if(t.order==="XZY"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hg,t,ug)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),vi.crossVectors(n,sn),vi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),vi.crossVectors(n,sn)),vi.normalize(),Qr.crossVectors(sn,vi),s[0]=vi.x,s[4]=Qr.x,s[8]=sn.x,s[1]=vi.y,s[5]=Qr.y,s[9]=sn.y,s[2]=vi.z,s[6]=Qr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],b=n[3],M=n[7],v=n[11],R=n[15],E=s[0],T=s[4],C=s[8],x=s[12],y=s[1],P=s[5],z=s[9],O=s[13],G=s[2],q=s[6],B=s[10],$=s[14],L=s[3],Y=s[7],tt=s[11],st=s[15];return r[0]=a*E+o*y+l*G+c*L,r[4]=a*T+o*P+l*q+c*Y,r[8]=a*C+o*z+l*B+c*tt,r[12]=a*x+o*O+l*$+c*st,r[1]=h*E+d*y+u*G+p*L,r[5]=h*T+d*P+u*q+p*Y,r[9]=h*C+d*z+u*B+p*tt,r[13]=h*x+d*O+u*$+p*st,r[2]=_*E+g*y+m*G+f*L,r[6]=_*T+g*P+m*q+f*Y,r[10]=_*C+g*z+m*B+f*tt,r[14]=_*x+g*O+m*$+f*st,r[3]=b*E+M*y+v*G+R*L,r[7]=b*T+M*P+v*q+R*Y,r[11]=b*C+M*z+v*B+R*tt,r[15]=b*x+M*O+v*$+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+g*(+e*l*p-e*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],b=d*m*c-g*u*c+g*l*p-o*m*p-d*l*f+o*u*f,M=_*u*c-h*m*c-_*l*p+a*m*p+h*l*f-a*u*f,v=h*g*c-_*d*c+_*o*p-a*g*p-h*o*f+a*d*f,R=_*d*l-h*g*l-_*o*u+a*g*u+h*o*m-a*d*m,E=e*b+n*M+s*v+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=b*T,t[1]=(g*u*r-d*m*r-g*s*p+n*m*p+d*s*f-n*u*f)*T,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*T,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*T,t[4]=M*T,t[5]=(h*m*r-_*u*r+_*s*p-e*m*p-h*s*f+e*u*f)*T,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*T,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*p+e*l*p)*T,t[8]=v*T,t[9]=(_*d*r-h*g*r-_*n*p+e*g*p+h*n*f-e*d*f)*T,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*T,t[12]=R*T,t[13]=(h*g*s-_*d*s+_*n*u-e*g*u-h*n*m+e*d*m)*T,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*m-e*o*m)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,_=r*d,g=a*h,m=a*d,f=o*d,b=l*c,M=l*h,v=l*d,R=n.x,E=n.y,T=n.z;return s[0]=(1-(g+f))*R,s[1]=(p+v)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(p-v)*E,s[5]=(1-(u+f))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(_+M)*T,s[9]=(m-b)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),a=Ms.set(s[4],s[5],s[6]).length(),o=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,h=1/a,d=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,_;if(o===Kn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ta)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Kn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,p=(n+s)*h,_,g;if(o===Kn)_=(a+r)*d,g=-2*d;else if(o===Ta)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new k,yn=new _e,hg=new k(0,0,0),ug=new k(1,1,1),vi=new k,Qr=new k,sn=new k,qu=new _e,Yu=new Ai,ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dg=0,$u=new k,Ss=new Ai,Wn=new _e,ta=new k,hr=new k,fg=new k,pg=new Ai,Zu=new k(1,0,0),Ju=new k(0,1,0),Ku=new k(0,0,1),ju={type:"added"},mg={type:"removed"},bs={type:"childadded",child:null},ol={type:"childremoved",child:null},an=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new ni,n=new Ai,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Ut}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(hr,ta,this.up):Wn.lookAt(ta,hr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mg),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new k,Xn=new k,ll=new k,qn=new k,ws=new k,Ts=new k,Qu=new k,cl=new k,hl=new k,ul=new k,dl=new ge,fl=new ge,pl=new ge,Zi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Xn.subVectors(n,e),ll.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(Xn),l=Mn.dot(ll),c=Xn.dot(Xn),h=Xn.dot(ll),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,n),pl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dl,r.x),a.addScaledVector(fl,r.y),a.addScaledVector(pl,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Xn.subVectors(t,e),Mn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ws.subVectors(s,n),Ts.subVectors(r,n),cl.subVectors(t,n);let l=ws.dot(cl),c=Ts.dot(cl);if(l<=0&&c<=0)return e.copy(n);hl.subVectors(t,s);let h=ws.dot(hl),d=Ts.dot(hl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ws,a);ul.subVectors(t,r);let p=ws.dot(ul),_=Ts.dot(ul);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ts,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Qu.subVectors(r,s),o=(d-h)/(d-h+(p-_)),e.copy(s).addScaledVector(Qu,o);let f=1/(m+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(ws,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function ml(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=ng(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ml(a,r,t+1/3),this.g=ml(a,r,t),this.b=ml(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){let n=Jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Xt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ze(Oe.r*255,0,255))*65536+Math.round(Ze(Oe.g*255,0,255))*256+Math.round(Ze(Oe.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=fn){Xt.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(ea);let n=jo(xi.h,ea.h,e),s=jo(xi.s,ea.s,e),r=jo(xi.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Bt;Bt.NAMES=Jd;var gg=0,Ci=class extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=br(),this.name="",this.blending=bi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Al,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pa=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new k,na=new Yt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=or(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=or(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=or(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fu&&(t.usage=this.usage),t}};var Ia=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var La=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tn=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},_g=0,dn=new _e,gl=new an,Es=new k,rn=new es,ur=new es,Ae=new k,on=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?La:Ia)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(rn.min,ur.min),rn.expandByPoint(Ae),Ae.addVectors(rn.max,ur.max),rn.expandByPoint(Ae)):(rn.expandByPoint(ur.min),rn.expandByPoint(ur.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),Ae.add(Es)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;let c=new k,h=new k,d=new k,u=new Yt,p=new Yt,_=new Yt,g=new k,m=new k;function f(C,x,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(u),_.sub(u);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[y].add(g),l[C].add(m),l[x].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,x=b.length;C<x;++C){let y=b[C],P=y.start,z=y.count;for(let O=P,G=P+z;O<G;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new k,v=new k,R=new k,E=new k;function T(C){R.fromBufferAttribute(s,C),E.copy(R);let x=o[C];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(E,x);let P=v.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,x=b.length;C<x;++C){let y=b[C],P=y.start,z=y.count;for(let O=P,G=P+z;O<G;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new be(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},td=new _e,Gi=new _r,ia=new ns,ed=new k,sa=new k,ra=new k,aa=new k,_l=new k,oa=new k,nd=new k,la=new k,bn=class extends an{constructor(t=new on,e=new Pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(_l.fromBufferAttribute(d,t),a?oa.addScaledVector(_l,h):oa.addScaledVector(_l.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(ia.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ia,ed)===null||Gi.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let m=u[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,R=M;v<R;v+=3){let E=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);s=ca(this,f,t,n,c,h,d,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let b=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=ca(this,a,t,n,c,h,d,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let m=u[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,R=M;v<R;v+=3){let E=v,T=v+1,C=v+2;s=ca(this,f,t,n,c,h,d,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let b=m,M=m+1,v=m+2;s=ca(this,a,t,n,c,h,d,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function vg(i,t,e,n,s,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ti,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,sa),i.getVertexPosition(l,ra),i.getVertexPosition(c,aa);let h=vg(i,t,e,n,sa,ra,aa,nd);if(h){let d=new k;Zi.getBarycoord(nd,sa,ra,aa,d),s&&(h.uv=Zi.getInterpolatedAttribute(s,o,l,c,d,new Yt)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,o,l,c,d,new Yt)),a&&(h.normal=Zi.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new k,materialIndex:0};Zi.getNormal(sa,ra,aa,u.normal),h.face=u,h.barycoord=d}return h}var vr=class i extends on{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(d,2));function _(g,m,f,b,M,v,R,E,T,C,x){let y=v/T,P=R/C,z=v/2,O=R/2,G=E/2,q=T+1,B=C+1,$=0,L=0,Y=new k;for(let tt=0;tt<B;tt++){let st=tt*P-O;for(let lt=0;lt<q;lt++){let zt=lt*y-z;Y[g]=zt*b,Y[m]=st*M,Y[f]=G,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(lt/T),d.push(1-tt/C),$+=1}}for(let tt=0;tt<C;tt++)for(let st=0;st<T;st++){let lt=u+st+q*tt,zt=u+st+q*(tt+1),X=u+(st+1)+q*(tt+1),Q=u+(st+1)+q*tt;l.push(lt,zt,Q),l.push(zt,X,Q),L+=6}o.addGroup(p,L,x),p+=L,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function xg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var yg={clone:ks,merge:ke},Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Da=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new k,id=new Yt,sd=new Yt,ze=class extends Da{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Cs=1,gc=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(As,Cs,t,e);s.layers=this.layers,this.add(s);let r=new ze(As,Cs,t,e);r.layers=this.layers,this.add(r);let a=new ze(As,Cs,t,e);a.layers=this.layers,this.add(a);let o=new ze(As,Cs,t,e);o.layers=this.layers,this.add(o);let l=new ze(As,Cs,t,e);l.layers=this.layers,this.add(l);let c=new ze(As,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ua=class extends pn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_c=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vr(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Si});r.uniforms.tEquirect.value=e;let a=new bn(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Dn),new gc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},vl=new k,bg=new k,wg=new Ut,$n=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vl.subVectors(n,e).cross(bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wg.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new ns,ha=new k,Na=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],b=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,m-p,v-f).normalize(),n[1].setComponents(l+r,u+c,m+p,v+f).normalize(),n[2].setComponents(l+a,u+h,m+_,v+b).normalize(),n[3].setComponents(l-a,u-h,m-_,v-b).normalize(),n[4].setComponents(l-o,u-d,m-g,v-M).normalize(),e===Kn)n[5].setComponents(l+o,u+d,m+g,v+M).normalize();else if(e===Ta)n[5].setComponents(o,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let g=d[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Oa=class i extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){let b=f*u-a;for(let M=0;M<c;M++){let v=M*d-r;_.push(v,-b,0),g.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let M=b+c*f,v=b+c*(f+1),R=b+1+c*(f+1),E=b+1+c*f;p.push(M,v,E),p.push(v,R,E)}this.setIndex(p),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Eg,alphahash_pars_fragment:Ag,alphamap_fragment:Cg,alphamap_pars_fragment:Rg,alphatest_fragment:Pg,alphatest_pars_fragment:Ig,aomap_fragment:Lg,aomap_pars_fragment:Dg,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:Og,beginnormal_vertex:Fg,bsdfs:Bg,iridescence_fragment:kg,bumpmap_pars_fragment:zg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:$g,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:jg,displacementmap_vertex:Qg,emissivemap_fragment:t_,emissivemap_pars_fragment:e_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:s_,envmap_common_pars_fragment:r_,envmap_pars_fragment:a_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:v_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:h_,fog_fragment:u_,fog_pars_fragment:d_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:x_,lights_toon_pars_fragment:y_,lights_phong_fragment:M_,lights_phong_pars_fragment:S_,lights_physical_fragment:b_,lights_physical_pars_fragment:w_,lights_fragment_begin:T_,lights_fragment_maps:E_,lights_fragment_end:A_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:I_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:U_,map_particle_pars_fragment:N_,metalnessmap_fragment:O_,metalnessmap_pars_fragment:F_,morphinstance_vertex:B_,morphcolor_vertex:k_,morphnormal_vertex:z_,morphtarget_pars_vertex:V_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:j_,opaque_fragment:Q_,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:w0,background_vert:T0,background_frag:E0,backgroundCube_vert:A0,backgroundCube_frag:C0,cube_vert:R0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:z0,meshlambert_vert:V0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:K0,meshtoon_frag:j0,points_vert:Q0,points_frag:tv,shadow_vert:ev,shadow_frag:nv,sprite_vert:iv,sprite_frag:sv},at={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ln={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ln.physical={uniforms:ke([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var ua={r:0,b:0,g:0},Xi=new ni,rv=new _e;function av(i,t,e,n,s,r,a){let o=new Bt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function g(b){let M=!1,v=_(b);v===null?f(o,l):v&&v.isColor&&(f(v,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let v=_(M);v&&(v.isCubeTexture||v.mapping===Xa)?(h===void 0&&(h=new bn(new vr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ks(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Xi)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,(d!==v||u!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new bn(new Oa(2,2),new mn({name:"BackgroundMaterial",uniforms:ks(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,M){b.getRGB(ua,Kd(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:g,addToRenderList:m}}function ov(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(y,P,z,O,G){let q=!1,B=d(O,z,P);r!==B&&(r=B,c(r.object)),q=p(y,O,z,G),q&&_(y,O,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(y,P,z,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,z){let O=z.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let B=q[O];return B===void 0&&(B=u(l()),q[O]=B),B}function u(y){let P=[],z=[],O=[];for(let G=0;G<e;G++)P[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,P,z,O){let G=r.attributes,q=P.attributes,B=0,$=z.getAttributes();for(let L in $)if($[L].location>=0){let tt=G[L],st=q[L];if(st===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function _(y,P,z,O){let G={},q=P.attributes,B=0,$=z.getAttributes();for(let L in $)if($[L].location>=0){let tt=q[L];tt===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));let st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),G[L]=st,B++}r.attributes=G,r.attributesNum=B,r.index=O}function g(){let y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){let z=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;z[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),G[y]!==P&&(i.vertexAttribDivisor(y,P),G[y]=P)}function b(){let y=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function M(y,P,z,O,G,q,B){B===!0?i.vertexAttribIPointer(y,P,z,G,q):i.vertexAttribPointer(y,P,z,O,G,q)}function v(y,P,z,O){g();let G=O.attributes,q=z.getAttributes(),B=P.defaultAttributeValues;for(let $ in q){let L=q[$];if(L.location>=0){let Y=G[$];if(Y===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){let tt=Y.normalized,st=Y.itemSize,lt=t.get(Y);if(lt===void 0)continue;let zt=lt.buffer,X=lt.type,Q=lt.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||Y.gpuType===Gc;if(Y.isInterleavedBufferAttribute){let rt=Y.data,Tt=rt.stride,it=Y.offset;if(rt.isInstancedInterleavedBuffer){for(let _t=0;_t<L.locationSize;_t++)f(L.location+_t,rt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let _t=0;_t<L.locationSize;_t++)m(L.location+_t);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let _t=0;_t<L.locationSize;_t++)M(L.location+_t,st/L.locationSize,X,tt,Tt*Q,(it+st/L.locationSize*_t)*Q,gt)}else{if(Y.isInstancedBufferAttribute){for(let rt=0;rt<L.locationSize;rt++)f(L.location+rt,Y.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let rt=0;rt<L.locationSize;rt++)m(L.location+rt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let rt=0;rt<L.locationSize;rt++)M(L.location+rt,st/L.locationSize,X,tt,st*Q,st/L.locationSize*rt*Q,gt)}}else if(B!==void 0){let tt=B[$];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(L.location,tt);break;case 3:i.vertexAttrib3fv(L.location,tt);break;case 4:i.vertexAttrib4fv(L.location,tt);break;default:i.vertexAttrib1fv(L.location,tt)}}}}b()}function R(){C();for(let y in n){let P=n[y];for(let z in P){let O=P[z];for(let G in O)h(O[G].object),delete O[G];delete P[z]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let z in P){let O=P[z];for(let G in O)h(O[G].object),delete O[G];delete P[z]}delete n[y.id]}function T(y){for(let P in n){let z=n[P];if(z[y.id]===void 0)continue;let O=z[y.id];for(let G in O)h(O[G].object),delete O[G];delete z[y.id]}}function C(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function lv(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===Sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ti&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function hv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $n,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,M=b*4,v=f.clippingState||null;l.value=v,v=h(_,u,M,p);for(let R=0;R!==M;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,_){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let f=p+g*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==g;++M,v+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function uv(i){let t=new WeakMap;function e(a,o){return o===Nl?a.mapping=Ns:o===Ol&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Nl||o===Ol)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _c(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var vc=class extends Da{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ps=4,rd=[.125,.215,.35,.446,.526,.582],Ji=20,xl=new vc,ad=new Bt,yl=null,Ml=0,Sl=0,bl=!1,Yi=(1+Math.sqrt(5))/2,Rs=1/Yi,od=[new k(-Yi,Rs,0),new k(Yi,Rs,0),new k(-Rs,0,Yi),new k(Rs,0,Yi),new k(0,Yi,-Rs),new k(0,Yi,Rs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Ml,Sl),this._renderer.xr.enabled=bl,t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Sr,format:Sn,colorSpace:Vs,depthBuffer:!1},s=ld(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(r)),this._blurMaterial=fv(r,t,e)}return s}_compileMaterial(t){let e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ad),h.toneMapping=wi,h.autoClear=!1;let p=new Pa({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new bn(new vr,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(ad),g=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let M=this._cubeSize;da(s,b*M,f>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ns||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=od[(s-r-1)%od.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bn(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let f=[],b=0;for(let T=0;T<Ji;++T){let C=T/g,x=Math.exp(-C*C/2);f.push(x),T===0?b+=x:T<m&&(b+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-n;let v=this._sizeLods[s],R=3*v*(s>M-Ps?s-M+Ps:0),E=4*(this._cubeSize-v);da(e,R,E,3*v,2*v),l.setRenderTarget(e),l.render(d,xl)}};function dv(i){let t=[],e=[],n=[],s=i,r=i-Ps+1+rd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ps?l=rd[a-i+Ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*p),M=new Float32Array(m*_*p),v=new Float32Array(f*_*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,C=E>2?0:-1,x=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];b.set(x,g*_*E),M.set(u,m*_*E);let y=[E,E,E,E,E,E];v.set(y,f*_*E)}let R=new on;R.setAttribute("position",new be(b,g)),R.setAttribute("uv",new be(M,m)),R.setAttribute("faceIndex",new be(v,f)),t.push(R),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ld(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fv(i,t,e){let n=new Float32Array(Ji),s=new k(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function cd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function hd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Nl||l===Ol,h=l===Ns||l===Os;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Fa(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fa(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gv(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let g=u.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let _ in u)t.update(u[_],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,_=d.attributes.position,g=0;if(p!==null){let b=p.array;g=p.version;for(let M=0,v=b.length;M<v;M+=3){let R=b[M+0],E=b[M+1],T=b[M+2];u.push(R,E,E,T,T,R)}}else if(_!==void 0){let b=_.array;g=_.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let R=M+0,E=M+1,T=M+2;u.push(R,E,E,T,T,R)}}else return;let m=new(Zd(u)?La:Ia)(u,1);m.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function _v(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,u*a,_),e.update(p,n,_))}function h(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function d(u,p,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b]*g[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function vv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xv(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let x=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*R*4*d),T=new Ca(E,v,R,d);T.type=Jn,T.needsUpdate=!0;let C=M*4;for(let y=0;y<d;y++){let P=m[y],z=f[y],O=b[y],G=v*R*4*y;for(let q=0;q<P.count;q++){let B=q*C;p===!0&&(s.fromBufferAttribute(P,q),E[G+B+0]=s.x,E[G+B+1]=s.y,E[G+B+2]=s.z,E[G+B+3]=0),_===!0&&(s.fromBufferAttribute(z,q),E[G+B+4]=s.x,E[G+B+5]=s.y,E[G+B+6]=s.z,E[G+B+7]=0),g===!0&&(s.fromBufferAttribute(O,q),E[G+B+8]=s.x,E[G+B+9]=s.y,E[G+B+10]=s.z,E[G+B+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new Yt(v,R)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends pn{constructor(t,e,n,s,r,a,o,l,c,h=Is){if(h!==Is&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=ts),n===void 0&&h===Bs&&(n=Fs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qd=new pn,ud=new Ba(1,1),tf=new Ca,ef=new mc,nf=new Ua,dd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ya(i,t){let e=fd[t];e===void 0&&(e=new Int32Array(t),fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Tv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Te(e,n)}}function Ev(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Te(e,n)}}function Av(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Te(e,n)}}function Cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Ov(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ud.compareFunction=$d,r=ud):r=Qd,e.setTexture2D(t||r,s)}function Fv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ef,s)}function Bv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nf,s)}function kv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tf,s)}function zv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return bv;case 35666:return wv;case 35674:return Tv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return Cv;case 35667:case 35671:return Rv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}function Vv(i,t){i.uniform1fv(this.addr,t)}function Hv(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gv(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wv(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xv(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qv(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yv(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $v(i,t){i.uniform1iv(this.addr,t)}function Zv(i,t){i.uniform2iv(this.addr,t)}function Jv(i,t){i.uniform3iv(this.addr,t)}function Kv(i,t){i.uniform4iv(this.addr,t)}function jv(i,t){i.uniform1uiv(this.addr,t)}function Qv(i,t){i.uniform2uiv(this.addr,t)}function tx(i,t){i.uniform3uiv(this.addr,t)}function ex(i,t){i.uniform4uiv(this.addr,t)}function nx(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qd,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ef,r[a])}function sx(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nf,r[a])}function rx(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tf,r[a])}function ax(i){switch(i){case 5126:return Vv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Kv;case 5125:return jv;case 36294:return Qv;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zv(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function _d(i,t){i.seq.push(t),i.map[t.id]=t}function ox(i,t,e){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),a=wl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_d(e,c===void 0?new xc(o,i,t):new yc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Mc(o),_d(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ox(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,cx=0;function hx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xd=new Ut;function ux(i){Xt._getMatrix(xd,Xt.workingColorSpace,i);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case qa:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hx(i.getShaderSource(t),a)}else return s}function dx(i,t){let e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fx(i,t){let e;switch(t){case Fm:e="Linear";break;case Bm:e="Reinhard";break;case km:e="Cineon";break;case zm:e="ACESFilmic";break;case Hm:e="AgX";break;case Gm:e="Neutral";break;case Vm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fa=new k;function px(){Xt.getLuminanceCoefficients(fa);let i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function Md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(vx,yx)}var xx=new Map;function yx(i,t){let e=Ot[t];if(e===void 0){let n=xx.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(i){return i.replace(Mx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Ex(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Od:t="ENVMAP_BLENDING_MULTIPLY";break;case Nm:t="ENVMAP_BLENDING_MIX";break;case Om:t="ENVMAP_BLENDING_ADD";break}return t}function Ax(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bx(e),c=wx(e),h=Tx(e),d=Ex(e),u=Ax(e),p=mx(e),_=gx(r),g=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(pr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(pr).join(`
`),f.length>0&&(f+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),f=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==wi?fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=Sc(a),a=Md(a,e),a=Sd(a,e),o=Sc(o),o=Md(o,e),o=Sd(o,e),a=bd(a),o=bd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=b+m+a,v=b+f+o,R=vd(s,s.VERTEX_SHADER,M),E=vd(s,s.FRAGMENT_SHADER,v);s.attachShader(g,R),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(E).trim(),q=!0,B=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,E);else{let $=yd(s,R,"vertex"),L=yd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(B=!1);B&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(R),s.deleteShader(E),C=new Ds(s,g),x=_x(s,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,lx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=E,this}var Rx=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=Rx++,this.code=t,this.usedTimes=0}};function Px(i,t,e,n,s,r,a){let o=new Ra,l=new bc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,z,O){let G=z.fog,q=O.geometry,B=x.isMeshStandardMaterial?z.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),L=$&&$.mapping===Xa?$.image.height:null,Y=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=tt!==void 0?tt.length:0,lt=0;q.morphAttributes.position!==void 0&&(lt=1),q.morphAttributes.normal!==void 0&&(lt=2),q.morphAttributes.color!==void 0&&(lt=3);let zt,X,Q,gt;if(Y){let Kt=Ln[Y];zt=Kt.vertexShader,X=Kt.fragmentShader}else zt=x.vertexShader,X=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);let rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),it=O.isInstancedMesh===!0,_t=O.isBatchedMesh===!0,wt=!!x.map,It=!!x.matcap,Jt=!!$,D=!!x.aoMap,xe=!!x.lightMap,Ft=!!x.bumpMap,Ht=!!x.normalMap,At=!!x.displacementMap,ie=!!x.emissiveMap,Et=!!x.metalnessMap,A=!!x.roughnessMap,S=x.anisotropy>0,F=x.clearcoat>0,J=x.dispersion>0,j=x.iridescence>0,Z=x.sheen>0,St=x.transmission>0,ct=S&&!!x.anisotropyMap,ft=F&&!!x.clearcoatMap,Wt=F&&!!x.clearcoatNormalMap,et=F&&!!x.clearcoatRoughnessMap,pt=j&&!!x.iridescenceMap,Ct=j&&!!x.iridescenceThicknessMap,Rt=Z&&!!x.sheenColorMap,mt=Z&&!!x.sheenRoughnessMap,Gt=!!x.specularMap,Nt=!!x.specularColorMap,ee=!!x.specularIntensityMap,I=St&&!!x.transmissionMap,ot=St&&!!x.thicknessMap,W=!!x.gradientMap,K=!!x.alphaMap,dt=x.alphaTest>0,ht=!!x.alphaHash,Lt=!!x.extensions,de=wi;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=i.toneMapping);let Pe={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:zt,fragmentShader:X,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:_t,batchingColor:_t&&O._colorsTexture!==null,instancing:it,instancingColor:it&&O.instanceColor!==null,instancingMorph:it&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Vs,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:It,envMap:Jt,envMapMode:Jt&&$.mapping,envMapCubeUVHeight:L,aoMap:D,lightMap:xe,bumpMap:Ft,normalMap:Ht,displacementMap:u&&At,emissiveMap:ie,normalMapObjectSpace:Ht&&x.normalMapType===$m,normalMapTangentSpace:Ht&&x.normalMapType===Ym,metalnessMap:Et,roughnessMap:A,anisotropy:S,anisotropyMap:ct,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:J,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ee,transmission:St,transmissionMap:I,thicknessMap:ot,gradientMap:W,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:x.combine,mapUv:wt&&g(x.map.channel),aoMapUv:D&&g(x.aoMap.channel),lightMapUv:xe&&g(x.lightMap.channel),bumpMapUv:Ft&&g(x.bumpMap.channel),normalMapUv:Ht&&g(x.normalMap.channel),displacementMapUv:At&&g(x.displacementMap.channel),emissiveMapUv:ie&&g(x.emissiveMap.channel),metalnessMapUv:Et&&g(x.metalnessMap.channel),roughnessMapUv:A&&g(x.roughnessMap.channel),anisotropyMapUv:ct&&g(x.anisotropyMap.channel),clearcoatMapUv:ft&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:Gt&&g(x.specularMap.channel),specularColorMapUv:Nt&&g(x.specularColorMap.channel),specularIntensityMapUv:ee&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:ot&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ht||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(wt||K),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:ie&&x.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Lt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&x.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function f(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(b(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){let y=_[x.type],P;if(y){let z=Ln[y];P=yg.clone(z.uniforms)}else P=x.uniforms;return P}function R(x,y){let P;for(let z=0,O=h.length;z<O;z++){let G=h[z];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Cx(i,y,x,r),h.push(P)),P}function E(x){if(--x.usedTimes===0){let y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function T(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function Ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ed(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,_,g,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function o(d,u,p,_,g,m){let f=a(d,u,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,_,g,m){let f=a(d,u,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Lx),n.length>1&&n.sort(u||Td),s.length>1&&s.sort(u||Td)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ed,i.set(n,[a])):s>=r.length?(a=new Ed,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Bt};break;case"SpotLight":e={position:new k,direction:new k,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ox=0;function Fx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bx(i){let t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new _e,a=new _e;function o(c){let h=0,d=0,u=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,b=0,M=0,v=0,R=0,E=0,T=0;c.sort(Fx);for(let x=0,y=c.length;x<y;x++){let P=c[x],z=P.color,O=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,d+=z.g*O,u+=z.b*O;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],O);T++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,L=e.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=B,p++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(z).multiplyScalar(O),B.distance=G,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;let $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=$.matrix,P.castShadow){let L=e.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=q,v++}g++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(z).multiplyScalar(O),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let $=P.shadow,L=e.get(P);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,n.pointShadow[_]=L,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=B,_++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(O),B.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==b||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=b,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=T,n.version=Ox++)}function l(c,h){let d=0,u=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let M=c[f];if(M.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Ad(i){let t=new Bx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ad(i),t.set(s,[o])):r>=a.length?(o=new Ad(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tc=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hx(i,t,e){let n=new Na,s=new Yt,r=new Yt,a=new ge,o=new Tc({depthPacking:qm}),l=new Ec,c={},h=e.maxTextureSize,d={[Ti]:Je,[Je]:Ti,[Zn]:Zn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:zx,fragmentShader:Vx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new on;_.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new bn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let f=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let x=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=f!==Yn&&this.type===Yn,G=f===Yn&&this.type!==Yn;for(let q=0,B=E.length;q<B;q++){let $=E[q],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let Y=L.getFrameExtents();if(s.multiply(Y),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,L.mapSize.y=r.y)),L.map===null||O===!0||G===!0){let st=this.type!==Yn?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new ei(s.x,s.y,st),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let tt=L.getViewportCount();for(let st=0;st<tt;st++){let lt=L.getViewport(st);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),z.viewport(a),L.updateMatrices($,st),n=L.getFrustum(),v(T,C,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===Yn&&b(L,C),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,P)};function b(E,T){let C=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,p,g,null)}function M(E,T,C,x){let y=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=y.uuid,O=T.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let q=G[O];q===void 0&&(q=y.clone(),G[O]=q,T.addEventListener("dispose",R)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,x===Yn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=C}return y}function v(E,T,C,x,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let O=t.update(E),G=E.material;if(Array.isArray(G)){let q=O.groups;for(let B=0,$=q.length;B<$;B++){let L=q[B],Y=G[L.materialIndex];if(Y&&Y.visible){let tt=M(E,Y,x,y);E.onBeforeShadow(i,E,T,C,O,tt,L),i.renderBufferDirect(C,null,O,tt,E,L),E.onAfterShadow(i,E,T,C,O,tt,L)}}}else if(G.visible){let q=M(E,G,x,y);E.onBeforeShadow(i,E,T,C,O,q,null),i.renderBufferDirect(C,null,O,q,E,null),E.onAfterShadow(i,E,T,C,O,q,null)}}let z=E.children;for(let O=0,G=z.length;O<G;O++)v(z[O],T,C,x,y)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let x=c[C],y=E.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var Gx={[Cl]:Rl,[Pl]:Dl,[Il]:Ul,[Us]:Ll,[Rl]:Cl,[Dl]:Pl,[Ul]:Il,[Ll]:Us};function Wx(i,t){function e(){let I=!1,ot=new ge,W=null,K=new ge(0,0,0,0);return{setMask:function(dt){W!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ht,Lt,de,Pe){Pe===!0&&(dt*=de,ht*=de,Lt*=de),ot.set(dt,ht,Lt,de),K.equals(ot)===!1&&(i.clearColor(dt,ht,Lt,de),K.copy(ot))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,W=null,K=null,dt=null;return{setReversed:function(ht){if(ot!==ht){let Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let de=dt;dt=null,this.setClear(de)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ht){W!==ht&&!I&&(i.depthMask(ht),W=ht)},setFunc:function(ht){if(ot&&(ht=Gx[ht]),K!==ht){switch(ht){case Cl:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){dt!==ht&&(ot&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){I=!1,W=null,K=null,dt=null,ot=!1}}}function s(){let I=!1,ot=null,W=null,K=null,dt=null,ht=null,Lt=null,de=null,Pe=null;return{setTest:function(Kt){I||(Kt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!I&&(i.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,_n,Nn){(W!==Kt||K!==_n||dt!==Nn)&&(i.stencilFunc(Kt,_n,Nn),W=Kt,K=_n,dt=Nn)},setOp:function(Kt,_n,Nn){(ht!==Kt||Lt!==_n||de!==Nn)&&(i.stencilOp(Kt,_n,Nn),ht=Kt,Lt=_n,de=Nn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){Pe!==Kt&&(i.clearStencil(Kt),Pe=Kt)},reset:function(){I=!1,ot=null,W=null,K=null,dt=null,ht=null,Lt=null,de=null,Pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],_=null,g=!1,m=null,f=null,b=null,M=null,v=null,R=null,E=null,T=new Bt(0,0,0),C=0,x=!1,y=null,P=null,z=null,O=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=$>=1):L.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=$>=2);let Y=null,tt={},st=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),zt=new ge().fromArray(st),X=new ge().fromArray(lt);function Q(I,ot,W,K){let dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<W;Lt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ot+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}let gt={};gt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Us),Ft(!1),Ht(Pu),rt(i.CULL_FACE),D(Si);function rt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Tt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function it(I,ot){return d[I]!==ot?(i.bindFramebuffer(I,ot),d[I]=ot,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(I,ot){let W=p,K=!1;if(I){W=u.get(ot),W===void 0&&(W=[],u.set(ot,W));let dt=I.textures;if(W.length!==dt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Lt=dt.length;ht<Lt;ht++)W[ht]=i.COLOR_ATTACHMENT0+ht;W.length=dt.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function wt(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let It={[$i]:i.FUNC_ADD,[vm]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};It[ym]=i.MIN,It[Mm]=i.MAX;let Jt={[Sm]:i.ZERO,[bm]:i.ONE,[wm]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[Pm]:i.SRC_ALPHA_SATURATE,[Cm]:i.DST_COLOR,[Em]:i.DST_ALPHA,[Tm]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[Am]:i.ONE_MINUS_DST_ALPHA,[Im]:i.CONSTANT_COLOR,[Lm]:i.ONE_MINUS_CONSTANT_COLOR,[Dm]:i.CONSTANT_ALPHA,[Um]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ot,W,K,dt,ht,Lt,de,Pe,Kt){if(I===Si){g===!0&&(Tt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),I!==_m){if(I!==m||Kt!==x){if((f!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),f=$i,v=$i),Kt)switch(I){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,M=null,R=null,E=null,T.set(0,0,0),C=0,m=I,x=Kt}return}dt=dt||ot,ht=ht||W,Lt=Lt||K,(ot!==f||dt!==v)&&(i.blendEquationSeparate(It[ot],It[dt]),f=ot,v=dt),(W!==b||K!==M||ht!==R||Lt!==E)&&(i.blendFuncSeparate(Jt[W],Jt[K],Jt[ht],Jt[Lt]),b=W,M=K,R=ht,E=Lt),(de.equals(T)===!1||Pe!==C)&&(i.blendColor(de.r,de.g,de.b,Pe),T.copy(de),C=Pe),m=I,x=!1}function xe(I,ot){I.side===Zn?Tt(i.CULL_FACE):rt(i.CULL_FACE);let W=I.side===Je;ot&&(W=!W),Ft(W),I.blending===bi&&I.transparent===!1?D(Si):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Ht(I){I!==pm?(rt(i.CULL_FACE),I!==P&&(I===Pu?i.cullFace(i.BACK):I===mm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),P=I}function At(I){I!==z&&(B&&i.lineWidth(I),z=I)}function ie(I,ot,W){I?(rt(i.POLYGON_OFFSET_FILL),(O!==ot||G!==W)&&(i.polygonOffset(ot,W),O=ot,G=W)):Tt(i.POLYGON_OFFSET_FILL)}function Et(I){I?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+q-1),Y!==I&&(i.activeTexture(I),Y=I)}function S(I,ot,W){W===void 0&&(Y===null?W=i.TEXTURE0+q-1:W=Y);let K=tt[W];K===void 0&&(K={type:void 0,texture:void 0},tt[W]=K),(K.type!==I||K.texture!==ot)&&(Y!==W&&(i.activeTexture(W),Y=W),i.bindTexture(I,ot||gt[I]),K.type=I,K.texture=ot)}function F(){let I=tt[Y];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),zt.copy(I))}function mt(I){X.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Gt(I,ot){let W=c.get(ot);W===void 0&&(W=new WeakMap,c.set(ot,W));let K=W.get(I);K===void 0&&(K=i.getUniformBlockIndex(ot,I.name),W.set(I,K))}function Nt(I,ot){let K=c.get(ot).get(I);l.get(ot)!==K&&(i.uniformBlockBinding(ot,K,I.__bindingPointIndex),l.set(ot,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,tt={},d={},u=new WeakMap,p=[],_=null,g=!1,m=null,f=null,b=null,M=null,v=null,R=null,E=null,T=new Bt(0,0,0),C=0,x=!1,y=null,P=null,z=null,O=null,G=null,zt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:it,drawBuffers:_t,useProgram:wt,setBlending:D,setMaterial:xe,setFlipSided:Ft,setCullFace:Ht,setLineWidth:At,setPolygonOffset:ie,setScissorTest:Et,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ee}}function Cd(i,t,e,n){let s=Xx(n);switch(e){case Vd:return i*t;case Gd:return i*t;case Wd:return i*t*2;case Xd:return i*t/s.components*s.byteLength;case qc:return i*t/s.components*s.byteLength;case qd:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case Hd:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ba:case ac:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yd:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xx(i){switch(i){case ti:case Bd:return{byteLength:1,components:1};case gr:case kd:case Sr:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case ts:case Gc:case Jn:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):Ea("canvas")}function g(A,S,F){let J=1,j=Et(A);if((j.width>F||j.height>F)&&(J=F/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Z=Math.floor(J*j.width),St=Math.floor(J*j.height);d===void 0&&(d=_(Z,St));let ct=S?_(Z,St):d;return ct.width=Z,ct.height=St,ct.getContext("2d").drawImage(A,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+St+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,S,F,J,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),S===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){let St=j?qa:Xt.getTransfer(J);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=St===jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,S){let F;return A?S===null||S===ts||S===Fs?F=i.DEPTH24_STENCIL8:S===Jn?F=i.DEPTH32F_STENCIL8:S===gr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Fs?F=i.DEPTH_COMPONENT24:S===Jn?F=i.DEPTH_COMPONENT32F:S===gr&&(F=i.DEPTH_COMPONENT16),F}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){let S=A.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),y(S)}function C(A){let S=n.get(A);if(S.__webglInit===void 0)return;let F=A.source,J=u.get(F);if(J){let j=J[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(A),Object.keys(J).length===0&&u.delete(F)}n.remove(A)}function x(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let F=A.source,J=u.get(F);delete J[S.__cacheKey],a.memory.textures--}function y(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let j=0;j<S.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[J][j]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let J=0,j=F.length;J<j;J++){let Z=n.get(F[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(F[J])}n.remove(A)}let P=0;function z(){P=0}function O(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){let F=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,A,S);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function B(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function $(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){X(F,A,S);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function L(A,S){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}let Y={[Fl]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},tt={[wn]:i.NEAREST,[Wm]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},st={[Zm]:i.NEVER,[eg]:i.ALWAYS,[Jm]:i.LESS,[$d]:i.LEQUAL,[Km]:i.EQUAL,[tg]:i.GEQUAL,[jm]:i.GREATER,[Qm]:i.NOTEQUAL};function lt(A,S){if(S.type===Jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Zo||S.magFilter===Yr||S.magFilter===ji||S.minFilter===Dn||S.minFilter===Zo||S.minFilter===Yr||S.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,tt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==Yr&&S.minFilter!==ji||S.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function zt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let J=S.source,j=u.get(J);j===void 0&&(j={},u.set(J,j));let Z=G(S);if(Z!==A.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Z].usedTimes++;let St=j[A.__cacheKey];St!==void 0&&(j[A.__cacheKey].usedTimes--,St.usedTimes===0&&x(S)),A.__cacheKey=Z,A.__webglTexture=j[Z].texture}return F}function X(A,S,F){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);let j=zt(A,S),Z=S.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+F);let St=n.get(Z);if(Z.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let ct=Xt.getPrimaries(Xt.workingColorSpace),ft=S.colorSpace===Mi?null:Xt.getPrimaries(S.colorSpace),Wt=S.colorSpace===Mi||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=g(S.image,!1,s.maxTextureSize);et=ie(S,et);let pt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),Rt=M(S.internalFormat,pt,Ct,S.colorSpace,S.isVideoTexture);lt(J,S);let mt,Gt=S.mipmaps,Nt=S.isVideoTexture!==!0,ee=St.__version===void 0||j===!0,I=Z.dataReady,ot=R(S,et);if(S.isDepthTexture)Rt=v(S.format===Bs,S.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,pt,Ct,null));else if(S.isDataTexture)if(Gt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Gt[0].width,Gt[0].height);for(let W=0,K=Gt.length;W<K;W++)mt=Gt[W],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,W,Rt,mt.width,mt.height,0,pt,Ct,mt.data);S.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,pt,Ct,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,Gt[0].width,Gt[0].height,et.depth);for(let W=0,K=Gt.length;W<K;W++)if(mt=Gt[W],S.format!==Sn)if(pt!==null)if(Nt){if(I)if(S.layerUpdates.size>0){let dt=Cd(mt.width,mt.height,S.format,S.type);for(let ht of S.layerUpdates){let Lt=mt.data.subarray(ht*dt/mt.data.BYTES_PER_ELEMENT,(ht+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ht,mt.width,mt.height,1,pt,Lt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,et.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Rt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,et.depth,pt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Rt,mt.width,mt.height,et.depth,0,pt,Ct,mt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ot,Rt,Gt[0].width,Gt[0].height);for(let W=0,K=Gt.length;W<K;W++)mt=Gt[W],S.format!==Sn?pt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,W,Rt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(S.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Rt,et.width,et.height,et.depth),I)if(S.layerUpdates.size>0){let W=Cd(et.width,et.height,S.format,S.type);for(let K of S.layerUpdates){let dt=et.data.subarray(K*W/et.data.BYTES_PER_ELEMENT,(K+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,pt,Ct,dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(S.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,ot,Rt,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(S.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,ot,Rt,et.width,et.height);else{let W=et.width,K=et.height;for(let dt=0;dt<ot;dt++)e.texImage2D(i.TEXTURE_2D,dt,Rt,W,K,0,pt,Ct,null),W>>=1,K>>=1}}else if(Gt.length>0){if(Nt&&ee){let W=Et(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Rt,W.width,W.height)}for(let W=0,K=Gt.length;W<K;W++)mt=Gt[W],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt,Ct,mt):e.texImage2D(i.TEXTURE_2D,W,Rt,pt,Ct,mt);S.generateMipmaps=!1}else if(Nt){if(ee){let W=Et(et);e.texStorage2D(i.TEXTURE_2D,ot,Rt,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,pt,Ct,et);m(S)&&f(J),St.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,F){if(S.image.length!==6)return;let J=zt(A,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let Z=n.get(j);if(j.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let St=Xt.getPrimaries(Xt.workingColorSpace),ct=S.colorSpace===Mi?null:Xt.getPrimaries(S.colorSpace),ft=S.colorSpace===Mi||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Wt&&!et?pt[K]=g(S.image[K],!0,s.maxCubemapSize):pt[K]=et?S.image[K].image:S.image[K],pt[K]=ie(S,pt[K]);let Ct=pt[0],Rt=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),Gt=M(S.internalFormat,Rt,mt,S.colorSpace),Nt=S.isVideoTexture!==!0,ee=Z.__version===void 0||J===!0,I=j.dataReady,ot=R(S,Ct);lt(i.TEXTURE_CUBE_MAP,S);let W;if(Wt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Gt,Ct.width,Ct.height);for(let K=0;K<6;K++){W=pt[K].mipmaps;for(let dt=0;dt<W.length;dt++){let ht=W[dt];S.format!==Sn?Rt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Rt,mt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Gt,ht.width,ht.height,0,Rt,mt,ht.data)}}}else{if(W=S.mipmaps,Nt&&ee){W.length>0&&ot++;let K=Et(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Rt,mt,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,pt[K].width,pt[K].height,0,Rt,mt,pt[K].data);for(let dt=0;dt<W.length;dt++){let Lt=W[dt].image[K].image;Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Lt.width,Lt.height,Rt,mt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Gt,Lt.width,Lt.height,0,Rt,mt,Lt.data)}}else{Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,Rt,mt,pt[K]);for(let dt=0;dt<W.length;dt++){let ht=W[dt];Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Rt,mt,ht.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Gt,Rt,mt,ht.image[K])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function gt(A,S,F,J,j,Z){let St=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),ft=M(F.internalFormat,St,ct,F.colorSpace),Wt=n.get(S),et=n.get(F);if(et.__renderTarget=S,!Wt.__hasExternalTextures){let pt=Math.max(1,S.width>>Z),Ct=Math.max(1,S.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,ft,pt,Ct,S.depth,0,St,ct,null):e.texImage2D(j,Z,ft,pt,Ct,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,et.__webglTexture,0,Ft(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,et.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let J=S.depthTexture,j=J&&J.isDepthTexture?J.type:null,Z=v(S.stencilBuffer,j),St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Ft(S);Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,A)}else{let J=S.textures;for(let j=0;j<J.length;j++){let Z=J[j],St=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),ft=M(Z.internalFormat,St,ct,Z.colorSpace),Wt=Ft(S);F&&Ht(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,S.width,S.height):Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let j=J.__webglTexture,Z=Ft(S);if(S.depthTexture.format===Is)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===Bs)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function it(A){let S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=J}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[J],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,S,F){let J=n.get(A);S!==void 0&&gt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&it(A)}function wt(A){let S=A.texture,F=n.get(A),J=n.get(S);A.addEventListener("dispose",T);let j=A.textures,Z=A.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let ft=0;ft<S.mipmaps.length;ft++)F.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,ft=j.length;ct<ft;ct++){let Wt=n.get(j[ct]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ht(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){let ft=j[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);let Wt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=M(ft.internalFormat,Wt,et,ft.colorSpace,A.isXRRenderTarget===!0),Ct=Ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)gt(F.__webglFramebuffer[ct][ft],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else gt(F.__webglFramebuffer[ct],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,ft=j.length;ct<ft;ct++){let Wt=j[ct],et=n.get(Wt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),lt(i.TEXTURE_2D,Wt),gt(F.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),lt(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)gt(F.__webglFramebuffer[ft],A,S,i.COLOR_ATTACHMENT0,ct,ft);else gt(F.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ct,0);m(S)&&f(ct),e.unbindTexture()}A.depthBuffer&&it(A)}function It(A){let S=A.textures;for(let F=0,J=S.length;F<J;F++){let j=S[F];if(m(j)){let Z=b(A),St=n.get(j).__webglTexture;e.bindTexture(Z,St),f(Z),e.unbindTexture()}}}let Jt=[],D=[];function xe(A){if(A.samples>0){if(Ht(A)===!1){let S=A.textures,F=A.width,J=A.height,j=i.COLOR_BUFFER_BIT,Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(A),ct=S.length>1;if(ct)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);let Wt=n.get(S[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,j,i.NEAREST),l===!0&&(Jt.length=0,D.length=0,Jt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Jt.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);let Wt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ft(A){return Math.min(s.maxSamples,A.samples)}function Ht(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ie(A,S){let F=A.colorSpace,J=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Vs&&F!==Mi&&(Xt.getTransfer(F)===jt?(J!==Sn||j!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Et(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function Yx(i,t){function e(n,s=Mi){let r,a=Xt.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return i.BYTE;if(n===kd)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Sr)return i.HALF_FLOAT;if(n===Vd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Sn)return i.RGBA;if(n===Gd)return i.LUMINANCE;if(n===Wd)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===Xd)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===qd)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===xa||n===ya||n===Ma||n===Sa)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===zl||n===Vl||n===Hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Wl)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===ac||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yd||n===lc||n===cc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ac=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},$x={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($x)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new Oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Ei{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null,g=new Cc,m=e.getContextAttributes(),f=null,b=null,M=[],v=[],R=new Yt,E=null,T=new ze;T.viewport=new ge;let C=new ze;C.viewport=new ge;let x=[T,C],y=new Ac,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new mr,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new mr,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new mr,M[X]=Q),Q.getHandSpace()};function O(X){let Q=v.indexOf(X.inputSource);if(Q===-1)return;let gt=M[Q];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){let Q=v[X];Q!==null&&(v[X]=null,M[X].disconnect(Q))}P=null,z=null,g.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,b=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ei(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Bs:Is,gt=m.stencil?Fs:ts);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ei(u.textureWidth,u.textureHeight,{format:Sn,type:ti,depthTexture:new Ba(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let Q=0;Q<X.removed.length;Q++){let gt=X.removed[Q],rt=v.indexOf(gt);rt>=0&&(v[rt]=null,M[rt].disconnect(gt))}for(let Q=0;Q<X.added.length;Q++){let gt=X.added[Q],rt=v.indexOf(gt);if(rt===-1){for(let it=0;it<M.length;it++)if(it>=v.length){v.push(gt),rt=it;break}else if(v[it]===null){v[it]=gt,rt=it;break}if(rt===-1)break}let Tt=M[rt];Tt&&Tt.connect(gt)}}let B=new k,$=new k;function L(X,Q,gt){B.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);let rt=B.distanceTo($),Tt=Q.projectionMatrix.elements,it=gt.projectionMatrix.elements,_t=Tt[14]/(Tt[10]-1),wt=Tt[14]/(Tt[10]+1),It=(Tt[9]+1)/Tt[5],Jt=(Tt[9]-1)/Tt[5],D=(Tt[8]-1)/Tt[0],xe=(it[8]+1)/it[0],Ft=_t*D,Ht=_t*xe,At=rt/(-D+xe),ie=At*-D;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(At),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Et=_t+At,A=wt+At,S=Ft-ie,F=Ht+(rt-ie),J=It*wt/A*Et,j=Jt*wt/A*Et;X.projectionMatrix.makePerspective(S,F,J,j,Et,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,gt=X.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),y.near=C.near=T.near=Q,y.far=C.far=T.far=gt,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),T.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;let rt=X.parent,Tt=y.cameras;Y(y,rt);for(let it=0;it<Tt.length;it++)Y(Tt[it],rt);Tt.length===2?L(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),tt(X,y,rt)};function tt(X,Q,gt){gt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let st=null;function lt(X,Q){if(h=Q.getViewerPose(c||a),_=Q,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let it=0;it<gt.length;it++){let _t=gt[it],wt=null;if(p!==null)wt=p.getViewport(_t);else{let Jt=d.getViewSubImage(u,_t);wt=Jt.viewport,it===0&&(t.setRenderTargetTextures(b,Jt.colorTexture,u.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(b))}let It=x[it];It===void 0&&(It=new ze,It.layers.enable(it),It.viewport=new ge,x[it]=It),It.matrix.fromArray(_t.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(_t.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(wt.x,wt.y,wt.width,wt.height),it===0&&(y.matrix.copy(It.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(It)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let it=d.getDepthInformation(gt[0]);it&&it.isValid&&it.texture&&g.init(t,it,s.renderState)}}for(let gt=0;gt<M.length;gt++){let rt=v[gt],Tt=M[gt];rt!==null&&Tt!==void 0&&Tt.update(rt,Q,c||a)}st&&st(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let zt=new jd;zt.setAnimationLoop(lt),this.setAnimationLoop=function(X){st=X},this.dispose=function(){}}},qi=new ni,Kx=new _e;function jx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,qi.copy(v),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(qi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=s[b.id];v===void 0&&(_(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let R=M.program;n.updateUBOMapping(b,R);let E=t.render.frame;r[b.id]!==E&&(u(b),r[b.id]=E)}function h(b){let M=d();b.__bindingPointIndex=M;let v=i.createBuffer(),R=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],v=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,y=C.length;x<y;x++){let P=C[x];if(p(P,E,x,R)===!0){let z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let q=0;q<O.length;q++){let B=O[q],$=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+G,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,v,R){let E=b.value,T=M+"_"+v;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{let C=R[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(b){let M=b.uniforms,v=0,R=16;for(let T=0,C=M.length;T<C;T++){let x=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,P=x.length;y<P;y++){let z=x[y],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=O.length;G<q;G++){let B=O[G],$=g(B),L=v%R,Y=L%$.boundary,tt=L+Y;v+=Y,tt!==0&&R-tt<$.storage&&(v+=R-tt),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=$.storage}}}let E=v%R;return E>0&&(v+=R-E),b.__size=v,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ka=class{constructor(t={}){let{canvas:e=ig(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=wi,this.toneMappingExposure=1;let v=this,R=!1,E=0,T=0,C=null,x=-1,y=null,P=new ge,z=new ge,O=null,G=new Bt(0),q=0,B=e.width,$=e.height,L=1,Y=null,tt=null,st=new ge(0,0,B,$),lt=new ge(0,0,B,$),zt=!1,X=new Na,Q=!1,gt=!1,rt=new _e,Tt=new _e,it=new k,_t=new ge,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Jt(){return C===null?L:1}let D=n;function xe(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){let U="webgl2";if(D=xe(U,w),D===null)throw xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,Ht,At,ie,Et,A,S,F,J,j,Z,St,ct,ft,Wt,et,pt,Ct,Rt,mt,Gt,Nt,ee,I;function ot(){Ft=new mv(D),Ft.init(),Nt=new Yx(D,Ft),Ht=new cv(D,Ft,t,Nt),At=new Wx(D,Ft),Ht.reverseDepthBuffer&&u&&At.buffers.depth.setReversed(!0),ie=new vv(D),Et=new Ix,A=new qx(D,Ft,At,Et,Ht,Nt,ie),S=new uv(v),F=new pv(v),J=new Tg(D),ee=new ov(D,J),j=new gv(D,J,ie,ee),Z=new yv(D,j,J,ie),Rt=new xv(D,Ht,A),et=new hv(Et),St=new Px(v,S,F,Ft,Ht,ee,et),ct=new jx(v,Et),ft=new Dx,Wt=new kx(Ft),Ct=new av(v,S,F,At,Z,p,l),pt=new Hx(v,Z,Ht),I=new Qx(D,ie,Ht,At),mt=new lv(D,Ft,ie),Gt=new _v(D,Ft,ie),ie.programs=St.programs,v.capabilities=Ht,v.extensions=Ft,v.properties=Et,v.renderLists=ft,v.shadowMap=pt,v.state=At,v.info=ie}ot();let W=new Rc(v,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,U,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=U,e.width=Math.floor(w*L),e.height=Math.floor(U*L),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(B*L,$*L).floor()},this.setDrawingBufferSize=function(w,U,V){B=w,$=U,L=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,U,V,H){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,U,V,H),At.viewport(P.copy(st).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,U,V,H){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,U,V,H),At.scissor(z.copy(lt).multiplyScalar(L).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){At.setScissorTest(zt=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,U=!0,V=!0){let H=0;if(w){let N=!1;if(C!==null){let nt=C.texture.format;N=nt===$c||nt===Yc||nt===qc}if(N){let nt=C.texture.type,ut=nt===ti||nt===ts||nt===gr||nt===Fs||nt===Wc||nt===Xc,xt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Pt=xt.r,Dt=xt.g,Mt=xt.b;ut?(_[0]=Pt,_[1]=Dt,_[2]=Mt,_[3]=yt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Pt,g[1]=Dt,g[2]=Mt,g[3]=yt,D.clearBufferiv(D.COLOR,0,g))}else H|=D.COLOR_BUFFER_BIT}U&&(H|=D.DEPTH_BUFFER_BIT),V&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),Wt.dispose(),Et.dispose(),S.dispose(),F.dispose(),Z.dispose(),ee.dispose(),I.dispose(),St.dispose(),W.dispose(),W.removeEventListener("sessionstart",ah),W.removeEventListener("sessionend",oh),Pi.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=ie.autoReset,U=pt.enabled,V=pt.autoUpdate,H=pt.needsUpdate,N=pt.type;ot(),ie.autoReset=w,pt.enabled=U,pt.autoUpdate=V,pt.needsUpdate=H,pt.type=N}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){let U=w.target;U.removeEventListener("dispose",Lt),de(U)}function de(w){Pe(w),Et.remove(w)}function Pe(w){let U=Et.get(w).programs;U!==void 0&&(U.forEach(function(V){St.releaseProgram(V)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,H,N,nt){U===null&&(U=wt);let ut=N.isMesh&&N.matrixWorld.determinant()<0,xt=_f(w,U,V,H,N);At.setMaterial(H,ut);let yt=V.index,Pt=1;if(H.wireframe===!0){if(yt=j.getWireframeAttribute(V),yt===void 0)return;Pt=2}let Dt=V.drawRange,Mt=V.attributes.position,qt=Dt.start*Pt,ne=(Dt.start+Dt.count)*Pt;nt!==null&&(qt=Math.max(qt,nt.start*Pt),ne=Math.min(ne,(nt.start+nt.count)*Pt)),yt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,yt.count)):Mt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,Mt.count));let se=ne-qt;if(se<0||se===1/0)return;ee.setup(N,H,xt,V,yt);let He,$t=mt;if(yt!==null&&(He=J.get(yt),$t=Gt,$t.setIndex(He)),N.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*Jt()),$t.setMode(D.LINES)):$t.setMode(D.TRIANGLES);else if(N.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*Jt()),N.isLineSegments?$t.setMode(D.LINES):N.isLineLoop?$t.setMode(D.LINE_LOOP):$t.setMode(D.LINE_STRIP)}else N.isPoints?$t.setMode(D.POINTS):N.isSprite&&$t.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let bt=N._multiDrawStarts,On=N._multiDrawCounts,Zt=N._multiDrawCount,vn=yt?J.get(yt).bytesPerElement:1,rs=Et.get(H).currentProgram.getUniforms();for(let je=0;je<Zt;je++)rs.setValue(D,"_gl_DrawID",je),$t.render(bt[je]/vn,On[je])}else if(N.isInstancedMesh)$t.renderInstances(qt,se,N.count);else if(V.isInstancedBufferGeometry){let bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,On=Math.min(V.instanceCount,bt);$t.renderInstances(qt,se,On)}else $t.render(qt,se)};function Kt(w,U,V){w.transparent===!0&&w.side===Zn&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,Ar(w,U,V),w.side=Ti,w.needsUpdate=!0,Ar(w,U,V),w.side=Zn):Ar(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),f=Wt.get(V),f.init(U),M.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let nt=N.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){let xt=nt[ut];Kt(xt,V,N),H.add(xt)}else Kt(nt,V,N),H.add(nt)}),M.pop(),f=null,H},this.compileAsync=function(w,U,V=null){let H=this.compile(w,U,V);return new Promise(N=>{function nt(){if(H.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){N(w);return}setTimeout(nt,10)}Ft.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let _n=null;function Nn(w){_n&&_n(w)}function ah(){Pi.stop()}function oh(){Pi.start()}let Pi=new jd;Pi.setAnimationLoop(Nn),typeof self!="undefined"&&Pi.setContext(self),this.setAnimationLoop=function(w){_n=w,W.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},W.addEventListener("sessionstart",ah),W.addEventListener("sessionend",oh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,C),f=Wt.get(w,M.length),f.init(U),M.push(f),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,Q=et.init(this.clippingPlanes,gt),m=ft.get(w,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&to(nt,U,-1/0,v.sortObjects)}to(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Y,tt),It=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,It&&Ct.addToRenderList(m,w),this.info.render.frame++,Q===!0&&et.beginShadows();let V=f.state.shadowsArray;pt.render(V,w,U),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let nt=U.cameras;if(N.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){let yt=nt[ut];ch(H,N,w,yt)}It&&Ct.render(w);for(let ut=0,xt=nt.length;ut<xt;ut++){let yt=nt[ut];lh(m,w,yt,yt.viewport)}}else N.length>0&&ch(H,N,w,U),It&&Ct.render(w),lh(m,w,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,U),ee.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],Q===!0&&et.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function to(w,U,V,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){H&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let ut=Z.update(w),xt=w.material;xt.visible&&m.push(w,ut,xt,V,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let ut=Z.update(w),xt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),_t.copy(ut.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(xt)){let yt=ut.groups;for(let Pt=0,Dt=yt.length;Pt<Dt;Pt++){let Mt=yt[Pt],qt=xt[Mt.materialIndex];qt&&qt.visible&&m.push(w,ut,qt,V,_t.z,Mt)}}else xt.visible&&m.push(w,ut,xt,V,_t.z,null)}}let nt=w.children;for(let ut=0,xt=nt.length;ut<xt;ut++)to(nt[ut],U,V,H)}function lh(w,U,V,H){let N=w.opaque,nt=w.transmissive,ut=w.transparent;f.setupLightsView(V),Q===!0&&et.setGlobalState(v.clippingPlanes,V),H&&At.viewport(P.copy(H)),N.length>0&&Er(N,U,V),nt.length>0&&Er(nt,U,V),ut.length>0&&Er(ut,U,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ch(w,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Sr:ti,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let nt=f.state.transmissionRenderTarget[H.id],ut=H.viewport||P;nt.setSize(ut.z,ut.w);let xt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),It&&Ct.render(V);let yt=v.toneMapping;v.toneMapping=wi;let Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),Q===!0&&et.setGlobalState(v.clippingPlanes,H),Er(w,V,H),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Mt=0,qt=U.length;Mt<qt;Mt++){let ne=U[Mt],se=ne.object,He=ne.geometry,$t=ne.material,bt=ne.group;if($t.side===Zn&&se.layers.test(H.layers)){let On=$t.side;$t.side=Je,$t.needsUpdate=!0,hh(se,V,H,He,$t,bt),$t.side=On,$t.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}v.setRenderTarget(xt),v.setClearColor(G,q),Pt!==void 0&&(H.viewport=Pt),v.toneMapping=yt}function Er(w,U,V){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=w.length;N<nt;N++){let ut=w[N],xt=ut.object,yt=ut.geometry,Pt=H===null?ut.material:H,Dt=ut.group;xt.layers.test(V.layers)&&hh(xt,U,V,yt,Pt,Dt)}}function hh(w,U,V,H,N,nt){w.onBeforeRender(v,U,V,H,N,nt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,V,H,w,nt),N.transparent===!0&&N.side===Zn&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,v.renderBufferDirect(V,U,H,N,w,nt),N.side=Ti,N.needsUpdate=!0,v.renderBufferDirect(V,U,H,N,w,nt),N.side=Zn):v.renderBufferDirect(V,U,H,N,w,nt),w.onAfterRender(v,U,V,H,N,nt)}function Ar(w,U,V){U.isScene!==!0&&(U=wt);let H=Et.get(w),N=f.state.lights,nt=f.state.shadowsArray,ut=N.state.version,xt=St.getParameters(w,N.state,nt,U,V),yt=St.getProgramCacheKey(xt),Pt=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Lt),Pt=new Map,H.programs=Pt);let Dt=Pt.get(yt);if(Dt!==void 0){if(H.currentProgram===Dt&&H.lightsStateVersion===ut)return dh(w,xt),Dt}else xt.uniforms=St.getUniforms(w),w.onBeforeCompile(xt,v),Dt=St.acquireProgram(xt,yt),Pt.set(yt,Dt),H.uniforms=xt.uniforms;let Mt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=et.uniform),dh(w,xt),H.needsLights=xf(w),H.lightsStateVersion=ut,H.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Dt,H.uniformsList=null,Dt}function uh(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Ds.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function dh(w,U){let V=Et.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function _f(w,U,V,H,N){U.isScene!==!0&&(U=wt),A.resetTextureUnits();let nt=U.fog,ut=H.isMeshStandardMaterial?U.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vs,yt=(H.isMeshStandardMaterial?F:S).get(H.envMap||ut),Pt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Dt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color,se=wi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=v.toneMapping);let He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=He!==void 0?He.length:0,bt=Et.get(H),On=f.state.lights;if(Q===!0&&(gt===!0||w!==y)){let ln=w===y&&H.id===x;et.setState(H,w,ln)}let Zt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==On.state.version||bt.outputColorSpace!==xt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==yt||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Dt||bt.morphTargets!==Mt||bt.morphNormals!==qt||bt.morphColors!==ne||bt.toneMapping!==se||bt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,bt.__version=H.version);let vn=bt.currentProgram;Zt===!0&&(vn=Ar(H,U,N));let rs=!1,je=!1,Xs=!1,re=vn.getUniforms(),An=bt.uniforms;if(At.useProgram(vn.program)&&(rs=!0,je=!0,Xs=!0),H.id!==x&&(x=H.id,je=!0),rs||y!==w){At.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),rg(rt),ag(rt),re.setValue(D,"projectionMatrix",rt)):re.setValue(D,"projectionMatrix",w.projectionMatrix),re.setValue(D,"viewMatrix",w.matrixWorldInverse);let ii=re.map.cameraPosition;ii!==void 0&&ii.setValue(D,it.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&re.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,je=!0,Xs=!0)}if(N.isSkinnedMesh){re.setOptional(D,N,"bindMatrix"),re.setOptional(D,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),re.setValue(D,"boneTexture",ln.boneTexture,A))}N.isBatchedMesh&&(re.setOptional(D,N,"batchingTexture"),re.setValue(D,"batchingTexture",N._matricesTexture,A),re.setOptional(D,N,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",N._indirectTexture,A),re.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",N._colorsTexture,A));let qs=V.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Rt.update(N,V,vn),(je||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,re.setValue(D,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(An.envMap.value=yt,An.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),je&&(re.setValue(D,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&vf(An,Xs),nt&&H.fog===!0&&ct.refreshFogUniforms(An,nt),ct.refreshMaterialUniforms(An,H,L,$,f.state.transmissionRenderTarget[w.id]),Ds.upload(D,uh(bt),An,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(D,uh(bt),An,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&re.setValue(D,"center",N.center),re.setValue(D,"modelViewMatrix",N.modelViewMatrix),re.setValue(D,"normalMatrix",N.normalMatrix),re.setValue(D,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ln=H.uniformsGroups;for(let ii=0,si=ln.length;ii<si;ii++){let fh=ln[ii];I.update(fh,vn),I.bind(fh,vn)}}return vn}function vf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function xf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,V){Et.get(w.texture).__webglTexture=U,Et.get(w.depthTexture).__webglTexture=V;let H=Et.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let V=Et.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){C=w,E=U,T=V;let H=!0,N=null,nt=!1,ut=!1;if(w){let yt=Et.get(w);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(yt.__hasExternalTextures)A.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);let Dt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?N=Dt[U][V]:N=Dt[U],nt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[V]:N=Dt,P.copy(w.viewport),z.copy(w.scissor),O=w.scissorTest}else P.copy(st).multiplyScalar(L).floor(),z.copy(lt).multiplyScalar(L).floor(),O=zt;if(At.bindFramebuffer(D.FRAMEBUFFER,N)&&H&&At.drawBuffers(w,N),At.viewport(P),At.scissor(z),At.setScissorTest(O),nt){let yt=Et.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,V)}else if(ut){let yt=Et.get(w.texture),Pt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,Pt)}x=-1},this.readRenderTargetPixels=function(w,U,V,H,N,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){At.bindFramebuffer(D.FRAMEBUFFER,xt);try{let yt=w.texture,Pt=yt.format,Dt=yt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&V>=0&&V<=w.height-N&&D.readPixels(U,V,H,N,Nt.convert(Pt),Nt.convert(Dt),nt)}finally{let yt=C!==null?Et.get(C).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,H,N,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){let yt=w.texture,Pt=yt.format,Dt=yt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&V>=0&&V<=w.height-N){At.bindFramebuffer(D.FRAMEBUFFER,xt);let Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(U,V,H,N,Nt.convert(Pt),Nt.convert(Dt),0);let qt=C!==null?Et.get(C).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,qt);let ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sg(D,ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Mt),D.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let H=Math.pow(2,-V),N=Math.floor(w.image.width*H),nt=Math.floor(w.image.height*H),ut=U!==null?U.x:0,xt=U!==null?U.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ut,xt,N,nt),At.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,H=null,N=0){w.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let nt,ut,xt,yt,Pt,Dt,Mt,qt,ne,se=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(nt=V.max.x-V.min.x,ut=V.max.y-V.min.y,xt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Pt=V.min.y,Dt=V.isBox3?V.min.z:0):(nt=se.width,ut=se.height,xt=se.depth||1,yt=0,Pt=0,Dt=0),H!==null?(Mt=H.x,qt=H.y,ne=H.z):(Mt=0,qt=0,ne=0);let He=Nt.convert(U.format),$t=Nt.convert(U.type),bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=D.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let On=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vn=D.getParameter(D.UNPACK_SKIP_PIXELS),rs=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt);let Xs=w.isDataArrayTexture||w.isData3DTexture,re=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let An=Et.get(w),qs=Et.get(U),ln=Et.get(An.__renderTarget),ii=Et.get(qs.__renderTarget);At.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<xt;si++)Xs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,N,Dt+si),w.isDepthTexture?(re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,ne+si),D.blitFramebuffer(yt,Pt,nt,ut,Mt,qt,nt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST)):re?D.copyTexSubImage3D(bt,N,Mt,qt,ne+si,yt,Pt,nt,ut):D.copyTexSubImage2D(bt,N,Mt,qt,ne+si,yt,Pt,nt,ut);At.bindFramebuffer(D.READ_FRAMEBUFFER,null),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else re?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(bt,N,Mt,qt,ne,nt,ut,xt,He,$t,se.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,N,Mt,qt,ne,nt,ut,xt,He,se.data):D.texSubImage3D(bt,N,Mt,qt,ne,nt,ut,xt,He,$t,se):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Mt,qt,nt,ut,He,$t,se.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Mt,qt,se.width,se.height,He,se.data):D.texSubImage2D(D.TEXTURE_2D,N,Mt,qt,nt,ut,He,$t,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,On),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,rs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),N===0&&U.generateMipmaps&&D.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,H=null,N=0){return w.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,H,N)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,At.reset(),ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var za=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var xr=class extends Ci{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Va=new k,Ha=new k,Rd=new _e,dr=new _r,pa=new ns,Tl=new k,Pd=new k,Pc=class extends an{constructor(t=new on,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Va.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ha);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;Rd.copy(s).invert(),dr.copy(t.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){let f=h.getX(g),b=h.getX(g+1),M=ma(this,t,dr,l,f,b);M&&e.push(M)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(p),f=ma(this,t,dr,l,g,m);f&&e.push(f)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){let f=ma(this,t,dr,l,g,g+1);f&&e.push(f)}if(this.isLineLoop){let g=ma(this,t,dr,l,_-1,p);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ma(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Va.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),e.distanceSqToSegment(Va,Ha,Tl,Pd)>n)return;Tl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Tl);if(!(l<t.near||l>t.far))return{distance:l,point:Pd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Id=new k,Ld=new k,Ga=class extends Pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Id.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Id.distanceTo(Ld);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var yr=class extends Ci{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dd=new _e,Ic=new _r,ga=new ns,_a=new k,Mr=class extends an{constructor(t=new on,e=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Dd.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(Dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,g=p;_<g;_++){let m=c.getX(_);_a.fromBufferAttribute(d,m),Ud(_a,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,g=p;_<g;_++)_a.fromBufferAttribute(d,_),Ud(_a,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ud(i,t,e,n,s,r,a){let o=Ic.distanceSqToPoint(i);if(o<e){let l=new k;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function va(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ty(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uu:r=t,o=2*e-n;break;case Nu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:a=t,l=2*n-e;break;case Nu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,f=-u*m+2*u*g-u*_,b=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,M=(-1-p)*m+(1.5+p)*g+.5*_,v=p*m-p*g;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+b*a[c+R]+M*a[l+R]+v*a[d+R];return r}},Dc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Uc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wa:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ty(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let _=0;_!==n;++_){let g=e[d+_];if(g!==e[u+_]||g!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=uc;var is=class extends En{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=wa;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends En{};Nc.prototype.ValueTypeName="color";var Oc=class extends En{};Oc.prototype.ValueTypeName="number";var Fc=class extends zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wa=class extends En{InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends En{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=wa;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends En{};Bc.prototype.ValueTypeName="vector";var kc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},ey=new kc,zc=class{constructor(t){this.manager=t!==void 0?t:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jc="\\[\\]\\.:\\/",ny=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",iy="[^"+Jc.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",Kc),ry=/(WCOD+)?/.source.replace("WCOD",iy),ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),ly=new RegExp("^"+sy+ry+ay+oy+"$"),cy=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(t){let e=ly.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Vc;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nM=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);var Qc=Math.PI*2,jc=1337,Ve=()=>(jc=(jc*1664525+1013904223)%4294967296)/4294967296,Gs=()=>{jc=1337};function wr(i,t){let e=new Float32Array(i*3);for(let n=0;n<i;n++){let s=t(n,i);e[n*3]=s[0],e[n*3+1]=s[1],e[n*3+2]=s[2]}return e}function th(i,t=2.6){Gs();let e=Math.PI*(3-Math.sqrt(5));return wr(i,n=>{let s=1-n/(i-1)*2,r=Math.sqrt(1-s*s),a=e*n,o=t*(.97+Ve()*.06);return[Math.cos(a)*r*o,s*o,Math.sin(a)*r*o]})}function uy(i,t=1){return Gs(),wr(i,e=>{let n=e/i*Qc*3,s=2,r=3,a=.16,o=1.2+.55*Math.cos(r*n/3*1+0),l=(2+Math.cos(r*n/3))*Math.cos(s*n/3),c=(2+Math.cos(r*n/3))*Math.sin(s*n/3),h=Math.sin(r*n/3)*1.4;return[(l+(Ve()-.5)*a)*.85*t,(c+(Ve()-.5)*a)*.85*t,(h+(Ve()-.5)*a+o*0)*t]})}function dy(i){Gs();let t=Math.ceil(Math.sqrt(i));return wr(i,e=>{let n=e%t/t-.5,s=Math.floor(e/t)/t-.5;return[n*11,Math.sin(n*9)*.5+Math.cos(s*8)*.5-.6,s*7]})}function fy(i){Gs();let t=Math.round(Math.cbrt(i)),e=4.2/t;return wr(i,n=>{let s=n%t,r=Math.floor(n/t)%t,a=Math.floor(n/(t*t))%t;return[(s-t/2)*e+(Ve()-.5)*.08,(r-t/2)*e+(Ve()-.5)*.08,(a-t/2)*e+(Ve()-.5)*.08]})}function py(i){return Gs(),wr(i,t=>{let e=t/i*Qc*3.5,n=t%2?1:-1,s=t/i-.5,r=1.8+(Ve()-.5)*.25;return[Math.cos(e+(n>0?Math.PI:0))*r,s*9,Math.sin(e+(n>0?Math.PI:0))*r]})}function my(i){Gs();let t=1.9,e=1.4,n=1.5,s=1.3,r=(_,g,m)=>[_,g,m],a=[r(-t,-n/2,-e),r(t,-n/2,-e),r(t,-n/2,e),r(-t,-n/2,e),r(-t,n/2,-e),r(t,n/2,-e),r(t,n/2,e),r(-t,n/2,e)],o=[r(-t-.3,n/2,0),r(t+.3,n/2,0),r(-t-.3,n/2+s,0),r(t+.3,n/2+s,0)],l=[[a[0],a[1]],[a[1],a[2]],[a[2],a[3]],[a[3],a[0]],[a[4],a[5]],[a[5],a[6]],[a[6],a[7]],[a[7],a[4]],[a[0],a[4]],[a[1],a[5]],[a[2],a[6]],[a[3],a[7]],[r(-t,n/2,e),r(-t+0,n/2+s,0)],[r(t,n/2,e),r(t,n/2+s,0)],[r(-t,n/2,-e),r(-t,n/2+s,0)],[r(t,n/2,-e),r(t,n/2+s,0)],[r(-t,n/2+s,0),r(t,n/2+s,0)],[r(-.35,-n/2,e),r(-.35,.15,e)],[r(.35,-n/2,e),r(.35,.15,e)],[r(-.35,.15,e),r(.35,.15,e)],[r(-1.45,0,e),r(-.85,0,e)],[r(-1.45,.5,e),r(-.85,.5,e)],[r(-1.45,0,e),r(-1.45,.5,e)],[r(-.85,0,e),r(-.85,.5,e)],[r(.85,0,e),r(1.45,0,e)],[r(.85,.5,e),r(1.45,.5,e)],[r(.85,0,e),r(.85,.5,e)],[r(1.45,0,e),r(1.45,.5,e)],[r(1,n/2+.6,.2),r(1,n/2+1.5,.2)],[r(1.4,n/2+.4,.2),r(1.4,n/2+1.5,.2)],[r(1,n/2+1.5,.2),r(1.4,n/2+1.5,.2)]],c=l.map(([_,g])=>Math.hypot(g[0]-_[0],g[1]-_[1],g[2]-_[2])),h=c.reduce((_,g)=>_+g,0),d=Math.floor(i*.9),u=new Float32Array(i*3),p=0;for(l.forEach(([_,g],m)=>{let f=Math.max(2,Math.round(c[m]/h*d));for(let b=0;b<f&&p<d;b++,p++){let M=Ve();u[p*3]=_[0]+(g[0]-_[0])*M+(Ve()-.5)*.04,u[p*3+1]=_[1]+(g[1]-_[1])*M+(Ve()-.5)*.04,u[p*3+2]=_[2]+(g[2]-_[2])*M+(Ve()-.5)*.04}});p<i;p++){let _=Ve()*Qc,g=Ve()*2-1,m=3+Ve()*2.2,f=Math.sqrt(1-g*g);u[p*3]=Math.cos(_)*f*m,u[p*3+1]=g*m*.7,u[p*3+2]=Math.sin(_)*f*m}return u}var sf={sphere:th,torusKnot:uy,wave:dy,lattice:fy,helix:py,house:my},gy=Object.keys(sf);function rf(i){return Object.fromEntries(gy.map(t=>[t,sf[t](i)]))}var eh={home:{shape:"sphere",x:0,y:0,z:0,s:1,alpha:1,lat:1,spin:1,ry:0},about:{shape:"torusKnot",x:-3.4,y:0,z:-1,s:.8,alpha:.9,lat:0,spin:1,ry:0},skills:{shape:"lattice",x:3.8,y:0,z:-1,s:.85,alpha:.8,lat:0,spin:1,ry:0},work:{shape:"wave",x:0,y:-1.2,z:-5,s:1,alpha:.4,lat:0,spin:.2,ry:0},lab:{shape:"helix",x:3.8,y:0,z:-1,s:.8,alpha:.6,lat:0,spin:1,ry:0},journey:{shape:"sphere",x:3.9,y:0,z:-2,s:.65,alpha:.7,lat:0,spin:1,ry:0},contact:{shape:"house",x:0,y:-.3,z:0,s:1.15,alpha:1,lat:0,spin:0,ry:.35}},_y=`
uniform float uTime; uniform float uMix; uniform float uPx; uniform vec2 uMouse; uniform float uAspect;
attribute vec3 aA; attribute vec3 aB; attribute float aRand;
varying float vR; varying float vL;
void main(){
  float m = clamp((uMix - aRand * 0.4) / 0.6, 0.0, 1.0);
  m = m * m * (3.0 - 2.0 * m);
  vec3 p = mix(aA, aB, m);
  float sw = sin(m * 3.14159265);
  p += normalize(p + vec3(0.001)) * sw * (1.2 + aRand * 1.6);
  p.y += sin(uTime * 0.7 + p.x * 1.1 + aRand * 6.2831) * 0.07;
  p.x += cos(uTime * 0.5 + p.y * 1.3 + aRand * 6.2831) * 0.05;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 sp = clip.xy / clip.w;
  vec2 d = sp - uMouse; d.x *= uAspect;
  float push = smoothstep(0.42, 0.0, length(d));
  mv.xy += normalize(d + vec2(0.0001)) * push * 0.9;
  vL = push; vR = aRand;
  gl_PointSize = (1.6 + aRand * 2.4 + push * 2.0) * uPx * (9.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`,vy=`
uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3; uniform float uAlpha;
varying float vR; varying float vL;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c);
  if (r > 0.5) discard;
  float a = smoothstep(0.5, 0.0, r); a *= a;
  vec3 col = mix(uC1, uC2, vR);
  col = mix(col, uC3, step(0.93, vR) * 0.9 + vL * 0.6);
  gl_FragColor = vec4(col, a * uAlpha);
}`;function af(i,{reduced:t=!1}={}){let e=document.createElement("canvas");if(!(e.getContext&&(e.getContext("webgl2")||e.getContext("webgl"))))return null;let n;try{n=new ka({canvas:i,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}let s=window.innerWidth<820,r=s?3500:7e3,a=rf(r);n.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1.5:1.75)),n.setClearColor(0,0);let o=new za,l=new ze(55,1,.1,100);l.position.z=9;let c=new jn;o.add(c);let h=new on,d=new Float32Array(r);for(let it=0;it<r;it++)d[it]=Math.random();h.setAttribute("position",new be(new Float32Array(r*3),3)),h.setAttribute("aA",new be(new Float32Array(a.sphere),3)),h.setAttribute("aB",new be(new Float32Array(a.sphere),3)),h.setAttribute("aRand",new be(d,1));let u={uTime:{value:0},uMix:{value:1},uPx:{value:n.getPixelRatio()},uAspect:{value:1},uMouse:{value:new Yt(9,9)},uAlpha:{value:1},uC1:{value:new Bt("#8B6CFF")},uC2:{value:new Bt("#5CFFC8")},uC3:{value:new Bt("#FF7A59")}},p=new mn({uniforms:u,vertexShader:_y,fragmentShader:vy,transparent:!0,depthWrite:!1,blending:Qi}),_=new Mr(h,p);_.frustumCulled=!1,c.add(_);let g=s?110:190,m=th(g,2.15),f=[];for(let it=0;it<g;it++){let _t=[];for(let wt=0;wt<g;wt++){if(it===wt)continue;let It=Math.hypot(m[it*3]-m[wt*3],m[it*3+1]-m[wt*3+1],m[it*3+2]-m[wt*3+2]);_t.push([It,wt])}_t.sort((wt,It)=>wt[0]-It[0]),_t.slice(0,3).forEach(([,wt])=>{it<wt&&f.push(it,wt)})}let b=new Float32Array(f.length*3);f.forEach((it,_t)=>{b[_t*3]=m[it*3],b[_t*3+1]=m[it*3+1],b[_t*3+2]=m[it*3+2]});let M=new on;M.setAttribute("position",new be(b,3));let v=new Ga(M,new xr({color:"#8B6CFF",transparent:!0,opacity:.25,depthWrite:!1,blending:Qi})),R=new on;R.setAttribute("position",new be(new Float32Array(m),3));let E=new Mr(R,new yr({color:"#5CFFC8",size:.07,transparent:!0,opacity:.95,depthWrite:!1,blending:Qi})),T=new jn;T.add(v,E),c.add(T);let C="sphere",x=!1,y=null,P="home",z=0,O=1,G=0,q=new Yt(0,0),B=new Yt(9,9),$=1,L=()=>window.innerWidth<820;function Y(it,_t){let wt=eh[it]||eh.home,It=L()?.25:1,Jt=L()?.78:1,D=_t||t?.01:1.7;Se.to(c.position,{x:wt.x*It,y:wt.y,z:wt.z,duration:D,ease:"power3.inOut",overwrite:!0}),Se.to(c.scale,{x:wt.s*Jt,y:wt.s*Jt,z:wt.s*Jt,duration:D,ease:"power3.inOut",overwrite:!0}),Se.to(u.uAlpha,{value:wt.alpha*(L()?.8:1),duration:D,overwrite:!0});let xe={v:$};Se.to(xe,{v:wt.lat,duration:D,onUpdate(){$=xe.v,v.material.opacity=.25*xe.v,E.material.opacity=.95*xe.v,T.visible=xe.v>.01}}),Se.to({s:O},{s:wt.spin,duration:D,onUpdate(){O=this.targets()[0].s}}),Se.to({r:G},{r:wt.ry,duration:D,onUpdate(){G=this.targets()[0].r}}),tt(wt.shape,_t)}function tt(it,_t){if(!(it===C&&!x)){if(x){y=it;return}x=!0,h.attributes.aA.array.set(a[C]),h.attributes.aB.array.set(a[it]),h.attributes.aA.needsUpdate=h.attributes.aB.needsUpdate=!0,u.uMix.value=0,Se.to(u.uMix,{value:1,duration:_t||t?.01:1.9,ease:"power2.inOut",onComplete(){if(C=it,x=!1,y&&y!==C){let wt=y;y=null,tt(wt)}else y=null}})}}function st(it){!eh[it]||it===P||(P=it,Y(it,!1))}function lt({c1:it,c2:_t,c3:wt,dark:It}){[["uC1",it],["uC2",_t],["uC3",wt]].forEach(([D,xe])=>{let Ft=new Bt(xe);Se.to(u[D].value,{r:Ft.r,g:Ft.g,b:Ft.b,duration:.9})});let Jt=It?Qi:bi;p.blending=Jt,v.material.blending=Jt,E.material.blending=Jt,p.needsUpdate=v.material.needsUpdate=E.material.needsUpdate=!0,v.material.color.set(it),E.material.color.set(_t)}function zt(it,_t){q.set(it,_t)}function X(){let it=window.innerWidth,_t=window.innerHeight;n.setSize(it,_t,!1),l.aspect=it/_t,l.updateProjectionMatrix(),u.uAspect.value=it/_t,u.uPx.value=n.getPixelRatio(),Y(P,!0)}let Q=0,gt=performance.now();function rt(it){Q=requestAnimationFrame(rt);let _t=Math.min(.05,(it-gt)/1e3);gt=it,z+=t?0:_t,u.uTime.value=z,B.lerp(q,.08),u.uMouse.value.set(q.x>5?9:B.x,q.x>5?9:B.y),c.rotation.y=z*.09*O+G+B.x*.25,c.rotation.x=-B.y*.14+Math.sin(z*.2)*.04*O,T.rotation.y=-z*.05,l.position.x=B.x*.35,l.position.y=B.y*.2,l.lookAt(0,0,0),n.render(o,l)}X(),Y("home",!0),Q=requestAnimationFrame(rt);let Tt=()=>{document.hidden?cancelAnimationFrame(Q):(gt=performance.now(),Q=requestAnimationFrame(rt))};return document.addEventListener("visibilitychange",Tt),{setSection:st,setTheme:lt,setPointer:zt,resize:X,destroy(){cancelAnimationFrame(Q),document.removeEventListener("visibilitychange",Tt),n.dispose()}}}function xy(i){let t=0;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Tr(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Un(i,t,e,n,s,r=.5){let a=i.createRadialGradient(t,e,0,t,e,n);a.addColorStop(0,s+Math.round(r*255).toString(16).padStart(2,"0")),a.addColorStop(1,s+"00"),i.fillStyle=a,i.fillRect(t-n,e-n,n*2,n*2)}var of={docs(i,[t,e],n){for(let s=0;s<3;s++){i.save(),i.translate(400,520),i.rotate(-.2+s*.2),i.translate(-170,-230+s*20),Tr(i,0,0,340,440,22),i.fillStyle=`rgba(255,255,255,${.08+s*.05})`,i.fill(),i.strokeStyle=t+"99",i.lineWidth=2,i.stroke();for(let r=0;r<9;r++)i.fillStyle=r===3&&s===2?e:"rgba(255,255,255,.28)",i.fillRect(34,46+r*38,r%3===2?170:270,10);i.restore()}i.lineWidth=12,i.strokeStyle=e,i.beginPath(),i.arc(520,640,86,0,7),i.stroke(),i.lineCap="round",i.beginPath(),i.moveTo(582,702),i.lineTo(660,780),i.stroke(),Un(i,520,640,160,e,.35)},pearls(i,[t,e],n){i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=3,i.beginPath(),i.moveTo(60,700),i.bezierCurveTo(240,360,560,360,740,700),i.stroke();for(let s=0;s<9;s++){let r=s/8,a=(1-r)**3*60+3*(1-r)**2*r*240+3*(1-r)*r*r*560+r**3*740,o=(1-r)**3*700+3*(1-r)**2*r*360+3*(1-r)*r*r*360+r**3*700,l=34+Math.sin(r*Math.PI)*30,c=i.createRadialGradient(a-l*.35,o-l*.35,l*.1,a,o,l);c.addColorStop(0,"#fff"),c.addColorStop(.5,s%2?t:e),c.addColorStop(1,"#00000066"),i.fillStyle=c,i.beginPath(),i.arc(a,o,l,0,7),i.fill(),Un(i,a,o,l*2.2,s%2?t:e,.18)}},bars(i,[t,e],n){i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=1;for(let r=0;r<6;r++)i.beginPath(),i.moveTo(90,330+r*90),i.lineTo(710,330+r*90),i.stroke();let s=[];for(let r=0;r<7;r++){let a=80+n()*240,o=110+r*85,l=i.createLinearGradient(0,780-a,0,780);l.addColorStop(0,t),l.addColorStop(1,t+"22"),i.fillStyle=l,Tr(i,o,780-a,48,a,10),i.fill(),s.push([o+24,700-n()*300])}i.strokeStyle=e,i.lineWidth=6,i.lineJoin="round",i.beginPath(),s.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.stroke(),s.forEach(([r,a])=>{i.fillStyle="#fff",i.beginPath(),i.arc(r,a,9,0,7),i.fill()}),Un(i,400,520,320,e,.18)},pulse(i,[t,e],n){for(let s=1;s<5;s++)i.strokeStyle=`rgba(255,255,255,${.14-s*.025})`,i.lineWidth=2,i.beginPath(),i.arc(400,520,s*100,0,7),i.stroke();i.strokeStyle=t,i.lineWidth=8,i.lineJoin="round",i.lineCap="round",i.beginPath(),i.moveTo(40,520),[[200,520],[250,520],[290,400],[340,680],[390,330],[440,560],[480,520],[600,520],[640,470],[680,520],[760,520]].forEach(([s,r])=>i.lineTo(s,r)),i.stroke(),Un(i,390,330,200,t,.4),i.fillStyle=e,Tr(i,360,760,80,24,6),i.fill(),Tr(i,388,732,24,80,6),i.fill()},radar(i,[t,e],n){for(let r=1;r<5;r++)i.strokeStyle=`rgba(255,255,255,${.22-r*.04})`,i.lineWidth=2,i.beginPath(),i.arc(400,520,r*85,0,7),i.stroke();i.strokeStyle="rgba(255,255,255,.18)",i.beginPath(),i.moveTo(400,150),i.lineTo(400,890),i.moveTo(30,520),i.lineTo(770,520),i.stroke();let s=i.createLinearGradient(400,520,700,300);s.addColorStop(0,t+"88"),s.addColorStop(1,t+"00"),i.fillStyle=s,i.beginPath(),i.moveTo(400,520),i.arc(400,520,340,-1.1,-.35),i.closePath(),i.fill();for(let r=0;r<9;r++){let a=n()*6.28,o=60+n()*280;Un(i,400+Math.cos(a)*o,520+Math.sin(a)*o,36,e,.6),i.fillStyle="#fff",i.beginPath(),i.arc(400+Math.cos(a)*o,520+Math.sin(a)*o,6,0,7),i.fill()}},chat(i,[t,e],n){[[90,330,380,!1],[330,440,380,!0],[90,550,300,!1],[330,660,380,!0],[90,770,200,!1]].forEach(([r,a,o,l],c)=>{Tr(i,r,a,o,76,30),i.fillStyle=l?t:"rgba(255,255,255,.12)",i.fill(),i.fillStyle=l?"rgba(0,0,0,.45)":"rgba(255,255,255,.5)",i.fillRect(r+28,a+30,o-90-c%2*50,12)}),[0,1,2].forEach(r=>{i.fillStyle=e,i.beginPath(),i.arc(130+r*34,840,9,0,7),i.fill()}),Un(i,520,500,280,t,.2)},nodes(i,[t,e],n){let s=[];for(let r=0;r<38;r++)s.push([90+n()*620,230+n()*640,4+n()*9]);i.lineWidth=1.5,s.forEach((r,a)=>{s.forEach((o,l)=>{l>a&&Math.hypot(r[0]-o[0],r[1]-o[1])<190&&(i.strokeStyle="rgba(255,255,255,.2)",i.beginPath(),i.moveTo(r[0],r[1]),i.lineTo(o[0],o[1]),i.stroke())})}),i.strokeStyle=e,i.lineWidth=5,i.beginPath(),[0,7,15,22,30].forEach((r,a)=>a?i.lineTo(s[r][0],s[r][1]):i.moveTo(s[r][0],s[r][1])),i.stroke(),s.forEach(([r,a,o],l)=>{Un(i,r,a,o*4,l%5?t:e,.35),i.fillStyle=l%5?"#fff":e,i.beginPath(),i.arc(r,a,o,0,7),i.fill()})},vase(i,[t,e],n){let s=(r,a,o,l)=>{i.save(),i.translate(r,a),i.scale(o,o),i.beginPath(),i.moveTo(-40,-330),i.lineTo(40,-330),i.bezierCurveTo(40,-250,150,-200,150,-60),i.bezierCurveTo(150,60,70,110,70,140),i.lineTo(-70,140),i.bezierCurveTo(-70,110,-150,60,-150,-60),i.bezierCurveTo(-150,-200,-40,-250,-40,-330),i.closePath();let c=i.createLinearGradient(-150,0,150,0);c.addColorStop(0,l+"aa"),c.addColorStop(.35,"#ffffffcc"),c.addColorStop(.6,l),c.addColorStop(1,"#00000088"),i.fillStyle=c,i.fill(),i.strokeStyle="rgba(0,0,0,.25)",i.lineWidth=3;for(let h=0;h<4;h++)i.beginPath(),i.ellipse(0,-80+h*36,140-h*10,14,0,0,7),i.stroke();i.restore()};i.fillStyle="rgba(0,0,0,.35)",i.beginPath(),i.ellipse(400,870,260,34,0,0,7),i.fill(),s(280,790,1,t),s(560,810,.62,e),Un(i,400,480,300,t,.2)}};function nh(i){let t=document.createElement("canvas");t.width=800,t.height=1e3;let e=t.getContext&&t.getContext("2d");if(!e)return"";let n=xy(i.id),[s,r,a]=i.palette,o=e.createLinearGradient(0,0,800,1e3);o.addColorStop(0,a),o.addColorStop(1,"#05060b"),e.fillStyle=o,e.fillRect(0,0,800,1e3),Un(e,640,160,420,s,.35),Un(e,120,900,380,r,.22),e.strokeStyle="rgba(255,255,255,.05)",e.lineWidth=1;for(let l=0;l<800;l+=50)e.beginPath(),e.moveTo(l,0),e.lineTo(l,1e3),e.stroke();for(let l=0;l<1e3;l+=50)e.beginPath(),e.moveTo(0,l),e.lineTo(800,l),e.stroke();e.font="800 360px Syne, Arial Black, sans-serif",e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.12)",e.strokeText(String(i.index).padStart(2,"0"),40,330),(of[i.motif]||of.nodes)(e,[s,r],n),e.fillStyle="rgba(255,255,255,.04)";for(let l=0;l<900;l++)e.fillRect(n()*800,n()*1e3,2,2);return e.font='600 22px "Space Grotesk", Arial, sans-serif',e.fillStyle="rgba(255,255,255,.75)",e.fillText((i.category==="ai"?"AI \xB7 LLM":"WEB \xB7 FULL-STACK")+"  /  "+i.year,48,66),t.toDataURL("image/jpeg",.86)}var yy=new Set("a an and are as at be by can did do does for from has have how i in is it its me my of on or she her he his that the their them this to was what when where which who why will with you your about tell show give iman umar please".split(" ")),My={intern:"internship",interned:"internship",jobs:"experience",job:"experience",work:"experience",uni:"education",university:"education",college:"education",degree:"education",mail:"email",hire:"available",hiring:"available",reach:"contact",phone:"contact",skill:"skills",stack:"skills",tech:"skills",technologies:"skills",languages:"skills",built:"project",build:"project",made:"project",apps:"project",app:"project",ecommerce:"ceramichub",shop:"ceramichub",store:"ceramichub",finance:"finwise",budget:"finwise",money:"finwise",medical:"mediguide",health:"mediguide",symptom:"mediguide",symptoms:"mediguide",research:"marketmind",market:"marketmind",support:"supportpearlz",pearl:"supportpearlz",docs:"minddesk",documents:"minddesk",excel:"minddesk",pdf:"ragagent",pdfs:"ragagent",docmind:"ragagent",chatgpt:"customai",chat:"customai",resume:"cv"};function lf(i){return(i||"").toLowerCase().replace(/[^a-z0-9+#\s]/g," ").split(/\s+/).filter(Boolean).map(t=>My[t]||t).map(t=>t.length>4?t.replace(/(ing|ed|es|s)$/,""):t).filter(t=>t&&!yy.has(t))}var $a=class{constructor(t){this.docs=t,this.tokens=t.map(e=>lf(`${e.title} ${e.title} ${e.tags} ${e.text}`)),this.avg=this.tokens.reduce((e,n)=>e+n.length,0)/Math.max(1,t.length),this.df=new Map,this.tokens.forEach(e=>new Set(e).forEach(n=>this.df.set(n,(this.df.get(n)||0)+1)))}search(t,e=3){let n=lf(t),s=this.docs.length,r=1.4,a=.75;return this.docs.map((l,c)=>{let h=new Map;this.tokens[c].forEach(u=>h.set(u,(h.get(u)||0)+1));let d=0;return n.forEach(u=>{let p=h.get(u)||0;if(!p)return;let _=Math.log(1+(s-(this.df.get(u)||0)+.5)/((this.df.get(u)||0)+.5));d+=_*(p*(r+1)/(p+r*(1-a+a*this.tokens[c].length/this.avg)))}),{doc:l,score:d}}).filter(l=>l.score>0).sort((l,c)=>c.score-l.score).slice(0,e)}};function cf(i,t){let e=i.search(t,3);if(!e.length||e[0].score<.6)return{text:"I only know what is on this page \u2014 Iman's projects, skills, internships and how to reach her. Try asking about one of those, or type 'help'.",sources:[]};let n=e[0].doc,s=e.slice(1).filter(r=>r.score>e[0].score*.45).map(r=>r.doc.title);return{text:n.text,sources:[n.title,...s]}}var Sy=i=>`You are the portfolio assistant for ${i}. Answer ONLY using the CONTEXT passages. If the answer is not in the context, say you do not know and suggest contacting ${i}. Be concise (under 120 words), friendly and factual. Never invent employers, dates, links or skills.`;async function hf(i,t=fetch){try{let e=await t("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${i}`}});return e.ok?{ok:!0}:e.status===401?{ok:!1,error:"OpenAI rejected this key."}:{ok:!1,error:`OpenAI answered with status ${e.status}.`}}catch{return{ok:!1,error:"Could not reach OpenAI (network or browser block)."}}}async function uf({key:i,model:t,name:e,question:n,passages:s,history:r=[],onToken:a,signal:o,fetchImpl:l=fetch}){var m,f,b;let c=s.map((M,v)=>`[${v+1}] ${M.title}: ${M.text}`).join(`

`),h=[{role:"system",content:`${Sy(e)}

CONTEXT:
${c}`},...r.slice(-6),{role:"user",content:n}],d=await l("https://api.openai.com/v1/chat/completions",{method:"POST",signal:o,headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({model:t,messages:h,stream:!0,temperature:.3,max_tokens:400})});if(!d.ok){let M={401:"The API key was rejected.",429:"Rate limit or quota reached on this key."};throw new Error(M[d.status]||`OpenAI error (status ${d.status}).`)}let u=d.body.getReader(),p=new TextDecoder,_="",g="";for(;;){let{value:M,done:v}=await u.read();if(v)break;_+=p.decode(M,{stream:!0});let R=_.split(`
`);_=R.pop();for(let E of R){let T=E.trim();if(!T.startsWith("data:"))continue;let C=T.slice(5).trim();if(C==="[DONE]")return g;try{let x=(b=(f=(m=JSON.parse(C).choices)==null?void 0:m[0])==null?void 0:f.delta)==null?void 0:b.content;x&&(g+=x,a==null||a(x))}catch{}}}return g}function df({config:i,projects:t,knowledge:e,suggestions:n,themes:s,setTheme:r,openProject:a,reduced:o}){let l=document.getElementById("term");if(!l)return;let c=l.querySelector("#term-out"),h=l.querySelector("#term-form"),d=l.querySelector("#term-in"),u=document.getElementById("term-mode"),p=document.getElementById("term-chips");if(!c||!h||!d)return;let _=new $a(e),g="",m="boot",f=!1,b=!0,M=null,v=[],R=[],E=-1,T=()=>{c.scrollTop=c.scrollHeight};function C(L,Y=""){let tt=document.createElement("div");return tt.className=`ln ${Y}`.trim(),tt.textContent=L,c.appendChild(tt),T(),tt}function x(L){m=L,u&&(u.textContent=L==="gpt"?"GPT MODE":L==="local"?"LOCAL MODE":"LOCKED",u.dataset.mode=L),p==null||p.querySelectorAll("button").forEach(Y=>{Y.disabled=L==="boot"})}function y(L,Y){return new Promise(tt=>{if(o)return L.textContent=Y,T(),tt();let st=0,lt=Math.max(2,Math.round(Y.length/90)),zt=setInterval(()=>{st+=lt,L.textContent=Y.slice(0,st),T(),st>=Y.length&&(clearInterval(zt),tt())},16)})}function P(){x("boot"),b=!0,d.type="password",d.placeholder="Paste your sk-\u2026 key, or type skip",C("iman-lab \u25B8 a tiny RAG console about Iman\u2019s work","dim"),C("GPT mode needs your OpenAI API key. It stays in this tab\u2019s memory and is sent only to api.openai.com."),C("Paste the key and press Enter, or type  skip  to use local mode (no key, no network).","hint")}function z(L){b=!1,d.type="text",d.placeholder="Ask about projects, skills, internships\u2026 (type help)",x(L),C(L==="gpt"?"GPT mode on. Answers are written by the model from retrieved notes.":"Local mode on. Answers are matched from curated notes (no AI model involved).","ok"),C('Try: "What did Iman build?"  \xB7  type help for commands.',"hint")}async function O(L){if(L.toLowerCase()==="skip")return z("local");if(!/^sk-/.test(L)){C("That does not look like an OpenAI key (it starts with sk-). Try again or type skip.","err");return}f=!0;let Y=C("Verifying key with OpenAI\u2026","dim"),tt=await hf(L);f=!1,Y.remove(),tt.ok?(g=L,z("gpt")):C(`${tt.error} Try again or type skip.`,"err")}let G=["help          show this list","projects      list all projects (open <id> opens one)","skills        my tech stack","about         who I am","contact       how to reach me","cv            download the CV",`theme <${Object.keys(s).join("|")}>  switch theme`,"mode          show the current mode","key           enter an API key for GPT mode","forget        remove the key from memory","clear         clear the screen"];async function q(L){let[Y,...tt]=L.split(/\s+/),st=tt.join(" ").toLowerCase();switch(Y.toLowerCase()){case"help":return G.forEach(lt=>C(lt,"dim")),!0;case"clear":return c.textContent="",!0;case"mode":return C(`Current mode: ${m}${m==="gpt"?` (${i.openaiModel})`:""}`,"ok"),!0;case"key":return g="",P(),!0;case"forget":return g="",R.length=0,C("Key removed from memory.","ok"),m==="gpt"&&x("local"),!0;case"projects":return t.forEach(lt=>C(`${lt.id.padEnd(14)} ${lt.title} \u2014 ${lt.kicker}`)),C("Type  open <id>  to open a project.","hint"),!0;case"open":{let lt=t.find(zt=>zt.id===st);return lt?(a(lt.id),C(`Opening ${lt.title}\u2026`,"ok")):C("No such project id. Type projects.","err"),!0}case"theme":return s[st]?(r(st),C(`Theme \u2192 ${st}`,"ok")):C(`Choose: ${Object.keys(s).join(", ")}`,"err"),!0;case"cv":{let lt=document.createElement("a");return lt.href=i.cv,lt.download="",document.body.appendChild(lt),lt.click(),lt.remove(),C("Downloading CV\u2026","ok"),!0}case"skills":case"about":case"contact":return await B(Y),!0;default:return!1}}async function B(L){f=!0;let Y=_.search(L,4),tt=C("","ai");try{if(m==="gpt"&&Y.length){M=new AbortController,tt.classList.add("stream");let st=await uf({key:g,model:i.openaiModel,name:i.name,question:L,passages:Y.map(lt=>lt.doc),history:R,onToken:lt=>{tt.textContent+=lt,T()},signal:M.signal});R.push({role:"user",content:L},{role:"assistant",content:st}),tt.classList.remove("stream"),C("\u21B3 sources: "+Y.map(lt=>lt.doc.title).join(" \xB7 "),"src")}else{let st=cf(_,L);await y(tt,st.text),st.sources.length&&C("\u21B3 sources: "+st.sources.join(" \xB7 "),"src")}}catch(st){tt.classList.remove("stream"),tt.textContent||tt.remove(),C(`${st.message||"Request failed."} Type  key  to try another key, or  forget  to go local.`,"err")}f=!1}async function $(L){let Y=L.trim();if(!(!Y||f)){if(b){C(Y.startsWith("sk-")?"\u25B8 \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022":`\u25B8 ${Y}`,"me"),await O(Y);return}C(`\u25B8 ${Y}`,"me"),v.unshift(Y),E=-1,await q(Y)||await B(Y)}}return h.addEventListener("submit",L=>{L.preventDefault();let Y=d.value;d.value="",$(Y)}),d.addEventListener("keydown",L=>{b||!v.length||(L.key==="ArrowUp"&&(E=Math.min(E+1,v.length-1),d.value=v[E],L.preventDefault()),L.key==="ArrowDown"&&(E=Math.max(E-1,-1),d.value=E<0?"":v[E],L.preventDefault()))}),p&&n.forEach(L=>{let Y=document.createElement("button");Y.type="button",Y.textContent=L,Y.addEventListener("click",()=>$(L)),p.appendChild(Y)}),l.addEventListener("click",L=>{L.target.closest("button")||d.focus({preventScroll:!0})}),P(),{run:$}}var kt=(i,t=document)=>t.querySelector(i),ve=(i,t=document)=>[...t.querySelectorAll(i)],ue=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),sh=i=>window.matchMedia?window.matchMedia(i):{matches:!1,addEventListener(){}},Ke=sh("(prefers-reduced-motion: reduce)").matches,Qa=sh("(pointer: fine)").matches,ja={nocturne:"Nocturne",pearl:"Pearl",marigold:"Aubergine & Marigold"},Ee=null,gn=null;function by(){ve("[data-year]").forEach(a=>a.textContent=new Date().getFullYear()),ve("[data-email]").forEach(a=>{a.href=`mailto:${Ue.email}`,a.hasAttribute("data-show")&&(a.textContent=Ue.email)}),ve("[data-cv]").forEach(a=>{a.href=Ue.cv,a.setAttribute("download","")});let i={github:Ue.github,linkedin:Ue.linkedin,instagram:Ue.instagram,whatsapp:Ue.whatsapp?`https://wa.me/${Ue.whatsapp}`:""};ve("[data-social]").forEach(a=>{let o=i[a.dataset.social];o?(a.href=o,a.target="_blank",a.rel="noopener noreferrer"):a.remove()});let t=kt("#stats");t&&(t.innerHTML=Tu.map(a=>`<div class="stat"><b data-count="${a.n}">0</b><span>${ue(a.label)}</span></div>`).join(""));let e=kt("#caps");e&&(e.innerHTML=Eu.map(a=>`<article class="cap rv" data-tilt><span class="cap-k">${a.k}</span><h3>${ue(a.t)}</h3><p>${ue(a.d)}</p></article>`).join(""));let n=kt("#stack");n&&(n.innerHTML=$o.map(([a,o])=>`<li class="chip rv" data-g="${ue(o)}"><i></i>${ue(a)}<small>${ue(o)}</small></li>`).join(""));let s=kt("#timeline");s&&(s.innerHTML=Au.map(a=>`<li class="tl-item rv"><time>${ue(a.when)}</time><h3>${ue(a.t)}</h3><p>${ue(a.d)}</p></li>`).join(""));let r=kt("#marquee-track");if(r){let a=$o.map(([o])=>`<span>${ue(o)}</span><i>\u2726</i>`).join("");r.innerHTML=a+a}}function wy(){ve("[data-split]").forEach(i=>{let t=i.textContent.trim();i.setAttribute("aria-label",t),i.textContent="",[...t].forEach((e,n)=>{let s=document.createElement("span");s.className="char",s.setAttribute("aria-hidden","true"),s.style.setProperty("--i",n),s.textContent=e,i.appendChild(s)})})}function Ty(){let i=kt("#role");if(!i)return;if(Ke){i.textContent=Xr[0];return}let t=0,e=0,n=!1,s=()=>{let r=Xr[t];if(i.textContent=r.slice(0,e),!n&&e===r.length)return n=!0,setTimeout(s,1400);n&&e===0&&(n=!1,t=(t+1)%Xr.length),e+=n?-1:1,setTimeout(s,n?28:65)};s()}function pf(){let i=getComputedStyle(document.body),t=e=>i.getPropertyValue(e).trim();return{c1:t("--a1")||"#8B6CFF",c2:t("--a2")||"#5CFFC8",c3:t("--a3")||"#FF7A59",dark:document.body.dataset.theme!=="pearl"}}function ih(i,t){var n,s;if(!ja[i]||document.body.dataset.theme===i)return;let e=()=>{document.body.dataset.theme=i;try{localStorage.setItem("iu-theme",i)}catch{}ve(".sw").forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.theme===i))),Ee==null||Ee.setTheme(pf());let r=kt('meta[name="theme-color"]');r&&(r.content=getComputedStyle(document.body).getPropertyValue("--bg").trim())};if(document.startViewTransition&&!Ke){let r=(n=t==null?void 0:t.x)!=null?n:innerWidth-60,a=(s=t==null?void 0:t.y)!=null?s:40,o=Math.hypot(Math.max(r,innerWidth-r),Math.max(a,innerHeight-a));document.startViewTransition(e).ready.then(()=>document.documentElement.animate({clipPath:[`circle(0px at ${r}px ${a}px)`,`circle(${o}px at ${r}px ${a}px)`]},{duration:900,easing:"cubic-bezier(.7,0,.2,1)",pseudoElement:"::view-transition-new(root)"})).catch(()=>{})}else e()}function Ey(){let i=null;try{i=localStorage.getItem("iu-theme")}catch{}let t=ja[i]?i:sh("(prefers-color-scheme: light)").matches?"pearl":"nocturne";document.body.dataset.theme=t,ve(".sw").forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.theme===t)),e.addEventListener("click",n=>{let s=e.getBoundingClientRect();ih(e.dataset.theme,{x:s.left+s.width/2,y:s.top+s.height/2})})}),window.addEventListener("keydown",e=>{var n;if(e.key.toLowerCase()==="t"&&!/input|textarea/i.test(((n=document.activeElement)==null?void 0:n.tagName)||"")&&!e.metaKey&&!e.ctrlKey){let s=Object.keys(ja);ih(s[(s.indexOf(document.body.dataset.theme)+1)%s.length])}})}var Ri=qr.map((i,t)=>({...i,index:t+1})),Ja=-1,Ws=null;function Ay(){let i=kt("#grid");if(!i)return;i.innerHTML=Ri.map(n=>`
    <article class="card rv" data-cat="${n.category}" data-id="${n.id}" style="--c1:${n.palette[0]};--c2:${n.palette[1]}">
      <button class="card-btn" type="button" aria-label="Open project ${ue(n.title)}" data-tilt>
        <span class="poster"><img alt="" loading="lazy" decoding="async" width="800" height="1000"><span class="glare"></span><em>${String(n.index).padStart(2,"0")}</em></span>
        <span class="meta"><b>${ue(n.title)}</b><small>${ue(n.kicker)}</small><span class="row"><i>${n.category==="ai"?"AI / LLM":"WEB"} \xB7 ${n.year}</i><span class="arrow" aria-hidden="true">\u2197</span></span></span>
      </button></article>`).join("");let t=n=>{let s=kt("img",n);if(s&&!s.src){let r=Ri.find(a=>a.id===n.dataset.id);s.src=nh(r)||"",s.src||s.remove()}},e="IntersectionObserver"in window?new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&(t(s.target),e.unobserve(s.target))}),{rootMargin:"300px"}):null;ve(".card",i).forEach(n=>e?e.observe(n):t(n)),i.addEventListener("click",n=>{let s=n.target.closest(".card");s&&rh(s.dataset.id)}),ve(".filter").forEach(n=>n.addEventListener("click",()=>{ve(".filter").forEach(s=>s.setAttribute("aria-pressed",String(s===n))),ve(".card",i).forEach(s=>{let r=n.dataset.f==="all"||s.dataset.cat===n.dataset.f;s.hidden=!r})}))}function rh(i){var r;let t=kt("#modal");if(Ja=Ri.findIndex(a=>a.id===i),Ja<0||!t)return;let e=Ri[Ja],n=[];e.links.live&&n.push(`<a class="btn solid" href="${ue(e.links.live)}" target="_blank" rel="noopener noreferrer">Live demo \u2197</a>`),e.links.github&&n.push(`<a class="btn" href="${ue(e.links.github)}" target="_blank" rel="noopener noreferrer">Source code \u2197</a>`),n.length||n.push('<a class="btn" href="#contact" data-close>Ask for a demo</a>');let s=nh(e);kt("#modal-body").innerHTML=`
    <div class="m-poster" data-tilt>${s?`<img src="${s}" alt="Generative artwork for ${ue(e.title)}">`:""}<span class="glare"></span></div>
    <div class="m-info">
      <p class="eyebrow">${String(e.index).padStart(2,"0")} / ${String(Ri.length).padStart(2,"0")} \xB7 ${ue(e.status)}</p>
      <h3 id="modal-title">${ue(e.title)}</h3><p class="m-kick">${ue(e.kicker)}</p>
      <p>${ue(e.summary)}</p>
      <h4>What I built</h4><ul>${e.bullets.map(a=>`<li>${ue(a)}</li>`).join("")}</ul>
      <h4>Role</h4><p>${ue(e.role)}</p>
      <h4>Stack</h4><ul class="tags">${e.stack.map(a=>`<li>${ue(a)}</li>`).join("")}</ul>
      <div class="m-links">${n.join("")}</div>
      ${e.status==="Case study"?'<p class="note">Case study \u2014 no public demo link yet. Ask me for a walkthrough.</p>':""}
    </div>`,Ws=document.activeElement,t.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>t.classList.add("open")),gn==null||gn.stop(),(r=kt("#modal-close"))==null||r.focus(),ve("[data-close]",t).forEach(a=>a.addEventListener("click",Ka)),mf(kt("#modal-body"))}function Ka(){var t;let i=kt("#modal");!i||i.hidden||(i.classList.remove("open"),document.body.classList.remove("modal-open"),gn==null||gn.start(),setTimeout(()=>{i.hidden=!0},Ke?0:450),(t=Ws==null?void 0:Ws.focus)==null||t.call(Ws,{preventScroll:!0}))}function Za(i){rh(Ri[(Ja+i+Ri.length)%Ri.length].id)}function Cy(){var i,t,e,n;(i=kt("#modal-close"))==null||i.addEventListener("click",Ka),(t=kt("#modal-prev"))==null||t.addEventListener("click",()=>Za(-1)),(e=kt("#modal-next"))==null||e.addEventListener("click",()=>Za(1)),(n=kt("#modal"))==null||n.addEventListener("click",s=>{s.target.id==="modal"&&Ka()}),window.addEventListener("keydown",s=>{let r=kt("#modal");if(!(!r||r.hidden)&&(s.key==="Escape"&&Ka(),s.key==="ArrowRight"&&Za(1),s.key==="ArrowLeft"&&Za(-1),s.key==="Tab")){let a=ve("button, a[href]",r).filter(c=>!c.disabled&&c.offsetParent!==null);if(!a.length)return;let o=a[0],l=a[a.length-1];s.shiftKey&&document.activeElement===o?(l.focus(),s.preventDefault()):!s.shiftKey&&document.activeElement===l&&(o.focus(),s.preventDefault())}})}function mf(i=document){!Qa||Ke||ve("[data-tilt]",i).forEach(t=>{t.dataset.tiltBound||(t.dataset.tiltBound="1",t.addEventListener("pointermove",e=>{let n=t.getBoundingClientRect(),s=(e.clientX-n.left)/n.width,r=(e.clientY-n.top)/n.height;t.style.setProperty("--rx",`${((.5-r)*12).toFixed(2)}deg`),t.style.setProperty("--ry",`${((s-.5)*14).toFixed(2)}deg`),t.style.setProperty("--gx",`${(s*100).toFixed(0)}%`),t.style.setProperty("--gy",`${(r*100).toFixed(0)}%`)}),t.addEventListener("pointerleave",()=>{t.style.setProperty("--rx","0deg"),t.style.setProperty("--ry","0deg")}))})}function Ry(){let i=kt("#cur-dot"),t=kt("#cur-ring");if(!Qa||!i||!t)return document.body.classList.add("no-cursor");document.body.classList.add("has-cursor");let e=Se.quickTo(t,"x",{duration:.35,ease:"power3"}),n=Se.quickTo(t,"y",{duration:.35,ease:"power3"});window.addEventListener("pointermove",s=>{i.style.transform=`translate(${s.clientX}px,${s.clientY}px)`,e(s.clientX),n(s.clientY)}),document.addEventListener("pointerover",s=>t.classList.toggle("big",!!s.target.closest("a, button, [data-tilt], input, textarea, select")))}function Py(){!Qa||Ke||ve("[data-magnetic]").forEach(i=>{i.addEventListener("pointermove",t=>{let e=i.getBoundingClientRect();Se.to(i,{x:(t.clientX-e.left-e.width/2)*.3,y:(t.clientY-e.top-e.height/2)*.35,duration:.3})}),i.addEventListener("pointerleave",()=>Se.to(i,{x:0,y:0,duration:.6,ease:"elastic.out(1,.5)"}))})}function Iy(){let i=ve(".rv");if(!("IntersectionObserver"in window)||Ke)return i.forEach(n=>n.classList.add("in"));ve("[data-stagger]").forEach(n=>ve(".rv",n).forEach((s,r)=>s.style.setProperty("--d",`${r*70}ms`)));let t=new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),t.unobserve(s.target))}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});i.forEach(n=>t.observe(n));let e=new IntersectionObserver(n=>n.forEach(s=>{if(!s.isIntersecting)return;e.unobserve(s.target);let r=+s.target.dataset.count,a={v:0};Se.to(a,{v:r,duration:1.4,ease:"power2.out",onUpdate:()=>s.target.textContent=Math.round(a.v)})}),{threshold:.6});ve("[data-count]").forEach(n=>e.observe(n))}function Ly(){let i=["home","about","skills","work","lab","journey","contact"],t=i.map(n=>document.getElementById(n)).filter(Boolean);if(!("IntersectionObserver"in window))return;let e=new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&(Ee==null||Ee.setSection(s.target.id),document.body.dataset.section=s.target.id,ve(".nav-links a").forEach(r=>r.classList.toggle("active",r.getAttribute("href")===`#${s.target.id}`)))}),{rootMargin:"-45% 0px -45% 0px"});t.forEach(n=>e.observe(n))}function Dy(){let i=kt("#to-top"),t=kt("#progress"),e=()=>{let n=window.scrollY,s=document.documentElement.scrollHeight-innerHeight;t&&(t.style.transform=`scaleX(${s>0?n/s:0})`),i==null||i.classList.toggle("show",n>innerHeight*.8),document.body.classList.toggle("scrolled",n>40)};window.addEventListener("scroll",e,{passive:!0}),e(),Ke||(gn=new wu({lerp:.09,smoothWheel:!0}),Se.ticker.add(n=>gn.raf(n*1e3)),Se.ticker.lagSmoothing(0)),ve('a[href^="#"]').forEach(n=>n.addEventListener("click",s=>{let r=n.getAttribute("href");if(r.length<2)return;let a=document.querySelector(r);a&&(s.preventDefault(),gf(),gn?gn.scrollTo(a,{duration:1.3}):a.scrollIntoView({behavior:Ke?"auto":"smooth"}),history.replaceState(null,"",r))})),i==null||i.addEventListener("click",()=>gn?gn.scrollTo(0,{duration:1.4}):window.scrollTo({top:0,behavior:"smooth"}))}function gf(){var i;document.body.classList.remove("menu-open"),(i=kt("#burger"))==null||i.setAttribute("aria-expanded","false")}function Uy(){let i=kt("#burger");i&&(i.addEventListener("click",()=>{let t=document.body.classList.toggle("menu-open");i.setAttribute("aria-expanded",String(t))}),window.addEventListener("keydown",t=>{t.key==="Escape"&&gf()}))}function Ny(){window.addEventListener("pointermove",i=>{if(Ee==null||Ee.setPointer(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight*2-1)),Qa&&!Ke){let t=kt(".hero-title");t&&(t.style.transform=`translate3d(${(i.clientX/innerWidth-.5)*-26}px, ${(i.clientY/innerHeight-.5)*-14}px, 0)`)}},{passive:!0}),window.addEventListener("pointerleave",()=>Ee==null?void 0:Ee.setPointer(9,9)),window.addEventListener("resize",()=>Ee==null?void 0:Ee.resize())}function Oy(){let i=kt("#contact-form");if(!i)return;let t=kt("#form-status"),e=kt('button[type="submit"]',i),n={name:r=>r.trim().length>=2?"":"Please enter your name.",email:r=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(r.trim())?"":"Please enter a valid email address.",type:r=>r?"":"Choose a project type.",message:r=>r.trim().length>=10?"":"Tell me a little more (at least 10 characters)."},s=r=>{let a=i.elements[r],o=n[r](a.value),l=kt(`#err-${r}`);return l&&(l.textContent=o),a.setAttribute("aria-invalid",String(!!o)),!o};Object.keys(n).forEach(r=>{var a,o;(a=i.elements[r])==null||a.addEventListener("blur",()=>s(r)),(o=i.elements[r])==null||o.addEventListener("input",()=>{i.elements[r].getAttribute("aria-invalid")==="true"&&s(r)})}),i.addEventListener("submit",async r=>{var l,c;if(r.preventDefault(),(l=i.elements.company)!=null&&l.value)return;if(!Object.keys(n).map(s).every(Boolean)){t.className="form-status err",t.textContent="Please fix the highlighted fields.",(c=i.querySelector('[aria-invalid="true"]'))==null||c.focus();return}let o=Object.fromEntries(["name","email","type","message"].map(h=>[h,i.elements[h].value.trim()]));e.disabled=!0,t.className="form-status",t.textContent="Sending\u2026";try{if(Ue.formEndpoint){if(!(await fetch(Ue.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)})).ok)throw new Error("send failed");t.className="form-status ok",t.textContent="Message sent \u2014 thank you! I will reply soon.",i.reset()}else{let h=`${o.message}

\u2014 ${o.name} (${o.email})
Project type: ${o.type}`;window.location.href=`mailto:${Ue.email}?subject=${encodeURIComponent("Portfolio enquiry: "+o.type)}&body=${encodeURIComponent(h)}`,t.className="form-status ok",t.textContent="Your email app should open with the message ready to send."}}catch{t.className="form-status err",t.textContent=`Could not send right now. Please email ${Ue.email} directly.`}e.disabled=!1})}function Fy(){let i=kt("#loader"),t=kt("#ld-num"),e=kt(".ld-fg"),n=kt("#ld-word"),s=kt("#ld-skip"),r=["Hello","Salaam","Namaste","Hola","Ciao","Iman"],a=!1,o=()=>{var h;a||(a=!0,document.body.classList.remove("is-loading"),document.body.classList.add("is-ready"),i&&(i.classList.add("done"),setTimeout(()=>i.remove(),Ke?0:1100)),(h=kt(".hero"))==null||h.classList.add("is-in"),document.body.classList.add("hero-in"))};if(!i)return o();s==null||s.addEventListener("click",()=>{c==null||c.progress(1),o()});let l={v:0},c=Se.to(l,{v:100,duration:Ke?.3:2.4,ease:"power1.inOut",onUpdate(){let h=Math.round(l.v);t&&(t.textContent=h),e&&(e.style.strokeDashoffset=String(339.3*(1-l.v/100))),n&&(n.textContent=r[Math.min(r.length-1,Math.floor(l.v/(100/r.length)))])},onComplete:()=>setTimeout(o,Ke?0:250)})}function ff(){by(),wy(),Ty(),Ay(),Cy(),Ey(),Oy(),Uy();try{Ee=af(kt("#gl"),{reduced:Ke})}catch{Ee=null}Ee?Ee.setTheme(pf()):document.body.classList.add("no-webgl"),Dy(),Ly(),Iy(),Ny(),Ry(),Py(),mf(),df({config:Ue,projects:qr,knowledge:Cu,suggestions:Ru,themes:ja,setTheme:i=>ih(i),openProject:rh,reduced:Ke}),Fy()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ff):ff();})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
