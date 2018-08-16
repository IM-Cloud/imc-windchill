'use strict';
angular.module('windchillApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
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
                });

            $urlRouterProvider.otherwise('/recentlyVisited');
            window.isdev = true;
        }]);





