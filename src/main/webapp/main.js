'use strict';

require.config({
    "baseUrl": "./",
    "paths": {
        "jquery": "lib/jquery-3.3.1.min",
        "angular": "lib/angular/angular",
        "ui-router": "lib/angular-ui/angular-ui-router",
        "bootstrap": "lib/bootstrap-3.3.7-dist/js/bootstrap.min",
        "RouterSetting": "src/app/business/businessRouter",
        "windchillService": "src/app/business/services/windchillService",
        "recentlyVisitedCtrl": "src/app/business/controllers/recentlyVisitedCtrl",
        "myPDMLinkProductsCtrl": "src/app/business/controllers/myPDMLinkProductsCtrl"
    }
});
require(["jquery","angular","ui-router"], function () {

});

