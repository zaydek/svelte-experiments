function M(){}function X(e,t){for(let r in t)e[r]=t[r];return e}function Et(e){return e()}function xt(){return Object.create(null)}function V(e){e.forEach(Et)}function rt(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ot(e){return Object.keys(e).length===0}function at(e,...t){if(e==null)return M;let r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function _t(e){let t;return at(e,r=>t=r)(),t}function ot(e,t,r){e.$$.on_destroy.push(at(t,r))}function U(e,t,r,n){if(e){let o=Ct(e,t,r,n);return e[0](o)}}function Ct(e,t,r,n){return e[1]&&n?X(r.ctx.slice(),e[1](n(t))):r.ctx}function Kt(e,t,r,n){if(e[2]&&n){let o=e[2](n(r));if(t.dirty===void 0)return o;if(typeof o=="object"){let l=[],c=Math.max(t.dirty.length,o.length);for(let u=0;u<c;u+=1)l[u]=t.dirty[u]|o[u];return l}return t.dirty|o}return t.dirty}function W(e,t,r,n,o,l,c){let u=Kt(t,n,o,l);if(u){let s=Ct(t,r,n,c);e.p(s,u)}}function Dt(e){let t={};for(let r in e)r[0]!=="$"&&(t[r]=e[r]);return t}function dt(e,t){let r={};t=new Set(t);for(let n in e)!t.has(n)&&n[0]!=="$"&&(r[n]=e[n]);return r}var Ce=typeof window!="undefined";var De=new Set;function k(e,t){e.appendChild(t)}function g(e,t,r){e.insertBefore(t,r||null)}function m(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function Qt(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function C(){return E(" ")}function H(){return E("")}function At(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Xt(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function pt(e,t){let r=Object.getOwnPropertyDescriptors(e.__proto__);for(let n in t)t[n]==null?e.removeAttribute(n):n==="style"?e.style.cssText=t[n]:n==="__value"?e.value=e[n]=t[n]:r[n]&&r[n].set?e[n]=t[n]:Xt(e,n,t[n])}function q(e){return Array.from(e.childNodes)}function S(e,t,r,n){for(let o=0;o<e.length;o+=1){let l=e[o];if(l.nodeName===t){let c=0,u=[];for(;c<l.attributes.length;){let s=l.attributes[c++];r[s.name]||u.push(s.name)}for(let s=0;s<u.length;s++)l.removeAttribute(u[s]);return e.splice(o,1)[0]}}return n?Qt(t):v(t)}function D(e,t){for(let r=0;r<e.length;r+=1){let n=e[r];if(n.nodeType===3)return n.data=""+t,e.splice(r,1)[0]}return E(t)}function A(e){return D(e," ")}var Ae=new Set;var st;function it(e){st=e}function Zt(){if(!st)throw new Error("Function called outside component initialization");return st}function Z(e){Zt().$$.on_mount.push(e)}var tt=[];var Rt=[],lt=[],Mt=[],te=Promise.resolve(),mt=!1;function ee(){mt||(mt=!0,te.then(jt))}function ht(e){lt.push(e)}var $t=!1,gt=new Set;function jt(){if(!$t){$t=!0;do{for(let e=0;e<tt.length;e+=1){let t=tt[e];it(t),ne(t.$$)}for(it(null),tt.length=0;Rt.length;)Rt.pop()();for(let e=0;e<lt.length;e+=1){let t=lt[e];gt.has(t)||(gt.add(t),t())}lt.length=0}while(tt.length);for(;Mt.length;)Mt.pop()();mt=!1,$t=!1,gt.clear()}}function ne(e){if(e.fragment!==null){e.update(),V(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ht)}}var ut=new Set,I;function ct(){I={r:0,c:[],p:I}}function ft(){I.r||V(I.c),I=I.p}function h(e,t){e&&e.i&&(ut.delete(e),e.i(t))}function $(e,t,r,n){if(e&&e.o){if(ut.has(e))return;ut.add(e),I.c.push(()=>{ut.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}}var Re=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Tt(e,t){let r={},n={},o={$$scope:1},l=e.length;for(;l--;){let c=e[l],u=t[l];if(u){for(let s in c)s in u||(n[s]=1);for(let s in u)o[s]||(r[s]=u[s],o[s]=1);e[l]=u}else for(let s in c)o[s]=1}for(let c in n)c in r||(r[c]=void 0);return r}var Me=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);function w(e){e&&e.c()}function F(e,t){e&&e.l(t)}function y(e,t,r){let{fragment:n,on_mount:o,on_destroy:l,after_update:c}=e.$$;n&&n.m(t,r),ht(()=>{let u=o.map(Et).filter(rt);l?l.push(...u):V(u),e.$$.on_mount=[]}),c.forEach(ht)}function b(e,t){let r=e.$$;r.fragment!==null&&(V(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(tt.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(e,t,r,n,o,l,c=[-1]){let u=st;it(e);let s=e.$$={fragment:null,ctx:null,props:l,update:M,not_equal:o,bound:xt(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:xt(),dirty:c,skip_bound:!1},f=!1;if(s.ctx=r?r(e,t.props||{},(d,i,...a)=>{let T=a.length?a[0]:i;return s.ctx&&o(s.ctx[d],s.ctx[d]=T)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](T),f&&re(e,d)),i}):[],s.update(),f=!0,V(s.before_update),s.fragment=n?n(s.ctx):!1,t.target){if(t.hydrate){let d=q(t.target);s.fragment&&s.fragment.l(d),d.forEach(m)}else s.fragment&&s.fragment.c();t.intro&&h(e.$$.fragment),y(e,t.target,t.anchor),jt()}it(u)}var oe;typeof HTMLElement=="function"&&(oe=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,r){this[e]=r}$destroy(){b(this,1),this.$destroy=M}$on(e,t){let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}$set(e){this.$$set&&!Ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var R=class{$destroy(){b(this,1),this.$destroy=M}$on(t,r){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{let o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Ot(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var Y=[];function qt(e,t=M){let r,n=[];function o(u){if(x(e,u)&&(e=u,r)){let s=!Y.length;for(let f=0;f<n.length;f+=1){let d=n[f];d[1](),Y.push(d,e)}if(s){for(let f=0;f<Y.length;f+=2)Y[f][0](Y[f+1]);Y.length=0}}}function l(u){o(u(e))}function c(u,s=M){let f=[u,s];return n.push(f),n.length===1&&(r=t(o)||M),u(e),()=>{let d=n.indexOf(f);d!==-1&&n.splice(d,1),n.length===0&&(r(),r=null)}}return{set:o,update:l,subscribe:c}}function se(e){let t,r=e[1].default,n=U(r,e,e[0],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,l){n&&n.m(o,l),t=!0},p(o,[l]){n&&n.p&&l&1&&W(n,r,o,o[0],l,null,null)},i(o){t||(h(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}var Pt={};function Lt(e){Pt[e]=!0}function J(e){return Pt[e]===!0}function bt(e){return/\.html?$/.test(e)?e.slice(0,-5):e}function Nt(e,t=[0,0]){e!==_t(L)&&(L.set(e),J(e)&&window.history.pushState({},"",bt(e)),window.scrollTo(t[0],t[1]))}function G(e,t=[0,0]){L.set(e),J(e)&&window.history.replaceState({},"",bt(e)),window.scrollTo(t[0],t[1])}function Bt(){return typeof window=="undefined"?"/":bt(window.location.pathname)}var L=qt(Bt());function ie(e,t,r){let{$$slots:n={},$$scope:o}=t;return Z(()=>{let l=()=>{L.set(Bt())};return window.addEventListener("popstate",l),()=>window.removeEventListener("popstate",l)}),e.$$set=l=>{"$$scope"in l&&r(0,o=l.$$scope)},[o,n]}var Ht=class extends R{constructor(t){super();j(this,t,ie,se,x,{})}},It=Ht;function le(e){let t,r,n,o,l,c,u=e[5].default,s=U(u,e,e[4],null),f=[{href:e[0]},{target:r=e[2]?void 0:"_blank"},{rel:n=e[2]?void 0:"noreferrer noopener"},e[3]],d={};for(let i=0;i<f.length;i+=1)d=X(d,f[i]);return{c(){t=v("a"),s&&s.c(),this.h()},l(i){t=S(i,"A",{href:!0,target:!0,rel:!0});var a=q(t);s&&s.l(a),a.forEach(m),this.h()},h(){pt(t,d)},m(i,a){g(i,t,a),s&&s.m(t,null),o=!0,l||(c=At(t,"click",function(){rt(e[2]?e[6]:void 0)&&(e[2]?e[6]:void 0).apply(this,arguments)}),l=!0)},p(i,[a]){e=i,s&&s.p&&a&16&&W(s,u,e,e[4],a,null,null),pt(t,d=Tt(f,[(!o||a&1)&&{href:e[0]},(!o||a&4&&r!==(r=e[2]?void 0:"_blank"))&&{target:r},(!o||a&4&&n!==(n=e[2]?void 0:"noreferrer noopener"))&&{rel:n},a&8&&e[3]]))},i(i){o||(h(s,i),o=!0)},o(i){$(s,i),o=!1},d(i){i&&m(t),s&&s.d(i),l=!1,c()}}}function ue(e,t,r){let n,o=["path","scrollTo"],l=dt(t,o),{$$slots:c={},$$scope:u}=t,{path:s}=t,{scrollTo:f=[0,0]}=t,d=i=>{if(i.preventDefault(),!J(s)){G("/404",f);return}Nt(s,f)};return e.$$set=i=>{t=X(X({},t),Dt(i)),r(3,l=dt(t,o)),"path"in i&&r(0,s=i.path),"scrollTo"in i&&r(1,f=i.scrollTo),"$$scope"in i&&r(4,u=i.$$scope)},e.$$.update=()=>{if(e.$$.dirty&1){t:r(2,n=typeof s=="string"&&!/^https?:\/\//.test(s))}},[s,f,n,l,u,c,d]}var zt=class extends R{constructor(t){super();j(this,t,ue,le,x,{path:0,scrollTo:1})}},K=zt;function ce(e,t,r){let{path:n}=t,{scrollTo:o=[0,0]}=t;return G(n,o),e.$$set=l=>{"path"in l&&r(0,n=l.path),"scrollTo"in l&&r(1,o=l.scrollTo)},[n,o]}var Vt=class extends R{constructor(t){super();j(this,t,ce,null,x,{path:0,scrollTo:1})}},Ut=Vt;function Wt(e){let t,r,n,o,l=[ae,fe],c=[];function u(s,f){return s[0]?0:1}return t=u(e,-1),r=c[t]=l[t](e),{c(){r.c(),n=H()},l(s){r.l(s),n=H()},m(s,f){c[t].m(s,f),g(s,n,f),o=!0},p(s,f){let d=t;t=u(s,f),t===d?c[t].p(s,f):(ct(),$(c[d],1,1,()=>{c[d]=null}),ft(),r=c[t],r?r.p(s,f):(r=c[t]=l[t](s),r.c()),h(r,1),r.m(n.parentNode,n))},i(s){o||(h(r),o=!0)},o(s){$(r),o=!1},d(s){c[t].d(s),s&&m(n)}}}function fe(e){let t,r=e[4].default,n=U(r,e,e[3],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,l){n&&n.m(o,l),t=!0},p(o,l){n&&n.p&&l&8&&W(n,r,o,o[3],l,null,null)},i(o){t||(h(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}function ae(e){let t,r,n;var o=e[0];function l(c){return{}}return o&&(t=new o(l(e))),{c(){t&&w(t.$$.fragment),r=H()},l(c){t&&F(t.$$.fragment,c),r=H()},m(c,u){t&&y(t,c,u),g(c,r,u),n=!0},p(c,u){if(o!==(o=c[0])){if(t){ct();let s=t;$(s.$$.fragment,1,0,()=>{b(s,1)}),ft()}o?(t=new o(l(c)),w(t.$$.fragment),h(t.$$.fragment,1),y(t,r.parentNode,r)):t=null}},i(c){n||(t&&h(t.$$.fragment,c),n=!0)},o(c){t&&$(t.$$.fragment,c),n=!1},d(c){c&&m(r),t&&b(t,c)}}}function _e(e){let t,r,n=e[2]===e[1]&&Wt(e);return{c(){n&&n.c(),t=H()},l(o){n&&n.l(o),t=H()},m(o,l){n&&n.m(o,l),g(o,t,l),r=!0},p(o,[l]){o[2]===o[1]?n?(n.p(o,l),l&6&&h(n,1)):(n=Wt(o),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(ct(),$(n,1,1,()=>{n=null}),ft())},i(o){r||(h(n),r=!0)},o(o){$(n),r=!1},d(o){n&&n.d(o),o&&m(t)}}}function de(e,t,r){let n;ot(e,L,s=>r(2,n=s));let{$$slots:o={},$$scope:l}=t,{component:c=void 0}=t,{path:u}=t;return Lt(u),e.$$set=s=>{"component"in s&&r(0,c=s.component),"path"in s&&r(1,u=s.path),"$$scope"in s&&r(3,l=s.$$scope)},[c,u,n,l,o]}var Yt=class extends R{constructor(t){super();j(this,t,de,_e,x,{component:0,path:1})}},Q=Yt;function pe(e){let t;return{c(){t=E("Open page /")},l(r){t=D(r,"Open page /")},m(r,n){g(r,t,n)},d(r){r&&m(t)}}}function me(e){let t;return{c(){t=E("Open page /a")},l(r){t=D(r,"Open page /a")},m(r,n){g(r,t,n)},d(r){r&&m(t)}}}function he(e){let t;return{c(){t=E("Open page /b")},l(r){t=D(r,"Open page /b")},m(r,n){g(r,t,n)},d(r){r&&m(t)}}}function $e(e){let t;return{c(){t=E("Open page /oops")},l(r){t=D(r,"Open page /oops")},m(r,n){g(r,t,n)},d(r){r&&m(t)}}}function ge(e){let t;return{c(){t=E("Totally broken link")},l(r){t=D(r,"Totally broken link")},m(r,n){g(r,t,n)},d(r){r&&m(t)}}}function be(e){let t,r;return{c(){t=v("div"),r=E("Hello, world! (/)")},l(n){t=S(n,"DIV",{});var o=q(t);r=D(o,"Hello, world! (/)"),o.forEach(m)},m(n,o){g(n,t,o),k(t,r)},d(n){n&&m(t)}}}function ye(e){let t,r;return{c(){t=v("div"),r=E("Hello, world! (/a)")},l(n){t=S(n,"DIV",{});var o=q(t);r=D(o,"Hello, world! (/a)"),o.forEach(m)},m(n,o){g(n,t,o),k(t,r)},d(n){n&&m(t)}}}function we(e){let t,r;return{c(){t=v("div"),r=E("Hello, world! (/b)")},l(n){t=S(n,"DIV",{});var o=q(t);r=D(o,"Hello, world! (/b)"),o.forEach(m)},m(n,o){g(n,t,o),k(t,r)},d(n){n&&m(t)}}}function ve(e){let t,r;return t=new Ut({props:{path:"/a"}}),{c(){w(t.$$.fragment)},l(n){F(t.$$.fragment,n)},m(n,o){y(t,n,o),r=!0},p:M,i(n){r||(h(t.$$.fragment,n),r=!0)},o(n){$(t.$$.fragment,n),r=!1},d(n){b(t,n)}}}function Fe(e){let t,r;return{c(){t=v("div"),r=E("Oops, something went wrong (/404)")},l(n){t=S(n,"DIV",{});var o=q(t);r=D(o,"Oops, something went wrong (/404)"),o.forEach(m)},m(n,o){g(n,t,o),k(t,r)},d(n){n&&m(t)}}}function ke(e){let t,r,n,o,l,c,u,s,f,d;return t=new Q({props:{path:"/",$$slots:{default:[be]},$$scope:{ctx:e}}}),n=new Q({props:{path:"/a",$$slots:{default:[ye]},$$scope:{ctx:e}}}),l=new Q({props:{path:"/b",$$slots:{default:[we]},$$scope:{ctx:e}}}),u=new Q({props:{path:"/oops",$$slots:{default:[ve]},$$scope:{ctx:e}}}),f=new Q({props:{path:"/404",$$slots:{default:[Fe]},$$scope:{ctx:e}}}),{c(){w(t.$$.fragment),r=C(),w(n.$$.fragment),o=C(),w(l.$$.fragment),c=C(),w(u.$$.fragment),s=C(),w(f.$$.fragment)},l(i){F(t.$$.fragment,i),r=A(i),F(n.$$.fragment,i),o=A(i),F(l.$$.fragment,i),c=A(i),F(u.$$.fragment,i),s=A(i),F(f.$$.fragment,i)},m(i,a){y(t,i,a),g(i,r,a),y(n,i,a),g(i,o,a),y(l,i,a),g(i,c,a),y(u,i,a),g(i,s,a),y(f,i,a),d=!0},p(i,a){let T={};a&2&&(T.$$scope={dirty:a,ctx:i}),t.$set(T);let O={};a&2&&(O.$$scope={dirty:a,ctx:i}),n.$set(O);let z={};a&2&&(z.$$scope={dirty:a,ctx:i}),l.$set(z);let N={};a&2&&(N.$$scope={dirty:a,ctx:i}),u.$set(N);let B={};a&2&&(B.$$scope={dirty:a,ctx:i}),f.$set(B)},i(i){d||(h(t.$$.fragment,i),h(n.$$.fragment,i),h(l.$$.fragment,i),h(u.$$.fragment,i),h(f.$$.fragment,i),d=!0)},o(i){$(t.$$.fragment,i),$(n.$$.fragment,i),$(l.$$.fragment,i),$(u.$$.fragment,i),$(f.$$.fragment,i),d=!1},d(i){b(t,i),i&&m(r),b(n,i),i&&m(o),b(l,i),i&&m(c),b(u,i),i&&m(s),b(f,i)}}}function Se(e){let t,r,n,o,l,c,u,s,f,d,i,a,T,O,z,N,B,et,P,nt;return r=new K({props:{path:"/",$$slots:{default:[pe]},$$scope:{ctx:e}}}),l=new K({props:{path:"/a",$$slots:{default:[me]},$$scope:{ctx:e}}}),s=new K({props:{path:"/b",$$slots:{default:[he]},$$scope:{ctx:e}}}),i=new K({props:{path:"/oops",$$slots:{default:[$e]},$$scope:{ctx:e}}}),O=new K({props:{path:"/40asdasd4",$$slots:{default:[ge]},$$scope:{ctx:e}}}),P=new It({props:{$$slots:{default:[ke]},$$scope:{ctx:e}}}),{c(){t=v("nav"),w(r.$$.fragment),n=v("br"),o=C(),w(l.$$.fragment),c=v("br"),u=C(),w(s.$$.fragment),f=v("br"),d=C(),w(i.$$.fragment),a=v("br"),T=C(),w(O.$$.fragment),z=v("br"),N=C(),B=v("br"),et=C(),w(P.$$.fragment)},l(_){t=S(_,"NAV",{});var p=q(t);F(r.$$.fragment,p),n=S(p,"BR",{}),o=A(p),F(l.$$.fragment,p),c=S(p,"BR",{}),u=A(p),F(s.$$.fragment,p),f=S(p,"BR",{}),d=A(p),F(i.$$.fragment,p),a=S(p,"BR",{}),T=A(p),F(O.$$.fragment,p),z=S(p,"BR",{}),p.forEach(m),N=A(_),B=S(_,"BR",{}),et=A(_),F(P.$$.fragment,_)},m(_,p){g(_,t,p),y(r,t,null),k(t,n),k(t,o),y(l,t,null),k(t,c),k(t,u),y(s,t,null),k(t,f),k(t,d),y(i,t,null),k(t,a),k(t,T),y(O,t,null),k(t,z),g(_,N,p),g(_,B,p),g(_,et,p),y(P,_,p),nt=!0},p(_,[p]){let yt={};p&2&&(yt.$$scope={dirty:p,ctx:_}),r.$set(yt);let wt={};p&2&&(wt.$$scope={dirty:p,ctx:_}),l.$set(wt);let vt={};p&2&&(vt.$$scope={dirty:p,ctx:_}),s.$set(vt);let Ft={};p&2&&(Ft.$$scope={dirty:p,ctx:_}),i.$set(Ft);let kt={};p&2&&(kt.$$scope={dirty:p,ctx:_}),O.$set(kt);let St={};p&2&&(St.$$scope={dirty:p,ctx:_}),P.$set(St)},i(_){nt||(h(r.$$.fragment,_),h(l.$$.fragment,_),h(s.$$.fragment,_),h(i.$$.fragment,_),h(O.$$.fragment,_),h(P.$$.fragment,_),nt=!0)},o(_){$(r.$$.fragment,_),$(l.$$.fragment,_),$(s.$$.fragment,_),$(i.$$.fragment,_),$(O.$$.fragment,_),$(P.$$.fragment,_),nt=!1},d(_){_&&m(t),b(r),b(l),b(s),b(i),b(O),_&&m(N),_&&m(B),_&&m(et),b(P,_)}}}function Ee(e,t,r){let n;return ot(e,L,o=>r(0,n=o)),Z(()=>{J(n)||G("/404")}),[]}var Jt=class extends R{constructor(t){super();j(this,t,Ee,Se,x,{})}},Gt=Jt;var xe=new Gt({target:document.body});export{xe as default};
//# sourceMappingURL=app.js.map