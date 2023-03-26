"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[557],{8557:(T,d,i)=>{i.r(d),i.d(d,{AccountModule:()=>M});var m=i(8692),f=i(4199),o=i(92),g=i(5725),u=i(1528),e=i(4537),h=i(6956),v=i(5934),b=i(4899),c=i(9638),p=i(3331);function C(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",28)(1,"button",29),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.removeUrlThumbnail())}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()()}}const Z=[{path:"",component:(()=>{class n{constructor(t,r,l){this.localStorageHelperService=t,this.userService=r,this.uploadFileService=l,this.userForm=this.initForm(),this.urlProfile=[],this.isUpload=!1}ngOnInit(){this.listenService()}initForm(){return new o.cw({fullname:new o.NI({value:"",disabled:!1},[o.kI.required]),email:new o.NI({value:"",disabled:!0},[o.kI.required]),gender:new o.NI({value:"",disabled:!0},[o.kI.required]),username:new o.NI({value:"",disabled:!0},[o.kI.required]),age:new o.NI({value:"",disabled:!0},[o.kI.required]),about:new o.NI({value:"",disabled:!1},[o.kI.required])})}listenService(){this.user=this.localStorageHelperService.getUser(),this.user&&this.pathValue(this.user)}pathValue(t){this.urlProfile=t.avatar,this.userForm.patchValue({fullname:t.fullName,email:t.email,gender:t.gender,username:t.username,age:t.age,about:t.about})}detectFileThumbnail(t){if(this.fileProfile=t.target.files||t.dataTransfer.files,this.fileProfile.length<7)for(let r of this.fileProfile){let l=new FileReader;l.onload=s=>{this.urlProfile=s.target.result,this.isUpload=!0},l.readAsDataURL(r)}}removeUrlThumbnail(){this.urlProfile=this.user?.avatar,this.isUpload=!1}submit(){const t=new g.n;if(t.fullName=this.userForm.value.fullname,t.about=this.userForm.value.about,t.avatar=this.urlProfile,t.age=this.userForm.value.age,this.fileProfile&&this.fileProfile[0]){const r=new FormData;r.append("upload",this.fileProfile[0]),this.uploadFileService.uploadFile(r).pipe((0,u.w)(l=>(t.avatar=l,this.userService.updateMe(t))),(0,u.w)(l=>this.userService.getMe())).subscribe(l=>{this.localStorageHelperService.addUser(l),this.listenService()})}else this.userService.updateMe(t).pipe((0,u.w)(r=>this.userService.getMe())).subscribe(r=>{this.localStorageHelperService.addUser(r),this.listenService()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.w),e.Y36(v.K),e.Y36(b.f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-account"]],decls:54,vars:9,consts:[[1,"profile-info","mt-5","container","shadow","accordion-button","d-flex","justify-content-center","align-items-center"],[1,"profile-info-group","p-4","w-100"],[1,"avatar","d-flex","justify-content-center","align-items-center",3,"files"],["width","200","height","200px",1,"rounded",3,"src","alt"],["for","upload"],[1,"fa-sharp","fa-regular","fa-image"],["type","file","id","upload",1,"uploadImgae","d-none",3,"change"],["class","d-flex justify-content-center mt-1",4,"ngIf"],[1,"mt-4"],[3,"formGroup"],[1,"form-group"],["for","name"],[1,"text-danger"],["type","text","formControlName","fullname","id","name","placeholder","Enter fullname",1,"form-control",3,"disabled"],[1,"d-flex","col-12"],[1,"form-group","col-6"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control","me-1"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Enter email",1,"form-control","ms-1",3,"disabled"],["for","password"],["type","text","formControlName","age","id","password","placeholder","Enter Age",1,"form-control","me-1",3,"disabled"],["for","confirmPassword"],["type","text","formControlName","gender","id","confirmPassword","placeholder","Enter Gender",1,"form-control","ms-1",3,"disabled"],["type","text","formControlName","about","id","confirmPassword","placeholder","Please write about here !",1,"form-control",3,"disabled"],[1,"mt-3","d-flex","justify-content-end"],["mat-stroked-button","","color","primary",1,"me-2"],["mat-raised-button","","color","primary",3,"click"],[1,"d-flex","justify-content-center","mt-1"],["mat-mini-fab","","color","warn",1,"absolute","justify-self-center","my-fab",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),e._uU(4," Account Settings "),e.qZA()(),e.TgZ(5,"div",2),e.NdJ("files",function(s){return r.detectFileThumbnail(s)}),e._UZ(6,"img",3),e.TgZ(7,"label",4),e._UZ(8,"i",5),e.qZA(),e.TgZ(9,"input",6),e.NdJ("change",function(s){return r.detectFileThumbnail(s)}),e.qZA()(),e.YNc(10,C,4,0,"div",7),e.TgZ(11,"div",8)(12,"form",9)(13,"div",10)(14,"label",11),e._uU(15,"Fullname "),e.TgZ(16,"span",12),e._uU(17,"(*)"),e.qZA()(),e._UZ(18,"input",13),e.qZA(),e.TgZ(19,"div",14)(20,"div",15)(21,"label",16),e._uU(22,"Username "),e.TgZ(23,"span",12),e._uU(24,"(*)"),e.qZA()(),e._UZ(25,"input",17),e.qZA(),e.TgZ(26,"div",15)(27,"label",18),e._uU(28,"Email "),e.TgZ(29,"span",12),e._uU(30,"(*)"),e.qZA()(),e._UZ(31,"input",19),e.qZA()(),e.TgZ(32,"div",14)(33,"div",15)(34,"label",20),e._uU(35,"Age "),e.TgZ(36,"span",12),e._uU(37,"(*)"),e.qZA()(),e._UZ(38,"input",21),e.qZA(),e.TgZ(39,"div",15)(40,"label",22),e._uU(41,"Gender "),e.TgZ(42,"span",12),e._uU(43,"(*)"),e.qZA()(),e._UZ(44,"input",23),e.qZA()(),e.TgZ(45,"div",10)(46,"label",22),e._uU(47,"About"),e.qZA(),e._UZ(48,"textarea",24),e.qZA(),e.TgZ(49,"div",25)(50,"button",26),e._uU(51,"Cancel"),e.qZA(),e.TgZ(52,"button",27),e.NdJ("click",function(){return r.submit()}),e._uU(53,"Submit"),e.qZA()()()()()()),2&t&&(e.xp6(6),e.s9C("src",r.urlProfile,e.LSH),e.s9C("alt",r.urlProfile),e.xp6(4),e.Q6J("ngIf",r.isUpload),e.xp6(2),e.Q6J("formGroup",r.userForm),e.xp6(6),e.Q6J("disabled",!0),e.xp6(13),e.Q6J("disabled",!0),e.xp6(7),e.Q6J("disabled",!0),e.xp6(6),e.Q6J("disabled",!0),e.xp6(4),e.Q6J("disabled",!0))},dependencies:[m.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,c.lW,c.nh,p.Hw],styles:[".profile-info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:10px}.profile-info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--gray-text)}.profile-info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:10px}.profile-info[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:150px;margin-top:10px}.profile-info-group[_ngcontent-%COMP%]{border:1px solid var(--gray-light)}.avatar[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute!important;display:none}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover + label[_ngcontent-%COMP%]{display:block}.fa-image[_ngcontent-%COMP%]{font-size:3.5rem;opacity:.8}.rounded[_ngcontent-%COMP%]{border-radius:50%!important}.fa-trash[_ngcontent-%COMP%]{font-size:1.5rem;opacity:.8;color:var(--red)}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(Z),f.Bz]}),n})();var P=i(9182),U=i(4910);let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,A,P.B,U.aw,o.UX,c.ot,p.Ps]}),n})()}}]);