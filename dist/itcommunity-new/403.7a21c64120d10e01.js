"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[403],{3403:(Q,g,o)=>{o.r(g),o.d(g,{LayoutModule:()=>H});var s=o(8692),l=o(4032),t=o(4537),m=o(1901),d=o(6956),h=o(3946),v=o(9730),f=o(5934),p=o(6707),u=o(92);let Z=(()=>{class n{constructor(e,i){this.translateService=e,this.localStorageHelperService=i,this.languages=["en","vi"],this.lenguageSelected="en"}ngOnInit(){const e=this.localStorageHelperService.getLanguage();e?(this.translateService.use(e),this.lenguageSelected=e,document.getElementById("language").value=e):this.translateService.use("en"),this.languageChangeSubscription=this.translateService.onLangChange.subscribe(i=>{})}changeLanguage(e){const i=e.target.value;this.lenguageSelected=i,this.localStorageHelperService.saveLanguage(i),this.translateService.use(i)}ngOnDestroy(){this.languageChangeSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.sK),t.Y36(d.w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-language"]],decls:7,vars:1,consts:[[1,"language-selector","d-flex"],["alt","Logo",3,"src"],["id","language",1,"select",3,"change"],["value","en"],["value","vi"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"select",2),t.NdJ("change",function(c){return i.changeLanguage(c)}),t.TgZ(3,"option",3),t._uU(4,"EN"),t.qZA(),t.TgZ(5,"option",4),t._uU(6,"VI"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("src","vi"===i.lenguageSelected?"assets/images/icon-vietnam.png":"assets/images/icon-english.png",t.LSH))},dependencies:[u.YN,u.Kr],styles:[".language-selector[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff;border:1px solid #ccc;border-radius:5px;padding:8px;width:80px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:16px;-webkit-appearance:none;appearance:none;padding-left:8px;outline:none;cursor:pointer;width:80px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}img[_ngcontent-%COMP%]{height:24px;margin-right:8px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:16px;-webkit-appearance:none;appearance:none;padding-left:8px;outline:none;cursor:pointer}select[_ngcontent-%COMP%]::-ms-expand{display:none}select[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}@media (max-width: 500px){.language-selector[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:50px;padding:2px}.language-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:16px;margin-right:0}.language-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:.8rem}}"]}),n})();function x(n,a){1&n&&(t.TgZ(0,"li")(1,"a",26),t._UZ(2,"i",27),t._uU(3," Switch to admin mode "),t.qZA()())}function C(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",11)(1,"span",12),t._UZ(2,"img",13),t.qZA(),t.TgZ(3,"ul",14)(4,"div",15)(5,"div",16),t._UZ(6,"img",17),t.qZA(),t.TgZ(7,"div",18)(8,"p",19),t._uU(9),t.qZA(),t.TgZ(10,"p",20),t._uU(11),t.qZA(),t.TgZ(12,"button",21),t._uU(13,"Edit"),t.qZA()()(),t.TgZ(14,"li")(15,"a",22),t._UZ(16,"i",23),t._uU(17),t.ALo(18,"translate"),t.qZA()(),t.TgZ(19,"li")(20,"a",24),t._UZ(21,"i",25),t._uU(22),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"li")(25,"a",26),t._UZ(26,"i",27),t._uU(27),t.ALo(28,"translate"),t.qZA()(),t.YNc(29,x,4,0,"li",28),t.TgZ(30,"li")(31,"a",29),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.logout())}),t._UZ(32,"i",30),t._uU(33),t.ALo(34,"translate"),t.qZA()()()()}if(2&n){const e=t.oxw(2);t.xp6(2),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(4),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(3),t.Oqu(null==e.user?null:e.user.fullName),t.xp6(2),t.hij("@",null==e.user?null:e.user.username,""),t.xp6(6),t.hij(" ",t.lcZ(18,10,"ACCOUNT")," "),t.xp6(3),t.MGl("routerLink","/profile/",null==e.user?null:e.user.username,"/posts"),t.xp6(2),t.hij(" ",t.lcZ(23,12,"PROFILE")," "),t.xp6(5),t.hij(" ",t.lcZ(28,14,"CHANGE_PASSWORD")," "),t.xp6(2),t.Q6J("ngIf",e.isAdmin()),t.xp6(4),t.hij(" ",t.lcZ(34,16,"LOGOUT")," ")}}function b(n,a){1&n&&(t.TgZ(0,"a",31)(1,"span",32),t._UZ(2,"i",33),t.qZA()())}function O(n,a){if(1&n&&(t.TgZ(0,"div",7),t.YNc(1,C,35,18,"a",8),t.YNc(2,b,3,0,"a",9),t.TgZ(3,"a",10),t._UZ(4,"app-language"),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isLogin),t.xp6(1),t.Q6J("ngIf",!e.isLogin)}}function T(n,a){1&n&&(t.TgZ(0,"button",34),t._UZ(1,"span",35),t.qZA())}function M(n,a){if(1&n&&(t.TgZ(0,"div",65)(1,"a",66)(2,"div",67),t._UZ(3,"img",68),t.qZA(),t.TgZ(4,"div",69)(5,"p",20),t._uU(6),t.qZA()()()()),2&n){const e=a.$implicit;t.xp6(1),t.MGl("href","/posts/",null==e?null:e.id,"",t.LSH),t.xp6(2),t.s9C("src",null==e||null==e.author?null:e.author.avatar,t.LSH),t.xp6(3),t.Oqu(null==e?null:e.name)}}function A(n,a){if(1&n&&(t.TgZ(0,"div",65)(1,"a",70)(2,"div",67),t._UZ(3,"img",68),t.qZA(),t.TgZ(4,"div",69)(5,"p",20),t._uU(6),t.qZA()()()()),2&n){const e=a.$implicit;t.xp6(1),t.MGl("routerLink","/questions/",null==e?null:e.id,""),t.xp6(2),t.s9C("src",null==e||null==e.author?null:e.author.avatar,t.LSH),t.xp6(3),t.Oqu(null==e?null:e.title)}}function P(n,a){if(1&n&&(t.TgZ(0,"div",65)(1,"a",71)(2,"div",72),t._UZ(3,"img",68),t.TgZ(4,"div",69)(5,"p",20),t._uU(6),t.qZA()()()()()),2&n){const e=a.$implicit;t.xp6(1),t.MGl("href","/profile/",null==e?null:e.username,"",t.LSH),t.xp6(2),t.s9C("src",null==e?null:e.avatar,t.LSH),t.xp6(3),t.Oqu(null==e?null:e.fullname)}}function y(n,a){if(1&n&&(t.TgZ(0,"div",57)(1,"div",58)(2,"div",59)(3,"div",60)(4,"p",61),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",62),t.YNc(8,M,7,3,"div",63),t.qZA()(),t.TgZ(9,"div",59)(10,"div",60)(11,"p",64),t._uU(12),t.ALo(13,"translate"),t.qZA()(),t.TgZ(14,"div",62),t.YNc(15,A,7,3,"div",63),t.qZA()(),t.TgZ(16,"div",59)(17,"div",60)(18,"p",64),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"div",62),t.YNc(22,P,7,3,"div",63),t.qZA()()()()),2&n){const e=t.oxw(2);t.xp6(5),t.Oqu(t.lcZ(6,6,"POSTS")),t.xp6(3),t.Q6J("ngForOf",e.posts),t.xp6(4),t.Oqu(t.lcZ(13,8,"QUESTIONS")),t.xp6(3),t.Q6J("ngForOf",e.questions),t.xp6(4),t.Oqu(t.lcZ(20,10,"USER")),t.xp6(3),t.Q6J("ngForOf",e.users)}}function L(n,a){1&n&&(t.TgZ(0,"a",73)(1,"span",32),t._UZ(2,"i",74),t.qZA()())}function U(n,a){1&n&&(t.TgZ(0,"a",73)(1,"span",32),t._UZ(2,"i",75),t.qZA()())}function S(n,a){1&n&&(t.TgZ(0,"a",76)(1,"span",32),t._UZ(2,"i",77),t.qZA()())}function w(n,a){1&n&&(t.TgZ(0,"li")(1,"a",82),t._UZ(2,"i",83),t._uU(3," Switch to admin mode "),t.qZA()())}function _(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",11)(1,"span",78),t._UZ(2,"img",79),t.qZA(),t.TgZ(3,"ul",14)(4,"div",15)(5,"div",16),t._UZ(6,"img",17),t.qZA(),t.TgZ(7,"div",18)(8,"p",19),t._uU(9),t.qZA(),t.TgZ(10,"p",20),t._uU(11),t.qZA(),t.TgZ(12,"button",80)(13,"a",81),t._uU(14,"Edit"),t.qZA()()()(),t.TgZ(15,"li")(16,"a",22),t._UZ(17,"i",23),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"li")(21,"a",24),t._UZ(22,"i",25),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t.YNc(25,w,4,0,"li",28),t.TgZ(26,"li")(27,"a",29),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.logout())}),t._UZ(28,"i",30),t._uU(29),t.ALo(30,"translate"),t.qZA()()()()}if(2&n){const e=t.oxw(2);t.xp6(2),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(4),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(3),t.Oqu(null==e.user?null:e.user.fullName),t.xp6(2),t.hij("@",null==e.user?null:e.user.username,""),t.xp6(7),t.hij(" ",t.lcZ(19,9,"ACCOUNT")," "),t.xp6(3),t.MGl("routerLink","/profile/",null==e.user?null:e.user.username,"/posts"),t.xp6(2),t.hij(" ",t.lcZ(24,11,"PROFILE")," "),t.xp6(2),t.Q6J("ngIf",e.isAdmin()),t.xp6(4),t.hij(" ",t.lcZ(30,13,"LOGOUT")," ")}}function N(n,a){1&n&&(t.TgZ(0,"a",84)(1,"span",32),t._UZ(2,"i",85),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&n&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"LOGIN")," "))}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",36)(1,"ul",37),t._UZ(2,"li",38),t.TgZ(3,"li",39)(4,"a",40),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"li",39)(8,"a",41),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"li",39)(12,"a",42),t._uU(13),t.ALo(14,"translate"),t.qZA()()(),t.TgZ(15,"ul",43)(16,"li",44)(17,"a",45)(18,"div",46)(19,"div",47)(20,"input",48),t.NdJ("keyup",function(r){t.CHM(e);const c=t.oxw();return t.KtG(c.onFilterChange(r))}),t.ALo(21,"translate"),t.qZA(),t.YNc(22,y,23,12,"div",49),t.qZA(),t.TgZ(23,"button",50),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeModal())}),t._UZ(24,"i",51),t.qZA()()()(),t.TgZ(25,"li",52),t.YNc(26,L,3,0,"a",53),t.YNc(27,U,3,0,"a",53),t.YNc(28,S,3,0,"a",54),t.YNc(29,_,31,15,"a",8),t.YNc(30,N,5,3,"a",55),t.qZA(),t.TgZ(31,"li",56)(32,"a",45),t._UZ(33,"app-language"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" ",t.lcZ(6,11,"POSTS")," "),t.xp6(4),t.hij(" ",t.lcZ(10,13,"Q&A")," "),t.xp6(4),t.hij(" ",t.lcZ(14,15,"SERIES")," "),t.xp6(7),t.MGl("placeholder","",t.lcZ(21,17,"SEARCH"),"..."),t.xp6(2),t.Q6J("ngIf",e.isShowSearch),t.xp6(1),t.MGl("routerLink","/search/",e.valueSearch,""),t.xp6(3),t.Q6J("ngIf",e.isLogin),t.xp6(1),t.Q6J("ngIf",e.isLogin),t.xp6(1),t.Q6J("ngIf",e.isLogin),t.xp6(1),t.Q6J("ngIf",e.isLogin),t.xp6(1),t.Q6J("ngIf",!e.isLogin)}}let q=(()=>{class n{constructor(e,i,r,c,k,J){this.authService=e,this.router=i,this.localStorageHelperService=r,this.postsService=c,this.questionAnswerService=k,this.userService=J,this.isLogin=!1,this.isMobile=!1,this.isShowSearch=!1,this.valueSearch=""}ngOnChanges(e){}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.getMe(),this.isMobile=window.innerWidth<768}getMe(){this.user=this.localStorageHelperService.getUser()}logout(){this.authService.logout(),this.router.navigate(["/home/newest/posts"])}closeModal(){this.isShowSearch=!1}onFilterChange(e){const i=e.target.value;this.valueSearch=i,i||""!==i?(this.postsService.getPosts(1,3,void 0,void 0,e.target.value).subscribe(r=>{this.posts=r.items}),this.questionAnswerService.getQuestion(1,3,void 0,void 0,e.target.value).subscribe(r=>{this.questions=r.items}),this.userService.getAllUsers(1,3,void 0,void 0,e.target.value).subscribe(r=>{this.users=r.items}),this.isShowSearch=!0):this.isShowSearch=!1}isAdmin(){return this.localStorageHelperService.getRole()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.e),t.Y36(l.F0),t.Y36(d.w),t.Y36(h.P),t.Y36(v.t),t.Y36(f.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],features:[t.TTD],decls:7,vars:3,consts:[[1,"navbar","navbar-expand-lg","shadow","navbar-light"],[1,"container-lg","p-0"],["href","/home",1,"navbar-brand","ms-2"],["src","assets/images/logo-header-250x250.png","width","50"],["class","d-flex align-items-center",4,"ngIf"],["class","navbar-toggler me-2","type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",4,"ngIf"],["class","collapse navbar-collapse","id","navbarNavDropdown",4,"ngIf"],[1,"d-flex","align-items-center"],["href","","class","dropdown",4,"ngIf"],["class","fw-bold h-100 me-2","routerLink","/auth/login",4,"ngIf"],[1,"text-black","fw-bold","me-2"],["href","",1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"my-auto","h-100","d-flex","align-items-center","me-2"],["width","40",3,"src"],[1,"dropdown-menu","pt-0"],[1,"popover-profile-header","p-3","d-flex"],[1,"popover-profile-header-avatar"],["width","70",3,"src"],[1,"popover-profile-header-text","ms-2"],[1,"name","m-0"],[1,"m-0"],["routerLink","/account",1,"mt-2","btn-main"],["routerLink","/account",1,"dropdown-item"],[1,"fa-solid","fa-user","me-1"],[1,"dropdown-item",3,"routerLink"],[1,"fa-sharp","fa-solid","fa-address-card"],["href","#",1,"dropdown-item"],[1,"fa-solid","fa-unlock","me-1"],[4,"ngIf"],[1,"dropdown-item",3,"click"],[1,"fa-solid","fa-right-from-bracket","me-1"],["routerLink","/auth/login",1,"fw-bold","h-100","me-2"],[1,"my-auto","h-100","d-flex","align-items-center"],[1,"fa-solid","fa-user","login-icon","me-2"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","me-2"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"mx-3","icon-logo","navbar-nav","col-12","col-lg-7","row","text-lg-center","h-100"],[1,"col-1"],[1,"nav-item","active","col-4","col-lg-3","p-0"],["routerLink","/home/newest/posts",1,"nav-link","text-black","fw-bold"],["routerLink","/home/newest/questions",1,"nav-link","text-black","fw-bold"],["routerLink","/home/newest/series",1,"nav-link","text-black"],[1,"mx-3","icon-logo","navbar-nav","col-12","col-lg-5","row"],[1,"nav-item","active","col-7","p-0"],[1,"nav-link","text-black","fw-bold"],[1,"d-flex"],[1,"form-group"],["type","text",1,"form-control","pe-5",3,"placeholder","keyup"],["class","popover-search",4,"ngIf"],[1,"btn","btn-search",3,"routerLink","click"],[1,"fa","fa-search","form-control-icon"],[1,"nav-item","active","col-3","p-0","login-item","d-flex","justify-items-center"],["class","me-3","title","Currently the function is live in development. Sorry for the inconvenience",4,"ngIf"],["routerLink","/posts/create","class","me-3",4,"ngIf"],["class","nav-link fw-bold h-100","routerLink","/auth/login",4,"ngIf"],[1,"nav-item","active","col-1","p-0"],[1,"popover-search"],[1,"popover-search-body"],[1,"popover-search-body-item"],[1,"popover-search-body-item-label","p-2"],[1,"m-0","text-uppercase","title"],[1,"popover-search-body-item-content","p-2"],["class","popover-search-body-item-content-item mt-3",4,"ngFor","ngForOf"],[1,"m-0","title"],[1,"popover-search-body-item-content-item","mt-3"],[1,"popover-search-body-item-content-item-card",3,"href"],[1,"popover-search-body-item-content-item-img"],["width","50",3,"src"],[1,"popover-search-body-item-content-item-text","ms-2"],[1,"popover-search-body-item-content-item-card",3,"routerLink"],[3,"href"],[1,"popover-search-body-item-content-item-card"],["title","Currently the function is live in development. Sorry for the inconvenience",1,"me-3"],[1,"fa-solid","fa-circle-exclamation"],[1,"fa-solid","fa-bell"],["routerLink","/posts/create",1,"me-3"],[1,"fa-sharp","fa-solid","fa-pen-line"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"my-auto","h-100","d-flex","align-items-center"],["width","30",3,"src"],[1,"mt-2","btn-main"],["routerLink","/account"],["routerLink","/admin",1,"dropdown-item"],[1,"fa-sharp","fa-regular","fa-user-secret","me-1"],["routerLink","/auth/login",1,"nav-link","fw-bold","h-100"],[1,"fa-solid","fa-user","me-2"]],template:function(e,i){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.YNc(4,O,5,2,"div",4),t.YNc(5,T,2,0,"button",5),t.YNc(6,I,34,19,"div",6),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngIf",i.isMobile),t.xp6(1),t.Q6J("ngIf",!i.isMobile),t.xp6(1),t.Q6J("ngIf",!i.isMobile))},dependencies:[s.sg,s.O5,l.rH,Z,p.X$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}nav[_ngcontent-%COMP%]{background-color:var(--white)!important}.sticky[_ngcontent-%COMP%]{width:100%;height:55px;position:fixed;top:0;z-index:100}menu[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{background-color:var(--white)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--black);font-weight:700}[_ngcontent-%COMP%]::placeholder{color:var(--main-color)!important;font-weight:700}.btn-search[_ngcontent-%COMP%]{background:var(--main-color)!important;border-radius:0 5px 5px 0!important}.btn-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--white)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid var(--main-color);border-radius:5px 0 0 5px}.form-group[_ngcontent-%COMP%]   .form-control-icon[_ngcontent-%COMP%]{color:var(--main-color)}.fa-cart-arrow-down[_ngcontent-%COMP%]{color:var(--white);font-size:2rem}.dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%]{display:block}.dropdown[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]:active{pointer-events:none}.dropdown-menu[_ngcontent-%COMP%]{width:240px}.dropdown-item[_ngcontent-%COMP%]{padding:.6rem 1rem;font-size:.9rem;color:var(--black)!important;font-weight:400}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:var(--gray-light)!important}.login-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)!important}.jumbotron[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom;margin-right:10px}.center-content[_ngcontent-%COMP%]{margin:auto;padding:0 15px;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap}.center-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:30px;cursor:pointer}.popover-profile-header[_ngcontent-%COMP%]{background-color:var(--gray-light)}.popover-profile-header-text[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400!important;font-size:1rem!important}.popover-profile-header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:700!important;color:var(--main-color)}.btn-main[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:none;border-radius:5px;font-weight:700;font-size:1rem;padding:8px 16px;cursor:pointer;transition:all .3s ease-in-out}.btn-main[_ngcontent-%COMP%]:hover{background-color:var(--blue-itc)}.btn-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white)!important}.popover-search[_ngcontent-%COMP%]{position:absolute;z-index:1000;background-color:var(--white);width:350px;border:1px solid var(--gray-light);transition:all .5s ease-in-out}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]{position:relative}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-label[_ngcontent-%COMP%]{background-color:var(--main-color)}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-label[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--white);font-weight:500;font-size:1rem}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-content[_ngcontent-%COMP%]   .popover-search-body-item-content-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--gray-light);padding:5px;cursor:pointer}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-content[_ngcontent-%COMP%]   .popover-search-body-item-content-item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:var(--main-color)}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-content[_ngcontent-%COMP%]   .popover-search-body-item-content-item[_ngcontent-%COMP%]   .popover-search-body-item-content-item-card[_ngcontent-%COMP%]{display:flex}.popover-search[_ngcontent-%COMP%]   .popover-search-body[_ngcontent-%COMP%]   .popover-search-body-item[_ngcontent-%COMP%]   .popover-search-body-item-content[_ngcontent-%COMP%]   .popover-search-body-item-content-item[_ngcontent-%COMP%]   .popover-search-body-item-content-item-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}@media screen and (max-width: 768px){.dropdown-menu[_ngcontent-%COMP%]{left:-200px}.login-icon[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--main-color)}}"],changeDetection:0}),n})(),E=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:85,vars:30,consts:[[1,"text-center","text-lg-start","bg-light","text-muted","mt-5"],[1,"d-flex","justify-content-center","justify-content-lg-between","p-4","border-bottom"],[1,"me-5","d-none","d-lg-block"],["href","https://www.facebook.com/thaihoc.nguyen.5473/",1,"me-4","text-reset"],[1,"fa-brands","fa-facebook"],["href","#",1,"me-4","text-reset"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-google"],["href","https://www.instagram.com/thaihoc2001/",1,"me-4","text-reset"],[1,"fa-brands","fa-instagram"],["href","https://www.linkedin.com/in/thaihoc2001/",1,"me-4","text-reset"],[1,"fa-brands","fa-linkedin"],["href","https://github.com/thaihoc2001",1,"me-4","text-reset"],[1,"fa-brands","fa-github"],[1,""],[1,"container","text-center","text-md-start","mt-5"],[1,"row","mt-3"],[1,"col-md-3","col-lg-4","col-xl-3","mx-auto","mb-4"],[1,"text-center"],["src","assets/images/logo-full-250x250.png","width","250"],[1,"mt-2","text-center","text-light"],[1,"col-md-4","col-lg-3","col-xl-3","mx-auto","mb-md-0","mb-4"],[1,"text-uppercase","fw-bold","mb-4","text-light"],[1,"text-light"],[1,"fa","fa-home","me-3"],[1,"fa","fa-envelope","me-3"],[1,"fa","fa-phone","me-3"],[1,"fas","fa-headset","me-3"],[1,"col-md-2","col-lg-2","col-xl-3","mx-auto","mb-4"],["routerLink","/home/newest/posts",1,"text-decoration-none","text-light"],["routerLink","/home/newest/questions",1,"text-decoration-none","text-light"],["routerLink","#",1,"text-decoration-none","text-light"],["routerLink","/home/newest/series",1,"text-decoration-none","text-light"],[1,"col-md-5","col-lg-2","col-xl-3","mx-auto","mb-4"],["placeholder","Email address !",1,"form-control","col-4","col-lg-12"],[1,"mt-3"],[1,"btn","btn-danger"],[1,"text-center","p-4","text-light",2,"background-color","rgba(0, 0, 0, 0.05)"],["href","https://thaihocblog.xyz/",1,"text-light","fw-bold"]],template:function(e,i){1&e&&(t.TgZ(0,"footer",0)(1,"section",1)(2,"div",2),t._UZ(3,"span"),t.qZA(),t.TgZ(4,"div")(5,"a",3),t._UZ(6,"i",4),t.qZA(),t.TgZ(7,"a",5),t._UZ(8,"i",6),t.qZA(),t.TgZ(9,"a",5),t._UZ(10,"i",7),t.qZA(),t.TgZ(11,"a",8),t._UZ(12,"i",9),t.qZA(),t.TgZ(13,"a",10),t._UZ(14,"i",11),t.qZA(),t.TgZ(15,"a",12),t._UZ(16,"i",13),t.qZA()()(),t.TgZ(17,"section",14)(18,"div",15)(19,"div",16)(20,"div",17)(21,"div",18),t._UZ(22,"img",19),t.qZA(),t.TgZ(23,"p",20),t._uU(24),t.ALo(25,"translate"),t.qZA()(),t.TgZ(26,"div",21)(27,"h6",22),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"p",23),t._UZ(31,"i",24),t._uU(32," 134 V\xf5 Th\u1ecb S\xe1u - Ph\u01b0\u1eddng V\xf5 Th\u1ecb S\xe1u - Qu\u1eadn 3 - TP HCM"),t.qZA(),t.TgZ(33,"p",23),t._UZ(34,"i",25),t._uU(35," itcommunity.tech@gmail.com "),t.qZA(),t.TgZ(36,"p",23),t._UZ(37,"i",26),t._uU(38," 094.222.1865"),t.qZA(),t.TgZ(39,"p",23),t._UZ(40,"i",27),t._uU(41," 0982.322.789"),t.qZA()(),t.TgZ(42,"div",28)(43,"h6",22),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"p")(47,"a",29),t._uU(48),t.ALo(49,"translate"),t.qZA()(),t.TgZ(50,"p")(51,"a",30),t._uU(52),t.ALo(53,"translate"),t.qZA()(),t.TgZ(54,"p")(55,"a",31),t._uU(56,"Videos"),t.qZA()(),t.TgZ(57,"p")(58,"a",32),t._uU(59,"Series"),t.qZA()(),t.TgZ(60,"p")(61,"a",31),t._uU(62),t.ALo(63,"translate"),t.qZA()(),t.TgZ(64,"p")(65,"a",31),t._uU(66),t.ALo(67,"translate"),t.qZA()()(),t.TgZ(68,"div",33)(69,"h6",22),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.TgZ(72,"p",23),t._uU(73),t.ALo(74,"translate"),t.qZA(),t.TgZ(75,"div"),t._UZ(76,"input",34),t.qZA(),t.TgZ(77,"div",35)(78,"button",36),t._uU(79),t.ALo(80,"translate"),t.qZA()()()()()(),t.TgZ(81,"div",37),t._uU(82," \xa9 2023 Copyright: "),t.TgZ(83,"a",38),t._uU(84,"it-community.tech"),t.qZA()()()),2&e&&(t.xp6(24),t.hij(" ",t.lcZ(25,10,"FOOTER_CONTENT")," "),t.xp6(4),t.hij(" ",t.lcZ(29,12,"FOOTER_CONTACT")," "),t.xp6(16),t.hij(" ",t.lcZ(45,14,"ORGANIZATION")," "),t.xp6(4),t.Oqu(t.lcZ(49,16,"POSTS")),t.xp6(4),t.Oqu(t.lcZ(53,18,"QUESTIONS")),t.xp6(10),t.Oqu(t.lcZ(63,20,"ORGANIZATION")),t.xp6(4),t.Oqu(t.lcZ(67,22,"SYSTEM_STATUS")),t.xp6(4),t.hij(" ",t.lcZ(71,24,"FOOTER_NOTIFYCATION")," "),t.xp6(3),t.hij(" ",t.lcZ(74,26,"REGISTER_EMAIL")," "),t.xp6(6),t.Oqu(t.lcZ(80,28,"REGISTER")))},dependencies:[l.rH,p.X$],styles:["footer[_ngcontent-%COMP%]{background-color:#0b1a33!important}i[_ngcontent-%COMP%]{color:var(--white)}"]}),n})();const F=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:3,vars:0,template:function(e,i){1&e&&t._UZ(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[l.lC,q,E]}),n})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>o.e(105).then(o.bind(o,8105)).then(n=>n.HomeModule)},{path:"posts",loadChildren:()=>Promise.all([o.e(913),o.e(107),o.e(917),o.e(632),o.e(443),o.e(592),o.e(301)]).then(o.bind(o,4301)).then(n=>n.PostsModule)},{path:"profile",loadChildren:()=>Promise.all([o.e(913),o.e(592),o.e(517)]).then(o.bind(o,9517)).then(n=>n.ProfileModule)},{path:"account",loadChildren:()=>Promise.all([o.e(913),o.e(592),o.e(557)]).then(o.bind(o,8557)).then(n=>n.AccountModule)},{path:"series",loadChildren:()=>Promise.all([o.e(913),o.e(107),o.e(917),o.e(315),o.e(377),o.e(5)]).then(o.bind(o,5377)).then(n=>n.SeriesModule)},{path:"questions",loadChildren:()=>Promise.all([o.e(913),o.e(107),o.e(917),o.e(632),o.e(443),o.e(29)]).then(o.bind(o,3029)).then(n=>n.QuestionsModule)},{path:"search",loadChildren:()=>Promise.all([o.e(592),o.e(450)]).then(o.bind(o,8655)).then(n=>n.SearchDetailModule)}]},{path:"**",redirectTo:"error/404"}];let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(F),l.Bz]}),n})();var j=o(9182);let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,Y,j.B]}),n})()}}]);