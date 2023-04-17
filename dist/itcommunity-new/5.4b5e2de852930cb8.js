"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[5],{3946:(y,b,u)=>{u.d(b,{P:()=>_});var t=u(2340),m=u(9413),l=u(5732),p=u(7969),P=u(4537),d=u(2389);const c=t.N.apiUrl,i=m.H.posts;let _=(()=>{class e{constructor(n){this.apiService=n}createPosts(n){return this.apiService.post(`${c}/${i.posts}`,n).pipe((0,p.U)(s=>s.body||{}))}getPosts(n,o,s,a){const g=`${c}/${i.posts}?page=${n}&perPage=${o}`+(a?`&username=${a}`:""),v=new l.LE;return n&&v.set("page",n.toString()),o&&v.set("perPage",o.toString()),this.apiService.get(g).pipe((0,p.U)(O=>O.body.data||{}))}getPostsByUserFollow(n,o,s,a){return this.apiService.get(`${c}/${i.postsByUserFollow}?page=${n}&perPage=${o}`+(a?`&username=${a}`:"")).pipe((0,p.U)(v=>v.body.data||{}))}getPostsBySeries(n){return this.apiService.get(`${c}/${i.postsBySeries}/${n}`).pipe((0,p.U)(s=>s.body.data||{}))}getPostsById(n){return this.apiService.get(`${c}/${i.posts}/${n}`).pipe((0,p.U)(s=>s.body.data||{}))}updatePosts(n,o){return this.apiService.put(`${c}/${i.posts}/${n}`,o).pipe((0,p.U)(a=>a.body||{}))}deletePosts(n){return this.apiService.delete(`${c}/${i.posts}/${n}`).pipe((0,p.U)(s=>s.body||{}))}updateView(n){return this.apiService.patch(`${c}/${i.view}`,{postId:n}).pipe((0,p.U)(s=>s.body||{}))}bookmarkPosts(n,o){return this.apiService.post(`${c}/${i.bookmark}`,{postsId:n,bookmark:o}).pipe((0,p.U)(a=>a.body||{}))}getPostsByBookmark(n,o,s){return this.apiService.get(`${c}/${i.getBookmarks}?page=${n}&perPage=${o}`).pipe((0,p.U)(g=>g.body.data||{}))}}return e.\u0275fac=function(n){return new(n||e)(P.LFG(d.s))},e.\u0275prov=P.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9730:(y,b,u)=>{u.d(b,{t:()=>i});var t=u(2340),m=u(9413),l=u(7969),p=u(4537),P=u(2389);const d=t.N.apiUrl,c=m.H.qa;let i=(()=>{class _{constructor(r){this.apiService=r}createQuestion(r){return this.apiService.post(`${d}/${c.question}`,r).pipe((0,l.U)(o=>o.body||{}))}getQuestion(r,n,o,s){return this.apiService.get(`${d}/${c.question}?page=${r}&perPage=${n}`+(s?`&username=${s}`:"")).pipe((0,l.U)(g=>g.body.data||{}))}createAnswer(r){return this.apiService.post(`${d}/${c.answer}`,r).pipe((0,l.U)(o=>o.body||{}))}getAnswer(r,n,o,s,a){return this.apiService.get(`${d}/${c.question}/${r}/answer?page=${n}&perPage=${o}`+(a?`&username=${a}`:"")).pipe((0,l.U)(v=>v.body.data||{}))}getQuestionsById(r){return this.apiService.get(`${d}/${c.question}/${r}`).pipe((0,l.U)(o=>o.body.data||{}))}updateQuestion(r,n){return this.apiService.put(`${d}/${c.question}/${r}`,n).pipe((0,l.U)(s=>s.body||{}))}updateAnswer(r,n){return this.apiService.put(`${d}/${c.answer}/${r}`,n).pipe((0,l.U)(s=>s.body||{}))}approvedAnswer(r,n){return this.apiService.patch(`${d}/${c.answer}/${r}`,{approved:n}).pipe((0,l.U)(s=>s.body||{}))}}return _.\u0275fac=function(r){return new(r||_)(p.LFG(P.s))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},2005:(y,b,u)=>{u.d(b,{n:()=>c});var t=u(4537),m=u(9730),l=u(3946),p=u(8692);function P(i,_){if(1&i&&(t.TgZ(0,"div",6)(1,"a",7)(2,"h5",8),t._uU(3),t.qZA()(),t.TgZ(4,"div",9)(5,"div",10),t._UZ(6,"i",11),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",10),t._UZ(10,"i",12),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"div",10),t._UZ(14,"i",13),t.TgZ(15,"span"),t._uU(16),t.qZA()()(),t.TgZ(17,"div")(18,"a",14)(19,"span"),t._uU(20),t.qZA()()()()),2&i){const e=_.$implicit;t.xp6(1),t.MGl("href","/questions/",null==e?null:e.id,"",t.LSH),t.xp6(2),t.hij(" ",e.title," "),t.xp6(5),t.Oqu(null==e?null:e.viewNumber),t.xp6(4),t.Oqu(null==e?null:e.bookMarkNumber),t.xp6(4),t.Oqu(null==e?null:e.answerNumber),t.xp6(4),t.hij(" ",null==e||null==e.author?null:e.author.fullname," ")}}function d(i,_){if(1&i&&(t.TgZ(0,"div",6)(1,"a",7)(2,"h5",8),t._uU(3),t.qZA()(),t.TgZ(4,"div",9)(5,"div",10),t._UZ(6,"i",11),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",10),t._UZ(10,"i",12),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"div",10),t._UZ(14,"i",13),t.TgZ(15,"span"),t._uU(16),t.qZA()()(),t.TgZ(17,"div")(18,"a",14)(19,"span"),t._uU(20),t.qZA()()()()),2&i){const e=_.$implicit;t.xp6(1),t.MGl("href","/posts/",null==e?null:e.id,"",t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(5),t.Oqu(null==e?null:e.viewNumber),t.xp6(4),t.Oqu(null==e?null:e.bookMarkNumber),t.xp6(4),t.Oqu(null==e?null:e.commentNumber),t.xp6(4),t.hij(" ",null==e||null==e.author?null:e.author.fullname," ")}}let c=(()=>{class i{constructor(e,r){this.questionAnswerService=e,this.postsService=r}ngOnInit(){this.listenService()}listenService(){this.questionAnswerService.getQuestion(1,5).subscribe(e=>{this.questions=e.items}),this.postsService.getPosts(1,5).subscribe(e=>{this.listPosts=e.items,console.log("this.listPosts",this.listPosts)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.t),t.Y36(l.P))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sidebar-ask"]],decls:14,vars:2,consts:[[1,"sidebar-ask-outer","mx-4"],[1,"d-flex"],[1,"title-sidebar","text-uppercase"],[1,"title-line","ms-2"],["class","ask-item mt-3",4,"ngFor","ngForOf"],[1,"sidebar-ask-outer","mx-4","mt-5"],[1,"ask-item","mt-3"],[3,"href"],[1,"title-ask"],[1,"group-icon","d-flex"],[1,"icon"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-share"],[1,"fa-solid","fa-comment"],["href","#",1,"name-user"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"C\xe2u h\u1ecfi m\u1edbi nh\u1ea5t"),t.qZA(),t._UZ(4,"hr",3),t.qZA(),t.TgZ(5,"div"),t.YNc(6,P,21,6,"div",4),t.qZA()(),t.TgZ(7,"div",5)(8,"div",1)(9,"h5",2),t._uU(10,"Newest Posts"),t.qZA(),t._UZ(11,"hr",3),t.qZA(),t.TgZ(12,"div"),t.YNc(13,d,21,6,"div",4),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngForOf",r.questions),t.xp6(7),t.Q6J("ngForOf",r.listPosts))},dependencies:[p.sg],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--main-color);margin-bottom:10px}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%]{color:var(--gray-text);flex-grow:1}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid var(--gray-light)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--black);margin-bottom:5px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]:hover{color:var(--main-color)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:15px;aspect-ratio:3/2}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]:hover{color:var(--main-color)}"]}),i})()}}]);