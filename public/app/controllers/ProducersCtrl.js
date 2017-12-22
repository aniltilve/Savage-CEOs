var Producers = angular.module('Producers', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/A1fonsoBeats', {
                templateUrl: 'app/Team/Producers/A1fonsoBeats.html',
                controller: function() {}
            })
            .when('/JohnHawkdoe', {
                templateUrl: 'app/Team/Producers/JohnHawkdoe.html',
                controller: function() {}
            })
            .when('/NicKeyStringz', {
                templateUrl: 'app/Team/Producers/NicKeyStringz.html',
                controller: function() {}
            })
            .when('/OldSkool', {
                templateUrl: 'app/Team/Producers/OldSkool.html',
                controller: function() {}
            })
            .when('/SGBeatz', {
                templateUrl: 'app/Team/Producers/SGBeatz.html',
                controller: function() {}
            })
            .when('/WillRod', {
                templateUrl: 'app/Team/Producers/WillRod.html',
                controller: function() {}
            })
            .when('/ArtistParty', {
                templateUrl: 'app/Team/Producers/artistParty.html',
                controller: function() {}
            })
            .when('/MuteWon', {
                templateUrl: 'app/Team/Producers/muteWon.html',
                controller: function() {}
            });
    }]);

Producers.controller('ProducersCtrl', ProducersCtrl);

function ProducersCtrl($scope) {
    $scope.producers = [{
            name: 'SG Beatz',
            url: '#!/SGBeatz',
            img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/SGBeatz/sgBeatz.jpg',
            location: 'Producer from Chicago, IL.',
            soundcloudProfileUrl: "http://soundcloud.com/sgbeatzstr8heat/tracks"
        }, {
            name: 'NicKey Stringz',
            url: '#!/NicKeyStringz',
            img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/NickeyStringz/NickeyStringz7Cropped.jpg',
            location: 'Producer from Brooklyn, NY.',
            soundcloudProfileUrl: "http://soundcloud.com/nickaaron"
        },

        {
            name: 'OLDSKOOL',
            url: '#!/OldSkool',
            img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/OldSkool/oldSkool5new.jpeg',
            location: 'Producer / DJ from South Brunswick, NJ.',
            soundcloudProfileUrl: "https://www.soundcloud.com/daniioldskool/tracks"
        }, {
            name: 'Mute Won',
            url: '#!/MuteWon',
            img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/MuteWon/muteWon1.jpg',
            location: 'Producer from Camden, NJ.',
            soundcloudProfileUrl: "https://soundcloud.com/mute-won/tracks"
        }
    ]
}
