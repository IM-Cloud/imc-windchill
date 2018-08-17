'use strict';
angular.module('windchillApp').service('windchillService', ['$http', function ($http) {
    this.recentlyVisitedUrl = window.configData.appPath + '/windchill/recentlyVisited';
    this.myPDMLinkProductsUrl = window.configData.appPath + "/windchill/myPDMLinkProducts";
    this.myCheckOutUrl = window.configData.appPath + "/windchill/myCheckOut";
    this.getRecentlyList = function (params) {
        if (params) {
            this.recentlyVisitedUrl = this.recentlyVisitedUrl + '?';
            for (var key in params) {
                this.recentlyVisitedUrl = this.recentlyVisitedUrl + key + '=' + params[key] + '&';
            }
            if (this.recentlyVisitedUrl.lastIndexOf('&')) {
                this.recentlyVisitedUrl = this.recentlyVisitedUrl.substring(0, this.recentlyVisitedUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.recentlyVisitedUrl)
    };
    this.getMyPDMLinkProducts = function (params) {
        if (params) {
            this.myPDMLinkProductsUrl = this.myPDMLinkProductsUrl + '?';
            for (var key in params) {
                this.myPDMLinkProductsUrl = this.myPDMLinkProductsUrl + key + '=' + params[key] + '&';
            }
            if (this.myPDMLinkProductsUrl.lastIndexOf('&')) {
                this.myPDMLinkProductsUrl = this.myPDMLinkProductsUrl.substring(0, this.myPDMLinkProductsUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.myPDMLinkProductsUrl)
    };
    this.getMyCheckOut = function (params) {
        if (params) {
            this.myCheckOutUrl = this.myCheckOutUrl + '?';
            for (var key in params) {
                this.myCheckOutUrl = this.myCheckOutUrl + key + '=' + params[key] + '&';
            }
            if (this.myCheckOutUrl.lastIndexOf('&')) {
                this.myCheckOutUrl = this.myCheckOutUrl.substring(0, this.myCheckOutUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.myCheckOutUrl)
    }
}]);