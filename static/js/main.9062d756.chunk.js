(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={title:"FeedbackOptionsStyles_title__3Bxow",btnList:"FeedbackOptionsStyles_btnList__1S_TC",btnListItem:"FeedbackOptionsStyles_btnListItem__U6t0a",btn:"FeedbackOptionsStyles_btn__3JT-N"}},function(t,e,n){t.exports={title:"StatisticsStyles_title__374KA",statList:"StatisticsStyles_statList__2EwDw",statListItem:"StatisticsStyles_statListItem__VhP6J"}},,,,function(t,e,n){t.exports={section:"SectionStyles_section__1xOuX"}},function(t,e,n){t.exports={notification:"NotificationStyles_notification__27_5P"}},,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(10)),r=n(2),l=n(3),b=n(5),u=n(4),j=n(6),d=n.n(j),O=n(0),h=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.onFeedbackButtonClick;return Object(O.jsxs)("ul",{className:d.a.btnList,children:[Object(O.jsx)("li",{className:d.a.btnListItem,children:Object(O.jsx)("button",{type:"button",className:d.a.btn,onClick:t,children:"Good"})}),Object(O.jsx)("li",{className:d.a.btnListItem,children:Object(O.jsx)("button",{type:"button",className:d.a.btn,onClick:t,children:"Neutral"})}),Object(O.jsx)("li",{className:d.a.btnListItem,children:Object(O.jsx)("button",{type:"button",className:d.a.btn,onClick:t,children:"Bad"})})]})}}]),n}(a.Component),p=n(7),f=n.n(p),m=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.stats,e=t.good,n=t.neutral,a=t.bad,s=t.total,c=t.positiveFeedback;return Object(O.jsxs)("ul",{className:f.a.statList,children:[Object(O.jsxs)("li",{className:f.a.statListItem,children:["Good: ",e]}),Object(O.jsxs)("li",{className:f.a.statListItem,children:["Neutral: ",n]}),Object(O.jsxs)("li",{className:f.a.statListItem,children:["Bad: ",a]}),Object(O.jsxs)("li",{className:f.a.statListItem,children:["Total: ",s]}),Object(O.jsxs)("li",{className:f.a.statListItem,children:["Positive feedback: ",c,"%"]})]})}}]),n}(a.Component),x=n(11),k=n.n(x),_=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(O.jsxs)("section",{className:k.a.section,children:[Object(O.jsx)("h2",{children:e}),n]})}}]),n}(a.Component),v=n(12),y=n.n(v),L=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("p",{className:y.a.notification,children:"No feedback given"})}}]),n}(a.Component),S=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.onFeedbackButtonClick=function(e){e.preventDefault();var n=e.target.textContent.toLowerCase();t.setState((function(t){return Object(o.a)({},n,t[n]+1)}))},t.countFullStats=function(){var e=t.state,n=e.good,a=e.neutral,s=e.bad,c=n+a+s;return{good:n,neutral:a,bad:s,total:c,positiveFeedback:0===c?0:Math.round(n/c*100)}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=Object.values(this.state).reduce((function(t,e){return t+e}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{title:"Please leave feedback",children:Object(O.jsx)(h,{title:"Please leave feedback",onFeedbackButtonClick:this.onFeedbackButtonClick})}),Object(O.jsx)(_,{title:"Statistics",children:0===t?Object(O.jsx)(L,{}):Object(O.jsx)(m,{title:"Statistics",stats:this.countFullStats()})})]})}}]),n}(a.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};n(19),i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),N()}],[[20,1,2]]]);
//# sourceMappingURL=main.9062d756.chunk.js.map