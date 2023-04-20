"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[5],{3946:(M,m,i)=>{i.d(m,{P:()=>u});var t=i(2340),b=i(9413),_=i(5732),c=i(7969),P=i(4537),d=i(2389);const a=t.N.apiUrl,l=b.H.posts;let u=(()=>{class p{constructor(n){this.apiService=n}createPosts(n){return this.apiService.post(`${a}/${l.posts}`,n).pipe((0,c.U)(s=>s.body||{}))}getPosts(n,o,s,r){const g=`${a}/${l.posts}?page=${n}&perPage=${o}`+(r?`&username=${r}`:""),v=new _.LE;return n&&v.set("page",n.toString()),o&&v.set("perPage",o.toString()),this.apiService.getNoToken(g).pipe((0,c.U)(O=>O.body.data||{}))}getPostsByUserFollow(n,o,s,r){return this.apiService.get(`${a}/${l.postsByUserFollow}?page=${n}&perPage=${o}`+(r?`&username=${r}`:"")).pipe((0,c.U)(v=>v.body.data||{}))}getPostsBySeries(n){return this.apiService.getNoToken(`${a}/${l.postsBySeries}/${n}`).pipe((0,c.U)(s=>s.body.data||{}))}getPostsById(n){return this.apiService.getNoToken(`${a}/${l.posts}/${n}`).pipe((0,c.U)(s=>s.body.data||{}))}updatePosts(n,o){return this.apiService.put(`${a}/${l.posts}/${n}`,o).pipe((0,c.U)(r=>r.body||{}))}deletePosts(n){return this.apiService.delete(`${a}/${l.posts}/${n}`).pipe((0,c.U)(s=>s.body||{}))}updateView(n){return this.apiService.patch(`${a}/${l.view}`,{postId:n}).pipe((0,c.U)(s=>s.body||{}))}bookmarkPosts(n,o){return this.apiService.post(`${a}/${l.bookmark}`,{postId:n,bookmark:o}).pipe((0,c.U)(r=>r.body||{}))}getPostsByBookmark(n,o,s){return this.apiService.get(`${a}/${l.getBookmarks}?page=${n}&perPage=${o}`).pipe((0,c.U)(g=>g.body.data||{}))}}return p.\u0275fac=function(n){return new(n||p)(P.LFG(d.s))},p.\u0275prov=P.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},9730:(M,m,i)=>{i.d(m,{t:()=>l});var t=i(2340),b=i(9413),_=i(7969),c=i(4537),P=i(2389);const d=t.N.apiUrl,a=b.H.qa;let l=(()=>{class u{constructor(e){this.apiService=e}createQuestion(e){return this.apiService.post(`${d}/${a.question}`,e).pipe((0,_.U)(o=>o.body||{}))}getQuestion(e,n,o,s){return this.apiService.getNoToken(`${d}/${a.question}?page=${e}&perPage=${n}`+(s?`&username=${s}`:"")).pipe((0,_.U)(g=>g.body.data||{}))}createAnswer(e){return this.apiService.post(`${d}/${a.answer}`,e).pipe((0,_.U)(o=>o.body||{}))}getAnswer(e,n,o,s,r){return this.apiService.getNoToken(`${d}/${a.question}/${e}/answer?page=${n}&perPage=${o}`+(r?`&username=${r}`:"")).pipe((0,_.U)(v=>v.body.data||{}))}getQuestionsById(e){return this.apiService.getNoToken(`${d}/${a.question}/${e}`).pipe((0,_.U)(o=>o.body.data||{}))}updateQuestion(e,n){return this.apiService.put(`${d}/${a.question}/${e}`,n).pipe((0,_.U)(s=>s.body||{}))}updateAnswer(e,n){return this.apiService.put(`${d}/${a.answer}/${e}`,n).pipe((0,_.U)(s=>s.body||{}))}approvedAnswer(e,n){return this.apiService.patch(`${d}/${a.answer}/${e}`,{approved:n}).pipe((0,_.U)(s=>s.body||{}))}}return u.\u0275fac=function(e){return new(e||u)(c.LFG(P.s))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2005:(M,m,i)=>{i.d(m,{n:()=>l});var t=i(4537),b=i(9730),_=i(3946),c=i(8692),P=i(5518);function d(u,p){if(1&u&&(t.TgZ(0,"div",6)(1,"a",7)(2,"h5",8),t._uU(3),t.qZA()(),t.TgZ(4,"div",9)(5,"div",10),t._UZ(6,"i",11),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",10),t._UZ(10,"i",12),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"div",10),t._UZ(14,"i",13),t.TgZ(15,"span"),t._uU(16),t.qZA()()(),t.TgZ(17,"div")(18,"a",14)(19,"span"),t._uU(20),t.qZA()()()()),2&u){const e=p.$implicit;t.xp6(1),t.MGl("href","/questions/",null==e?null:e.id,"",t.LSH),t.xp6(2),t.hij(" ",e.title," "),t.xp6(5),t.Oqu(null==e?null:e.viewNumber),t.xp6(4),t.Oqu(null==e?null:e.bookMarkNumber),t.xp6(4),t.Oqu(null==e?null:e.answerNumber),t.xp6(2),t.MGl("routerLink","/profile/",null==e||null==e.author?null:e.author.username,"/posts"),t.xp6(2),t.hij(" ",null==e||null==e.author?null:e.author.fullname," ")}}function a(u,p){if(1&u&&(t.TgZ(0,"div",6)(1,"a",7)(2,"h5",8),t._uU(3),t.qZA()(),t.TgZ(4,"div",9)(5,"div",10),t._UZ(6,"i",11),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",10),t._UZ(10,"i",12),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"div",10),t._UZ(14,"i",13),t.TgZ(15,"span"),t._uU(16),t.qZA()()(),t.TgZ(17,"div")(18,"a",14)(19,"span"),t._uU(20),t.qZA()()()()),2&u){const e=p.$implicit;t.xp6(1),t.MGl("href","/posts/",null==e?null:e.id,"",t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(5),t.Oqu(null==e?null:e.viewNumber),t.xp6(4),t.Oqu(null==e?null:e.bookMarkNumber),t.xp6(4),t.Oqu(null==e?null:e.commentNumber),t.xp6(2),t.MGl("routerLink","/profile/",null==e||null==e.author?null:e.author.username,"/posts"),t.xp6(2),t.hij(" ",null==e||null==e.author?null:e.author.fullName," ")}}let l=(()=>{class u{constructor(e,n){this.questionAnswerService=e,this.postsService=n}ngOnInit(){this.listenService()}listenService(){this.questionAnswerService.getQuestion(1,5).subscribe(e=>{this.questions=e.items}),this.postsService.getPosts(1,5).subscribe(e=>{this.listPosts=e.items})}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(b.t),t.Y36(_.P))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-sidebar-ask"]],decls:14,vars:2,consts:[[1,"sidebar-ask-outer","mx-4"],[1,"d-flex"],[1,"title-sidebar","text-uppercase"],[1,"title-line","ms-2"],["class","ask-item mt-3",4,"ngFor","ngForOf"],[1,"sidebar-ask-outer","mx-4","mt-5"],[1,"ask-item","mt-3"],[3,"href"],[1,"title-ask"],[1,"group-icon","d-flex"],[1,"icon"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-share"],[1,"fa-solid","fa-comment"],[1,"name-user",3,"routerLink"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"Newest questions"),t.qZA(),t._UZ(4,"hr",3),t.qZA(),t.TgZ(5,"div"),t.YNc(6,d,21,7,"div",4),t.qZA()(),t.TgZ(7,"div",5)(8,"div",1)(9,"h5",2),t._uU(10,"Newest Posts"),t.qZA(),t._UZ(11,"hr",3),t.qZA(),t.TgZ(12,"div"),t.YNc(13,a,21,7,"div",4),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngForOf",n.questions),t.xp6(7),t.Q6J("ngForOf",n.listPosts))},dependencies:[c.sg,P.rH],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--main-color);margin-bottom:10px}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%]{color:var(--gray-text);flex-grow:1}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid var(--gray-light)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--black);margin-bottom:5px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]:hover{color:var(--main-color)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:15px;aspect-ratio:3/2}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]:hover{color:var(--main-color)}"]}),u})()}}]);