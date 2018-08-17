"use strict";
var myUpdatesModule = angular.module('windchillApp');
myUpdatesModule.controller('myUpdatesCtrl', ['$scope',
    function ($scope) {
        $scope.tableHead = {
            number:"编号",
            name:"名称",
            modifytime:"上次修改时间",
            container:"上下文",
            state:"状态",
            version:"版本"
        };
        $scope.tableBody = [
            {
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
            }
        ];

        (function init() {

        })();
    }]);