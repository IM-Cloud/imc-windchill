"use strict";

var myWTObjectsModule = angular.module('windchillApp');
myWTObjectsModule.controller('myWTObjectsCtrl', ['$scope',
    function ($scope) {
        $scope.tableHead = {
            number: '编号',
            name: '名称',
            modifytime: "修改时间",
            container:"上下文",
            state:"状态",
            version:"版本"
        };
        $scope.tableBody = [
            {
                number: '8BK012365489',
                name: 'XXX部件',
                objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                modifytime: "2018/8/13 12:03",
                container:"XXX产品库",
                state:"已发布",
                version:"A.1"
            },   {
                number: '8BK012365489',
                name: 'XXX部件',
                objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                modifytime: "2018/8/13 12:03",
                container:"XXX产品库",
                state:"已发布",
                version:"A.1"
            },  {
                number: '8BK012365489',
                name: 'XXX部件',
                objUrl:"http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1",
                modifytime: "2018/8/13 12:03",
                container:"XXX产品库",
                state:"已发布",
                version:"A.1"
            }

        ];
        $scope.search={
            number:'',
            name:''
        };
        $scope.searchObject=function () {
            console.log($scope.search);
        }

    }]);





