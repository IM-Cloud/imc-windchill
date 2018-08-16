'use strict';
angular.module('windchillApp').service('userService', ['$http', function ($http) {

    this.userUrl = window.configData.userUrl + "/user/me";

    this.getUserInformation = function () {
        return $http.get(this.userUrl)
    }

}]);