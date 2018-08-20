define([
    "app/business/businessRouter",
    "app/business/services/userService",
    "app/business/services/windchillService"
],function () {
    "use strict";
    var toDoTasksModule = angular.module('windchillApp');
    toDoTasksModule.controller('toDoTasksCtrl', ['$scope', 'userService', 'windchillService',
        function ($scope, userService, windchillService) {
            $scope.header = {
                label: '我的待办'
            };
            $scope.tableHead = {
                workitemName: "名称",
                themeName: "主题",
                objectState: "状态",
                objectContainer: "上下文",
                objectTime: "创建时间",
                role: "角色"
            };
            $scope.tableBody = [
                /* {
                     workitemName: "编制",
                     workitemUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     themeName: "部件 - t000001548,图样名称，A1",
                     objectUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     objectState: "正在工作",
                     objectContainer: "XXX产品部",
                     objectTime: "2018/5/31 13：34",
                     role: "工作负责人"
                 },
                 {
                     workitemName: "编制",
                     workitemUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     themeName: "部件 - t000001548,图样名称，A1",
                     objectUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     objectState: "正在工作",
                     objectContainer: "XXX产品部",
                     objectTime: "2018/5/31 13：34",
                     role: "工作负责人"
                 },
                 {
                     workitemName: "编制",
                     workitemUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     themeName: "部件 - t000001548,图样名称，A1",
                     objectUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                     objectState: "正在工作",
                     objectContainer: "XXX产品部",
                     objectTime: "2018/5/31 13：34",
                     role: "工作负责人"
                 }*/
            ];
            $scope.params = {
                username: "",
                checkAccess: true
            };

            function getUser() {
                userService.getUserInformation().then(function (result) {
                    if (result) {
                        $scope.params.username = result.data.name;
                        queryList()
                    }
                });
            }

            function queryList() {
                windchillService.getToDotasks($scope.params).then(function (result) {
                    $scope.tableBody = JSON.parse(result.data).data;
                })
            }

            (function init() {
                getUser();
            })();
        }]);
    return toDoTasksModule;
});