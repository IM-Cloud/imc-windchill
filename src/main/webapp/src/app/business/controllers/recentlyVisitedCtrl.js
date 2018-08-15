"use strict";
var myPDMLinkProductsModule = angular.module('windchillApp');

myPDMLinkProductsModule.controller('recentlyVisitedCtrl', ['$scope', '$q', '$http', 'windchillService',
    function ($scope, $q, $http, windchillService) {
        $scope.tableHead = {
            prdName: '名称',
            modifyTime: '上次修改时间',
            state: '状态',
            upDownText: '上下文',
            version: '版本'
        };
        $scope.tableBody = [];


        /*$http.get('src/app/business/dataJson/tableOne.json').success(function (result) {
            if (result) {
                $scope.tableBody = result.data;
            }
        }).error(function (err) {
        });*/

        windchillService.getInformation().then(function (result) {
            console.log(result);
            $scope.tableBody = result.data.data
        })

    }]);
    








