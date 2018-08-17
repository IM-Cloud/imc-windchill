"use strict";
var myPDMLinkProductsModule = angular.module('windchillApp');
myPDMLinkProductsModule.controller('recentlyVisitedCtrl', ['$scope', '$http', 'userService', 'windchillService',
    function ($scope, $http, userService, windchillService) {
        $scope.tableHead = {
            prdName: '名称',
            modifytime: '上次修改时间',
            state: '状态',
            container: '上下文',
            version: '版本'
        };
        $scope.tableBody = [];
        $scope.params = {
            username: "",
            checkAccess: true
        };

        function getUser() {
            userService.getUserInformation().then(function (result) {
                if (result && result.data && result.data.name) {
                    $scope.params.username = result.data.name;
                    queryList()
                }
            });
        }

        function queryList() {
            windchillService.getRecentlyList($scope.params).then(function (result) {
                $scope.tableBody = JSON.parse(result.data).data;
            })
        }

        (function init() {
            getUser();
        })();
    }]);