(function () {
    'use strict';

    // registering on angular
    angular.module('vilaMota').controller('homeController', HomeController);

    // injecting dependencies
    HomeController.$inject = [
        '$scope',
        '$mdSidenav'
    ];

    // Main Controller
    function HomeController($scope, $mdSidenav) {
        var list = [],
            i;

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        for (i = 0; i < 100; i++) {
            list.push({
                'name'  : 'List Item ' + i,
                'idx'   : i
            });
        }
        $scope.list = list;

    }
}());
