webpackJsonp([1],{EfNs:function(t,l){},X6d5:function(t,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var c=a("Dd8w"),e=a.n(c),i=a("NYxO"),o={name:"home",created:function(){this.getUserInfo()},data:function(){return{logoImage:"http://i1.mallcoo.cn/sp_mall/58w0le43-7527-48b9-8125-a1d1b5eddf8e_1x60_4_0_80.jpg",areaName:"南方商城",banners:[{img:"http://i1.mallcoo.cn/sp_mall/51x3n301-73e7-4119-8924-09c400841f78_750x440_4_0_80.jpg",url:"http://www.baidu.com"},{img:"http://i1.mallcoo.cn/sp_mall/6503421e-235f-4787-90e0-ec45b146a097_750x440_4_0_80.jpg",url:"http://www.baidu.com"},{img:"http://i1.mallcoo.cn/sp_mall/59x8n936-da71-4f8b-a11a-1be7150bfd77_750x440_4_0_80.jpg",url:"http://www.baidu.com"},{img:"http://i1.mallcoo.cn/sp_mall/57xcn6fc-c0cc-40c6-aff6-3dfd7d443c3a_750x440_4_0_80.jpg",url:"http://www.baidu.com"},{img:"http://i1.mallcoo.cn/sp_mall/51x3n301-73e7-4119-8924-09c400841f78_750x440_4_0_80.jpg",url:"http://www.baidu.com"},{img:"http://i1.mallcoo.cn/sp_mall/6503421e-235f-4787-90e0-ec45b146a097_750x440_4_0_80.jpg",url:"http://www.baidu.com"}],navs:[{title:"商户",img:"http://i1.mallcoo.cn/sp_mall/5dwey607-b6de-4bdb-96ee-830ab40ca42c_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"活动",img:"http://i1.mallcoo.cn/sp_mall/5bwbyc91-469d-476b-9b6c-62a473bab703_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"会员",img:"http://i1.mallcoo.cn/sp_mall/58wcydca-e740-4ce4-9937-723b654bd356_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"餐饮",img:"http://i1.mallcoo.cn/sp_mall/58w0yfd4-bdf4-4ac3-91e8-c165449ac5cd_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"团购",img:"http://i1.mallcoo.cn/sp_mall/5bw1yaab-c24c-4b25-8fe0-c17fe100c9dc_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"积分换礼",img:"http://i1.mallcoo.cn/sp_mall/60039cc2-5aaf-463a-b555-006082e2a78c_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"停车",img:"http://i1.mallcoo.cn/sp_mall/5awey2af-b185-4169-bfb5-fcfb86d0b81f_90x90_1_0_80.png",url:"http://www.baidu.com"},{title:"WiFi",img:"http://i1.mallcoo.cn/sp_mall/5dwey8c6-27a9-41a9-b4c4-52a8ce970cf2_90x90_1_0_80.png",url:"http://www.baidu.com"}],cells:[{title:"加入宁乐汇，送200积分！",intro:"加入宁乐汇，送200积分！",link:"http://www.baidu.com",icon:"http://i1.mallcoo.cn/sp_mall/56w6ld69-6780-42db-83dc-6fdde8b20aaf_40x40_1_0_80.png"}],ads:[{img:"http://i1.mallcoo.cn/sp_mall/5dyfx12f-b8a2-4324-9e8f-1fa7e71f003b_750x416_1_0_80.png",link:"http://www.baidu.com"}]}},components:{},computed:Object(i.c)({}),methods:e()({},Object(i.b)({getUserInfo:"getUserInfo"}))},s={render:function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"home-container"},[a("wv-header",{attrs:{fixed:!0,"background-color":"#ffffff"}},[a("div",{staticClass:"logo-title",attrs:{slot:"left"},slot:"left"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.logoImage}})]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.areaName))])]),t._v(" "),a("div",{staticClass:"member",attrs:{slot:"right"},on:{click:function(l){t.$router.push("/member")}},slot:"right"},[a("icon",{style:{color:"#A9A9A9"},attrs:{name:"user"}})],1)]),t._v(" "),a("wv-swipe",{attrs:{height:300,autoplay:3e3}},t._l(t.banners,function(t,l){return a("wv-swipe-item",{key:l},[a("img",{attrs:{src:t.img}})])})),t._v(" "),a("wv-grid",t._l(t.navs,function(l,c){return a("wv-grid-item",{key:c,attrs:{to:l.url}},[a("img",{attrs:{slot:"icon",src:l.img},slot:"icon"}),t._v(" "),a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(l.title))])])})),t._v(" "),a("wv-group",{staticClass:"home-cells"},t._l(t.cells,function(l,c){return a("wv-cell",{key:c,staticClass:"home-cell",attrs:{"is-link":"",to:l.link}},[a("img",{staticClass:"cell-icon",attrs:{slot:"icon",src:l.icon},slot:"icon"}),t._v(" "),a("span",{staticClass:"cell-title",attrs:{slot:"bd"},slot:"bd"},[t._v(t._s(l.title))])])})),t._v(" "),t._l(t.ads,function(t,l){return a("wv-flex",{key:l,staticClass:"home-ad"},[a("wv-flex-item",[a("div",{staticClass:"ad-item"},[a("img",{attrs:{src:t.img}})])])],1)})],2)},staticRenderFns:[]};var _=a("VU/8")(o,s,!1,function(t){a("EfNs")},"data-v-9d5e32e2",null);l.default=_.exports}});
//# sourceMappingURL=1.e32e7256f7ab5422f548.js.map