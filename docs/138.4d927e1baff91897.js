"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[138],{4138:(m,s,e)=>{e.r(s),e.d(s,{MainLayoutComponent:()=>v});var l=e(6895),i=e(9427),u=e(910),t=e(1571),d=e(4377);let g=(()=>{class o{constructor(n,a,c){this._AuthService=n,this._Renderer2=a,this._CartService=c,this.isLogin=!1,this.cartnum=0,this.cartId="",this.username=""}ngOnInit(){this._CartService.cartNumber.subscribe({next:n=>{this.cartnum=n,console.log(this.cartnum)}}),this.cartnum>0&&this._CartService.getUserCart().subscribe({next:n=>{this.cartnum=n.numOfCartItems}}),this._CartService.cartId.subscribe({next:n=>{this.cartId=n}}),this._AuthService.userName.subscribe({next:n=>{this.username=n}})}logOut(){this._AuthService.logOut()}toggleMode(){const n=document.getElementsByTagName("body")[0];n.classList.toggle("dark-mode"),n.classList.toggle("light-mode")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(t.Qsj),t.Y36(u.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-nav-main"]],standalone:!0,features:[t.jDz],decls:53,vars:2,consts:[[1,"navbar","navbar-expand-lg","fixed-top","bg-color"],[1,"container-lg-fluid","container"],["routerLink","home",1,"navbar-brand","bg-light"],["src","assets/images/freshcart-logo.svg","alt","logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","shadow-0"],[1,"fa","fa-bars","txt-color"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item","mx-auto"],["aria-current","page","routerLink","home","routerLinkActive"," txt-color rounded ",1,"nav-link","fw-bold","txt-color","active","rounded"],["aria-current","page","routerLink","products","routerLinkActive"," txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded"],["aria-current","page","routerLink","categories","routerLinkActive"," txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded"],["aria-current","page","routerLink","brands","routerLinkActive"," txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded"],["aria-current","page","routerLink","cart","routerLinkActive"," txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded"],["aria-current","page","routerLink","wishlist","routerLinkActive"," txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded"],[1,"navbar-nav","ms-auto","mb-2","mx-auto","mb-lg-0","social-icons","gap-2","flex-row","align-items-center","justify-content-center"],[1,"position-relative","cursor-pointer"],[1,"fa-solid","fa-user","cursor-pointer","txt-color"],[1,"position-absolute","username","badge","text-white","bg-info"],["routerLink","cart","role","a",1,"position-relative","cursor-pointer"],[1,"fa-solid","fa-cart-shopping","cursor-pointer","fa-2x"],[1,"position-absolute","cart","badge","text-white","bg-info"],[1,"cursor-pointer","txt-color","fa-brands","fa-facebook"],[1,"cursor-pointer","txt-color","fa-brands","fa-twitter"],[1,"cursor-pointer","txt-color","fa-brands","fa-instagram"],[1,"cursor-pointer","txt-color","fa-brands","fa-tiktok"],[1,"cursor-pointer","txt-color","fa-brands","fa-youtube"],[1,"cursor-pointer","txt-color","fa-brands","fa-pinterest"],[1,"navbar-nav","me-2","mb-2","mb-lg-0","justify-content-center","align-items-center"],[1,"nav-item","me-2","rounded"],["aria-current","page","routerLinkActive","bg-sec txt-color rounded",1,"nav-link","fw-bold","txt-color","active","rounded","cursor-pointer",3,"click"],[1,"fa-solid","fa-moon","txt-color","cursor-pointer","fs-3","me-2",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"button",4),t._UZ(5,"i",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"Home"),t.qZA()(),t.TgZ(11,"li",8)(12,"a",10),t._uU(13,"Products"),t.qZA()(),t.TgZ(14,"li",8)(15,"a",11),t._uU(16,"Categories"),t.qZA()(),t.TgZ(17,"li",8)(18,"a",12),t._uU(19,"Brands"),t.qZA()(),t.TgZ(20,"li",8)(21,"a",13),t._uU(22,"Cart"),t.qZA()(),t.TgZ(23,"li",8)(24,"a",14),t._uU(25,"WishList"),t.qZA()()(),t.TgZ(26,"ul",15)(27,"li",16),t._UZ(28,"i",17),t.TgZ(29,"span",18),t._uU(30),t.qZA()(),t.TgZ(31,"li",19),t._UZ(32,"i",20),t.TgZ(33,"span",21),t._uU(34),t.qZA()(),t.TgZ(35,"li"),t._UZ(36,"i",22),t.qZA(),t.TgZ(37,"li"),t._UZ(38,"i",23),t.qZA(),t.TgZ(39,"li"),t._UZ(40,"i",24),t.qZA(),t.TgZ(41,"li"),t._UZ(42,"i",25),t.qZA(),t.TgZ(43,"li"),t._UZ(44,"i",26),t.qZA(),t.TgZ(45,"li"),t._UZ(46,"i",27),t.qZA()(),t.TgZ(47,"ul",28)(48,"li",29)(49,"a",30),t.NdJ("click",function(){return a.logOut()}),t._uU(50,"LogOut"),t.qZA()(),t.TgZ(51,"li")(52,"i",31),t.NdJ("click",function(){return a.toggleMode()}),t.qZA()()()()()()),2&n&&(t.xp6(30),t.Oqu(a.username),t.xp6(4),t.Oqu(a.cartnum))},dependencies:[l.ez,i.rH,i.Od],styles:[".navbar-toggler[_ngcontent-%COMP%]:focus{box-shadow:none}.fa-cart-shopping[_ngcontent-%COMP%]{color:var(--main-color)}.navbar[_ngcontent-%COMP%]{box-shadow:0 0 14px .2px var(--main-color)}.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%]{color:var(--txt)!important}.username[_ngcontent-%COMP%]{top:-15px;left:-20px}.cart[_ngcontent-%COMP%]{top:50%;left:64%}"]}),o})();var p=e(4662);let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-layout"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"container","custom-padding"]],template:function(n,a){1&n&&(t._UZ(0,"app-nav-main"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"))},dependencies:[l.ez,g,p.c,i.lC],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end}"]}),o})()}}]);