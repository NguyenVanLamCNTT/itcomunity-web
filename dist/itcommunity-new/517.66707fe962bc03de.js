"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[517],{9517:(W,d,r)=>{r.r(d),r.d(d,{ProfileModule:()=>V});var P=r(6707),C=r(9182),a=r(8692),e=r(4537),S=r(1283),c=r(4032),g=r(8349),h=r(5251),u=r(5568);function Z(i,o){1&i&&(e.TgZ(0,"div",5)(1,"p",6),e._uU(2," This user has no series yet or they are not public. You can follow them to see their series. "),e.qZA()())}function x(i,o){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",7),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)("isSeries",!0)}}function w(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"pagination-controls",9),e.NdJ("pageChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.onTableDataChange(s))}),e.qZA()()}}const b=function(i,o,t){return{itemsPerPage:i,currentPage:o,totalItems:t}};let T=(()=>{class i{constructor(t,n,s){this.seriesService=t,this.activatedRoute=n,this.loadingServiceService=s,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.username=t.username}),this.listenService()}listenService(t=1,n=10,s="desc"){this.loadingServiceService.showLoading(),this.seriesService.getSeries(t,n,s,this.username).subscribe(l=>{this.listSeries=l,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(S._),e.Y36(c.gz),e.Y36(g.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-series"]],decls:7,vars:10,consts:[[1,"mx-2"],[1,"mt-2"],["class","text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["class","mt-3 d-flex justify-content-end",4,"ngIf"],[1,"text-center"],[1,"text-description"],[3,"item","isSeries"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div"),e.YNc(3,Z,3,0,"div",2),e.qZA(),e.YNc(4,x,2,2,"div",3),e.ALo(5,"paginate"),e.YNc(6,w,2,0,"div",4),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",0===(null==n.listSeries?null:n.listSeries.items.length)),e.xp6(1),e.Q6J("ngForOf",e.xi3(5,3,null==n.listSeries?null:n.listSeries.items,e.kEZ(6,b,n.itemsSize,n.page,null==n.listSeries?null:n.listSeries.totalItems))),e.xp6(2),e.Q6J("ngIf",0!==(null==n.listSeries?null:n.listSeries.items.length)))},dependencies:[a.sg,a.O5,h.o,u.LS,u._s],styles:[".text-description[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}"]}),i})();var O=r(3946),f=r(6956),m=r(92);function y(i,o){1&i&&(e.TgZ(0,"div",9)(1,"p",10),e._uU(2," This user has no blog posts yet or they are not public. You can follow them to see their posts. "),e.qZA()())}function M(i,o){1&i&&(e.TgZ(0,"div",11)(1,"select",12)(2,"option",13),e._uU(3,"Public"),e.qZA(),e.TgZ(4,"option",13),e._uU(5,"Private"),e.qZA()()())}function A(i,o){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",14),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function U(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"pagination-controls",16),e.NdJ("pageChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.onTableDataChange(s))}),e.qZA()()}}const q=function(i,o,t){return{itemsPerPage:i,currentPage:o,totalItems:t}};let I=(()=>{class i{constructor(t,n,s,l,p){this.activatedRoute=t,this.postsService=n,this.router=s,this.loadingServiceService=l,this.localStorageHelperService=p,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12],this.currentUser=this.localStorageHelperService.getUser()}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.username=t.username}),this.listenService()}isShowPrivateOption(){return this.currentUser?.username===this.username}listenService(t=1,n=10,s="desc"){this.loadingServiceService.showLoading(),this.postsService.getPosts(t,n,s,this.username).subscribe(l=>{this.listPosts=l,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.gz),e.Y36(O.P),e.Y36(c.F0),e.Y36(g.H),e.Y36(f.w))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-posts"]],decls:10,vars:11,consts:[[1,"newest-outer","mx-2"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],["class","text-center",4,"ngIf"],["class","d-flex justify-content-end",4,"ngIf"],[4,"ngFor","ngForOf"],["class","mt-3 d-flex justify-content-end",4,"ngIf"],[1,"text-center"],[1,"text-description"],[1,"d-flex","justify-content-end"],["name","","id",""],["value",""],[3,"item"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2)(3,"i",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,y,3,0,"div",5),e.YNc(6,M,6,0,"div",6),e.YNc(7,A,2,1,"div",7),e.ALo(8,"paginate"),e.YNc(9,U,2,0,"div",8),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngIf",0===(null==n.listPosts?null:n.listPosts.items.length)),e.xp6(1),e.Q6J("ngIf",n.isShowPrivateOption()),e.xp6(1),e.Q6J("ngForOf",e.xi3(8,4,null==n.listPosts?null:n.listPosts.items,e.kEZ(7,q,n.itemsSize,n.page,null==n.listPosts?null:n.listPosts.totalItems))),e.xp6(2),e.Q6J("ngIf",0!==(null==n.listPosts?null:n.listPosts.items.length)))},dependencies:[a.sg,a.O5,h.o,m.YN,m.Kr,u.LS,u._s],styles:[".text-description[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}"]}),i})();var v=r(5934);let F=(()=>{class i{constructor(t,n){this.localStorageHelperService=t,this.userService=n}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.w),e.Y36(v.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-info"]],decls:0,vars:0,template:function(t,n){}}),i})();var _=r(9549);let Q=(()=>{class i{constructor(t){this.notifyService=t}copyLink(){const t=document.createElement("textarea");t.value=window.location.href,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.notifyService.success("Copy link success","Success")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-sidebar"]],inputs:{user:"user"},decls:47,vars:3,consts:[[1,""],[1,"btn-coppy-link","w-100",3,"click"],[1,"fa-solid","fa-code"],[1,"summary-info","mt-4"],[1,"p-3"],[1,"d-flex","justify-content-between"],[1,"key"],[1,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",0)(2,"button",1),e.NdJ("click",function(){return n.copyLink()}),e._UZ(3,"i",2),e._uU(4," Copy link profile "),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"p",6),e._uU(9,"Total posts view"),e.qZA(),e.TgZ(10,"p",7),e._uU(11,"0"),e.qZA()(),e.TgZ(12,"div",5)(13,"p",6),e._uU(14,"Following Tags"),e.qZA(),e.TgZ(15,"p",7),e._uU(16,"0"),e.qZA()(),e.TgZ(17,"div",5)(18,"p",6),e._uU(19,"Following Users"),e.qZA(),e.TgZ(20,"p",7),e._uU(21),e.qZA()(),e.TgZ(22,"div",5)(23,"p",6),e._uU(24,"Followers"),e.qZA(),e.TgZ(25,"p",7),e._uU(26),e.qZA()(),e.TgZ(27,"div",5)(28,"p",6),e._uU(29,"Total Posts"),e.qZA(),e.TgZ(30,"p",7),e._uU(31),e.qZA()(),e.TgZ(32,"div",5)(33,"p",6),e._uU(34,"Bookmark"),e.qZA(),e.TgZ(35,"p",7),e._uU(36,"0"),e.qZA()(),e.TgZ(37,"div",5)(38,"p",6),e._uU(39,"Total Series"),e.qZA(),e.TgZ(40,"p",7),e._uU(41,"0"),e.qZA()(),e.TgZ(42,"div",5)(43,"p",6),e._uU(44,"Total Questions"),e.qZA(),e.TgZ(45,"p",7),e._uU(46,"0"),e.qZA()()()()()),2&t&&(e.xp6(21),e.Oqu(null==n.user?null:n.user.followersNumber),e.xp6(5),e.Oqu(null==n.user?null:n.user.followersNumber),e.xp6(5),e.Oqu(null==n.user?null:n.user.postsNumber))},styles:[".btn-coppy-link[_ngcontent-%COMP%]{background-color:var(--white);border:2px solid var(--main-color);color:var(--main-color);font-weight:400;font-size:1.2rem;padding:8px 10px}.btn-coppy-link[_ngcontent-%COMP%]:hover{background-color:var(--blue-itc);color:var(--white)}.summary-info[_ngcontent-%COMP%]{border:1px solid var(--gray-light)}.summary-info[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400;font-size:1rem}.summary-info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--main-color);font-weight:500;font-size:1rem}"]}),i})();function Y(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.followingMember(s.user))}),e._UZ(1,"i",22),e._uU(2," Follow "),e.qZA()}}function z(i,o){1&i&&(e.TgZ(0,"button",23),e._UZ(1,"i",24),e._uU(2," Following "),e.qZA())}function k(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,Y,3,0,"button",19),e.YNc(2,z,3,0,"button",20),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.isFollowing),e.xp6(1),e.Q6J("ngIf",t.isFollowing)}}function L(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"li",25),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.itemSelected(l))}),e.TgZ(1,"a",26),e._uU(2),e.qZA()()}if(2&i){const t=o.$implicit;e.ekj("active",t.active),e.s9C("routerLink",null==t?null:t.link),e.xp6(2),e.Oqu(null==t?null:t.name)}}let N=(()=>{class i{constructor(t,n,s,l,p){this.userService=t,this.router=n,this.notifyService=s,this.localStorageHelperService=l,this.loadingServiceService=p,this.isFollowing=!1,this.currentUser=this.localStorageHelperService.getUser(),this.menuItems=[{name:"Posts",link:`/profile/${this.router.url.split("/")[2]}/posts`,id:"posts",active:!1},{name:"Series",link:`/profile/${this.router.url.split("/")[2]}/series`,id:"series",active:!1},{name:"Questions",link:`/profile/${this.router.url.split("/")[2]}/questions`,id:"questions",active:!1}]}ngOnInit(){this.listenService(),this.activeClass()}activeClass(){const t=this.router.url.split("/")[3];if(void 0===t)return this.menuItems[0].active=!0,void this.router.navigate([this.menuItems[0].link]);this.menuItems.forEach(n=>{n.id===t&&(n.active=!0)})}itemSelected(t){this.menuItems.forEach(n=>{n.active=!1}),t.active=!0}listenService(){this.loadingServiceService.showLoading(),this.username=this.router.url.split("/")[2],this.userService.getByUsername(this.username).subscribe(t=>{this.user=t,this.isFollowing=this.user?.followerIds?.some(n=>n===this.currentUser?.id),this.loadingServiceService.hideLoading()},t=>{this.loadingServiceService.hideLoading(),this.router.navigate(["/404"])})}followingMember(t){this.userService.followingMember(t.id,!0).subscribe(n=>{this.isFollowing=!0,this.notifyService.success(`Following ${t?.fullName} successfully!`,"Success")},n=>{this.notifyService.error("Following fails!","Error")})}unfollowingMember(t){this.userService.followingMember(t.id,!1).subscribe(n=>{this.isFollowing=!1,this.notifyService.success(`Unfollowing ${t?.fullName} successfully!`,"Success")},n=>{this.notifyService.error("Unfollowing fails!","Error")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.K),e.Y36(c.F0),e.Y36(_.c),e.Y36(f.w),e.Y36(g.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile"]],decls:23,vars:7,consts:[[1,"profile-outer"],[1,"profile-header","container"],[1,"p-4","d-flex","justify-content-between","align-items-center"],[1,"left-header","d-flex","align-items-center","w-75"],[1,"profile-header-avatar"],["width","140",3,"src"],[1,"profile-header-text","ms-4"],[1,"name"],[1,"username","m-0"],[1,"about","mt-3"],[4,"ngIf"],[1,"menu","d-flex","p-0"],[1,"container-md"],[1,"d-flex","justify-content-start","align-items-center","h-100","menu-outer","p-0"],["class","h-100 px-5 menu-item","id","posts",3,"active","routerLink","click",4,"ngFor","ngForOf"],[1,"container","d-flex","mt-4"],[1,"w-100","w-lg-75"],[1,"w-25","d-none","d-lg-block","mx-2"],[3,"user"],["class","btn-follow",3,"click",4,"ngIf"],["class","btn-following",4,"ngIf"],[1,"btn-follow",3,"click"],[1,"fa-solid","fa-plus","me-1"],[1,"btn-following"],[1,"fa-solid","fa-check","me-1"],["id","posts",1,"h-100","px-5","menu-item",3,"routerLink","click"],[1,"my-auto"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"p",7),e._uU(8),e.qZA(),e.TgZ(9,"p",8),e._uU(10),e.qZA(),e.TgZ(11,"p",9),e._uU(12),e.qZA()()(),e.YNc(13,k,3,2,"div",10),e.qZA()(),e.TgZ(14,"menu",11)(15,"div",12)(16,"ul",13),e.YNc(17,L,3,4,"li",14),e.qZA()()(),e.TgZ(18,"div",15)(19,"div",16),e._UZ(20,"router-outlet"),e.qZA(),e.TgZ(21,"div",17),e._UZ(22,"app-profile-sidebar",18),e.qZA()()()),2&t&&(e.xp6(5),e.s9C("src",null==n.user?null:n.user.avatar,e.LSH),e.xp6(3),e.Oqu(null==n.user?null:n.user.fullName),e.xp6(2),e.hij("@",null==n.user?null:n.user.username,""),e.xp6(2),e.hij(' "',null==n.user?null:n.user.about,'" '),e.xp6(1),e.Q6J("ngIf",(null==n.currentUser?null:n.currentUser.id)!==(null==n.user?null:n.user.id)),e.xp6(4),e.Q6J("ngForOf",n.menuItems),e.xp6(5),e.Q6J("user",n.user))},dependencies:[a.sg,a.O5,c.lC,c.rH,Q],styles:[".profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400!important;font-size:1.2rem!important}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:500!important;color:var(--main-color);font-size:1.5rem}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{font-size:.9rem;margin-top:10px;font-weight:400;font-style:italic}.menu[_ngcontent-%COMP%]{height:50px;background-color:var(--main-color);box-shadow:#64646f33 0 7px 29px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--white);font-weight:400;font-size:1rem;line-height:50px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--white)}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:var(--main-color)}.active[_ngcontent-%COMP%]{background-color:var(--white)}.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)!important}.btn-follow[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:1px solid var(--main-color);border-radius:5px;padding:5px 10px;font-size:.8rem;font-weight:500;margin-left:10px;cursor:pointer}.btn-follow[_ngcontent-%COMP%]:hover{background-color:var(--white);color:var(--main-color)}.btn-following[_ngcontent-%COMP%]{background-color:var(--white);color:var(--main-color);border:1px solid var(--main-color);border-radius:5px;padding:5px 10px;font-size:.8rem;font-weight:500;margin-left:10px;cursor:pointer}.btn-following[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:var(--white)}@media screen and (max-width: 500px){.menu-outer[_ngcontent-%COMP%]{width:100%;overflow:auto;margin-bottom:10px}.profile-header[_ngcontent-%COMP%]   .profile-header-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-size:.8rem}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{display:none}.left-header[_ngcontent-%COMP%]{width:70%}.btn-following[_ngcontent-%COMP%], .btn-follow[_ngcontent-%COMP%]{margin-left:5px;padding:5px}}"]}),i})();var J=r(9730),j=r(1901),H=r(901);function E(i,o){1&i&&(e.TgZ(0,"div",4)(1,"p",5),e._uU(2," This user has no blog questions yet or they are not public. You can follow them to see their questions. "),e.qZA()())}function $(i,o){if(1&i&&(e.TgZ(0,"div",6),e._UZ(1,"app-question-card",7),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("question",t)}}function R(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"pagination-controls",9),e.NdJ("pageChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.onTableDataChange(s))}),e.qZA()()}}const K=function(i,o,t){return{itemsPerPage:i,currentPage:o,totalItems:t}},X=[{path:"",component:N,children:[{path:"",redirectTo:":username/posts",pathMatch:"full"},{path:":username",component:F},{path:":username/posts",component:I},{path:":username/series",component:T},{path:":username/questions",component:(()=>{class i{constructor(t,n,s,l){this.questionAnswerService=t,this.authService=n,this.activatedRoute=s,this.loadingServiceService=l,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.activatedRoute.params.subscribe(t=>{this.username=t.username,this.listenService()})}listenService(t=1,n=10,s="desc"){this.loadingServiceService.showLoading(),this.questionAnswerService.getQuestion(t,n,s,this.username).subscribe(l=>{this.listQuestions=l,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(J.t),e.Y36(j.e),e.Y36(c.gz),e.Y36(g.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-questions"]],decls:5,vars:10,consts:[[1,"mx-2"],["class","text-center",4,"ngIf"],["class","mt-5",4,"ngFor","ngForOf"],["class","mt-3 d-flex justify-content-end",4,"ngIf"],[1,"text-center"],[1,"text-description"],[1,"mt-5"],[3,"question"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,E,3,0,"div",1),e.YNc(2,$,2,1,"div",2),e.ALo(3,"paginate"),e.YNc(4,R,2,0,"div",3),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",0===(null==n.listQuestions?null:n.listQuestions.items.length)),e.xp6(1),e.Q6J("ngForOf",e.xi3(3,3,null==n.listQuestions?null:n.listQuestions.items,e.kEZ(6,K,n.itemsSize,n.page,null==n.listQuestions?null:n.listQuestions.totalItems))),e.xp6(2),e.Q6J("ngIf",0!==(null==n.listQuestions?null:n.listQuestions.items.length)))},dependencies:[a.sg,a.O5,H.n,u.LS,u._s],styles:[".text-description[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}"]}),i})()}]}];let B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(X),c.Bz]}),i})();var D=r(9638),G=r(3331);let V=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.ez,B,C.B,P.aw,m.UX,D.ot,G.Ps,u.JX]}),i})()}}]);