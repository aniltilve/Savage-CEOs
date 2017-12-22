var team = angular.module('team', []);

team.controller('teamCtrl', teamCtrl);

function teamCtrl($scope) {
    $scope.pages = [{
        url: '#!/Artists',
        page: 'Artists',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/rappers.svg'
    }, {
        url: '#!/Producers',
        page: 'Producers',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/booth.jpg'
    }, {
        url: '#!/Engineers',
        page: 'Engineers',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/engineer.jpg'
    }, {
        url: '#!/Dancers',
        page: 'Dancers',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/brakedance.jpg'
    }]
}
