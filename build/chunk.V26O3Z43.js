function h(){}function v(t){return t()}function k(){return Object.create(null)}function f(t){t.forEach(v)}function A(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function x(t){return Object.keys(t).length===0}var V=typeof window!="undefined";var G=new Set;function K(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function N(t){return Array.from(t.childNodes)}function X(t,e,n,o){for(let s=0;s<t.length;s+=1){let c=t[s];if(c.nodeName===e){let l=0,r=[];for(;l<c.attributes.length;){let i=c.attributes[l++];n[i.name]||r.push(i.name)}for(let i=0;i<r.length;i++)c.removeAttribute(r[i]);return t.splice(s,1)[0]}}return o?R(e):j(e)}function Z(t,e){for(let n=0;n<t.length;n+=1){let o=t[n];if(o.nodeType===3)return o.data=""+e,t.splice(n,1)[0]}return q(e)}var tt=new Set;var E;function d(t){E=t}var a=[];var S=[],_=[],O=[],T=Promise.resolve(),p=!1;function L(){p||(p=!0,T.then(D))}function m(t){_.push(t)}var y=!1,g=new Set;function D(){if(!y){y=!0;do{for(let t=0;t<a.length;t+=1){let e=a[t];d(e),P(e.$$)}for(d(null),a.length=0;S.length;)S.pop()();for(let t=0;t<_.length;t+=1){let e=_[t];g.has(e)||(g.add(e),e())}_.length=0}while(a.length);for(;O.length;)O.pop()();p=!1,y=!1,g.clear()}}function P(t){if(t.fragment!==null){t.update(),f(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(m)}}var z=new Set;function B(t,e){t&&t.i&&(z.delete(t),t.i(e))}var et=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;var nt=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);function I(t,e,n){let{fragment:o,on_mount:s,on_destroy:c,after_update:l}=t.$$;o&&o.m(e,n),m(()=>{let r=s.map(v).filter(A);c?c.push(...r):f(r),t.$$.on_mount=[]}),l.forEach(m)}function C(t,e){let n=t.$$;n.fragment!==null&&(f(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){t.$$.dirty[0]===-1&&(a.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,o,s,c,l=[-1]){let r=E;d(t);let i=t.$$={fragment:null,ctx:null,props:c,update:h,not_equal:s,bound:k(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:k(),dirty:l,skip_bound:!1},F=!1;if(i.ctx=n?n(t,e.props||{},(u,b,...$)=>{let w=$.length?$[0]:b;return i.ctx&&s(i.ctx[u],i.ctx[u]=w)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](w),F&&H(t,u)),b}):[],i.update(),F=!0,f(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){let u=N(e.target);i.fragment&&i.fragment.l(u),u.forEach(M)}else i.fragment&&i.fragment.c();e.intro&&B(t.$$.fragment),I(t,e.target,e.anchor),D()}d(r)}var W;typeof HTMLElement=="function"&&(W=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){for(let t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){C(this,1),this.$destroy=h}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!x(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var U=class{$destroy(){C(this,1),this.$destroy=h}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!x(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};export{h as a,f as b,J as c,K as d,Q as e,M as f,j as g,q as h,N as i,X as j,Z as k,E as l,d as m,D as n,z as o,B as p,I as q,C as r,it as s,U as t};
//# sourceMappingURL=chunk.V6RNYJFM.js.map