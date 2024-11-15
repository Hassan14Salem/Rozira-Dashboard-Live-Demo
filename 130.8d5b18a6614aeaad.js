"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[130],{2130:(T,f,i)=>{i.r(f),i.d(f,{AboutModule:()=>G});var p=i(6814),h=i(6505),e=i(5879),c=i(9862),I=i(5127);let r=(()=>{class s{constructor(t,n){this.baseService=t,this.http=n,this.controller="Aboutus"}getHeaders(){const t=localStorage.getItem("RoziraToken");return new c.WM({Authorization:`Bearer ${t}`})}gets(){return this.baseService.getAll(this.controller+"/aboutus")}get(t){return this.baseService.getById(t,this.controller)}add(t){const n=this.getHeaders();return this.http.post(this.baseService.baseUrl+this.controller+"/aboutus/save",t,{headers:n})}update(t,n){return this.baseService.Update(this.controller+`/${n}`,t)}delete(t){return this.baseService.delete(this.controller+"/",t)}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(I.b),e.LFG(c.eN))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var l=i(2425),a=i(2209),m=i(707),v=i(5219),g=i(6223),b=i(7213),x=i(3714),Z=i(4480),C=i(9515);function M(s,u){1&s&&(e.TgZ(0,"small",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"errors.required")," "))}function N(s,u){1&s&&(e.TgZ(0,"small",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"errors.maxlength")," 2000 "))}function U(s,u){1&s&&(e.TgZ(0,"small",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"errors.required")," "))}function S(s,u){1&s&&(e.TgZ(0,"small",25),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"errors.maxlength")," 2000 "))}function y(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16)(4,"label",17),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"span",18),e._uU(8,"*"),e.qZA(),e.TgZ(9,"input",19,20),e.NdJ("ngModelChange",function(o){e.CHM(t);const d=e.oxw();return e.KtG(d.Item.descriptionAr=o)}),e.qZA(),e.YNc(11,M,3,3,"small",21),e.YNc(12,N,3,3,"small",21),e.qZA()(),e.TgZ(13,"div",15)(14,"div",16)(15,"label",22),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"span",18),e._uU(19,"*"),e.qZA(),e.TgZ(20,"input",23,24),e.NdJ("ngModelChange",function(o){e.CHM(t);const d=e.oxw();return e.KtG(d.Item.descriptionEn=o)}),e.qZA(),e.YNc(22,U,3,3,"small",21),e.YNc(23,S,3,3,"small",21),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(5),e.hij("",e.lcZ(6,8,"tableHeader.descriptionAr")," "),e.xp6(4),e.Q6J("ngModel",t.Item.descriptionAr),e.xp6(2),e.Q6J("ngIf",t.submitted&&!t.Item.descriptionAr),e.xp6(1),e.Q6J("ngIf",t.Item.descriptionAr.length>2e3),e.xp6(4),e.hij("",e.lcZ(17,10,"tableHeader.descriptionEn")," "),e.xp6(4),e.Q6J("ngModel",t.Item.descriptionEn),e.xp6(2),e.Q6J("ngIf",t.submitted&&t.Item.descriptionEn.length<1),e.xp6(1),e.Q6J("ngIf",t.Item.descriptionAr.length>2e3)}}function J(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.hideDialog())}),e.ALo(1,"translate"),e.qZA(),e.TgZ(2,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.save(o.Item))}),e.ALo(3,"translate"),e.qZA()}2&s&&(e.s9C("label",e.lcZ(1,2,"cancel")),e.xp6(2),e.s9C("label",e.lcZ(3,4,"save")))}const D=function(){return{width:"80vw"}},L=[{path:"all",component:(()=>{class s{constructor(t,n,o,d){this._aboutService=t,this.alertService=n,this.NavigateRoute=o,this._AuthService=d,this.itemDialog=!1,this.submitted=!1,this.pageColumns=[{field:"descriptionAr",header:"Arabic Name",filterable:!0},{field:"descriptionEn",header:"English Name",filterable:!0}],this.globalFilterFields=["nameAr"],this.title="level.header",this.Items=[],this.Item={},this.categories=[],this.permissionsLoaded=!1,this.permissions=[]}getItems(){this._aboutService.gets().subscribe({next:t=>{this.Item=t}})}hasPermission(t){return this.permissions.includes(t)}loadPermissions(){const t=localStorage.getItem("userPermissions");t?(this.permissions=JSON.parse(t),this.permissionsLoaded=!0):this._AuthService.permissions$.subscribe(n=>{this.permissions=n,this.permissionsLoaded=!0,localStorage.setItem("userPermissions",JSON.stringify(n))})}ngOnInit(){this.getItems(),this.loadPermissions()}editItem(t){this.Item={...t},this.itemDialog=!0}deleteDialogMessage(t){this.Item={...t},this.confirmDeleteDialog=!0}deleteItem(t){this._aboutService.delete(t.id).subscribe({next:n=>{200===n.status&&(this.alertService.success("Product Deleted Successfully"),this.getItems())},error:n=>{this.alertService.error(n.error.error.message)}}),this.hideDialog()}hideDialog(){this.confirmDeleteDialog=!1,this.itemDialog=!1}openNew(){this.Item={},this.itemDialog=!0}save(t){this.submitted=!0,this._aboutService.add(t).subscribe({next:n=>{this.alertService.success("Updated Successfully"),this.getItems(),this.hideDialog()},error:n=>{this.alertService.error("Failded to Updated ")}})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(r),e.Y36(l._W),e.Y36(h.F0),e.Y36(a.e))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-all-about"]],decls:27,vars:26,consts:[[1,"w-100"],[1,"container","p-5"],[1,"my-3","text-center"],[1,"row","my-3"],[1,"col-12"],[1,"form-floating"],["id","txtDescAr","disabled","","id","floatingTextarea2",1,"form-control",2,"height","100px",3,"ngModel","placeholder","ngModelChange"],[1,"row","my-5"],["disabled","","id","floatingTextarea2",1,"form-control",2,"height","100px",3,"ngModel","placeholder","ngModelChange"],[1,"btn","btn-primary",3,"hidden","click"],["styleClass","p-fluid",3,"visible","header","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],[1,"container-fluid"],[1,"row","my-5","pb-3"],[1,"col-md-6","mb-3"],[1,"field"],["for","arabicName"],[1,"red-color"],["type","text","pInputText","","id","arabicName","required","","autofocus","",3,"ngModel","ngModelChange"],["txtNameAr","ngModel"],["class","p-error",4,"ngIf"],["for","englishName"],["type","text","pInputText","","id","englishName","required","","autofocus","",3,"ngModel","ngModelChange"],["txtNameEn","ngModel"],[1,"p-error"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-text",3,"label","click"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button-text",3,"label","click"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"h3"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"textarea",6),e.NdJ("ngModelChange",function(A){return o.Item.descriptionAr=A}),e.ALo(12,"translate"),e.qZA()()()(),e.TgZ(13,"div",7)(14,"div",4)(15,"div",5)(16,"h3"),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"textarea",8),e.NdJ("ngModelChange",function(A){return o.Item.descriptionEn=A}),e.ALo(20,"translate"),e.qZA()()()(),e.TgZ(21,"button",9),e.NdJ("click",function(){return o.editItem(o.Item)}),e._uU(22,"Update"),e.qZA()()(),e.TgZ(23,"p-dialog",10),e.NdJ("visibleChange",function(A){return o.itemDialog=A}),e.ALo(24,"translate"),e.YNc(25,y,24,12,"ng-template",11),e.YNc(26,J,4,6,"ng-template",12),e.qZA()),2&n&&(e.xp6(3),e.Oqu(e.lcZ(4,13,"about.header")),e.xp6(6),e.Oqu(e.lcZ(10,15,"tableHeader.descriptionAr")),e.xp6(2),e.s9C("placeholder",e.lcZ(12,17,"tableHeader.descriptionAr")),e.Q6J("ngModel",o.Item.descriptionAr),e.xp6(6),e.Oqu(e.lcZ(18,19,"tableHeader.descriptionEn")),e.xp6(2),e.s9C("placeholder",e.lcZ(20,21,"tableHeader.descriptionEn")),e.Q6J("ngModel",o.Item.descriptionEn),e.xp6(2),e.Q6J("hidden",!o.hasPermission("CreateOrEditAboutus")),e.xp6(2),e.Akn(e.DdM(25,D)),e.s9C("header",e.lcZ(24,23,"Users.header.UpdateModal")),e.Q6J("visible",o.itemDialog)("modal",!0))},dependencies:[p.O5,m.Hq,v.jx,g.Fj,g.JJ,g.Q7,g.On,b.V,x.o,Z.H,C.X$]})}return s})(),title:"About"}];let E=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#s=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(L),h.Bz]})}return s})();var H=i(6208),_=i(5389),$=i(1532),F=i(3904),O=i(2160),P=i(4819),B=i(9502),Y=i(4055),j=i(5431),z=i(4104),Q=i(6340),R=i(3259);let G=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#s=this.\u0275inj=e.cJS({imports:[p.ez,E,H.m,C.aw,m.hJ,g.u5,j.U$,m.hJ,b.S,x.j,z.EV,F.D,B.$,Q.V,O.kW,_.fx,$._8,P.O,R.z,Y.q4,Z.T]})}return s})()},5127:(T,f,i)=>{i.d(f,{b:()=>e});var p=i(9862),h=i(5879);let e=(()=>{class c{constructor(r){this.http=r,this.baseUrl="https://roseirae.runasp.net/api/"}getHeaders(){const r=localStorage.getItem("RoziraToken");return new p.WM({Authorization:`Bearer ${r}`})}getAllTest(r,l,a,m){const v=this.getHeaders();return this.http.get(`${this.baseUrl}${r}?Name=${l}&PageNumber=${a}&PageSize=${m}`,{headers:v})}getAll(r){const l=this.getHeaders();return console.log("header",l),this.http.get(this.baseUrl+r,{headers:l})}getById(r,l){const a=this.getHeaders();return this.http.get(`${this.baseUrl}${l}/${r}`,{headers:a})}Add(r,l){const a=this.getHeaders();return this.http.post(this.baseUrl+r,l,{responseType:"text",headers:a})}Update(r,l){const a=this.getHeaders();return this.http.put(this.baseUrl+r,l,{responseType:"text",headers:a})}delete(r,l){const a=this.getHeaders();return this.http.delete(this.baseUrl+r+`/delete/${l}`,{responseType:"text",headers:a})}static#e=this.\u0275fac=function(l){return new(l||c)(h.LFG(p.eN))};static#t=this.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);