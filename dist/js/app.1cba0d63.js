(function(t){function e(e){for(var i,c,o=e[0],s=e[1],l=e[2],d=0,p=[];d<o.length;d++)c=o[d],r[c]&&p.push(r[c][0]),r[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("27fb"),r=n.n(i);r.a},"1e99":function(t,e,n){},"27fb":function(t,e,n){},"2f38":function(t,e,n){"use strict";var i=n("1e99"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("a026"),r=n("0701"),a=function(t){return t.isBroken?"/not-found":"home"===t.type?"/":"page"===t.type?"/page/"+t.uid:"/not-found"},c=n("36eb"),o=n.n(c),s=o.a.RichText.Elements,l=function(t,e,n,i){if(t===s.hyperlink){var r="",c=o.a.Link.url(e.data,a);if("Document"===e.data.link_type)r='<router-link to="'.concat(c,'">').concat(n,"</router-link>");else{var l=e.data.target?"target=\"'".concat(e.data.target,'\'" rel="noopener"'):"";r='<a href="'.concat(c,'" ').concat(l,">").concat(n,"</a>")}return r}if(t===s.image){var u='<img src="'.concat(e.url,'" alt="').concat(e.alt||"",'" copyright="').concat(e.copyright||"",'">');if(e.linkTo){var d=o.a.Link.url(e.linkTo,a);if("Document"===e.linkTo.link_type)u='<router-link to="'.concat(d,'">').concat(u,"</router-link>");else{var p=e.linkTo.target?'target="'.concat(e.linkTo.target,'" rel="noopener"'):"";u='<a href="'.concat(d,'" ').concat(p,">").concat(u,"</a>")}}var f=[e.label||"","block-img"];return u='<p class="'.concat(f.join(" "),'">').concat(u,"</p>"),u}return null},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("footer-prismic")],1)},d=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("a",{attrs:{href:"https://prismic.io",target:"_blank",rel:"noopener"}},[i("img",{staticClass:"logo",attrs:{src:n("bd10"),alt:"Prismic"}})])])}],m={name:"FooterPrismic"},h=m,v=(n("e080"),n("2877")),g=Object(v["a"])(h,p,f,!1,null,"0d665a6a",null),_=g.exports,b={name:"App",components:{FooterPrismic:_}},k=b,y=(n("034f"),Object(v["a"])(k,u,d,!1,null,null,null)),x=y.exports,w=n("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Not Found")])])}],T={name:"NotFound"},P=T,j=Object(v["a"])(P,C,$,!1,null,null,null),O=j.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Loading the Prismic's Preview...")])])}],L=(n("a481"),{name:"Preview",beforeCreate:function(){var t=this.$route.query.token;this.$prismic.client.previewSession(t,this.$prismic.linkResolver,"/").then(function(t){window.location.replace(t)})}}),S=L,A=Object(v["a"])(S,I,E,!1,null,null,null),R=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("prismic-edit-button",{attrs:{documentId:t.documentId}}),n("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.$prismic.richTextAsPlain(t.fields.title))+"\n  ")]),n("prismic-rich-text",{staticClass:"description",attrs:{field:t.fields.description}}),n("div",{staticClass:"cta-wrapper"},[n("prismic-link",{staticClass:"cta",attrs:{field:t.fields.ctaLink}},[t._v("\n      "+t._s(t.$prismic.richTextAsPlain(t.fields.ctaText))+"\n    ")])],1),n("div",{staticClass:"icon-wrapper"},[n("prismic-image",{staticClass:"icon",attrs:{field:t.fields.icon}})],1)],1)},F=[],M={name:"Page",data:function(){return{documentId:"",fields:{title:null,description:null,ctaLink:null,ctaText:null,icon:null}}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("page",t).then(function(t){t?(e.documentId=t.id,e.fields.title=t.data.title,e.fields.description=t.data.description,e.fields.ctaLink=t.data.cta_link,e.fields.ctaText=t.data.cta_text,e.fields.icon=t.data.icon):e.$router.push({name:"not-found"})})}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,n){this.getContent(t.params.uid),n()}},U=M,B=(n("5ee9"),Object(v["a"])(U,D,F,!1,null,null,null)),J=B.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("prismic-edit-button",{attrs:{documentId:t.documentId}}),n("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.$prismic.richTextAsPlain(t.fields.title))+"\n  ")]),n("prismic-rich-text",{staticClass:"description",attrs:{field:t.fields.description}}),n("div",{staticClass:"cta-wrapper"},[n("prismic-link",{staticClass:"cta",attrs:{field:t.fields.ctaLink}},[t._v("\n      "+t._s(t.$prismic.richTextAsPlain(t.fields.ctaText))+"\n    ")])],1),n("div",{staticClass:"icon-wrapper"},[n("prismic-image",{staticClass:"icon",attrs:{field:t.fields.icon}})],1)],1)},q=[],z={name:"Imagegallery",data:function(){return{documentId:"",fields:{title:null,description:null,ctaLink:null,ctaText:null,icon:null}}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("imagegallery",t).then(function(t){t?(e.documentId=t.id,e.fields.title=t.data.title,e.fields.description=t.data.description,e.fields.ctaLink=t.data.cta_link,e.fields.ctaText=t.data.cta_text,e.fields.icon=t.data.icon):e.$router.push({name:"not-found"})})}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,n){this.getContent(t.params.uid),n()}},G=z,H=(n("2f38"),Object(v["a"])(G,N,q,!1,null,null,null)),K=H.exports;i["a"].use(w["a"]);var Q=new w["a"]({mode:"history",routes:[{path:"/",redirect:{name:"page"}},{path:"/not-found",name:"not-found",component:O},{path:"/preview",name:"preview",component:R},{path:"/page/:uid",name:"page",component:J},{path:"/imagegallery/:uid",name:"imagegallery",component:K},{path:"*",redirect:{name:"not-found"}}]});i["a"].config.productionTip=!1,i["a"].use(r["a"],{endpoint:window.prismic.endpoint,linkResolver:a,htmlSerializer:l}),new i["a"]({router:Q,render:function(t){return t(x)}}).$mount("#app")},"5ee9":function(t,e,n){"use strict";var i=n("9460"),r=n.n(i);r.a},9460:function(t,e,n){},9886:function(t,e,n){},bd10:function(t,e,n){t.exports=n.p+"img/prismic-logo.c4913e51.svg"},e080:function(t,e,n){"use strict";var i=n("9886"),r=n.n(i);r.a}});
//# sourceMappingURL=app.1cba0d63.js.map