"use strict";

var myPDMLinkProductsModule = angular.module('windchillApp');
myPDMLinkProductsModule.controller('myPDMLinkProductsCtrl', ['$scope',
    function ($scope) {
        $scope.tableHead = {
            prdName: '名称',
            prdcreator: '创建人',
            creattime: "创建时间"
        };
        $scope.tableBody = [
            {
                prdName: 'xxx产品库',
                objUrl: 'http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1',
                prdcreator: '张三',
                creattime: "2010/05/30 16:08 CST"
            },
            {
                prdName: 'xxx零件库',
                objUrl: 'http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1',
                prdcreator: 'wcadmin',
                creattime: "2010/05/30 16:08 CST"
            }
        ];


    }]);



