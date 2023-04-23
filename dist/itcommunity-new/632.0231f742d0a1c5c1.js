"use strict";(self.webpackChunkITCommunity_new=self.webpackChunkITCommunity_new||[]).push([[632],{8632:(C,v,d)=>{d.d(v,{C5:()=>u,Pl:()=>D,UE:()=>p,eL:()=>w,u0:()=>_});var i=d(4537),P=d(8692);class h{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class u extends h{constructor(t,e,o,n,c){super(),this.component=t,this.viewContainerRef=e,this.injector=o,this.componentFactoryResolver=n,this.projectableNodes=c}}class p extends h{constructor(t,e,o,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=o,this.injector=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class m extends h{constructor(t){super(),this.element=t instanceof i.SBq?t.nativeElement:t}}class f{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){return t instanceof u?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof p?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof m?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class _ extends f{constructor(t,e,o,n,c){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=o,this._defaultInjector=n,this.attachDomPortal=a=>{const s=a.element,l=this._document.createComment("dom-portal");s.parentNode.insertBefore(l,s),this.outletElement.appendChild(s),this._attachedPortal=a,super.setDisposeFn(()=>{l.parentNode&&l.parentNode.replaceChild(s,l)})},this._document=c}attachComponentPortal(t){const o=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let n;return t.viewContainerRef?(n=t.viewContainerRef.createComponent(o,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=o.create(t.injector||this._defaultInjector||i.zs3.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=t,n}attachTemplatePortal(t){let e=t.viewContainerRef,o=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return o.rootNodes.forEach(n=>this.outletElement.appendChild(n)),o.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(o);-1!==n&&e.remove(n)}),this._attachedPortal=t,o}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}let D=(()=>{class r extends f{constructor(e,o,n){super(),this._componentFactoryResolver=e,this._viewContainerRef=o,this._isInitialized=!1,this.attached=new i.vpe,this.attachDomPortal=c=>{const a=c.element,s=this._document.createComment("dom-portal");c.setAttachedHost(this),a.parentNode.insertBefore(s,a),this._getRootNode().appendChild(a),this._attachedPortal=c,super.setDisposeFn(()=>{s.parentNode&&s.parentNode.replaceChild(a,s)})},this._document=n}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);const o=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,c=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),a=o.createComponent(c,o.length,e.injector||o.injector,e.projectableNodes||void 0);return o!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);const o=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i._Vd),i.Y36(i.s_b),i.Y36(P.K0))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[i.qOj]}),r})(),w=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({}),r})()}}]);