(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{291:function(e,t,n){"use strict";var r=n(28),o=n(48),c=n.n(o),l=n(112),m=n(115),component=Object(r.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("v-flex",{attrs:{xs12:"","pt-5":"","ma-5":"","text-xs-center":""}},[t("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}})],1)},[],!1,null,null,null);t.a=component.exports;c()(component,{VFlex:l.a,VProgressCircular:m.a})},292:function(e,t,n){e.exports=n.p+"img/67c1d70.jpg"},303:function(e,t,n){e.exports=n.p+"img/61a7890.jpg"},304:function(e,t,n){e.exports=n.p+"img/33371ff.jpg"},305:function(e,t,n){e.exports=n.p+"img/74ec6e8.jpg"},306:function(e,t,n){e.exports=n.p+"img/03aa161.jpg"},307:function(e,t,n){e.exports=n.p+"img/810ca0e.jpg"},308:function(e,t,n){e.exports=n.p+"img/9388b34.jpg"},309:function(e,t,n){e.exports=n.p+"img/7c6ae3a.jpg"},310:function(e,t,n){e.exports=n.p+"img/7d94abb.jpg"},311:function(e,t,n){e.exports=n.p+"img/71b7dd3.jpg"},312:function(e,t,n){e.exports=n.p+"img/e47641a.jpg"},325:function(e,t,n){var map={"./activity.jpg":292,"./index.jpg":177,"./vehicles/ducato/ducato.jpg":303,"./vehicles/iveco/iveco.jpg":304,"./vehicles/iveco/iveco2.jpg":305,"./vehicles/land/land.jpg":306,"./vehicles/land/land2.jpg":307,"./vehicles/land/land3.jpg":308,"./vehicles/land/land4.jpg":309,"./vehicles/mitsu/mitsubishi.jpg":310,"./vehicles/mitsu/mitsubishi2.jpg":311,"./vehicles/mitsu/mitsubishi3.jpg":312};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=325},342:function(e,t,n){"use strict";n.r(t);n(95);var r=n(23),o=n(291),c={props:{vehicleInfo:{required:!0,type:Object},vehicleInfoProps:{type:String,required:!0}},data:function(){return{labels:{keyInformation:{bodyType:"Tipo di veicolo",fuelType:"Tipo di carburante",mileage:"Chilometraggio",transmission:"Trasmissione",year:"Anno di immatricolazione",euro:"Classe ambientale del mezzo"},performance:{enginePower:"",engineSize:""},vehicleDescription:{colour:"Colore",fuelCapacity:"Capacità di carburante",seats:"Posti a sedere"}}}},methods:{composeLabels:function(element){return element}}},l=n(28),m=n(48),v=n.n(m),d=n(339),f=n(116),h=n(117),j=n(49),component=Object(l.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[e._l(e.vehicleInfo,function(t,i){return[n("v-list-tile",{key:i},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"subheading"},[e._v("\n          "+e._s(e.composeLabels(i))+"\n        ")]),e._v(" "),n("v-list-tile-sub-title",{staticClass:"body-2 text--gray"},[e._v("\n          "+e._s(t)+"\n        ")])],1)],1),e._v(" "),n("v-divider",{key:t})]})],2)},[],!1,null,null,null),x=component.exports;v()(component,{VDivider:d.a,VList:f.a,VListTile:h.a,VListTileContent:j.a,VListTileSubTitle:j.b,VListTileTitle:j.c});var y,_,w=n(130),C=n.n(w),V={head:{title:"Mezzi Operativi",meta:[{name:"og:title",content:"this.head.title "},{name:"og:description",content:""},{name:"og:type",content:"website"},{name:"og:url",content:"https://nuxtjs.org"},{name:"og:image",content:"https://nuxtjs.org/meta_640.png"}]},components:{Loader:o.a,VehicleInfoList:x},data:function(){return{vehicle:{},loading:!0,items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]}},mounted:(_=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchData();case 1:case"end":return e.stop()}},e,this)})),function(){return _.apply(this,arguments)}),methods:{getImgUrl:function(image){return image?n(325)("./"+image):n(292)},fetchData:(y=Object(r.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get(this.$axios.defaults.baseURL+"/vehicles/"+this.$route.params.id+".json").then(function(e){t.vehicle=e.data,t.loading=!1});case 1:case"end":return e.stop()}},e,this)})),function(){return y.apply(this,arguments)})}},k=n(288),L=n(351),T=n(352),O=n(120),I=n(112),z=n(113),D=Object(l.a)(V,function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{"grid-list-md":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[this.loading?t("loader"):[t("v-flex",{attrs:{sm12:"",md12:"",lg12:""}},[t("v-card",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{sm12:"",md4:"",lg4:""}},[t("v-carousel",{attrs:{"hide-delimiters":""}},this._l(this.items,function(e,i){return t("v-carousel-item",{key:i,attrs:{src:e.src}})}),1)],1),this._v(" "),t("v-flex",{attrs:{sm12:"",md8:"",lg8:""}},[t("h4",{staticClass:"title"},[this._v("KeyInformation")]),this._v(" "),t("vehicle-info-list",{attrs:{"vehicle-info":this.vehicle.keyInformation,"vehicle-info-props":"keyInformation"}})],1)],1)],1)],1)]],2)],1)},[],!1,null,null,null);t.default=D.exports;v()(D,{VCard:k.a,VCarousel:L.a,VCarouselItem:T.a,VContainer:O.a,VFlex:I.a,VLayout:z.a})}}]);