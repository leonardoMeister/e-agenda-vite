var E=Object.defineProperty;var C=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var i=(e,n,t)=>(C(e,typeof n!="symbol"?n+"":n,t),t);import"./modulepreload-polyfill.c7c6310f.js";import{a as I,C as d}from"./contatoLocalStorage.835b0817.js";class h{constructor(n,t,a,o,r){i(this,"id");i(this,"nome");i(this,"email");i(this,"telefone");i(this,"empresa");i(this,"cargo");this.id=Math.floor(Math.random()*65536),this.nome=n,this.telefone=a,this.email=t,this.empresa=o,this.cargo=r}}const s=document.getElementById("cargo"),f=document.getElementById("empresa"),m=document.getElementById("telefone"),c=document.getElementById("email"),p=document.getElementById("nome"),l=document.getElementById("campoIdentificacao"),w=document.getElementById("formularioContato");window.onload=function(){let e=new I,n=e.seleciona();e.excluir(),n&&D(n)};w.addEventListener("submit",function(e){const n=B();n==null?e.preventDefault():l.value==="0"?L(n)||e.preventDefault():l.value!=="0"&&($(n)||e.preventDefault())},!0);function v(e,n){return!(!x(e,n)||!y(e,n)||!T(e,n))}function T(e,n){let t=n.find(a=>a.telefone===e.telefone);return t==null||e.id===(t==null?void 0:t.id)?!0:(alert("Contatos n\xE3o podem usar Telefones repetidos. "),!1)}function y(e,n){let t=n.find(a=>a.email===e.email);return t==null||e.id===(t==null?void 0:t.id)?!0:(alert("Contatos n\xE3o podem usar Emails repetidos. "),!1)}function x(e,n){let t=n.find(a=>a.nome===e.nome);return t==null||e.id===(t==null?void 0:t.id)?!0:(alert("Contatos n\xE3o podem usar nomes repetidos. "),!1)}function B(){let e=p.value,n=c.value,t=m.value,a=s.value,o=f.value,r=new h(e,n,t,o,a);return l.value==="0"||(r.id=parseInt(l.value)),r}function L(e){const n=new d,t=n.selecionarTodos();return v(e,t)?(t.push(e),n.inserir(t),!0):!1}function $(e){const n=new d,t=n.selecionarTodos();if(v(e,t)){let o=t.findIndex(r=>r.id==e.id);return t[o]=e,n.inserir(t),!0}else return!1}function D(e){p.value=e.nome,c.value=e.email,m.value=e.telefone,s.value=e.cargo,f.value=e.empresa,l.value=e.id}const u=document.getElementById("telefone");u.addEventListener(window.TextEvent&&"name"in window.TextEvent?"textInput":"keypress",e=>g(e.target.value));u.addEventListener("change",e=>g(e.target.value));const g=e=>{e=e.replace(/\D/g,""),e=e.replace(/^(\d{2})(\d)/g,"($1) $2"),e=e.replace(/(\d)(\d{4})$/,"$1-$2"),u.value=e};