"use strict";
var myWTObjectsModule = angular.module('windchillApp');
myWTObjectsModule.controller('myWTObjectsCtrl', ['$scope', 'userService', 'windchillService',
    function ($scope, userService, windchillService) {
        $scope.tableHead = {
            number: '编号',
            name: '名称',
            modifytime: "修改时间",
            container: "上下文",
            state: "状态",
            version: "版本"
        };
        $scope.tableBody = [];
        $scope.inNumber = undefined;
        $scope.inName = undefined;
        $scope.inSearchPart = false;
        $scope.inSearchDoc = false;
        $scope.allPage = 1;
        $scope.search = {
            username: '',
            checkAccess: true,
            indexpage: 1
        };

        function getUser() {
            userService.getUserInformation().then(function (result) {
                if (result) {
                    $scope.search.username = result.data.name;
                }
            });
        }

        function queryList(obj) {
            windchillService.getMyWTObjects(obj).then(function (result) {
                $scope.tableBody = JSON.parse(result.data).data;
                $scope.allPage = JSON.parse(result.data).data[0].totalPages
            })
        }

        $scope.revertSearch = function () {
            $scope.search = {
                indexpage: 1
            };
            $scope.inNumber = undefined;
            $scope.inName = undefined;
            $scope.inSearchPart = false;
            $scope.inSearchDoc = false;
        };
        $scope.searchObject = function () {
            $scope.inNumber ? $scope.search.number = $scope.inNumber : delete $scope.search.number;
            $scope.inName ? $scope.search.name = $scope.inName : delete $scope.search.name;
            $scope.inSearchPart ? $scope.search.searchPart = true : $scope.search.searchPart = false;
            $scope.inSearchDoc ? $scope.search.searchDoc = true : $scope.search.searchDoc = false;
            if (!$scope.inNumber && !$scope.inName) {
                return;
            }
            queryList($scope.search);
        };
        $scope.pageIndex = function (val) {
            if (!$scope.inNumber && !$scope.inName) {
                return;
            }
            if (val === "pre" && $scope.search.indexpage > 1) {
                $scope.search.indexpage--;
                queryList($scope.search);
            } else if (val === "next") {
                $scope.search.indexpage++;
                queryList($scope.search);
            }
        };
        (function init() {
            getUser();
        })();
    }]);