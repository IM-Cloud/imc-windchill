"use strict";
var myPDMLinkProductsModule = angular.module('windchillApp');
myPDMLinkProductsModule.controller('myPDMLinkProductsCtrl', ['$scope', 'userService', 'windchillService',
    function ($scope, userService, windchillService) {
        $scope.tableHead = {
            container: '名称',
            creator: '创建人',
            createtime: "创建时间"
        };
        $scope.tableBody = [
           /* {
                container: 'xxx产品库',
                containerUrl: 'http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1',
                creator: '张三',
                createtime: "2010/05/30 16:08 CST"
            },
            {
                container: 'xxx零件库',
                containerUrl: 'http:/plmdev.unidoyun.com/Windchill/app/#ptc1/tcomp/infoPage?oid=OR:wt.pdmlink.PDMLinkProduct:142887090&u8=1',
                creator: 'wcadmin',
                createtime: "2010/05/30 16:08 CST"
            }*/
        ];
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
            windchillService.getMyPDMLinkProducts($scope.params).then(function (result) {
                $scope.tableBody = JSON.parse(result.data).data;
            })
        }

        (function init() {
            getUser();
        })()
    }]);