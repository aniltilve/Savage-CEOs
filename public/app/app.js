'use strict';

var savage = angular.module('savage', [
    'ui.materialize',
    'ngRoute',
    'homeComponent',
    'Artists',
    'Producers',
    'team',
    'shop'
]);

// savage.run(function() {
//     $('.carousel').carousel();
//     $('.materialboxed').materialbox();
//     autoplay();
//     $(".button-collapse").sideNav({
//         edge: 'right',
//         closeOnClick: true
//     });

//     function autoplay() {
//         $('.carousel').carousel('next');
//         setTimeout(autoplay, 4500);
//     }
//     $('.slider').slider({ full_width: true });
//     $('.parallax').parallax();
//     $(".dropdown-button").dropdown();
//     $('.button-collapse').sideNav({ menuWidth: 300, edge: 'right', closeOnClick: true });
//     $('select').material_select();
// });

savage.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/About', {
            templateUrl: 'app/About.html',
            controller: function() {}
        })
        .when('/Artists', {
            templateUrl: 'app/Team/Artists.html',
            controller: 'artistCtrl'
        })
        .when('/Producers', {
            templateUrl: 'app/team/Producers.html',
            controller: 'ProducersCtrl'
        })
        .when('/Music', {
            templateUrl: 'app/Music.html',
            controller: 'musicCtrl'
        })
        .when('/Shop', {
            templateUrl: 'app/Shop.html',
            controller: 'shopCtrl'
        })
        .when('/Hats', {
            templateUrl: 'app/Shop/Hats.html',
            controller: 'hatsCtrl'
        })
        .when('/Hoodies', {
            templateUrl: 'app/Shop/Hoodies.html',
            controller: 'hoodiesCtrl'
        })
        .when('/TShirts', {
            templateUrl: 'app/Shop/TShirts.html',
            controller: 'TShirtsCtrl'
        })
        .when('/Team', {
            templateUrl: 'app/Team/Team.html',
            controller: 'teamCtrl'
        })
        .when('/shoutOuts', {
            templateUrl: 'app/Team/ShoutOuts.html',
            controller: 'shoutOutCtrl'
        })
        .when('/Dancers', {
            templateUrl: 'app/team/Dancers.html',
            controller: function() {}
        })
        .when('YoungChuck', {
            templateUrl: 'app/Dancers/YoungChuck.html',
            controller: function() {}
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);