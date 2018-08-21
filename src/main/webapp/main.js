'use strict';
require.config({
    "baseUrl": "./",
    "paths": {
        "angular": "lib/angular",
        "ui-router": "lib/angular-ui",
        "app": "src/app"
    }
});
require(["app/business/services/userService", "app/business/services/windchillService", "app/business/businessRouter"], function (app) {
    require(["app/business/controllers/recentlyVisitedCtrl",
        "app/business/controllers/myPDMLinkProductsCtrl",
        "app/business/controllers/myWTObjectsCtrl",
        "app/business/controllers/myCheckOutCtrl",
        "app/business/controllers/toDoTasksCtrl",
        "app/business/controllers/historicalTasksCtrl",
        "app/business/controllers/myUpdatesCtrl"], function () {
        angular.bootstrap($("html"), [app.name])
    })
});

