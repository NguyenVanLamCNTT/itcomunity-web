"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[507],{507:(T,w,l)=>{l.r(w),l.d(w,{NewestModule:()=>he});var h=l(4032),O=l(9182),c=l(8692),e=l(4537),C=l(3946),a=l(1283),u=l(1901),S=l(8349),f=l(5251),m=l(5568),p=l(9638),g=l(6707);function d(n,o){1&n&&(e.TgZ(0,"div",12)(1,"button",13),e._UZ(2,"i",14),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"CREATE_SERIES")," "))}function _(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",15),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)("isSeries",!0)}}function P(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",16),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const Z=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let M=(()=>{class n{constructor(t,i,r,s){this.postsService=t,this.seriesService=i,this.authService=r,this.loadingServiceService=s,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.seriesService.getSeries(t,i,r).subscribe(s=>{this.listSeries=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(a._),e.Y36(u.e),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-series"]],decls:17,vars:16,consts:[[1,"mx-2"],[1,"d-flex","justify-content-center","sub-title","alert","alert-warning"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-rectangle-vertical-history"],[1,"ms-1"],["class","d-flex justify-content-end",4,"ngIf"],[1,"mt-4"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[1,"d-flex","justify-content-end"],["mat-raised-button","","color","primary","routerLink","/series/create"],[1,"fa-solid","fa-circle-plus","me-1"],[3,"item","isSeries"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2)(5,"div",3)(6,"p",4),e._UZ(7,"i",5),e._uU(8),e.ALo(9,"translate"),e.qZA(),e._UZ(10,"hr",6),e.qZA()(),e.YNc(11,d,5,3,"div",7),e.TgZ(12,"div",8),e.YNc(13,_,2,2,"div",9),e.ALo(14,"paginate"),e.TgZ(15,"div",10),e.YNc(16,P,1,0,"pagination-controls",11),e.qZA()()()),2&t&&(e.xp6(2),e.hij(" ",e.lcZ(3,5,"NEWEST_SERIES_DESCRIPTION")," "),e.xp6(6),e.hij(" ",e.lcZ(9,7,"NEWEST_SERIES")," "),e.xp6(3),e.Q6J("ngIf",i.isLogin),e.xp6(2),e.Q6J("ngForOf",e.xi3(14,9,null==i.listSeries?null:i.listSeries.items,e.kEZ(12,Z,i.itemsSize,i.page,null==i.listSeries?null:i.listSeries.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listSeries?null:i.listSeries.items.length))},dependencies:[c.sg,c.O5,h.rH,f.o,m.LS,p.lW,m._s,g.X$],styles:[".sub-title[_ngcontent-%COMP%]{color:var(--gray-text);font-size:1rem;font-weight:400}.title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}@media screen and (max-width: 768px){.right-content-home[_ngcontent-%COMP%]{display:none}.left-content-home[_ngcontent-%COMP%]{width:100%}.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px}}"]}),n})();function b(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",13),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function y(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",14),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const N=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let L=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPosts(t,i,r).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-posts"]],decls:16,vars:12,consts:[[1,"newest-outer","mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-light","fa-newspaper"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"hr",5),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"i",7)(10,"i",8),e.qZA(),e.TgZ(11,"div",9),e.YNc(12,b,2,1,"div",10),e.ALo(13,"paginate"),e.TgZ(14,"div",11),e.YNc(15,y,1,0,"pagination-controls",12),e.qZA()()()),2&t&&(e.xp6(5),e.hij(" ",e.lcZ(6,3,"NEWEST_POSTS")," "),e.xp6(7),e.Q6J("ngForOf",e.xi3(13,5,null==i.listPosts?null:i.listPosts.items,e.kEZ(8,N,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,f.o,m.LS,m._s,g.X$],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},dependencies:[h.lC],styles:[".newest-outer[_ngcontent-%COMP%]   .option-list-icon-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.3rem}"]}),n})();function A(n,o){1&n&&(e.TgZ(0,"div")(1,"div",16)(2,"p"),e._uU(3," Posts with zero views will only be displayed on users profile page, and will not be listed here. "),e.qZA()()())}function U(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",17),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function F(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",18),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const I=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let E=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPostsByUserFollow(t,i,r).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-posts-followings"]],decls:24,vars:16,consts:[[1,"newest-outer","mx-2"],[1,"d-flex","justify-content-center","sub-title","text-center","alert","alert-warning"],["routerLink","/home/newest/content-creators"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-light","fa-users"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100","mt-3"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[1,"d-flex","justify-content-center","sub-title"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3),e.ALo(4,"translate"),e.TgZ(5,"a",2),e._uU(6,"here"),e.qZA(),e._uU(7,"! "),e.qZA()(),e.TgZ(8,"div",3)(9,"div",4)(10,"p",5),e._UZ(11,"i",6),e._uU(12),e.ALo(13,"translate"),e.qZA(),e._UZ(14,"hr",7),e.qZA()(),e.TgZ(15,"div",8),e._UZ(16,"i",9)(17,"i",10),e.qZA(),e.TgZ(18,"div",11),e.YNc(19,A,4,0,"div",12),e.YNc(20,U,2,1,"div",13),e.ALo(21,"paginate"),e.TgZ(22,"div",14),e.YNc(23,F,1,0,"pagination-controls",15),e.qZA()()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,5,"NEWEST_FOLLOWING_DESCRIPTION")," "),e.xp6(9),e.hij(" ",e.lcZ(13,7,"NEWEST_POSTS_OF_THE_PEOPLE_YOU_FOLLOW")," "),e.xp6(7),e.Q6J("ngIf",!(null!=i.listPosts&&i.listPosts.items.length)),e.xp6(1),e.Q6J("ngForOf",e.xi3(21,9,null==i.listPosts?null:i.listPosts.items,e.kEZ(12,I,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,h.rH,f.o,m.LS,m._s,g.X$],styles:[".sub-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--gray-text);font-style:italic}.title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})();var q=l(9730),z=l(901);function Y(n,o){1&n&&(e.TgZ(0,"div",10)(1,"button",11),e._UZ(2,"i",12),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"CREATE_QUESTION")," "))}function Q(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-question-card",13),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("question",t)}}function J(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",14),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const $=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let B=(()=>{class n{constructor(t,i,r){this.questionAnswerService=t,this.authService=i,this.loadingServiceService=r,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.questionAnswerService.getQuestion(t,i,r).subscribe(s=>{this.listQuestions=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(q.t),e.Y36(u.e),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-questions"]],decls:13,vars:13,consts:[[1,"mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-messages-question"],[1,"ms-1"],["class","d-flex justify-content-end",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[1,"d-flex","justify-content-end"],["mat-raised-button","","color","primary","routerLink","/questions/create"],[1,"fa-solid","fa-circle-plus"],[3,"question"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"hr",5),e.qZA()(),e.YNc(8,Y,5,3,"div",6),e.YNc(9,Q,2,1,"div",7),e.ALo(10,"paginate"),e.TgZ(11,"div",8),e.YNc(12,J,1,0,"pagination-controls",9),e.qZA()()),2&t&&(e.xp6(5),e.hij(" ",e.lcZ(6,4,"NEWEST_QUESTIONS")," "),e.xp6(3),e.Q6J("ngIf",i.isLogin),e.xp6(1),e.Q6J("ngForOf",e.xi3(10,6,null==i.listQuestions?null:i.listQuestions.items,e.kEZ(9,$,i.itemsSize,i.page,null==i.listQuestions?null:i.listQuestions.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listQuestions?null:i.listQuestions.items.length))},dependencies:[c.sg,c.O5,h.rH,z.n,m.LS,p.lW,m._s,g.X$],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}@media screen and (max-width: 400px){.target[_ngcontent-%COMP%]{display:none}}"]}),n})();var x=l(1528),j=l(3706),D=l(5934),H=l(9549);function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.followingTopic(r))}),e._UZ(1,"i",27),e._uU(2," Follow "),e.qZA()}}function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.unFollowingTopic(r))}),e._UZ(1,"i",29),e._uU(2," Following "),e.qZA()}}function W(n,o){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18),e._UZ(4,"img",19),e.qZA(),e.TgZ(5,"div",20)(6,"p",21),e._UZ(7,"i",22),e._uU(8),e.qZA(),e.TgZ(9,"div")(10,"div")(11,"span"),e._uU(12,"Posts:"),e.qZA(),e.TgZ(13,"span",6),e._uU(14),e.qZA()(),e.TgZ(15,"div")(16,"span"),e._uU(17,"Followers:"),e.qZA(),e.TgZ(18,"span",6),e._uU(19),e.qZA()(),e.TgZ(20,"div")(21,"span"),e._uU(22,"Answers:"),e.qZA(),e.TgZ(23,"span",6),e._uU(24),e.qZA()()()()(),e.TgZ(25,"div",23),e.YNc(26,K,3,0,"button",24),e.YNc(27,R,3,0,"button",25),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(4),e.s9C("src",t.image,e.LSH),e.xp6(4),e.hij(" ",t.name," "),e.xp6(6),e.Oqu(t.postNumber),e.xp6(5),e.Oqu(t.followersNumber),e.xp6(5),e.Oqu(t.answerNumber),e.xp6(2),e.Q6J("ngIf",!(null!=t&&t.isFollowing)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.isFollowing)}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.followUser(r))}),e._UZ(1,"i",27),e._uU(2," Follow "),e.qZA()}}function G(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.unFollowUser(r))}),e._UZ(1,"i",29),e._uU(2," Following "),e.qZA()}}function V(n,o){if(1&n&&(e.TgZ(0,"div",30)(1,"div",31)(2,"div",32),e._UZ(3,"img",33),e.qZA(),e.TgZ(4,"div",20)(5,"p",34),e._uU(6),e.qZA(),e.TgZ(7,"p",35),e._uU(8),e.qZA(),e.YNc(9,X,3,0,"button",36),e.YNc(10,G,3,0,"button",37),e.qZA()(),e.TgZ(11,"div",38)(12,"div",39),e._UZ(13,"i",40),e.TgZ(14,"span",6),e._uU(15),e.qZA()(),e.TgZ(16,"div",39),e._UZ(17,"i",41),e.TgZ(18,"span",6),e._uU(19),e.qZA()(),e.TgZ(20,"div",39),e._UZ(21,"i",42),e.TgZ(22,"span",6),e._uU(23),e.qZA()(),e.TgZ(24,"div",39),e._UZ(25,"i",43),e.TgZ(26,"span",6),e._uU(27),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(2),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.s9C("src",null==t?null:t.avatar,e.LSH),e.xp6(2),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.hij(" ",null==t?null:t.fullname," "),e.xp6(1),e.MGl("routerLink","/profile/",null==t?null:t.username,"/posts"),e.xp6(1),e.hij(" @",null==t?null:t.username," "),e.xp6(1),e.Q6J("ngIf",!(null!=t&&t.isFollowing)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.isFollowing),e.xp6(5),e.Oqu(null==t?null:t.postsNumber),e.xp6(4),e.Oqu(null==t?null:t.followersNumber),e.xp6(4),e.Oqu(null==t?null:t.questionsNumber),e.xp6(4),e.Oqu(null==t?null:t.seriesNumber)}}const ee=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let te=(()=>{class n{constructor(t,i,r,s,v,fe){this.topicService=t,this.userService=i,this.notifyService=r,this.authService=s,this.router=v,this.loadingServiceService=fe,this.isLogin=!1,this.page=1,this.count=0,this.itemsSize=18,this.tableSizes=[3,6,9,12]}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.listenServiceTopic(),this.listenServiceUsers()}listenServiceUsers(t=1,i=18,r="desc"){this.loadingServiceService.showLoading(),this.isLogin?this.userService.getAllUsers(t,i).pipe((0,x.w)(s=>(s.items&&(this.users=s),this.userService.getMe()))).subscribe(s=>{s.authorFollow&&(this.users.items=this.users.items.map(v=>(s.authorFollow?.includes(v.id)&&(v.isFollowing=!0),v)),this.users.items=this.users.items.filter(v=>v.id!==s.id),this.loadingServiceService.hideLoading())},s=>{console.log(s),this.loadingServiceService.hideLoading()}):this.userService.getAllUsers(t,i).subscribe(s=>{s.items&&(this.users=s),this.loadingServiceService.hideLoading()},s=>{this.loadingServiceService.hideLoading(),console.log(s)})}listenServiceTopic(t=1,i=18,r="desc"){this.loadingServiceService.showLoading(),this.isLogin?this.topicService.getTopic(t,i).pipe((0,x.w)(s=>(s.items&&(this.topics=s),this.userService.getMe()))).subscribe(s=>{this.topics.items=this.topics.items.map(v=>(s.followTopicIds?.includes(v.id)&&(v.isFollowing=!0),v)),this.loadingServiceService.hideLoading()},s=>{console.log(s),this.loadingServiceService.hideLoading()}):this.topicService.getTopic(t,i).subscribe(s=>{s.items&&(this.topics=s),this.loadingServiceService.hideLoading()},s=>{this.loadingServiceService.hideLoading(),console.log(s)})}followingTopic(t){if(!this.isLogin)return this.notifyService.error("Please login to follow topic!","Error"),void this.router.navigate(["/auth/login"]);this.topicService.addTopicToUser(t.id).subscribe(i=>{this.topics.items=this.topics.items.map(r=>(r.id===t.id&&(r.isFollowing=!0,this.notifyService.success("Follow topic successfully!","Success")),r))},i=>{this.notifyService.error("Follow topic failed!","Error")})}unFollowingTopic(t){this.topicService.removeTopicFromUser(t.id).subscribe(i=>{this.topics.items=this.topics.items.map(r=>(r.id===t.id&&(this.notifyService.success("UnFollow topic successfully!","Success"),r.isFollowing=!1),r))},i=>{this.notifyService.error("UnFollow topic failed!","Error")})}followUser(t){if(!this.isLogin)return this.notifyService.error("Please login to follow user!","Error"),void this.router.navigate(["/auth/login"]);this.userService.followingMember(t.id,!0).subscribe(i=>{this.users.items=this.users.items.map(r=>(r.id===t.id&&(r.isFollowing=!0,this.notifyService.success("Follow user successfully!","Success")),r))})}unFollowUser(t){this.userService.followingMember(t.id,!1).subscribe(i=>{this.users.items=this.users.items.map(r=>(r.id===t.id&&(r.isFollowing=!1,this.notifyService.success("UnFollow user successfully!","Success")),r))})}onTableDataChange(t){this.page=t,this.listenServiceTopic(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(j.r),e.Y36(D.K),e.Y36(H.c),e.Y36(u.e),e.Y36(h.F0),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-content-creator"]],decls:24,vars:15,consts:[[1,"content-creator-outer"],[1,"topic-outer"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-sharp","fa-light","fa-newspaper"],[1,"ms-1"],[1,"card-topic-group"],["class","card-topic mt-4 p-1",4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[1,"user-outer","mt-5"],[1,"fa-regular","fa-user"],[1,"user-list"],["class","user-card mt-4",4,"ngFor","ngForOf"],[1,"card-topic","mt-4","p-1"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","left-card"],[1,"card-topic-img"],["width","100","height","100","alt","",3,"src"],[1,"ms-2"],[1,"topic-title","m-0"],[1,"rss-icon","fa","fa-rss-square","pr-05"],[1,"right-card","d-flex","justify-content-end"],["class","btn-follow me-2",3,"click",4,"ngIf"],["class","btn-following me-1",3,"click",4,"ngIf"],[1,"btn-follow","me-2",3,"click"],[1,"fa-solid","fa-plus"],[1,"btn-following","me-1",3,"click"],[1,"fa-solid","fa-check"],[1,"user-card","mt-4"],[1,"d-flex"],[1,"user-avatar",3,"routerLink"],["alt","",3,"src"],[1,"user-name","m-0",3,"routerLink"],[1,"user-username","m-0",3,"routerLink"],["class","btn-follow mt-1",3,"click",4,"ngIf"],["class","btn-following",3,"click",4,"ngIf"],[1,"list-icon"],[1,"icon-item"],[1,"fa-regular","fa-file-pen"],[1,"fa-regular","fa-users"],[1,"fa-solid","fa-messages-question"],[1,"fa-solid","fa-list"],[1,"btn-follow","mt-1",3,"click"],[1,"btn-following",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),e._UZ(5,"i",5),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"hr",6),e.qZA()(),e.TgZ(9,"div",7),e.YNc(10,W,28,7,"div",8),e.ALo(11,"paginate"),e.qZA(),e.TgZ(12,"div",9)(13,"pagination-controls",10),e.NdJ("pageChange",function(s){return i.onTableDataChange(s)}),e.qZA()()(),e.TgZ(14,"div",11)(15,"div",2)(16,"div",3)(17,"p",4),e._UZ(18,"i",12),e._uU(19),e.ALo(20,"translate"),e.qZA(),e._UZ(21,"hr",6),e.qZA()(),e.TgZ(22,"div",13),e.YNc(23,V,28,12,"div",14),e.qZA()()()),2&t&&(e.xp6(6),e.hij(" ",e.lcZ(7,4,"TOPIC")," "),e.xp6(4),e.Q6J("ngForOf",e.xi3(11,6,null==i.topics?null:i.topics.items,e.kEZ(11,ee,i.itemsSize,i.page,null==i.topics?null:i.topics.totalItems))),e.xp6(9),e.hij(" ",e.lcZ(20,9,"MEMBER_TO_FOLLOW")," "),e.xp6(4),e.Q6J("ngForOf",null==i.users?null:i.users.items))},dependencies:[c.sg,c.O5,h.rH,m.LS,m._s,g.X$],styles:[".topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.topic-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]{width:33%!important;margin:0 1px 0 0}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--black);margin-bottom:10px}.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%]   .topic-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fe9e40}.topic-outer[_ngcontent-%COMP%]   .left-card[_ngcontent-%COMP%]{width:70%}.topic-outer[_ngcontent-%COMP%]   .right-card[_ngcontent-%COMP%]{width:30%}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.user-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:32%;border:1px solid #e9e9eb;padding:10px;margin:5px;border-radius:5px}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;margin-right:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--black);margin-bottom:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]:hover{color:var(--main-color)}.user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-username[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;color:var(--gray-text);margin-bottom:10px;cursor:pointer}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]{display:inline-flex;justify-content:start;width:100%;padding-top:10px}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{margin-right:25px}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.user-outer[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;margin-left:5px;color:var(--gray-text)}.btn-follow[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-follow[_ngcontent-%COMP%]:hover{background-color:var(--white);color:var(--main-color)}.btn-following[_ngcontent-%COMP%]{background-color:var(--white);color:var(--main-color);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-following[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:var(--white)}@media screen and (max-width: 768px){.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%], .user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:100%!important}}"]}),n})();function ne(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",3),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)}}function ie(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",4),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const oe=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let se=(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=5,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenService()}listenService(t,i,r){this.loadingServiceService.showLoading(),this.postsService.getPostsByBookmark(t,i).subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-posts-bookmarks"]],decls:5,vars:9,consts:[[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,ne,2,1,"div",0),e.ALo(2,"paginate"),e.TgZ(3,"div",1),e.YNc(4,ie,1,0,"pagination-controls",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,null==i.listPosts?null:i.listPosts.items,e.kEZ(5,oe,i.itemsSize,i.page,null==i.listPosts?null:i.listPosts.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listPosts?null:i.listPosts.items.length))},dependencies:[c.sg,c.O5,f.o,m.LS,m._s]}),n})();function re(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",3),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("item",t)("isSeries",!0)}}function le(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination-controls",4),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onTableDataChange(r))}),e.qZA()}}const ce=function(n,o,t){return{itemsPerPage:n,currentPage:o,totalItems:t}};let ae=(()=>{class n{constructor(t,i){this.seriesService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=5,this.tableSizes=[3,6,9,12]}ngOnInit(){this.listenServiceSeries()}listenServiceSeries(t,i,r){this.loadingServiceService.showLoading(),this.seriesService.getBookmarkSeries(t,i).subscribe(s=>{this.listSeries=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenServiceSeries(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a._),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-series-bookmarks"]],decls:5,vars:9,consts:[[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange",4,"ngIf"],[3,"item","isSeries"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,re,2,2,"div",0),e.ALo(2,"paginate"),e.TgZ(3,"div",1),e.YNc(4,le,1,0,"pagination-controls",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,null==i.listSeries?null:i.listSeries.items,e.kEZ(5,ce,i.itemsSize,i.page,null==i.listSeries?null:i.listSeries.totalItems))),e.xp6(3),e.Q6J("ngIf",null==i.listSeries?null:i.listSeries.items.length))},dependencies:[c.sg,c.O5,f.o,m.LS,m._s]}),n})();function ge(n,o){1&n&&(e.TgZ(0,"div",12),e._UZ(1,"app-list-posts-bookmarks"),e.qZA())}function pe(n,o){1&n&&(e.TgZ(0,"div",13),e._UZ(1,"app-list-series-bookmarks"),e.qZA())}function me(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",11),e.qZA()),2&n){const t=o.$implicit,i=o.index,r=e.oxw();e.xp6(1),e.Q6J("item",t)("isTrending",r.isTrending)("number",i)}}const de=[{path:"",component:k,children:[{path:"",redirectTo:"posts",pathMatch:"full"},{path:"posts",component:L},{path:"series",component:M},{path:"followings",component:E},{path:"questions",component:B},{path:"content-creators",component:te},{path:"bookmarks",component:(()=>{class n{constructor(t,i){this.postsService=t,this.seriesService=i,this.isShow=!0}ngOnInit(){}selectType(t){this.isShow="posts"===t.target.value}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(a._))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-my-bookmark"]],decls:18,vars:5,consts:[[1,"bookmark-outer"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-sharp","fa-regular","fa-folder-bookmark"],[1,"ms-1"],[1,"type"],["name","","id","",3,"change"],["value","posts"],["value","series"],["class","mt-3 posts-outer",4,"ngIf"],["class","mt-4",4,"ngIf"],[1,"mt-3","posts-outer"],[1,"mt-4"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"div")(3,"div",1)(4,"div",2)(5,"p",3),e._UZ(6,"i",4),e._uU(7),e.ALo(8,"translate"),e.qZA(),e._UZ(9,"hr",5),e.qZA()(),e.TgZ(10,"div",6)(11,"select",7),e.NdJ("change",function(s){return i.selectType(s)}),e.TgZ(12,"option",8),e._uU(13,"Posts"),e.qZA(),e.TgZ(14,"option",9),e._uU(15,"Series"),e.qZA()()(),e.YNc(16,ge,2,0,"div",10),e.YNc(17,pe,2,0,"div",11),e.qZA()()()),2&t&&(e.xp6(7),e.hij(" ",e.lcZ(8,3,"MY_BOOKMARKS")," "),e.xp6(9),e.Q6J("ngIf",i.isShow),e.xp6(1),e.Q6J("ngIf",!i.isShow))},dependencies:[c.O5,se,ae,g.X$],styles:[".bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex}.bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.bookmark-outer[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{display:flex;align-items:center}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   .label-type[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--black)}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:none;outline:none;background-color:transparent;font-size:1rem;font-weight:400;color:var(--black);cursor:pointer}.bookmark-outer[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--black)}"]}),n})()},{path:"trending",component:(()=>{class n{constructor(t,i){this.postsService=t,this.loadingServiceService=i,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12],this.isTrending=!0}ngOnInit(){this.listenService()}listenService(t=1,i=10,r="desc"){this.loadingServiceService.showLoading(),this.postsService.getPostsTrending().subscribe(s=>{this.listPosts=s,this.loadingServiceService.hideLoading()})}onTableDataChange(t){this.page=t,this.listenService(this.page,this.itemsSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.P),e.Y36(S.H))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-newest-trending"]],decls:13,vars:4,consts:[[1,"newest-outer","mx-2"],[1,"title-group"],[1,"title"],[1,"text-uppercase"],[1,"fa-regular","fa-ranking-star"],[1,"ms-1"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngFor","ngForOf"],[3,"item","isTrending","number"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._UZ(4,"i",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"hr",5),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"i",7)(10,"i",8),e.qZA(),e.TgZ(11,"div",9),e.YNc(12,me,2,3,"div",10),e.qZA()()),2&t&&(e.xp6(5),e.hij(" ",e.lcZ(6,2,"TRENDING_POSTS")," "),e.xp6(7),e.Q6J("ngForOf",i.listPosts))},dependencies:[c.sg,f.o,g.X$],styles:[".title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}"]}),n})()}]}];let _e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(de),h.Bz]}),n})(),he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,_e,h.Bz,O.B,m.JX,p.ot,g.aw]}),n})()},9549:(T,w,l)=>{l.d(w,{c:()=>c});var h=l(4537),O=l(8292);let c=(()=>{class e{constructor(a){this.toastr=a}success(a,u="Successfully"){this.toastr.success(a,u)}error(a,u="Error"){this.toastr.error(a,u)}warning(a,u="Warning"){this.toastr.warning(a,u)}info(a,u="Info"){this.toastr.info(a,u)}}return e.\u0275fac=function(a){return new(a||e)(h.LFG(O._W))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},1283:(T,w,l)=>{l.d(w,{_:()=>S});var h=l(2340),O=l(9413),c=l(7969),e=l(4537),C=l(2389);const a=h.N.apiUrl,u=O.H.series;let S=(()=>{class f{constructor(p){this.apiService=p}getSeries(p,g,d,_){return this.apiService.getNoToken(`${a}/${u.series}?page=${p}&perPage=${g}`+(_?`&username=${_}`:"")).pipe((0,c.U)(Z=>Z.body.data||{}))}getSeriesById(p){return this.apiService.getNoToken(`${a}/${u.series}/${p}`).pipe((0,c.U)(d=>d.body.data||{}))}createSeries(p){return this.apiService.post(`${a}/${u.series}`,p).pipe((0,c.U)(d=>d.body||{}))}updateSeries(p,g){return this.apiService.put(`${a}/${u.series}/${p}`,g).pipe((0,c.U)(_=>_.body||{}))}addPostsToSeries(p,g,d){return this.apiService.patch(`${a}/${u.series}/${p}/update-post`,{postIdsAdd:g,postIdsRemove:d}).pipe((0,c.U)(P=>P.body||{}))}bookmarkSeries(p,g){return this.apiService.post(`${a}/${u.bookmark}`,{seriesId:p,bookmark:g}).pipe((0,c.U)(_=>_.body||{}))}getBookmarkSeries(p,g,d){return this.apiService.get(`${a}/${u.getBookmarks}?page=${p}&perPage=${g}`).pipe((0,c.U)(P=>P.body.data||{}))}deleteSeries(p){return this.apiService.delete(`${a}/${u.series}/${p}`).pipe((0,c.U)(d=>d.body||{}))}}return f.\u0275fac=function(p){return new(p||f)(e.LFG(C.s))},f.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);