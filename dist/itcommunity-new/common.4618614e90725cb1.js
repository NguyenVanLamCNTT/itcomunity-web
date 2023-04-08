"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[592],{9730:(M,p,o)=>{o.d(p,{t:()=>l});var t=o(2340),g=o(9413),i=o(7969),u=o(4537),d=o(2389);const s=t.N.apiUrl,c=g.H.qa;let l=(()=>{class a{constructor(e){this.apiService=e}createQuestion(e){return this.apiService.post(`${s}/${c.question}`,e).pipe((0,i.U)(r=>r.body||{}))}getQuestion(e,n,r,_){return this.apiService.get(`${s}/${c.question}?page=${e}&perPage=${n}`+(_?`&username=${_}`:"")).pipe((0,i.U)(P=>P.body.data||{}))}createAnswer(e){return this.apiService.post(`${s}/${c.answer}`,e).pipe((0,i.U)(r=>r.body||{}))}getAnswer(e,n,r,_,v){return this.apiService.get(`${s}/${c.question}/${e}/answer?page=${n}&perPage=${r}`+(v?`&username=${v}`:"")).pipe((0,i.U)(U=>U.body.data||{}))}getQuestionsById(e){return this.apiService.get(`${s}/${c.question}/${e}`).pipe((0,i.U)(r=>r.body.data||{}))}updateQuestion(e,n){return this.apiService.put(`${s}/${c.question}/${e}`,n).pipe((0,i.U)(_=>_.body||{}))}updateAnswer(e,n){return this.apiService.put(`${s}/${c.answer}/${e}`,n).pipe((0,i.U)(_=>_.body||{}))}approvedAnswer(e,n){return this.apiService.patch(`${s}/${c.answer}/${e}`,n).pipe((0,i.U)(_=>_.body||{}))}}return a.\u0275fac=function(e){return new(e||a)(u.LFG(d.s))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4899:(M,p,o)=>{o.d(p,{f:()=>l});var t=o(7969),g=o(2340),i=o(9413),u=o(4537),d=o(2389);const s=g.N.apiUrl,c=i.H.upload;let l=(()=>{class a{constructor(e){this.apiService=e}uploadFile(e){return this.apiService.postFormData(`${s}/${c.upload}`,e).pipe((0,t.U)(r=>r.body.data||{}))}}return a.\u0275fac=function(e){return new(e||a)(u.LFG(d.s))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5934:(M,p,o)=>{o.d(p,{K:()=>l});var t=o(7969),g=o(2340),i=o(9413),u=o(4537),d=o(2389);const s=g.N.apiUrl,c=i.H.user;let l=(()=>{class a{constructor(e){this.apiService=e}getAllUsers(){return this.apiService.get(`${s}/${c.allUser}`).pipe((0,t.U)(n=>n.body.data||{}))}getMe(){return this.apiService.get(`${s}/${c.getMe}`).pipe((0,t.U)(n=>n.body.data||{}))}updateMe(e){return this.apiService.put(`${s}/${c.getMe}`,e).pipe((0,t.U)(r=>r.body.data||{}))}getByUsername(e){return this.apiService.get(`${s}/${c.byUsername}?username=${e}`).pipe((0,t.U)(r=>r.body.data||{}))}}return a.\u0275fac=function(e){return new(e||a)(u.LFG(d.s))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},2005:(M,p,o)=>{o.d(p,{n:()=>g});var t=o(4537);let g=(()=>{class i{}return i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sidebar-ask"]],decls:69,vars:0,consts:[[1,"sidebar-ask-outer","mx-4"],[1,"d-flex"],[1,"title-sidebar","text-uppercase"],[1,"title-line","ms-2"],[1,"ask-item"],["href",""],[1,"title-ask"],[1,"group-icon","d-flex"],[1,"icon"],[1,"fa-solid","fa-share"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-comment"],["href","#",1,"name-user"],[1,"ask-item","mt-2"]],template:function(d,s){1&d&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3,"C\xe2u h\u1ecfi m\u1edbi nh\u1ea5t"),t.qZA(),t._UZ(4,"hr",3),t.qZA(),t.TgZ(5,"div")(6,"div",4)(7,"a",5)(8,"h5",6),t._uU(9," T\xecm project backend nodejs \u0111\u1ec3 tham gia h\u1ecdc h\u1ecfi "),t.qZA()(),t.TgZ(10,"div",7)(11,"div",8),t._UZ(12,"i",9),t.TgZ(13,"span"),t._uU(14,"1"),t.qZA()(),t.TgZ(15,"div",8),t._UZ(16,"i",10),t.TgZ(17,"span"),t._uU(18,"1"),t.qZA()(),t.TgZ(19,"div",8),t._UZ(20,"i",11),t.TgZ(21,"span"),t._uU(22,"1"),t.qZA()()(),t.TgZ(23,"div")(24,"a",12)(25,"span"),t._uU(26," Hira Nguyen "),t.qZA()()()(),t.TgZ(27,"div",13)(28,"a",5)(29,"h5",6),t._uU(30," T\xecm project backend nodejs \u0111\u1ec3 tham gia h\u1ecdc h\u1ecfi "),t.qZA()(),t.TgZ(31,"div",7)(32,"div",8),t._UZ(33,"i",9),t.TgZ(34,"span"),t._uU(35,"1"),t.qZA()(),t.TgZ(36,"div",8),t._UZ(37,"i",10),t.TgZ(38,"span"),t._uU(39,"1"),t.qZA()(),t.TgZ(40,"div",8),t._UZ(41,"i",11),t.TgZ(42,"span"),t._uU(43,"1"),t.qZA()()(),t.TgZ(44,"div")(45,"a",12)(46,"span"),t._uU(47," Hira Nguyen "),t.qZA()()()(),t.TgZ(48,"div",13)(49,"a",5)(50,"h5",6),t._uU(51," T\xecm project backend nodejs \u0111\u1ec3 tham gia h\u1ecdc h\u1ecfi "),t.qZA()(),t.TgZ(52,"div",7)(53,"div",8),t._UZ(54,"i",9),t.TgZ(55,"span"),t._uU(56,"1"),t.qZA()(),t.TgZ(57,"div",8),t._UZ(58,"i",10),t.TgZ(59,"span"),t._uU(60,"1"),t.qZA()(),t.TgZ(61,"div",8),t._UZ(62,"i",11),t.TgZ(63,"span"),t._uU(64,"1"),t.qZA()()(),t.TgZ(65,"div")(66,"a",12)(67,"span"),t._uU(68," Hira Nguyen "),t.qZA()()()()()())},styles:["a[_ngcontent-%COMP%]{text-decoration:none}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--main-color);margin-bottom:10px}.sidebar-ask-outer[_ngcontent-%COMP%]   .title-line[_ngcontent-%COMP%]{color:var(--gray-text);flex-grow:1}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid var(--gray-light)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--black);margin-bottom:5px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .title-ask[_ngcontent-%COMP%]:hover{color:var(--main-color)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:15px;aspect-ratio:3/2}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:3px}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400;color:var(--gray-text)}.sidebar-ask-outer[_ngcontent-%COMP%]   .ask-item[_ngcontent-%COMP%]   .name-user[_ngcontent-%COMP%]:hover{color:var(--main-color)}"]}),i})()}}]);