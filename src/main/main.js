'use strict';

require.config({
    "baseUrl": "./",
    "paths": {
        "jquery":"lib",
        "angular":"lib/angular",
        "ui-router":"lib/angular-ui",
        "bootstrap":"lib/bootstrap-3.3.7-dist/js",
        "RouterSetting":"src/app/business",
        "windchillService":"src/app/business/services/windchillService",
        "businessCtrl":"src/app/business/controllers"
    }
});
require(["jquery/jquery-3.3.1.min","bootstrap/bootstrap.min","angular/angular","ui-router/angular-ui-router"],function () {
    require(["RouterSetting/businessRouter"],function () {

    })
});