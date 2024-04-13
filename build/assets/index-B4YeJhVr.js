(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function n(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerPolicy&&(p.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?p.credentials="include":l.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(l){if(l.ep)return;l.ep=!0;const p=n(l);fetch(l.href,p)}})();const A=document.getElementById("menu"),rt=document.getElementById("burger"),it=()=>{A.classList.remove("hidden")},Y=()=>{A.classList.add("hidden")},B=t=>{t.target.classList.add("menu__item_active"),it()},H=t=>{const e=t.target;t.relatedTarget.id!==A.id&&(Y(),e.classList.remove("menu__item_active"))},ot=t=>{A.style.left=`${t.offsetLeft-30}px`,A.style.top=`${t.offsetTop+t.offsetHeight}px`},at=t=>{const e=document.getElementById(t);return ot(e),e.addEventListener("mouseenter",B),e.addEventListener("mouseleave",H),A.addEventListener("mouseleave",()=>{Y(),e.classList.remove("menu__item_active")}),rt.addEventListener("click",function(){document.querySelector("header").classList.toggle("open")}),()=>{e.removeEventListener("mouseover",B),e.removeEventListener("mouseout",H)}},ct="/assets/office-QdNIthKa.jpg",lt="/assets/factory-B0K-x4XG.jpg",g={routes:{index:"/",products:"/products",manufacture:"/manufacture",services:"/services",about:"/about",certificates:"/certificates",contacts:"/contacts"},contacts:{tabs:{office:{address:"Адрес: 115230, г. Москва, проезд Хлебозаводский, д.7, стр.9, этаж 3, пом. Х, офис 31",src:ct},factory:{address:"Калужская область, п. Льва Толстого, ул. 1Мая дом 21",src:lt}}}};function ut(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ht(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var G={};(function(t){var e=function(){var n=function(b,s,r,i){for(r=r||{},i=b.length;i--;r[b[i]]=s);return r},c=[1,9],l=[1,10],p=[1,11],v=[1,12],m=[5,11,12,13,14,15],I={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(s,r,i,o,a,u,$){var d=u.length-1;switch(a){case 1:return new o.Root({},[u[d-1]]);case 2:return new o.Root({},[new o.Literal({value:""})]);case 3:this.$=new o.Concat({},[u[d-1],u[d]]);break;case 4:case 5:this.$=u[d];break;case 6:this.$=new o.Literal({value:u[d]});break;case 7:this.$=new o.Splat({name:u[d]});break;case 8:this.$=new o.Param({name:u[d]});break;case 9:this.$=new o.Optional({},[u[d-1]]);break;case 10:this.$=s;break;case 11:case 12:this.$=s.slice(1);break}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:c,13:l,14:p,15:v},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:c,13:l,14:p,15:v},{1:[2,2]},n(m,[2,4]),n(m,[2,5]),n(m,[2,6]),n(m,[2,7]),n(m,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:c,13:l,14:p,15:v},n(m,[2,10]),n(m,[2,11]),n(m,[2,12]),{1:[2,1]},n(m,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:c,12:[1,16],13:l,14:p,15:v},n(m,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(s,r){if(r.recoverable)this.trace(s);else{let o=function(a,u){this.message=a,this.hash=u};var i=o;throw o.prototype=Error,new o(s,r)}},parse:function(s){var r=this,i=[0],o=[null],a=[],u=this.table,$="",d=0,F=0,tt=2,z=1,et=a.slice.call(arguments,1),h=Object.create(this.lexer),w={yy:{}};for(var M in this.yy)Object.prototype.hasOwnProperty.call(this.yy,M)&&(w.yy[M]=this.yy[M]);h.setInput(s,w.yy),w.yy.lexer=h,w.yy.parser=this,typeof h.yylloc=="undefined"&&(h.yylloc={});var j=h.yylloc;a.push(j);var st=h.options&&h.options.ranges;typeof w.yy.parseError=="function"?this.parseError=w.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var nt=function(){var L;return L=h.lex()||z,typeof L!="number"&&(L=r.symbols_[L]||L),L},f,k,y,q,S={},O,_,U,T;;){if(k=i[i.length-1],this.defaultActions[k]?y=this.defaultActions[k]:((f===null||typeof f=="undefined")&&(f=nt()),y=u[k]&&u[k][f]),typeof y=="undefined"||!y.length||!y[0]){var N="";T=[];for(O in u[k])this.terminals_[O]&&O>tt&&T.push("'"+this.terminals_[O]+"'");h.showPosition?N="Parse error on line "+(d+1)+`:
`+h.showPosition()+`
Expecting `+T.join(", ")+", got '"+(this.terminals_[f]||f)+"'":N="Parse error on line "+(d+1)+": Unexpected "+(f==z?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(N,{text:h.match,token:this.terminals_[f]||f,line:h.yylineno,loc:j,expected:T})}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+f);switch(y[0]){case 1:i.push(f),o.push(h.yytext),a.push(h.yylloc),i.push(y[1]),f=null,F=h.yyleng,$=h.yytext,d=h.yylineno,j=h.yylloc;break;case 2:if(_=this.productions_[y[1]][1],S.$=o[o.length-_],S._$={first_line:a[a.length-(_||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(_||1)].first_column,last_column:a[a.length-1].last_column},st&&(S._$.range=[a[a.length-(_||1)].range[0],a[a.length-1].range[1]]),q=this.performAction.apply(S,[$,F,d,w.yy,y[1],o,a].concat(et)),typeof q!="undefined")return q;_&&(i=i.slice(0,-1*_*2),o=o.slice(0,-1*_),a=a.slice(0,-1*_)),i.push(this.productions_[y[1]][0]),o.push(S.$),a.push(S._$),U=u[i[i.length-2]][i[i.length-1]],i.push(U);break;case 3:return!0}}return!0}},Z=function(){var b={EOF:1,parseError:function(r,i){if(this.yy.parser)this.yy.parser.parseError(r,i);else throw new Error(r)},setInput:function(s,r){return this.yy=r||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var r=s.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,i=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===o.length?this.yylloc.first_column:0)+o[o.length-i.length].length-i[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+r+"^"},test_match:function(s,r){var i,o,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),o=s[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],i=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var u in a)this[u]=a[u];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,r,i,o;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),u=0;u<a.length;u++)if(i=this._input.match(this.rules[a[u]]),i&&(!r||i[0].length>r[0].length)){if(r=i,o=u,this.options.backtrack_lexer){if(s=this.test_match(i,a[u]),s!==!1)return s;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(s=this.test_match(r,a[o]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(r,i,o,a){switch(o){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:return"LITERAL";case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return b}();I.lexer=Z;function C(){this.yy={}}return C.prototype=I,I.Parser=C,new C}();typeof ht!="undefined"&&(t.parser=e,t.Parser=e.Parser,t.parse=function(){return e.parse.apply(e,arguments)})})(G);function R(t){return function(e,n){return{displayName:t,props:e,children:n||[]}}}var W={Root:R("Root"),Concat:R("Concat"),Literal:R("Literal"),Splat:R("Splat"),Param:R("Param"),Optional:R("Optional")},J=G.parser;J.yy=W;var pt=J,ft=Object.keys(W);function dt(t){return ft.forEach(function(e){if(typeof t[e]=="undefined")throw new Error("No handler defined for "+e.displayName)}),{visit:function(e,n){return this.handlers[e.displayName].call(this,e,n)},handlers:t}}var Q=dt,yt=Q,mt=/[\-{}\[\]+?.,\\\^$|#\s]/g;function X(t){this.captures=t.captures,this.re=t.re}X.prototype.match=function(t){var e=this.re.exec(t),n={};if(e)return this.captures.forEach(function(c,l){typeof e[l+1]=="undefined"?n[c]=void 0:n[c]=decodeURIComponent(e[l+1])}),n};var _t=yt({Concat:function(t){return t.children.reduce(function(e,n){var c=this.visit(n);return{re:e.re+c.re,captures:e.captures.concat(c.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(t){return{re:t.props.value.replace(mt,"\\$&"),captures:[]}},Splat:function(t){return{re:"([^?]*?)",captures:[t.props.name]}},Param:function(t){return{re:"([^\\/\\?]+)",captures:[t.props.name]}},Optional:function(t){var e=this.visit(t.children[0]);return{re:"(?:"+e.re+")?",captures:e.captures}},Root:function(t){var e=this.visit(t.children[0]);return new X({re:new RegExp("^"+e.re+"(?=\\?|$)"),captures:e.captures})}}),gt=_t,vt=Q,bt=vt({Concat:function(t,e){var n=t.children.map(function(c){return this.visit(c,e)}.bind(this));return n.some(function(c){return c===!1})?!1:n.join("")},Literal:function(t){return decodeURI(t.props.value)},Splat:function(t,e){return e[t.props.name]?e[t.props.name]:!1},Param:function(t,e){return e[t.props.name]?e[t.props.name]:!1},Optional:function(t,e){var n=this.visit(t.children[0],e);return n||""},Root:function(t,e){e=e||{};var n=this.visit(t.children[0],e);return n?encodeURI(n):!1}}),wt=bt,kt=pt,xt=gt,Et=wt;P.prototype=Object.create(null);P.prototype.match=function(t){var e=xt.visit(this.ast),n=e.match(t);return n||!1};P.prototype.reverse=function(t){return Et.visit(this.ast,t)};function P(t){var e;if(this?e=this:e=Object.create(P.prototype),typeof t=="undefined")throw new Error("A route spec is required");return e.spec=t,e.ast=kt.parse(t),e}var St=P,Lt=St,Rt=Lt;const x=ut(Rt);function At(t={}){return`<section class="wrapper">
  <div class="wrapper__container">
    <h1 class="wrapper__title">Производитель решетчатого настила</h1>
  </div>
</section>
<section class="products">
  <div class="products__container">
    <h2 class="products__title">Наша продукция</h2>

    <ul class="products__track">
      <li class="product product__link product__link_nastil">
        <h3 class="product__title">Сварной настил</h3>
        <a href="#" class="product__link" target="_blank"></a>
      </li>
      <li class="product product__link product__link_steps">
        <h3 class="product__title">Ступени</h3>
        <a href="#" class="product__link" target="_blank"></a>
      </li>
      <li class="product product__link product__link_fastener">
        <h3 class="product__title">Крепеж</h3>
        <a href="#" class="product__link" target="_blank"></a>
      </li>
    </ul>
  </div>
</section>
`}function Pt(t={}){return`<h1>Услуги</h1>
`}function Ot(t={}){return`<h1>Продукция</h1>
<p>В разработке...</p>`}function Tt(t={}){return`<h1>Производство</h1>
<p>В разработке</p>`}function It(t={}){return`<h1>О компании</h1>
<p>В разработке</p>`}function Ct(t={}){return`<h1>Сертификаты</h1>
<p>В разработке</p>`}function $t(t={}){return`<section class="contacts">
  <div class="contacts__container content">
    <h1 class="contacts__title_main page-title">Наши контакты</h1>
    <contact-tabs>
      <ul slot="contacts-list" class="contacts__list">
        <li class="contacts__item contacts__item_phone">
          <a class="link" href="tel:+79999999999">+7 999 999-99-99</a>
        </li>
        <li class="contacts__item contacts__item_email">
          <a class="link" href="mailto:info@ст3nastyl.ru">info@ст3nastyl.ru</a>
        </li>
        <li class="contacts__item contacts__item_email">
          <a class="link" href="mailto:zakaz@ст3nastyl.ru"
            >zakaz@ст3nastyl.ru</a
          >
        </li>
      </ul>
    </contact-tabs>
    <div class="contacts__footer">
      <h2 class="contacts__title contacts__title_footer">Реквизиты компании</h2>
      <ul class="contacts__list">
        <li class="contacts__item">OOO «Торговый Дом Металл Полимер»</li>
        <li class="contacts__item">ИНН7724462549</li>
        <li class="contacts__item">ОГРН 119774600504</li>
      </ul>
    </div>
  </div>
</section>
`}const E={Main:new x(g.routes.index),Services:new x(g.routes.services),Products:new x(g.routes.products),Manufacture:new x(g.routes.manufacture),About:new x(g.routes.about),Certificates:new x(g.routes.certificates),Contacts:new x(g.routes.contacts)},V=t=>{let e="<h1>404</h1>";E.Main.match(t)?e=At():E.Services.match(t)?e=Pt():E.Products.match(t)?e=Ot():E.Manufacture.match(t)?e=Tt():E.About.match(t)?e=It():E.Certificates.match(t)?e=Ct():E.Contacts.match(t)&&(e=$t({src:"../assets/office.jpg"})),document.querySelector("#content").innerHTML=e},Mt=t=>{window.history.pushState({path:t},t,t),V(t)},jt=async()=>(window.addEventListener("popstate",t=>{V(new URL(window.location.href).pathname)}),document.querySelectorAll('[href^="/"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const{pathname:n}=new URL(e.target.href);Mt(n)})}),await V(new URL(window.location.href).pathname)),D=g.contacts.tabs.office,qt=`
.contacts__inner {
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: 1fr minmax(0, 660px);
    grid-template-rows: [row2-start] 70px [row2-end row3-start] 50px [row3-end] auto [last];
    column-gap: 20px;
}
  
.contacts__buttons {
    height: 50px;
    display: flex;
    gap: 20px;
    
    margin-bottom: 40px;
}

.contacts__address {
    margin: 0;
    padding-left: 15px;
}

.contacts__img {
    width: 660px;
    height: 395px;
    
    grid-row: row2-start / last;
    grid-column: 2 / 2;
}

@media screen and (max-width: 1100px) {
    .contacts__inner {
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .contacts__img {
        margin-bottom: 20px;
        width: 100%;
        grid-column: 1 / 1;
    }
}
`;class Nt extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),n=document.createElement("style"),c=document.createElement("div");n.textContent=qt,e.append(n),c.innerHTML=`
        <div id="contacts-btns" class="contacts__buttons">
          <app-button id="office" active="true" text="Офис"></app-button>
          <app-button id="factory" active="false" text="Производство и склад"></app-button>
        </div>
        <div class="contacts__inner">
            <h2 class="contacts__title">Наши контакты</h2>
            <p class="contacts__address"></p>
            <slot name="contacts-list" class="contacts__list"></slot>
            <img class="contacts__img" src="" alt="">
        </div>
    `,c.querySelector(".contacts__img").src=D.src,c.querySelector(".contacts__address").textContent=D.address,e.appendChild(c)}connectedCallback(){this.shadowRoot.querySelector(".contacts__buttons").addEventListener("click",c=>{const l=c.target;/^office$|^factory$/.test(l.id)&&(this.setActiveTab(l),this.updateTab(l))})}setActiveTab(e){this.shadowRoot.querySelectorAll("[text]").forEach(c=>{c.setAttribute("active",!1)}),e.setAttribute("active",!0)}updateTab(e){const n=g.contacts.tabs[e.id];this.shadowRoot.querySelector(".contacts__img").src=n.src,this.shadowRoot.querySelector(".contacts__address").textContent=n.address}}customElements.define("contact-tabs",Nt);const K=`
.btn {
    box-sizing: border-box;

    margin: 0;
    padding: 15px;
    border: 2px solid var(--color-orange);
    background: none;
    border-radius: 3px;
    outline: none;


    cursor: pointer;
}

.btn__active {
    background: var(--color-orange);
}

.btn:hover {
    border-color: var(--color-orange-dark);
}

.btn__active:hover {
    background: var(--color-orange-dark);
}
`;class Vt extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});this.styles=K;const n=document.createElement("style"),c=document.createElement("button");n.textContent=K,e.append(n),e.append(c),this.active=!1,this.externalClass=""}static get observedAttributes(){return["text","active","class"]}connectedCallback(){this.render()}attributeChangedCallback(e,n,c){e==="active"&&(this.active=JSON.parse(c)),e==="class"&&(this.externalClass=c),this.render()}render(){const e=`btn ${this.active?"btn__active":""}`,n=this.getAttribute("text");this.shadowRoot.querySelector("button").classList=e,this.shadowRoot.querySelector("button").textContent=n}}customElements.define("app-button",Vt);jt();console.log("Script is working...");at("categories");
