(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{418:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(43),o=a(44),r=a(46),s=a(45),l=a(0),c=a.n(l),u=a(34),i=a(18),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(l,t);var a=Object(s.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),l}(c.a.Component);return Object(i.b)(p)(t)}},419:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",status:"ProfileInfo_status__2G3BZ",contact:"ProfileInfo_contact__1N3gp",formSummaryError:"ProfileInfo_formSummaryError__3Pphw"}},420:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},421:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},422:function(e,t,a){"use strict";a.r(t);var n=a(43),o=a(44),r=a(46),s=a(45),l=a(0),c=a.n(l),u=a(125),i=a(419),p=a.n(i),m=a(48),f=function(e){var t=Object(l.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],r=Object(l.useState)(e.status),s=Object(u.a)(r,2),i=s[0],m=s[1];Object(l.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,"Status(double click to change): ",!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){o(!0)},className:p.a.status},e.status||"---no status---")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onChange:function(e){return m(e.target.value)},onBlur:function(){o(!1),e.updateStatus(i)},value:i})))},d=a(40),b=a(186),E=Object(b.a)({form:"edit-profile"})((function(e){var t=e.profile,a=e.activateEditMode,n=e.handleSubmit,o=e.error;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,c.a.createElement("button",{onClick:a},"save")),o&&c.a.createElement("div",{className:p.a.formSummaryError},o),c.a.createElement("div",null,"Full name:",Object(d.c)("Type your full name...","fullName",null,d.a)),c.a.createElement("div",null,"Looking for a job:",Object(d.c)("","lookingForAJob",null,d.a,{type:"checkbox"})),c.a.createElement("div",null,"Professional skills:",Object(d.c)("Type your professional skils...","lookingForAJobDescription",null,d.b,{rows:5})),c.a.createElement("div",null,"About Me:",Object(d.c)("Type information about you...","aboutMe",null,d.b,{rows:7})),c.a.createElement("div",null,"Contacts:",Object.keys(t.contacts).map((function(e,t){return c.a.createElement("div",{key:t,className:p.a.contact},e,":",Object(d.c)(e+"...","contacts."+e,null,d.a))}))))})),v=function(e){var t=e.profile,a=e.isOwner,n=e.activateEditMode;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("p",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442: ",t.fullName),c.a.createElement("p",null,"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044f ",t.lookingForAJob?"\u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443 !!!":"\u0440\u0430\u0431\u043e\u0442\u0430\u044e \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),t.lookingForAJob&&c.a.createElement("p",null,"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: ",t.lookingForAJobDescription),c.a.createElement("p",null,"About Me: ",t.aboutMe),c.a.createElement("div",null,"Contacts:",Object.keys(t.contacts).map((function(e,a){return c.a.createElement(h,{key:a,contactTitle:e,contactValue:t.contacts[e]})}))),c.a.createElement("br",null))},h=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:p.a.contact},t,": ",a)},O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,s=e.saveProfile,i=Object(l.useState)(!1),d=Object(u.a)(i,2),b=d[0],h=d[1];if(!t)return c.a.createElement(m.a,null);var O=function(){h(!0)};return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large,alt:"UserPhoto"}),o&&c.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files;t.length&&r(t[0])}}),b?c.a.createElement(E,{profile:t,activateEditMode:O,onSubmit:function(e){s(e).then((function(){return h(!1)}))},initialValues:t}):c.a.createElement(v,{profile:t,isOwner:o,activateEditMode:O}),c.a.createElement(f,{status:a,updateStatus:n})))},P=a(92),j=a(42),g=a(420),k=a.n(g),y=a(421),S=a.n(y),_=function(e){return c.a.createElement("div",{className:S.a.item},c.a.createElement("img",{src:e.picture}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,e.LikeCounter," Like")))},w=a(119),N=a(82),A=Object(N.a)(30),C=Object(N.b)(10),M=c.a.memo((function(e){var t=0,a=Object(j.a)(e.posts).reverse().map((function(e){return c.a.createElement(_,{key:t++,message:e.message,picture:e.picture,LikeCounter:e.likesCounter})}));return console.log("RENDER YO"),c.a.createElement("div",{className:k.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",{className:k.a.posts},a,c.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}})))})),T=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(w.a,{component:d.b,name:"newPostText",validate:[N.c,A,C]})),c.a.createElement("div",null,c.a.createElement("button",null,"New Post")))};T=Object(b.a)({form:"ProfileAddNewPostForm"})(T);var x=M,F=a(18),I=Object(F.b)((function(e){return{posts:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(P.a)(t))}}}))(x),B=function(e){return c.a.createElement("div",null,c.a.createElement(O,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(I,null))},J=a(34),D=a(418),U=a(8),L=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),a}(c.a.Component);t.default=Object(U.d)(Object(F.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:P.c,getStatus:P.b,updateStatus:P.g,savePhoto:P.e,saveProfile:P.f}),J.f,D.a)(L)}}]);
//# sourceMappingURL=3.9853c537.chunk.js.map