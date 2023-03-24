(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerPolicy&&(s.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?s.credentials="include":u.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(u){if(u.ep)return;u.ep=!0;const s=i(u);fetch(u.href,s)}})();function W(){}function Fe(e,t){for(const i in t)e[i]=t[i];return e}function ve(e){return e()}function me(){return Object.create(null)}function R(e){e.forEach(ve)}function be(e){return typeof e=="function"}function qe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function de(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function Me(e){return Object.keys(e).length===0}function Le(e,t,i,n){if(e){const u=ye(e,t,i,n);return e[0](u)}}function ye(e,t,i,n){return e[1]&&n?Fe(i.ctx.slice(),e[1](n(t))):i.ctx}function je(e,t,i,n){if(e[2]&&n){const u=e[2](n(i));if(t.dirty===void 0)return u;if(typeof u=="object"){const s=[],l=Math.max(t.dirty.length,u.length);for(let d=0;d<l;d+=1)s[d]=t.dirty[d]|u[d];return s}return t.dirty|u}return t.dirty}function Oe(e,t,i,n,u,s){if(u){const l=ye(t,i,n,s);e.p(l,u)}}function ze(e){if(e.ctx.length>32){const t=[],i=e.ctx.length/32;for(let n=0;n<i;n++)t[n]=-1;return t}return-1}function c(e,t){e.appendChild(t)}function B(e,t,i){e.insertBefore(t,i||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function h(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function k(){return M(" ")}function A(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function m(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function fe(e){return e===""?null:+e}function Ve(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=t??""}function b(e,t,i,n){i===null?e.style.removeProperty(t):e.style.setProperty(t,i,n?"important":"")}let ne;function U(e){ne=e}const V=[],pe=[];let I=[];const ge=[],Qe=Promise.resolve();let te=!1;function Be(){te||(te=!0,Qe.then(ke))}function ie(e){I.push(e)}const ee=new Set;let P=0;function ke(){if(P!==0)return;const e=ne;do{try{for(;P<V.length;){const t=V[P];P++,U(t),Ie(t.$$)}}catch(t){throw V.length=0,P=0,t}for(U(null),V.length=0,P=0;pe.length;)pe.pop()();for(let t=0;t<I.length;t+=1){const i=I[t];ee.has(i)||(ee.add(i),i())}I.length=0}while(V.length);for(;ge.length;)ge.pop()();te=!1,ee.clear(),U(e)}function Ie(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function Te(e){const t=[],i=[];I.forEach(n=>e.indexOf(n)===-1?t.push(n):i.push(n)),i.forEach(n=>n()),I=t}const H=new Set;let L;function we(){L={r:0,c:[],p:L}}function Ee(){L.r||R(L.c),L=L.p}function S(e,t){e&&e.i&&(H.delete(e),e.i(t))}function T(e,t,i,n){if(e&&e.o){if(H.has(e))return;H.add(e),L.c.push(()=>{H.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}else n&&n()}function Re(e){e&&e.c()}function Ae(e,t,i,n){const{fragment:u,after_update:s}=e.$$;u&&u.m(t,i),n||ie(()=>{const l=e.$$.on_mount.map(ve).filter(be);e.$$.on_destroy?e.$$.on_destroy.push(...l):R(l),e.$$.on_mount=[]}),s.forEach(ie)}function Se(e,t){const i=e.$$;i.fragment!==null&&(Te(i.after_update),R(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function De(e,t){e.$$.dirty[0]===-1&&(V.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ce(e,t,i,n,u,s,l,d=[-1]){const r=ne;U(e);const a=e.$$={fragment:null,ctx:[],props:s,update:W,not_equal:u,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:me(),dirty:d,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=i?i(e,t.props||{},(p,C,...w)=>{const N=w.length?w[0]:C;return a.ctx&&u(a.ctx[p],a.ctx[p]=N)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](N),o&&De(e,p)),C}):[],a.update(),o=!0,R(a.before_update),a.fragment=n?n(a.ctx):!1,t.target){if(t.hydrate){const p=Ve(t.target);a.fragment&&a.fragment.l(p),p.forEach(j)}else a.fragment&&a.fragment.c();t.intro&&S(e.$$.fragment),Ae(e,t.target,t.anchor,t.customElement),ke()}U(r)}class Ne{$destroy(){Se(this,1),this.$destroy=W}$on(t,i){if(!be(i))return W;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const u=n.indexOf(i);u!==-1&&n.splice(u,1)}}$set(t){this.$$set&&!Me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ke(e){let t,i,n,u,s,l,d,r,a;return{c(){t=h("img"),n=k(),u=h("div"),s=h("h1"),l=M(e[3]),d=k(),r=h("span"),a=M(e[4]),m(t,"class","cardImg svelte-1sbyozx"),m(t,"alt","placeholder"),de(t.src,i=e[2])||m(t,"src",i),m(s,"class","title svelte-1sbyozx"),m(r,"class","desc svelte-1sbyozx"),m(u,"class","cardText svelte-1sbyozx")},m(o,p){B(o,t,p),B(o,n,p),B(o,u,p),c(u,s),c(s,l),c(u,d),c(u,r),c(r,a)},p(o,p){p&4&&!de(t.src,i=o[2])&&m(t,"src",i),p&8&&J(l,o[3]),p&16&&J(a,o[4])},i:W,o:W,d(o){o&&j(t),o&&j(n),o&&j(u)}}}function Ue(e){let t;const i=e[6].default,n=Le(i,e,e[5],null);return{c(){n&&n.c()},m(u,s){n&&n.m(u,s),t=!0},p(u,s){n&&n.p&&(!t||s&32)&&Oe(n,i,u,u[5],t?je(i,u[5],s,null):ze(u[5]),null)},i(u){t||(S(n,u),t=!0)},o(u){T(n,u),t=!1},d(u){n&&n.d(u)}}}function We(e){let t,i,n,u;const s=[Ue,Ke],l=[];function d(r,a){return r[1]==="slot"?0:r[1]==="template"?1:-1}return~(i=d(e))&&(n=l[i]=s[i](e)),{c(){t=h("a"),n&&n.c(),m(t,"href",e[0]),m(t,"class","card svelte-1sbyozx")},m(r,a){B(r,t,a),~i&&l[i].m(t,null),u=!0},p(r,[a]){let o=i;i=d(r),i===o?~i&&l[i].p(r,a):(n&&(we(),T(l[o],1,1,()=>{l[o]=null}),Ee()),~i?(n=l[i],n?n.p(r,a):(n=l[i]=s[i](r),n.c()),S(n,1),n.m(t,null)):n=null),(!u||a&1)&&m(t,"href",r[0])},i(r){u||(S(n),u=!0)},o(r){T(n),u=!1},d(r){r&&j(t),~i&&l[i].d()}}}function Ye(e,t,i){let{$$slots:n={},$$scope:u}=t,{link:s="/"}=t,{type:l="slot"}=t,{image:d=""}=t,{title:r=""}=t,{description:a=""}=t;return e.$$set=o=>{"link"in o&&i(0,s=o.link),"type"in o&&i(1,l=o.type),"image"in o&&i(2,d=o.image),"title"in o&&i(3,r=o.title),"description"in o&&i(4,a=o.description),"$$scope"in o&&i(5,u=o.$$scope)},[s,l,d,r,a,u,n]}class Ge extends Ne{constructor(t){super(),Ce(this,t,Ye,We,qe,{link:0,type:1,image:2,title:3,description:4})}}const Q=[{title:"bugi-navbar",description:"Simple svelte + tailwind navbar.",link:"https://mUglesic.github.io/bugi-navbar"},{title:"lorem ipsum1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum7",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum8",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"}],He="/slide-card-display/everest.png";function he(e,t,i){const n=e.slice();return n[12]=t[i],n}function _e(e){let t,i,n,u;return i=new Ge({props:{type:"template",link:e[12].link,image:He,title:e[12].title,description:e[12].description}}),{c(){t=h("div"),Re(i.$$.fragment),n=k(),m(t,"class","flex row center"),b(t,"width",e[2]+"%")},m(s,l){B(s,t,l),Ae(i,t,null),c(t,n),u=!0},p(s,l){(!u||l&4)&&b(t,"width",s[2]+"%")},i(s){u||(S(i.$$.fragment,s),u=!0)},o(s){T(i.$$.fragment,s),u=!1},d(s){s&&j(t),Se(i)}}}function Je(e){let t,i,n,u,s,l,d,r,a,o,p,C,w,N,x,O,D,ue,X,se,q,le,z,K,re,Z,oe,y,E,$,ae,F=Q,g=[];for(let f=0;f<F.length;f+=1)g[f]=_e(he(e,F,f));const xe=f=>T(g[f],1,1,()=>{g[f]=null});return{c(){t=h("main"),i=h("div"),n=h("button"),n.textContent="←",u=k(),s=h("div"),l=h("div");for(let f=0;f<g.length;f+=1)g[f].c();d=k(),r=h("button"),r.textContent="→",a=k(),o=h("div"),p=h("button"),p.textContent="←",C=k(),w=h("button"),w.textContent="→",N=k(),x=h("div"),O=h("div"),D=h("label"),ue=M("Cards shown: "),X=M(e[1]),se=k(),q=h("input"),le=k(),z=h("div"),K=h("label"),re=M("Move by: "),Z=M(e[3]),oe=k(),y=h("input"),m(n,"class","arrow-side svelte-ydivfv"),m(l,"id","cards"),m(l,"class","flex row around svelte-ydivfv"),b(l,"--totalCardSize",e[5]+"%"),b(l,"--currentPosition",e[4]+"%"),b(s,"width","80%"),b(s,"overflow-x","hidden"),m(r,"class","arrow-side svelte-ydivfv"),m(i,"class","flex row"),b(i,"justify-content","center"),b(i,"width","100%"),m(o,"class","flex row center gap-large arrow-bottom svelte-ydivfv"),b(o,"margin-top","50px"),m(D,"for","onScreenCards"),m(q,"name","onScreenCards"),m(q,"type","range"),m(q,"min","1"),m(q,"max","5"),m(q,"step","1"),m(O,"class","slider"),m(K,"for","moveBy"),m(y,"name","moveBy"),m(y,"type","range"),m(y,"min","1"),m(y,"max","5"),m(y,"step","1"),m(z,"class","slider"),m(x,"class","flex col center gap-large option-slider svelte-ydivfv"),b(x,"margin-top","20px"),m(t,"class","flex col center"),b(t,"width","100vw")},m(f,v){B(f,t,v),c(t,i),c(i,n),c(i,u),c(i,s),c(s,l);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(l,null);c(i,d),c(i,r),c(t,a),c(t,o),c(o,p),c(o,C),c(o,w),c(t,N),c(t,x),c(x,O),c(O,D),c(D,ue),c(D,X),c(O,se),c(O,q),G(q,e[1]),c(x,le),c(x,z),c(z,K),c(K,re),c(K,Z),c(z,oe),c(z,y),G(y,e[3]),E=!0,$||(ae=[A(n,"click",e[6]),A(r,"click",e[7]),A(p,"click",e[8]),A(w,"click",e[9]),A(q,"change",e[10]),A(q,"input",e[10]),A(y,"change",e[11]),A(y,"input",e[11])],$=!0)},p(f,[v]){if(v&4){F=Q;let _;for(_=0;_<F.length;_+=1){const ce=he(f,F,_);g[_]?(g[_].p(ce,v),S(g[_],1)):(g[_]=_e(ce),g[_].c(),S(g[_],1),g[_].m(l,null))}for(we(),_=F.length;_<g.length;_+=1)xe(_);Ee()}(!E||v&32)&&b(l,"--totalCardSize",f[5]+"%"),(!E||v&16)&&b(l,"--currentPosition",f[4]+"%"),(!E||v&2)&&J(X,f[1]),v&2&&G(q,f[1]),(!E||v&8)&&J(Z,f[3]),v&8&&G(y,f[3])},i(f){if(!E){for(let v=0;v<F.length;v+=1)S(g[v]);E=!0}},o(f){g=g.filter(Boolean);for(let v=0;v<g.length;v+=1)T(g[v]);E=!1},d(f){f&&j(t),Pe(g,f),$=!1,R(ae)}}}function Xe(e,t,i){let n,u,s,l=0,d=1,r=1;window.addEventListener("resize",()=>{window.innerWidth<900&&(i(1,d=1),i(3,r=1))});const a=()=>i(0,l=Math.max(l-r,0)),o=()=>i(0,l=Math.min(l+r,Q.length-d)),p=()=>i(0,l=Math.max(l-r,0)),C=()=>i(0,l=Math.min(l+r,Q.length-d));function w(){d=fe(this.value),i(1,d)}function N(){r=fe(this.value),i(3,r)}return e.$$.update=()=>{e.$$.dirty&2&&i(2,n=100/d),e.$$.dirty&4&&i(5,u=Q.length*n),e.$$.dirty&1&&i(4,s=-l*(100/Q.length))},[l,d,n,r,s,u,a,o,p,C,w,N]}class Ze extends Ne{constructor(t){super(),Ce(this,t,Xe,Je,qe,{})}}new Ze({target:document.getElementById("app")});
