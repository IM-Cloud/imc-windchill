define([], function () {
    "use strict";
    var myUpdatesModule = angular.module('windchillApp');
    myUpdatesModule.register.controller('myUpdatesCtrl', ['$scope', 'userService', 'windchillService',
        function ($scope, userService, windchillService) {
            $scope.header = {
                label: '我的更新'
            };
            $scope.tableHead = {
                number: "编号",
                name: "名称",
                modifytime: "修改时间",
                container: "上下文",
                state: "状态",
                version: "版本"
            };
            $scope.tableBody = [
                /*  {
                      number:"8BK498463513",
                      name:"XXX部件",
                      objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                      modifytime:"2801/08/14 10:55",
                      container:"XXX产品库",
                      state:"已发布",
                      version:"A.1"
                  },{
                      number:"8BK498463513",
                      name:"XXX部件",
                      objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                      modifytime:"2801/08/14 10:55",
                      container:"XXX产品库",
                      state:"已发布",
                      version:"A.1"
                  },{
                      number:"8BK498463513",
                      name:"XXX部件",
                      objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                      modifytime:"2801/08/14 10:55",
                      container:"XXX产品库",
                      state:"已发布",
                      version:"A.1"
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
                windchillService.getMyUpDates($scope.params).then(function (result) {
                    $scope.tableBody = JSON.parse(result.data).data;
                })
            }

            (function init() {
                getUser();
            })();
        }]);
    return myUpdatesModule;
});