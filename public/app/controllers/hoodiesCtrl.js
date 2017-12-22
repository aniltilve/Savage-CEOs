var hoodies = angular.module('hoodies', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

    }]);

hoodies.controller('hoodiesCtrl', hoodiesCtrl);

function hoodiesCtrl($scope) {
    $scope.hoodies = [{
        name: 'Ape CEO',
        url: '#!/ApeCEOHoodieBlack',
        productType: 'Hoodie',
        color: 'black',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hoodies/Black%20Hoodies/ape.JPG',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHoodieBlack',
        productType: 'Hoodie',
        color: 'black',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hoodies/Black%20Hoodies/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHoodieBlack',
        productType: 'Hoodie',
        color: 'black',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHoodieBlack',
        productType: 'Hoodie',
        color: 'black',
        img: '',
        cost: '$20'
    }, {
        name: 'Ape CEO',
        url: '#!/ApeCEOHoodieCamo',
        productType: 'Hoodie',
        color: 'camo',
        sizes: 'One Size Fits All',
        img: '',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHoodieCamo',
        productType: 'Hoodie',
        color: 'camo',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hoodies/Camo%20Hoodies/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHoodieCamo',
        productType: 'Hoodie',
        color: 'camo',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHoodieCamo',
        productType: 'Hoodie',
        color: 'camo',
        img: '',
        cost: '$20'
    }, {
        name: 'Ape CEO',
        url: '#!/ApeCEOHoodieWhite',
        productType: 'Hoodie',
        color: 'white',
        sizes: 'One Size Fits All',
        img: '',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHoodieWhite',
        productType: 'Hoodie',
        color: 'white',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hoodies/White%20Hoodies/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHoodieWhite',
        productType: 'Hoodie',
        color: 'white',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHoodieWhite',
        productType: 'Hoodie',
        color: 'white',
        img: '',
        cost: '$20'
    }]

}