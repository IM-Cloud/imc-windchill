'use strict';
angular.module('windchillApp').service('windchillService', ['$http', function ($http) {
    this.recentlyVisitedUrl = window.configData.appPath + '/windchill/recentlyVisited';
    this.getInformation = function (params) {
        if(params){
            this.recentlyVisitedUrl=this.recentlyVisitedUrl+'?';
            for(var key in params){
                this.recentlyVisitedUrl=this.recentlyVisitedUrl+key+'='+params.key+'&';
            }
            if(this.recentlyVisitedUrl.lastIndexOf('&')){
                this.recentlyVisitedUrl=this.recentlyVisitedUrl.substring(0,this.recentlyVisitedUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.recentlyVisitedUrl)
    }
}]);