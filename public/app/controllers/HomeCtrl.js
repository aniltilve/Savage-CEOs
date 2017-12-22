var homeComponent = angular.module("homeComponent", ["ngRoute", "ngMaterial",'ngSanitize', 'ngMessages', 'ngAria', 'ngAnimate', "materialCalendar"]);

homeComponent.config(function($mdThemingProvider) {
    $mdThemingProvider
        .theme("default")
        .primaryPalette("cyan")
        .accentPalette("light-green");
});

homeComponent.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/home.html',
            controller: 'eventCtrl'
        })
}]);
