"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[105],{8105:(A,c,n)=>{n.r(c),n.d(c,{HomeModule:()=>C});var r=n(9182),l=n(8692),a=n(5518),t=n(4537),d=n(1901),u=n(4910);function m(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"li",6),t.NdJ("click",function(){t.CHM(o);const M=t.oxw().$implicit,Z=t.oxw();return t.KtG(Z.selectItem(M))}),t.TgZ(1,"div",7)(2,"a",8)(3,"span",9),t._uU(4),t.ALo(5,"translate"),t.qZA()()()()}if(2&e){const o=t.oxw().$implicit;t.xp6(2),t.ekj("active",o.isActive),t.s9C("routerLink",o.link),t.xp6(2),t.hij(" ",t.lcZ(5,4,o.name)," ")}}function g(e,i){if(1&e&&(t.ynx(0),t.YNc(1,m,6,6,"li",5),t.BQk()),2&e){const o=i.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isShow||s.isLogin)}}function h(e,i){1&e&&(t.TgZ(0,"li",10)(1,"div",7)(2,"a",11),t._UZ(3,"i",12),t.TgZ(4,"span",13),t._uU(5),t.ALo(6,"translate"),t.qZA()()()()),2&e&&(t.xp6(5),t.hij(" ",t.lcZ(6,1,"POSTS")," "))}let p=(()=>{class e{constructor(o){this.authService=o,this.isLogin=!1,this.dataMenu=[{id:1,name:"CONTENT_CREATOR",link:"/content-creator",isShow:!0,isActive:!1},{id:2,name:"NEWEST",link:"/home/newest/posts",isShow:!0,isActive:!0},{id:3,name:"FOLLOWINGS",link:"/home/newest/followings",isShow:!1,isActive:!1},{id:4,name:"QUESTIONS",link:"/home/newest/followings",isShow:!0,isActive:!1},{id:5,name:"SERIES",link:"/home/newest/series",isShow:!0,isActive:!1},{id:6,name:"TRENDING",link:"/trending",isShow:!0,isActive:!1},{id:7,name:"MY_BOOKMARKS",link:"/saved",isShow:!1,isActive:!1}]}ngOnInit(){this.isLogin=this.authService.checkLogin()}selectItem(o){this.dataMenu.forEach(s=>{s.isActive=s.id==o.id})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu"]],decls:6,vars:2,consts:[[1,"menu"],[1,"container"],[1,"list-item","d-flex","justify-content-between","m-0","align-item-center","list-unstyled","justify-content-center"],[4,"ngFor","ngForOf"],["class","text-decoration-none d-flex justify-center align-items-center",4,"ngIf"],["class","p-3 text-decoration-none text-center",3,"click",4,"ngIf"],[1,"p-3","text-decoration-none","text-center",3,"click"],[1,"text-center"],[1,"text-decoration-none",3,"routerLink"],[1,"fw-normal","text-white","text-xs"],[1,"text-decoration-none","d-flex","justify-center","align-items-center"],["routerLink","/posts/create",1,"btn","btn-primary","text-decoration-none"],[1,"fa-sharp","fa-regular","fa-pen-to-square","text-white"],[1,"fw-bold","text-white"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2),t.YNc(3,g,2,1,"ng-container",3),t.ynx(4),t.YNc(5,h,7,3,"li",4),t.BQk(),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",s.dataMenu),t.xp6(2),t.Q6J("ngIf",s.isLogin))},dependencies:[l.sg,l.O5,a.rH,u.X$],styles:[".menu[_ngcontent-%COMP%]{background:var(--black-blue)}@media screen and (min-width: 768px){.list-item[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:1}.list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{padding-bottom:5px;border-bottom:2px solid var(--white)}}.active[_ngcontent-%COMP%]{padding-bottom:5px;border-bottom:2px solid var(--white)}@media screen and (max-width: 768px){.list-item[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:200px}}"]}),e})();var v=n(2005);const f=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:30,vars:0,consts:[["id","carouselAdvertisingPage",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselAdvertisingPage","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselAdvertisingPage","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselAdvertisingPage","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/images/1.png","height","400px","alt","image-cover-1",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/images/2.png","height","400px","alt","mage-cover-2",1,"d-block","w-100"],["src","assets/images/3.png","height","400px","alt","mage-cover-3",1,"d-block","w-100"],["type","button","data-bs-target","#carouselAdvertisingPage","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselAdvertisingPage","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"slider-text","text-center"],[1,"container","d-flex","mt-5"],[1,"left-content-home","w-75"],[1,"left-content-home","w-25"]],template:function(o,s){1&o&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1),t._UZ(3,"button",2)(4,"button",3)(5,"button",4),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t._UZ(8,"img",7),t.qZA(),t.TgZ(9,"div",8),t._UZ(10,"img",9),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"button",11),t._UZ(14,"span",12),t.TgZ(15,"span",13),t._uU(16,"Previous"),t.qZA()(),t.TgZ(17,"button",14),t._UZ(18,"span",15),t.TgZ(19,"span",13),t._uU(20,"Next"),t.qZA()()()(),t._UZ(21,"app-menu"),t.TgZ(22,"div",16)(23,"span"),t._uU(24," Tham gia group ITCommunity \u0111\u1ec3 c\xf9ng nhau h\u1ecdc t\u1eadp v\xe0 k\u1ebft n\u1ed1i ! "),t.qZA()(),t.TgZ(25,"div",17)(26,"div",18),t._UZ(27,"router-outlet"),t.qZA(),t.TgZ(28,"div",19),t._UZ(29,"app-sidebar-ask"),t.qZA()())},dependencies:[a.lC,p,v.n],styles:[".slider-text[_ngcontent-%COMP%]{width:100%;height:60px;background:linear-gradient(89.99deg,#247EDB 8.39%,#FD4E2D 99.99%)}.slider-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white);font-size:1.2rem;font-weight:500;padding:10px;line-height:60px}.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}"]}),e})(),children:[{path:"",redirectTo:"newest",pathMatch:"full"},{path:"content-creator",loadChildren:()=>n.e(990).then(n.bind(n,3990)).then(e=>e.ContentCreatorModule)},{path:"newest",loadChildren:()=>n.e(534).then(n.bind(n,534)).then(e=>e.NewestModule)},{path:"trending",loadChildren:()=>n.e(70).then(n.bind(n,2070)).then(e=>e.TrendingModule)},{path:"editors-choise",loadChildren:()=>n.e(463).then(n.bind(n,6983)).then(e=>e.EditorsChoiseModule)},{path:"series",loadChildren:()=>Promise.all([n.e(331),n.e(407),n.e(748)]).then(n.bind(n,748)).then(e=>e.SeriesModule)}]}];let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(f),a.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,x,r.B]}),e})()}}]);