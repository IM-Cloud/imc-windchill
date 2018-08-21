define([
    "app/business/businessRouter"
], function () {
    "use strict";
    var myPDMLinkProductsModule = angular.module('windchillApp');
    myPDMLinkProductsModule.register.controller('recentlyVisitedCtrl', ['$scope', '$http', 'userService', 'windchillService',
        function ($scope, $http, userService, windchillService) {
            $scope.header = {
                label: '最近访问'
            };
            $scope.tableHead = {
                prdName: '名称',
                modifytime: '修改时间',
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
    return myPDMLinkProductsModule;
});