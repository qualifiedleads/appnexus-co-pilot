(function() {
  'use strict';

  angular
    .module('pjtLayout')
    .controller('CampaignControllerMain', CampaignControllerMain);

  /** @ngInject */
  function CampaignControllerMain($window, $state, $localStorage, $translate, CampMain, Campaign) {
    var vm = this;
    vm.Camp = CampMain;
    vm.multipleTotalCount = 0;
    vm.checkChart = [];
    vm.by = 'imp,cvr,cpc,clicks,spend,conv,ctr';
    var LC = $translate.instant;
    vm.campName = Campaign.campaign;
    vm.campId = Campaign.id;

    if ($localStorage.checkCharCamp== null ){
      $localStorage.checkCharCamp = {
        'impressions': true,
        'cpa': true,
        'cpc':true,
        'clicks': true,
        'mediaspent': true,
        'conversions': true,
        'ctr': true
      };
    }

      vm.seriesCamp = [{
        name: 'Impressions',
        argumentField: "date",
        valueField: "impression",
        axis:'impression',
        visible: $localStorage.checkCharCamp.impressions
      }, {
        argumentField: "date",
        valueField: "cpa",
        name: 'CPA',
        axis:'cpa',
        visible: $localStorage.checkCharCamp.cpa
      }, {
        argumentField: "date",
        valueField: "cpc",
        name: 'CPC',
        axis:'cpc',
        visible: $localStorage.checkCharCamp.cpc
      }, {
        argumentField: "date",
        valueField: "clicks",
        name: 'Clicks',
        axis:'clicks',
        visible: $localStorage.checkCharCamp.clicks
      }, {
        argumentField: "date",
        valueField: "mediaspent",
        name: 'mediaspent',
        axis:'mediaspent',
        visible: $localStorage.checkCharCamp.mediaspent
      }, {
        argumentField: "date",
        valueField: "conversions",
        name: 'Conversions',
        axis:'conversions',
        visible: $localStorage.checkCharCamp.conversions
      }, {
        argumentField: "date",
        valueField: "ctr",
        name: 'CTR',
        axis:'ctr',
        visible: $localStorage.checkCharCamp.ctr
      }];



    vm.totals = [];
    vm.chartStore = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return 0;
      },
      load: function () {
        return vm.Camp.statsChart(vm.campId, vm.dataStart, vm.dataEnd,vm.by)
          .then(function (result) {
            return result;
          });
      }
    });

    vm.boxPlotStore = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return 0;
      },
      load: function () {
        return vm.Camp.cpaReport(vm.campId, vm.dataStart, vm.dataEnd)
          .then(function (result) {
            return result;
          });
      }
    });


    vm.gridStore = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return 0;
      },
      load: function (loadOptions) {
        return vm.Camp.campaignDomains(vm.campId, vm.dataEnd, vm.dataStart, loadOptions.skip,
          loadOptions.take, loadOptions.sort, loadOptions.order,loadOptions.filter)
          .then(function (result) {
            $localStorage.gridStore = result;
            return result;
          });
      }
    });

    vm.detailsStoreAll = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return 0;
      },
      load: function () {
        return vm.Camp.campaignDetails(vm.dataStart, vm.dataEnd,$localStorage.selectedSection)
          .then(function (result) {
            return result.all;
          });
      }
    });

    vm.detailsStoreConversion = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return 0;
      },
      load: function () {
        return vm.Camp.campaignDetails(vm.dataStart, vm.dataEnd,vm.by)
          .then(function (result) {
            return result.conversions;
          });
      }
    });


    vm.multipleStore = new $window.DevExpress.data.CustomStore({
      totalCount: function () {
        return vm.multipleTotalCount ;
      },
      load: function (loadOptions) {
        if(loadOptions.take == null) {
          loadOptions.take = 20;
        }
        if(loadOptions.skip == null) {
          loadOptions.skip = 0;
        }
        if(loadOptions.sort == null) {
          loadOptions.sort = 'campaign';
        }
        if(loadOptions.order == null) {
          loadOptions.order = 'DESC';
        }
        return vm.Camp.statsCampaigns(vm.dataStart, vm.dataEnd, loadOptions.skip,
          loadOptions.take, loadOptions.sort, loadOptions.order,
          vm.by, loadOptions.filter)
          .then(function (result) {
            vm.multipleTotalCount = result.totalCount;
            return result.campaigns;
          });
      }
    });



    /** BIG DIAGRAM  - START **/
    vm.types = ['line', 'stackedLine', 'fullStackedLine'];

    vm.chartOptionsFirst = {
      onInitialized: function (data) {
        vm.chartOptionsFuncFirst = data.component;
      },
      argumentAxis: {
        valueMarginsEnabled: false,
        discreteAxisDivisionMode: 'crossLabels',
        grid: {
          visible: true
        }
      },
      crosshair: {
        enabled: true,
        color: 'deepskyblue',
        label: {
          visible: true
        }
      },
      commonSeriesSettings: {
        point: {
          size: 3,
          hoverStyle: {
            border: {
              visible: true,
              width: 2
            },
            size: 5
          }
        }
      },
      bindingOptions: {
        dataSource: 'campmain.chartStore'
      },
      series: vm.seriesCamp,
      legend:{
        visible: false
      },
      loadingIndicator: {
        show: true,
        text: "Creating a chart..."
      }
    };

    vm.rangeOptionsFirst = {
      margin: {
        left: 10
      },
      scale: {
        minorTickCount:1
      },
      bindingOptions: {
        dataSource: 'campmain.chartStore'
      },
      chart: {
        series: [{
          name: 'Impressions',
          argumentField: "date",
          valueField: "impression",
          axis:'impression'
        }, {
          argumentField: "date",
          valueField: "cpa",
          name: 'CPA',
          axis:'cpa'
        }, {
          argumentField: "date",
          valueField: "cpc",
          name: 'CPC',
          axis:'cpc'
        }, {
          argumentField: "date",
          valueField: "clicks",
          name: 'Clicks',
          axis:'clicks'
        }, {
          argumentField: "date",
          valueField: "mediaspent",
          name: 'mediaspent',
          axis:'mediaspent'
        }, {
          argumentField: "date",
          valueField: "conversions",
          name: 'Conversions',
          axis:'conversions'
        }, {
          argumentField: "date",
          valueField: "ctr",
          name: 'CTR',
          axis:'ctr'
        }]
      },
      behavior: {
        callSelectedRangeChanged: "onMoving"
      },
      onSelectedRangeChanged: function (e) {
        var zoomedChart = $("#zoomedContainerFirst #zoomedChartFirst").dxChart("instance");
        zoomedChart.zoomArgument(e.startValue, e.endValue);
      }
    };

    /** BIG DIAGRAM  - END **/

    /** CHECKBOX CHART - START **/
    /**
     * @param seriesName {string}
     * @param seriesShortName {string}
     * @param selected {boolean}
     */
    vm.updateCharts = function (seriesName, seriesShortName, selected) {
      $localStorage.checkCharCamp[seriesShortName] = selected;
      vm.gridCharts = $window.$('#zoomedChartFirst').dxChart('instance');
      vm.rangeChartFirst = $window.$('#rangeChartFirst').dxRangeSelector('instance');
      console.log(rangeChartFirst);
      if (selected) {
        $localStorage.checkCharCamp.seriesShortName = true;
        vm.gridCharts.getSeriesByName(seriesName).show();
      } else {
        $localStorage.checkCharCamp.seriesShortName = false;
        vm.chartOptionsFuncFirst.getSeriesByName(seriesName).hide();
      }
    };

    /** CHECKBOX CHART - START **/
    vm.impressions = {
      text: LC('MAIN.CHECKBOX.IMPRESSIONS'),
      value: $localStorage.checkCharCamp.impressions,
      onValueChanged: function (e) {
        vm.updateCharts('Impressions', 'impressions', e.value);
      }
    };

    vm.CPA = {
      text: LC('MAIN.CHECKBOX.CPA'),
      value: $localStorage.checkCharCamp.cpa,
      onValueChanged: function (e) {
        vm.updateCharts('CPA', 'cpa', e.value);
      }
    };

    vm.CPC = {
      text: LC('MAIN.CHECKBOX.CPC'),
      value: $localStorage.checkCharCamp.cpc,
      onValueChanged: function (e) {
        vm.updateCharts('CPC', 'cpc', e.value);
      }
    };

    vm.clicks = {
      text: LC('MAIN.CHECKBOX.CLICKS'),
      value: $localStorage.checkCharCamp.clicks,
      onValueChanged: function (e) {
        vm.updateCharts('Clicks', 'clicks', e.value);
      }
    };
    vm.media = {
      text: LC('MAIN.CHECKBOX.MEDIA_SPENT'),
      value: $localStorage.checkCharCamp.mediaspent,
      onValueChanged: function (e) {
        vm.updateCharts('mediaspent', 'mediaspent', e.value);
      }
    };
    vm.conversions = {
      text: LC('MAIN.CHECKBOX.CONVERSIONS'),
      value: $localStorage.checkCharCamp.conversions,
      onValueChanged: function (e) {
        vm.updateCharts('Conversions', 'conversions', e.value);
      }
    };
    vm.CTR = {
      text: LC('MAIN.CHECKBOX.CTR'),
      value: $localStorage.checkCharCamp.ctr,
      onValueChanged: function (e) {
        vm.updateCharts('CTR', 'ctr', e.value);
      }
    };
    /** CHECKBOX CHART - END **/

    /** DATE PIKER - START **/
    if ($localStorage.dataStart == null && $localStorage.dataEnd == null ){
      $localStorage.dataStart = $window.moment({ hour: '00' }).subtract(1, 'day').unix() ;
      $localStorage.dataEnd = $window.moment({ hour: '00' }).subtract(1, 'day').endOf('day').unix();
    } else {
      vm.dataStart = $localStorage.dataStart;
      vm.dataEnd = $localStorage.dataEnd;
    }
    if ($localStorage.SelectedTime == null) {
      $localStorage.SelectedTime = 0;
    }

    var products = [
      {
        ID: 0,
        Name: LC('MAIN.DATE_PICKER.YESTERDAY'),
        dataStart: $window.moment({ hour: '00' }).subtract(1, 'day').unix() ,
        dataEnd: $window.moment({ hour: '00' }).subtract(1, 'day').endOf('day').unix()
      }, {
        ID: 1,
        Name: LC('MAIN.DATE_PICKER.LAST_3_DAYS'),
        dataStart:  $window.moment({ hour: '00' }).subtract(3, 'day').unix(),
        dataEnd: $window.moment({ hour: '00' }).unix()
      }, {
        ID: 2,
        Name: LC('MAIN.DATE_PICKER.LAST_7_DAYS'),
        dataStart:  $window.moment({ hour: '00' }).subtract(7, 'day').unix(),
        dataEnd: $window.moment({ hour: '00' }).unix()
      }, {
        ID: 3,
        Name: LC('MAIN.DATE_PICKER.LAST_14_DAYS'),
        dataStart:  $window.moment({ hour: '00' }).subtract(14, 'day').unix(),
        dataEnd: $window.moment({ hour: '00' }).unix()
      }, {
        ID: 4,
        Name: LC('MAIN.DATE_PICKER.LAST_21_DAYS'),
        dataStart:  $window.moment({ hour: '00' }).subtract(21, 'day').unix(),
        dataEnd: $window.moment({ hour: '00' }).unix()
      }, {
        ID: 5,
        Name: LC('MAIN.DATE_PICKER.CURRENT_MONTH'),
        dataStart: $window.moment().startOf('month').unix(),
        dataEnd: $window.moment().unix()
      }, {
        ID: 6,
        Name: LC('MAIN.DATE_PICKER.LAST_MONTH'),
        dataStart: $window.moment().subtract(1, 'month').startOf('month').unix(),
        dataEnd: $window.moment().subtract(1, 'month').endOf('month').unix()
      }, {
        ID: 7,
        Name: LC('MAIN.DATE_PICKER.LAST_90_DAYS'),
        dataStart: $window.moment({ hour: '00' }).subtract(90, 'day').unix(),
        dataEnd: $window.moment().unix()
      }, {
        ID: 8,
        Name: LC('MAIN.DATE_PICKER.ALL_TIME'),
        dataStart: 0,
        dataEnd: $window.moment().unix()
      }];
    vm.datePiker = {
      items: products,
      displayExpr: 'Name',
      valueExpr: 'ID',
      value: products[$localStorage.SelectedTime].ID,
      onValueChanged: function (e) {
        //$log.info(products[e.value]);
        $localStorage.SelectedTime = e.value;
        $localStorage.dataStart = products[e.value].dataStart;
        $localStorage.dataEnd = products[e.value].dataEnd;

        //$('#gridContainer1').dxDataGrid('instance').refresh();
        //$('#gridContainer2').dxDataGrid('instance').refresh();
        $state.reload();
      }
    };
    /** DATE PIKER - END **/


    /** BOX PLOT- START **/


    vm.chartOptionsSecond = {
      bindingOptions: {
        dataSource: 'campmain.boxPlotStore'
      },
      valueAxis: {
        valueType: 'numeric'
      },
      argumentAxis: {
        valueMarginsEnabled: false,
        grid: {
          visible: true
        },
        label: {
          visible: false
        },
        argumentType: 'datetime'
      },
      tooltip: {
        enabled: true
      },
      legend: {
        visible: false
      },
      loadingIndicator: {
        show: true,
        text: "Creating a chart..."
      },
      useAggregation: true,
      commonSeriesSettings: {
        candlestick: {
          openValueField: 'open',
          closeValueField: 'close',
          highValueField: 'high',
          lowValueField: 'low'
        },
        argumentField: 'date',
        point: {
          size: 2,
          hoverStyle: {
            border: {
              visible: true,
              width: 1
            },
            size: 4
          }
        }
      },
      series: [
        { type: 'candlestick' },
        { valueField: 'avg', color: 'silver' }
      ]
    };

    vm.rangeOptionsSecond = {
      size: {
        height: 100
      },
      margin: {
        left: 10
      },
      scale: {
        minorTickCount:'day',
        valueType: 'date',
        tickInterval: 'day'
      },
      bindingOptions: {
        dataSource: 'campmain.boxPlotStore'
      },
      chart: {
        series: {
          type: 'line',
          valueField: 'avg',
          argumentField: 'date',
          placeholderHeight: 20
        },
        useAggregation: true,
        valueAxis: { valueType: 'numeric' }
      },

      behavior: {
        callSelectedRangeChanged: "onMoving",
        snapToTicks: false
      },
      onSelectedRangeChanged: function (e) {
        var zoomedChart = $("#zoomedContainerSecond #zoomedChartSecond").dxChart("instance");
        zoomedChart.zoomArgument(new Date(e.startValue), new Date(e.endValue));
      }
    };


    /** BOX PLOT- END **/



    /** MULTIPLE - START **/
    vm.selectedItems = [];
    vm.chartOptionsFuncgrid = [];
    if ($localStorage.boxPlotData == null){
      $localStorage.boxPlotData = vm.boxPlotData;
    }

    vm.state='';
    vm.selectCell = {
      dataSource: [
        {'name': 'White List',
          'state':'whiteList'},
        {'name': 'Black List',
          'state':'blackList'},
        {'name': 'Suspended',
          'state':'suspended'}
      ],
      disabled:true,
      placeholder: 'Select a state',
      displayExpr: 'name',
      valueExpr: vm.state,
      onSelectionChanged: function(e) {
        var selectedRows = $('#gridContainer2')[0].querySelectorAll('[aria-selected="true"]');
        var stateSelected = e.selectedItem.state;
        console.log(stateSelected);
        if(selectedRows[0]) {
          var selectedArr = [];
          for (var i=0; i<selectedRows.length; i++){
            selectedArr.push(selectedRows[i].firstChild.innerText);
          }
          console.log(selectedArr);

        }
      }
    };


    vm.dataGridOptionsCampaign = {
      onInitialized: function (data) {
        vm.dataGridOptionsMultipleFunc = data.component;
        vm.dataGridOptionsMultipleFunc._controllers.columns._commandColumns[1].visibleIndex = 9;
      },
      onRowPrepared: function(data) {
        vm.objectData = data;
        if(vm.objectData.rowType == 'data') {
          //console.log(vm.objectData);
          var allRowBtns = data.rowElement[0].childNodes[9];
          var state = data.data.state;
          if(state.whiteList == "true"){
            allRowBtns.classList.add('active-white');
          }
          if(state.blackList == "true"){
            allRowBtns.classList.add('active-black');
          }
          if(state.suspended == "true"){
            allRowBtns.classList.add('active-suspended');
          }
        }
      },
      showBorders: true,
      alignment: 'left',
      headerFilter: {
        visible: true
      },
      bindingOptions: {
        dataSource: 'campmain.gridStore',
        allowColumnResizing: 'true'
      },
      pager: {
        showPageSizeSelector: true,
        allowedPageSizes: [10, 30, 50],
        visible: true,
        showNavigationButtons: true
      },
      howBorders: true,
      showRowLines: true,
      columns: [
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.PLACEMENT'),
          dataField: 'placement'
        },
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.NETWORK'),
          dataField: 'NetworkPublisher'
        },
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.CONV'),
          dataField: 'conv'
        }, {
          caption:  LC('MAIN.CAMPAIGN.COLUMNS.IMP'),
          dataField: 'imp'
        }, {
          caption:  LC('MAIN.CAMPAIGN.COLUMNS.CLICKS'),
          dataField: 'clicks'
        }, {
          caption:  LC('MAIN.CAMPAIGN.COLUMNS.CPC'),
          dataField: 'cpc'
        },
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.CPM'),
          dataField: 'cpm'
        },
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.CVR'),
          dataField: 'cvr'
        },
        {
          caption: LC('MAIN.CAMPAIGN.COLUMNS.CTR'),
          dataField: 'ctr'
        },
        {
          caption: 'State',
          width: 300,
          columnIndex: 16,
          headerCellTemplate: 'headerCellTemplate',
          cellTemplate: function (container, options) {
            $("<div />").dxButton({
              text: 'white list',
              height:30,
              width: 89,
              disabled: true,
              onClick: function (e) {
                console.log(options.data);
                var parentWhiteBtn = e.element[0].parentNode;
                console.log(parentWhiteBtn);
                if (parentWhiteBtn.classList.contains('active-white')) {
                  parentWhiteBtn.classList.remove('active-white');
                  parentWhiteBtn.classList.add('unactive-white');
                  options.data.state.whiteList = 'false';
                } else if (!parentWhiteBtn.classList.contains('active-white')){
                  parentWhiteBtn.classList.remove('unactive-white');
                  parentWhiteBtn.classList.add('active-white');
                  options.data.state.whiteList = 'true';
                  options.data.state.suspended = 'false';
                  options.data.state.blackList = 'false';
                  parentWhiteBtn.classList.remove('active-black');
                  parentWhiteBtn.classList.remove('active-suspended');
                }

              }
            }).addClass('white-list').appendTo(container);

            $("<div />").dxButton({
              text: 'black list',
              height:30,
              width: 89,
              disabled: true,
              onClick: function (e) {
                //console.log(e);
                var parentWhiteBtn = e.element[0].parentNode;
                //console.log(parentWhiteBtn);
                if (parentWhiteBtn.classList.contains('active-black')) {
                  parentWhiteBtn.classList.remove('active-black');
                  parentWhiteBtn.classList.add('unactive-black');
                  options.data.state.blackList = 'false';
                } else if (!parentWhiteBtn.classList.contains('active-black')){
                  parentWhiteBtn.classList.remove('unactive-black');
                  parentWhiteBtn.classList.add('active-black');
                  options.data.state.blackList = 'true';
                  options.data.state.suspended = 'false';
                  options.data.state.whiteList = 'false';
                  parentWhiteBtn.classList.remove('active-white');
                  parentWhiteBtn.classList.remove('active-suspended');
                }

              }
            }).addClass('black-list').appendTo(container);

            $("<div />").dxButton({
              text: 'suspended',
              height:30,
              width: 95,
              disabled: true,
              onClick: function (e) {
                //console.log(e);
                var parentWhiteBtn = e.element[0].parentNode;
                //console.log(parentWhiteBtn);
                if (parentWhiteBtn.classList.contains('active-suspended')) {
                  parentWhiteBtn.classList.remove('active-suspended');
                  parentWhiteBtn.classList.add('unactive-suspended');
                  options.data.state.suspended = 'false';
                } else if (!parentWhiteBtn.classList.contains('active-suspended')){
                  parentWhiteBtn.classList.remove('unactive-suspended');
                  parentWhiteBtn.classList.add('active-suspended');
                  options.data.state.suspended = 'true';
                  options.data.state.whiteList = 'false';
                  options.data.state.blackList = 'false';
                  parentWhiteBtn.classList.remove('active-white');
                  parentWhiteBtn.classList.remove('active-black');

                }

              }
            }).addClass('suspended').appendTo(container);
          }
        }
      ],
      selection: {
        mode: 'multiple',
        showCheckBoxesMode: 'always'
      },
      onSelectionChanged: function (data) {
        vm.selectedItems = data.selectedRowsData;
        vm.disabled = !vm.selectedItems.length;
      }
    };
    /** MULTIPLE - END **/



    /** RANGE SELECTOR FIRST - START **/
    vm.rangeFirstChartOptions = {
      margin: {
        left: 50
      },
      size: {
        height: 150,
        width: 450
      },
      scale: {
        startValue:  new Date($localStorage.dataStart),
        endValue: new Date($localStorage.dataEnd),
        minorTickInterval: "day",
        minRange: "hour",
        maxRange: "month",
        minorTick: {
          visible: false
        }
      },
      sliderMarker: {
        format: "monthAndDay"
      }
      // selectedRange: {
      //   startValue: new Date($localStorage.dataStart),
      //   endValue: new Date($localStorage.dataEnd)
      // }
    };

    /** RANGE SELECTOR FIRST - END **/

    /** RANGE SELECTOR SECOND - START **/
    vm.rangeSecondChartOptions = {
      margin: {
        left: 50,
        top: 12
      },
      size: {
        height: 150,
        width: 450
      },
      scale: {
        startValue: new Date($localStorage.dataStart),
        endValue: new Date($localStorage.dataEnd),
        minorTickInterval: "day",
        minRange: "day",
        maxRange: "month",
        minorTick: {
          visible: false
        }
      },
      sliderMarker: {
        format: "monthAndDay"
      }
      // selectedRange: {
      //   startValue: new Date(2011, 2, 3),
      //   endValue: new Date(2011, 2, 9)
      // }
    };

    /** RANGE SELECTOR SECOND - END **/


    /** PIE CHART CONTAINER - START **/
    vm.ctrlBbtns = {
      placement:{
        btn:'Placement',
        header:'Placement'
      },
      creativeId: {
        btn:'creative_id',
        header:'creative_id'},
      creativeSize: {
        btn:'creative_size',
        header:'creative_size'
      },
      viewability: {
        btn:'viewability',
        header:'viewability'
      },
      os: {
        btn:'OS',
        header:'Operating System used'
      },
      carrier: {
        btn:'carrier',
        header:'carrier'
      },
      networkSeller: {
        btn:'network(seller)',
        header:'network (seller)'
      },
      connectionType: {
        btn:'connection_type',
        header:'connection_type'
      },
      device: {
        btn:'device',
        header:'device'
      },
      seller: {
        btn:'seller',
        header:'Seller'
      }
    };
    vm.pieChartHeader = $localStorage.pieChartHeader || vm.ctrlBbtns.os.header;

  }
})();
