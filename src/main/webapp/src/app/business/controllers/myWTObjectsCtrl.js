define([
    "language"
], function (i18n) {
    "use strict";
    var myWTObjectsModule = angular.module('windchillApp');
    myWTObjectsModule.register.controller('myWTObjectsCtrl', ['$scope', 'userService', 'windchillService',
        function ($scope, userService, windchillService) {
            $scope.header = {
                label: i18n.my_wt_objects_lable
            };
            $scope.tableHead = {
                number: i18n.table_head_number,
                name: i18n.table_head_name,
                modifytime: i18n.table_head_edit_time,
                container: i18n.table_head_container,
                state: i18n.table_head_state,
                version: i18n.table_head_version
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
                if (!$scope.inSearchPart && !$scope.inSearchDoc) {
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
                } else if (val === "next" && $scope.search.indexpage < $scope.allPage) {
                    $scope.search.indexpage++;
                    queryList($scope.search);
                }
            };
            (function init() {
                getUser();
            })();
        }]);
    return myWTObjectsModule;
});