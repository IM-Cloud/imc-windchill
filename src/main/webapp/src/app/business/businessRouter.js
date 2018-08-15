'use strict';
angular.module('windchillApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("tableOne", {
                    url: '/tableOne',
                    templateUrl: 'src/app/business/views/recentlyVisited.html',
                    controller: 'recentlyVisitedCtrl'
                })
                .state("tableTwo", {
                    url: '/tableTwo',
                    templateUrl: 'src/app/business/views/myPDMLinkProducts.html',
                    controller: 'myPDMLinkProductsCtrl'
                });

            $urlRouterProvider.otherwise('/tableOne');
            window.isdev = true;
        }]);



