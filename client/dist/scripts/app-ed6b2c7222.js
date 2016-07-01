function RootController(e,a,t,i){var n=this;e.Globalize.culture(i.get("TRANSLATE_LANG_KEY")),n.changeLang=function(i){t.use(i),e.Globalize.culture(i),a.reload()}}RootController.$inject=["$window","$state","$translate","$translateLocalStorage"],function(){"use strict";angular.module("pjtLayout",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr","dx","pascalprecht.translate","chart.js","ngStorage"])}(),angular.module("pjtLayout").controller("RootController",RootController),function(){"use strict";function e(e,a){function t(t,i,n){return e({method:"GET",url:"/api/v1/statistics",params:{from_date:t,to:i,by:n}}).then(function(e){for(var t in e.data.statistics){var i=a.get("TRANSLATE_LANG_KEY");e.data.statistics[t].cpc=parseFloat(e.data.statistics[t].cpc).toFixed(4),e.data.statistics[t].cpm=parseFloat(e.data.statistics[t].cpm).toFixed(4),e.data.statistics[t].spend=parseFloat(e.data.statistics[t].spend).toFixed(4),e.data.statistics[t].day=moment(e.data.statistics[t].day).locale(i).format("L")}return e.data})}function i(a,t){return e({method:"GET",url:"/api/v1/totals",params:{from_date:a,to:t}}).then(function(e){return e.data.totals.cpc=parseFloat(e.data.totals.cpc).toFixed(4),e.data.totals.cpm=parseFloat(e.data.totals.cpm).toFixed(4),e.data.totals.spend=parseFloat(e.data.totals.spend).toFixed(4),e.data.totals})}function n(a,t,i,n,s,l,o,c){return s?(l=s[0].desc===!0?"desc":"asc",s=s[0].selector):(s="campaign",l="DESC"),null==n&&(n=20),null==i&&(i=0),e({method:"GET",url:"/api/v1/campaigns",params:{from_date:a,to:t,skip:i,take:n,sort:s,order:l,stat_by:o,filter:c}}).then(function(e){for(var a in e.data.campaigns)e.data.campaigns[a].cpc=parseFloat(e.data.campaigns[a].cpc).toFixed(4),e.data.campaigns[a].cpm=parseFloat(e.data.campaigns[a].cpm).toFixed(4),e.data.campaigns[a].spend=parseFloat(e.data.campaigns[a].spend).toFixed(4);return e.data})}function s(a,t){return e({method:"GET",url:"http://private-anon-d71dffb7f-rtbs.apiary-mock.com/api/v1/map/clicks",params:{from_date:a,to:t}}).then(function(e){return e.data})}var l=this;l.statsCampaigns=n,l.statsTotals=i,l.statsChart=t,l.statsMap=s}e.$inject=["$http","$translateLocalStorage"],angular.module("pjtLayout").service("Main",e)}(),function(){"use strict";function e(e,a,t,i,n,s,l){var o=this;o.Main=l,o.multipleTotalCount=0,o.checkChart=[],o.by="";var c=n.instant;null==i.series&&(i.series=[{valueField:"imp",name:"Impressions"},{valueField:"cvr",name:"CVR"},{valueField:"cpc",name:"CPC"},{valueField:"clicks",name:"clicks"},{valueField:"spend",name:"media"},{valueField:"conv",name:"conversions"},{valueField:"ctr",name:"CTR"}]);var r=[];if(null==i.checkChart){i.checkChart={imp:!0,cvr:!0,cpc:!0,clicks:!0,spend:!0,conv:!0,ctr:!0},r=[];for(var d in i.checkChart)1==i.checkChart[d]&&r.push(d);o.by=r.join()}else{r=[];for(var d in i.checkChart)1==i.checkChart[d]&&r.push(d);o.by=r.join()}null==i.dataStart&&null==i.dataEnd?(i.dataStart=a.moment({hour:"00"}).subtract(1,"day").unix(),i.dataEnd=a.moment({hour:"00"}).subtract(1,"day").endOf("day").unix()):(o.dataStart=i.dataStart,o.dataEnd=i.dataEnd),null==i.SelectedTime&&(i.SelectedTime=0);var u=[{ID:0,Name:c("MAIN.DATE_PICKER.YESTERDAY"),dataStart:a.moment({hour:"00"}).subtract(1,"day").unix(),dataEnd:a.moment({hour:"00"}).subtract(1,"day").endOf("day").unix()},{ID:1,Name:c("MAIN.DATE_PICKER.LAST_3_DAYS"),dataStart:a.moment({hour:"00"}).subtract(3,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:2,Name:c("MAIN.DATE_PICKER.LAST_7_DAYS"),dataStart:a.moment({hour:"00"}).subtract(7,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:3,Name:c("MAIN.DATE_PICKER.LAST_14_DAYS"),dataStart:a.moment({hour:"00"}).subtract(14,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:4,Name:c("MAIN.DATE_PICKER.LAST_21_DAYS"),dataStart:a.moment({hour:"00"}).subtract(21,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:5,Name:c("MAIN.DATE_PICKER.CURRENT_MONTH"),dataStart:a.moment().startOf("month").unix(),dataEnd:a.moment().unix()},{ID:6,Name:c("MAIN.DATE_PICKER.LAST_MONTH"),dataStart:a.moment().subtract(1,"month").startOf("month").unix(),dataEnd:a.moment().subtract(1,"month").endOf("month").unix()},{ID:7,Name:c("MAIN.DATE_PICKER.LAST_90_DAYS"),dataStart:a.moment({hour:"00"}).subtract(90,"day").unix(),dataEnd:a.moment().unix()},{ID:8,Name:c("MAIN.DATE_PICKER.ALL_TIME"),dataStart:0,dataEnd:a.moment().unix()}];o.datePiker={items:u,displayExpr:"Name",valueExpr:"ID",value:u[i.SelectedTime].ID,onValueChanged:function(e){i.SelectedTime=e.value,i.dataStart=u[e.value].dataStart,i.dataEnd=u[e.value].dataEnd,t.reload()}},o.totals=[],o.chartStore=new a.DevExpress.data.CustomStore({totalCount:function(){return 0},load:function(){return o.Main.statsChart(o.dataStart,o.dataEnd,o.by).then(function(e){return e.statistics})}}),o.multipleStore=new a.DevExpress.data.CustomStore({totalCount:function(){return o.multipleTotalCount},load:function(e){return o.Main.statsCampaigns(o.dataStart,o.dataEnd,e.skip,e.take,e.sort,e.order,o.by,e.filter).then(function(e){return o.multipleTotalCount=e.totalCount,e.campaigns})}}),o.Main.statsTotals(o.dataStart,o.dataEnd).then(function(e){o.totals.spent=e.spend,o.totals.conv=e.conv,o.totals.imp=e.imp,o.totals.cpc=e.cpc,o.totals.cpm=e.cpm,o.totals.cvr=e.cvr,o.totals.ctr=e.ctr}),o.selectedItems=[],o.chartOptionsFuncgrid=[],o.dataGridOptionsMultiple={bindingOptions:{dataSource:"main.multipleStore"},onInitialized:function(e){o.dataGridOptionsMultipleFunc=e.component,o.dataGridOptionsMultipleFunc._controllers.columns._commandColumns[1].visibleIndex=15},showBorders:!0,alignment:"left",headerFilter:{visible:!0},allowColumnReordering:!0,allowColumnResizing:!0,columnAutoWidth:!0,columnChooser:{enabled:!0},columnFixing:{enabled:!0},pager:{showPageSizeSelector:!0,allowedPageSizes:[10,30,50],visible:!0,showNavigationButtons:!0},howBorders:!0,showRowLines:!0,columns:[{caption:c("MAIN.CAMPAIGN.COLUMNS.CAMPAIGN"),dataField:"campaign",fixed:!0,cellTemplate:function(e,t){e.addClass("a-campaign"),a.angular.element('<a href="#/campaign/'+t.data.id+'">'+t.data.campaign+"</a>").appendTo(e)}},{caption:c("MAIN.CAMPAIGN.COLUMNS.SPENT"),dataField:"spend"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CONV"),dataField:"conv"},{caption:c("MAIN.CAMPAIGN.COLUMNS.IMP"),dataField:"imp"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CLICKS"),dataField:"clicks"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CPC"),dataField:"cpc"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CPM"),dataField:"cpm"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CVR"),dataField:"cvr"},{caption:c("MAIN.CAMPAIGN.COLUMNS.CTR"),dataField:"ctr"},{width:200,dataField:c("MAIN.CAMPAIGN.COLUMNS.STATS"),cellTemplate:function(e,t){if(t.data.chart){var n={onInitialized:function(e){o.chartOptionsFuncgrid[t.rowIndex]=e.component},dataSource:t.data.chart,size:{height:80},commonSeriesSettings:{argumentField:"day",type:"line",point:{size:2,hoverStyle:{border:{visible:!0,width:1},size:4}}},commonAxisSettings:{label:{visible:!1},grid:{visible:!1}},argumentAxis:{valueMarginsEnabled:!1,discreteAxisDivisionMode:"crossLabels",grid:{visible:!1},label:{visible:!1},minorGrid:{visible:!1},minorTick:{visible:!1},tick:{visible:!1}},series:i.series,legend:{visible:!1},tooltip:{enabled:!0,customizeTooltip:function(e){return{text:e.valueText}}}};e.addClass("img-container"),a.angular.element('<div id="chartMulti'+t.rowIndex+'" ></div>').appendTo(e),a.$("#chartMulti"+t.rowIndex).dxChart(n).dxChart("instance")}else e.addClass("img-container"),a.angular.element('<div id="chartMulti" ></div>').appendTo(e)}}],selection:{mode:"multiple"},onSelectionChanged:function(e){o.selectedItems=e.selectedRowsData,o.disabled=!o.selectedItems.length}},o.types=["line","stackedLine","fullStackedLine"],o.chartOptions={onInitialized:function(e){o.chartOptionsFunc=e.component},series:i.series,size:{width:500,height:230},bindingOptions:{dataSource:"main.chartStore"},commonSeriesSettings:{argumentField:"day",type:o.types[0],point:{size:3,hoverStyle:{border:{visible:!0,width:2},size:5}}},margin:{bottom:20},argumentAxis:{valueMarginsEnabled:!1,discreteAxisDivisionMode:"crossLabels",grid:{visible:!0}},legend:{verticalAlignment:"bottom",horizontalAlignment:"center",itemTextPosition:"bottom"},tooltip:{enabled:!0,customizeTooltip:function(e){return{text:e.valueText}}}},o.impressions={text:c("MAIN.CHECKBOX.IMPRESSIONS"),value:i.checkChart.imp?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.imp=!0,i.series.push({valueField:"imp",name:"Impressions"}),t.reload();else{i.checkChart.imp=!1;for(var a in i.series)"imp"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.CPA={text:c("MAIN.CHECKBOX.CPA"),value:i.checkChart.cvr?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.cvr=!0,i.series.push({valueField:"cvr",name:"CVR"}),t.reload();else{i.checkChart.cvr=!1;for(var a in i.series)"cvr"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.CPC={text:c("MAIN.CHECKBOX.CPC"),value:i.checkChart.cpc?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.cpc=!0,i.series.push({valueField:"cpc",name:"CPC"}),t.reload();else{i.checkChart.cpc=!1;for(var a in i.series)"cpc"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.clicks={text:c("MAIN.CHECKBOX.CLICKS"),value:i.checkChart.clicks?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.clicks=!0,i.series.push({valueField:"clicks",name:"clicks"}),t.reload();else{i.checkChart.clicks=!1;for(var a in i.series)"clicks"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.media={text:c("MAIN.CHECKBOX.MEDIA_SPENT"),value:i.checkChart.spend?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.spend=!0,i.series.push({valueField:"spend",name:"media"}),t.reload();else{i.checkChart.spend=!1;for(var a in i.series)"spend"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.conversions={text:c("MAIN.CHECKBOX.CONVERSIONS"),value:i.checkChart.conv?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.conv=!0,i.series.push({valueField:"conv",name:"conversions"}),t.reload();else{i.checkChart.conv=!1;for(var a in i.series)"conv"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},o.CTR={text:c("MAIN.CHECKBOX.CTR"),value:i.checkChart.ctr?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.ctr=!0,i.series.push({valueField:"ctr",name:"CTR"}),t.reload();else{i.checkChart.ctr=!1;for(var a in i.series)"ctr"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}};var m={};o.Main.statsMap(o.dataStart,o.dataEnd).then(function(e){m=e,$("#visualMap").dxVectorMap(o.vectorMapOptions)}),o.vectorMapOptions={size:{width:500,height:350},layers:[{name:"areas",dataSource:a.DevExpress.viz.map.sources.world,palette:"blue",colorGroups:[0,100,1e3,1e4],colorGroupingField:"clicks",label:{enabled:!0,dataField:"name"},customize:function(e){e.forEach(function(e){var a=e.attribute("name"),t=m[a];t&&e.attribute("clicks",t)})}}],tooltip:{enabled:!0,customizeTooltip:function(e){return{text:e.attribute("text")}}},legends:[{source:{layer:"areas",grouping:"color"},horizontalAlignment:"left",verticalAlignment:"bottom",customizeText:function(e){return e.start+" to "+e.end+" clicks"}}],bounds:[-180,85,180,-75]}}e.$inject=["$compile","$window","$state","$localStorage","$translate","$log","Main"],angular.module("pjtLayout").controller("MainController",e)}(),function(){"use strict";angular.module("pjtLayout").constant("RussianTranslations",{INDEX:{ADVERTISER_TITLE:"Статистика для",LEFT_NAV:{HOME:"Главная",CAMPAIGN:"Кампания",BILLING:"Биллинг",OPTIMIZER:"Оптимизатор"}},MAIN:{HOME:"Главная",DATE_PICKER:{YESTERDAY:"Вчера",LAST_3_DAYS:"Последние 3 дня",LAST_7_DAYS:"Последние 7 дней",LAST_14_DAYS:"Последние 14 дней",LAST_21_DAYS:"Последние 21 дней",CURRENT_MONTH:"Текущий месяц",LAST_MONTH:"Прошлый месяц",LAST_90_DAYS:"Последние 90 дней",ALL_TIME:"Все время"},TOTALS:{COLUMNS:{TOTALS:"ИТОГИ",SPENT:"Потрачено",CONV:"Конв",IMP:"Показы",CLICKS:"Клики",CPC:"CPC",CPM:"CPM",CVR:"CVR",CTR:"CTR"}},CAMPAIGN:{COLUMNS:{CAMPAIGN:"Кампания",SPENT:"Потрачено",CONV:"Конв",IMP:"Показы",CLICKS:"Клики",CPC:"CPC",CPM:"CPM",CVR:"CVR",CTR:"CTR",STATS:"Стат"}},CHECKBOX:{IMPRESSIONS:"Показы",CPA:"CPA",CPC:"CPC",CLICKS:"Клики",MEDIA_SPENT:"Потр на медий рекл",CONVERSIONS:"Конверсии",CTR:"CTR"}}})}(),function(){"use strict";angular.module("pjtLayout").constant("EnglishTranslations",{INDEX:{ADVERTISER_TITLE:"Stats for",LEFT_NAV:{HOME:"Home",CAMPAIGN:"Campaign",BILLING:"Billing",OPTIMIZER:"Optimizer"}},MAIN:{HOME:"Home",DATE_PICKER:{YESTERDAY:"Yesterday",LAST_3_DAYS:"Last 3 days",LAST_7_DAYS:"Last 7 days",LAST_14_DAYS:"Last 14 days",LAST_21_DAYS:"Last 21 days",CURRENT_MONTH:"Current month",LAST_MONTH:"Last month",LAST_90_DAYS:"Last 90 days",ALL_TIME:"All times"},TOTALS:{COLUMNS:{TOTALS:"TOTALS",SPENT:"Spent",CONV:"Conv",IMP:"Imp",CLICKS:"Clicks",CPC:"CPC",CPM:"CPM",CVR:"CVR",CTR:"CTR"}},CAMPAIGN:{COLUMNS:{CAMPAIGN:"Campaign",SPENT:"Spent",CONV:"Conv",IMP:"Imp",CLICKS:"Clicks",CPC:"CPC",CPM:"CPM",CVR:"CVR",CTR:"CTR",STATS:"Stats"}},CHECKBOX:{IMPRESSIONS:"Impressions",CPA:"CPA",CPC:"CPC",CLICKS:"Clicks",MEDIA_SPENT:"Media Spent",CONVERSIONS:"Conversions",CTR:"CTR"}}})}(),function(){"use strict";function e(e,a){var t=this;t.advertiser={},t.a=123,null==e.advertiser?a.go("auth"):t.advertiser.name=e.advertiser.name}e.$inject=["$localStorage","$state"],angular.module("pjtLayout").controller("HomeController",e)}(),function(){"use strict";function e(e){function a(){return e({method:"GET",url:"api/v1/campaigns"}).then(function(e){return e.data.campaigns})}function t(a,t,i){return e({method:"GET",url:"http://private-anon-d71dffb7f-rtbs.apiary-mock.com/api/v1/statistics",params:{from:a,to:t,by:i}}).then(function(e){return e.data})}function i(a,t,i,n,s,l,o,c){return e({method:"GET",url:"http://private-anon-d71dffb7f-rtbs.apiary-mock.com/api/v1/campaigns",params:{from:a,to:t,skip:i,take:n,sort:s,order:l,stat_by:o,filter:c}}).then(function(e){return e.data})}var n=this;n.nameCampaigns=a,n.statsCampaigns=i,n.statsChart=t}e.$inject=["$http"],angular.module("pjtLayout").service("Camp",e)}(),function(){"use strict";function e(e,a,t,i,n,s,l,o,c){var r=this;r.Camp=o,r.multipleTotalCount=0,r.checkChart=[],r.by="";var d=n.instant;null==i.series&&(i.series=[{valueField:"impressions",name:"Impressions"},{valueField:"cpa",name:"CPA"},{valueField:"cpc",name:"CPC"},{valueField:"clicks",name:"clicks"},{valueField:"media",name:"media"},{valueField:"conversions",name:"conversions"},{valueField:"ctr",name:"CTR"}]);var u=[];if(null==i.checkChart){i.checkChart={impressions:!0,cpa:!0,cpc:!0,clicks:!0,media:!0,conversions:!0,ctr:!0},u=[];for(var m in i.checkChart)1==i.checkChart[m]&&u.push(m);r.by=u.join()}else{u=[];for(var m in i.checkChart)1==i.checkChart[m]&&u.push(m);r.by=u.join()}r.Camp.nameCampaigns(l.id).then(function(e){for(var a=0;a<e.length;a++)if(e[a].id==l.id){r.campName=e[a].campaign;break}}),r.types=["line","stackedLine","fullStackedLine"];r.chartOptions={onInitialized:function(e){r.chartOptionsFunc=e.component},series:i.series,size:{width:500,height:230},bindingOptions:{dataSource:"camp.chartStore"},commonSeriesSettings:{argumentField:"day",type:r.types[0],point:{size:3,hoverStyle:{border:{visible:!0,width:2},size:5}}},margin:{bottom:20},argumentAxis:{valueMarginsEnabled:!1,discreteAxisDivisionMode:"crossLabels",grid:{visible:!0}},legend:{verticalAlignment:"bottom",horizontalAlignment:"center",itemTextPosition:"bottom"},tooltip:{enabled:!0,customizeTooltip:function(e){return{text:e.valueText}}}},r.totals=[],r.chartStore=new a.DevExpress.data.CustomStore({totalCount:function(){return 0},load:function(){return r.Camp.statsChart(r.dataStart,r.dataEnd,r.by).then(function(e){return e.statistics})}}),r.multipleStore=new a.DevExpress.data.CustomStore({totalCount:function(){return r.multipleTotalCount},load:function(e){return null==e.take&&(e.take=20),null==e.skip&&(e.skip=0),null==e.sort&&(e.sort="campaign"),null==e.order&&(e.order="DESC"),r.Camp.statsCampaigns(r.dataStart,r.dataEnd,e.skip,e.take,e.sort,e.order,r.by,e.filter).then(function(e){return r.multipleTotalCount=e.totalCount,e.campaigns})}}),r.impressions={text:d("MAIN.CHECKBOX.IMPRESSIONS"),value:i.checkChart.impressions?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.impressions=!0,i.series.push({valueField:"impressions",name:"Impressions"}),t.reload();else{i.checkChart.impressions=!1;for(var a in i.series)"impressions"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.CPA={text:d("MAIN.CHECKBOX.CPA"),value:i.checkChart.cpa?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.cpa=!0,i.series.push({valueField:"cpa",name:"CPA"}),t.reload();else{i.checkChart.cpa=!1;for(var a in i.series)"cpa"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.CPC={text:d("MAIN.CHECKBOX.CPC"),value:i.checkChart.cpc?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.cpc=!0,i.series.push({valueField:"cpc",name:"CPC"}),t.reload();else{i.checkChart.cpc=!1;for(var a in i.series)"cpc"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.clicks={text:d("MAIN.CHECKBOX.CLICKS"),value:i.checkChart.clicks?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.clicks=!0,i.series.push({valueField:"clicks",name:"clicks"}),t.reload();else{i.checkChart.clicks=!1;for(var a in i.series)"clicks"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.media={text:d("MAIN.CHECKBOX.MEDIA_SPENT"),value:i.checkChart.media?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.media=!0,i.series.push({valueField:"media",name:"media"}),t.reload();else{i.checkChart.media=!1;for(var a in i.series)"media"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.conversions={text:d("MAIN.CHECKBOX.CONVERSIONS"),value:i.checkChart.conversions?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.conversions=!0,i.series.push({valueField:"conversions",name:"conversions"}),t.reload();else{i.checkChart.conversions=!1;for(var a in i.series)"conversions"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},r.CTR={text:d("MAIN.CHECKBOX.CTR"),value:i.checkChart.ctr?!0:!1,onValueChanged:function(e){if(1==e.value)i.checkChart.ctr=!0,i.series.push({valueField:"ctr",name:"CTR"}),t.reload();else{i.checkChart.ctr=!1;for(var a in i.series)"ctr"==i.series[a].valueField&&i.series.splice(a,1);t.reload()}}},null==i.dataStart&&null==i.dataEnd?(i.dataStart=a.moment({hour:"00"}).subtract(1,"day").unix(),i.dataEnd=a.moment({hour:"00"}).subtract(1,"day").endOf("day").unix()):(r.dataStart=i.dataStart,r.dataEnd=i.dataEnd),null==i.SelectedTime&&(i.SelectedTime=0);var p=[{ID:0,Name:d("MAIN.DATE_PICKER.YESTERDAY"),dataStart:a.moment({hour:"00"}).subtract(1,"day").unix(),dataEnd:a.moment({hour:"00"}).subtract(1,"day").endOf("day").unix()},{ID:1,Name:d("MAIN.DATE_PICKER.LAST_3_DAYS"),dataStart:a.moment({hour:"00"}).subtract(3,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:2,Name:d("MAIN.DATE_PICKER.LAST_7_DAYS"),dataStart:a.moment({hour:"00"}).subtract(7,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:3,Name:d("MAIN.DATE_PICKER.LAST_14_DAYS"),dataStart:a.moment({hour:"00"}).subtract(14,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:4,Name:d("MAIN.DATE_PICKER.LAST_21_DAYS"),dataStart:a.moment({hour:"00"}).subtract(21,"day").unix(),dataEnd:a.moment({hour:"00"}).unix()},{ID:5,Name:d("MAIN.DATE_PICKER.CURRENT_MONTH"),dataStart:a.moment().startOf("month").unix(),dataEnd:a.moment().unix()},{ID:6,Name:d("MAIN.DATE_PICKER.LAST_MONTH"),dataStart:a.moment().subtract(1,"month").startOf("month").unix(),dataEnd:a.moment().subtract(1,"month").endOf("month").unix()},{ID:7,Name:d("MAIN.DATE_PICKER.LAST_90_DAYS"),dataStart:a.moment({hour:"00"}).subtract(90,"day").unix(),dataEnd:a.moment().unix()},{ID:8,Name:d("MAIN.DATE_PICKER.ALL_TIME"),dataStart:0,dataEnd:a.moment().unix()}];r.datePiker={items:p,displayExpr:"Name",valueExpr:"ID",value:p[i.SelectedTime].ID,onValueChanged:function(e){i.SelectedTime=e.value,i.dataStart=p[e.value].dataStart,i.dataEnd=p[e.value].dataEnd,t.reload()}},r.boxPlot={onInitialized:function(e){r.chartOptionsFunc=e.component},size:{width:500,height:200},dataSource:[{date:new Date(1994,2,1),l:23,h:27,o:24,c:25.875},{date:new Date(1994,2,2),l:23.625,h:25.125,o:24,c:24.875},{date:new Date(1994,2,3),l:27.25,h:30.25,o:26.75,c:30},{date:new Date(1994,2,4),l:26.5,h:27.875,o:26.875,c:27.25},{date:new Date(1994,2,7),l:26.375,h:27.5,o:27.375,c:26.75}],commonSeriesSettings:{argumentField:"date",type:"candlestick"},series:[{openValueField:"o",highValueField:"h",lowValueField:"l",closeValueField:"c",reduction:{color:"red"}}],valueAxis:{tickInterval:1,title:{text:"US dollars"},label:{format:"currency",precision:0}},argumentAxis:{label:{format:"shortDate"}},tooltip:{enabled:!0,location:"edge",customizeTooltip:function(e){return{text:"Open: $"+e.openValue+"<br/>Close: $"+e.closeValue+"<br/>High: $"+e.highValue+"<br/>Low: $"+e.lowValue+"<br/>"}}}},r.selectedItems=[],r.chartOptionsFuncgrid=[],r.boxPlotData=[{placement:"CNN.com",NetworkPublisher:"Google Adx",conv:"8",imp:"5500",clicks:"21",cpc:"$0,31",cpm:"$1,38",cvr:"",ctr:"",state:{whiteList:"true",blackList:"false",suspended:"false"}},{placement:"Hidden",NetworkPublisher:"PubMatic",conv:"3",imp:"5500",clicks:"21",cpc:"$0,31",cpm:"$1,38",cvr:"",ctr:"",state:{whiteList:"false",blackList:"true",suspended:"false"}},{placement:"BBC.com",NetworkPublisher:"OpenX",conv:"1",imp:"5500",clicks:"21",cpc:"$0,31",cpm:"$1,38",cvr:"",ctr:"",state:{whiteList:"false",blackList:"false",suspended:"true"}},{placement:"msn.com",NetworkPublisher:"Rubicon",conv:"8",imp:"5500",clicks:"21",cpc:"$0,31",cpm:"$1,38",cvr:"",ctr:"",state:{whiteList:"true",blackList:"false",suspended:"false"}}],null==i.boxPlotData&&(i.boxPlotData=r.boxPlotData),r.dataGridOptionsCampaign={bindingOptions:{allowColumnResizing:"true","selection.allowSelectAll":!1},onInitialized:function(e){r.dataGridOptionsMultipleFunc=e.component,r.dataGridOptionsMultipleFunc._controllers.columns._commandColumns[1].visibleIndex=9},onRowPrepared:function(e){if(r.objectData=e,"data"==r.objectData.rowType){var a=e.rowElement[0].childNodes[9],t=e.data.state;"true"==t.whiteList&&a.classList.add("active-white"),"true"==t.blackList&&a.classList.add("active-black"),"true"==t.suspended&&a.classList.add("active-suspended")}},showBorders:!0,alignment:"left",headerFilter:{visible:!0},dataSource:i.boxPlotData||r.boxPlotData,pager:{showPageSizeSelector:!0,allowedPageSizes:[10,30,50],visible:!0,showNavigationButtons:!0},howBorders:!0,showRowLines:!0,columns:[{caption:d("MAIN.CAMPAIGN.COLUMNS.PLACEMENT"),dataField:"placement"},{caption:d("MAIN.CAMPAIGN.COLUMNS.NETWORK"),dataField:"NetworkPublisher"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CONV"),dataField:"conv"},{caption:d("MAIN.CAMPAIGN.COLUMNS.IMP"),dataField:"imp"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CLICKS"),dataField:"clicks"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CPC"),dataField:"cpc"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CPM"),dataField:"cpm"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CVR"),dataField:"cvr"},{caption:d("MAIN.CAMPAIGN.COLUMNS.CTR"),dataField:"ctr"},{width:300,columnIndex:16,cellTemplate:function(e,a){$("<div />").dxButton({text:"white list",height:30,width:89,onClick:function(e){console.log(e);var a=e.element[0].parentNode;console.log(a),a.classList.contains("active-white")?(a.classList.remove("active-white"),a.classList.add("unactive-white")):a.classList.contains("active-white")||(a.classList.remove("unactive-white"),a.classList.add("active-white"))}}).addClass("white-list").appendTo(e),$("<div />").dxButton({text:"black list",height:30,width:89,onClick:function(e){console.log(e);var a=e.element[0].parentNode;console.log(a),a.classList.contains("active-black")?(a.classList.remove("active-black"),a.classList.add("unactive-black")):a.classList.contains("active-black")||(a.classList.remove("unactive-black"),a.classList.add("active-black"))}}).addClass("black-list").appendTo(e),$("<div />").dxButton({text:"suspended",height:30,width:95,onClick:function(e){console.log(e);var a=e.element[0].parentNode;console.log(a),a.classList.contains("active-suspended")?(a.classList.remove("active-suspended"),a.classList.add("unactive-suspended")):a.classList.contains("active-suspended")||(a.classList.remove("unactive-suspended"),a.classList.add("active-suspended"))}}).addClass("suspended").appendTo(e)}}],selection:{mode:"multiple"},onSelectionChanged:function(e){r.selectedItems=e.selectedRowsData,r.disabled=!r.selectedItems.length}},r.rangeFirstChartOptions={margin:{left:50},size:{height:150,width:450},scale:{startValue:new Date(i.dataStart),endValue:new Date(i.dataEnd),minorTickInterval:"day",minRange:"hour",maxRange:"month",minorTick:{visible:!1}},sliderMarker:{format:"monthAndDay"}},r.rangeSecondChartOptions={margin:{left:50,top:12},size:{height:150,width:450},scale:{startValue:new Date(i.dataStart),endValue:new Date(i.dataEnd),minorTickInterval:"day",minRange:"day",maxRange:"month",minorTick:{visible:!1}},sliderMarker:{format:"monthAndDay"}}}e.$inject=["$compile","$window","$state","$localStorage","$translate","$log","$stateParams","Camp","Main"],angular.module("pjtLayout").controller("CampaignController",e)}(),function(){"use strict";function e(e){function a(){return e({method:"GET",url:"/api/v1/advertisers"}).then(function(e){return e.data})}var t=this;t.advertisersList=a}e.$inject=["$http"],angular.module("pjtLayout").service("Auth",e)}(),function(){"use strict";function e(e,a,t,i,n){var s=this;s.Auth=n,s.addButton={text:"Go",onClick:function(){t.advertiser=s.selectedService,a.go("home.main")}},s.selectAdvertisersStore=new e.DevExpress.data.CustomStore({totalCount:function(){return 0},load:function(){return s.Auth.advertisersList().then(function(e){return e})}}),s.selectAdvertisers={bindingOptions:{dataSource:"auth.selectAdvertisersStore",value:"auth.selectedService"},displayExpr:"name",width:"200px"}}e.$inject=["$window","$state","$localStorage","$translate","Auth"],angular.module("pjtLayout").controller("AuthController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("pjtLayout").run(e)}(),function(){"use strict";function e(e,a){e.state("auth",{url:"/",templateUrl:"app/auth/auth.html",controller:"AuthController",controllerAs:"auth"}).state("home",{url:"/home",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}).state("home.main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("home.campaign",{url:"/campaign/:id",templateUrl:"app/campaign/camp.html",controller:"CampaignController",controllerAs:"camp"}),a.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("pjtLayout").config(e)}(),function(){"use strict";angular.module("pjtLayout")}(),function(){"use strict";function e(e,a,t,i,n){e.debugEnabled(!0),t.translations("en",n),t.translations("ru",i),t.useSanitizeValueStrategy("escape"),t.preferredLanguage("ru"),t.useLocalStorage(),t.storageKey("TRANSLATE_LANG_KEY"),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}e.$inject=["$logProvider","toastrConfig","$translateProvider","RussianTranslations","EnglishTranslations"],angular.module("pjtLayout").config(e)}(),angular.module("pjtLayout").run(["$templateCache",function(e){e.put("app/auth/auth.html",'<div class=container><div class=row><div class="Absolute-Center is-Responsive"><div id=logo-container></div><div class="col-sm-12 col-md-10 col-md-offset-1"><div class=mode-button><div dx-select-box=auth.selectAdvertisers></div><div dx-button=auth.addButton class=add-advertisers></div></div></div></div></div></div>'),e.put("app/campaign/camp.html",'<div class="container-camp col-md-10 col-lg-offset-2 col-md-10 col-lg-offset-2"><div class=row><span translate=CAMP.NAME class=camp-header></span><span class=camp-header>: {{camp.campName}}</span></div><div class="col-md-3 col-md-offset-8 piker"><div dx-select-box=camp.datePiker></div></div><div class="row camp-content1"><div id=container><div class="col-md-12 contLeft"><div class=first-chart><div dx-chart=camp.chartOptions id=chart></div><div dx-range-selector=camp.rangeFirstChartOptions class=first-range></div></div><div class=second-chart><div id=container-inner dx-chart=camp.boxPlot></div><div dx-range-selector=camp.rangeSecondChartOptions class=second-range></div></div><div class="col-md-2 checkbox-container"><div><label class=label-checkbox><div dx-check-box=camp.impressions></div></label><label class=label-checkbox><div dx-check-box=camp.CPA></div></label><label class=label-checkbox><div dx-check-box=camp.CPC></div></label><label class=label-checkbox><div dx-check-box=camp.clicks></div></label><label class=label-checkbox><div dx-check-box=camp.media></div></label><label class=label-checkbox><div dx-check-box=camp.conversions></div></label><label class=label-checkbox><div dx-check-box=camp.CTR></div></label></div></div></div></div></div><div class="row first-grid"><div id=gridContainer2 dx-data-grid=camp.dataGridOptionsCampaign></div></div></div>'),e.put("app/home/home.html",'<div id=wrapper><!-- Brand and toggle get grouped for better mobile display --><div class=row><div class="left-nav col-lg-2 col-md-2 col-md-2"><ul class="nav nav-list"><li class=nav-header><a ui-sref=home.main translate=INDEX.LEFT_NAV.HOME></a></li><li class=active><a ui-sref=home.campaign translate=INDEX.LEFT_NAV.CAMPAIGN>Campaign</a></li><li><a href=#/ translate=INDEX.LEFT_NAV.OPTIMIZER>Optimizer</a></li><li><a href=#/ translate=INDEX.LEFT_NAV.BILLING>Billing</a></li></ul></div><div class="main-nav navbar-header col-lg-10 col-md-10 col-sm-10"><button type=button data-target=#navbarCollapse data-toggle=collapse class=navbar-toggle><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=# class=navbar-brand>{{ \'INDEX.ADVERTISER_TITLE\' | translate }} {{ home.advertiser.name }}</a><div class=location><a ng-click="root.changeLang(\'ru\')"><i class="fa fa-globe fa-fw"></i> Русский </a>/ <a ng-click="root.changeLang(\'en\')"><i class="fa fa-globe fa-fw"></i> English</a></div></div></div><ui-view></ui-view></div>'),e.put("app/main/main.html",'<div class="container-home col-md-10 col-lg-offset-2 col-md-10 col-lg-offset-2"><h1 translate=MAIN.HOME>Home</h1><div class="col-md-3 col-md-offset-8 piker"><div dx-select-box=main.datePiker></div></div><div class=row><div id=container><div class="col-md-6 contLeft"><div dx-chart=main.chartOptions id=chart></div><div class=col-md-12><div class=checkbox-container><label class=label-checkbox><div dx-check-box=main.impressions></div></label><label class=label-checkbox><div dx-check-box=main.CPA></div></label><label class=label-checkbox><div dx-check-box=main.CPC></div></label><label class=label-checkbox><div dx-check-box=main.clicks></div></label></div><div class=checkbox-container><label class=label-checkbox><div dx-check-box=main.media></div></label><label class=label-checkbox><div dx-check-box=main.conversions></div></label><label class=label-checkbox><div dx-check-box=main.CTR></div></label></div></div></div><div id=visualMap></div></div></div><div class="row first-grid table-responsive"><table class="table table-bordered"><tr><td translate=MAIN.TOTALS.COLUMNS.TOTALS></td><td translate=MAIN.TOTALS.COLUMNS.SPENT></td><td translate=MAIN.TOTALS.COLUMNS.CONV></td><td translate=MAIN.TOTALS.COLUMNS.IMP></td><td translate=MAIN.TOTALS.COLUMNS.CPC></td><td translate=MAIN.TOTALS.COLUMNS.CPM></td><td translate=MAIN.TOTALS.COLUMNS.CVR></td><td translate=MAIN.TOTALS.COLUMNS.CTR></td></tr><tr><td></td><td>{{main.totals.spent}}</td><td>{{main.totals.conv}}</td><td>{{main.totals.imp}}</td><td>{{main.totals.cpc}}</td><td>{{main.totals.cpm}}</td><td>{{main.totals.cvr}}</td><td>{{main.totals.ctr}}</td></tr></table></div><div class="row second-grid"><div id=gridContainer2 dx-data-grid=main.dataGridOptionsMultiple></div></div></div>');
}]);