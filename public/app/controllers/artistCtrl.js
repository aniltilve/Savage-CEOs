var Artists = angular.module('Artists', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/2Tone', {
                templateUrl: 'app/Team/Artists/2Tone.html',
                controller: function() {}
            })
            .when('/40G', {
                templateUrl: 'app/Team/Artists/40G.html',
                controller: function() {}
            })
            .when('/5AM', {
                templateUrl: 'app/Team/Artists/5AM.html',
                controller: function() {}
            })
            .when('/Armani', {
                templateUrl: 'app/Team/Artists/Armani.html',
                controller: function() {}
            })
            .when('/BlueGhost', {
                templateUrl: 'app/Team/Artists/BlueGhost.html',
                controller: function() {}
            })
            .when('/EsteeLavoe', {
                templateUrl: 'app/Team/Artists/EsteeLavoe.html',
                controller: function() {}
            })
            .when('/Geno', {
                templateUrl: 'app/Team/Artists/Geno.html',
                controller: function() {}
            })
            .when('/J-Stab', {
                templateUrl: 'app/Team/Artists/J-Stab.html',
                controller: function() {}
            })
            .when('/KDot', {
                templateUrl: 'app/Team/Artists/KDot.html',
                controller: function() {}
            })
            .when('/KidCarmy', {
                templateUrl: 'app/Team/Artists/KidCarmy.html',
                controller: function() {}
            })
            .when('/KubiSi', {
                templateUrl: 'app/Team/Artists/KubiSi.html',
                controller: function() {}
            })
            .when('/Kviii', {
                templateUrl: 'app/Team/Artists/Kviii.html',
                controller: function() {}
            })
            .when('/M.Draztic', {
                templateUrl: 'app/Team/Artists/M.Draztic.html',
                controller: function() {}
            })
            .when('/PaulDKelly', {
                templateUrl: 'app/Team/Artists/PaulDKelly.html',
                controller: function() {}
            })
            .when('/RayB', {
                templateUrl: 'app/Team/Artists/RayB.html',
                controller: function() {}
            })
            .when('/Swizzy', {
                templateUrl: 'app/Team/Artists/Swizzy.html',
                controller: function() {}
            })
            .when('/TheeRemedy', {
                templateUrl: 'app/Team/Artists/TheeRemedy.html',
                controller: function() {}
            })
            .when('/Trust', {
                templateUrl: 'app/Team/Artists/Trust.html',
                controller: function() {}
            })
            .when('/UrlyBurd', {
                templateUrl: 'app/Team/Artists/UrlyBurd.html',
                controller: function() {}
            })
            .when('/YungFrostbite', {
                templateUrl: 'app/Team/Artists/YungFrostbite.html',
                controller: function() {}
            })
            .when('/Zaya', {
                templateUrl: 'app/Team/Artists/Zaya.html',
                controller: function() {}
            });
    }]);

Artists.controller('artistCtrl', artistCtrl);

function artistCtrl($scope) {
    $scope.artists = [{
        name: 'Kubi $i',
        url: '#!/KubiSi',
        location: 'Artist from Milwaukee, Wisconsin.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/KubiSi/KubiSi-cropped.jpg',
        soundCloudProfileUrl: 'https://soundcloud.com/kubisi'
    }, {
        name: 'Trust',
        url: '#!/Trust',
        location: 'Artist from East Orange, NJ.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/Trust/TrustCropped.jpg',
        soundCloudProfileUrl: ''
    }, {
        name: 'Geno',
        url: '#!/Geno',
        location: 'Artist from Chicago, IL.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/Geno/Geno1.png',
        soundCloudProfileUrl: 'https://soundcloud.com/nolawmusic/tracks'
    }, {
        name: 'Blue Ghost',
        url: '#!/BlueGhost',
        location: 'Blue Ghost from Camden, NJ.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/BlueGhost/blueGhost5.jpg',
        soundCloudProfileUrl: 'https://soundcloud.com/mrblueeghost/tracks',
        youtube: 'https://www.youtube.com/embed/9XQuTBPkBI0'
    }, {
        name: '40G',
        url: '#!/40G',
        location: 'Artist from Fort Wayne, IN.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/40G/40g10-cropped.jpg',
        soundCloudProfileUrl: 'https://soundcloud.com/ray-james-17',
        youtube: 'https://www.youtube.com/embed/Orpvw4LDIDU'
    }, {
        name: 'Kid Carmy',
        url: '#!/KidCarmy',
        location: 'Artist from Freehold Boro, NJ.',
        img1: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Team/KidCarmy/KidCarmy1Cropped.jpg',
        soundCloudProfileUrl: 'https://soundcloud.com/kidcarmy/tracks',
        youtube: 'https://www.youtube.com/embed/tXKLOjQbRlc'
            // }, {
            //     name: 'Zaya',
            //     url: '#!/Zaya',
            //     location: 'Artist from New Brunswick, NJ.',
            //     img1: 'Zaya.jpg',
            //     soundCloudProfileUrl: 'https://soundcloud.com/senseizay'
            // }, {
            //     name: 'Godhead',
            //     url: '#!/PaulDKelly',
            //     location: 'Artist from Elkhart, Indiana.',
            //     img1: 'PaulD.Kelly1.jpg',
            //     soundCloudProfileUrl: 'https://soundcloud.com/paul-d-kelly/tracks'
            // }, {
            //     name: 'KDot',
            //     url: '#!/KDot',
            //     location: 'Artist from New Brunswick, NJ.',
            //     img1: 'KDot7.jpg',
            //     soundCloudProfileUrl: ''
            // }, {
            //     name: 'Five AM',
            //     url: '#!/5AM',
            //     location: 'Artist from South Bend, IN.',
            //     img1: 'FiveAM.jpg',
            //     soundCloudProfileUrl: 'https://soundcloud.com/official5am/tracks'
    }]

}
