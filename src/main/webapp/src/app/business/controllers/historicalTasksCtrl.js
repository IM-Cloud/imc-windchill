"use strict";
var historicalTasksModule = angular.module('windchillApp');
historicalTasksModule.controller('historicalTasksCtrl', ['$scope', 'userService', 'windchillService',
    function ($scope, userService, windchillService) {
        $scope.header = {
            label: '我的已办'
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
            /*  {
                  workitemName: "编制",
                  workitemUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                  themeName: "部件 - t000001548,图样名称，A1",
                  objectUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                  objectState: "正在工作",
                  objectContainer: "XXX产品部",
                  objectTime: "2018/5/31 13：34",
                  role: "工作负责人"
              }, {
                  workitemName: "编制",
                  workitemUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                  themeName: "部件 - t000001548,图样名称，A1",
                  objectUrl: "http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.part.WTPart:401108333&u8=1",
                  objectState: "正在工作",
                  objectContainer: "XXX产品部",
                  objectTime: "2018/5/31 13：34",
                  role: "工作负责人"
              }, {
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
            checkAccess: true,
            indexpage: $scope.indexpage
        };
        $scope.indexpage = 1;

        function getUser() {
            userService.getUserInformation().then(function (result) {
                if (result) {
                    $scope.params.username = result.data.name;
                    queryList()
                }
            });
        }

        function queryList() {
            windchillService.getHistoricalTasks($scope.params).then(function (result) {
                if (result && result.data) {
                    $scope.tableBody = result.data.data;
                }
            })
        }

        $scope.pageIndex = function (val) {
            if (!$scope.params.username) {
                return
            }
            if (val === "pre" && $scope.indexpage > 1) {
                $scope.indexpage--;
                queryList();
            } else if (val === "next") {
                $scope.indexpage++;
                queryList();
            }
        };
        (function init() {
            getUser();
        })();
    }]);