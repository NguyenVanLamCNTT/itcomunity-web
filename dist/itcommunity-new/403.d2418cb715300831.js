"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[403],{3403:(w,c,a)=>{a.r(c),a.d(c,{LayoutModule:()=>_});var g=a(8692),i=a(4199),t=a(4537),s=a(5099),p=a(6956),u=a(4910);let d=(()=>{class n{constructor(e){this.translateService=e,this.languages=["en","vi"],this.lenguageSelected="vi"}ngOnInit(){this.translateService.use("vi"),this.languageChangeSubscription=this.translateService.onLangChange.subscribe(e=>{console.log("Language has changed:",e.lang)})}changeLanguage(e){console.log("changeLanguage",e);const r=e.target.value;this.lenguageSelected=r,this.translateService.use(r)}ngOnDestroy(){this.languageChangeSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-language"]],decls:7,vars:1,consts:[[1,"language-selector","d-flex"],["alt","Logo",3,"src"],[3,"change"],["value","vi"],["value","en"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"select",2),t.NdJ("change",function(U){return r.changeLanguage(U)}),t.TgZ(3,"option",3),t._uU(4,"VI"),t.qZA(),t.TgZ(5,"option",4),t._uU(6,"EN"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("src","vi"===r.lenguageSelected?"assets/images/icon-vietnam.png":"assets/images/icon-english.png",t.LSH))},styles:[".language-selector[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff;border:1px solid #ccc;border-radius:5px;padding:8px;width:80px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:16px;-webkit-appearance:none;appearance:none;padding-left:8px;outline:none;cursor:pointer;width:80px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}img[_ngcontent-%COMP%]{height:24px;margin-right:8px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:16px;-webkit-appearance:none;appearance:none;padding-left:8px;outline:none;cursor:pointer}select[_ngcontent-%COMP%]::-ms-expand{display:none}select[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}"]}),n})();function m(n,o){1&n&&(t.TgZ(0,"a",25)(1,"span",26),t._UZ(2,"i",27),t.qZA()())}function h(n,o){1&n&&(t.TgZ(0,"a",25)(1,"span",26),t._UZ(2,"i",28),t.qZA()())}function f(n,o){1&n&&(t.TgZ(0,"a",25)(1,"span",26),t._UZ(2,"i",29),t.qZA()())}function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",30)(1,"span",31),t._UZ(2,"img",32),t.qZA(),t.TgZ(3,"ul",33)(4,"div",34)(5,"div",35),t._UZ(6,"img",36),t.qZA(),t.TgZ(7,"div",37)(8,"p",38),t._uU(9),t.qZA(),t.TgZ(10,"p",39),t._uU(11),t.qZA(),t.TgZ(12,"button",40),t._uU(13,"Edit"),t.qZA()()(),t.TgZ(14,"li")(15,"a",41),t._UZ(16,"i",42),t._uU(17),t.ALo(18,"translate"),t.qZA()(),t.TgZ(19,"li")(20,"a",41),t._UZ(21,"i",43),t._uU(22),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"li")(25,"a",44),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.logout())}),t._UZ(26,"i",45),t._uU(27),t.ALo(28,"translate"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(4),t.s9C("src",null==e.user?null:e.user.avatar,t.LSH),t.xp6(3),t.Oqu(null==e.user?null:e.user.fullName),t.xp6(2),t.hij("@",null==e.user?null:e.user.username,""),t.xp6(6),t.hij(" ",t.lcZ(18,7,"PROFILE")," "),t.xp6(5),t.hij(" ",t.lcZ(23,9,"CHANGE_PASSWORD")," "),t.xp6(5),t.hij(" ",t.lcZ(28,11,"LOGOUT")," ")}}function Z(n,o){1&n&&(t.TgZ(0,"a",46)(1,"span",26),t._UZ(2,"i",47),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&n&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"LOGIN")," "))}let x=(()=>{class n{constructor(e,r,l){this.authService=e,this.router=r,this.localStorageHelperService=l,this.isLogin=!1}ngOnInit(){this.isLogin=this.authService.checkLogin(),this.getMe()}getMe(){this.user=this.localStorageHelperService.getUser(),console.log(this.user)}logout(){this.authService.logout(),this.router.navigate(["/home/newest"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.e),t.Y36(i.F0),t.Y36(p.w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],decls:39,vars:17,consts:[[1,"navbar","navbar-expand-lg","navbar-light"],[1,"container-lg","p-0"],["href","/home",1,"navbar-brand","ms-2"],["src","assets/images/logo-header-250x250.png","width","50"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","me-2"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"mx-3","icon-logo","navbar-nav","col-12","col-lg-7","row","text-lg-center","h-100"],[1,"col-1"],[1,"nav-item","active","col-4","col-lg-3","p-0"],["href","#",1,"nav-link","text-black","fw-bold"],["href","#",1,"nav-link","text-black"],[1,"mx-3","icon-logo","navbar-nav","col-12","col-lg-5","row"],[1,"nav-item","active","col-7","p-0"],[1,"nav-link","text-black","fw-bold"],[1,"d-flex"],[1,"form-group"],["type","text",1,"form-control","pe-5",3,"placeholder"],[1,"btn","btn-search"],[1,"fa","fa-search","form-control-icon"],[1,"nav-item","active","col-3","p-0","login-item","d-flex","justify-items-center"],["href","","class","me-3",4,"ngIf"],["href","","class","dropdown",4,"ngIf"],["class","nav-link fw-bold h-100","routerLink","/auth/login",4,"ngIf"],[1,"nav-item","active","col-1","p-0"],["href","",1,"me-3"],[1,"my-auto","h-100","d-flex","align-items-center"],[1,"fa-solid","fa-circle-exclamation"],[1,"fa-solid","fa-bell"],[1,"fa-sharp","fa-solid","fa-pen-line"],["href","",1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"my-auto","h-100","d-flex","align-items-center"],["width","30",3,"src"],[1,"dropdown-menu","pt-0"],[1,"popover-profile-header","p-3","d-flex"],[1,"popover-profile-header-avatar"],["width","70",3,"src"],[1,"popover-profile-header-text","ms-2"],[1,"name","m-0"],[1,"m-0"],[1,"mt-2","btn-main"],["href","#",1,"dropdown-item"],[1,"fa-solid","fa-user","me-1"],[1,"fa-solid","fa-unlock","me-1"],[1,"dropdown-item",3,"click"],[1,"fa-solid","fa-right-from-bracket","me-1"],["routerLink","/auth/login",1,"nav-link","fw-bold","h-100"],[1,"fa-solid","fa-user","me-2"]],template:function(e,r){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"button",4),t._UZ(5,"span",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7),t._UZ(8,"li",8),t.TgZ(9,"li",9)(10,"a",10),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"li",9)(14,"a",10),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"li",9)(18,"a",11),t._uU(19),t.ALo(20,"translate"),t.qZA()()(),t.TgZ(21,"ul",12)(22,"li",13)(23,"a",14)(24,"div",15)(25,"div",16),t._UZ(26,"input",17),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"button",18),t._UZ(29,"i",19),t.qZA()()()(),t.TgZ(30,"li",20),t.YNc(31,m,3,0,"a",21),t.YNc(32,h,3,0,"a",21),t.YNc(33,f,3,0,"a",21),t.YNc(34,v,29,13,"a",22),t.YNc(35,Z,5,3,"a",23),t.qZA(),t.TgZ(36,"li",24)(37,"a",14),t._UZ(38,"app-language"),t.qZA()()()()()()),2&e&&(t.xp6(11),t.hij(" ",t.lcZ(12,9,"POSTS")," "),t.xp6(4),t.hij(" ",t.lcZ(16,11,"Q&A")," "),t.xp6(4),t.hij(" ",t.lcZ(20,13,"DISCUSSIONS")," "),t.xp6(7),t.MGl("placeholder","",t.lcZ(27,15,"SEARCH"),"..."),t.xp6(5),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",!r.isLogin))},dependencies:[g.O5,i.rH,d,u.X$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#000}nav[_ngcontent-%COMP%]{background-color:var(--white)!important}.sticky[_ngcontent-%COMP%]{width:100%;height:55px;position:fixed;top:0;z-index:100}menu[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{background-color:var(--white)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--black);font-weight:700}[_ngcontent-%COMP%]::placeholder{color:var(--main-color)!important;font-weight:700}.btn-search[_ngcontent-%COMP%]{background:var(--main-color)!important;border-radius:0 5px 5px 0!important}.btn-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--white)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid var(--main-color);border-radius:5px 0 0 5px}.form-group[_ngcontent-%COMP%]   .form-control-icon[_ngcontent-%COMP%]{color:var(--main-color)}.fa-cart-arrow-down[_ngcontent-%COMP%]{color:var(--white);font-size:2rem}.dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%]{display:block}.dropdown[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]:active{pointer-events:none}.dropdown-menu[_ngcontent-%COMP%]{width:240px}.dropdown-item[_ngcontent-%COMP%]{padding:.6rem 1rem;font-size:.9rem;color:var(--black)!important;font-weight:400}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:var(--gray-light)!important}.login-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)!important}.jumbotron[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom;margin-right:10px}.center-content[_ngcontent-%COMP%]{margin:auto;padding:0 15px;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap}.center-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:30px;cursor:pointer}.popover-profile-header[_ngcontent-%COMP%]{background-color:var(--gray-light)}.popover-profile-header-text[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400!important;font-size:1rem!important}.popover-profile-header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:700!important;color:var(--main-color)}.btn-main[_ngcontent-%COMP%]{background-color:var(--main-color);color:var(--white);border:none;border-radius:5px;font-weight:700;font-size:1rem;padding:8px 16px;cursor:pointer;transition:all .3s ease-in-out}.btn-main[_ngcontent-%COMP%]:hover{background-color:var(--blue-itc)}"],changeDetection:0}),n})(),C=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:75,vars:0,consts:[[1,"text-center","text-lg-start","bg-light","text-muted","mt-5"],[1,"d-flex","justify-content-center","justify-content-lg-between","p-4","border-bottom"],[1,"me-5","d-none","d-lg-block"],["href","https://www.facebook.com/thaihoc.nguyen.5473/",1,"me-4","text-reset"],[1,"fa-brands","fa-facebook"],["href","",1,"me-4","text-reset"],[1,"fa","fa-twitter"],[1,"fa","fa-google"],["href","https://www.instagram.com/thaihoc2001/",1,"me-4","text-reset"],[1,"fa","fa-instagram"],[1,"fa","fa-linkedin"],["href","https://github.com/thaihoc2001",1,"me-4","text-reset"],[1,"fa","fa-github"],[1,""],[1,"container","text-center","text-md-start","mt-5"],[1,"row","mt-3"],[1,"col-md-3","col-lg-4","col-xl-3","mx-auto","mb-4"],[1,"text-center"],["src","assets/images/logo-full-250x250.png","width","250"],[1,"mt-2","text-center","text-light"],[1,"col-md-4","col-lg-3","col-xl-3","mx-auto","mb-md-0","mb-4"],[1,"text-uppercase","fw-bold","mb-4","text-light"],[1,"text-light"],[1,"fa","fa-home","me-3"],[1,"fa","fa-envelope","me-3"],[1,"fa","fa-phone","me-3"],[1,"fas","fa-headset","me-3"],[1,"col-md-2","col-lg-2","col-xl-3","mx-auto","mb-4"],["routerLink","#",1,"text-decoration-none","text-light"],[1,"col-md-5","col-lg-2","col-xl-3","mx-auto","mb-4"],["placeholder","Email address !",1,"form-control","col-4","col-lg-12"],[1,"mt-3"],[1,"btn","btn-danger"],[1,"text-center","p-4","text-light",2,"background-color","rgba(0, 0, 0, 0.05)"],["href","https://thaihocblog.xyz/",1,"text-light","fw-bold"]],template:function(e,r){1&e&&(t.TgZ(0,"footer",0)(1,"section",1)(2,"div",2),t._UZ(3,"span"),t.qZA(),t.TgZ(4,"div")(5,"a",3),t._UZ(6,"i",4),t.qZA(),t.TgZ(7,"a",5),t._UZ(8,"i",6),t.qZA(),t.TgZ(9,"a",5),t._UZ(10,"i",7),t.qZA(),t.TgZ(11,"a",8),t._UZ(12,"i",9),t.qZA(),t.TgZ(13,"a",5),t._UZ(14,"i",10),t.qZA(),t.TgZ(15,"a",11),t._UZ(16,"i",12),t.qZA()()(),t.TgZ(17,"section",13)(18,"div",14)(19,"div",15)(20,"div",16)(21,"div",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"p",19),t._uU(24," M\u1ed9t trong nh\u1eefng c\u1ed9ng \u0111\u1ed3ng l\u1edbn nh\u1ea5t v\u1ec1 c\xf4ng ngh\u1ec7, chia s\u1ebb ki\u1ebfn th\u1ee9c, kinh nghi\u1ec7m, h\u01b0\u1edbng d\u1eabn, t\u01b0 v\u1ea5n, gi\u1ea3i \u0111\xe1p c\xe1c v\u1ea5n \u0111\u1ec1 li\xean quan \u0111\u1ebfn c\xf4ng ngh\u1ec7. "),t.qZA()(),t.TgZ(25,"div",20)(26,"h6",21),t._uU(27," LI\xcaN H\u1ec6 "),t.qZA(),t.TgZ(28,"p",22),t._UZ(29,"i",23),t._uU(30," 134 V\xf5 Th\u1ecb S\xe1u - Ph\u01b0\u1eddng V\xf5 Th\u1ecb S\xe1u - Qu\u1eadn 3 - TP HCM"),t.qZA(),t.TgZ(31,"p",22),t._UZ(32,"i",24),t._uU(33," itcommunity.tech@gmail.com "),t.qZA(),t.TgZ(34,"p",22),t._UZ(35,"i",25),t._uU(36," 094.222.1865"),t.qZA(),t.TgZ(37,"p",22),t._UZ(38,"i",26),t._uU(39," 0982.322.789"),t.qZA()(),t.TgZ(40,"div",27)(41,"h6",21),t._uU(42," T\xe0i nguy\xean "),t.qZA(),t.TgZ(43,"p")(44,"a",28),t._uU(45,"B\xe0i vi\u1ebft"),t.qZA()(),t.TgZ(46,"p")(47,"a",28),t._uU(48,"C\xe2u h\u1ecfi"),t.qZA()(),t.TgZ(49,"p")(50,"a",28),t._uU(51,"Videos"),t.qZA()(),t.TgZ(52,"p")(53,"a",28),t._uU(54,"Th\u1ea3o lu\u1eadn"),t.qZA()(),t.TgZ(55,"p")(56,"a",28),t._uU(57,"T\u1ed5 ch\u1ee9c"),t.qZA()(),t.TgZ(58,"p")(59,"a",28),t._uU(60,"Tr\u1ea1ng th\xe1i h\u1ec7 th\u1ed1ng"),t.qZA()()(),t.TgZ(61,"div",29)(62,"h6",21),t._uU(63," NH\u1eacN TH\xd4NG B\xc1O "),t.qZA(),t.TgZ(64,"p",22),t._uU(65," \u0110\u0103ng K\xfd Nh\u1eadn B\xe0i Vi\u1ebft M\u1edbi Nh\u1ea5t Th\xf4ng Qua Email "),t.qZA(),t.TgZ(66,"div"),t._UZ(67,"input",30),t.qZA(),t.TgZ(68,"div",31)(69,"button",32),t._uU(70,"\u0110\u0102NG K\xdd"),t.qZA()()()()()(),t.TgZ(71,"div",33),t._uU(72," \xa9 2023 Copyright: "),t.TgZ(73,"a",34),t._uU(74,"it-community.tech"),t.qZA()()())},dependencies:[i.rH],styles:["footer[_ngcontent-%COMP%]{background-color:#0b1a33!important}i[_ngcontent-%COMP%]{color:var(--white)}"]}),n})();const b=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:3,vars:0,template:function(e,r){1&e&&t._UZ(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[i.lC,x,C]}),n})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>Promise.all([a.e(592),a.e(105)]).then(a.bind(a,8105)).then(n=>n.HomeModule)},{path:"posts",loadChildren:()=>Promise.all([a.e(592),a.e(152)]).then(a.bind(a,2152)).then(n=>n.PostsModule)}]},{path:"**",redirectTo:"error/404"}];let T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(b),i.Bz]}),n})();var A=a(9182);let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,T,A.B]}),n})()}}]);