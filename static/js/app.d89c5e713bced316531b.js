webpackJsonp([1],{"7zck":function(e,t){},AORA:function(e,t){},"Hp+G":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("j1ja"),a("hKoQ"),a("j9g7");var s=a("7+uW"),n=a("3EgV"),i=a.n(n),r=new s.a,o=a("1e2d"),l=a.n(o),c=a("M4fF"),d=a.n(c),p=a("DAYN"),m={name:"layer-control",props:{layers:{type:Array,required:!0},map:{type:Object}},data:function(){return{firstImage:null,falseColor:"Natural colors"}},computed:{computedList:{get:function(){return this.layers},set:function(e){r.$emit("select-layers",e)}}},watch:{layers:{handler:function(e){this.toggleLayers(),this.sortLayers()},deep:!0},firstImage:{handler:function(e){this.toggleLayers()},deep:!0},falseColor:{handler:function(e){this.setFalseColor(e)}}},mounted:function(){var e=this;r.$on("firstImage-changed",function(t){e.firstImage=t})},methods:{sortLayers:function(){for(var e=this.layers.length-2;e>=0;--e)for(var t=0;t<this.layers[e].data.length;++t)this.map.moveLayer(this.layers[e].data[t].id)},toggleLayers:function(){var e=this;if(!d.a.isNil(this.map)){var t=["none","visible"];d.a.each(this.layers,function(a){d.a.each(a.data,function(s){a.active&&("mapbox-layer"==a.layertype||"gee-layer"==a.layertype&&s.date===e.firstImage)?(e.map.setLayoutProperty(s.id,"visibility",t[1]),e.setOpacity(a,s)):e.map.setLayoutProperty(s.id,"visibility",t[0])})})}},setOpacity:function(e,t){if(e.opacity)try{var a,s=Math.max(.01*e.opacity,.01);"gee-layer"==e.layertype?a="raster-opacity":"fill"==t.type?a="fill-opacity":"line"==t.type&&(a="line-opacity"),a&&this.map.setPaintProperty(t.id,a,s)}catch(e){console.log("error setting opacity: "+s+"("+e.message+")")}},setFalseColor:function(e){var t=this;d.a.each(this.layers,function(e){e.visualisations&&(e.vis=e.visualisations.find(function(e){return e.name==t.falseColor}).vis)}),r.$emit("map-loaded",this.map)},colorRamp:function(e){if(e&&e.colors)return"background: linear-gradient(to right, "+e.colors.join()+");"}},components:{draggable:a.n(p).a}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-selection-panel"},[a("v-expansion-panel-content",{attrs:{value:"true"}},[a("v-toolbar",{staticClass:"toolbar ",attrs:{slot:"header",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\n        Kaartlagen\n      ")])],1),e._v(" "),a("v-expansion-panel",{staticClass:"panel"},[a("draggable",{staticClass:"draggable",attrs:{options:{handle:".header__icon"}},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.computedList,callback:function(t){e.computedList=t},expression:"computedList"}},e._l(e.layers,function(t){return a("v-expansion-panel-content",{key:t.id,attrs:{focusable:"","expand-icon":"more_vert"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("v-list",{staticClass:"ma-1 pa-0",attrs:{dense:""}},[a("v-list-tile",{staticClass:"ma-0 pa-0",on:{click:function(e){e.stopPropagation()}}},[a("v-list-tile-action",[a("v-switch",{model:{value:t.active,callback:function(a){e.$set(t,"active",a)},expression:"layer.active"}})],1),e._v(" "),a("v-list-tile-title",[e._v(e._s(t.name))]),e._v(" "),a("v-list-tile-avatar",[a("img",{attrs:{src:t.icon}})])],1)],1)],1),e._v(" "),a("div",{staticClass:"ma-0 pl-5 pr-5"},[t.opacity?a("v-slider",{staticClass:"pa-0 ma-0",attrs:{"hide-details":"",title:"transparantie",min:1,max:100},model:{value:t.opacity,callback:function(a){e.$set(t,"opacity",a)},expression:"layer.opacity"}}):e._e(),e._v(" "),t.visualisations?a("v-select",{attrs:{items:t.visualisations,"item-text":"name","item-value":"name",item:""},model:{value:e.falseColor,callback:function(t){e.falseColor=t},expression:"falseColor"}}):e._e(),e._v(" "),t.legend?a("div",[t.legend.range?[t.legend.colors?a("div",{staticClass:"color-ramp",style:e.colorRamp(t.legend)}):e._e(),e._v(" "),a("div",{staticClass:"range-ramp"},[e._v(e._s(t.legend.range))])]:e._e(),e._v(" "),t.legend.colors&&t.legend.labels?e._l(t.legend.colors.length,function(s){return a("div",{key:s,staticClass:"color-label"},[a("span",{staticClass:"colored-span",style:"background-color: "+t.legend.colors[s-1]}),e._v(" "),a("label",{staticClass:"ma-1"},[e._v(e._s(t.legend.labels[s-1]))])])}):e._e()],2):e._e()],1)])}))],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")(m,u,!1,function(e){a("sFM2")},"data-v-57f4ded7",null).exports,g=a("mvHQ"),f=a.n(g),y=a("WaEV"),h=a.n(y),b=[{type:"1",name:"Water",color:"#bdeeff"},{type:"2",name:"Verhard oppervlak",color:"#ff817e"},{type:"3",name:"Gras en Akker",color:"#eefad4"},{type:"4",name:"Riet en Ruigte",color:"#debdde"},{type:"5",name:"Bos",color:"#73bf73"},{type:"6",name:"Struweel",color:"#d97a36"},{type:"0",name:"",color:"#00000"}],j={name:"v-analysis-control",props:{layers:{type:Array,required:!0},map:{type:Object}},data:function(){return{piechart:null,progressActive:!1,headers:[{text:"Eigenschap",align:"left",sortable:!1,value:"name",width:"40%"},{text:"Kwantiteit",value:"data",align:"left",sortable:!1,width:"60%"}],items:[],polygonSelected:!1,pagination:{rowsPerPage:4},selectMode:!1}},watch:{},mounted:function(){var e=this;r.$on("map-loaded",function(t){var a=document.getElementById("doughnut-chart");a.style.display="none",e.map.on("mousemove",function(t){e.map.getCanvas().style.cursor="";var a=e.map.queryRenderedFeatures(t.point);if(e.map.setFilter("Kadasterlijnen",["==","ADMINPERCE",""]),void 0!==d.a.find(a[0],{id:"Kadaster"})&&(e.map.getCanvas().style.cursor="pointer",e.map.setFilter("Kadasterlijnen",["==","ADMINPERCE",a[0].properties.ADMINPERCE]),!1===e.selectMode)){e.items=[];var s=d.a.find(e.layers,{name:"Kadaster"});d.a.each(a,function(t){"Kadaster"===t.layer.id&&d.a.each(s.tableproperties,function(a){e.items.push({value:!1,name:a.name,data:t.properties[a.key]})})})}}),e.map.on("click",function(t){null!==e.piechart&&e.piechart.destroy(),e.progressActive=!0,a.style.display="none";var s=e.map.queryRenderedFeatures(t.point),n=d.a.find(s[0],{id:"Kadaster"});if(e.map.setFilter("KadasterSelect",["==","ADMINPERCE",s[0].properties.ADMINPERCE]),void 0!==n){e.items=[],e.selectMode=!0,a.style.display="block";var i=d.a.find(e.layers,{name:"Kadaster"});d.a.each(s,function(t){"Kadaster"===t.layer.id&&d.a.each(i.tableproperties,function(a){e.items.push({value:!1,name:a.name,data:t.properties[a.key]})})});var r={region:{type:"FeatureCollection",features:[{type:"Feature",geometry:s[0].geometry,properties:{id:1}}]},scale:100};fetch("http://vegetatie-monitor.appspot.com/map/legger/zonal-info/",{method:"POST",body:f()(r),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var s=[],n=[],i=[],r=0;d.a.each(t[0].area_per_type,function(e){r+=e.area}),d.a.each(t[0].area_per_type,function(e){s.push(d.a.find(b,{type:e.type}).name),n.push((e.area/r*100).toFixed(2)),i.push(d.a.find(b,{type:e.type}).color)}),e.progressActive=!1,e.makePieChart(a,s,n,i,r)})}})})},methods:{makePieChart:function(e,t,a,s,n){this.piechart=new h.a(e,{type:"doughnut",data:{labels:t,datasets:[{label:"Vegetatie klassen",backgroundColor:s,data:a}]},options:{title:{display:!0,text:"Verdeling van vegetatieklassen binnen kadaster polygoon [%]"}}})},closeSelectMode:function(){this.selectMode=!1,this.map.setFilter("KadasterSelect",["==","ADMINPERCE",""]),document.getElementById("doughnut-chart").style.display="none",this.piechart.destroy(),this.piechart=null}},components:{},computed:{}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-analysis-control"},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar ",attrs:{slot:"header",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\n        Analyse\n      ")])],1),e._v(" "),a("v-card",{attrs:{id:"analysistable"}},[e.selectMode?a("v-btn",{attrs:{outline:"",color:"indigo"},nativeOn:{click:function(t){e.closeSelectMode()}}},[e._v("Verwijder selectie\n        "),a("v-icon",{attrs:{right:""}},[e._v("close")])],1):e._e(),e._v(" "),a("v-data-table",{attrs:{headers:e.headers,"rows-per-page-text":"",rowsPerPageItems:[10],items:e.items,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs6-left"},[e._v(e._s(t.item.name))]),e._v(" "),a("td",{staticClass:"text-xs6-left"},[e._v(e._s(t.item.data))])]}}])}),e._v(" "),a("v-flex",{attrs:{xs2:"","offset-xs5":""}},[e.progressActive?a("v-progress-circular",{attrs:{indeterminate:""}}):e._e()],1),e._v(" "),a("canvas",{attrs:{id:"doughnut-chart"}})],1)],1)],1)},staticRenderFns:[]};var x=a("VU/8")(j,k,!1,function(e){a("AORA")},null,null).exports,w=a("PJh5"),C=a.n(w),E="http://vegetatie-monitor.appspot.com";function M(e,t,a,s,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o={id:t+"_"+a,type:"raster",date:a,source:{type:"raster",tiles:[],tileSize:256}},l={dateBegin:C()(a).format("YYYY-MM-DD"),region:s,vis:n};i&&(l.dateEnd=i,o.id=t+"_composite",o.date="composite"),fetch(E+"/map/"+t+"/",{method:"POST",body:f()(l),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){o.source.tiles=[a.url],e.addLayer(o),r.$emit("add-data-layer",{dataset:t,layer:o})})}var I=["satellite","ndvi","landuse","landuse-vs-legger"],D={name:"v-selection-panel",props:{layers:{type:Array,required:!0},map:{type:Object}},data:function(){return{beginDate:"2016-07-20",endDate:"2016-07-21",beginMenu:!1,endMenu:!1,firstImage:null,secondImage:null,imageMode:!1,Image1:[],Image2:[],firstImages:{},region:{coordinates:[[[5.846,51.984],[5.849,51.961],[5.91,51.96],[5.916,51.985],[5.877,51.99],[5.846,51.984]]],geodesic:!0,type:"Polygon"},radioButtons:"radio-composite"}},mounted:function(){var e=this;r.$on("map-loaded",function(t){e.changeModus(),e.changeDates()})},watch:{beginDate:{handler:function(e){this.changeDates(),this.changeModus()},deep:!0},endDate:{handler:function(e){this.changeDates(),this.changeModus()},deep:!0},radioButtons:{handler:function(e){this.changeModus()},deep:!0},firstImage:{handler:function(e){this.changeFirstImageDate()},deep:!0}},methods:{changeModus:function(){var e=this;r.$emit("firstImage-changed","composite"),"radio-composite"==this.radioButtons&&d.a.each(I,function(t){r.$emit("remove-data-layer",{dataset:t});var a=d.a.find(e.layers,{dataset:t}).vis;M(e.map,t,e.beginDate,e.region,a,e.endDate)})},changeFirstImageDate:function(){var e=this;r.$emit("firstImage-changed",this.firstImage),d.a.each(I,function(t){var a=d.a.find(e.layers,"dataset",t);if(void 0==d.a.find(a.data,{date:e.firstImage})){var s=(a=d.a.find(e.layers,{dataset:t})).vis;M(e.map,t,e.firstImage,e.region,s)}})},changeDates:function(){var e=this;d.a.each(I,function(t){var a=d.a.find(e.layers,"dataset","satellite").vis,s={dateBegin:e.beginDate,dateEnd:e.endDate,region:e.region,vis:a};fetch("http://vegetatie-monitor.appspot.com/map/satellite/times/",{method:"POST",body:f()(s),mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=[];d.a.each(t.image_times,function(s,n){a.push(C()(t.image_times[n]).format("YYYY-MM-DD")),e.firstImages[s]=t.image_ids[n]}),e.Image1=a,e.Image2=a})})}},components:{}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-selection-panel"},[a("v-expansion-panel-content",[a("v-toolbar",{staticClass:"toolbar ",attrs:{slot:"header",flat:"",color:"grey lighten-4"},slot:"header"},[a("v-toolbar-title",[e._v("\n        Selecteer Beeld\n      ")])],1),e._v(" "),a("v-list",{attrs:{dense:"","pt-0":"","three-line":""}},[a("v-list-tile",{attrs:{dense:"","pt-0":"",id:"selection"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"",sm5:""}},[a("v-menu",{ref:"beginMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.beginDate},on:{"update:returnValue":function(t){e.beginDate=t}},model:{value:e.beginMenu,callback:function(t){e.beginMenu=t},expression:"beginMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}},[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.beginMenu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.beginMenu.save(e.beginDate)}}},[e._v("OK")])],1)],1)],1),e._v(" "),a("v-flex",{attrs:{xs8:"",sm5:"","offset-xs1":""}},[a("v-menu",{ref:"endMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.endDate},on:{"update:returnValue":function(t){e.endDate=t}},model:{value:e.endMenu,callback:function(t){e.endMenu=t},expression:"endMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"End date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.endMenu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.endMenu.save(e.endDate)}}},[e._v("OK")])],1)],1)],1)],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list-tile",[a("v-radio-group",{attrs:{row:"",dense:""},model:{value:e.radioButtons,callback:function(t){e.radioButtons=t},expression:"radioButtons"}},[a("v-radio",{attrs:{label:"Composite",value:"radio-composite"}}),e._v(" "),a("v-radio",{attrs:{label:"1 image",value:"radio-1-image"}}),e._v(" "),a("v-radio",{attrs:{disabled:"",label:"2 images",value:"radio-2-image"}})],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list-tile",[a("v-list-tile-title",[e._v("Select the range of dates to get Images: ")])],1),e._v(" "),a("v-list-tile",{attrs:{id:"selection"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"",sm5:""}},[a("v-select",{attrs:{disabled:"radio-composite"==e.radioButtons,items:e.Image1,label:"Image 1","prepend-icon":"insert_photo","single-line":""},model:{value:e.firstImage,callback:function(t){e.firstImage=t},expression:"firstImage"}})],1),e._v(" "),a("v-flex",{attrs:{xs8:"",sm5:"","offset-xs1":""}},[a("v-select",{attrs:{smaller:"",disabled:"",items:e.Image2,label:"Image 2","prepend-icon":"insert_photo","single-line":""},model:{value:e.secondImage,callback:function(t){e.secondImage=t},expression:"secondImage"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(D,z,!1,function(e){a("rZ9p")},"data-v-7fdc6cec",null).exports,P=[{name:"Natural colors",vis:{bands:["red","green","blue"],min:.05,max:[.35,.35,.45],gamma:1.4}},{name:"False color infrared",vis:{bands:["nir","red","green"],min:.05,max:.35,gamma:1.4}},{name:"False color urban",vis:{bands:["swir2","swir","red"],min:.05,max:.35,gamma:1.4}},{name:"Agriculture",vis:{bands:["swir","nir","blue"],min:.05,max:.35,gamma:1.4}},{name:"Healthy vegetation",vis:{bands:["nir","swir","blue"],min:.05,max:.35,gamma:1.4}},{name:"Vegetation Analysis",vis:{bands:["swir","nir","red"],min:.05,max:.35,gamma:1.4}}],R=[{layertype:"mapbox-layer",name:"Kadaster",icon:"static/images/legend-kadaster.png",opacity:100,active:!1,data:[{id:"Kadaster",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"fill-color":"rgba(32, 32, 32, 0.3)","fill-outline-color":"rgba(0, 0, 0, 0.3)"}},{id:"Kadasterlijnen",type:"line",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"line-color":{type:"identity",property:"stroke"},"line-width":4},filter:["==","ADMINPERCE",""]},{id:"KadasterSelect",type:"line",source:{type:"vector",url:"mapbox://ellispenning.5tu1qjtk"},"source-layer":"kadaster-vlakken-1i9erw",paint:{"line-color":{type:"identity",property:"stroke"},"line-width":4},filter:["==","ADMINPERCE",""]}],tableproperties:[{name:"Perceel nummer",key:"ADMINPERCE"},{name:"Gemeente",key:"GEMEENTE"},{name:"Gerechtigde",key:"GERECHTIGD"},{name:"Grootte",key:"GROOTTE"}]},{layertype:"mapbox-layer",name:"Stroombanen",icon:"static/images/legend-stroombaan.png",opacity:100,active:!0,data:[{id:"Streamlines",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.4puwiyv9"},"source-layer":"stroombaan-8ndp71",paint:{"fill-color":"rgba(51, 163, 255, 0.2)","fill-outline-color":"rgba(51, 163, 255, 1)"}}]},{layertype:"gee-layer",name:"Classificatie vs Legger",icon:"static/images/legend-classified.png",opacity:100,active:!1,dataset:"landuse-vs-legger",legend:{colors:["#1a9850","#91cf60","#d9ef8b","#ffffbf","#fee08b","#fc8d59","#d73027"],range:"-5 5"},data:[],vis:{}},{layertype:"gee-layer",name:"Classificatie",icon:"static/images/legend-classified.png",opacity:100,active:!1,dataset:"landuse",legend:{colors:["#bdeeff","#ff817e","#eefad4","#debdde","#73bf73","#d97a36"],labels:["water","bebouwd of verhard","gras en akker","riet en ruigte","bos","struweel"]},data:[],vis:{}},{layertype:"mapbox-layer",name:"Vegetatielegger",icon:"static/images/legend-legger.png",opacity:100,active:!0,type:"group",legend:{colors:["#a3e0ff","#ff827e","#eefad4","#debdde","#73bf73","#d97a36","#ffec80","#f2d218","#d9bb16"],labels:["water","bebouwd of verhard","gras en akker","riet en ruigte","bos","struweel","mengklasse 90/10","mengklasse 70/30","mengklasse 50/50"]},data:[{id:"Vegetatielegger",type:"fill",source:{type:"vector",url:"mapbox://ellispenning.87a2u39q"},"source-layer":"vegetatie-vlakken-596nr3",paint:{"fill-color":{base:1,type:"categorical",property:"KLASSE",stops:[["Water","rgba(191, 239, 255, 255)"],["Verhard oppervlak","rgb(255, 129, 126)"],["Gras en Akker","rgb(238, 250, 212)"],["Riet en Ruigte","rgb(222, 189, 222)"],["Bos","rgb(115, 191, 115)"],["Struweel","rgb(217, 122, 54)"],["90-10","rgb(255, 236, 128)"],["70-30","rgb(242, 210, 24)"],["50-50","rgb(217, 187, 22)"]],default:"rgba(0, 0, 0, 0)"}}},{id:"Beheersgrenzen",type:"line",source:{type:"vector",url:"mapbox://ellispenning.dbeqewih"},"source-layer":"beheergrens-8l9whd",paint:{"line-color":"rgb(80,155,255)"}}]},{layertype:"gee-layer",name:"Vegetatie (NDVI)",icon:"static/images/legend-ndvi.png",opacity:100,active:!1,dataset:"ndvi",legend:{colors:["#000000","#252525","#525252","#737373","#969696","#bdbdbd","#d9d9d9","#f0f0f0","#ffffff","#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],range:"-1 1"},data:[],vis:{}},{layertype:"gee-layer",name:"Satelliet beelden",icon:"static/images/legend-rgb.png",opacity:100,active:!1,dataset:"satellite",data:[],vis:P[0].vis,visualisations:P}],O={name:"v-map-layers",data:function(){return{map:null,dateBegin:"2017-07-20",dateEnd:"2017-07-21",beginDate:"",endDate:""}},methods:{deferredMountedTo:function(e){_.each(R,function(t){r.$emit("add-layer",t),"mapbox-layer"===t.layertype&&_.each(t.data,function(t){e.addLayer(t)})})}}},S={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var A={name:"app",data:function(){return{map:null,drawer:null,layers:[]}},mounted:function(){var e=this;this.map=this.$refs.map.map,this.map.addControl(new l.a.ScaleControl({maxWidth:80,unit:"metric"})),r.$on("remove-data-layer",function(t){var a=_.find(e.layers,{dataset:t.dataset});_.each(a.data,function(s,n){void 0!=s&&s.id===t.dataset+"_composite"&&(a.data.splice(n,1),e.map.removeLayer(s.id),e.map.removeSource(s.id))})}),r.$on("add-data-layer",function(t){_.find(e.layers,{dataset:t.dataset}).data.push(t.layer)}),r.$on("select-layers",function(t){s.a.set(e,"layers",t)}),r.$on("add-layer",function(t){e.layers.push(t)}),this.map.on("load",function(t){r.$emit("map-loaded",e.map)})},methods:{},components:{"v-layer-control":v,"v-selection-panel":F,"v-map-layers":a("VU/8")(O,S,!1,function(e){a("Hp+G")},null,null).exports,"v-analysis-control":x}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{width:"400",id:"navdrawer",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-layer-control",{attrs:{layers:e.layers,map:e.map}}),e._v(" "),a("v-selection-panel",{attrs:{layers:e.layers,map:e.map}}),e._v(" "),a("v-analysis-control",{attrs:{layers:e.layers,map:e.map}})],1),e._v(" "),a("v-toolbar",{attrs:{xs6:"",color:"grey lighten-4",fixed:"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),a("v-toolbar-title",[e._v("Vegetatie Monitor")]),e._v(" "),a("v-spacer"),e._v(" "),a("div",{staticClass:"logo1 mr-2"},[a("img",{staticClass:"logos",attrs:{src:"static/images/deltares.svg"}})]),e._v(" "),a("div",{staticClass:"logo2 mr-2"},[a("img",{staticClass:"logos",attrs:{src:"static/images/Rijkswaterstaat.svg"}})])],1),e._v(" "),a("v-content",[a("div",{attrs:{id:"map"}},[a("v-mapbox",{ref:"map",attrs:{"access-token":"pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA","map-style":"mapbox://styles/mapbox/light-v9",center:[5.673272,52.079502],zoom:7.88,pitch:0,bearing:0,"min-zoom":5,id:"map"}},[a("v-map-layers"),e._v(" "),a("v-mapbox-navigation-control")],1)],1)])],1)},staticRenderFns:[]};var V=a("VU/8")(A,N,!1,function(e){a("OpEZ")},null,null).exports,q=a("5BM0"),B=a.n(q);a("7zck");s.a.use(B.a),s.a.use(i.a),s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:V}})},OpEZ:function(e,t){},rZ9p:function(e,t){},sFM2:function(e,t){},uslO:function(e,t,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return a(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.d89c5e713bced316531b.js.map