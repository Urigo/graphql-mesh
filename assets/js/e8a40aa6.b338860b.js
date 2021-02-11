(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{273:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),b=(a(0),a(297)),c={id:"cli",title:"@graphql-mesh/cli",sidebar_label:"cli"},p={unversionedId:"api/modules/cli",id:"api/modules/cli",isDocsHomePage:!1,title:"@graphql-mesh/cli",description:"- generateSdk",source:"@site/docs/api/modules/cli_src.md",slug:"/api/modules/cli",permalink:"/docs/api/modules/cli",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/modules/cli_src.md",version:"current",sidebar_label:"cli",sidebar:"sidebar",previous:{title:"Live Queries",permalink:"/docs/recipes/live-queries"},next:{title:"@graphql-mesh/config",permalink:"/docs/api/modules/config"}},i=[{value:"Functions",id:"functions",children:[{value:"generateSdk",id:"generatesdk",children:[]},{value:"graphqlMesh",id:"graphqlmesh",children:[]},{value:"serveMesh",id:"servemesh",children:[]}]}],l={toc:i};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/cli#generatesdk"}),"generateSdk")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/cli#graphqlmesh"}),"graphqlMesh")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/modules/cli#servemesh"}),"serveMesh"))),Object(b.b)("h2",{id:"functions"},"Functions"),Object(b.b)("h3",{id:"generatesdk"},"generateSdk"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generateSdk"),"(",Object(b.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema, ",Object(b.b)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"depth?"),": ",Object(b.b)("em",{parentName:"p"},"number")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"flatten-types"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"operations?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]  }): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"\\",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"schema"),": GraphQLSchema"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"depth?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"number"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"flatten-types")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"operations?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"\\",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/cli/src/commands/generate-sdk.ts#L13"}),"packages/cli/src/commands/generate-sdk.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"graphqlmesh"},"graphqlMesh"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"graphqlMesh"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<","{ ",Object(b.b)("inlineCode",{parentName:"p"},"$0"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"_"),": (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),")[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"output"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }\\",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<","{ ",Object(b.b)("inlineCode",{parentName:"p"},"$0"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"_"),": (",Object(b.b)("em",{parentName:"p"},"string")," ","|"," ",Object(b.b)("em",{parentName:"p"},"number"),")[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"output"),": ",Object(b.b)("em",{parentName:"p"},"string"),"  }\\",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/cli/src/index.ts#L16"}),"packages/cli/src/index.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"servemesh"},"serveMesh"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"serveMesh"),"(",Object(b.b)("inlineCode",{parentName:"p"},"baseDir"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"argsPort?"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),"\\",">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"baseDir")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"argsPort?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),"\\",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/cli/src/commands/serve/serve.ts#L29"}),"packages/cli/src/commands/serve/serve.ts:29")))}m.isMDXComponent=!0},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),o=m(a),O=n,j=o["".concat(c,".").concat(O)]||o[O]||s[O]||b;return a?r.a.createElement(j,p(p({ref:t},l),{},{components:a})):r.a.createElement(j,p({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);