(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[0],{181:function(e){e.exports=JSON.parse('{"thisLang":"en-us","thisLanguageMomentCode":"en-us","targetLang":"English","targetLangCode":"zh-cn","user":"\u7528\u6237","addUser":"\u6dfb\u52a0\u7528\u6237","editUser":"\u7f16\u8f91\u7528\u6237","name":"\u59d3\u540d","mobile":"\u624b\u673a","email":"\u90ae\u7bb1","actions":"\u64cd\u4f5c","confirm":"\u786e\u8ba4","cancel":"\u53d6\u6d88","modify":"\u7f16\u8f91","delete":"\u5220\u9664"}')},182:function(e){e.exports=JSON.parse('{"thisLang":"zh-cn","thisLanguageMomentCode":"zh-cn","targetLang":"\u4e2d\u6587","targetLangCode":"en-us","user":"User","addUser":"Add user","editUser":"Edit user","name":"Name","mobile":"Mobile","email":"Email","actions":"Actions","confrim":"Confrim","cancel":"Cancel","modify":"Modify","delete":"Delete"}')},199:function(e,t,n){},201:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(0),i=n.n(r),c=n(26),s=n.n(c),o=(n(199),n(35)),u=n.n(o),l=n(45),h=n(58),f=n(56),d=n(98),b=n(97),m=n(15),j=n(92),p=n.n(j),v=(n(201),n(353)),O=n(42),x=n(350),g=n(348),y=n(354),k=n(352),w=n(351),C=n(190),L=n(160),S=n(349),M=v.a.Search;var U,z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).formRef=i.a.createRef(),e.save=function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.edit(),e.setState({visible:!1});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.cancelModal=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formRef.current.resetFields(),e.props.onCancel();case 2:case"end":return t.stop()}}),t)}))),e.onFinish=function(e){console.log("Received values of form: ",e)},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.visible,n=(e.form,e.title),r=e.target;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(k.a,{title:n,visible:t,onOk:this.save,onCancel:this.cancelModal,children:Object(a.jsxs)(w.a,{ref:this.formRef,initialValues:{name:r?r.name:null,mobile:r?r.mobile:null,email:r?r.email:null},children:[Object(a.jsx)(w.a.Item,{name:"name",label:"Name",children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(w.a.Item,{name:"mobile",label:"Mobile",children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(w.a.Item,{name:"email",label:"Email",children:Object(a.jsx)(v.a,{})})]})})})}}]),n}(i.a.Component),I=(U=function(e){var t=Object(L.a)(),n=t.t,r=t.i18n;return Object(a.jsxs)("div",{style:{padding:40},children:[Object(a.jsxs)("div",{style:{marginBottom:20},children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:n("user")})}),Object(a.jsxs)("div",{style:{float:"left"},children:[Object(a.jsx)(O.a,{type:"primary",style:{margin:"0 10px 10px 0"},onClick:function(){return e.show()},children:n("addUser")}),Object(a.jsx)(M,{placeholder:"search user",onSearch:function(t){return e.search(t)},style:{width:240}})]}),Object(a.jsxs)("div",{style:{float:"right"},children:[Object(a.jsx)(O.a,{style:{margin:"0 10px 10px 0"},onClick:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.changeLanguage(n("targetLangCode"));case 1:case"end":return e.stop()}}),e)}))),children:n("targetLang")}),Object(a.jsx)(O.a,{children:Object(a.jsx)("a",{href:"https://github.com/zzhang18/booking",children:"GitHub"})})]})]}),Object(a.jsx)(x.a,{dataSource:e.users,columns:[{title:n("name"),dataIndex:"name",key:"name",width:200,sorter:function(e,t){return e.name>t.name}},{title:n("mobile"),dataIndex:"mobile",key:"mobile",width:160,sorter:function(e,t){return e.mobile-t.mobile}},{title:n("email"),dataIndex:"email",key:"email",width:160,sorter:function(e,t){return e.email-t.email}},{title:n("actions"),key:"action",width:160,render:function(t,r){return Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{onClick:function(){return e.show(r)},children:n("modify")}),Object(a.jsx)(g.a,{type:"vertical"}),Object(a.jsx)(y.a,{title:"Confirm to delete?",onConfirm:function(){e.delete(r)},okText:"ok",cancelText:"cancel",children:Object(a.jsx)("a",{children:n("delete")})})]})}}]}),Object(a.jsx)(z,{title:e.title,visible:e.visible,edit:function(t){return e.edit(t)},onCancel:e.cancel,target:e.user})]})},Object(S.a)()(function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={user:null,users:null,visible:!1,title:"Add user"},a}return Object(f.a)(n,[{key:"t",get:function(){return this.props.t}}]),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUsers();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchUsers",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.a.times(10,(function(e){return{name:"user"+e,mobile:"mobile"+e,email:"email"+e}})),this.setState({users:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.a.times(10,(function(e){return{name:"user"+e,mobile:"mobile"+e,email:"email"+e}})),this.setState({users:t?p.a.filter(n,{name:t}):n});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"show",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({visible:!0,user:t,title:t?this.t("editUser"):this.t("addUser")});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.cancel();case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({visible:!1,user:null});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.b.success("deleted");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsx)(U,{user:this.state.user,users:this.state.users,title:this.state.title,visible:this.state.visible,cancel:function(){return e.cancel()},show:function(t){return e.show(t)},edit:function(t){return e.edit(t)},search:function(t){return e.search(t)}})}}]),n}(r.Component))),F=n(139),N=n(191),E=n(180),R=n(100),A={"en-US":{translation:n(181)},"zh-CN":{translation:n(182)}};F.a.use(N.a).use(E.a).use(R.e).init({react:{useSuspense:!1},resources:A,ns:["translation"],defaultNS:"translation",fallbackLng:"zh-CN",debug:!0,saveMissing:!0,interpolation:{escapeValue:!1}});F.a;var D=n(185),J=n(115);n(136),n(345),n(346);var T=function(e){return function(t){Object(d.a)(r,t);var n=Object(b.a)(r);function r(e){var t;return Object(h.a)(this,r),(t=n.call(this,e)).changeLocale=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({locale:"zh-cn"===t.t("thisLanguageMomentCode")?D.a:J.a});case 1:case"end":return e.stop()}}),e)}))),t.state={locale:null},t}return Object(f.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)(e,{changeLocale:this.changeLocale})}}]),r}(r.Component)}((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{locale:e.locale,children:Object(a.jsx)(I,{changeLocale:e.changeLocale})})})})),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,355)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(T,{}),document.getElementById("root")),B()}},[[347,1,2]]]);
//# sourceMappingURL=main.391cf40b.chunk.js.map