(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2ub0":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),o=t("V4a/");class r{constructor(l,n,t){this.microcontentServ=l,this.route=n,this.router=t,this.gestorcontenidos=[],this.route.queryParams.subscribe(l=>{this.router.getCurrentNavigation().extras.state&&(this.data=this.router.getCurrentNavigation().extras.state.idGestorContenido)})}ngOnInit(){console.log("Parametro gestor contenido",this.data),this.microcontentServ.getcontentmanager(this.data).subscribe(l=>{console.log("Resp",l),this.gestorcontenidos=l})}verobjetosAprendizaje(l){console.log(l),this.router.navigate(["objaprendizaje"],{state:{idCategory:l}})}}class e{}var i=t("pMnS"),a=t("oBZk"),b=t("ZZ/e"),c=t("Xqnl"),s=t("2MiI"),d=t("ej43"),p=t("SVse"),g=t("iInd"),h=u.pb({encapsulation:0,styles:[[""]],data:{}});function k(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,14,"ion-card",[["color","dark"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.verobjetosAprendizaje(l.context.$implicit.id)&&u),u}),a.Q,a.f)),u.qb(1,49152,null,0,b.n,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(2,0,null,0,3,"ion-card-header",[],null,null,null,a.N,a.h)),u.qb(3,49152,null,0,b.p,[u.h,u.k,u.x],null,null),(l()(),u.rb(4,0,null,0,1,"ion-card-title",[["class","text-primary"]],[[8,"innerHTML",1]],null,null,a.P,a.j)),u.qb(5,49152,null,0,b.r,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,8,"ion-card-content",[],null,null,null,a.M,a.g)),u.qb(7,49152,null,0,b.o,[u.h,u.k,u.x],null,null),(l()(),u.rb(8,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.rb(9,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),u.rb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Puntaje"])),(l()(),u.rb(12,0,null,null,2,"ion-label",[["slot","end"]],null,null,null,a.bb,a.u)),u.qb(13,49152,null,0,b.O,[u.h,u.k,u.x],null,null),(l()(),u.Kb(14,0,[" "," "]))],(function(l,n){l(n,1,0,"dark")}),(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.points)}))}function m(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,1,"app-header",[["title","Categorias"]],null,null,null,c.b,c.a)),u.qb(1,114688,null,0,s.a,[d.a],{title:[0,"title"]},null),(l()(),u.rb(2,0,null,null,3,"ion-content",[["color","dark"]],null,null,null,a.T,a.m)),u.qb(3,49152,null,0,b.v,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.gb(16777216,null,0,1,null,k)),u.qb(5,278528,null,0,p.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"Categorias"),l(n,3,0,"dark"),l(n,5,0,t.gestorcontenidos)}),null)}function B(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,1,"app-gestorcontenido",[],null,null,null,m,h)),u.qb(1,114688,null,0,r,[o.a,g.a,g.m],null,null)],(function(l,n){l(n,1,0)}),null)}var f=u.nb("app-gestorcontenido",r,B,{},{},[]),j=t("s7LF"),v=t("iTUp"),x=t("j1ZV");t.d(n,"GestorcontenidoPageModuleNgFactory",(function(){return q}));var q=u.ob(e,[],(function(l){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[i.a,f]],[3,u.j],u.v]),u.Bb(4608,p.m,p.l,[u.s,[2,p.u]]),u.Bb(4608,j.l,j.l,[]),u.Bb(4608,b.b,b.b,[u.x,u.g]),u.Bb(4608,b.Hb,b.Hb,[b.b,u.j,u.p]),u.Bb(4608,b.Kb,b.Kb,[b.b,u.j,u.p]),u.Bb(1073742336,p.c,p.c,[]),u.Bb(1073742336,j.k,j.k,[]),u.Bb(1073742336,j.b,j.b,[]),u.Bb(1073742336,b.Fb,b.Fb,[]),u.Bb(1073742336,v.a,v.a,[]),u.Bb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u.Bb(1073742336,x.a,x.a,[]),u.Bb(1073742336,e,e,[]),u.Bb(1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);