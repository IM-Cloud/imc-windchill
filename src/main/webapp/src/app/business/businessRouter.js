define([
    // "app/business/controllers/recentlyVisitedCtrl"
], function () {
    'use strict';
    var businessRouter = angular.module('windchillApp', ['ui.router']);
    businessRouter.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("recentlyVisited", {
                    url: '/recentlyVisited',
                    templateUrl: 'src/app/business/views/recentlyVisited.html',
                    controller: 'recentlyVisitedCtrl'
                })
                .state("myPDMLinkProducts", {
                    url: '/myPDMLinkProducts',
                    templateUrl: 'src/app/business/views/myPDMLinkProducts.html',
                    controller: 'myPDMLinkProductsCtrl'
                })
                .state("myWTObjects", {
                    url: '/myWTObjects',
                    templateUrl: 'src/app/business/views/myWTObjects.html',
                    controller: 'myWTObjectsCtrl'
                })
                .state("myCheckOut", {
                    url: '/myCheckOut',
                    templateUrl: 'src/app/business/views/myCheckOut.html',
                    controller: 'myCheckOutCtrl'
                })
                .state("toDoTasks", {
                    url: '/toDoTasks',
                    templateUrl: 'src/app/business/views/toDoTasks.html',
                    controller: 'toDoTasksCtrl'
                })
                .state("historicalTasks", {
                    url: '/historicalTasks',
                    templateUrl: 'src/app/business/views/historicalTasks.html',
                    controller: 'historicalTasksCtrl'
                })
                .state("myUpdates", {
                    url: '/myUpdates',
                    templateUrl: 'src/app/business/views/myUpdates.html',
                    controller: 'myUpdatesCtrl'
                });
            $urlRouterProvider.otherwise('/recentlyVisited');
            window.isdev = true;
        }]);
    return businessRouter;
});
