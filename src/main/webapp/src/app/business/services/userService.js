'use strict';
angular.module('windchillApp').service('userService', ['$http', function ($http) {

    this.userUrl = window.configData.userUrl + "/imc-lt/rest/me";

    this.getUserInformation = function () {
        return $http.get(this.userUrl)
    }

}]);