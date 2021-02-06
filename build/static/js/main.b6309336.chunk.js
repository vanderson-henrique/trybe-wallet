(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/carteira.ba775a0a.svg"},32:function(e,t,a){e.exports=a.p+"static/media/btn-excluir.971f6359.svg"},33:function(e,t,a){e.exports=a.p+"static/media/btn-editar.3e7d8b5e.svg"},35:function(e,t,a){e.exports=a(48)},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),l=a(21),o=a(4),u=(a(44),a(2)),s=a(14),d=a(8),p=a(9),m=a(12),h=a(11),E=a(10),v=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},b=function(e){return{type:"ADD_EXPENSES",expense:e}},f=function(e){return{type:"EDIT_EXPENSE",expenseEdit:e}},g=function(){return function(e){return v().then((function(t){return e({type:"CURRENCY_QUERY",currencies:t})}),(function(t){return e(function(e){return{type:"RECEIVE_FAILURE",error:e}}(t))}))}},x=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(m.a)(n)),n.clickLogin=n.clickLogin.bind(Object(m.a)(n)),n.verifyFields=n.verifyFields.bind(Object(m.a)(n)),n.state={email:"",password:"",isDisabled:!0},n}return Object(p.a)(a,[{key:"changeValue",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(s.a)({},n,r),(function(){return t.verifyFields()}))}},{key:"clickLogin",value:function(){var e=this.props,t=e.login,a=e.history;return t(this.state.email),a.push("/carteira")}},{key:"validarEmail",value:function(e){return/\S+@\S+\.\S+/.test(e)}},{key:"verifyFields",value:function(){var e=this.state,t=e.email;e.password.length>5&&this.validarEmail(t)&&this.setState({isDisabled:!1})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.isDisabled;return r.a.createElement("div",{className:"container-login"},r.a.createElement("h1",null,"Trybe Wallet"),r.a.createElement("form",{className:"form form-login"},r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("input",{"data-testid":"email-input",placeholder:"Insira seu e-mail",id:"email",name:"email",type:"text",value:t,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"password"},"Password",r.a.createElement("input",{"data-testid":"password-input",placeholder:"Insira sua senha",id:"password",name:"password",type:"password",value:a,onChange:this.changeValue})),r.a.createElement("button",{type:"button",disabled:n,onClick:this.clickLogin},"Entrar")))}}]),a}(r.a.Component),y=Object(o.b)(null,(function(e){return{login:function(t){return e(function(e){return{type:"LOGIN",email:e}}(t))}}}))(x),j=a(30),O=a.n(j),k=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.expenses,n=0;return a.length>0&&a.forEach((function(e){var t=parseFloat(e.value),a=e.currency,r=parseFloat(e.exchangeRates[a].ask);n+=parseFloat(t*r)})),r.a.createElement("div",{className:"container-header"},r.a.createElement("img",{src:O.a,alt:"imagem da carteira",width:"80px",height:"80px"}),r.a.createElement("div",{className:"container-info"},r.a.createElement("span",{"data-testid":"email-field"},"Email:",t),r.a.createElement("div",{className:"container-amount"},r.a.createElement("span",{"data-testid":"total-field"},"Despesa Total: R$",n.toFixed(2)),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))))}}]),a}(r.a.Component),C=Object(o.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(k),w=a(23),D=a.n(w),F=a(31),S=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.state={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchAPI)()}},{key:"changeValue",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"handleClick",value:function(){var e=Object(F.a)(D.a.mark((function e(){var t,a,n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.fetchAPI,e.next=3,t();case 3:a=this.props,n=a.add,r=a.currencies,this.setState({exchangeRates:r}),n(this.state),this.setState({value:"",description:""});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=this.props.currencies,i=Object.keys(n).filter((function(e){return"USDT"!==e}));return r.a.createElement("form",{className:"form"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{"data-testid":"value-input",id:"value",name:"value",type:"text",value:t,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",id:"description",name:"description",type:"text",value:a,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency",name:"currency","data-testid":"currency-input",onChange:this.changeValue},i&&i.map((function(e){return r.a.createElement("option",{value:e,key:e,"data-testid":e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{"data-testid":"method-input",name:"method",id:"method",onChange:this.changeValue},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{"data-testid":"tag-input",name:"tag",id:"tag",onChange:this.changeValue},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"button",onClick:this.handleClick},"Adicionar despesa"))}}]),a}(n.Component),V=Object(o.b)((function(e){var t=e.wallet;return{currencies:t.currencies,expenses:t.expenses}}),(function(e){return{fetchAPI:function(){return e(g())},add:function(t){return e(b(t))}}}))(S),N=a(32),T=a.n(N),R=a(33),I=a.n(R),P=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.expenses,a=e.dellExpense,n=e.edExpense;return r.a.createElement("div",null,r.a.createElement("table",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("td",null,"Descri\xe7\xe3o"),r.a.createElement("td",null,"Tag"),r.a.createElement("td",null,"M\xe9todo de pagamento"),r.a.createElement("td",null,"Valor"),r.a.createElement("td",null,"Moeda"),r.a.createElement("td",null,"C\xe2mbio utilizado"),r.a.createElement("td",null,"Valor convertido"),r.a.createElement("td",null,"Moeda de convers\xe3o"),r.a.createElement("td",null,"Editar/Excluir"))),t?t.map((function(e){var t=e.value,i=e.description,c=e.tag,l=e.method,o=e.id,u=e.exchangeRates,s=e.currency,d=u[s].name,p=u[s].ask,m=parseFloat(t)*p;return r.a.createElement("table",{key:o,className:"table-data"},r.a.createElement("tr",null,r.a.createElement("td",null,i),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,t),r.a.createElement("td",null,d),r.a.createElement("td",null,parseFloat(p).toFixed(2)),r.a.createElement("td",null,parseFloat(m).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(){return n(e)}},r.a.createElement("img",{src:I.a,alt:"btnExcluir",width:"20px"})),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return a(o)}},r.a.createElement("img",{src:T.a,alt:"btnExcluir",width:"20px"})))))})):"")}}]),a}(r.a.Component),A=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{dellExpense:function(t){return e(function(e){return{type:"DELETE_EXPENSE",id:e}}(t))},edExpense:function(t){return e(f(t))}}}))(P),L=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(m.a)(n)),n.editWallet=n.editWallet.bind(Object(m.a)(n));var r=n.props.expenseEdit;return n.state={value:r.value,description:r.description,currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchAPI)()}},{key:"changeValue",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"editWallet",value:function(){var e=this.props,t=e.edExpense;(0,e.edit)(e.expenseEdit,this.state),t(),this.setState({value:"",description:""})}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=this.props.currencies,i=Object.keys(n).filter((function(e){return"USDT"!==e}));return r.a.createElement("form",{className:"form-edit"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{"data-testid":"value-input",id:"value",name:"value",type:"text",value:t,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",id:"description",name:"description",type:"text",value:a,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency",name:"currency","data-testid":"currency-input",onChange:this.changeValue},i&&i.map((function(e){return r.a.createElement("option",{value:e,key:e,"data-testid":e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{"data-testid":"method-input",name:"method",id:"method",onChange:this.changeValue},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{"data-testid":"tag-input",name:"tag",id:"tag",onChange:this.changeValue},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"button",onClick:this.editWallet},"Editar despesa"))}}]),a}(r.a.Component),M=Object(o.b)((function(e){var t=e.wallet,a=e.edit;return{currencies:t.currencies,expenses:t.expenses,expenseEdit:a.inEditing.expenseEdit}}),(function(e){return{fetchAPI:function(){return e(g())},add:function(t){return e(b(t))},edExpense:function(t){return e(f(t))},edit:function(t,a){return e(function(e,t){return{type:"EDITING",expenseEdit:e,newData:t}}(t,a))}}}))(L),U=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.inEditing;return r.a.createElement("div",null,r.a.createElement(C,null),e?r.a.createElement(M,null):r.a.createElement(V,null),r.a.createElement(A,null))}}]),a}(r.a.Component),_=Object(o.b)((function(e){var t=e.edit;return{inEditing:t.inEditing.edit,expenseEdit:t.inEditing.expenseEdit}}))(U);a(46);var W=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:y}),r.a.createElement(u.a,{path:"/carteira",component:_}))},X=a(15),z=a(34),G=a(3),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(G.a)(Object(G.a)({},e),{},{email:t.email});default:return e}},B=a(26),J={currencies:[],expenses:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENCY_QUERY":return Object(G.a)(Object(G.a)({},e),{},{currencies:t.currencies});case"ADD_EXPENSES":return Object(G.a)(Object(G.a)({},e),{},{expenses:[].concat(Object(B.a)(e.expenses),[{id:e.expenses.length,value:t.expense.value,description:t.expense.description,currency:t.expense.currency,method:t.expense.method,tag:t.expense.tag,exchangeRates:t.expense.exchangeRates}])});case"DELETE_EXPENSE":return Object(G.a)(Object(G.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});case"EDITING":return Object(G.a)(Object(G.a)({},e),{},{expenses:Object(B.a)(e.expenses.map((function(e){return e.id!==t.expenseEdit.id?e:{id:t.expenseEdit.id,value:t.newData.value,description:t.newData.description,currency:t.newData.currency,method:t.newData.method,tag:t.newData.tag,exchangeRates:t.expenseEdit.exchangeRates}})))});default:return e}},$={inEditing:{edit:!1,expenseEdit:{}}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_EXPENSE":return Object(G.a)(Object(G.a)({},e),{},{inEditing:{edit:!e.inEditing.edit,expenseEdit:t.expenseEdit}});default:return e}},H=Object(X.c)({user:Y,wallet:Q,edit:q}),K=Object(X.d)(H,Object(X.a)(z.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null,r.a.createElement(o.a,{store:K},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b6309336.chunk.js.map