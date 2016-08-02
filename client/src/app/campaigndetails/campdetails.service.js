(function () {
  'use strict';

  angular
    .module('pjtLayout')
    .service('CampDetails', CampDetails);

  /** @ngInject */
  function CampDetails($http, $cookies) {
    var _this = this;


    function nameCampaigns(id) {
      return $http({
        method: 'GET',
        headers: { 'Authorization': 'Token ' + $cookies.get('token') },
        url: '/api/v1/campaigns/' + encodeURI(id) + ''
      })
        .then(function (res) {
          return res.data;
        });
    }

    function detailsStoreAll(id, from, to, section) {
      return $http({
        method: 'GET',
        url: '/api/v1/campaigns/' + encodeURI(id) + '/details',
        headers: { 'Authorization': 'Token ' + $cookies.get('token') },
        params: {from_date: from, to_date: to, section: section}
      })
        .then(function (res) {
          return res.data;
        });
    }



    function bucketsCpa(id, from, to) {
      return $http({
        method: 'GET',
        url: '/api/v1/campaigns/' + encodeURI(id) + '/cpabuckets',
        headers: { 'Authorization': 'Token ' + $cookies.get('token') },
        params: {id:id, from_date: from, to_date: to}
      })
        .then(function (res) {
          return res.data;
        });
    }

    _this.nameCampaigns = nameCampaigns;
    _this.bucketsCpa = bucketsCpa;
    _this.detailsStoreAll = detailsStoreAll;
  }
})();
