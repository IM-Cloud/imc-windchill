'use strict';
angular.module('windchillApp').service('windchillService', ['$http', function ($http) {

    this.recentlyVisitedUrl =window.configData.appPath+ '/Windchill/recentlyVisited';

    this.getInformation = function () {
        return $http.get(this.recentlyVisitedUrl)
    }
}]);