"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[450],{8655:(x,p,a)=>{a.r(p),a.d(p,{SearchDetailModule:()=>k});var e=a(8692),m=a(4032),c=a(92),t=a(4537),v=a(3946),f=a(9730),h=a(5934),C=a(8349),s=a(5251),g=a(901),n=a(6707);function _(o,r){1&o&&(t.TgZ(0,"div",1)(1,"p",13),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"NO_RESULT")))}function O(o,r){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-card-item",14),t.qZA()),2&o){const i=r.$implicit;t.xp6(1),t.Q6J("item",i)}}function M(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,_,4,3,"div",11),t.YNc(2,O,2,1,"div",12),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",0===i.listPosts.length),t.xp6(1),t.Q6J("ngForOf",i.listPosts)}}function P(o,r){1&o&&(t.TgZ(0,"div",1)(1,"p",13),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"NO_RESULT")))}function Z(o,r){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-question-card",15),t.qZA()),2&o){const i=r.$implicit;t.xp6(1),t.Q6J("question",i)}}function T(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,P,4,3,"div",11),t.YNc(2,Z,2,1,"div",12),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",0===i.listQuestions.length),t.xp6(1),t.Q6J("ngForOf",i.listQuestions)}}function b(o,r){1&o&&(t.TgZ(0,"div",1)(1,"p",13),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"NO_RESULT")))}function w(o,r){1&o&&(t.TgZ(0,"button",34),t._UZ(1,"i",35),t._uU(2," Follow "),t.qZA())}function A(o,r){1&o&&(t.TgZ(0,"button",36),t._UZ(1,"i",37),t._uU(2," Following "),t.qZA())}function S(o,r){if(1&o&&(t.TgZ(0,"div",18)(1,"div",19)(2,"div",20),t._UZ(3,"img",21),t.qZA(),t.TgZ(4,"div",22)(5,"p",23),t._uU(6),t.qZA(),t.TgZ(7,"p",24),t._uU(8),t.qZA(),t.YNc(9,w,3,0,"button",25),t.YNc(10,A,3,0,"button",26),t.qZA()(),t.TgZ(11,"div",27)(12,"div",28),t._UZ(13,"i",29),t.TgZ(14,"span",30),t._uU(15),t.qZA()(),t.TgZ(16,"div",28),t._UZ(17,"i",31),t.TgZ(18,"span",30),t._uU(19),t.qZA()(),t.TgZ(20,"div",28),t._UZ(21,"i",32),t.TgZ(22,"span",30),t._uU(23),t.qZA()(),t.TgZ(24,"div",28),t._UZ(25,"i",33),t.TgZ(26,"span",30),t._uU(27),t.qZA()()()()),2&o){const i=r.$implicit;t.xp6(2),t.MGl("routerLink","/profile/",null==i?null:i.username,"/posts"),t.xp6(1),t.s9C("src",null==i?null:i.avatar,t.LSH),t.xp6(2),t.MGl("routerLink","/profile/",null==i?null:i.username,"/posts"),t.xp6(1),t.hij(" ",null==i?null:i.fullname," "),t.xp6(1),t.MGl("routerLink","/profile/",null==i?null:i.username,"/posts"),t.xp6(1),t.hij(" @",null==i?null:i.username," "),t.xp6(1),t.Q6J("ngIf",!(null!=i&&i.isFollowing)),t.xp6(1),t.Q6J("ngIf",null==i?null:i.isFollowing),t.xp6(5),t.Oqu(null==i?null:i.postsNumber),t.xp6(4),t.Oqu(null==i?null:i.followersNumber),t.xp6(4),t.Oqu(null==i?null:i.questionsNumber),t.xp6(4),t.Oqu(null==i?null:i.seriesNumber)}}function U(o,r){if(1&o&&(t.TgZ(0,"div")(1,"div",16),t.YNc(2,b,4,3,"div",11),t.YNc(3,S,28,12,"div",17),t.qZA()()),2&o){const i=t.oxw();t.xp6(2),t.Q6J("ngIf",0===i.listUsers.length),t.xp6(1),t.Q6J("ngForOf",i.listUsers)}}const q=[{path:":search",component:(()=>{class o{constructor(i,l,u,d,N){this.activatedRoute=i,this.postsService=l,this.questionAnswerService=u,this.userService=d,this.loadingServiceService=N,this.isPosts=!0,this.isQuestions=!1,this.isAuthor=!1,this.searchValue="",this.searchForm=this.initForm()}ngOnInit(){this.activatedRoute.params.subscribe(i=>{this.searchValue=i.search,this.searchForm.get("search")?.setValue(this.searchValue),this.listenSearch()}),this.setActiveMenu("posts")}initForm(){return new c.cw({search:new c.NI("")})}setActiveMenu(i){const l=document.getElementById("posts"),u=document.getElementById("questions"),d=document.getElementById("author");switch(i){case"posts":default:l?.classList.add("active"),u?.classList.remove("active"),d?.classList.remove("active"),this.isPosts=!0,this.isQuestions=!1,this.isAuthor=!1;break;case"questions":u?.classList.add("active"),l?.classList.remove("active"),d?.classList.remove("active"),this.isPosts=!1,this.isQuestions=!0,this.isAuthor=!1;break;case"author":d?.classList.add("active"),l?.classList.remove("active"),u?.classList.remove("active"),this.isPosts=!1,this.isQuestions=!1,this.isAuthor=!0}}onFilterChange(i){this.searchValue=i.target.value}submitSearch(){this.listenSearch()}listenSearch(){this.loadingServiceService.showLoading(),this.postsService.getPosts(1,30,void 0,void 0,this.searchValue).subscribe(i=>{this.loadingServiceService.hideLoading(),this.listPosts=i.items}),this.questionAnswerService.getQuestion(1,30,void 0,void 0,this.searchValue).subscribe(i=>{this.loadingServiceService.hideLoading(),this.listQuestions=i.items}),this.userService.getAllUsers(1,30,void 0,void 0,this.searchValue).subscribe(i=>{this.loadingServiceService.hideLoading(),this.listUsers=i.items})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(m.gz),t.Y36(v.P),t.Y36(f.t),t.Y36(h.K),t.Y36(C.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-search-detail"]],decls:24,vars:19,consts:[[1,"container-fluid","container-lg"],[1,"mt-5"],[1,"w-100","d-flex","justify-content-between","align-items-center",3,"formGroup"],["type","text","formControlName","search",1,"form-control","me-3",3,"placeholder","keydown"],[1,"btn","btn-primary","btn-search",3,"click"],[1,"menu","d-flex","align-items-center","mt-3"],[1,"menu-item","me-3",3,"click"],["id","posts"],["id","questions"],["id","author"],[4,"ngIf"],["class","mt-5",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-center","text-secondary"],[3,"item"],[3,"question"],[1,"user-list"],["class","user-card mt-4",4,"ngFor","ngForOf"],[1,"user-card","mt-4"],[1,"d-flex"],[1,"user-avatar",3,"routerLink"],["alt","",3,"src"],[1,"ms-2"],[1,"user-name","m-0",3,"routerLink"],[1,"user-username","m-0",3,"routerLink"],["class","btn-follow mt-1",4,"ngIf"],["class","btn-following",4,"ngIf"],[1,"list-icon"],[1,"icon-item"],[1,"fa-regular","fa-file-pen"],[1,"ms-1"],[1,"fa-regular","fa-users"],[1,"fa-solid","fa-messages-question"],[1,"fa-solid","fa-list"],[1,"btn-follow","mt-1"],[1,"fa-solid","fa-plus"],[1,"btn-following"],[1,"fa-solid","fa-check"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"input",3),t.NdJ("keydown",function(d){return l.onFilterChange(d)}),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return l.submitSearch()}),t._uU(6),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6),t.NdJ("click",function(){return l.setActiveMenu("posts")}),t.TgZ(10,"p",7),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",6),t.NdJ("click",function(){return l.setActiveMenu("questions")}),t.TgZ(14,"p",8),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"div",6),t.NdJ("click",function(){return l.setActiveMenu("author")}),t.TgZ(18,"p",9),t._uU(19),t.ALo(20,"translate"),t.qZA()()(),t.YNc(21,M,3,2,"div",10),t.YNc(22,T,3,2,"div",10),t.YNc(23,U,4,2,"div",10),t.qZA()),2&i&&(t.xp6(2),t.Q6J("formGroup",l.searchForm),t.xp6(1),t.MGl("placeholder","",t.lcZ(4,9,"SEARCH"),"..."),t.xp6(3),t.Oqu(t.lcZ(7,11,"SEARCH")),t.xp6(5),t.Oqu(t.lcZ(12,13,"POSTS")),t.xp6(4),t.Oqu(t.lcZ(16,15,"QUESTIONS")),t.xp6(4),t.Oqu(t.lcZ(20,17,"AUTHOR")),t.xp6(2),t.Q6J("ngIf",l.isPosts),t.xp6(1),t.Q6J("ngIf",l.isQuestions),t.xp6(1),t.Q6J("ngIf",l.isAuthor))},dependencies:[e.sg,e.O5,m.rH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,s.o,g.n,n.X$],styles:[".menu[_ngcontent-%COMP%]{border-bottom:1px solid var(--gray-light)}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{padding:10px 0}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;color:var(--gray-text);margin-bottom:0;cursor:pointer}.menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{color:var(--main-color)}.active[_ngcontent-%COMP%]{color:var(--main-color)!important}.title[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--gray-text);margin-right:10px}.title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{flex:1}.user-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:32%;border:1px solid #e9e9eb;padding:10px;margin:5px;border-radius:5px}.user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;margin-right:10px;cursor:pointer}.user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--black);margin-bottom:10px;cursor:pointer}.user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]:hover{color:var(--main-color)}.user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .user-username[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;color:var(--gray-text);margin-bottom:10px;cursor:pointer}.btn-follow[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-follow[_ngcontent-%COMP%]:hover{background-color:var(--white);color:var(--main-color)}.btn-following[_ngcontent-%COMP%]{background-color:var(--white);color:var(--main-color);border:1px solid var(--main-color);border-radius:5px;padding:2px 7px;font-size:.7rem;font-weight:500;cursor:pointer}.btn-following[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:var(--white)}.list-icon[_ngcontent-%COMP%]{display:inline-flex;justify-content:start;width:100%;padding-top:10px}.list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{margin-right:25px}.list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.list-icon[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;margin-left:5px;color:var(--gray-text)}.btn-search[_ngcontent-%COMP%]{width:150px}@media screen and (max-width: 768px){.topic-outer[_ngcontent-%COMP%]   .card-topic-group[_ngcontent-%COMP%]   .card-topic[_ngcontent-%COMP%], .user-outer[_ngcontent-%COMP%]   .user-list[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:100%!important}}"]}),o})()}];let L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(q),m.Bz]}),o})();var y=a(9182);let k=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,L,c.UX,n.aw,y.B]}),o})()},5251:(x,p,a)=>{a.d(p,{o:()=>C});var e=a(4537),m=a(8692),c=a(4032);function t(s,g){if(1&s&&(e.TgZ(0,"div",29),e._UZ(1,"img",30),e.qZA()),2&s){const n=e.oxw(2);e.xp6(1),e.s9C("src",n.getUrl(n.number),e.LSH)}}function v(s,g){if(1&s&&(e.TgZ(0,"div",31)(1,"a",32)(2,"span"),e._uU(3),e.qZA()()()),2&s){const n=g.$implicit;e.xp6(3),e.Oqu(n)}}function f(s,g){if(1&s&&(e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,t,2,1,"div",4),e.TgZ(3,"div",5)(4,"div",6),e._UZ(5,"img",7),e.qZA(),e.TgZ(6,"div",8)(7,"div",9)(8,"div",10)(9,"a",11)(10,"span"),e._uU(11),e.qZA()()(),e.TgZ(12,"div",12)(13,"span",13),e._uU(14),e.ALo(15,"date"),e.qZA()(),e.TgZ(16,"span",14),e._uU(17,"-"),e.qZA(),e.TgZ(18,"div",15)(19,"span",13),e._uU(20,"10 min read"),e.qZA()(),e.TgZ(21,"div",16),e._UZ(22,"i",17),e.qZA()(),e.TgZ(23,"div",18)(24,"div",19)(25,"a",11),e._uU(26),e.qZA()()(),e.TgZ(27,"div",20),e.YNc(28,v,4,1,"div",21),e.qZA(),e.TgZ(29,"div",22)(30,"div",23),e._UZ(31,"i",24),e.TgZ(32,"span"),e._uU(33),e.qZA()(),e.TgZ(34,"div",25),e._UZ(35,"i",26),e.TgZ(36,"span"),e._uU(37),e.qZA()(),e.TgZ(38,"div",25),e._UZ(39,"i",27),e.TgZ(40,"span"),e._uU(41),e.qZA()()()()(),e.TgZ(42,"div",5),e._UZ(43,"div",28),e.qZA()()()),2&s){const n=e.oxw();e.ekj("top-one",0===n.number&&n.isTrending)("top-two",1===n.number&&n.isTrending)("top-three",2===n.number&&n.isTrending),e.xp6(2),e.Q6J("ngIf",n.isTrending),e.xp6(2),e.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),e.xp6(1),e.s9C("src",null==n.item||null==n.item.author?null:n.item.author.avatar,e.LSH),e.s9C("alt",null==n.item||null==n.item.author?null:n.item.author.avatar),e.xp6(4),e.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),e.xp6(2),e.Oqu(null==n.item||null==n.item.author?null:n.item.author.fullName),e.xp6(3),e.Oqu(e.xi3(15,20,null==n.item?null:n.item.created,"medium")),e.xp6(11),e.hYB("routerLink","/",n.isSeries?"series":"posts","/",null==n.item?null:n.item.id,""),e.xp6(1),e.Oqu(null==n.item?null:n.item.name),e.xp6(2),e.Q6J("ngForOf",null==n.item?null:n.item.keywords),e.xp6(5),e.Oqu(null==n.item?null:n.item.viewNumber),e.xp6(4),e.Oqu(null==n.item?null:n.item.commentNumber),e.xp6(4),e.Oqu(null==n.item?null:n.item.bookMarkNumber)}}function h(s,g){if(1&s&&(e.TgZ(0,"div")(1,"div",33)(2,"div",18)(3,"div",34)(4,"a",35),e._uU(5),e.qZA()()(),e.TgZ(6,"div",10)(7,"a",11)(8,"span"),e._uU(9),e.qZA()()(),e.TgZ(10,"div",36)(11,"span"),e._uU(12," 1 min read "),e.qZA()(),e.TgZ(13,"div",22)(14,"div",23),e._UZ(15,"i",24),e.TgZ(16,"span"),e._uU(17),e.qZA()(),e.TgZ(18,"div",25),e._UZ(19,"i",27),e.TgZ(20,"span"),e._uU(21),e.qZA()(),e.TgZ(22,"div",25),e._UZ(23,"i",26),e.TgZ(24,"span"),e._uU(25),e.qZA()()()()()),2&s){const n=e.oxw();e.xp6(4),e.MGl("href","/posts/",null==n.item?null:n.item.id,"",e.LSH),e.xp6(1),e.Oqu(null==n.item?null:n.item.name),e.xp6(2),e.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),e.xp6(2),e.Oqu(null==n.item||null==n.item.author?null:n.item.author.fullName),e.xp6(8),e.Oqu(null==n.item?null:n.item.viewNumber),e.xp6(4),e.Oqu(null==n.item?null:n.item.commentNumber),e.xp6(4),e.Oqu(null==n.item?null:n.item.bookMarkNumber)}}let C=(()=>{class s{constructor(){}ngOnChanges(n){this.getUrl(this.number)}getUrl(n){return 0==n?"../../../../assets/images/top-one.png":1==n?"../../../../assets/images/top-two.png":2==n?"../../../../assets/images/top-three.png":""}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-card-item"]],inputs:{item:"item",isSeries:"isSeries",isRelated:"isRelated",isTrending:"isTrending",number:"number"},features:[e.TTD],decls:2,vars:2,consts:[["class","group-card-item mt-2 p-1",3,"top-one","top-two","top-three",4,"ngIf"],[4,"ngIf"],[1,"group-card-item","mt-2","p-1"],[1,"d-flex","justify-content-between"],["class","treding",4,"ngIf"],[1,"d-flex"],[1,"avatar-image",3,"routerLink"],[3,"src","alt"],[1,"group-title","flex-grow-1","ms-3"],[1,"d-flex","group-content-user","align-items-start"],[1,"name","mt-1"],[3,"routerLink"],[1,"date-ago","ms-0","ms-md-2"],[1,"my-auto"],[1,"mx-3","line"],[1,"time-readding"],[1,"link-icon","ms-2"],[1,"fa-solid","fa-link-simple"],[1,"group-content-title","mt-1"],[1,"title"],[1,"tag-group"],["class","tag-name me-1",4,"ngFor","ngForOf"],[1,"group-icon-action","d-flex","mt-1"],[1,"icon-item","m-0"],[1,"fa-solid","fa-eye"],[1,"icon-item"],[1,"fa-solid","fa-comment"],[1,"fa-solid","fa-bookmark"],[1,"icon"],[1,"treding"],["alt","","width","40",3,"src"],[1,"tag-name","me-1"],["href","#"],[1,"box-card-related"],[1,"title","text-two-line"],[3,"href"],[1,"time-read"]],template:function(n,_){1&n&&(e.YNc(0,f,44,23,"div",0),e.YNc(1,h,26,7,"div",1)),2&n&&(e.Q6J("ngIf",!_.isRelated),e.xp6(1),e.Q6J("ngIf",_.isRelated))},dependencies:[m.sg,m.O5,c.rH,m.uU],styles:[".group-card-item[_ngcontent-%COMP%]{position:relative;border-bottom:1px solid var(--gray-light);padding-bottom:15px}.group-card-item[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%}.group-card-item[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--main-color)}.group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .date-ago[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .time-readding[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text);font-weight:300;margin-top:3px}.group-card-item[_ngcontent-%COMP%]   .group-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;color:var(--black)}.group-card-item[_ngcontent-%COMP%]   .group-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main-color)}.group-card-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--main-color);transform:rotate(35deg)}.group-card-item[_ngcontent-%COMP%]   .tag-name-trending[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;padding:3px 10px;border-radius:5px;background:var(--main-color);margin-top:10px;width:-moz-fit-content;width:fit-content}.group-card-item[_ngcontent-%COMP%]   .tag-name-trending[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white)}.group-card-item[_ngcontent-%COMP%]   .tag-name[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;padding:3px 10px;border-radius:5px;background:#f4f4f5;margin-top:10px;width:-moz-fit-content;width:fit-content;border:1px solid #e9e9eb}.group-card-item[_ngcontent-%COMP%]   .tag-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gray-text)}.group-card-item[_ngcontent-%COMP%]   .group-icon-action[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text);margin-left:15px;aspect-ratio:3/2}.group-card-item[_ngcontent-%COMP%]   .group-icon-action[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}a[_ngcontent-%COMP%]{text-decoration:none}.box-card-related[_ngcontent-%COMP%]{padding:25px;border:1px solid var(--gray-light);border-radius:5px;background:var(--white);box-shadow:0 0 5px #0000001a;width:320px;height:170px;margin:0 10px;flex:1}.box-card-related[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--black);margin-bottom:10px}.box-card-related[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--main-color)}.box-card-related[_ngcontent-%COMP%]   .time-read[_ngcontent-%COMP%]{font-size:.8rem;font-weight:300;color:var(--gray-text)}.box-card-related[_ngcontent-%COMP%]   .group-card-item[_ngcontent-%COMP%]{margin-bottom:15px}.text-one-line[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-two-line[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.comment-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--black);margin-bottom:10px}.tag-group[_ngcontent-%COMP%]{display:flex}@media screen and (max-width: 768px){.tag-group[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap}}@media screen and (max-width: 500px){.group-content-user[_ngcontent-%COMP%]{display:block!important}.time-readding[_ngcontent-%COMP%], .link-icon[_ngcontent-%COMP%], .line[_ngcontent-%COMP%]{display:none}.group-title[_ngcontent-%COMP%]{width:70%}}.treding[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px}"]}),s})()}}]);