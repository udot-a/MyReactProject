(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){e.exports={size:"News_size__3HZDA"}},122:function(e,t,n){e.exports=n.p+"static/media/user.4802d74b.jpg"},123:function(e,t,n){e.exports=n.p+"static/media/Pacman-1s-200px.2096574f.svg"},124:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__dPgpw"}},125:function(e,t,n){e.exports={item:"Post_item__1Pmty"}},127:function(e,t,n){e.exports=n(292)},128:function(e,t,n){},130:function(e,t,n){},14:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2_-A_",dialogsItems:"Dialogs_dialogsItems__2KCHc",dialog:"Dialogs_dialog__11lHK",active:"Dialogs_active__Htuew",messages:"Dialogs_messages__3BArM",message:"Dialogs_message__1eJLn",picture:"Dialogs_picture__1aSLX"}},292:function(e,t,n){"use strict";n.r(t);n(128);var a=n(0),r=n.n(a),o=(n(130),n(67)),s=n.n(o),i=n(3),c=function(e){return r.a.createElement("header",{className:s.a.header},r.a.createElement("img",{src:"https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"}),r.a.createElement("div",{className:s.a.loginBlock},e.isAuth?e.login:r.a.createElement(i.b,{to:"/login"},"Login")))},l=n(7),u=n.n(l),p=(n(135),function(){return r.a.createElement("nav",{className:u.a.nav},r.a.createElement("div",{className:"".concat(u.a.item," ").concat(u.a.active)},r.a.createElement(i.b,{to:"/profile",activeClassName:u.a.activeLink}," Profile")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/dialogs",activeClassName:u.a.activeLink},"Messages")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/news",activeClassName:u.a.activeLink},"News")),r.a.createElement("div",{className:u.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:u.a.item},r.a.createElement("a",null,"Settings")),r.a.createElement("div",{className:u.a.item},r.a.createElement(i.b,{to:"/users",activeClassName:u.a.activeLink},"Users"),"            "))}),m=n(19),g=n(120),f=n.n(g),d=function(e){return r.a.createElement("div",{className:f.a.size},"\u0421\u0410\u041c\u042b\u0415 \u041f\u041e\u0421\u041b\u0415\u0414\u041d\u0418\u0415 \u041d\u041e\u0412\u041e\u0421\u0422\u0418 \u041d\u0415\u0414\u0415\u041b\u0418!!!")},E=n(23),h=n(18),b=n(34).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"15c6ed1d-eb09-4e34-b317-716c6eb705bc"}}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return b.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},O=function(e){return b.post("follow/".concat(e))},P=function(e){return b.delete("follow/".concat(e))},w=function(e){return b.get("profile/"+e)},y=function(){return b.get("auth/me")};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k={postData:[{id:1,message:"How are you?",likesCounter:5,picture:"https://klike.net/uploads/posts/2019-06/1560059165_1.jpg"},{id:2,message:"It is my life.",likesCounter:12,picture:"https://klike.net/uploads/posts/2019-06/medium/1560059237_3.jpg"},{id:3,message:"Very cool!!!",likesCounter:23,picture:"https://klike.net/uploads/posts/2019-06/1560059217_6.jpg"},{id:4,message:"In god we trust!!!",likesCounter:35,picture:"https://klike.net/uploads/posts/2019-06/1560059165_1.jpg"}],newPostText:"IT kamasutra",profile:null};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N={dialogsData:[{id:1,name:"Dron",picture:"http://avatars.co.ua/web/wallpapers/avatarka-92776/thumbnail/lg.gif"},{id:2,name:"Petr",picture:"http://avatars.co.ua/web/wallpapers/avatarka-92898/thumbnail/lg.jpg"},{id:3,name:"Nikolaich",picture:"http://avatars.co.ua/web/wallpapers/avatarka-zhivotnye-49766/thumbnail/lg.jpg"},{id:4,name:"Vasiliy",picture:"http://avatars.co.ua/web/wallpapers/avatarki-angely-9923/thumbnail/lg.gif"},{id:5,name:"Ibragim",picture:"http://avatars.co.ua/web/wallpapers/3d-avatarka-99759/thumbnail/lg.gif"},{id:6,name:"Michail",picture:"http://avatars.co.ua/web/wallpapers/avatarki-animaciya-38172/thumbnail/lg.gif"}],messagesData:[{id:1,message:"Hello! How are you doing?"},{id:2,message:"Whats soup dock?"},{id:3,message:"Where are you from?"},{id:4,message:"Life is piece of shirt!!!"},{id:5,message:"Remember me?"},{id:6,message:"Just do it!!!"}],newMessageBody:""},T=n(14),C=n.n(T),I=function(e){return r.a.createElement("div",{className:C.a.dialog+" "+C.a.active},r.a.createElement(i.b,{to:"/dialogs/"+e.id},r.a.createElement("img",{className:C.a.picture,src:e.picture})," ",e.name))},A=function(e){return r.a.createElement("div",{className:C.a.message},e.message)},L=function(e){var t=e.messagePage,n=t.dialogsData.map(function(e){return r.a.createElement(I,{name:e.name,id:e.id,picture:e.picture})}),a=t.messagesData.map(function(e){return r.a.createElement(A,{message:e.message,key:e.id})}),o=t.newMessageBody;return e.isAuth?r.a.createElement("div",{className:C.a.dialogs},r.a.createElement("div",{className:C.a.dialogsItems},n),r.a.createElement("div",{className:C.a.messages},r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"Enter your message...",value:o,onChange:function(t){var n=t.target.value;e.updateNewMessageBody(n)}})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send"))))):r.a.createElement(m.a,{to:"/login"})},U=n(9),x=Object(U.b)(function(e){return{messagePage:e.messagePage,isAuth:e.auth.isAuth}},function(e){return{updateNewMessageBody:function(t){e({type:"UPDATE-NEW-MESSAGE_BODY",body:t})},sendMessage:function(){e({type:"SEND_MESSAGE"})}}})(L),F=n(25),M=n(26),G=n(28),B=n(27),R=n(29);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var H={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[1,2,3,4]},J=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},V=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},X=n(47),Y=n.n(X),K=n(122),q=n.n(K),Z=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return r.a.createElement("div",null,r.a.createElement("div",null,n.map(function(t){return r.a.createElement("span",{className:"".concat(e.currentPage===t&&Y.a.selectedPage," ").concat(Y.a.pageCounter),onClick:function(){return e.onPageChanged(t)}},t)})),e.users.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:Y.a.userPhoto,src:null!=t.photos.small?t.photos.small:q.a,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.city"),r.a.createElement("div",null,"u.location.country"))))}))},$=n(123),Q=n.n($),ee=function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"Preloader",src:Q.a}))},te=function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(G.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching&&r.a.createElement(ee,null),r.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),ne=Object(U.b)(function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}},{follow:function(e){return function(t){t(V(!0,e)),O(e).then(function(n){0==n.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(V(!1,e))})}},unfollow:function(e){return function(t){t(V(!0,e)),P(e).then(function(n){0==n.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(V(!1,e))})}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingProgress:V,getUsers:function(e,t){return function(n){n(J(!0)),v(e,t).then(function(e){n(J(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_COUNT",totalCount:e.totalCount})})}}})(te),ae=n(124),re=n.n(ae),oe=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://i.ytimg.com/vi/E0hnI4_egl8/maxresdefault.jpg"})),r.a.createElement("div",{className:re.a.descriptionBlock},r.a.createElement("img",{src:e.profile.photos.large,alt:"UserPhoto"}),r.a.createElement("p",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442: ",e.profile.fullName),r.a.createElement("p",null,"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044f ",e.profile.lookingForAJob?"\u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443 !!!":"\u0440\u0430\u0431\u043e\u0442\u0430\u044e \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438."))):r.a.createElement(ee,null)},se=n(71),ie=n.n(se),ce=n(125),le=n.n(ce),ue=function(e){return r.a.createElement("div",{className:le.a.item},r.a.createElement("img",{src:e.picture}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,e.LikeCounter," Like")))},pe=function(e){var t=e.posts.map(function(e){return r.a.createElement(ue,{message:e.message,picture:e.picture,LikeCounter:e.likesCounter})}),n=r.a.createRef();return r.a.createElement("div",{className:ie.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(){var t=n.current.value;e.updateNewPostText(t)},ref:n,value:e.newPostText})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addPost()}},"New Post"))),r.a.createElement("div",{className:ie.a.posts},t))},me=Object(U.b)(function(e){return{posts:e.profilePage.postData,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(){e({type:"ADD-POST"})},updateNewPostText:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))}}})(pe),ge=function(e){return r.a.createElement("div",null,r.a.createElement(oe,{profile:e.profile}),r.a.createElement(me,null))},fe=function(e){function t(){return Object(F.a)(this,t),Object(G.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;!e&&(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return this.props.isAuth?r.a.createElement(ge,Object.assign({},this.props,{profile:this.props.profile})):r.a.createElement(m.a,{to:"/login"})}}]),t}(r.a.Component),de=Object(m.f)(fe),Ee=Object(U.b)(function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth}},{getUserProfile:function(e){return function(t){w(e).then(function(e){t({type:"SET-USER-PROFILE",profile:e.data})})}}})(de);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var be={userId:null,email:null,login:null,isAuth:!1},ve=function(e){function t(){return Object(F.a)(this,t),Object(G.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return r.a.createElement(c,this.props)}}]),t}(r.a.Component),Oe=Object(U.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{getAuthUserData:function(){return function(e){y().then(function(t){if(!t.data.resultCode){var n=t.data.data,a=n.id,r=n.login,o=n.email;e(function(e,t,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n}}}(a,o,r))}})}}})(ve),Pe=function(e){return r.a.createElement("h1",null,"LOGIN")},we=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Oe,null),r.a.createElement(p,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(m.b,{path:"/news",component:d}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=n(46),_e=n.n(ye),je=n(30),ke={},De=n(126),Se=Object(je.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return""!==e.newPostText?j({},e,{postData:[].concat(Object(E.a)(e.postData),[{id:e.postData[e.postData.length-1].id+1,message:e.newPostText,likesCounter:0,picture:"https://klike.net/uploads/posts/2019-06/1560059165_1.jpg"}]),newPostText:""}):e;case"UPDATE-NEW-POST-TEXT":return j({},e,{newPostText:t.newText});case"SET-USER-PROFILE":return j({},e,{profile:t.profile});default:return e}return e},messagePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE_BODY":return S({},e,{newMessageBody:t.body});case"SEND_MESSAGE":var n=e.newMessageBody;return S({},e,{messagesData:[].concat(Object(E.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:n}]),newMessageBody:""});default:return e}return e},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return z({},e,{users:Object(E.a)(t.users)});case"SET_CURRENT_PAGE":return z({},e,{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return z({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return z({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return z({},e,{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});case"FOLLOW":return z({},e,{users:e.users.map(function(e){return e.id===t.userId?z({},e,{followed:!0}):e})});case"UNFOLLOW":return z({},e,{users:e.users.map(function(e){return e.id===t.userId?z({},e,{followed:!1}):e})});default:return e}return e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.data,{isAuth:!0});default:return e}return e}}),Ne=Object(je.d)(Se,Object(je.a)(De.a));window.store=Ne;var Te=Ne;_e.a.render(r.a.createElement(i.a,null,r.a.createElement(U.a,{store:Te},r.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2VYTw",selectedPage:"users_selectedPage__j9iGm",pageCounter:"users_pageCounter__3DO6w"}},67:function(e,t,n){e.exports={header:"Header_header__3TPFS",loginBlock:"Header_loginBlock__16FVq"}},7:function(e,t,n){e.exports={nav:"Navbar_nav__1g3nz",item:"Navbar_item__1Hqtb",activeLink:"Navbar_activeLink__2UEd6"}},71:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3upTu",posts:"MyPosts_posts__lHDXG"}}},[[127,1,2]]]);