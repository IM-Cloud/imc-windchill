"use strict";
var myPDMLinkProductsModule = angular.module('windchillApp');

myPDMLinkProductsModule.controller('recentlyVisitedCtrl', ['$scope', '$http', 'userService', 'windchillService',
    function ($scope, $http, userService, windchillService) {
        $scope.tableHead = {
            prdName: '名称',
            modifyTime: '上次修改时间',
            state: '状态',
            container: '上下文',
            version: '版本'
        };
        $scope.tableBody = [];
        
/*        $http.get('src/app/business/dataJson/tableOne.json').success(function (result) {
            if (result) {
                $scope.tableBody = result.data;
                }
        }).error(function (err) {});*/

        $scope.hasUserLogin = false;
        $scope.params = {
            username: "",
            checkAccess: false
        };
        userService.getUserInformation().then(function (result) {
            if (result) {
                $scope.params.username = result.data.name;
                $scope.hasUserLogin = true;
            }
        });
        if ($scope.hasUserLogin) {
            windchillService.getInformation($scope.params).then(function (result) {
                $scope.tableBody = result.data.data
            })
        }

    }]);


    








