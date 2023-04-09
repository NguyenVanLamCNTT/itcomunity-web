"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[809],{1809:(b,C,s)=>{s.r(C),s.d(C,{ProfileModule:()=>$});var t=s(4910),P=s(9182),v=s(8692),e=s(4537),O=s(1283),f=s(5518),m=s(5251),l=s(5568);function _(i,u){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",5),e.qZA()),2&i){const o=u.$implicit;e.xp6(1),e.Q6J("item",o)("isSeries",!0)}}const n=function(i,u,o){return{itemsPerPage:i,currentPage:u,totalItems:o}};let g=(()=>{class i{constructor(o,r){this.seriesService=o,this.activatedRoute=r,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.username=o.username}),this.listenService()}listenService(o=1,r=10,x="desc"){this.seriesService.getSeries(o,r,x,this.username).subscribe(Z=>{this.listSeries=Z})}onTableDataChange(o){this.page=o,this.listenService(this.page,this.itemsSize)}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(O._),e.Y36(f.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-series"]],decls:6,vars:8,consts:[[1,"mx-2"],[1,"mt-2"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[3,"item","isSeries"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,_,2,2,"div",2),e.ALo(3,"paginate"),e.TgZ(4,"div",3)(5,"pagination-controls",4),e.NdJ("pageChange",function(Z){return r.onTableDataChange(Z)}),e.qZA()()()()),2&o&&(e.xp6(2),e.Q6J("ngForOf",e.xi3(3,1,null==r.listSeries?null:r.listSeries.items,e.kEZ(4,n,r.itemsSize,r.page,null==r.listSeries?null:r.listSeries.totalItems))))},dependencies:[v.sg,m.o,l.LS,l._s]}),i})();var a=s(3946);function c(i,u){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"app-card-item",8),e.qZA()),2&i){const o=u.$implicit;e.xp6(1),e.Q6J("item",o)}}const p=function(i,u,o){return{itemsPerPage:i,currentPage:u,totalItems:o}};let d=(()=>{class i{constructor(o,r){this.activatedRoute=o,this.postsService=r,this.page=1,this.count=0,this.itemsSize=10,this.tableSizes=[3,6,9,12]}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.username=o.username}),this.listenService()}listenService(o=1,r=10,x="desc"){this.postsService.getPosts(o,r,x,this.username).subscribe(Z=>{this.listPosts=Z})}onTableDataChange(o){this.page=o,this.listenService(this.page,this.itemsSize)}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(f.gz),e.Y36(a.P))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-posts"]],decls:9,vars:8,consts:[[1,"newest-outer","mx-2"],[1,"option-list-icon-group","d-flex","justify-content-end","w-100"],[1,"fa-solid","fa-list"],[1,"fa-regular","fa-newspaper","ms-3"],[1,"mt-3"],[4,"ngFor","ngForOf"],[1,"mt-3","d-flex","justify-content-end"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[3,"item"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2)(3,"i",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,c,2,1,"div",5),e.ALo(6,"paginate"),e.TgZ(7,"div",6)(8,"pagination-controls",7),e.NdJ("pageChange",function(Z){return r.onTableDataChange(Z)}),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("ngForOf",e.xi3(6,1,null==r.listPosts?null:r.listPosts.items,e.kEZ(4,p,r.itemsSize,r.page,null==r.listPosts?null:r.listPosts.totalItems))))},dependencies:[v.sg,m.o,l.LS,l._s]}),i})();var h=s(6956),M=s(5934);let y=(()=>{class i{constructor(o,r){this.localStorageHelperService=o,this.userService=r}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(h.w),e.Y36(M.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-info"]],decls:0,vars:0,template:function(o,r){}}),i})(),T=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile-sidebar"]],decls:47,vars:0,consts:[[1,""],[1,"btn-coppy-link","w-100"],[1,"fa-solid","fa-code"],[1,"summary-info","mt-4"],[1,"p-3"],[1,"d-flex","justify-content-between"],[1,"key"],[1,"value"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",0)(2,"button",1),e._UZ(3,"i",2),e._uU(4," Copy link profile "),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"p",6),e._uU(9,"Total posts view"),e.qZA(),e.TgZ(10,"p",7),e._uU(11,"0"),e.qZA()(),e.TgZ(12,"div",5)(13,"p",6),e._uU(14,"Following Tags"),e.qZA(),e.TgZ(15,"p",7),e._uU(16,"0"),e.qZA()(),e.TgZ(17,"div",5)(18,"p",6),e._uU(19,"Following Users"),e.qZA(),e.TgZ(20,"p",7),e._uU(21,"0"),e.qZA()(),e.TgZ(22,"div",5)(23,"p",6),e._uU(24,"Followers"),e.qZA(),e.TgZ(25,"p",7),e._uU(26,"0"),e.qZA()(),e.TgZ(27,"div",5)(28,"p",6),e._uU(29,"Total Posts"),e.qZA(),e.TgZ(30,"p",7),e._uU(31,"0"),e.qZA()(),e.TgZ(32,"div",5)(33,"p",6),e._uU(34,"Bookmark"),e.qZA(),e.TgZ(35,"p",7),e._uU(36,"0"),e.qZA()(),e.TgZ(37,"div",5)(38,"p",6),e._uU(39,"Total Series"),e.qZA(),e.TgZ(40,"p",7),e._uU(41,"0"),e.qZA()(),e.TgZ(42,"div",5)(43,"p",6),e._uU(44,"Total Questions"),e.qZA(),e.TgZ(45,"p",7),e._uU(46,"0"),e.qZA()()()()())},styles:[".btn-coppy-link[_ngcontent-%COMP%]{background-color:var(--white);border:2px solid var(--main-color);color:var(--main-color);font-weight:400;font-size:1.2rem;padding:8px 10px}.btn-coppy-link[_ngcontent-%COMP%]:hover{background-color:var(--blue-itc);color:var(--white)}.summary-info[_ngcontent-%COMP%]{border:1px solid var(--gray-light)}.summary-info[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400;font-size:1rem}.summary-info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--main-color);font-weight:500;font-size:1rem}"]}),i})();const U=[{path:"",component:(()=>{class i{constructor(o,r){this.userService=o,this.router=r}ngOnInit(){this.listenService()}listenService(){this.username=this.router.url.split("/")[2],this.userService.getByUsername(this.username).subscribe(o=>{this.user=o})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(M.K),e.Y36(f.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile"]],decls:38,vars:6,consts:[[1,"profile-outer"],[1,"profile-header","container"],[1,"p-3","d-flex","align-items-center"],[1,"profile-header-avatar"],["width","140",3,"src"],[1,"profile-header-text","ms-4"],[1,"name"],[1,"username","m-0"],[1,"about","mt-3"],[1,"menu","d-flex"],[1,"container"],[1,"d-flex","justify-content-start","align-items-center","h-100"],[1,"h-100","px-5"],[1,"my-auto",3,"routerLink"],["href","",1,"my-auto"],[1,"container","d-flex","mt-4"],[1,"w-100","w-lg-75"],[1,"w-25","d-none","d-lg-block","mx-2"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"p",6),e._uU(7),e.qZA(),e.TgZ(8,"p",7),e._uU(9),e.qZA(),e.TgZ(10,"p",8),e._uU(11),e.qZA()()()(),e.TgZ(12,"menu",9)(13,"div",10)(14,"ul",11)(15,"li",12)(16,"a",13),e._uU(17,"Posts"),e.qZA()(),e.TgZ(18,"li",12)(19,"a",13),e._uU(20,"Series"),e.qZA()(),e.TgZ(21,"li",12)(22,"a",14),e._uU(23,"Question"),e.qZA()(),e.TgZ(24,"li",12)(25,"a",14),e._uU(26,"Followings"),e.qZA()(),e.TgZ(27,"li",12)(28,"a",14),e._uU(29,"Followers"),e.qZA()(),e.TgZ(30,"li",12)(31,"a",14),e._uU(32,"Contact"),e.qZA()()()()(),e.TgZ(33,"div",15)(34,"div",16),e._UZ(35,"router-outlet"),e.qZA(),e.TgZ(36,"div",17),e._UZ(37,"app-profile-sidebar"),e.qZA()()()),2&o&&(e.xp6(4),e.s9C("src",null==r.user?null:r.user.avatar,e.LSH),e.xp6(3),e.Oqu(null==r.user?null:r.user.fullName),e.xp6(2),e.hij("@",null==r.user?null:r.user.username,""),e.xp6(2),e.hij(' "',null==r.user?null:r.user.about,'" '),e.xp6(5),e.MGl("routerLink","/profile/",null==r.user?null:r.user.username,"/posts"),e.xp6(3),e.MGl("routerLink","/profile/",null==r.user?null:r.user.username,"/series"))},dependencies:[f.lC,f.rH,T],styles:[".profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]{color:var(--gray-text);font-weight:400!important;font-size:1.2rem!important}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:500!important;color:var(--main-color);font-size:1.5rem}.profile-header[_ngcontent-%COMP%]   .profile-header-text[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{font-size:.9rem;margin-top:10px;font-weight:400;font-style:italic}.menu[_ngcontent-%COMP%]{height:50px;background-color:var(--main-color);border-top:1px solid var(--gray-light);box-shadow:#64646f33 0 7px 29px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--white);font-weight:400;font-size:1rem;line-height:50px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--white)}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:var(--main-color)}"]}),i})(),children:[{path:"",redirectTo:":username/posts",pathMatch:"full"},{path:":username",component:y},{path:":username/posts",component:d},{path:":username/series",component:g}]}];let S=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(U),f.Bz]}),i})();var A=s(92),w=s(9638),E=s(3331);let $=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[v.ez,S,P.B,t.aw,A.UX,w.ot,E.Ps,l.JX]}),i})()},3946:(b,C,s)=>{s.d(C,{P:()=>_});var t=s(2340),P=s(9413),v=s(5732),e=s(7969),O=s(4537),f=s(2389);const m=t.N.apiUrl,l=P.H.posts;let _=(()=>{class n{constructor(a){this.apiService=a}createPosts(a){return this.apiService.post(`${m}/${l.posts}`,a).pipe((0,e.U)(p=>p.body||{}))}getPosts(a,c,p,d){const h=`${m}/${l.posts}?page=${a}&perPage=${c}`+(d?`&username=${d}`:""),M=new v.LE;return a&&M.set("page",a.toString()),c&&M.set("perPage",c.toString()),this.apiService.get(h).pipe((0,e.U)(y=>y.body.data||{}))}getPostsByUserFollow(a,c,p,d){return this.apiService.get(`${m}/${l.postsByUserFollow}?page=${a}&perPage=${c}`+(d?`&username=${d}`:"")).pipe((0,e.U)(M=>M.body.data||{}))}getPostsBySeries(a){return this.apiService.get(`${m}/${l.postsBySeries}/${a}`).pipe((0,e.U)(p=>p.body.data||{}))}getPostsById(a){return this.apiService.get(`${m}/${l.posts}/${a}`).pipe((0,e.U)(p=>p.body.data||{}))}updatePosts(a,c){return this.apiService.put(`${m}/${l.posts}/${a}`,c).pipe((0,e.U)(d=>d.body||{}))}deletePosts(a){return this.apiService.delete(`${m}/${l.posts}/${a}`).pipe((0,e.U)(p=>p.body||{}))}updateView(a){return this.apiService.patch(`${m}/${l.view}`,{postId:a}).pipe((0,e.U)(p=>p.body||{}))}}return n.\u0275fac=function(a){return new(a||n)(O.LFG(f.s))},n.\u0275prov=O.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1283:(b,C,s)=>{s.d(C,{_:()=>l});var t=s(2340),P=s(9413),v=s(7969),e=s(4537),O=s(2389);const f=t.N.apiUrl,m=P.H.series;let l=(()=>{class _{constructor(g){this.apiService=g}getSeries(g,a,c,p){return this.apiService.get(`${f}/${m.series}?page=${g}&perPage=${a}`+(p?`&username=${p}`:"")).pipe((0,v.U)(h=>h.body.data||{}))}getSeriesById(g){return this.apiService.get(`${f}/${m.series}/${g}`).pipe((0,v.U)(c=>c.body.data||{}))}createSeries(g){return this.apiService.post(`${f}/${m.series}`,g).pipe((0,v.U)(c=>c.body||{}))}updateSeries(g,a){return this.apiService.put(`${f}/${m.series}/${g}`,a).pipe((0,v.U)(p=>p.body||{}))}addPostsToSeries(g,a,c){return this.apiService.patch(`${f}/${m.series}/${g}/update-post`,{postIdsAdd:a,postIdsRemove:c}).pipe((0,v.U)(d=>d.body||{}))}}return _.\u0275fac=function(g){return new(g||_)(e.LFG(O.s))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},5251:(b,C,s)=>{s.d(C,{o:()=>m});var t=s(4537),P=s(8692),v=s(5518);function e(l,_){if(1&l&&(t.TgZ(0,"div",29)(1,"a",30)(2,"span"),t._uU(3),t.qZA()()()),2&l){const n=_.$implicit;t.xp6(3),t.Oqu(n)}}function O(l,_){if(1&l&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),t._UZ(4,"img",6),t.qZA(),t.TgZ(5,"div",7)(6,"div",8)(7,"div",9)(8,"a",10)(9,"span"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",11)(12,"span",12),t._uU(13),t.ALo(14,"date"),t.qZA()(),t.TgZ(15,"span",13),t._uU(16,"-"),t.qZA(),t.TgZ(17,"div",14)(18,"span",12),t._uU(19,"3 ph\xfat \u0111\u1ecdc"),t.qZA()(),t.TgZ(20,"div",15),t._UZ(21,"i",16),t.qZA()(),t.TgZ(22,"div",17)(23,"div",18)(24,"a",10),t._uU(25),t.qZA()()(),t.TgZ(26,"div",19),t.YNc(27,e,4,1,"div",20),t.qZA(),t.TgZ(28,"div",21)(29,"div",22),t._UZ(30,"i",23),t.TgZ(31,"span"),t._uU(32),t.qZA()(),t.TgZ(33,"div",24),t._UZ(34,"i",25),t.TgZ(35,"span"),t._uU(36),t.qZA()(),t.TgZ(37,"div",24),t._UZ(38,"i",26),t.TgZ(39,"span"),t._uU(40),t.qZA()()()()(),t.TgZ(41,"div",4)(42,"div",27),t._UZ(43,"i",28),t.qZA()()()()),2&l){const n=t.oxw();t.xp6(3),t.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),t.xp6(1),t.s9C("src",null==n.item||null==n.item.author?null:n.item.author.avatar,t.LSH),t.s9C("alt",null==n.item||null==n.item.author?null:n.item.author.avatar),t.xp6(4),t.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),t.xp6(2),t.Oqu(null==n.item||null==n.item.author?null:n.item.author.fullName),t.xp6(3),t.Oqu(t.xi3(14,13,null==n.item?null:n.item.created,"medium")),t.xp6(11),t.hYB("routerLink","/",n.isSeries?"series":"posts","/",null==n.item?null:n.item.id,""),t.xp6(1),t.Oqu(null==n.item?null:n.item.name),t.xp6(2),t.Q6J("ngForOf",null==n.item?null:n.item.keywords),t.xp6(5),t.Oqu(null==n.item?null:n.item.viewNumber),t.xp6(4),t.Oqu(null==n.item?null:n.item.commentNumber),t.xp6(4),t.Oqu(null==n.item?null:n.item.bookMarkNumber)}}function f(l,_){if(1&l&&(t.TgZ(0,"div")(1,"div",31)(2,"div",17)(3,"div",32)(4,"a",33),t._uU(5),t.qZA()()(),t.TgZ(6,"div",9)(7,"a",10)(8,"span"),t._uU(9),t.qZA()()(),t.TgZ(10,"div",34)(11,"span"),t._uU(12," 1 min read "),t.qZA()(),t.TgZ(13,"div",21)(14,"div",22),t._UZ(15,"i",23),t.TgZ(16,"span"),t._uU(17),t.qZA()(),t.TgZ(18,"div",24),t._UZ(19,"i",25),t.TgZ(20,"span"),t._uU(21),t.qZA()(),t.TgZ(22,"div",24),t._UZ(23,"i",26),t.TgZ(24,"span"),t._uU(25),t.qZA()()()()()),2&l){const n=t.oxw();t.xp6(4),t.MGl("href","/posts/",null==n.item?null:n.item.id,"",t.LSH),t.xp6(1),t.Oqu(null==n.item?null:n.item.name),t.xp6(2),t.MGl("routerLink","/profile/",null==n.item||null==n.item.author?null:n.item.author.username,"/posts"),t.xp6(2),t.Oqu(null==n.item||null==n.item.author?null:n.item.author.fullName),t.xp6(8),t.Oqu(null==n.item?null:n.item.viewNumber),t.xp6(4),t.Oqu(null==n.item?null:n.item.commentNumber),t.xp6(4),t.Oqu(null==n.item?null:n.item.bookMarkNumber)}}let m=(()=>{class l{constructor(){}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-card-item"]],inputs:{item:"item",isSeries:"isSeries",isRelated:"isRelated"},decls:2,vars:2,consts:[["class","group-card-item mt-2",4,"ngIf"],[4,"ngIf"],[1,"group-card-item","mt-2"],[1,"d-flex","justify-content-between"],[1,"d-flex"],[1,"avatar-image",3,"routerLink"],[3,"src","alt"],[1,"flex-grow-1","ms-3"],[1,"d-flex","group-content-user","align-items-start"],[1,"name","mt-1"],[3,"routerLink"],[1,"date-ago","ms-0","ms-md-2"],[1,"my-auto"],[1,"mx-3","line"],[1,"time-readding"],[1,"link-icon","ms-2"],[1,"fa-solid","fa-link-simple"],[1,"group-content-title","mt-1"],[1,"title"],[1,"tag-group"],["class","tag-name me-1",4,"ngFor","ngForOf"],[1,"group-icon-action","d-flex","mt-1"],[1,"icon-item","m-0"],[1,"fa-solid","fa-eye"],[1,"icon-item"],[1,"fa-solid","fa-bookmark"],[1,"fa-solid","fa-comment"],[1,"icon"],[1,"fa-sharp","fa-solid","fa-thumbtack"],[1,"tag-name","me-1"],["href","#"],[1,"box-card-related"],[1,"title","text-two-line"],[3,"href"],[1,"time-read"]],template:function(n,g){1&n&&(t.YNc(0,O,44,16,"div",0),t.YNc(1,f,26,7,"div",1)),2&n&&(t.Q6J("ngIf",!g.isRelated),t.xp6(1),t.Q6J("ngIf",g.isRelated))},dependencies:[P.sg,P.O5,v.rH,P.uU],styles:[".group-card-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--gray-light);padding-bottom:15px}.group-card-item[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%}.group-card-item[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--main-color)}.group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .date-ago[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .time-readding[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .group-card-item[_ngcontent-%COMP%]   .group-content-user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text);font-weight:300;margin-top:3px}.group-card-item[_ngcontent-%COMP%]   .group-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400;color:var(--black)}.group-card-item[_ngcontent-%COMP%]   .group-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main-color)}.group-card-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--main-color);transform:rotate(35deg)}.group-card-item[_ngcontent-%COMP%]   .tag-name-trending[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;padding:3px 10px;border-radius:5px;background:var(--main-color);margin-top:10px;width:-moz-fit-content;width:fit-content}.group-card-item[_ngcontent-%COMP%]   .tag-name-trending[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white)}.group-card-item[_ngcontent-%COMP%]   .tag-name[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;padding:3px 10px;border-radius:5px;background:#f4f4f5;margin-top:10px;width:-moz-fit-content;width:fit-content;border:1px solid #e9e9eb}.group-card-item[_ngcontent-%COMP%]   .tag-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gray-text)}.group-card-item[_ngcontent-%COMP%]   .group-icon-action[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text);margin-left:15px;aspect-ratio:3/2}.group-card-item[_ngcontent-%COMP%]   .group-icon-action[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}a[_ngcontent-%COMP%]{text-decoration:none}.box-card-related[_ngcontent-%COMP%]{padding:25px;border:1px solid var(--gray-light);border-radius:5px;background:var(--white);box-shadow:0 0 5px #0000001a;width:320px;height:170px;margin:0 10px;flex:1}.box-card-related[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--black);margin-bottom:10px}.box-card-related[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--main-color)}.box-card-related[_ngcontent-%COMP%]   .time-read[_ngcontent-%COMP%]{font-size:.8rem;font-weight:300;color:var(--gray-text)}.box-card-related[_ngcontent-%COMP%]   .group-card-item[_ngcontent-%COMP%]{margin-bottom:15px}.text-one-line[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-two-line[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.comment-outer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--black);margin-bottom:10px}.tag-group[_ngcontent-%COMP%]{display:flex}@media screen and (max-width: 768px){.tag-group[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap}}@media screen and (max-width: 500px){.group-content-user[_ngcontent-%COMP%]{display:block!important}.time-readding[_ngcontent-%COMP%], .link-icon[_ngcontent-%COMP%], .line[_ngcontent-%COMP%]{display:none}}"]}),l})()}}]);