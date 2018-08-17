'use strict';
angular.module('windchillApp').service('windchillService', ['$http', function ($http) {
    this.recentlyVisitedUrl = window.configData.appPath + '/windchill/recentlyVisited';
    this.myPDMLinkProductsUrl = window.configData.appPath + "/windchill/myPDMLinkProducts";
    this.myCheckOutUrl = window.configData.appPath + "/windchill/myCheckOut";
    this.myWTObjectsUrl = window.configData.appPath + "/windchill/myWTObjects";
    this.toDoTasksUrl = window.configData.appPath + "/windchill/toDoTasks";
    this.historicalTasksUrl = window.configData.appPath + "/windchill/historicalTasks";
    this.myUpDatesUrl = window.configData.appPath + "/windchill/myUpDates";
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
    this.getMyWTObjects = function (params) {
        if (params) {
            this.myWTObjectsUrl = this.myWTObjectsUrl + '?';
            for (var key in params) {
                this.myWTObjectsUrl = this.myWTObjectsUrl + key + '=' + params[key] + '&';
            }
            if (this.myWTObjectsUrl.lastIndexOf('&')) {
                this.myWTObjectsUrl = this.myWTObjectsUrl.substring(0, this.myWTObjectsUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.myWTObjectsUrl)
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
    };
    this.getToDotasks = function (params) {
        if (params) {
            this.toDoTasksUrl = this.toDoTasksUrl + '?';
            for (var key in params) {
                this.toDoTasksUrl = this.toDoTasksUrl + key + '=' + params[key] + '&';
            }
            if (this.toDoTasksUrl.lastIndexOf('&')) {
                this.toDoTasksUrl = this.toDoTasksUrl.substring(0, this.toDoTasksUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.toDoTasksUrl)
    }
    this.getHistoricalTasks = function (params) {
        if (params) {
            this.historicalTasksUrl = this.historicalTasksUrl + '?';
            for (var key in params) {
                this.myUpDatesUrl = this.myUpDatesUrl + key + '=' + params[key] + '&';
            }
            if (this.historicalTasksUrl.lastIndexOf('&')) {
                this.historicalTasksUrl = this.historicalTasksUrl.substring(0, this.historicalTasksUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.historicalTasksUrl)
    };
    this.getMyUpDates = function (params) {
        if (params) {
            this.myUpDatesUrl = this.myUpDatesUrl + '?';
            for (var key in params) {
                this.myUpDatesUrl = this.myUpDatesUrl + key + '=' + params[key] + '&';
            }
            if (this.myUpDatesUrl.lastIndexOf('&')) {
                this.myUpDatesUrl = this.myUpDatesUrl.substring(0, this.myUpDatesUrl.lastIndexOf('&'))
            }
        }
        return $http.get(this.myUpDatesUrl)
    }
}]);