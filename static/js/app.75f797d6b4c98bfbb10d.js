webpackJsonp([1],{"/t8n":function(e,t){},"7zck":function(e,t){},EDHl:function(e,t){},H6z0:function(e,t){},KZ6S:function(e,t){},"LC/2":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("j1ja"),a("hKoQ"),a("j9g7");var s=a("7+uW"),n=a("3EgV"),i=a.n(n),o=new s.default,l=a("1e2d"),r=a.n(l),c=a("mvHQ"),d=a.n(c),g=a("M4fF"),v=a.n(g),p=a("DAYN"),u=a.n(p),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-difference-legend"},[a("table",{staticClass:"tg",staticStyle:{"table-layout":"fixed",width:"100%"}},[a("colgroup",[a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}}),e._v(" "),a("col",{staticStyle:{width:"15%"}})]),e._v(" "),a("tr",[a("th",{staticClass:"tg-s6z2"},[e._v("Naar →"),a("br"),e._v("Van↓ ")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("Water")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("verhar- "),a("br"),e._v("ding")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("gras/"),a("br"),e._v("akker"),a("br")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("riet/"),a("br"),e._v("ruigte"),a("br")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("bos")]),e._v(" "),a("th",{staticClass:"tg-s6z2"},[e._v("struweel")])]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[a("br"),e._v("Water"),a("br")]),e._v(" "),a("td",{staticClass:"tg-v22j"}),e._v(" "),a("td",{staticClass:"tg-7i1x"}),e._v(" "),a("td",{staticClass:"tg-ou2n"}),e._v(" "),a("td",{staticClass:"tg-vhk7"}),e._v(" "),a("td",{staticClass:"tg-36z7"}),e._v(" "),a("td",{staticClass:"tg-b6rt"})]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[e._v("verhar-"),a("br"),e._v("ding")]),e._v(" "),a("td",{staticClass:"tg-p4ol"}),e._v(" "),a("td",{staticClass:"tg-v22j"}),e._v(" "),a("td",{staticClass:"tg-7i1x"}),e._v(" "),a("td",{staticClass:"tg-ou2n"}),e._v(" "),a("td",{staticClass:"tg-vhk7"}),e._v(" "),a("td",{staticClass:"tg-36z7"})]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[e._v("gras/"),a("br"),e._v("akker")]),e._v(" "),a("td",{staticClass:"tg-4efi"}),e._v(" "),a("td",{staticClass:"tg-p4ol"}),e._v(" "),a("td",{staticClass:"tg-v22j"}),e._v(" "),a("td",{staticClass:"tg-7i1x"}),e._v(" "),a("td",{staticClass:"tg-ou2n"}),e._v(" "),a("td",{staticClass:"tg-vhk7"})]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[e._v("riet/"),a("br"),e._v("ruigte"),a("br")]),e._v(" "),a("td",{staticClass:"tg-8ah7"}),e._v(" "),a("td",{staticClass:"tg-4efi"}),e._v(" "),a("td",{staticClass:"tg-p4ol"}),e._v(" "),a("td",{staticClass:"tg-v22j"}),e._v(" "),a("td",{staticClass:"tg-7i1x"}),e._v(" "),a("td",{staticClass:"tg-ou2n"})]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[a("br"),e._v("bos"),a("br")]),e._v(" "),a("td",{staticClass:"tg-pt05"}),e._v(" "),a("td",{staticClass:"tg-8ah7"}),e._v(" "),a("td",{staticClass:"tg-4efi"}),e._v(" "),a("td",{staticClass:"tg-p4ol"}),e._v(" "),a("td",{staticClass:"tg-v22j"}),e._v(" "),a("td",{staticClass:"tg-7i1x"})]),e._v(" "),a("tr",[a("td",{staticClass:"tg-s6z2"},[a("br"),e._v("struweel"),a("br")]),e._v(" "),a("td",{staticClass:"tg-aup7"}),e._v(" "),a("td",{staticClass:"tg-pt05"}),e._v(" "),a("td",{staticClass:"tg-8ah7"}),e._v(" "),a("td",{staticClass:"tg-4efi"}),e._v(" "),a("td",{staticClass:"tg-p4ol"}),e._v(" "),a("td",{staticClass:"tg-v22j"})])])])}]};var f=a("VU/8")(null,m,!1,function(e){a("LC/2")},"data-v-20ca5c1f",null).exports,h="https://vegetatie-monitor.appspot.com",y={name:"layer-control",props:{layers:{type:Array,required:!0},map:{type:Object}},data:function(){return{firstImage:null,falseColor:"Natural colors",beginDate:"",endDate:"",vis:""}},computed:{computedList:{get:function(){return this.layers},set:function(e){o.$emit("select-layers",e)}}},watch:{layers:{handler:function(e){this.toggleLayers(),this.sortLayers(),o.$emit("select-layers",e)},deep:!0},firstImage:{handler:function(e){this.toggleLayers()},deep:!0},falseColor:{handler:function(e){this.setFalseColor(e)}}},mounted:function(){var e=this;o.$on("firstImage-changed",function(t){e.firstImage=t}),o.$on("selection-changed",function(t){t.beginDate&&(e.beginDate=t.beginDate),t.endDate&&(e.endDate=t.endDate)})},methods:{sortLayers:function(){for(var e=this.layers.length-2;e>=0;--e)for(var t=0;t<this.layers[e].data.length;++t)this.map.moveLayer(this.layers[e].data[t].id)},toggleLayers:function(){var e=this;if(!v.a.isNil(this.map)){var t=["none","visible"];v.a.each(this.layers,function(a){v.a.each(a.data,function(s){a.active&&("mapbox-layer"==a.layertype||"gee-layer"==a.layertype&&s.date===e.firstImage)?(e.map.setLayoutProperty(s.id,"visibility",t[1]),e.setOpacity(a,s)):e.map.setLayoutProperty(s.id,"visibility",t[0])})})}},setOpacity:function(e,t){if(e.opacity)try{var a,s=Math.max(.01*e.opacity,.01);"gee-layer"==e.layertype?a="raster-opacity":"fill"==t.type?a="fill-opacity":"line"==t.type&&(a="line-opacity"),a&&this.map.setPaintProperty(t.id,a,s)}catch(e){console.log("error setting opacity: "+s+"("+e.message+")")}},setFalseColor:function(e){var t=this;v.a.each(this.layers,function(e){e.visualisations&&(e.vis=e.visualisations.find(function(e){return e.name==t.falseColor}).vis,t.vis=e.vis)}),o.$emit("change-false-color",e)},colorRamp:function(e){if(e&&e.colors)return"background: linear-gradient(to right, "+e.colors.join()+");"},downloadGeotiff:function(e,t){var a=this.map.getBounds().getNorth(),s=this.map.getBounds().getEast(),n=this.map.getBounds().getSouth(),i=this.map.getBounds().getWest(),o={region:{type:"Polygon",coordinates:[[[i,a],[i,n],[s,n],[s,a],[i,a]]]},dateBegin:this.beginDate,dateEnd:this.endDate,vis:e};console.log("download Geotiff",h+"/map/"+t+"/export/",d()(o)),fetch(h+"/map/"+t+"/export/",{method:"POST",body:d()(o),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(url),window.open(e.url)})}},components:{draggable:u.a,"v-difference-legend":f}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-selection-panel",attrs:{value:0}},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\r\n        Kaartlagen\r\n      ")])],1),e._v(" "),a("v-expansion-panel",{staticClass:"panel"},[a("draggable",{staticClass:"draggable",attrs:{options:{handle:".draghandle"}},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.computedList,callback:function(t){e.computedList=t},expression:"computedList"}},e._l(e.layers,function(t){return a("v-expansion-panel-content",{key:t.id,attrs:{focusable:""}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("v-list",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[a("v-list-tile",{staticClass:"ma-0 pa-0"},[a("v-icon",{staticClass:"draghandle mr-2",attrs:{title:"Drag to change map layer drawing order"}},[e._v("drag_handle")]),e._v(" "),a("v-list-tile-action",{on:{click:function(e){e.stopPropagation()}}},[(e.map.getZoom()<10&("Classificatie vs Legger"===t.name^"Classificatie"===t.name))>0?a("v-tooltip",{attrs:{bottom:""}},[a("v-switch",{attrs:{slot:"activator",disabled:(e.map.getZoom()<10&("Classificatie vs Legger"===t.name^"Classificatie"===t.name))>0},slot:"activator",model:{value:t.active,callback:function(a){e.$set(t,"active",a)},expression:"layer.active"}}),e._v(" "),a("span",[e._v("\r\n                      Wanneer ingezoomd tot een klein genoeg gebied kan de classificatie uitgevoerd worden.\r\n                    ")])],1):e._e(),e._v(" "),(e.map.getZoom()<10&("Classificatie vs Legger"===t.name^"Classificatie"===t.name))>0==0?a("v-switch",{attrs:{slot:"activator"},slot:"activator",model:{value:t.active,callback:function(a){e.$set(t,"active",a)},expression:"layer.active"}}):e._e()],1),e._v(" "),a("v-list-tile-title",[e._v(e._s(t.name))]),e._v(" "),a("v-tooltip",{attrs:{bottom:""}},[t.download?a("v-btn",{attrs:{slot:"activator",small:"",ripple:!1,flat:"",icon:"",disabled:e.map.getZoom()<10},on:{click:function(a){a.stopPropagation(),e.downloadGeotiff(t.vis,t.dataset)}},slot:"activator"},[a("v-icon",[e._v("get_app")])],1):e._e(),e._v(" "),a("span",[e._v("\r\n                    Wanneer ingezoomd tot een klein genoeg gebied kan een geotiff gedownload worden.\r\n                  ")])],1),e._v(" "),a("v-list-tile-avatar",[a("img",{attrs:{src:t.icon}})])],1)],1)],1),e._v(" "),a("div",{staticClass:"ma-0 pl-5 pr-5"},[t.opacity?a("v-slider",{staticClass:"pa-0 ma-0",attrs:{"hide-details":"",title:"transparantie",min:1,max:100},model:{value:t.opacity,callback:function(a){e.$set(t,"opacity",a)},expression:"layer.opacity"}}):e._e(),e._v(" "),t.visualisations?a("v-select",{attrs:{items:t.visualisations,"item-text":"name","item-value":"name",item:""},model:{value:e.falseColor,callback:function(t){e.falseColor=t},expression:"falseColor"}}):e._e(),e._v(" "),t.legend?a("div",[t.legend.range?[t.legend.colors?a("div",{staticClass:"color-ramp",style:e.colorRamp(t.legend)}):e._e(),e._v(" "),a("div",{staticClass:"range-ramp"},[e._v(e._s(t.legend.range))])]:e._e(),e._v(" "),t.legend.colors&&t.legend.labels?e._l(t.legend.colors.length,function(s){return a("div",{key:s,staticClass:"color-label"},[a("span",{staticClass:"colored-span",style:"background-color: "+t.legend.colors[s-1]}),e._v(" "),a("label",{staticClass:"ma-1"},[e._v(e._s(t.legend.labels[s-1]))])])}):e._e()],2):e._e(),e._v(" "),"difference"==t.legendtable?a("v-difference-legend"):e._e()],1)])}))],1)],1)],1)},staticRenderFns:[]};var j=a("VU/8")(y,b,!1,function(e){a("mp5S")},"data-v-38f5fa3c",null).exports,k=a("//Fk"),C=a.n(k),w=a("WaEV"),x=a.n(w),D=a("l9mu"),S=a.n(D),z=(a("+2xD"),[{type:"1",name:"Water",color:"#bdeeff"},{type:"2",name:"Verhard oppervlak",color:"#ff817e"},{type:"3",name:"Gras en Akker",color:"#eefad4"},{type:"4",name:"Riet en Ruigte",color:"#debdde"},{type:"5",name:"Bos",color:"#73bf73"},{type:"6",name:"Struweel",color:"#d97a36"},{type:"0",name:"Geen Data",color:"#00000"}]),E={name:"v-analysis-control",props:{map:{type:Object},layers:{type:Array,required:!0},selection:{type:Object}},data:function(){return{perceelnumber:null,canvas:{},chart:{},workLoad:0,leggerLabels:[],leggerData:[],landuseLabels:[],landuseData:[],headers:[{text:"Eigenschap",align:"left",sortable:!1,value:"name",width:"40%"},{text:"Kwantiteit",value:"data",align:"left",sortable:!1,width:"60%"}],polygons:[],polygonSelected:!1,pagination:{rowsPerPage:4},selectMode:!1,selectLayer:""}},watch:{},mounted:function(){var e=this;o.$on("map-loaded",function(t){e.canvas.legger=e.$refs["legger-canvas"],e.canvas.legger.style.display="none",e.canvas.landuse=e.$refs["landuse-canvas"],e.canvas.landuse.style.display="none",e.map.on("mousemove",function(t){e.map.getCanvas().style.cursor="",e.map.setFilter("Kadasterlijnen",["==","ADMINPERCE",""]),e.map.setFilter("Vegetatielijnen",["==","OBJECTID",""]),e.selectMode||(e.polygons=[]);var a=e.map.queryRenderedFeatures(t.point);if(a&&a.length>0){var s=a[0],n=v.a.find(e.layers,{name:s.layer.id});if(n&&n.hoverFilter&&n.selectProperty){e.map.getCanvas().style.cursor="pointer";var i=e.map.getFilter(n.hoverFilter);i[2]=s.properties[n.selectProperty],e.map.setFilter(n.hoverFilter,i),e.selectMode||(e.selectLayer=n,v.a.each(a,function(t){t.layer.id===s.layer.id&&v.a.each(n.tableproperties,function(a){e.polygons.push({value:!1,name:a.name,data:t.properties[a.key]})})}))}}}),e.map.on("click",function(t){var a=e.map.queryRenderedFeatures(t.point);if(a&&a.length>0){var s=a[0],n=v.a.find(e.layers,{name:s.layer.id});if(n&&n.selectFilter&&n.selectProperty){e.selectMode=!0,e.selectLayer=n;var i=e.map.getFilter(n.selectFilter);i[2]=s.properties[n.selectProperty],e.map.setFilter(n.selectFilter,i),e.polygons=[],v.a.each(a,function(t){t.layer.id===s.layer.id&&v.a.each(n.tableproperties,function(a){e.polygons.push({value:!1,name:a.name,data:t.properties[a.key]})})}),e.perceelnumber=s.properties[n.selectProperty];var o={dateBegin:e.selection.beginDate,dateEnd:e.selection.endDate,region:{type:"FeatureCollection",features:[{type:"Feature",geometry:s.geometry,properties:{id:1}}]},scale:10};e.workLoad=0,e.clearPieChart("legger"),e.clearPieChart("landuse"),"Kadaster"==n.name?(e.loadPieChart("landuse","kadaster",o),e.loadPieChart("legger","kadaster",o)):e.loadPieChart("landuse","legger",o)}}})}),o.$on("selection-changed",function(t){t.beginDate&&(e.selection.beginDate=t.beginDate),t.endDate&&(e.selection.endDate=t.endDate)}),o.$on("select-layers",function(t){e.selectLayer&&!e.selectLayer.active&&e.closeSelectMode()})},methods:{loadPieChart:function(e,t,a){var s=this;this.workLoad++,fetch("https://vegetatie-monitor.appspot.com/map/"+e+"/zonal-info/",{method:"POST",body:d()(a),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){var n=[],i=[],o=[],l=0;v.a.each(a[0].area_per_type,function(e){l+=e.area}),v.a.each(a[0].area_per_type,function(e){n.push(v.a.find(z,{type:e.type}).name),i.push((e.area/l*100).toFixed(2)),o.push(v.a.find(z,{type:e.type}).color)}),"legger"===e?(s.leggerLabels=n,s.leggerData=i):"landuse"===e&&(s.landuseLabels=n,s.landuseData=i),s.canvas[e].style.display="block",s.chart[e]=s.makePieChart(s.canvas[e],n,i,o,l,"Verdeling van "+e+" klassen binnen "+t+" polygoon [%]"),s.workLoad--}).catch(function(e){console.log("Error loading zonal chart data: "+e.message),this.workLoad--})},makePieChart:function(e,t,a,s,n,i){return new x.a(e,{type:"doughnut",data:{labels:t,datasets:[{label:"Vegetatie klassen",backgroundColor:s,data:a}]},options:{title:{display:!0,text:i}}})},clearPieChart:function(e){this.canvas[e].style.display="none",this.chart[e]&&this.chart[e].destroy()},closeSelectMode:function(){this.clearPieChart("legger"),this.clearPieChart("landuse"),this.selectMode=!1,this.map.setFilter("KadasterSelect",["==","ADMINPERCE",""]),this.map.setFilter("VegetatieSelect",["==","OBJECTID",""]),this.polygons=[]},downloadSelection:function(){var e=this,t=new S.a,a=t.internal.pageSize.getWidth(),s=t.internal.pageSize.getHeight(),n=t.autoTableHtmlToJson(document.getElementsByClassName("v-table")[0]);t.autoTable(n.columns,n.data);var i=this.canvas.legger.toDataURL();t.addImage(i,"JPEG",.1*a,.2*s,.4*a,.2*a);i=this.canvas.landuse.toDataURL();t.addImage(i,"JPEG",.5*a,.2*s,.4*a,.2*a);var o=[];v.a.each(this.leggerLabels,function(t,a){o.push([t,e.leggerData[a]])}),t.autoTable(["Label","legger klassen [%]"],o,{startY:.35*s,tableWidth:.4*a,margin:{left:.05*a}});o=[];v.a.each(this.landuseLabels,function(t,a){o.push([t,e.landuseData[a]])}),t.autoTable(["Label","landuse klassen [%]"],o,{startY:.35*s,tableWidth:.4*a,margin:{left:.55*a}}),this.takeScreenshot(this.map).then(function(n){var i=e.map.getCanvas(),o=i.width,l=i.height;t.addImage(n,"JPEG",.05*a,.6*s,.9*a,.9*a/o*l),t.save(e.perceelnumber+".pdf")})},takeScreenshot:function(e){return new C.a(function(t,a){e.once("render",function(){t(e.getCanvas().toDataURL())}),e.setBearing(e.getBearing())})}},components:{},computed:{}},M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-analysis-control"},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\r\n        Analyse\r\n      ")])],1),e._v(" "),a("v-card",{attrs:{id:"analysistable"}},[e.selectMode?a("v-btn",{attrs:{outline:"",color:"indigo"},nativeOn:{click:function(t){e.closeSelectMode()}}},[e._v("Verwijder\r\n        "),a("v-icon",{attrs:{right:""}},[e._v("close")])],1):e._e(),e._v(" "),e.selectMode?a("v-btn",{attrs:{disabled:e.workLoad>0,outline:"",color:"indigo"},nativeOn:{click:function(t){e.downloadSelection()}}},[e._v("Download\r\n        "),a("v-icon",{attrs:{right:""}},[e._v("file_download")])],1):e._e(),e._v(" "),a("v-data-table",{attrs:{id:"data-table",headers:e.headers,"rows-per-page-text":"",rowsPerPageItems:[10],items:e.polygons,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs6-left"},[e._v(e._s(t.item.name))]),e._v(" "),a("td",{staticClass:"text-xs6-left"},[e._v(e._s(t.item.data))])]}}])}),e._v(" "),a("v-flex",{attrs:{xs2:"","offset-xs5":""}},[e.workLoad>0?a("v-progress-circular",{attrs:{indeterminate:""}}):e._e()],1),e._v(" "),a("canvas",{ref:"landuse-canvas"}),e._v(" "),a("canvas",{ref:"legger-canvas"})],1)],1)],1)},staticRenderFns:[]};var P=a("VU/8")(E,M,!1,function(e){a("/t8n")},null,null).exports,I=a("PJh5"),L=a.n(I),F="https://vegetatie-monitor.appspot.com";function B(e,t,a,s,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=t+"_"+a;if(e.getSource(l))e.removeLayer(l),e.removeSource(l);else{var r={id:l,type:"raster",date:a,source:{type:"raster",tiles:[],tileSize:256}},c={dateBegin:L()(a).format("YYYY-MM-DD"),dateEnd:L()(a).add(1,"d").format("YYYY-MM-DD"),region:s,vis:n};i&&(c.dateEnd=i,r.id=t+"_composite",r.date="composite"),console.log("getGeeComposite",F+"/map/"+t+"/",d()(c)),fetch(F+"/map/"+t+"/",{method:"POST",body:d()(c),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){r.source.tiles=[a.url],e.addLayer(r),o.$emit("add-data-layer",{dataset:t,layer:r})})}}var V=["satellite","ndvi","landuse","landuse-vs-legger"],R={coordinates:[[[4.54,52.71],[4.17,50.75],[6.2,50.7],[6.44,52.68],[4.54,52.71]]],geodesic:!0,type:"Polygon"},O={name:"v-selection-panel",props:{layers:{type:Array,required:!0},map:{type:Object},selection:{type:Object}},data:function(){return{beginDate:"2018-07-25",endDate:"2018-07-28",beginMenu:!1,endMenu:!1,firstImage:null,secondImage:null,imageMode:!1,Image1:[],Image2:[],firstImages:{},region:{},radioButtons:"radio-composite"}},mounted:function(){var e=this;this.emitSelection(),this.selection&&(this.beginDate=this.selection.beginDate,this.endDate=this.selection.endDate,this.firstImage=this.selection.firstImage,this.secondImage=this.selection.secondImage),o.$on("map-loaded",function(t){e.changeModus(),e.changeDates()}),o.$on("change-false-color",function(t){e.changeModus(["satellite"])})},watch:{beginDate:{handler:function(e){this.beginDate=e},deep:!0},endDate:{handler:function(e){this.endDate=e},deep:!0},beginMenu:{handler:function(e){!1===e&&(this.changeDates(),this.changeModus())},deep:!0},endMenu:{handler:function(e){!1===e&&(this.changeDates(),this.changeModus())},deep:!0},radioButtons:{handler:function(e){this.changeModus(["satellite","ndvi"])},deep:!0},firstImage:{handler:function(e){this.changeFirstImageDate(["satellite","ndvi"])},deep:!0}},methods:{changeModus:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;console.log("clicked"),o.$emit("firstImage-changed","composite"),"radio-composite"==this.radioButtons?v.a.each(t,function(t){o.$emit("remove-data-layer",{dataset:t});var a=v.a.find(e.layers,{dataset:t}).vis;if(e.region=R,("landuse"===t||"landuse-vs-legger"===t)&&e.map.getZoom()>10){var s=e.map.getBounds().getNorth(),n=e.map.getBounds().getEast(),i=e.map.getBounds().getSouth(),l=e.map.getBounds().getWest();e.region={type:"Polygon",coordinates:[[[l,s],[l,i],[n,i],[n,s],[l,s]]]},B(e.map,t,e.beginDate,e.region,a,e.endDate)}else"landuse"!=t&&"landuse-vs-legger"!=t&&B(e.map,t,e.beginDate,e.region,a,e.endDate)}):this.changeFirstImageDate(t)},changeFirstImageDate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;o.$emit("firstImage-changed",this.firstImage),v.a.each(t,function(t){var a=v.a.find(e.layers,"dataset",t);if(void 0==v.a.find(a.data,{date:e.firstImage})){var s=(a=v.a.find(e.layers,{dataset:t})).vis;if(e.region=R,("landuse"===t||"landuse-vs-legger"===t)&&e.map.getZoom()>10){var n=e.map.getBounds().getNorth(),i=e.map.getBounds().getEast(),o=e.map.getBounds().getSouth(),l=e.map.getBounds().getWest();e.region={type:"Polygon",coordinates:[[[l,n],[l,o],[i,o],[i,n],[l,n]]]},B(e.map,t,e.firstImage,e.region,s)}else"landuse"!=t&&"landuse-vs-legger"!=t&&B(e.map,t,e.firstImage,e.region,s)}})},changeDates:function(){var e=this,t={dateBegin:this.beginDate,dateEnd:this.endDate,region:this.region};console.log("change Dates","https://vegetatie-monitor.appspot.com/map/satellite/times/",d()(t));fetch("https://vegetatie-monitor.appspot.com/map/satellite/times/",{method:"POST",body:d()(t),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=[];v.a.each(t.image_times,function(s,n){a.push(L()(t.image_times[n]).format("YYYY-MM-DD")),e.firstImages[s]=t.image_ids[n]}),e.Image1=a,e.Image2=a});this.emitSelection()},emitSelection:function(){this.selection.beginDate=this.beginDate,this.selection.endDate=this.endDate,o.$emit("selection-changed",this.selection)},checkClassificationButton:function(){return console.log("click"),null===this.map||(console.log(this.map.getZoom()<10),this.map.getZoom()<10)}},components:{}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-expansion-panel",{staticClass:"v-selection-panel"},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\n        Selecteer Beeld\n      ")])],1),e._v(" "),a("v-list",{attrs:{dense:"","pt-0":""}},[a("v-list-tile",{attrs:{"pt-0":"",id:"selection"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"",sm5:""}},[a("v-menu",{ref:"beginMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.beginDate},on:{"update:returnValue":function(t){e.beginDate=t}},model:{value:e.beginMenu,callback:function(t){e.beginMenu=t},expression:"beginMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start datum","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}},[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.beginMenu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.beginMenu.save(e.beginDate)}}},[e._v("OK")])],1)],1)],1),e._v(" "),a("v-flex",{attrs:{xs8:"",sm5:"","offset-xs1":""}},[a("v-menu",{ref:"endMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.endDate},on:{"update:returnValue":function(t){e.endDate=t}},model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Eind datum","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.endMenu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.endMenu.save(e.endDate)}}},[e._v("OK")])],1)],1)],1)],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list-tile",[a("v-radio-group",{attrs:{row:"",dense:""},model:{value:e.radioButtons,callback:function(t){e.radioButtons=t},expression:"radioButtons"}},[a("v-radio",{attrs:{label:"Composiet",value:"radio-composite"}}),e._v(" "),a("v-radio",{attrs:{label:"1 beeld",value:"radio-1-image"}})],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list-tile",[a("v-list-tile-title",[e._v("Selecteer beeld(en) voor analyse: ")])],1),e._v(" "),a("v-list-tile",{attrs:{id:"selection"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"",sm5:""}},[a("v-select",{attrs:{disabled:"radio-composite"===e.radioButtons,items:e.Image1,label:"Beeld 1","prepend-icon":"insert_photo","single-line":""},model:{value:e.firstImage,callback:function(t){e.firstImage=t},expression:"firstImage"}})],1)],1)],1)],1)],1)],1),e._v(" "),a("v-expansion-panel",{staticClass:"v-selection-panel"},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\n        Classificatie\n      ")])],1),e._v(" "),a("v-list-tile",[a("v-btn",{attrs:{disabled:e.checkClassificationButton(),outline:"",color:"indigo"},nativeOn:{click:function(t){e.changeModus(["landuse","landuse-vs-legger"])}}},[e._v("Classificeer huidig gebied\n          "),a("v-icon",{attrs:{right:""}},[e._v("refresh")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var T=a("VU/8")(O,N,!1,function(e){a("KZ6S")},"data-v-067d4f59",null).exports,$=[{name:"Natural colors",vis:{bands:["red","green","blue"],min:.05,max:[.35,.35,.45],gamma:1.4}},{name:"False color infrared",vis:{bands:["nir","red","green"],min:.05,max:.35,gamma:1.4}},{name:"False color urban",vis:{bands:["swir2","swir","red"],min:.05,max:.35,gamma:1.4}},{name:"Agriculture",vis:{bands:["swir","nir","blue"],min:.05,max:.35,gamma:1.4}},{name:"Healthy vegetation",vis:{bands:["nir","swir","blue"],min:.05,max:.35,gamma:1.4}},{name:"Vegetation Analysis",vis:{bands:["swir","nir","red"],min:.05,max:.35,gamma:1.4}}],q=[{layertype:"mapbox-layer",name:"Kadaster",icon:"static/images/legend-kadaster.png",opacity:100,active:!1,hoverFilter:"Kadasterlijnen",selectFilter:"KadasterSelect",selectProperty:"ADMINPERCE",data:[{id:"Kadaster",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"fill-color":"rgba(32, 32, 32, 0.3)","fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"Kadasterlijnen",type:"line",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"line-color":{type:"identity",property:"stroke"},"line-width":4},filter:["==","ADMINPERCE",""]},{id:"KadasterSelect",type:"line",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"line-color":{type:"identity",property:"stroke"},"line-width":4},filter:["==","ADMINPERCE",""]}],tableproperties:[{name:"Perceel nummer",key:"ADMINPERCE"},{name:"Gemeente",key:"GEMEENTE"},{name:"Grootte",key:"GROOTTE"}]},{layertype:"mapbox-layer",name:"Stroombanen",icon:"static/images/legend-stroombaan.png",opacity:100,active:!0,data:[{id:"Streamlines",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.4puwiyv9"},"source-layer":"stroombaan-8ndp71",paint:{"fill-color":"rgba(51, 163, 255, 0.2)","fill-outline-color":"rgba(51, 163, 255, 1)"}}]},{layertype:"gee-layer",name:"Classificatie vs Legger",icon:"static/images/legend-classified.png",opacity:100,active:!1,dataset:"landuse-vs-legger",legendtable:"difference",data:[],vis:{}},{layertype:"gee-layer",name:"Classificatie",icon:"static/images/legend-classified.png",download:!0,opacity:100,active:!1,dataset:"landuse",legend:{colors:["#bdeeff","#ff817e","#eefad4","#debdde","#73bf73","#d97a36"],labels:["water","bebouwd of verhard","gras en akker","riet en ruigte","bos","struweel"]},data:[],vis:{}},{layertype:"mapbox-layer",name:"Vegetatielegger",icon:"static/images/legend-legger.png",opacity:100,active:!0,type:"group",legend:{colors:["#a3e0ff","#ff827e","#eefad4","#debdde","#73bf73","#d97a36","#ffec80","#f2d218","#d9bb16"],labels:["water","bebouwd of verhard","gras en akker","riet en ruigte","bos","struweel","mengklasse 90/10","mengklasse 70/30","mengklasse 50/50"]},hoverFilter:"Vegetatielijnen",selectFilter:"VegetatieSelect",selectProperty:"OBJECTID",data:[{id:"Vegetatielegger",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.87a2u39q"},"source-layer":"vegetatie-vlakken-596nr3",paint:{"fill-color":{base:1,type:"categorical",property:"KLASSE",stops:[["Water","rgba(191, 239, 255, 255)"],["Verhard oppervlak","rgb(255, 129, 126)"],["Gras en Akker","rgb(238, 250, 212)"],["Riet en Ruigte","rgb(222, 189, 222)"],["Bos","rgb(115, 191, 115)"],["Struweel","rgb(217, 122, 54)"],["90-10","rgb(255, 236, 128)"],["70-30","rgb(242, 210, 24)"],["50-50","rgb(217, 187, 22)"]],default:"rgba(0, 0, 0, 0)"}}},{id:"Vegetatielijnen",type:"line",source:{type:"vector",url:"mapbox://ellispenning.87a2u39q"},"source-layer":"vegetatie-vlakken-596nr3",paint:{"line-color":"rgb(0, 128, 0)","line-width":2},filter:["==","OBJECTID",""]},{id:"VegetatieSelect",type:"line",source:{type:"vector",url:"mapbox://ellispenning.87a2u39q"},"source-layer":"vegetatie-vlakken-596nr3",paint:{"line-color":"rgb(0, 128, 0)","line-width":2},filter:["==","OBJECTID",""]}],tableproperties:[{name:"Vegetatieklasse",key:"VL_KLASSE"},{name:"Mengklasse",key:"MENGKLASSE"},{name:"Stroombaan",key:"STROOMBAAN"}]},{layertype:"gee-layer",name:"Vegetatie (NDVI)",icon:"static/images/legend-ndvi.png",opacity:100,active:!1,download:!0,dataset:"ndvi",legend:{colors:["#000000","#252525","#525252","#737373","#969696","#bdbdbd","#d9d9d9","#f0f0f0","#ffffff","#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],range:"-1 1"},data:[],vis:{}},{layertype:"gee-layer",name:"Satelliet beelden",icon:"static/images/legend-rgb.png",download:!0,opacity:100,active:!1,dataset:"satellite",data:[],vis:$[0].vis,visualisations:$}],A={name:"v-map-layers",data:function(){return{map:null}},methods:{deferredMountedTo:function(e){_.each(q,function(t){o.$emit("add-layer",t),"mapbox-layer"===t.layertype&&_.each(t.data,function(t){e.addLayer(t)})})}}},K={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"v-map-layers"}})},staticRenderFns:[]};var W={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-expansion-panel",{staticClass:"v-colofon"},[t("v-expansion-panel-content",[t("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[t("v-toolbar-title",[this._v("\r\n        Colofon\r\n      ")])],1),this._v(" "),t("v-card",{attrs:{small:""}},[t("v-card-title",{attrs:{"primary-title":""}},[t("pre",[this._v("\r\nVoor algemene vragen over de vegetatiemonitor en de achtergronden bij deze ontwikkeling: "),t("a",{attrs:{href:"mailto:stanford.wilson@rws.nl?subject=Vegetatiemonitor"}},[this._v("Stanford Wilson")]),this._v("\r\nDownload "),t("a",{attrs:{href:"static/docs/TRM.pdf",download:""}},[this._v("hier")]),this._v(" de Technische referentie handleiding.\r\n        ")])])],1)],1)],1)},staticRenderFns:[]};var G={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-dialog",{attrs:{persistent:"",scrollable:"",width:"50vw","max-width":"40vw"},model:{value:e.disclaimer,callback:function(t){e.disclaimer=t},expression:"disclaimer"}},[a("v-card",{attrs:{light:""}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("\n          Disclaimer\n        ")])]),e._v(" "),a("v-card-text",[e._v("\n        Welkom bij de Vegetatiemonitor versie 0.1. Deze quickscan-tool wordt ontwikkeld door Rijkswaterstaat en Deltares en is alleen te gebruiken als een eerste screening van de staat van de vegetatie in de uiterwaarden van het Nederlandse rivierengebied voor het geselecteerde satellietbeeld. Rijkswaterstaat en Deltares doen hun uiterste best om correcte resultaten te geven maar kunnen dit momenteel niet volledig garanderen. Aan de resultaten van de classificatie-beelden kunnen dus geen rechten worden ontleend.\n      ")]),e._v(" "),a("v-card-actions",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),e.disclaimer=!1}}},[e._v("Accepteer en naar website")])],1)],1)],1)],1)},staticRenderFns:[]};var H={name:"app",data:function(){return{map:null,layers:[],selection:{beginDate:"2018-07-25",endDate:"2018-07-28",firstImage:null,secondImage:null},drawer:null}},mounted:function(){var e=this;this.map=this.$refs.map.map,this.map.addControl(new r.a.ScaleControl({maxWidth:80,unit:"metric"})),o.$on("remove-data-layer",function(t){var a=_.find(e.layers,{dataset:t.dataset});_.each(a.data,function(s,n){void 0!=s&&s.id===t.dataset+"_composite"&&(a.data.splice(n,1),console.log("removing stuff",s.id),e.map.removeLayer(s.id),e.map.removeSource(s.id))})}),o.$on("add-data-layer",function(t){_.find(e.layers,{dataset:t.dataset}).data.push(t.layer)}),o.$on("select-layers",function(t){s.default.set(e,"layers",t)}),o.$on("add-layer",function(t){e.layers.push(t)}),this.map.on("load",function(t){o.$emit("map-loaded",e.map)}),this.map.on("error",function(t){429===t.error.status&&(e.map.getSource(t.sourceId).tiles=t.source.tiles);console.log("error",t)})},methods:{},components:{"v-layer-control":j,"v-selection-panel":T,"v-map-layers":a("VU/8")(A,K,!1,function(e){a("dcLN")},null,null).exports,"v-analysis-control":P,"v-colofon":a("VU/8")(null,W,!1,function(e){a("H6z0")},"data-v-3afd1d25",null).exports,"v-disclaimer":a("VU/8")({data:function(){return{disclaimer:!0}}},G,!1,function(e){a("EDHl")},null,null).exports}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-disclaimer"),e._v(" "),a("v-navigation-drawer",{attrs:{width:"400",id:"navdrawer",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-layer-control",{attrs:{layers:e.layers,map:e.map}}),e._v(" "),a("v-selection-panel",{attrs:{layers:e.layers,map:e.map,selection:e.selection}}),e._v(" "),a("v-analysis-control",{attrs:{layers:e.layers,map:e.map,selection:e.selection}}),e._v(" "),a("v-colofon")],1),e._v(" "),a("v-toolbar",{attrs:{xs6:"",color:"grey lighten-4",fixed:"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),a("v-toolbar-title",[e._v("Vegetatie Monitor")]),e._v(" "),a("v-spacer"),e._v(" "),a("div",{staticClass:"logos v-toolbar__items hidden-sm-and-down"},[a("img",{staticClass:"logos",attrs:{src:"static/images/deltares.svg"}})]),e._v(" "),a("div",{staticClass:"logos v-toolbar__items hidden-sm-and-down"},[a("img",{staticClass:"logos",attrs:{src:"static/images/Rijkswaterstaat.svg"}})])],1),e._v(" "),a("v-content",[a("div",{attrs:{id:"map"}},[a("v-mapbox",{ref:"map",attrs:{"access-token":"pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA","map-style":"mapbox://styles/mapbox/light-v9",center:[5.673272,52.079502],zoom:7.88,pitch:0,bearing:0,"min-zoom":5,id:"map"}},[a("v-map-layers"),e._v(" "),a("v-mapbox-geocoder"),e._v(" "),a("v-mapbox-navigation-control")],1)],1)])],1)},staticRenderFns:[]};var Y=a("VU/8")(H,U,!1,function(e){a("vpaQ")},null,null).exports,J=a("5BM0"),Z=a.n(J);a("7zck");s.default.use(Z.a),s.default.use(i.a),s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App/>",components:{App:Y}})},dcLN:function(e,t){},mp5S:function(e,t){},uslO:function(e,t,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return a(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="uslO"},vpaQ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.75f797d6b4c98bfbb10d.js.map