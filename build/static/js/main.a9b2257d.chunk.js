(this["webpackJsonpblackout-poetry-v2"]=this["webpackJsonpblackout-poetry-v2"]||[]).push([[0],{109:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(6),c=a.n(i),o=a(10),l=a(13),s=a.n(l),u=a(7),d=a(48),m=a(49),p=a(61),v=a(50),h=a(62),f=a(140),b=a(137),C=a(34),S=a.n(C),E=a(51),k=a.n(E),M=a(52),O=a.n(M),y=a(59),N=a.n(y),g=function(e){return e.split(" ").map((function(e){return{word:e,isClicked:!1,isMouseOver:!1}}))},x=a(60),A=a(138),F=a(139),w=a(145),W=a(29),P=a(113),j=a(134),I=a(4),T=a(3),H=(a(83),n.a.createElement("span",null,"Click the Plus button below to browse through articles, choose one you like!")),D=n.a.createElement("span",null,"Click the Lightbulb button below to see real examples. ",n.a.createElement("br",null)," Once you are inspired, click Next button to choose your own article."),B=n.a.createElement("span",null,"Congrats you completed your First Poetry...Great! ",n.a.createElement("br",null)," If you want to save this, click the Save button below or click Finish!"),R=Object(j.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"}}),L=Object(I.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"}},completed:{"& $line":{backgroundImage:"linear-gradient(to right, #093028, #237a57); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(P.a),G=function(e){var t=e.loadExamples,a=e.loadNewArticle,i=e.pencilState,c=e.isDisplayFromSaved,l=(e.isPoetryFinished,e.markerState),s=e.saveState,u=e.saveCurrentArticle,d=Object(r.useState)(0),m=Object(x.a)(d,2),p=m[0],v=m[1],h=["Get Inspired","Browse Articles","Box the words","Black-out the Rest","Save Poetry"],f=function(){v(0),a()};function C(e){var t,a=R(),r=e.active,i=e.completed;return n.a.createElement("div",{className:Object(T.a)(a.root,(t={},Object(o.a)(t,a.active,r),Object(o.a)(t,a.completed,i),t))},{1:1,2:2,3:3,4:4,5:5}[String(e.icon)])}return c?n.a.createElement(b.a,{className:"next-btn reset-btn",onClick:f},"Reset"):n.a.createElement("div",{className:"root"},n.a.createElement(A.a,{className:"stepper",activeStep:p,alternativeLabel:!0,connector:n.a.createElement(L,null)},h.map((function(e){return n.a.createElement(F.a,{key:e},n.a.createElement(w.a,{StepIconComponent:C},e))}))),n.a.createElement("div",{className:"info"},n.a.createElement("div",null,n.a.createElement(W.a,{className:"instructions"},function(e){switch(e){case 0:return D;case 1:return H;case 2:return"Find words from the article that you like. Click them to 'box the word'. This will form your poem. Once you're done, click Next to continue";case 3:return"Hover over the rest of the words to black them out! Once you're done, click Next to continue";case 4:return B;default:return"Unknown stepIndex"}}(p)),0===p?n.a.createElement(b.a,{className:"btn",onClick:t},n.a.createElement("i",{className:"fas fa-2x fa-lightbulb"})):null,1===p?n.a.createElement(b.a,{className:"btn",onClick:a},n.a.createElement("i",{className:"fas fa-2x fa-plus-circle"})):null,4===p?n.a.createElement(b.a,{className:"btn",onClick:u}," ",n.a.createElement("i",{className:"fas fa-2x fa-save"})," "):null,p===h.length-1?n.a.createElement(b.a,{className:"next-btn",variant:"contained",onClick:f},"Finish"):n.a.createElement(b.a,{className:"next-btn",variant:"contained",onClick:function(){switch(p){case 0:a();break;case 1:i();break;case 2:l();break;case 3:s()}v(p+1)}},"Next"))))},K=(a(85),a(86),function(e){var t=e.entireCurrentArticleOF.publishedAt,a=e.isDisplayFromSaved,r=e.currentTitleWordMap,i=e.isPencilState,c=e.isPoetryFinished,o=e.isMarkerState,l=e.onMouseOverHandler,s=e.onClickHandler,u=e.volNum,d=new Date(t),m="".concat(d.getDate(),"/").concat(d.getMonth()+1,"/").concat(d.getFullYear()),p=null,v=null,h=!0;i?p=s:o&&(v=l);var b=Object.keys(r).map((function(e,t){return(a||c)&&(h=r[t].isClicked||r[t].isMouseOver),h?n.a.createElement("span",{key:t,onClick:function(){return p?p(t,"title"):null},onMouseOver:function(){return v?v(t,"title"):null},onFocus:function(){return v?v(t,"title"):null},className:r[t].isClicked?"pencil-style":r[t].isMouseOver?"marker-style":null},n.a.createElement("strong",null,"".concat(r[t].word," "))):null}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{container:!0,className:"title-container"},n.a.createElement(f.a,{item:!0,xs:6,className:"date"},"Published on: ".concat(m)),n.a.createElement(f.a,{item:!0,xs:6,className:"date-second"},"Vol. 1 No. ".concat(u))),n.a.createElement(f.a,{container:!0},n.a.createElement(f.a,{item:!0,xs:12,className:"title"},n.a.createElement(W.a,{variant:"h4",className:"title-text"},b))))}),V=(a(87),function(){return n.a.createElement(f.a,{container:!0},n.a.createElement(f.a,{item:!0,xs:12,md:8,className:"header-title"},n.a.createElement(W.a,{variant:"h3"},n.a.createElement("span",null,"B"),"lackout"),n.a.createElement(W.a,{variant:"h3"},n.a.createElement("span",{className:"second-span"},"P"),"oetry")),n.a.createElement(f.a,{item:!0,xs:12,md:8,lg:4,className:"side-info"},n.a.createElement(W.a,{variant:"subtitle1"},n.a.createElement("strong",null,"Inspiration - ")," Austin Kleon"),n.a.createElement(W.a,{variant:"subtitle1"},n.a.createElement("strong",null,"Powered By - ")," NewsAPI and LexperAPI")))}),z=(a(88),function(e){var t=e.entireCurrentArticleOF,a=e.currentContentWordMap,r=e.onMouseOverHandler,i=e.onClickHandler,c=e.isMarkerState,o=e.isPencilState,l=e.isPoetryFinished,s=e.isDisplayFromSaved,u=null,d=null,m=!0;o?u=i:c&&(d=r);var p=Object.keys(a).map((function(e,t){return(s||l)&&(m=a[t].isClicked||a[t].isMouseOver),m?n.a.createElement("span",{key:t,onClick:function(){return u?u(t,"content"):null},onMouseOver:function(){return d?d(t,"content"):null},onFocus:function(){return d?d(t,"content"):null},className:a[t].isClicked?"pencil-style":a[t].isMouseOver?"marker-style":null},"".concat(a[t].word," ")):null}));return n.a.createElement(f.a,{container:!0,className:"content-container"},n.a.createElement(f.a,{item:!0,xs:12,className:"scroll"},s||l?null:n.a.createElement("img",{alt:"article",src:t.urlToImage,className:"image"}),n.a.createElement(W.a,{variant:"subtitle1",className:"text"},p),n.a.createElement("div",{className:"author"},n.a.createElement(W.a,{variant:"h6"},t.author))))}),J=a(55),$=a.n(J),q=a(56),U=a.n(q),Y=a(57),Q=a.n(Y),X=a(58),Z=a.n(X),_=function(e){var t=e.entireCurrentArticleOF,a=e.isDisplayFromSaved,r=e.isPencilState,i=e.isMarkerState,c=e.volNum,o=e.currentTitleWordMap,l=e.onClickHandler,s=e.onMouseOverHandler,u=e.isInspiration,d=e.currentAuthorWordMap,m=e.currentContentWordMap,p=e.loadExamples,v=e.pencilState,h=e.markerState,f=e.saveState,b=e.loadNewArticle,C=e.saveCurrentArticle,S=e.isPoetryFinished,E=[$.a,U.a,Q.a,Z.a];return n.a.createElement("div",{className:"center-inspiration"},n.a.createElement(V,null),u?n.a.createElement("img",{src:E[Math.floor(3*Math.random())],alt:""}):n.a.createElement(n.a.Fragment,null,n.a.createElement(K,{entireCurrentArticleOF:t,volNum:c,isDisplayFromSaved:a,isPencilState:r,isMarkerState:i,isPoetryFinished:S,currentTitleWordMap:o,onClickHandler:l,onMouseOverHandler:s}),n.a.createElement(z,{entireCurrentArticleOF:t,isDisplayFromSaved:a,isPoetryFinished:S,isPencilState:r,isMarkerState:i,currentAuthorWordMap:d,onClickHandler:l,onMouseOverHandler:s,currentContentWordMap:m})),n.a.createElement(G,{loadNewArticle:b,loadExamples:p,pencilState:v,markerState:h,saveState:f,saveCurrentArticle:C,isDisplayFromSaved:a}))},ee=(a(89),function(e){var t=e.savedArticles,a=e.onSaveHandler,r=e.deleteSavedHandler;return n.a.createElement(f.a,{container:!0,className:"saved-newspapers-container"},Object.keys(t).map((function(e,i){return n.a.createElement(f.a,{key:i,item:!0,className:"folded-bg"},n.a.createElement("div",{className:"saved-container",onClick:function(){return a(t[e].entireCurrentArticleOF.id)}},n.a.createElement(W.a,{variant:"subtitle1"},t[e].entireCurrentArticleOF.title),n.a.createElement(W.a,{variant:"body1"},t[e].entireCurrentArticleOF.description)),n.a.createElement("div",null,n.a.createElement("button",{className:"btn delete-btn",type:"button",onClick:function(){return r(t[e].entireCurrentArticleOF.id)}},"Delete")))})))}),te=a(143),ae=(a(90),function(e){var t=e.handleClose,a=e.isOpen;return n.a.createElement(te.a,{open:a,onClose:t},n.a.createElement("div",{className:"video-container",onClick:t},n.a.createElement("iframe",{className:"video",title:"instructions",src:"https://www.youtube.com/embed/wKpVgoGr6kE"})))}),re=a(144),ne=a(141),ie=a(146),ce=a(142),oe=(a(91),function(e){var t=e.isNavOpen,a=e.toggleNav,r=e.displayComponent;return n.a.createElement(re.a,{open:t,onClose:a},n.a.createElement("div",{role:"presentation",onClick:a},n.a.createElement(ne.a,null,["Instructions","Newspaper","Saved"].map((function(e,t){return n.a.createElement(ie.a,{button:!0,onClick:function(){return r(t)},key:e},n.a.createElement(ce.a,{primary:e}))})))))}),le=a(28),se=a.n(le),ue=function(e){var t,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.a.awrap(se.a.get("https://lexper.p.rapidapi.com/v1.1/extract",{headers:{"x-rapidapi-host":"lexper.p.rapidapi.com","x-rapidapi-key":"d44877c783mshd58671523a30faap1f7ce2jsnce8f6d601239"},params:{media:"1",url:e}}));case 3:return t=r.sent,a=t.data.article.text,r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),null,null,[[0,8]])},de=function(){var e,t,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e="https://newsapi.org/v2/everything?q=Tech&from=2020-01-01&sortBy=popularity&pageSize=10&apiKey=".concat("39691abd53a949f28b79a0c5c00ba8e2"),r.next=4,s.a.awrap(se.a.get(e));case 4:return t=r.sent,a=t.data.articles,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),null,null,[[0,9]])},me=(a(109),window.innerWidth<=768),pe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).pencilState=function(){return a.setState({isPencilState:!0,isMarkerState:!1,isDisplayFromSaved:!1,isInspiration:!1,isPoetryFinished:!1})},a.markerState=function(){return a.setState({isPencilState:!1,isMarkerState:!0,isDisplayFromSaved:!1,isInspiration:!1,isPoetryFinished:!1})},a.saveState=function(){return a.setState({isPencilState:!1,isMarkerState:!1,isDisplayFromSaved:!1,isInspiration:!1,isPoetryFinished:!0})},a.loadExamples=function(){return a.setState({isInspiration:!0,isDisplayFromSaved:!1,isPoetryFinished:!1})},a.loadNewArticle=function(){var e,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:e=a.state.totalArticles,t=Math.floor(9*Math.random()),a.setState({volNum:t,isInspiration:!1,isMarkerState:!1,isPencilState:!1,isDisplayFromSaved:!1,isPoetryFinished:!1,entireCurrentArticleOF:Object(u.a)({},e[t],{fullContentText:e[t].fullContentText,id:e[t].id}),currentTitleWordMap:g(e[t].title),currentAuthorWordMap:g(e[t].author),currentContentWordMap:g(e[t].fullContentText)});case 3:case"end":return r.stop()}}))},a.saveCurrentArticle=function(){var e=a.state,t=e.savedArticles,r=e.currentTitleWordMap,n=e.currentContentWordMap,i=e.currentAuthorWordMap,c=e.entireCurrentArticleOF;t[c.id]?a.setState({savedArticles:Object(u.a)({},t,Object(o.a)({},c.id,{currentTitleWordMap:r,currentContentWordMap:n,currentAuthorWordMap:i,entireCurrentArticleOF:c,isInspiration:!1,isMarkerState:!1,isPencilState:!1}))}):a.setState({savedArticles:Object(u.a)({},t,Object(o.a)({},c.id,{currentTitleWordMap:r,currentContentWordMap:n,currentAuthorWordMap:i,entireCurrentArticleOF:c})),isInspiration:!1,isMarkerState:!1,isPencilState:!1})},a.onClickHandler=function(e,t){var r=a.state,n=r.currentTitleWordMap,i=r.currentAuthorWordMap,c=r.currentContentWordMap;switch(t){case"title":a.setState((function(t){return{currentTitleWordMap:Object(u.a)({},n,Object(o.a)({},e,Object(u.a)({},n[e],{isClicked:!t.currentTitleWordMap[e].isClicked})))}}));break;case"author":a.setState((function(t){return{currentAuthorWordMap:Object(u.a)({},i,Object(o.a)({},e,Object(u.a)({},i[e],{isClicked:!t.currentAuthorWordMap[e].isClicked})))}}));break;case"content":a.setState((function(t){return{currentContentWordMap:Object(u.a)({},c,Object(o.a)({},e,Object(u.a)({},c[e],{isClicked:!t.currentContentWordMap[e].isClicked})))}}))}},a.onMouseOverHandler=function(e,t){var r=a.state,n=r.currentTitleWordMap,i=r.currentAuthorWordMap,c=r.currentContentWordMap;switch(t){case"title":a.setState({currentTitleWordMap:Object(u.a)({},n,Object(o.a)({},e,Object(u.a)({},n[e],{isMouseOver:!0})))});break;case"author":a.setState({currentAuthorWordMap:Object(u.a)({},i,Object(o.a)({},e,Object(u.a)({},i[e],{isMouseOver:!0})))});break;case"content":a.setState({currentContentWordMap:Object(u.a)({},c,Object(o.a)({},e,Object(u.a)({},c[e],{isMouseOver:!0})))})}},a.onSaveHandler=function(e){var t=a.state.savedArticles[e],r=t.currentAuthorWordMap,n=t.currentTitleWordMap,i=t.currentContentWordMap;a.setState({isDisplayFromSaved:!0,isPoetryFinished:!1,isInspiration:!1,currentAuthorWordMap:r,currentTitleWordMap:n,currentContentWordMap:i})},a.deleteSavedHandler=function(e){var t=a.state.savedArticles,r=S.a.omit(t,e);a.setState({savedArticles:Object(u.a)({},r)})},a.handleOpen=function(){return a.setState({isOpen:!0})},a.handleClose=function(){return a.setState({isOpen:!1})},a.toggleNav=function(){return a.setState((function(e){return{isNavOpen:!e.isNavOpen}}))},a.displayComponent=function(e){var t=a.state,r=t.entireCurrentArticleOF,i=t.savedArticles,c=t.isInspiration,o=t.currentTitleWordMap,l=t.currentAuthorWordMap,s=t.currentContentWordMap,u=t.volNum,d=t.isDisplayFromSaved,m=t.inspirationImg,p=t.isPencilState,v=t.isMarkerState,h=t.isPoetryFinished;switch(e){case 0:a.componentToBeRendered=n.a.createElement("div",{className:"video-container"},n.a.createElement("iframe",{title:"instructions",className:"video",src:"https://www.youtube.com/embed/wKpVgoGr6kE"}));break;case 1:a.componentToBeRendered=n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:7,lg:7,lx:7,className:"newspaper-container"},n.a.createElement(_,{volNum:u,entireCurrentArticleOF:r,isPencilState:p,isMarkerState:v,isInspiration:c,isDisplayFromSaved:d,inspirationImg:m,currentTitleWordMap:o,currentAuthorWordMap:l,isPoetryFinished:h,currentContentWordMap:s,onClickHandler:a.onClickHandler,onMouseOverHandler:a.onMouseOverHandler,loadNewArticle:a.loadNewArticle,loadExamples:a.loadExamples,pencilState:a.pencilState,markerState:a.markerState,saveState:a.saveState,saveCurrentArticle:a.saveCurrentArticle}));break;case 2:a.componentToBeRendered=n.a.createElement(f.a,{item:!0,xs:12,md:3,lg:3},n.a.createElement(ee,{onSaveHandler:a.onSaveHandler,savedArticles:i,volNum:u,deleteSavedHandler:a.deleteSavedHandler}))}},a.state={totalArticles:[],savedArticles:{},entireCurrentArticleOF:[],currentTitleWordMap:[],currentAuthorWordMap:[],currentContentWordMap:[],isInspiration:!1,isPencilState:!1,isMarkerState:!1,isLoading:!0,isDisplayFromSaved:!1,isPoetryFinished:!1,isOpen:!1,isNavOpen:!1,volNum:1},a.componentToBeRendered=null,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(de());case 2:return e=r.sent,t=e.map((function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",ue(e.url));case 1:case"end":return t.stop()}}))})),r.next=6,s.a.awrap(Promise.all(t));case 6:a=r.sent,e.forEach((function(e,t){e.fullContentText=a[t],e.id=O()()})),this.setState({totalArticles:e,entireCurrentArticleOF:Object(u.a)({},e[0],{fullContentText:e[0].fullContentText,id:e[0].id}),currentTitleWordMap:g(e[0].title),currentAuthorWordMap:g(e[0].author),currentContentWordMap:g(e[0].fullContentText),isLoading:!1});case 9:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.entireCurrentArticleOF,a=e.savedArticles,r=e.isInspiration,i=e.currentTitleWordMap,c=e.currentAuthorWordMap,o=e.currentContentWordMap,l=e.volNum,s=e.isPoetryFinished,u=e.isDisplayFromSaved,d=e.inspirationImg,m=e.isPencilState,p=e.isMarkerState,v=e.isLoading,h=e.isNavOpen,C=e.isOpen;return S.a.isEmpty(t)?n.a.createElement(f.a,{container:!0,className:"main-container"},n.a.createElement(k.a,{loaded:!1,scale:2,top:"50%",left:"50%",position:"relative",loadedClassName:"loader"})):me?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",className:"nav-container",onClick:this.toggleNav}," ",n.a.createElement(N.a,null)," "),n.a.createElement(oe,{toggleNav:this.toggleNav,isNavOpen:h,displayComponent:this.displayComponent}),this.componentToBeRendered||n.a.createElement("div",{className:"video-container"},n.a.createElement("iframe",{title:"instructions",className:"video",src:"https://www.youtube.com/embed/wKpVgoGr6kE"}))):n.a.createElement(f.a,{container:!0,className:"main-container"},n.a.createElement(ae,{handleClose:this.handleClose,isOpen:C}),n.a.createElement(f.a,{item:!0,className:"bg-showing",md:2,lg:2,lx:2},n.a.createElement(b.a,{className:"learnmore-button",variant:"contained",size:"small",onClick:this.handleOpen},"Learn more")),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:7,lg:7,lx:7,className:"newspaper-container ".concat(v?"loader":"")},n.a.createElement(_,{volNum:l,entireCurrentArticleOF:t,isPencilState:m,isMarkerState:p,isInspiration:r,isDisplayFromSaved:u,isPoetryFinished:s,inspirationImg:d,currentTitleWordMap:i,currentAuthorWordMap:c,currentContentWordMap:o,onClickHandler:this.onClickHandler,onMouseOverHandler:this.onMouseOverHandler,loadNewArticle:this.loadNewArticle,loadExamples:this.loadExamples,pencilState:this.pencilState,markerState:this.markerState,saveState:this.saveState,saveCurrentArticle:this.saveCurrentArticle})),n.a.createElement(f.a,{item:!0,xs:12,md:3,lg:3},n.a.createElement(ee,{onSaveHandler:this.onSaveHandler,savedArticles:a,volNum:l,deleteSavedHandler:this.deleteSavedHandler,isPoetryFinished:s})))}}]),t}(n.a.Component);c.a.render(n.a.createElement(pe,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a.p+"static/media/1.be86d7a1.png"},56:function(e,t,a){e.exports=a.p+"static/media/2.53b4d42f.png"},57:function(e,t,a){e.exports=a.p+"static/media/3.13735280.png"},58:function(e,t,a){e.exports=a.p+"static/media/4.58af08ba.png"},68:function(e,t,a){e.exports=a(112)},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.a9b2257d.chunk.js.map