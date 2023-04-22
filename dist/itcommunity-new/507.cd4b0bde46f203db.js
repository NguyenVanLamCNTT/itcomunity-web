"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[507],{507:(P,h,l)=>{l.r(h),l.d(h,{NewestModule:()=>me});var p=l(5518),v=l(9182),c=l(8692),e=l(4537),d=l(3946),a=l(1283),u=l(1901),_=l(8349),f=l(5251),g=l(5568),C=l(9638);function S(n,o){1&n&&(e.TgZ(0,"div",12)(1,"button",13),e._UZ(2,"i",14),e._uU(3," Create Series "),e.qZA()())}function Z(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",15),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)("isSeries",!0)}}function O(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",16),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const M=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let x=(()=>{class n{constructor(t,i,r,s){this.postsService=t,this.seriesService=i,this.authService=r,this.loadingServiceService=s,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.seriesService.getSeries(t,i,r).subscribe(s=>{this.listSeries=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(a._),e.Y36(u.e),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-series"]],decls:15,vars:10,consts:[[1,"mx-2"],[1,"d-flex","justify-content-center","sub-title","alert","alert-warning"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-rectangle-vertical-history"],[1,"ms-1"],["class","d-flex justify-content-end",4,"ngIf"],[1,"mt-4"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[1,"d-flex","justify-content-end"],["mat-raised-button","","color","primary","routerLink","/series/create"],[1,"fa-solid","fa-circle-plus","me-1"],[3,"item","isSeries"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Series with zero posts will only be displayed on users profile page, and will not be listed here. "),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"p",4),e._UZ(6,"i",5),e._uU(7," Newest Series "),e.qZA(),e._UZ(8,"hr",6),e.qZA()(),e.YNc(9,S,4,0,"div",7),e.TgZ(10,"div",8),e.YNc(11,Z,2,2,"div",9),e.ALo(12,"paginate"),e.TgZ(13,"div",10),e.YNc(14,O,1,0,"pagination-controls",11),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngIf",i.isLogin),e.xp6(2),e.Q6J("ngForOf",e.xi3(12,3,null==i.listSeries?null:i.listSeries.items,e.kEZ(6,M,i.itemsSize,i.page,null==i.listSeries?null:i.listSeries.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listSeries?null:i.listSeries.items.length))},dependencies:[c.sg,c.O5,p.rH,f.o,g.LS,C.lW,g._s],styles:[".sub-title[_ngcontent-%COMP%]{color:var(--gray-text);font-size:1rem;font-weight:400}.title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}@media screen and (max-width: 768px){.right-content-home[_ngcontent-%COMP%]{display:none}.left-content-home[_ngcontent-%COMP%]{width:100%}.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px}}"]}),n})();function T(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",13),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function b(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",14),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const y=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let N=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPosts(t,i,r).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-posts"]],decls:15,vars:9,consts:[[1,"newest-outer","mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-light","fa-newspaper"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5," Newest Posts "),e.qZA(),e._UZ(6,"hr",5),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"i",7)(9,"i",8),e.qZA(),e.TgZ(10,"div",9),e.YNc(11,T,2,1,"div",10),e.ALo(12,"paginate"),e.TgZ(13,"div",11),e.YNc(14,b,1,0,"pagination-controls",12),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("ngForOf",e.xi3(12,2,null==i.listPosts?null:i.listPosts.items,e.kEZ(5,y,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,f.o,g.LS,g._s],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},dependencies:[p.lC],styles:[".newest-outer[_ngcontent-%COMP%]   .option-list-icon-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.3rem}"]}),n})();function L(n,o){1&n&&(e.TgZ(0,"div")(1,"div",16)(2,"p"),e._uU(3," Posts with zero views will only be displayed on users profile page, and will not be listed here. "),e.qZA()()())}function U(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",17),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function A(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",18),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const F=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let q=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPostsByUserFollow(t,i,r).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-posts-followings"]],decls:22,vars:10,consts:[[1,"newest-outer","mx-2"],[1,"d-flex","justify-content-center","sub-title","text-center","alert","alert-warning"],["routerLink","/home/newest/content-creators"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-light","fa-users"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100","mt-3"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[1,"d-flex","justify-content-center","sub-title"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3," The posts here have been displayed based on the Topics, and the posts of the people you follow. If you want to follow new topics or authors, please click "),e.TgZ(4,"a",2),e._uU(5,"here"),e.qZA(),e._uU(6,"! "),e.qZA()(),e.TgZ(7,"div",3)(8,"div",4)(9,"p",5),e._UZ(10,"i",6),e._uU(11," Newest Posts of the people you follow "),e.qZA(),e._UZ(12,"hr",7),e.qZA()(),e.TgZ(13,"div",8),e._UZ(14,"i",9)(15,"i",10),e.qZA(),e.TgZ(16,"div",11),e.YNc(17,L,4,0,"div",12),e.YNc(18,U,2,1,"div",13),e.ALo(19,"paginate"),e.TgZ(20,"div",14),e.YNc(21,A,1,0,"pagination-controls",15),e.qZA()()()),2&t&&(e.xp6(17),e.Q6J("ngIf",!(null!=i.listPosts&&i.listPosts.items.length)),e.xp6(1),e.Q6J("ngForOf",e.xi3(19,3,null==i.listPosts?null:i.listPosts.items,e.kEZ(6,F,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,p.rH,f.o,g.LS,g._s],styles:[".sub-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--gray-text);font-style:italic}.title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})();var z=l(9730),I=l(901);function Y(n,o){1&n&&(e.TgZ(0,"div",8)(1,"button",9),e._UZ(2,"i",10),e._uU(3," Ask Question "),e.qZA()())}function J(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-question-card",11),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("question",t)}}let Q=(()=>{class n{constructor(t,i,r){this.questionAnswerService=t,this.authService=i,this.loadingServiceService=r,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.questionAnswerService.getQuestion(t,i,r).subscribe(s=>{this.listQuestions=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(z.t),e.Y36(u.e),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-questions"]],decls:9,vars:2,consts:[[1,"mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-messages-question"],[1,"ms-1"],["class","d-flex justify-content-end",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["mat-raised-button","","color","primary","routerLink","/questions/create"],[1,"fa-solid","fa-circle-plus"],[3,"question"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5," Newest Questions "),e.qZA(),e._UZ(6,"hr",5),e.qZA()(),e.YNc(7,Y,4,0,"div",6),e.YNc(8,J,2,1,"div",7),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",i.isLogin),e.xp6(1),e.Q6J("ngForOf",null==i.listQuestions?null:i.listQuestions.items))},dependencies:[c.sg,c.O5,p.rH,I.n,C.lW],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})();var w=l(1528),B=l(8465),E=l(5934),j=l(9549);function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.followingTopic(r))}),e._UZ(1,"i",27),e._uU(2," Follow "),e.qZA()}}function D(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.unFollowingTopic(r))}),e._UZ(1,"i",29),e._uU(2," Following "),e.qZA()}}function G(n,o){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18),e._UZ(4,"img",19),e.qZA(),e.TgZ(5,"div",20)(6,"p",21),e._UZ(7,"i",22),e._uU(8),e.qZA(),e.TgZ(9,"div")(10,"div")(11,"span"),e._uU(12,"Posts:"),e.qZA(),e.TgZ(13,"span",6),e._uU(14),e.qZA()(),e.TgZ(15,"div")(16,"span"),e._uU(17,"Followers:"),e.qZA(),e.TgZ(18,"span",6),e._uU(19),e.qZA()(),e.TgZ(20,"div")(21,"span"),e._uU(22,"Answers:"),e.qZA(),e.TgZ(23,"span",6),e._uU(24),e.qZA()()()()(),e.TgZ(25,"div",23),e.YNc(26,H,3,0,"button",24),e.YNc(27,D,3,0,"button",25),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(4),e.s9C("src",t.image,e.LSH),e.xp6(4),e.hij(" ",t.name," "),e.xp6(6),e.Oqu(t.postNumber),e.xp6(5),e.Oqu(t.followersNumber),e.xp6(5),e.Oqu(t.answerNumber),e.xp6(2),e.Q6J("ngIf",!(null!=t&&t.isFollowing)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.isFollowing)}}function $(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.followUser(r))}),e._UZ(1,"i",27),e._uU(2," Follow "),e.qZA()}}function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.unFollowUser(r))}),e._UZ(1,"i",29),e._uU(2," Following "),e.qZA()}}function X(n,o){if(1&n&&(e.TgZ(0,"div",30)(1,"div",31)(2,"div",32),e._UZ(3,"img",33),e.qZA(),e.TgZ(4,"div",20)(5,"p",34),e._uU(6),e.qZA(),e.TgZ(7,"p",35),e._uU(8),e.qZA(),e.YNc(9,$,3,0,"button",36),e.YNc(10,K,3,0,"button",37),e.qZA()(),e.TgZ(11,"div",38)(12,"div",39),e._UZ(13,"i",40),e.TgZ(14,"span",6),e._uU(15),e.qZA()(),e.TgZ(16,"div",39),e._UZ(17,"i",41),e.TgZ(18,"span",6),e._uU(19),e.qZA()(),e.TgZ(20,"div",39),e._UZ(21,"i",42),e.TgZ(22,"span",6),e._uU(23),e.qZA()(),e.TgZ(24,"div",39),e._UZ(25,"i",43),e.TgZ(26,"span",6),e._uU(27),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(2),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.s9C("src",null==t?null:t.avatar,e.LSH),e.xp6(2),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.hij(" ",null==t?null:t.fullname," "),e.xp6(1),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.hij(" @",null==t?null:t.username," "),e.xp6(1),e.Q6J("ngIf",!(null!=t&&t.isFollowing)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.isFollowing),e.xp6(5),e.Oqu(null==t?null:t.postsNumber),e.xp6(4),e.Oqu(null==t?null:t.followersNumber),e.xp6(4),e.Oqu(null==t?null:t.questionsNumber),e.xp6(4),e.Oqu(null==t?null:t.seriesNumber)}}const W=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let R=(()=>{class n{constructor(t,i,r,s,m,de){this.topicService=t,this.userService=i,this.notifyService=r,this.authService=s,this.router=m,this.loadingServiceService=de,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=18,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenServiceTopic(),this.listenServiceUsers(),this.isLogin=this.authService.checkLogin()}listenServiceUsers(t=1,i=18,r="desc"){this.loadingServiceService.showLoading(),this.isLogin?this.userService.getAllUsers(t,i).pipe((0,w.w)(s=>(s.items&&(this.users=s),this.userService.getMe()))).subscribe(s=>{s.authorFollow&&(this.users.items=this.users.items.map(m=>(s.authorFollow?.includes(m.id)&&(m.isFollowing=!0),m)),this.users.items=this.users.items.filter(m=>m.id!==s.id),this.loadingServiceService.hideLoading())},s=>{console.log(s),this.loadingServiceService.hideLoading()}):this.userService.getAllUsers(t,i).subscribe(s=>{s.items&&(this.users=s),this.loadingServiceService.hideLoading()},s=>{this.loadingServiceService.hideLoading(),console.log(s)})}listenServiceTopic(t=1,i=18,r="desc"){this.loadingServiceService.showLoading(),this.isLogin?this.topicService.getTopic(t,i).pipe((0,w.w)(s=>(s.items&&(this.topics=s),this.userService.getMe()))).subscribe(s=>{this.topics.items=this.topics.items.map(m=>(s.followTopicIds?.includes(m.id)&&(m.isFollowing=!0),m)),this.loadingServiceService.hideLoading()},s=>{console.log(s),this.loadingServiceService.hideLoading()}):this.topicService.getTopic(t,i).subscribe(s=>{s.items&&(this.topics=s),this.loadingServiceService.hideLoading()},s=>{this.loadingServiceService.hideLoading(),console.log(s)})}followingTopic(t){if(!this.isLogin)return this.notifyService.error("Please login to follow topic!","Error"),void this.router.navigate(["/auth/login"]);this.topicService.addTopicToUser(t.id).subscribe(i=>{this.topics.items=this.topics.items.map(r=>(r.id===t.id&&(r.isFollowing=!0,this.notifyService.success("Follow topic successfully!","Success")),r))},i=>{this.notifyService.error("Follow topic failed!","Error")})}unFollowingTopic(t){this.topicService.removeTopicFromUser(t.id).subscribe(i=>{this.topics.items=this.topics.items.map(r=>(r.id===t.id&&(this.notifyService.success("UnFollow topic successfully!","Success"),r.isFollowing=!1),r))},i=>{this.notifyService.error("UnFollow topic failed!","Error")})}followUser(t){if(!this.isLogin)return this.notifyService.error("Please login to follow user!","Error"),void this.router.navigate(["/auth/login"]);this.userService.followingMember(t.id,!0).subscribe(i=>{this.users.items=this.users.items.map(r=>(r.id===t.id&&(r.isFollowing=!0,this.notifyService.success("Follow user successfully!","Success")),r))})}unFollowUser(t){this.userService.followingMember(t.id,!1).subscribe(i=>{this.users.items=this.users.items.map(r=>(r.id===t.id&&(r.isFollowing=!1,this.notifyService.success("UnFollow user successfully!","Success")),r))})}onTableDataChange(t){this.page=t,this.listenServiceTopic(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B.r),e.Y36(E.K),e.Y36(j.c),e.Y36(u.e),e.Y36(p.F0),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-content-creator"]],decls:22,vars:9,consts:[[1,"content-creator-outer"],[1,"topic-outer"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-sharp","fa-light","fa-newspaper"],[1,"ms-1"],[1,"card-topic-group"],["class","card-topic mt-4 p-1",4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[1,"user-outer","mt-5"],[1,"fa-regular","fa-user"],[1,"user-list"],["class","user-card mt-4",4,"ngFor","ngForOf"],[1,"card-topic","mt-4","p-1"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","left-card"],[1,"card-topic-img"],["width","100","height","100","alt","",3,"src"],[1,"ms-2"],[1,"topic-title","m-0"],[1,"rss-icon","fa","fa-rss-square","pr-05"],[1,"right-card","d-flex","justify-content-end"],["class","btn-follow me-2",3,"click",4,"ngIf"],["class","btn-following me-1",3,"click",4,"ngIf"],[1,"btn-follow","me-2",3,"click"],[1,"fa-solid","fa-plus"],[1,"btn-following","me-1",3,"click"],[1,"fa-solid","fa-check"],[1,"user-card","mt-4"],[1,"d-flex"],[1,"user-avatar",3,"routerLink"],["alt","",3,"src"],[1,"user-name","m-0",3,"routerLink"],[1,"user-username","m-0",3,"routerLink"],["class","btn-follow mt-1",3,"click",4,"ngIf"],["class","btn-following",3,"click",4,"ngIf"],[1,"list-icon"],[1,"icon-item"],[1,"fa-regular","fa-file-pen"],[1,"fa-regular","fa-users"],[1,"fa-solid","fa-messages-question"],[1,"fa-solid","fa-list"],[1,"btn-follow","mt-1",3,"click"],[1,"btn-following",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),e._UZ(5,"i",5),e._uU(6," Topics "),e.qZA(),e._UZ(7,"hr",6),e.qZA()(),e.TgZ(8,"div",7),e.YNc(9,G,28,7,"div",8),e.ALo(10,"paginate"),e.qZA(),e.TgZ(11,"div",9)(12,"pagination-controls",10),e.NdJ("pageChange",function(s){return i.onTableDataChange(s)}),e.qZA()()(),e.TgZ(13,"div",11)(14,"div",2)(15,"div",3)(16,"p",4),e._UZ(17,"i",12),e._uU(18," Members to follow "),e.qZA(),e._UZ(19,"hr",6),e.qZA()(),e.TgZ(20,"div",13),e.YNc(21,X,28,12,"div",14),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",e.xi3(10,2,null==i.topics?null:i.topics.items,e.kEZ(5,W,i.itemsSize,i.page,null==i.topics?null:i.topics.totalItems))),e.xp6(12),e.Q6J("ngForOf",null==i.users?null:i.users.items))},dependencies:[c.sg,c.O5,p.rH,g.LS,g._s],styles:[".topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]{width:33%!important;margin:0 1px 0 0}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--black);margin-bottom:10px}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fe9e40}.topic-outer[_ngcontent-%COMP%]   .left-card[_ngcontent-%COMP%]{width:70%}.topic-outer[_ngcontent-%COMP%]   .right-card[_ngcontent-%COMP%]{width:30%}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:32%;border:1px solid #e9e9eb;padding:10px;margin:5px;border-radius:5px}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;margin-right:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--black);margin-bottom:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]:hover{color:var(--main-color)}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-username[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;color:var(--gray-text);margin-bottom:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]{display:inline-flex;justify-content:start;width:100%;padding-top:10px}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{margin-right:25px}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;margin-left:5px;color:var(--gray-text)}.btn-follow[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-follow[_ngcontent-%COMP%]:hover{background-color:var(--white);color:var(--main-color)}.btn-following[_ngcontent-%COMP%]{background-color:var(--white);color:var(--main-color);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-following[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:var(--white)}@media screen and (max-width: 768px){.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%], .user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:100%!important}}"]}),n})();function V(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",3),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",4),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const te=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let ne=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=5,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t,i,r){this.loadingServiceService.showLoading(),this.postsService.getPostsByBookmark(t,i).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-posts-bookmarks"]],decls:5,vars:9,consts:[[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,V,2,1,"div",0),e.ALo(2,"paginate"),e.TgZ(3,"div",1),e.YNc(4,ee,1,0,"pagination-controls",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,null==i.listPosts?null:i.listPosts.items,e.kEZ(5,te,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,f.o,g.LS,g._s]}),n})();function ie(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",3),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)("isSeries",!0)}}function oe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",4),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const se=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let re=(()=>{class n{constructor(t,i){this.seriesService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=5,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenServiceSeries()}listenServiceSeries(t,i,r){this.loadingServiceService.showLoading(),this.seriesService.getBookmarkSeries(t,i).subscribe(s=>{this.listSeries=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenServiceSeries(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a._),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-series-bookmarks"]],decls:5,vars:9,consts:[[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item","isSeries"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,ie,2,2,"div",0),e.ALo(2,"paginate"),e.TgZ(3,"div",1),e.YNc(4,oe,1,0,"pagination-controls",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,null==i.listSeries?null:i.listSeries.items,e.kEZ(5,se,i.itemsSize,i.page,null==i.listSeries?null:i.listSeries.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listSeries?null:i.listSeries.items.length))},dependencies:[c.sg,c.O5,f.o,g.LS,g._s]}),n})();function le(n,o){1&n&&(e.TgZ(0,"div",12),e._UZ(1,"app-list-posts-bookmarks"),e.qZA())}function ce(n,o){1&n&&(e.TgZ(0,"div",13),e._UZ(1,"app-list-series-bookmarks"),e.qZA())}function ge(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",11),e.qZA()),2&n){const t=o.$implicit,i=o.index,r=e.oxw();e.xp6(1),e.Q6J("item",t)("isTrending",r.isTrending)("number",i)}}const pe=[{path:"",component:k,children:[{path:"",redirectTo:"posts",pathMatch:"full"},{path:"posts",component:N},{path:"series",component:x},{path:"followings",component:q},{path:"questions",component:Q},{path:"content-creators",component:R},{path:"bookmarks",component:(()=>{class n{constructor(t,i){this.postsService=t,this.seriesService=i,this.isShow=!0}ngOnInit(){}selectType(t){this.isShow="posts"===t.target.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(a._))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-my-bookmark"]],decls:17,vars:2,consts:[[1,"bookmark-outer"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-sharp","fa-regular","fa-folder-bookmark"],[1,"ms-1"],[1,"type"],["name","","id","",3,"change"],["value","posts"],["value","series"],["class","mt-3 posts-outer",4,"ngIf"],["class","mt-4",4,"ngIf"],[1,"mt-3","posts-outer"],[1,"mt-4"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"div")(3,"div",1)(4,"div",2)(5,"p",3),e._UZ(6,"i",4),e._uU(7," My bookmarks "),e.qZA(),e._UZ(8,"hr",5),e.qZA()(),e.TgZ(9,"div",6)(10,"select",7),e.NdJ("change",function(s){return i.selectType(s)}),e.TgZ(11,"option",8),e._uU(12,"Posts"),e.qZA(),e.TgZ(13,"option",9),e._uU(14,"Series"),e.qZA()()(),e.YNc(15,le,2,0,"div",10),e.YNc(16,ce,2,0,"div",11),e.qZA()()()),2&t&&(e.xp6(15),e.Q6J("ngIf",i.isShow),e.xp6(1),e.Q6J("ngIf",!i.isShow))},dependencies:[c.O5,ne,re],styles:[".bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{display:flex;align-items:center}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   .label-type[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--black)}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:none;outline:none;background-color:transparent;font-size:1rem;font-weight:400;color:var(--black);cursor:pointer}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--black)}"]}),n})()},{path:"trending",component:(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12],this.isTrending=!0}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPostsTrending().subscribe(s=>{console.log(s),this.listPosts=s,console.log(this.listPosts),this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.P),e.Y36(_.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-trending"]],decls:12,vars:1,consts:[[1,"newest-outer","mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-ranking-star"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngFor","ngForOf"],[3,"item","isTrending","number"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5," Trending Posts "),e.qZA(),e._UZ(6,"hr",5),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"i",7)(9,"i",8),e.qZA(),e.TgZ(10,"div",9),e.YNc(11,ge,2,3,"div",10),e.qZA()()),2&t&&(e.xp6(11),e.Q6J("ngForOf",i.listPosts))},dependencies:[c.sg,f.o],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})()}]}];let ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(pe),p.Bz]}),n})(),me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,ue,p.Bz,v.B,g.JX,C.ot]}),n})()},9549:(P,h,l)=>{l.d(h,{c:()=>c});var p=l(4537),v=l(8292);let c=(()=>{class e{constructor(a){this.toastr=a}success(a,u="Successfully"){this.toastr.success(a,u)}error(a,u="Error"){this.toastr.error(a,u)}warning(a,u="Warning"){this.toastr.warning(a,u)}info(a,u="Info"){this.toastr.info(a,u)}}return e.\u0275fac=function(a){return new(a||e)(p.LFG(v._W))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);