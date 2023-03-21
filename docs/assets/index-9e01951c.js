(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function F(){}function ie(e,t){for(const n in t)e[n]=t[n];return e}function J(e){return e()}function X(){return Object.create(null)}function k(e){e.forEach(J)}function R(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function ue(e,t){return j||(j=document.createElement("a")),j.href=t,e===j.href}function re(e){return Object.keys(e).length===0}function se(e,t,n,u){if(e){const i=W(e,t,n,u);return e[0](i)}}function W(e,t,n,u){return e[1]&&u?ie(n.ctx.slice(),e[1](u(t))):n.ctx}function le(e,t,n,u){if(e[2]&&u){const i=e[2](u(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const r=[],s=Math.max(t.dirty.length,i.length);for(let f=0;f<s;f+=1)r[f]=t.dirty[f]|i[f];return r}return t.dirty|i}return t.dirty}function oe(e,t,n,u,i,r){if(i){const s=W(t,n,u,r);e.p(s,i)}}function ae(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let u=0;u<n;u++)t[u]=-1;return t}return-1}function h(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function L(){return Q(" ")}function K(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function w(e,t,n,u){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,u?"important":"")}let I;function C(e){I=e}const E=[],z=[];let N=[];const D=[],fe=Promise.resolve();let V=!1;function de(){V||(V=!0,fe.then(Y))}function B(e){N.push(e)}const P=new Set;let x=0;function Y(){if(x!==0)return;const e=I;do{try{for(;x<E.length;){const t=E[x];x++,C(t),pe(t.$$)}}catch(t){throw E.length=0,x=0,t}for(C(null),E.length=0,x=0;z.length;)z.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];P.has(n)||(P.add(n),n())}N.length=0}while(E.length);for(;D.length;)D.pop()();V=!1,P.clear(),C(e)}function pe(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function ge(e){const t=[],n=[];N.forEach(u=>e.indexOf(u)===-1?t.push(u):n.push(u)),n.forEach(u=>u()),N=t}const O=new Set;let q;function he(){q={r:0,c:[],p:q}}function _e(){q.r||k(q.c),q=q.p}function S(e,t){e&&e.i&&(O.delete(e),e.i(t))}function M(e,t,n,u){if(e&&e.o){if(O.has(e))return;O.add(e),q.c.push(()=>{O.delete(e),u&&(n&&e.d(1),u())}),e.o(t)}else u&&u()}function ve(e){e&&e.c()}function Z(e,t,n,u){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),u||B(()=>{const s=e.$$.on_mount.map(J).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...s):k(s),e.$$.on_mount=[]}),r.forEach(B)}function ee(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(E.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,u,i,r,s,f=[-1]){const p=I;C(e);const o=e.$$={fragment:null,ctx:[],props:r,update:F,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:X(),dirty:f,skip_bound:!1,root:t.target||p.$$.root};s&&s(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(m,l,...y)=>{const a=y.length?y[0]:l;return o.ctx&&i(o.ctx[m],o.ctx[m]=a)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](a),b&&ye(e,m)),l}):[],o.update(),b=!0,k(o.before_update),o.fragment=u?u(o.ctx):!1,t.target){if(t.hydrate){const m=me(t.target);o.fragment&&o.fragment.l(m),m.forEach($)}else o.fragment&&o.fragment.c();t.intro&&S(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),Y()}C(p)}class ne{$destroy(){ee(this,1),this.$destroy=F}$on(t,n){if(!R(n))return F;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const i=u.indexOf(n);i!==-1&&u.splice(i,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function be(e){let t,n;const u=e[2].default,i=se(u,e,e[1],null);return{c(){t=_("a"),i&&i.c(),d(t,"href",e[0]),d(t,"class","card svelte-1yopbcn")},m(r,s){A(r,t,s),i&&i.m(t,null),n=!0},p(r,[s]){i&&i.p&&(!n||s&2)&&oe(i,u,r,r[1],n?le(u,r[1],s,null):ae(r[1]),null),(!n||s&1)&&d(t,"href",r[0])},i(r){n||(S(i,r),n=!0)},o(r){M(i,r),n=!1},d(r){r&&$(t),i&&i.d(r)}}}function qe(e,t,n){let{$$slots:u={},$$scope:i}=t,{link:r="/"}=t;return e.$$set=s=>{"link"in s&&n(0,r=s.link),"$$scope"in s&&n(1,i=s.$$scope)},[r,i,u]}class $e extends ne{constructor(t){super(),te(this,t,qe,be,U,{link:0})}}const v=[{title:"bugi-navbar",description:"Simple svelte + tailwind navbar."},{title:"lorem ipsum1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis."},{title:"lorem ipsum2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis."},{title:"lorem ipsum3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis."},{title:"lorem ipsum4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan condimentum dolor quis vehicula. Etiam sit amet elementum diam, ac vulputate ligula. Cras fermentum nisl augue, id finibus eros egestas non. Vestibulum viverra ultricies tortor. Suspendisse pharetra libero velit, eget egestas risus suscipit a. Nunc aliquet a felis in posuere. Quisque ut maximus lectus, eu molestie leo. Aliquam ut laoreet odio, sit amet pretium nunc. Fusce est neque, laoreet sit amet mollis eu, dictum id felis. Aenean tincidunt turpis non arcu tristique mattis. Sed non gravida metus. Fusce vel justo porta, luctus mauris at, elementum arcu. Nam commodo ullamcorper venenatis. Aenean non lectus aliquam, aliquet sem non, tincidunt neque. Mauris ultricies, turpis non bibendum ultricies, dolor felis congue tellus, ac ullamcorper augue neque nec turpis."}];function G(e,t,n){const u=e.slice();return u[3]=t[n],u}function xe(e){let t,n,u,i,r,s=e[3].title+"",f,p,o,b=e[3].description+"",m;return{c(){t=_("img"),u=L(),i=_("div"),r=_("h1"),f=Q(s),p=L(),o=_("span"),m=Q(b),d(t,"class","cardImg svelte-171etme"),d(t,"alt","placeholder"),ue(t.src,n="/everest.jpg")||d(t,"src",n),d(r,"class","text-large title svelte-171etme"),d(o,"class","text-small desc svelte-171etme"),d(i,"class","cardText svelte-171etme")},m(l,y){A(l,t,y),A(l,u,y),A(l,i,y),h(i,r),h(r,f),h(i,p),h(i,o),h(o,m)},p:F,d(l){l&&$(t),l&&$(u),l&&$(i)}}}function H(e){let t,n,u,i;return n=new $e({props:{$$slots:{default:[xe]},$$scope:{ctx:e}}}),{c(){t=_("div"),ve(n.$$.fragment),u=L(),d(t,"class","flex row center"),w(t,"width","33vw")},m(r,s){A(r,t,s),Z(n,t,null),h(t,u),i=!0},p(r,s){const f={};s&64&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){i||(S(n.$$.fragment,r),i=!0)},o(r){M(n.$$.fragment,r),i=!1},d(r){r&&$(t),ee(n)}}}function we(e){let t,n,u,i,r,s,f,p,o,b,m=v,l=[];for(let a=0;a<m.length;a+=1)l[a]=H(G(e,m,a));const y=a=>M(l[a],1,1,()=>{l[a]=null});return{c(){t=_("main"),n=_("div");for(let a=0;a<l.length;a+=1)l[a].c();u=L(),i=_("div"),r=_("button"),r.textContent="←",s=L(),f=_("button"),f.textContent="→",d(n,"id","cards"),d(n,"class","flex row around svelte-171etme"),w(n,"width","calc("+v.length*33+"vw + "+v.length*10+"px)"),w(n,"transform","translateX("+(100/v.length-e[0]*(100/v.length))+"%)"),d(i,"class","flex row center gap-large"),w(i,"margin-top","50px"),d(t,"class","flex col"),w(t,"width","100vw")},m(a,g){A(a,t,g),h(t,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(n,null);h(t,u),h(t,i),h(i,r),h(i,s),h(i,f),p=!0,o||(b=[K(r,"click",e[1]),K(f,"click",e[2])],o=!0)},p(a,[g]){if(g&0){m=v;let c;for(c=0;c<m.length;c+=1){const T=G(a,m,c);l[c]?(l[c].p(T,g),S(l[c],1)):(l[c]=H(T),l[c].c(),S(l[c],1),l[c].m(n,null))}for(he(),c=m.length;c<l.length;c+=1)y(c);_e()}(!p||g&1)&&w(n,"transform","translateX("+(100/v.length-a[0]*(100/v.length))+"%)")},i(a){if(!p){for(let g=0;g<m.length;g+=1)S(l[g]);p=!0}},o(a){l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)M(l[g]);p=!1},d(a){a&&$(t),ce(l,a),o=!1,k(b)}}}function Ee(e,t,n){let u=0;return[u,()=>n(0,u=Math.max(u-1,0)),()=>n(0,u=Math.min(u+1,v.length-1))]}class Ae extends ne{constructor(t){super(),te(this,t,Ee,we,U,{})}}new Ae({target:document.getElementById("app")});
