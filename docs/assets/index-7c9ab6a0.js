(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerPolicy&&(n.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?n.credentials="include":u.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(u){if(u.ep)return;u.ep=!0;const n=i(u);fetch(u.href,n)}})();function D(){}function ye(e,t){for(const i in t)e[i]=t[i];return e}function me(e){return e()}function ne(){return Object.create(null)}function P(e){e.forEach(me)}function de(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let R;function Ae(e,t){return R||(R=document.createElement("a")),R.href=t,e===R.href}function Ee(e){return Object.keys(e).length===0}function we(e,t,i,s){if(e){const u=pe(e,t,i,s);return e[0](u)}}function pe(e,t,i,s){return e[1]&&s?ye(i.ctx.slice(),e[1](s(t))):i.ctx}function xe(e,t,i,s){if(e[2]&&s){const u=e[2](s(i));if(t.dirty===void 0)return u;if(typeof u=="object"){const n=[],l=Math.max(t.dirty.length,u.length);for(let m=0;m<l;m+=1)n[m]=t.dirty[m]|u[m];return n}return t.dirty|u}return t.dirty}function $e(e,t,i,s,u,n){if(u){const l=pe(t,i,s,n);e.p(l,u)}}function Se(e){if(e.ctx.length>32){const t=[],i=e.ctx.length/32;for(let s=0;s<i;s++)t[s]=-1;return t}return-1}function o(e,t){e.appendChild(t)}function M(e,t,i){e.insertBefore(t,i||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function Ne(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function h(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function w(){return S(" ")}function j(e,t,i,s){return e.addEventListener(t,i,s),()=>e.removeEventListener(t,i,s)}function a(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function se(e){return e===""?null:+e}function ke(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function X(e,t){e.value=t??""}function E(e,t,i,s){i===null?e.style.removeProperty(t):e.style.setProperty(t,i,s?"important":"")}let W;function I(e){W=e}const L=[],re=[];let O=[];const ae=[],Ce=Promise.resolve();let H=!1;function je(){H||(H=!0,Ce.then(ge))}function J(e){O.push(e)}const G=new Set;let F=0;function ge(){if(F!==0)return;const e=W;do{try{for(;F<L.length;){const t=L[F];F++,I(t),Fe(t.$$)}}catch(t){throw L.length=0,F=0,t}for(I(null),L.length=0,F=0;re.length;)re.pop()();for(let t=0;t<O.length;t+=1){const i=O[t];G.has(i)||(G.add(i),i())}O.length=0}while(L.length);for(;ae.length;)ae.pop()();H=!1,G.clear(),I(e)}function Fe(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function Le(e){const t=[],i=[];O.forEach(s=>e.indexOf(s)===-1?t.push(s):i.push(s)),i.forEach(s=>s()),O=t}const z=new Set;let N;function Me(){N={r:0,c:[],p:N}}function Oe(){N.r||P(N.c),N=N.p}function V(e,t){e&&e.i&&(z.delete(e),e.i(t))}function K(e,t,i,s){if(e&&e.o){if(z.has(e))return;z.add(e),N.c.push(()=>{z.delete(e),s&&(i&&e.d(1),s())}),e.o(t)}else s&&s()}function Ve(e){e&&e.c()}function he(e,t,i,s){const{fragment:u,after_update:n}=e.$$;u&&u.m(t,i),s||J(()=>{const l=e.$$.on_mount.map(me).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...l):P(l),e.$$.on_mount=[]}),n.forEach(J)}function ve(e,t){const i=e.$$;i.fragment!==null&&(Le(i.after_update),P(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(L.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,i,s,u,n,l,m=[-1]){const q=W;I(e);const r=e.$$={fragment:null,ctx:[],props:n,update:D,not_equal:u,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(q?q.$$.context:[])),callbacks:ne(),dirty:m,skip_bound:!1,root:t.target||q.$$.root};l&&l(r.root);let v=!1;if(r.ctx=i?i(e,t.props||{},(p,_,...y)=>{const Q=y.length?y[0]:_;return r.ctx&&u(r.ctx[p],r.ctx[p]=Q)&&(!r.skip_bound&&r.bound[p]&&r.bound[p](Q),v&&Pe(e,p)),_}):[],r.update(),v=!0,P(r.before_update),r.fragment=s?s(r.ctx):!1,t.target){if(t.hydrate){const p=ke(t.target);r.fragment&&r.fragment.l(p),p.forEach(k)}else r.fragment&&r.fragment.c();t.intro&&V(e.$$.fragment),he(e,t.target,t.anchor,t.customElement),ge()}I(q)}class qe{$destroy(){ve(this,1),this.$destroy=D}$on(t,i){if(!de(i))return D;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(i),()=>{const u=s.indexOf(i);u!==-1&&s.splice(u,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Qe(e){let t,i;const s=e[2].default,u=we(s,e,e[1],null);return{c(){t=h("a"),u&&u.c(),a(t,"href",e[0]),a(t,"class","card svelte-lrlfuq")},m(n,l){M(n,t,l),u&&u.m(t,null),i=!0},p(n,[l]){u&&u.p&&(!i||l&2)&&$e(u,s,n,n[1],i?xe(s,n[1],l,null):Se(n[1]),null),(!i||l&1)&&a(t,"href",n[0])},i(n){i||(V(u,n),i=!0)},o(n){K(u,n),i=!1},d(n){n&&k(t),u&&u.d(n)}}}function Be(e,t,i){let{$$slots:s={},$$scope:u}=t,{link:n="/"}=t;return e.$$set=l=>{"link"in l&&i(0,n=l.link),"$$scope"in l&&i(1,u=l.$$scope)},[n,u,s]}class Ie extends qe{constructor(t){super(),_e(this,t,Be,Qe,fe,{link:0})}}const T=[{title:"bugi-navbar",description:"Simple svelte + tailwind navbar.",link:"https://mUglesic.github.io/bugi-navbar"},{title:"lorem ipsum1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum7",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"},{title:"lorem ipsum8",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis.",link:"#top"}],Te="/slide-card-display/everest.png";function oe(e,t,i){const s=e.slice();return s[9]=t[i],s}function Re(e){let t,i,s,u,n,l=e[9].title+"",m,q,r,v=e[9].description+"",p;return{c(){t=h("img"),s=w(),u=h("div"),n=h("h1"),m=S(l),q=w(),r=h("span"),p=S(v),a(t,"class","cardImg svelte-juvu86"),a(t,"alt","placeholder"),Ae(t.src,i=Te)||a(t,"src",i),a(n,"class","text-large title svelte-juvu86"),a(r,"class","text-small desc svelte-juvu86"),a(u,"class","cardText svelte-juvu86")},m(_,y){M(_,t,y),M(_,s,y),M(_,u,y),o(u,n),o(n,m),o(u,q),o(u,r),o(r,p)},p:D,d(_){_&&k(t),_&&k(s),_&&k(u)}}}function ce(e){let t,i,s,u;return i=new Ie({props:{link:e[9].link,$$slots:{default:[Re]},$$scope:{ctx:e}}}),{c(){t=h("div"),Ve(i.$$.fragment),s=w(),a(t,"class","flex row center"),E(t,"width","33vw")},m(n,l){M(n,t,l),he(i,t,null),o(t,s),u=!0},p(n,l){const m={};l&4096&&(m.$$scope={dirty:l,ctx:n}),i.$set(m)},i(n){u||(V(i.$$.fragment,n),u=!0)},o(n){K(i.$$.fragment,n),u=!1},d(n){n&&k(t),ve(i)}}}function Xe(e){let t,i,s,u,n,l,m,q,r,v,p,_,y,Q,b,Z,C,B,ee,U,te,A,x,Y,ie,$=T,d=[];for(let c=0;c<$.length;c+=1)d[c]=ce(oe(e,$,c));const be=c=>K(d[c],1,1,()=>{d[c]=null});return{c(){t=h("main"),i=h("div");for(let c=0;c<d.length;c+=1)d[c].c();s=w(),u=h("div"),n=h("button"),n.textContent="←",l=w(),m=h("button"),m.textContent="→",q=w(),r=h("div"),v=h("div"),p=h("label"),_=S("Cards shown: "),y=S(e[1]),Q=w(),b=h("input"),Z=w(),C=h("div"),B=h("label"),ee=S("Move by: "),U=S(e[2]),te=w(),A=h("input"),a(i,"id","cards"),a(i,"class","flex row around svelte-juvu86"),E(i,"width",e[4]+"vw"),E(i,"transform","translateX("+e[3]+"%)"),a(u,"class","flex row center gap-large"),E(u,"margin-top","50px"),a(p,"for","onScreenCards"),a(b,"name","onScreenCards"),a(b,"type","range"),a(b,"min","1"),a(b,"max","5"),a(b,"step","1"),a(v,"class","slider"),a(B,"for","moveBy"),a(A,"type","range"),a(A,"min","1"),a(A,"max","5"),a(A,"step","1"),a(C,"class","slider"),a(r,"class","flex col center gap-large"),E(r,"margin-top","20px"),a(t,"class","flex col"),E(t,"width","100vw"),E(t,"overflow-x","hidden")},m(c,g){M(c,t,g),o(t,i);for(let f=0;f<d.length;f+=1)d[f]&&d[f].m(i,null);o(t,s),o(t,u),o(u,n),o(u,l),o(u,m),o(t,q),o(t,r),o(r,v),o(v,p),o(p,_),o(p,y),o(v,Q),o(v,b),X(b,e[1]),o(r,Z),o(r,C),o(C,B),o(B,ee),o(B,U),o(C,te),o(C,A),X(A,e[2]),x=!0,Y||(ie=[j(n,"click",e[5]),j(m,"click",e[6]),j(b,"change",e[7]),j(b,"input",e[7]),j(A,"change",e[8]),j(A,"input",e[8])],Y=!0)},p(c,[g]){if(g&0){$=T;let f;for(f=0;f<$.length;f+=1){const ue=oe(c,$,f);d[f]?(d[f].p(ue,g),V(d[f],1)):(d[f]=ce(ue),d[f].c(),V(d[f],1),d[f].m(i,null))}for(Me(),f=$.length;f<d.length;f+=1)be(f);Oe()}(!x||g&16)&&E(i,"width",c[4]+"vw"),(!x||g&8)&&E(i,"transform","translateX("+c[3]+"%)"),(!x||g&2)&&le(y,c[1]),g&2&&X(b,c[1]),(!x||g&4)&&le(U,c[2]),g&4&&X(A,c[2])},i(c){if(!x){for(let g=0;g<$.length;g+=1)V(d[g]);x=!0}},o(c){d=d.filter(Boolean);for(let g=0;g<d.length;g+=1)K(d[g]);x=!1},d(c){c&&k(t),Ne(d,c),Y=!1,P(ie)}}}function ze(e,t,i){let s,u,n=0,l=3,m=3;const q=()=>i(0,n=Math.max(n-m,0)),r=()=>i(0,n=Math.min(n+m,T.length-l));function v(){l=se(this.value),i(1,l)}function p(){m=se(this.value),i(2,m)}return e.$$.update=()=>{e.$$.dirty&2&&i(4,s=T.length*(100/l)),e.$$.dirty&1&&i(3,u=-n*(100/T.length))},[n,l,m,u,s,q,r,v,p]}class De extends qe{constructor(t){super(),_e(this,t,ze,Xe,fe,{})}}new De({target:document.getElementById("app")});