var _e=Object.defineProperty;var fe=(s,t,e)=>t in s?_e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var k=(s,t,e)=>(fe(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();document.getElementById("menu");document.getElementById("burger");const ge="/assets/office-QdNIthKa.jpg",me="/assets/factory-B0K-x4XG.jpg",f={routes:{index:"/",products:"/products",manufacture:"/manufacture",services:"/services",about:"/about",certificates:"/certificates",contacts:"/contacts",servicesProject:"/services/project",servicesDelivery:"/services/delivery",productsNastil:"/products/nastil",productsSteps:"/products/steps",productsFasteners:"/products/fastener",nastilSvarnoy:"/nastil/svarnoy-nastil",nastilPress:"/nastil/press-nastil",nastilAntiSlip:"/nastil/anti-slipnastil"},contacts:{tabs:{office:{address:"Адрес: 115230, г. Москва, проезд Хлебозаводский, д.7, стр.9, этаж 3, пом. Х, офис 31",src:ge},factory:{address:"Калужская область, п. Льва Толстого, ул. 1Мая дом 21",src:me}}}},Ft=[{text:"Продукция",href:f.routes.products,childrens:[{text:"Сварной настил",links:[{text:"Сварной настил",href:f.routes.nastilSvarnoy},{text:"Настил с противоскольжением",href:f.routes.nastilAntiSlip},{text:"Пресованный Настил",href:f.routes.nastilPress}]},{text:"Ступени",links:[{text:"Ступени",href:f.routes.productsSteps}]},{text:"Другое",links:[{text:"Крепеж",href:f.routes.productsFasteners}]}]},{text:"Производство",href:f.routes.manufacture},{text:"Услуги",href:f.routes.services},{text:"О компании",href:f.routes.about},{text:"Сертификаты",href:f.routes.certificates},{text:"Контакты",href:f.routes.contacts}];function ye(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function ve(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vt={};(function(s){var t=function(){var e=function(_,l,o,h){for(o=o||{},h=_.length;h--;o[_[h]]=l);return o},i=[1,9],r=[1,10],n=[1,11],a=[1,12],p=[5,11,12,13,14,15],c={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(l,o,h,u,d,m,rt){var S=m.length-1;switch(d){case 1:return new u.Root({},[m[S-1]]);case 2:return new u.Root({},[new u.Literal({value:""})]);case 3:this.$=new u.Concat({},[m[S-1],m[S]]);break;case 4:case 5:this.$=m[S];break;case 6:this.$=new u.Literal({value:m[S]});break;case 7:this.$=new u.Splat({name:m[S]});break;case 8:this.$=new u.Param({name:m[S]});break;case 9:this.$=new u.Optional({},[m[S-1]]);break;case 10:this.$=l;break;case 11:case 12:this.$=l.slice(1);break}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:i,13:r,14:n,15:a},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:i,13:r,14:n,15:a},{1:[2,2]},e(p,[2,4]),e(p,[2,5]),e(p,[2,6]),e(p,[2,7]),e(p,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:i,13:r,14:n,15:a},e(p,[2,10]),e(p,[2,11]),e(p,[2,12]),{1:[2,1]},e(p,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:i,12:[1,16],13:r,14:n,15:a},e(p,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(l,o){if(o.recoverable)this.trace(l);else{let u=function(d,m){this.message=d,this.hash=m};var h=u;throw u.prototype=Error,new u(l,o)}},parse:function(l){var o=this,h=[0],u=[null],d=[],m=this.table,rt="",S=0,$t=0,he=2,wt=1,pe=d.slice.call(arguments,1),v=Object.create(this.lexer),M={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(M.yy[nt]=this.yy[nt]);v.setInput(l,M.yy),M.yy.lexer=v,M.yy.parser=this,typeof v.yylloc=="undefined"&&(v.yylloc={});var at=v.yylloc;d.push(at);var ue=v.options&&v.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var de=function(){var z;return z=v.lex()||wt,typeof z!="number"&&(z=o.symbols_[z]||z),z},A,L,E,lt,H={},Q,C,At,tt;;){if(L=h[h.length-1],this.defaultActions[L]?E=this.defaultActions[L]:((A===null||typeof A=="undefined")&&(A=de()),E=m[L]&&m[L][A]),typeof E=="undefined"||!E.length||!E[0]){var ot="";tt=[];for(Q in m[L])this.terminals_[Q]&&Q>he&&tt.push("'"+this.terminals_[Q]+"'");v.showPosition?ot="Parse error on line "+(S+1)+`:
`+v.showPosition()+`
Expecting `+tt.join(", ")+", got '"+(this.terminals_[A]||A)+"'":ot="Parse error on line "+(S+1)+": Unexpected "+(A==wt?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(ot,{text:v.match,token:this.terminals_[A]||A,line:v.yylineno,loc:at,expected:tt})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+L+", token: "+A);switch(E[0]){case 1:h.push(A),u.push(v.yytext),d.push(v.yylloc),h.push(E[1]),A=null,$t=v.yyleng,rt=v.yytext,S=v.yylineno,at=v.yylloc;break;case 2:if(C=this.productions_[E[1]][1],H.$=u[u.length-C],H._$={first_line:d[d.length-(C||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(C||1)].first_column,last_column:d[d.length-1].last_column},ue&&(H._$.range=[d[d.length-(C||1)].range[0],d[d.length-1].range[1]]),lt=this.performAction.apply(H,[rt,$t,S,M.yy,E[1],u,d].concat(pe)),typeof lt!="undefined")return lt;C&&(h=h.slice(0,-1*C*2),u=u.slice(0,-1*C),d=d.slice(0,-1*C)),h.push(this.productions_[E[1]][0]),u.push(H.$),d.push(H._$),At=m[h[h.length-2]][h[h.length-1]],h.push(At);break;case 3:return!0}}return!0}},y=function(){var _={EOF:1,parseError:function(o,h){if(this.yy.parser)this.yy.parser.parseError(o,h);else throw new Error(o)},setInput:function(l,o){return this.yy=o||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var o=l.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var o=l.length,h=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),o=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+o+"^"},test_match:function(l,o){var h,u,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),u=l[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],h=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var m in d)this[m]=d[m];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,o,h,u;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),m=0;m<d.length;m++)if(h=this._input.match(this.rules[d[m]]),h&&(!o||h[0].length>o[0].length)){if(o=h,u=m,this.options.backtrack_lexer){if(l=this.test_match(h,d[m]),l!==!1)return l;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(l=this.test_match(o,d[u]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(o,h,u,d){switch(u){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:return"LITERAL";case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return _}();c.lexer=y;function g(){this.yy={}}return g.prototype=c,c.Parser=g,new g}();typeof ve!="undefined"&&(s.parser=t,s.Parser=t.Parser,s.parse=function(){return t.parse.apply(t,arguments)})})(Vt);function B(s){return function(t,e){return{displayName:s,props:t,children:e||[]}}}var Wt={Root:B("Root"),Concat:B("Concat"),Literal:B("Literal"),Splat:B("Splat"),Param:B("Param"),Optional:B("Optional")},Yt=Vt.parser;Yt.yy=Wt;var be=Yt,xe=Object.keys(Wt);function ke(s){return xe.forEach(function(t){if(typeof s[t]=="undefined")throw new Error("No handler defined for "+t.displayName)}),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:s}}var Kt=ke,$e=Kt,we=/[\-{}\[\]+?.,\\\^$|#\s]/g;function Gt(s){this.captures=s.captures,this.re=s.re}Gt.prototype.match=function(s){var t=this.re.exec(s),e={};if(t)return this.captures.forEach(function(i,r){typeof t[r+1]=="undefined"?e[i]=void 0:e[i]=decodeURIComponent(t[r+1])}),e};var Ae=$e({Concat:function(s){return s.children.reduce(function(t,e){var i=this.visit(e);return{re:t.re+i.re,captures:t.captures.concat(i.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(s){return{re:s.props.value.replace(we,"\\$&"),captures:[]}},Splat:function(s){return{re:"([^?]*?)",captures:[s.props.name]}},Param:function(s){return{re:"([^\\/\\?]+)",captures:[s.props.name]}},Optional:function(s){var t=this.visit(s.children[0]);return{re:"(?:"+t.re+")?",captures:t.captures}},Root:function(s){var t=this.visit(s.children[0]);return new Gt({re:new RegExp("^"+t.re+"(?=\\?|$)"),captures:t.captures})}}),Se=Ae,Ee=Kt,Pe=Ee({Concat:function(s,t){var e=s.children.map(function(i){return this.visit(i,t)}.bind(this));return e.some(function(i){return i===!1})?!1:e.join("")},Literal:function(s){return decodeURI(s.props.value)},Splat:function(s,t){return t[s.props.name]?t[s.props.name]:!1},Param:function(s,t){return t[s.props.name]?t[s.props.name]:!1},Optional:function(s,t){var e=this.visit(s.children[0],t);return e||""},Root:function(s,t){t=t||{};var e=this.visit(s.children[0],t);return e?encodeURI(e):!1}}),je=Pe,Ce=be,Re=Se,Te=je;J.prototype=Object.create(null);J.prototype.match=function(s){var t=Re.visit(this.ast),e=t.match(s);return e||!1};J.prototype.reverse=function(s){return Te.visit(this.ast,s)};function J(s){var t;if(this?t=this:t=Object.create(J.prototype),typeof s=="undefined")throw new Error("A route spec is required");return t.spec=s,t.ast=Ce.parse(s),t}var Oe=J,Me=Oe,Le=Me;const $=ye(Le);function Ne(s={}){return`<app-layout header="main">
  <!-- <section class="products">
    <div class="products__container">
      <h2 class="products__title">Наша продукция</h2>
      <ul class="products__track">
        <li class="product product__link">
          <a
            href="#"
            class="product__link product__link_nastil"
            target="_blank"
          >
            <h3 class="product__title">Сварной настил</h3>
          </a>
        </li>
        <li class="product product__link">
          <a href="#" class="product__link product__link_steps" target="_blank">
            <h3 class="product__title">Ступени</h3>
          </a>
        </li>
        <li class="product product__link">
          <a
            href="#"
            class="product__link product__link_fasteners"
            target="_blank"
          >
            <h3 class="product__title">Крепеж</h3>
          </a>
        </li>
      </ul>
    </div>
  </section> -->
</app-layout>
`}function Ie(s={}){return`<app-layout>
  <section class="services">
    <div class="services__container">
      <h1 class="services__title">Услуги компании</h1>
    </div>
    <ul class="services__list">
      <li class="services__item">
        <img-link class="services__link" href="/services/project" bg="/project.jpg">Проектирование и разработка КМД</img-link>
      </li>
      <li class="services__item">
        <img-link class="services__link" href="/services/delivery" bg="/builder.jpg">Доставка на объекты</img-link>
      </li>
    </ul>
  </section>
</app-layout>
`}function Ue(s={}){return`<app-layout>
  <section class="products">
    <div class="products__container">
      <h2 class="products__title">Наша продукция</h2>
      <ul class="products__track">
        <li class="product product__link">
          <img-link 
          class="product__link product__link_nastil" 
          href="/products/nastil" 
          bg="/main_nastil.jpg">
          <h3 class="product__title">Настил</h3>
        </img-link>
        </li>
        <li class="product product__link">
          <img-link
          class="product__link product__link_steps" 
          href="/products/steps"
          bg="/main_steps.jpg" >
          <h3 class="product__title">Ступени</h3>
        </img-link>
        </li>
        <li class="product product__link">
          <!-- <a
            href="#"
            class="product__link product__link_fasteners"
            target="_blank"
          >
            <h3 class="product__title">Крепеж</h3>
          </a> -->
          <img-link
          class="product__link product__link_fasteners"
          href="/products/fastener"
          bg="/main_fasteners.jpg"
          >
          <h3 class="product__title">Крепеж</h3>
          </img-link>
        </li>
      </ul>
    </div>
  </section>
</app-layout>
`}function He(s={}){return`<app-layout>
  <section class="manufacture">
    <div class="manufacture__container">
      <h3 class="manufacture__title">Наше производство</h3>
      <div class="manufacture-video">
        <video
          class="video"
          src="/manufacture_video1.mp4"
          controls="controls"
          width="450px"
          height="400px"
        ></video>
        <video
          class="video"
          src="/manufacture_video2.mp4"
          controls="controls"
          width="450px"
          height="400px"
        ></video>
      </div>
      <div class="manufacture-fotos">
        <img class="manufacture__photo" src="/ourManufacture1jpg.jpg" />
        <img class="manufacture__photo" src="/ourManufacrure2.jpg" />
        <img class="manufacture__photo" src="/ourManufacture3.jpg" />
        <img class="manufacture__photo" src="/ourManufacture4.jpg" />
      </div>
      <div class="manufacture__variants">
        <h3 class="manufacture__subtitle">Лестницы и лестничные площадки</h3>
        <div class="manufacture-fotos">
          <img class="manufacture__photo" src="/stepsformanufacture.jpeg" />
          <img
            class="manufacture__photo"
            src="/public/stepsformanufarcture1.jpeg"
          />
        </div>
        <p>
          Лестницы из настила безопасны в эксплуатации, хорошо свето- и
          влагопроницаемы, <br />
          долговечны и могут играть роль дизайнерской детали интерьера.
        </p>
      </div>
      <div class="manufacture__variants">
        <h3 class="manufacture__subtitle">Стеллажи и полки</h3>
        <p>
          Данный вид применения решетчатого настила очень удобен в
          использовании, т.к. настил обладает:
        </p>
        <ul>
          <li class="manufacture__marker">
            Хорошей свето и влагопроницаемостью
          </li>
          <li class="manufacture__marker">
            Высокая несущая способность при минимальном весе
          </li>
          <li class="manufacture__marker">
            Удобные процессы монтажа и демонтажа
          </li>
        </ul>
      </div>
      <div class="manufacture__variants">
        <h3 class="manufacture__subtitle">Промышленные площадки и пешеходные зоны</h3>
        <ul>
          <li class="manufacture__marker">Большой срок эксплуатации</li>
          <li class="manufacture__marker">Безопасность</li>
          <li class="manufacture__marker">
            Максимальная жесткость при минимальной массе
          </li>
          <li class="manufacture__marker">Эстетичный внешний вид</li>
        </ul>
      </div>
      <div class="manufacture__variants">
        <h3 class="manufacture__subtitle">Панели для ограждения</h3>
        <img class="manufacture__photo_variants" src="/panelformanufacture.jpeg" />
        <p>
          В этом случае несущие полосы располагают вертикально и обладают
          эстетичным внешним видом.
        </p>
      </div>
      <div class="manufacture__variants">
        <h3 class="manufacture__subtitle">В системах вентилиции, фильтрации и водоочистки</h3>
        <img
          class="manufacture__photo_variants"
          src="/public/panelformanufacture1.jpeg"
        />
        <p>
          Возможно применение в вентиляционных отверстиях, а также в качестве
          фильтрационных решеток, предназначенных для задержания мусора,
          поступающего с потоком воды
        </p>
      </div>
      <h3 class="manufacture__title">Наши работы</h3>
      <slider-component> </slider-component>
    </div>
  </section>
</app-layout>
`}function ze(s={}){return`<app-layout>
  <h1>Сертификаты</h1>
  <p>В разработке</p>
</app-layout>
`}function Be(s={}){return`<app-layout>
  <section class="contacts">
    <div class="contacts__container content">
      <h1 class="contacts__title_main page-title">Наши контакты</h1>
      <contact-tabs>
        <ul slot="contacts-list" class="contacts__list">
          <li class="contacts__item contacts__item_phone">
            <a class="link" href="tel:+79999999999">+7 999 999-99-99</a>
          </li>
          <li class="contacts__item contacts__item_email">
            <a class="link" href="mailto:info@ст3nastyl.ru"
              >info@ст3nastyl.ru</a
            >
          </li>
          <li class="contacts__item contacts__item_email">
            <a class="link" href="mailto:zakaz@ст3nastyl.ru"
              >zakaz@ст3nastyl.ru</a
            >
          </li>
        </ul>
      </contact-tabs>
      <div class="contacts__footer">
        <h2 class="contacts__title contacts__title_footer">
          Реквизиты компании
        </h2>
        <ul class="contacts__list">
          <li class="contacts__item">OOO «Торговый Дом Металл Полимер»</li>
          <li class="contacts__item">ИНН7724462549</li>
          <li class="contacts__item">ОГРН 119774600504</li>
        </ul>
      </div>
    </div>
  </section>
</app-layout>
`}function De(s={}){return`<app-layout>
  <section class="servicesProject">
    <div class="servicesProject__container">
      <h1 class="servicesProject__title">
        Разработка монтажных схем и КМД по чертежам Заказчика
      </h1>
      <div class="servicesProject__block">
        <ul class="servicesProject__description">
          <li class="servicesBlock__description_marker">
            Стоимость услуги входит в стоимость продукции, <br />
            если заказ на решетчатый настил Вы размещаете в нашей компании.
          </li>
          <li class="servicesBlock__description_marker">
            Разрабатываем техническую документацию и <br />
            предлагаем услугу доставки авто и ж/д транспортом 
            для Вашего удобства!
          </li>
          <li class="servicesBlock__description_marker">
            <strong>Маркировка продукции</strong> <br />
            При окончательной комплектации заказов на каждое изделие вешаем бирку, <br />
            на которой указаны: заказчик, место поставки изделия, кодировка изделия в соответствии с КМД.
            <br />Это снижает риск потери изделий и упрощает будущий монтаж.            
          </li>
          <li class="servicesBlock__description_marker">
            Комплектация крепежом <br />
            Комплектуем заказы крепежом, подбирая их в соответствии с типом и профилем несущей опоры <br />
            Так как сами настилы крепятся без применения сварочной техники и сверления.<br />
            Наша компания комплектует Ваши заказы специальным крепежом.

          </li>
        </ul>
      </div>
    </div>
  </section>
</app-layout>
`}function qe(s={}){return`<app-layout>
  <section class="servicesDelivery">
    <div class="servicesDelivery__container">
      <h1 class="servicesBlock__title">Доставка на объекты</h1>
      <div class="servicesBlock">
        <ul
          class="servicesBlock__description servicesBlock__description_delivery"
        >
          <li class="servicesBlock__description_marker">
            Наша компания осуществляет доставку по всей территории РФ 
            автомобильном и железнодорожным транспортом.
          </li>
          <li class="servicesBlock__description_marker">
            Стоимость доставки в Коммерческом предложении указывается отдельно
            от стоимости продукции.
          </li>
          <li class="servicesBlock__description_marker">
            При наличии собственного транспорта Вы можете забрать продукцию на
            условиях самовывоза с нашего производства находящегося по адресу:
            Калужская область, п. Льва Толстого, улица.
          </li>
        </ul>
        <!-- <img
          class="delivery__img delivery__img_avto"
          src="/dostavka_avto.jpg"
          alt="фура"
        />
        <img
          class="delivery__img delivery__img_poezd"
          src="/dostavka_poezd.jpg"
          alt="поезд"
        /> -->
        <img
          class="about__img"
          src="/karta_postavok.jpg"
          width="800"
          height="400"
          alt="карта поставок"
        />
      </div>
    </div>
  </section>
</app-layout>
`}function Fe(s={}){return`<app-layout>
    <section class="nastils">
        <div class="nastils__container">
            <h2 class="nastils__title">Настил</h2>
            <ul class="nastils__track">
                <li class="nastil nastil__link">
                    <img-link
                    class="nastil__link nastil__link_svarnoy"
                    href="/nastil/svarnoy-nastil"
                    bg="/pressnastil5.png"
                    >
                    <h3 class="nastil__title">Сварной настил</h3>
                </img-link>

                </li>
                <li class="nastil nastil__link">
                    <img-link
                    class="nastil__link nastil__link_press"
                    href="/nastil/press-nastil"
                    bg="/svarnastil2.png"
                    >
                    <h3 class="nastil__title">Пресованный настил</h3>
                </img-link>

                </li>
                <li class="nastil nastil__link">
                    <img-link
                    class="nastil__link nastil__link_anti-slip"
                    href="/nastil/anti-slipnastil"
                    bg="/pressnastil1.png"
                    > 
                    <h3 class="nastil__title">Настил с противоскольжением</h3>    
                </img-link>

                </li>
            </ul>
        </div>
    </section>
</app-layout>`}function Ve(s={}){return`<app-layout>
    <section class="steps">
        <div class="steps__container">
            <h2 class="steps__title">Ступени</h2>
            <div class="steps__description">
                <p class="steps__text">
                    <strong>Ступени из настила </strong>— это полностью готовый конструктивный элемент, позволяющий
собрать лестницу нужных параметров быстро и максимально эффективно. Производство
ступеней основано на тех же технологиях, что и производство сварного, и
прессованного настила с их параметрами – размерами, несущей способностью, весом,
покрытием и противоскольжением. В России производство ступеней из решетчатого настила (
сварного или прессованного ) не регламентируется, поэтому производители используют

немецкий стандарт производства DIN 24531-1-2006. Особую форму и размеры имеет
обрамление ступеней из решетчатого настила для возможности быстрого монтажа.
                </p>
            </div>
            <img
            class="steps__img"
            src="/forpagesteps.jpg"
            width="600"
            height="500"
            alt="чертеж ступеней"
            />
            <ul>
                <li class="steps__text_marker">
                    Решетчатый настил
                </li>
                <li class="steps__text_marker">
                    Боковые пластины 
                    с вырезами под крепление на косоуры
                </li>
                <li class="steps__text_marker">
                    Кант противоскольжения
                </li>
                <li class="steps__text_marker">
                    Отбортовочная пластина (по требованию заказчика)
                </li>
            </ul>
            <p class="steps__text">
                К ступеням предъявляются более высокие требования безопасности,
                 чем к решеткам, поэтому они всегда изготавливаются 
                 с кантом противоскольжения для большей безопасности передвижения. 
                 Боковые пластины имеют единый типоразмер и 
                 предусматривают крепление ступеней к косоурам лестниц 
                 на болтовое соединение.
            </p>
            <img
            class="steps__img"
            src="/tablitsaforsteps.jpeg"
            width="600"
            height="500"
            alt="фото ступеней"
            />
            <div class="textForTable">
                <ul class="steps__tableDescription">
                    Пояснения к таблице:
                    <li>
                        1. Вес ступеней теоретический
                    </li>
                    <li>
                        2. N - однократная предельная нагрузка в кг
                    </li>
                    <li>
                        3. L - длина ступени, мм, может быть изменена по заказу
                    </li>
                    <li>
                        4. * - размеры несущей полосы: высота х толщина, мм, может быть изменена по заказу
                    </li>
                </ul>
            </div>
            <h3>Преимущество ступеней из решетчатого настила:</h3>
            <ul>
                <li class="steps__text_marker">
                    Простота монтажа
                </li>
                <li class="steps__text_marker">
                    Долговечность
                </li>
                <li class="steps__text_marker">
                    Высокая влаго и светопроницаемость
                </li>
            </ul>
            <div class="steps__photos">
                <img
                class="steps__img"
                src="/stepspicture.jpeg"
                width="500"
                height="500"
                alt="фото ступеней"
                />
                <img
                class="steps__img"
                src="/public/stepspicture1.jpeg"
                width="500"
                height="500"
                alt="фото ступеней"
                />

            </div>
        
        </div>
    </section>
</app-layout>`}function We(s={}){return`<app-layout>
    <section class="fastener">
        <div class="fastener__container">
            <h2 class="fastener__title">Крепеж</h2>
            <div class="fastener__description">
                <p class="fastener__text">
                    Ввиду того, что для увеличения срока эксплуатации конструкционных элементов 
                    изготовленных на основе  решетчатого настила 
                    (смотровые площадки, переходы, ступени) подвергают горячему цинкованию, 
                    их монтаж производится без применения сварки, 
                    чтобы не повредить цинковое покрытие защищающее настил от коррозии. 
                    Кроме этого, монтаж настилов при помощи болтовых соединений 
                    и саморезов облегчает как монтаж,так и демонтаж, 
                    что существенно сокращает время строительных работ.
                </p>
            </div>
            <table class="fastener__table">
                <caption class="fastener__subtitle">Наиболее частые в использовании виды крепежа:</caption>
                <tr>
                    <td><strong>1</strong></td>
                    <td><strong>Универсальный скрепитель, оцинкованный</strong>
                        <img
                        class="fastener__img"
                        src="/fastenerpage0.jpeg"
                        width="350"
                        height="350"
                        alt="чертеж крепежа"
                        />
                    </td>
                    <td>Болт М8, квадратная гайка, верхняя прижимная скоба, прижимная планка.
                        Не повреждает поверхность металлоконструкций, может неоднократно использоваться
                         при повторном монтаже.
                         Применяется на объектах, где возможна вибрация.</td>
                </tr>
                <tr>
                    <td><strong>2</strong></td>
                    <td><strong>Стандартное крепление, оцинкованное</strong>
                        <img
                    class="fastener__img"
                    src="/fastenerpage.jpeg"
                    width="350"
                    height="350"
                    alt="чертеж крепежа"
                    />
                    </td>
                    <td>(скобка + саморез 6,3х51 со сверлом)
                        Обеспечивает легкий и быстрый монтаж.
                        Самый распространенный в использовании, наиболее дешевый вид крепежа</td>
                </tr>
                <tr>
                    <td><strong>3</strong></td>
                    <td><strong>Двойное крепление, оцинкованное</strong>
                        <img
                        class="fastener__img"
                        src="/fastenerpage2.jpeg"
                        width="350"
                        height="350"
                        alt="чертеж крепежа"
                        />
                    </td>
                    <td>(верхняя часть скобка -2 шт. + болт М8х60 - 2 шт. + нижняя часть - прижимная планка + гайка М8-2 шт.)
                        Обеспечивает эффективность при монтаже настила на большой высоте и где возможен сдвиг конструкции.
                         Данный вид крепежа предназначен для соединения настила между собой, 
                         обеспечивая при этом однородную стабильную поверхность.</td>
                </tr>
                <tr>
                    <td><strong>4</strong></td>
                    <td><strong>Крюковой крепеж</strong>
                        <img
                        class="fastener__img"
                        src="/fastenerpage3.jpeg"
                        width="350"
                        height="350"
                        alt="чертеж крепежа"
                        />
                    </td>
                    <td>Верхняя прижимная скоба, крюк с приваренной к нему гайкой, болт М8
                        Такой крепеж нужен, чтобы крепить настилы к опоре.</td>
                </tr>
            </table>
            <!-- <h3>Наиболее частые в использовании виды крепежа:</h3>
            <ul class="fastener__list3">
                <li>
                    <strong>Универсальный скрепитель, оцинкованный</strong>   
                    <img
                    class="fastener__img"
                    src="/fastenerpage0.jpeg"
                    width="350"
                    height="350"
                    alt="чертеж крепежа"
                    />
                    <p>Болт М8, квадратная гайка, верхняя прижимная скоба, прижимная планка.
                        Не повреждает поверхность металлоконструкций, может неоднократно использоваться при повторном монтаже. Применяется на объектах, где возможна вибрация.
                        </p>
                </li>
                <li>
                    <strong>Стандартное крепление, оцинкованное</strong>
                    <img
                    class="fastener__img"
                    src="/fastenerpage.jpeg"
                    width="350"
                    height="350"
                    alt="чертеж крепежа"
                    />
                    <p>
                        (скобка + саморез 6,3х51 со сверлом)
                        Обеспечивает легкий и быстрый монтаж.
                        Самый распространенный в использовании, наиболее дешевый вид крепежа
                    </p>
                </li>
                <li>
                    <strong>Двойное крепление, оцинкованное</strong>
                    <img
                    class="fastener__img"
                    src="/fastenerpage2.jpeg"
                    width="350"
                    height="350"
                    alt="чертеж крепежа"
                    />
                    <p>
                        (верхняя часть скобка -2 шт. + болт М8х60 - 2 шт. + нижняя часть - прижимная планка + гайка М8-2 шт.)
Обеспечивает эффективность при монтаже настила на большой высоте и где возможен сдвиг конструкции. Данный вид крепежа предназначен для соединения настила между собой, обеспечивая при этом однородную стабильную поверхность.

                    </p>
                </li>
                <li>
                    <strong>Крюковой крепеж </strong>
                    <img
                    class="fastener__img"
                    src="/fastenerpage3.jpeg"
                    width="350"
                    height="350"
                    alt="чертеж крепежа"
                    />
                    <p>
                        Верхняя прижимная скоба, крюк с приваренной к нему гайкой, болт М8
                        Такой крепеж нужен, чтобы крепить настилы к опоре.
                    </p>
                </li>
            </ul> -->
            <div class="fastener__choice fastener__subtitle ">
                <ul>Выбирая способ крепления, учитывайте:
                    <li class="fastener__text_marker">
                        Толщину металла.
                    </li>
                    <li class="fastener__text_marker">
                        Условия эксплуатации.
                    </li>
                    <li class="fastener__text_marker">
                        Сложность монтажных и демонтажных работ.
                    </li>
                </ul>

            </div>
        </div>

    </section>
    
</app-layout>`}function Ye(s={}){return`<app-layout>
    <section class="svarnoy-nastil">
        <div class="svarnoy-nastil__container">
            <h2 class="svarnoy-nastil__title">Сварной Настил</h2>
             <div class="svarnoy-nastil__description">
                <p class="svarnoy-nastil__text">
                    Сварные решетчатые настилы изготавливаются методом кузнечно-прессовой сварки 
                    связующих прутков в несущие полосы.
Данная технология осуществляет полное взаимопроникновение
 двух компонентов сварного решетчатого настила: несущих полос и 
 связующих прутков.
В качестве несущей полосы используется полоса из рулонной стали,
 а  связующего прутка , витой пруток круглого сечения.
Стальные полосы расположены с заданным шагом в одном направлении,
 широкими сторонами параллельно друг другу.
 Именно они берут на себя рабочую нагрузку. 
 Прутки располагаются перпендикулярно несущим полосам и параллельно друг другу. Прутки задают ширину листа и скрепляют положение полос.
                </p>
                <img
                class="svarnoy-nastil__img"
                src="/svarnastil1.png"
                width="600"
                height="600"
                alt="рисунок настила"
                />
                <p>
                    <strong>Основные параметры сварного решетчатого настила:</strong>
                    <p>в качестве материала для изготовления используется:</p>
                    <ul>
                        <li class="svarnoy-nastil__text_marker">
                            Малоуглеродистая сталь Ст3 (ГОСТ 380-94)  
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                             Низкоуглеродистая сталь (ГОСТ 19282-73)  
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                             Нержавеющая сталь (ГОСТ 5632-2014) 
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Габаритные размеры</strong>
                    <ul>
                        <li class="svarnoy-nastil__text_marker">
                            Максимальная длина по несущей полосе 7500 мм 
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Максимальная длина по связующей полосе 1200 мм  
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Толщина несущих полос от 2 до 5 мм  
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Высота несущих полос от 20 до 60 мм   
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Диаметр связующего прутка 5-8 мм
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Варианты покрытия:</strong>
                    <ul>
                        <li class="svarnoy-nastil__text_marker">
                            Горячее цинкование (ГОСТ 9.307-2021) 
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Электрохимическое цинкование (ГОСТ 9.301-86)  
                        </li>
                        <li class="svarnoy-nastil__text_marker">
                            Порошковое полимерное покрытие   
                        </li>
                    </ul>
                </p>

                <p>
                    Сварной решетчатый настил СТ3настил изготавливается  согласно ТУ ___________ и международным стандартам DIN 24537.  
                </p>

                <img
                class="svarnoy-nastil__img"
                src="/svarnastil2.png"
                width="600"
                height="500"
                alt="рисунок настила"
                />


             </div>

        </div>

    </section>
</app-layout>`}function Ke(s={}){return`<app-layout>
    <section class="press-nastil">
        <div class="press-nastil__container">
            <h2 class="press-nastil__title">Пресованный Настил</h2>
            <div class="press-nastil__description">
                <p class="press-nastil__text">
                    Прессованные решетчатые настилы изготавливают из продольных и поперечных полос методом холодного прессования под высоким давлением. В результате происходит вдавливание связующей полосы в специально подготовленные пазы несущей.
Такое соединение  может выдерживать большие нагрузки и обладает исключительной прочностью и надежностью.


                </p>
                <img
                class="press-nastil__img"
                src="/pressnastil6.png"
                width="600"
                height="500"
                alt="рисунок настила"
                />
                <p>
                    <strong>Основные параметры прессованного решетчатого настила:</strong>
                    <p>в качестве материала для изготовления используется:</p>
                    <ul>
                        <li class="press-nastil__text_marker">
                            малоуглеродистая сталь Ст3 (ГОСТ 380-94)
                        </li>
                        <li class="press-nastil__text_marker">
                            низколегированная сталь (ГОСТ 19282-73)
                        </li>
                        <li class="press-nastil__text_marker">
                            нержавеющая сталь (ГОСТ 7350-77)
                        </li>
                        <li class="press-nastil__text_marker">
                            алюминий (ГОСТ 4784-97)
                        </li>
                    </ul>
                </p>
                <p>
                    <strong>Габаритные размеры:</strong>
                    <ul>
                        <li class="press-nastil__text_marker">
                            максимальные габаритные размеры по несущей полосе 3000 мм
                        </li>
                        <li class="press-nastil__text_marker">
                            максимальная длина по несущей полосе 1 200 мм
                        </li>
                        <li class="press-nastil__text_marker">
                            толщина несущих полос от 2 до 6 мм
                        </li>
                        <li class="press-nastil__text_marker">
                            высота несущих полос от 20 до 70 мм
                        </li>
                        <li class="press-nastil__text_marker">
                            толщина связующих полос от 2 до 3 мм
                        </li>
                        <li class="press-nastil__text_marker">
                            высота связующих полос от 9 до 12 мм
                        </li>
                        
                    </ul>
                </p>
                <p>
                    <strong>Варианты покрытия:</strong>
                    <ul>
                        <li class="press-nastil__text_marker">
                            Горячее цинкование (ГОСТ 9.307-89)
                        </li>
                        <li class="press-nastil__text_marker">
                            Электрохимическое цинкование (ГОСТ 9.301-86)
                        </li>
                        <li class="press-nastil__text_marker">
                            Порошковое полимерное покрытие
                        </li>
                    </ul>
                </p>
                <p>
                    Прессованный настил СТ3настил изготавливается согласно ТУ ____________ и международным стандартам DIN 24537.
                </p>
                <img
                class="press-nastil__img"
                src="/pressnastil5.png"
                width="600"
                height="500"
                alt="рисунок настила"
                
                />
            </div>

        </div>

    </section>
</app-layout>`}function Ge(s={}){return`<app-layout>
    <section class="anti-slip-nastil">
        <div class="anti-slip-nastil__container">
            <h2 class="anti-slip-nastil__title">Настил с противоскольжением</h2>
            <div class="anti-slip-nastil__description"></div>
            <p>
                Противоскольжение- это нанесенная на несущие (сварной настил) или несущие
                 и связующие полосы (прессованный настил) перфорация, 
                увеличивающая безопасность прохождения по участкам с высоким риском проскальзывания.
            </p>
            <p>
                Сварной или прессованный настил с элементами противоскольжения обеспечит безопасность
                 и защитит от травматизма на производстве и в повседневной жизни при применении:
                 <ul>
                    <li class="anti-slip-nastil__text_marker">
                        Высотные площадки обслуживания и переходы подвергающиеся снего-ветровым нагрузкам
                    </li>
                    <li class="anti-slip-nastil__text_marker">
                        Подъезды, эстакады и пандусы
                    </li>
                    <li class="anti-slip-nastil__text_marker">
                        Лестницы и пролёты
                    </li>
                    <li class="anti-slip-nastil__text_marker">
                        Палубы на судах и буровых установках
                    </li>
                    <li class="anti-slip-nastil__text_marker">
                        Входные группы в магазинах и супермаркетах
                    </li>
                 </ul>
            </p>
            <p>
                <strong>Типы противоскольжения для решетчатого настила:</strong>
                <ul>
                    <li class="anti-slip-nastil__text_marker">
                        <strong>S4 «Зубья пилы»</strong>
                    </li>
                    <img
                    class="anti-slip-nastil__img"
                    src="/pressnastil2.png"
                    width="600"
                    height="500"
                    alt="рисунок настила"
                    />
                    <li class="anti-slip-nastil__text_marker">
                        <strong>S5 «Радиус»</strong>
                    </li>
                    <img
                    class="anti-slip-nastil__img"
                    src="/pressnastil3.png"
                    width="600"
                    height="500"
                    alt="рисунок настила"
                    />

                    <li class="anti-slip-nastil__text_marker">
                        <strong>S6 «Трапеция»</strong>
                    </li>
                    <img
                    class="anti-slip-nastil__img"
                    src="/pressnastil4.png"
                    width="600"
                    height="500"
                    alt="рисунок настила"
                    />
                </ul>
            </p>
            <p>
                Отличительной особенностью прессованного решетчатого настила перед сварным 
                является возможность изготовления зубьев противоскольжения, 
                как по несущей, так и по связующей полосе, что увеличивает 
                сопротивление проскальзыванию при прохождению по поверхности решетчатых настилов
            </p>
            <img
            class="anti-slip-nastil__img"
            src="/pressnastil1.png"
            width="600"
            height="500"
            alt="рисунок настила"
            />
        </div>
    </section>
</app-layout>
`}const w={Main:new $(f.routes.index),Services:new $(f.routes.services),Products:new $(f.routes.products),Manufacture:new $(f.routes.manufacture),About:new $(f.routes.about),Certificates:new $(f.routes.certificates),Contacts:new $(f.routes.contacts),ServicesProject:new $(f.routes.servicesProject),ServicesDelivery:new $(f.routes.servicesDelivery),ProductsNastil:new $(f.routes.productsNastil),ProductsSteps:new $(f.routes.productsSteps),ProductsFasteners:new $(f.routes.productsFasteners),NastilSvarnoy:new $(f.routes.nastilSvarnoy),NastilPress:new $(f.routes.nastilPress),NastilAntiSlip:new $(f.routes.nastilAntiSlip)},dt=s=>{let t="<h1>404</h1>";w.Main.match(s)?t=Ne():w.Services.match(s)?t=Ie():w.Products.match(s)?t=Ue():w.Manufacture.match(s)?t=He():(w.About.match(s),w.Certificates.match(s)?t=ze():w.Contacts.match(s)?t=Be({src:"../assets/office.jpg"}):w.ServicesProject.match(s)?t=De():w.ServicesDelivery.match(s)?t=qe():w.ProductsNastil.match(s)?t=Fe():w.ProductsSteps.match(s)?t=Ve():w.ProductsFasteners.match(s)?t=We():w.NastilSvarnoy.match(s)?t=Ye():w.NastilPress.match(s)?t=Ke():w.NastilAntiSlip.match(s)&&(t=Ge())),document.querySelector("#content").innerHTML=t},Xt=s=>{window.history.pushState({path:s},s,s),dt(s)},Xe=async()=>(window.addEventListener("popstate",s=>{dt(new URL(window.location.href).pathname)}),document.querySelectorAll('[href^="/"]').forEach(s=>{s.addEventListener("click",t=>{t.preventDefault();const{pathname:e}=new URL(t.target.href);Xt(e)})}),await dt(new URL(window.location.href).pathname)),St=f.contacts.tabs.office,Je=`
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
`;class Ze extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style"),i=document.createElement("div");e.textContent=Je,t.append(e),i.innerHTML=`
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
    `,i.querySelector(".contacts__img").src=St.src,i.querySelector(".contacts__address").textContent=St.address,t.appendChild(i)}connectedCallback(){this.shadowRoot.querySelector(".contacts__buttons").addEventListener("click",i=>{const r=i.target;/^office$|^factory$/.test(r.id)&&(this.setActiveTab(r),this.updateTab(r))})}setActiveTab(t){this.shadowRoot.querySelectorAll("[text]").forEach(i=>{i.setAttribute("active",!1)}),t.setAttribute("active",!0)}updateTab(t){const e=f.contacts.tabs[t.id];this.shadowRoot.querySelector(".contacts__img").src=e.src,this.shadowRoot.querySelector(".contacts__address").textContent=e.address}}customElements.define("contact-tabs",Ze);const Et=`
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
`;class Qe extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styles=Et;const e=document.createElement("style"),i=document.createElement("button");e.textContent=Et,t.append(e),t.append(i),this.active=!1,this.externalClass=""}static get observedAttributes(){return["text","active","class"]}connectedCallback(){this.render()}attributeChangedCallback(t,e,i){t==="active"&&(this.active=JSON.parse(i)),t==="class"&&(this.externalClass=i),this.render()}render(){const t=`btn ${this.active?"btn__active":""}`,e=this.getAttribute("text");this.shadowRoot.querySelector("button").classList=t,this.shadowRoot.querySelector("button").textContent=e}}customElements.define("app-button",Qe);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,xt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),Pt=new WeakMap;let Jt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(xt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Pt.set(e,t))}return t}toString(){return this.cssText}};const ts=s=>new Jt(typeof s=="string"?s:s+"",void 0,kt),j=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Jt(e,s,kt)},es=(s,t)=>{if(xt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=et.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},jt=xt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ts(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ss,defineProperty:is,getOwnPropertyDescriptor:rs,getOwnPropertyNames:ns,getOwnPropertySymbols:as,getPrototypeOf:ls}=Object,T=globalThis,Ct=T.trustedTypes,os=Ct?Ct.emptyScript:"",ct=T.reactiveElementPolyfillSupport,V=(s,t)=>s,_t={toAttribute(s,t){switch(t){case Boolean:s=s?os:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch(i){e=null}}return e}},Zt=(s,t)=>!ss(s,t),Rt={attribute:!0,type:String,converter:_t,reflect:!1,hasChanged:Zt};var Ut,Ht;(Ut=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Ht=T.litPropertyMetadata)!=null||(T.litPropertyMetadata=new WeakMap);class D extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&is(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){var a;const{get:r,set:n}=(a=rs(this.prototype,t))!=null?a:{get(){return this[e]},set(p){this[e]=p}};return{get(){return r==null?void 0:r.call(this)},set(p){const c=r==null?void 0:r.call(this);n.call(this,p),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Rt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=ls(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,i=[...ns(e),...as(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(jt(r))}else t!==void 0&&e.push(jt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return es(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:_t).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),p=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:_t;this._$Em=r,this[r]=p.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,i){var r;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((r=i.hasChanged)!=null?r:Zt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){var r;this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,p]of this._$Ep)this[a]=p;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[a,p]of n)p.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],p)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var a;return(a=n.hostUpdate)==null?void 0:a.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}var zt;D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[V("elementProperties")]=new Map,D[V("finalized")]=new Map,ct==null||ct({ReactiveElement:D}),((zt=T.reactiveElementVersions)!=null?zt:T.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,st=W.trustedTypes,Tt=st?st.createPolicy("lit-html",{createHTML:s=>s}):void 0,Qt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+R,cs=`<${te}>`,U=document,K=()=>U.createComment(""),G=s=>s===null||typeof s!="object"&&typeof s!="function",ee=Array.isArray,hs=s=>ee(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Mt=/>/g,N=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Nt=/"/g,se=/^(?:script|style|textarea|title)$/i,ps=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),b=ps(1),O=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),It=new WeakMap,I=U.createTreeWalker(U,129);function ie(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}const us=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":"",a=F;for(let p=0;p<e;p++){const c=s[p];let y,g,_=-1,l=0;for(;l<c.length&&(a.lastIndex=l,g=a.exec(c),g!==null);)l=a.lastIndex,a===F?g[1]==="!--"?a=Ot:g[1]!==void 0?a=Mt:g[2]!==void 0?(se.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=N):g[3]!==void 0&&(a=N):a===N?g[0]===">"?(a=r!=null?r:F,_=-1):g[1]===void 0?_=-2:(_=a.lastIndex-g[2].length,y=g[1],a=g[3]===void 0?N:g[3]==='"'?Nt:Lt):a===Nt||a===Lt?a=N:a===Ot||a===Mt?a=F:(a=N,r=void 0);const o=a===N&&s[p+1].startsWith("/>")?" ":"";n+=a===F?c+cs:_>=0?(i.push(y),c.slice(0,_)+Qt+c.slice(_)+R+o):c+R+(_===-2?p:o)}return[ie(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const p=t.length-1,c=this.parts,[y,g]=us(t,e);if(this.el=X.createElement(y,i),I.currentNode=this.el.content,e===2){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(r=I.nextNode())!==null&&c.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(const _ of r.getAttributeNames())if(_.endsWith(Qt)){const l=g[a++],o=r.getAttribute(_).split(R),h=/([.?@])?(.*)/.exec(l);c.push({type:1,index:n,name:h[2],strings:o,ctor:h[1]==="."?_s:h[1]==="?"?fs:h[1]==="@"?gs:it}),r.removeAttribute(_)}else _.startsWith(R)&&(c.push({type:6,index:n}),r.removeAttribute(_));if(se.test(r.tagName)){const _=r.textContent.split(R),l=_.length-1;if(l>0){r.textContent=st?st.emptyScript:"";for(let o=0;o<l;o++)r.append(_[o],K()),I.nextNode(),c.push({type:2,index:++n});r.append(_[l],K())}}}else if(r.nodeType===8)if(r.data===te)c.push({type:2,index:n});else{let _=-1;for(;(_=r.data.indexOf(R,_+1))!==-1;)c.push({type:7,index:n}),_+=R.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function q(s,t,e=s,i){var a,p,c;if(t===O)return t;let r=i!==void 0?(a=e._$Co)==null?void 0:a[i]:e._$Cl;const n=G(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((p=r==null?void 0:r._$AO)==null||p.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?((c=e._$Co)!=null?c:e._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=q(s,r._$AS(s,t.values),r,i)),t}class ds{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var y;const{el:{content:e},parts:i}=this._$AD,r=((y=t==null?void 0:t.creationScope)!=null?y:U).importNode(e,!0);I.currentNode=r;let n=I.nextNode(),a=0,p=0,c=i[0];for(;c!==void 0;){if(a===c.index){let g;c.type===2?g=new Z(n,n.nextSibling,this,t):c.type===1?g=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(g=new ms(n,this,t)),this._$AV.push(g),c=i[++p]}a!==(c==null?void 0:c.index)&&(n=I.nextNode(),a++)}return I.currentNode=U,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,r){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),G(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==x&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=X.createElement(ie(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const a=new ds(r,this),p=a.u(this.options);a.p(e),this.T(p),this._$AH=a}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new X(t)),e}k(t){ee(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new Z(this.S(K()),this.S(K()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(n===void 0)t=q(this,t,e,0),a=!G(t)||t!==this._$AH&&t!==O,a&&(this._$AH=t);else{const p=t;let c,y;for(t=n[0],c=0;c<n.length-1;c++)y=q(this,p[i+c],e,c),y===O&&(y=this._$AH[c]),a||(a=!G(y)||y!==this._$AH[c]),y===x?t=x:t!==x&&(t+=(y!=null?y:"")+n[c+1]),this._$AH[c]=y}a&&!r&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class _s extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class fs extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class gs extends it{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var a;if((t=(a=q(this,t,e,0))!=null?a:x)===O)return;const i=this._$AH,r=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class ms{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const pt=W.litHtmlPolyfillSupport;var Bt;pt==null||pt(X,Z),((Bt=W.litHtmlVersions)!=null?Bt:W.litHtmlVersions=[]).push("3.1.3");const ys=(s,t,e)=>{var n,a;const i=(n=e==null?void 0:e.renderBefore)!=null?n:t;let r=i._$litPart$;if(r===void 0){const p=(a=e==null?void 0:e.renderBefore)!=null?a:null;i._$litPart$=r=new Z(t.insertBefore(K(),p),p,void 0,e!=null?e:{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ys(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}}var Dt;P._$litElement$=!0,P.finalized=!0,(Dt=globalThis.litElementHydrateSupport)==null||Dt.call(globalThis,{LitElement:P});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:P});var qt;((qt=globalThis.litElementVersions)!=null?qt:globalThis.litElementVersions=[]).push("4.0.5");const vs=j`
  .header {
    background: white;
  }

  .header_main {
    background: center / cover no-repeat url("/mainbg.jpg");
  }

  .header__content {
    max-width: 1280px;
    width: 95%;
    margin: 0 auto;
    padding-top: 10px;
  }

  .header__burger-btn {
    display: none;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .header__logo {
    flex-grow: 1;
  }

  .header__contacts {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #ff8c00;
  }

  .header__contacts a {
    color: #ff8c00;
  }

  .header__footer {
    height: 100%;
    padding-top: 200px;
    height: 550px;
  }

  .header__title {
    margin: 0 auto;
    width: fit-content;

    text-align: center;
    font-size: 40px;
  }

  @media screen and (max-width: 865px) {
    .header__content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
    }

    .header__inner {
      align-items: start;
      flex-grow: 1;
    }

    .header__burger-btn {
      display: block;
    }

    .header__footer {
      height: 350px;
    }
  }

  @media screen and (max-width: 768px) {
    .header__title {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 390px) {
    .header.open .menu__list {
      transform: translateX(200%);
    }

    /* .content {
      margin: 0 auto;
      padding-top: 10px;

      display: flex;
      flex-direction: column;
    } */
  }
`,bs=j`
  .menu {
    max-width: 720px;
    margin: 0 auto;
  }

  .menu__burger-btn {
    display: none;
  }

  .menu__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .groups {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
    backgroud: #fff;
    z-index: 10;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (max-width: 865px) {
    .menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2;

      height: 100vh;
      width: 250px;

      padding-top: 70px;

      background-color: var(--color-orange);

      transform: translateX(100%);
    }

    .menu_open {
      transform: translateX(0);
    }

    .menu__links {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 20px;
    }

    .menu__item app-link {
      color: black;
    }

    /* .menu__burger-btn {
      display: block;
    } */
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ne=s=>(...t)=>({_$litDirective$:s,values:t});let ae=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=ne(class extends ae{constructor(s){var t;if(super(s),s.type!==re.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var i,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(t)}const e=s.element.classList;for(const n of this.st)n in t||(e.remove(n),this.st.delete(n));for(const n in t){const a=!!t[n];a===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(a?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return O}}),xs=j`
  .burger-btn {
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #e86100;
    border-radius: 20%;
    z-index: 3;
  }

  .burger-btn span {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    left: 5px;
    transition:
      transform 0.5s,
      opacity 0.5s,
      background-color 0.5s;
  }

  .burger-btn.burger-btn_open span:nth-child(1) {
    transform: translateY(0) rotate(45deg);
  }

  .burger-btn_open span:nth-child(2) {
    opacity: 0;
  }

  .burger-btn.burger-btn_open span:nth-child(3) {
    transform: translateY(0) rotate(-45deg);
  }

  .burger-btn span:nth-child(1) {
    transform: translateY(-10px);
  }

  .burger-btn span:nth-child(3) {
    transform: translateY(10px);
  }
`,ks=j`
  .main {
    display: flex;
    flex-direction: column;
  }

  .main__content {
    flex: 1;
  }
`;class ft extends P{constructor(){super(),this.isMenuOpen=!1}get isMain(){return this.header==="main"}renderDropdownContent(t){return b`
      <ul class="groups">
        ${t.map(e=>{var i;return b`
            <li class="groups__item group">
              <h3 class="group__title">${e.text}</h3>
              ${(i=e.links)==null?void 0:i.map(r=>b`
                  <app-link
                    class="menu__link"
                    is-menu="true"
                    href=${r.href}
                    >${r.text}</app-link
                  >
                `)}
            </li>
          `})}
      </ul>
    `}renderMenuItem(t){var e;return(e=t.childrens)!=null&&e.length?b`
        <app-dropdown>
          <app-link
            slot="trigger"
            class="menu__link"
            is-menu="true"
            href="${t.href}"
            >${t.text}</app-link
          >
          <div slot="content">
            ${this.renderDropdownContent(t.childrens)}
          </div>
        </app-dropdown>
      `:b`
      <li class="menu__item">
        <app-link class="menu__link" is-menu="true" href="${t.href}"
          >${t.text}</app-link
        >
      </li>
    `}renderMenu(){const t={menu_open:this.isMenuOpen};return b`
      <nav class="menu ${Y(t)}">
        <ul class="menu__links">
          ${Ft.map(e=>this.renderMenuItem(e))}
        </ul>
      </nav>
    `}renderHeaderFooter(){return b`
      <div class="header__footer">
        <h1 class="header__title">Производитель решетчатого настила</h1>
      </div>
    `}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}renderHeader(){const t={"burger-btn_open":this.isMenuOpen},e={header_main:this.isMain};return b`
      <header class="header ${Y(e)}">
        <div class="header__content">
          <div class="header__inner">
            <div class="header__logo">
              <logo-component></logo-component>
            </div>
            <ul class="header__contacts">
              <li><a tel="tel:+79999999999" href="#">+7 999 999-99-99</a></li>
              <li>
                <a href="mailto:1wDkK@example.com">1wDkK@example.com</a>
              </li>
            </ul>
          </div>
          <button
            class="header__burger-btn burger-btn ${Y(t)}"
            @click="${this._toggleMenu}"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          ${this.renderMenu()}
        </div>
        ${this.isMain?this.renderHeaderFooter():null}
      </header>
    `}renderMain(){return b`
      <main class="main">
        <div class="main__content">
          <slot></slot>
        </div>
      </main>
    `}render(){return b` ${this.renderHeader()} ${this.renderMain()} `}}k(ft,"properties",{header:{type:String},isMenuOpen:{type:Boolean,attribute:!1,state:!0}}),k(ft,"styles",[xs,bs,vs,ks]);customElements.define("app-layout",ft);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le="important",$s=" !"+le,ws=ne(class extends ae{constructor(s){var t;if(super(s),s.type!==re.ATTRIBUTE||s.name!=="style"||((t=s.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const n=typeof r=="string"&&r.endsWith($s);i.includes("-")||n?e.setProperty(i,n?r.slice(0,-11):r,n?le:""):e[i]=r}}return O}}),As=j`
  .root {
    position: relative;
  }

  .content {
    display: none;
    position: absolute;
    left: 0;
    padding: 10px;
    background: #fff;
    z-index: 10;
  }

  .visible {
    display: block;
  }
`,Ss=20;class gt extends P{constructor(){super(),this.isOpen=!1}get triggerHeight(){var e;const t=this.shadowRoot.querySelector("#trigger");return(e=t==null?void 0:t.assignedElements({flatten:!0})[0].offsetHeight)!=null?e:Ss}toggleIsOpen(){this.isOpen=!this.isOpen}handleMouseEnter(){this.isOpen=!0}handleMouseLeave(){this.isOpen=!1}render(){const t={content:!0,visible:this.isOpen},e={top:`${this.triggerHeight}px`};return b`
      <div
        class="root"
        @mouseenter="${this.handleMouseEnter}"
        @mouseleave=${this.handleMouseLeave}
      >
        <slot id="trigger" name="trigger"></slot>
        <div class=${Y(t)} style=${ws(e)}>
          <slot name="content"></slot>
        </div>
      </div>
    `}}k(gt,"properties",{isOpen:{type:Boolean,state:!0}}),k(gt,"styles",[As]);customElements.define("app-dropdown",gt);class oe extends P{_handleClick(t){t.preventDefault(),Xt(f.routes.index)}render(){return b`
      <div role="button" class="logo link" @click="${this._handleClick}">
        <img class="logo__img" src="/new_logo-2.png" alt="logo" />
      </div>
    `}}k(oe,"styles",j`
    .logo {
      display: inline-block;
      width: 100px;
      height: 100px;
      cursor: pointer;
    }

    .logo:hover {
      border-bottom: none;
    }

    .logo__img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    @media screen and (max-width: 768px) {
      .logo {
        display: inline-block;
        width: 70px;
        height: 70px;
      }
    }
  `);customElements.define("logo-component",oe);const Es=j`
  .menu {
    max-width: 720px;
    margin: 0 auto;
  }

  .menu__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
`;class mt extends P{render(){return b`
      <nav class="${this.class} menu">
        <ul class="${this.listClass} menu__links">
          ${Ft.map(t=>b`<li class="menu__item">
                <app-link class="menu__link" href="${t.href}"
                  >${t.text}</app-link
                >
              </li>`)}
        </ul>
      </nav>
    `}}k(mt,"properties",{class:{type:String,attribute:"class"},listClass:{type:String,attribute:"list-class"}}),k(mt,"styles",[Es]);customElements.define("menu-component",mt);const Ps=s=>{class t extends s{handleClick(i){}}return k(t,"properties",{href:{type:String}}),t},ce=Ps(P),js=j`
  .link {
    text-decoration: none;
    color: var(--color-orange);
    cursor: pointer;
    position: relative;
  }

  .link:hover {
    color: var(--color-orange-dark);
  }

  .link_menu {
    color: black;
  }

  .link_full-size {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;class yt extends ce{constructor(){super(),this.href="#"}render(){const t={link_menu:this.isMenu,"link_full-size":this.isFullSize};return this.class.split(" ").forEach(e=>{t[e]=!0}),b`
      <a
        class="${Y(t)} link"
        href="${this.href}"
        @click="${this.handleClick}"
      >
          <slot></slot>
      </a>
    `}}k(yt,"properties",{isMenu:{type:Boolean,attribute:"is-menu"},isFullSize:{type:Boolean,attribute:"is-full-size"},class:{type:String,attribute:"class"}}),k(yt,"styles",[js]);customElements.define("app-link",yt);class vt extends ce{constructor(){super(),this.attachShadow({mode:"open"})}render(){return b`
      <a
        class="root"
        href="${this.href}"
        style="background-image: url(${this.bg})"
        @click="${this.handleClick}"
      >
          <div class="background"></div>
          <span class="text">
            <slot></slot>
          </span>
      </a>
    `}}k(vt,"properties",{class:{type:String,attribute:"class"},bg:{type:String,attribute:"bg"}}),k(vt,"styles",j`
    .root {
        display: grid;

        width: 100%;
        height: 100%;

        background-size: 100% 100%;
        
        
        text-decoration: none;
    }

    .root > * {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    }

    .background {
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.30);

        pointer-event: none;
    }

    .root:hover .background {
        background: rgba(0, 0, 0, 0.10);
    }

    .text {
        padding: 0 0 10px 20px;

        align-self: end;

        color: white;
        font-size: 16px;
    }
  `);customElements.define("img-link",vt);class bt extends P{constructor(){super(),this.slides=["/manufacture_nastil-2.png","/manufacture_products.png","/manufacture_products2.jpg","/manufacture_nastilDop.jpeg","/manufacture_fastnerDop.jpeg","/manufacture_nastil2Dop.jpeg","/ourWork.jpg","/ourWork1.jpg","/ourWork2.jpg","/ourWork3.jpg","/ourWork4.jpg"],this.currentIndex=0}render(){return b`
         <div class="slider">
           <div class="slides" style="transform: translateX(-${this.currentIndex*100}%);">
             ${this.slides.map(t=>b`
               <img class="slide" src="${t}">`)}
           </div>
           <div class="controls">
             <button class="control" @click="${this.prevSlide}">←</button>
             <button class="control" @click="${this.nextSlide}">→</button>
           </div>
         </div>
       `}prevSlide(){this.currentIndex=this.currentIndex>0?this.currentIndex-1:this.slides.length-1}nextSlide(){this.currentIndex=(this.currentIndex+1)%this.slides.length}}k(bt,"properties",{slides:{type:Array},currentIndex:{type:Number}}),k(bt,"styles",j`
       .slider {
         position: relative;
         width: 100%;
         overflow: hidden;
       }
       .slides {
         display: flex;
         transition: transform 0.5s ease;
       }
       .slide {
         min-width: 100%;
         box-sizing: border-box;
         height: 300px;
         width: 50px;

       }
       .controls {
         position: absolute;
         top: 50%;
         width: 100%;
         display: flex;
         justify-content: space-between;
         transform: translateY(-50%);
       }
       .control {
         background-color: rgba(0, 0, 0, 0.5);
         color: white;
         border: none;
         padding: 10px;
         cursor: pointer;
       }
     `);customElements.define("slider-component",bt);Xe();console.log("Script is working...");
