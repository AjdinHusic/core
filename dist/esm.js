/*! (c) Andrea Giammarchi - ISC */
var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=s.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},s;function s(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(i,this)}function i(t){this.set(t[0],t[1])}}(Math.random(),Object)}var e,n=t.WeakMap,r="-"+Math.random().toFixed(6)+"%",o=!1;
/*! (c) Andrea Giammarchi - ISC */try{"content"in(e=document.createElement("template"))&&(e.innerHTML='<p tabindex="'+r+'"></p>',e.content.childNodes[0].getAttribute("tabindex")==r)||(r="_dt: "+r.slice(1,-1)+";",o=!0)}catch(t){}var s="\x3c!--"+r+"--\x3e",i=/^(?:style|textarea)$/i,a=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function c(t){return t.join(s).replace(v,w).replace(d,m)}var u=" \\f\\n\\r\\t",l="[^ \\f\\n\\r\\t\\/>\"'=]+",f="[ \\f\\n\\r\\t]+"+l,h="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+l.replace("\\/","")+"))?)",d=new RegExp(h+f+p+"+)(["+u+"]*/?>)","g"),v=new RegExp(h+f+p+"*)(["+u+"]*/>)","g"),g=new RegExp("("+f+"\\s*=\\s*)(['\"]?)"+s+"\\2","gi");function m(t,e,n,r){return"<"+e+n.replace(g,y)+r}function y(t,e,n){return e+(n||'"')+r+(n||'"')}function w(t,e,n){return a.test(e)?t:"<"+e+n+"></"+e+">"}const{isArray:b}=Array,{indexOf:_,slice:x}=[];var N=t=>({get:e=>t.get(e),set:(e,n)=>(t.set(e,n),n)});const C=(t,e)=>111===t.nodeType?1/e<0?e?(({firstChild:t,lastChild:e})=>{const n=document.createRange();return n.setStartAfter(t),n.setEndAfter(e),n.deleteContents(),t})(t):t.lastChild:e?t.valueOf():t.firstChild:t,S=t=>{const{childNodes:e}=t,{length:n}=e;if(n<2)return e[0];const r=x.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(e.length!==n){let e=0;for(;e<n;)t.appendChild(r[e++])}return t}}};
/*! (c) Andrea Giammarchi - ISC */
var k=function(t){var e="content"in r("template")?function(t){var e=r("template");return e.innerHTML=t,e.content}:function(t){var e=r("fragment"),o=r("template"),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;o.innerHTML="<table>"+t+"</table>",s=o.querySelectorAll(i)}else o.innerHTML=t,s=o.childNodes;return n(e,s),e};return function(t,n){return("svg"===n?o:e)(t)};function n(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function r(e){return"fragment"===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}function o(t){var e=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",n(e,o.firstChild.childNodes),e}}(document),M=(t,e,n,r,o)=>{const s=n.length;let i=e.length,a=s,c=0,u=0,l=null;for(;c<i||u<a;)if(i===c){const e=a<s?u?r(n[u-1],-0).nextSibling:r(n[a-u],0):o;for(;u<a;)t.insertBefore(r(n[u++],1),e)}else if(a===u)for(;c<i;)l&&l.has(e[c])||t.removeChild(r(e[c],-1)),c++;else if(e[c]===n[u])c++,u++;else if(e[i-1]===n[a-1])i--,a--;else if(e[c]===n[a-1]&&n[u]===e[i-1]){const o=r(e[--i],-1).nextSibling;t.insertBefore(r(n[u++],1),r(e[c++],-1).nextSibling),t.insertBefore(r(n[--a],1),o),e[i]=n[a]}else{if(!l){l=new Map;let t=u;for(;t<a;)l.set(n[t],t++)}if(l.has(e[c])){const o=l.get(e[c]);if(u<o&&o<a){let s=c,f=1;for(;++s<i&&s<a&&l.get(e[s])===o+f;)f++;if(f>o-u){const s=r(e[c],0);for(;u<o;)t.insertBefore(r(n[u++],1),s)}else t.replaceChild(r(n[u++],1),r(e[c++],-1))}else c++}else t.removeChild(r(e[c++],-1))}return n},E={};try{E.WeakMap=WeakMap}catch(t){E.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=s.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},s;function s(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(i,this)}function i(t){this.set(t[0],t[1])}}(Math.random(),Object)}var A=E.WeakMap,O=function(t){var e="content"in r("template")?function(t){var e=r("template");return e.innerHTML=t,e.content}:function(t){var e=r("fragment"),o=r("template"),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;o.innerHTML="<table>"+t+"</table>",s=o.querySelectorAll(i)}else o.innerHTML=t,s=o.childNodes;return n(e,s),e};return function(t,n){return("svg"===n?o:e)(t)};function n(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function r(e){return"fragment"===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}function o(t){var e=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",n(e,o.firstChild.childNodes),e}}(document),j=function(t,e,n,r,o){var s="importNode"in t,i=t.createDocumentFragment();return i.appendChild(t.createTextNode("g")),i.appendChild(t.createTextNode("")),(s?t.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function t(e,n){for(var r=e.cloneNode(),o=e.childNodes||[],s=o.length,i=0;n&&i<s;i++)r.appendChild(t(o[i],n));return r}:s?t.importNode:function(t,e){return t.cloneNode(!!e)}}(document),T="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},L=o?function(t,e){var n=e.join(" ");return e.slice.call(t,0).sort((function(t,e){return n.indexOf(t.name)<=n.indexOf(e.name)?-1:1}))}:function(t,e){return e.slice.call(t,0)};
/*! (c) Andrea Giammarchi - ISC */function R(t,e){for(var n=e.length,r=0;r<n;)t=t.childNodes[e[r++]];return t}function P(t,e,n,i){for(var a=t.attributes,c=[],u=[],l=L(a,n),f=l.length,h=0;h<f;){var p,d=l[h++],v=d.value===r;if(v||1<(p=d.value.split(s)).length){var g=d.name;if(c.indexOf(g)<0){c.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=a[m]||a[m.toLowerCase()];if(v)e.push(H(y,i,m,null));else{for(var w=p.length-2;w--;)n.shift();e.push(H(y,i,m,p))}}u.push(d)}}h=0;for(var b=(0<(f=u.length)&&o&&!("ownerSVGElement"in t));h<f;){var _=u[h++];b&&(_.value=""),t.removeAttribute(_.name)}var x=t.nodeName;if(/^script$/i.test(x)){var N=document.createElement(x);for(f=a.length,h=0;h<f;)N.setAttributeNode(a[h++].cloneNode(!0));N.textContent=t.textContent,t.parentNode.replaceChild(N,t)}}function D(t,e){return{type:"any",node:t,path:e}}function H(t,e,n,r){return{type:"attr",node:t,path:e,name:n,sparse:r}}function U(t,e){return{type:"text",node:t,path:e}}var z=N(new A);function W(t,e){var n=(t.convert||c)(e),o=t.transform;o&&(n=o(n));var a=O(n,t.type);Z(a);var u=[];return function t(e,n,o,a){for(var c=e.childNodes,u=c.length,l=0;l<u;){var f=c[l];switch(f.nodeType){case 1:var h=a.concat(l);P(f,n,o,h),t(f,n,o,h);break;case 8:var p=f.textContent;if(p===r)o.shift(),n.push(i.test(e.nodeName)?U(e,a):D(f,a.concat(l)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":e.removeChild(f),l--,u--}break;case 3:i.test(e.nodeName)&&T.call(f.textContent)===s&&(o.shift(),n.push(U(e,a)))}l++}}(a,u,e.slice(0),[]),{content:a,updates:function(n){for(var r=[],o=u.length,s=0,i=0;s<o;){var a=u[s++],c=R(n,a.path);switch(a.type){case"any":r.push({fn:t.any(c,[]),sparse:!1});break;case"attr":var l=a.sparse,f=t.attribute(c,a.name,a.node);null===l?r.push({fn:f,sparse:!1}):(i+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:t.text(c),sparse:!1}),c.textContent=""}}return o+=i,function(){var t=arguments.length;if(o!==t-1)throw new Error(t-1+" values instead of "+o+"\n"+e.join("${value}"));for(var s=1,i=1;s<t;){var a=r[s-i];if(a.sparse){var c=a.values,u=c[0],l=1,f=c.length;for(i+=f-2;l<f;)u+=arguments[s++]+c[l++];a.fn(u)}else a.fn(arguments[s++])}return n}}}}function $(t,e){var n=z.get(e)||z.set(e,W(t,e));return n.updates(j.call(document,n.content,!0))}var F=[];function Z(t){for(var e=t.childNodes,n=e.length;n--;){var r=e[n];1!==r.nodeType&&0===T.call(r.textContent).length&&t.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */var I=function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=/([^A-Z])([A-Z]+)/g;return function(t,e){return"ownerSVGElement"in t?function(t,e){var n;e?n=e.cloneNode(!0):(t.setAttribute("style","--hyper:style;"),n=t.getAttributeNode("style"));return n.value="",t.setAttributeNode(n),r(n,!0)}(t,e):r(t.style,!1)};function n(t,e,n){return e+"-"+n.toLowerCase()}function r(r,o){var s,i;return function(a){var c,u,l,f;switch(typeof a){case"object":if(a){if("object"===s){if(!o&&i!==a)for(u in i)u in a||(r[u]="")}else o?r.value="":r.cssText="";for(u in c=o?{}:r,a)l="number"!=typeof(f=a[u])||t.test(u)?f:f+"px",!o&&/^--/.test(u)?c.setProperty(u,l):c[u]=l;s="object",o?r.value=function(t){var r,o=[];for(r in t)o.push(r.replace(e,n),":",t[r],";");return o.join("")}(i=c):i=a;break}default:i!=a&&(s="string",i=a,o?r.value=a||"":r.cssText=a||"")}}}}();const B=(t,e)=>{let n,r=!0;const o=document.createAttributeNS(null,e);return e=>{n!==e&&(n=e,null==n?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}},q=(t,e)=>n=>{t[e]=n},G=/^(?:form|list)$/i,V=(t,e)=>t.ownerDocument.createTextNode(e);function J(t){return this.type=t,e=this,n=F,r=Z,function(t){return n!==t&&(r=$(e,n=t)),r.apply(null,arguments)};var e,n,r}function K(t){return t(this)}J.prototype={attribute(t,e,n){const r="svg"===this.type;switch(e){case"class":if(r)return B(t,e);e="className";case"props":return q(t,e);case"aria":return(t=>e=>{for(const n in e)t.setAttribute("role"===n?n:"aria-"+n,e[n])})(t);case"style":return I(t,n,r);case"ref":return(t=>e=>{"function"==typeof e?e(t):e.current=t})(t);case".dataset":return(({dataset:t})=>e=>{for(const n in e)t[n]=e[n]})(t);default:return"."===e.slice(0,1)?q(t,e.slice(1)):"on"===e.slice(0,2)?((t,e)=>{let n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),e=>{const o=b(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}})(t,e):!(e in t)||r||G.test(e)?B(t,e):((t,e)=>{let n;return r=>{n!==r&&(n=r,t[e]!==r&&(null==r?(t[e]="",t.removeAttribute(e)):t[e]=r))}})(t,e)}},any(t,e){const{type:n}=this;let r,o=!1;const s=i=>{switch(typeof i){case"string":case"number":case"boolean":o?r!==i&&(r=i,e[0].textContent=i):(o=!0,r=i,e=M(t.parentNode,e,[V(t,i)],C,t));break;case"function":s(i(t));break;case"object":case"undefined":if(null==i){o=!1,e=M(t.parentNode,e,[],C,t);break}default:if(o=!1,r=i,b(i))if(0===i.length)e.length&&(e=M(t.parentNode,e,[],C,t));else switch(typeof i[0]){case"string":case"number":case"boolean":s(String(i));break;case"function":s(i.map(K,t));break;case"object":b(i[0])&&(i=i.concat.apply([],i));default:e=M(t.parentNode,e,i,C,t)}else"ELEMENT_NODE"in i?e=M(t.parentNode,e,11===i.nodeType?x.call(i.childNodes):[i],C,t):"text"in i?s(String(i.text)):"any"in i?s(i.any):"html"in i?e=M(t.parentNode,e,x.call(k([].concat(i.html).join(""),n).childNodes),C,t):"length"in i&&s(x.call(i))}};return s},text(t){let e;const n=r=>{if(e!==r){e=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(x.call(r).join("")):"function"===o?n(r(t)):t.textContent=null==r?"":r}};return n}};const{create:Q,freeze:X,keys:Y}=Object,tt=J.prototype,et=N(new n),nt=t=>({html:ot("html",t),svg:ot("svg",t),render(e,n){const r="function"==typeof n?n():n,o=et.get(e)||et.set(e,rt()),s=r instanceof at?st(t,o,r):r;return s!==o.wire&&(o.wire=s,e.textContent="",e.appendChild(s.valueOf())),e}}),rt=()=>({stack:[],entry:null,wire:null}),ot=(t,e)=>{const r=N(new n);return o.for=(t,n)=>{const s=r.get(t)||r.set(t,Q(null));return s[n]||(s[n]=(i=rt(),function(){return st(e,i,o.apply(null,arguments))}));var i},o.node=function(){return st(e,rt(),o.apply(null,arguments)).valueOf()},o;function o(){return new at(t,pt.apply(null,arguments))}},st=(t,e,{type:n,template:r,values:o})=>{const{length:s}=o;it(t,e,o,s);let{entry:i}=e;if(i&&i.template===r&&i.type===n)i.tag(r,...o);else{const s=new t(n);e.entry=i={type:n,template:r,tag:s,wire:S(s(r,...o))}}return i.wire},it=(t,{stack:e},n,r)=>{for(let o=0;o<r;o++){const r=n[o];r instanceof ct?n[o]=st(t,e[o]||(e[o]=rt()),r):b(r)?it(t,e[o]||(e[o]=rt()),r,r.length):e[o]=null}r<e.length&&e.splice(r)};function at(t,e){this.type=t,this.template=e.shift(),this.values=e}X(at);const ct=at,ut=t=>{const e=Q(tt);return Y(t).forEach(n=>{e[n]=t[n](e[n]||("convert"===n?c:String))}),n.prototype=e,nt(n);function n(){return J.apply(this,arguments)}},{render:lt,html:ft,svg:ht}=nt(J);function pt(){let t=[],e=0,{length:n}=arguments;for(;e<n;)t.push(arguments[e++]);return t}function dt(t){const{svg:e,html:n,render:r}=ut({attribute(e){return(n,r,o)=>n instanceof t&&"ref"!==r?t=>{n._setProps({[r]:t})}:n instanceof t&&"ref"===r?t=>{e.apply(this,[n,r,o])(t),n.__ref=!0,n!=t.current&&n.forceUpdate()}:n?e.apply(this,[n,r,o]):()=>{}}});return{svg:e,html:n,render:r}}var vt="function"==typeof WeakSet,gt=Object.keys;function mt(t,e){t&&"object"==typeof t&&e.add(t)}function yt(t,e,n,r){for(var o,s=t.length,i=0;i<s;i++)if(n((o=t[i])[0],e[0],r)&&n(o[1],e[1],r))return!0;return!1}function wt(t,e,n,r){for(var o=t.length,s=0;s<o;s++)if(n(t[s],e,r))return!0;return!1}function bt(t,e){return t===e||t!=t&&e!=e}function _t(t){return t.constructor===Object||null==t.constructor}function xt(t){return!!t&&"function"==typeof t.then}function Nt(t){return!(!t||!t.$$typeof)}function Ct(){return Object.create({_values:[],add:function(t){this._values.push(t)},has:function(t){return-1!==this._values.indexOf(t)}})}var St=vt?function(){return new WeakSet}:Ct;function kt(t){return function(e){var n=t||e;return function(t,e,r){void 0===r&&(r=St());var o=r.has(t),s=r.has(e);return o||s?o&&s:(mt(t,r),mt(e,r),n(t,e,r))}}}function Mt(t){var e=new Array(t.size),n=0;return t.forEach((function(t,r){e[n++]=[r,t]})),e}function Et(t){var e=new Array(t.size),n=0;return t.forEach((function(t){e[n++]=t})),e}var At=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function Ot(t,e,n,r){var o,s=gt(t),i=s.length;if(gt(e).length!==i)return!1;for(var a=0;a<i;a++){if(o=s[a],!At(e,o))return!1;if("_owner"===o&&Nt(t)){if(!Nt(e))return!1}else if(!n(t[o],e[o],r))return!1}return!0}var jt=Array.isArray,Tt="function"==typeof Map,Lt="function"==typeof Set;function Rt(t){var e="function"==typeof t?t(n):n;function n(t,n,r){if(bt(t,n))return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(_t(t)&&_t(n))return Ot(t,n,e,r);var o=jt(t),s=jt(n);if(o||s)return o===s&&function(t,e,n,r){var o=t.length;if(e.length!==o)return!1;for(var s=0;s<o;s++)if(!n(t[s],e[s],r))return!1;return!0}(t,n,e,r);var i=t instanceof Date,a=n instanceof Date;if(i||a)return i===a&&bt(t.getTime(),n.getTime());var c=t instanceof RegExp,u=n instanceof RegExp;if(c||u)return c===u&&function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex}(t,n);if(xt(t)||xt(n))return t===n;if(Tt){var l=t instanceof Map,f=n instanceof Map;if(l||f)return l===f&&function(t,e,n,r){if(t.size!==e.size)return!1;for(var o=Mt(t),s=Mt(e),i=o.length,a=0;a<i;a++)if(!yt(s,o[a],n,r)||!yt(o,s[a],n,r))return!1;return!0}(t,n,e,r)}if(Lt){var h=t instanceof Set,p=n instanceof Set;if(h||p)return h===p&&function(t,e,n,r){if(t.size!==e.size)return!1;for(var o=Et(t),s=Et(e),i=o.length,a=0;a<i;a++)if(!wt(s,o[a],n,r)||!wt(o,s[a],n,r))return!1;return!0}(t,n,e,r)}return Ot(t,n,e,r)}return!1}return n}var Pt=Rt();Rt((function(){return bt})),Rt(kt()),Rt(kt(bt));class Dt extends HTMLElement{_mounted(){return!!this.__mounted}get props(){return{...this._props}}static get props(){return{}}static get observedAttributes(){var t=Object.keys(this.props).map(t=>t.toLowerCase());return[...new Set([...Object.keys(this.props),...t])]}_genUUID(){const t=[];for(var e=0;e<256;e++)t[e]=(e<16?"0":"")+e.toString(16);var n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,o=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return t[255&n]+t[n>>8&255]+t[n>>16&255]+t[n>>24&255]+"-"+t[255&r]+t[r>>8&255]+"-"+t[r>>16&15|64]+t[r>>24&255]+"-"+t[63&o|128]+t[o>>8&255]+"-"+t[o>>16&255]+t[o>>24&255]+t[255&s]+t[s>>8&255]+t[s>>16&255]+t[s>>24&255]}constructor(t){super(),this.__ref=!1,this.__mounted=!1,this.state={},this._props={},this.identifier=this._genUUID(),this._sheet=new CSSStyleSheet,this.__propsInitial={},this._setProps({...this.constructor.props}),t&&this._setProps({...t}),this._renderMethod()}get contents(){return this._contents||(this._contentHolder=document.createElement("template"),this._contentHolder.content.append(...this.childNodes),this._contents=[...this._contentHolder.content.childNodes]),this._contents}_renderMethod(){this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.adoptedStyleSheets=[this._sheet],this.render=Ut.bind(null,this._shadowRoot,this.render.bind(this))}_cssMethod(){this._sheet.replaceSync(this.styles())}_setProps(t){var e={...this.props};for(var n in t){let e=Object.keys(this.constructor.props).find(t=>t.toLowerCase()===n.toLowerCase());if(t.hasOwnProperty(n)){e||(console.warn("Please define your property '"+n+"' inside the 'static get props()' of '"+this.constructor.name+"', otherwise your component will not be watching this property"),e=n);let r=t[n];this._props[e]=r}}var r={...this.props};Pt(e,r)||(this.forceUpdate(),this.onDidUpdate(e,{...this.state}))}forceUpdate(t=!1){(!0===t||this._mounted())&&(this.contents,this.render(),this._sheet.replaceSync(this.styles()))}async setState(t){let e=t,n={...this.state};for(var r in"function"==typeof t&&(e=await t(this.state,this.props)),e)e.hasOwnProperty(r)&&(this.state[r]=e[r]);var o={...this.state};Pt(n,o)||(this.onDidUpdate({...this.props},n),this.forceUpdate())}attributeChangedCallback(t,e,n){if("string"==typeof n){t=Object.keys(this.props).find(e=>e.toLowerCase()===t.toLowerCase());try{n=JSON.parse(n)}catch(t){}}this._setProps({[t]:n})}connectedCallback(){this.getRootNode()instanceof DocumentFragment&&!(this.getRootNode()instanceof ShadowRoot)||(this.__mounted=!0,this.forceUpdate(),this.onDidMount())}disconnectedCallback(){this.getRootNode()instanceof DocumentFragment&&!(this.getRootNode()instanceof ShadowRoot)||(this.onWillUnmount(),this.__mounted=!1)}onDidMount(){}onWillUnmount(){}onDidUpdate(t,e){}styles(){return""}render(){return Ht`< div>
    </div>`}}const{html:Ht,render:Ut}=dt(Dt);class zt extends Dt{_renderMethod(){this.render=$t.bind(null,this,this.render.bind(this)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._sheet],this.style.display="contents"}}const{html:Wt,render:$t}=dt(Dt);function Ft(t,e={},n=null){let r="prototype"in t&&"constructor"in t.prototype?new t:t;return e&&r._setProps(e),"function"==typeof n&&n(r),r}class Zt extends Error{constructor(t){super(t)}set response(t){this._response=t}get response(){return this._response||new Response}set status(t){this._status=t}get status(){return this._status||0}}const It=function(t,e){return new Promise(async(n,r)=>{try{let r=await fetch(t,e);if(!r.ok){let t=new Zt("HTTP status code: "+r.status);throw t.response=r,t.status=r.status,t}n(r)}catch(t){r(t)}})};function Bt(t,...e){let n="";for(let r=0;r<t.length;r++)n+=t[r],e[r]&&("function"==typeof e[r]?n+=e[r]():n+=e[r]);return n}const{html:qt,render:Gt,svg:Vt}=dt(Dt),Jt=(t=>(e,n=null)=>((t.isPrototypeOf(e)||t===e)&&(null===n&&(n="modls-"+(t=>{if(t){let e=t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);if(e)return e.map(t=>t.toLowerCase()).join("-")}throw new Error("Invalid string")})(e.name)),n.includes("-")||(n="modls-"+n),window.customElements.define(n.toLowerCase(),e)),e))(Dt);export{Dt as Component,zt as RawComponent,Ft as WrapComponent,Bt as css,qt as html,Jt as registerComponent,Gt as render,It as safeFetch,Vt as svg};
