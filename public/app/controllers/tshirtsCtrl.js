var shop = angular.module('shop', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

    }]);

shop.controller('shopCtrl', shopCtrl);

//Brands (savage, AR, John Hawkdoe, Remain Infinite, etc)

//Categories: mens, womens

function shopCtrl($scope) {
    $scope.products = [{
        name: 'Ape CEO',
        url: '#!/ApeCEOTShirtBlack',
        productType: 'TShirt',
        color: 'black',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/Black%20T-Shirts/ape.JPG',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOTShirtBlack',
        productType: 'TShirt',
        color: 'black',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/Black%20T-Shirts/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOTShirtBlack',
        productType: 'TShirt',
        color: 'black',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOTShirtBlack',
        productType: 'TShirt',
        color: 'black',
        img: '',
        cost: '$20'
    }, {
        name: 'Ape CEO',
        url: '#!/ApeCEOTShirtCamo',
        productType: 'TShirt',
        color: 'camo',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/Camo%20T-Shirts/camo.JPG',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOTShirtCamo',
        productType: 'TShirt',
        color: 'camo',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/Camo%20T-Shirts/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOTShirtCamo',
        productType: 'TShirt',
        color: 'camo',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOTShirtCamo',
        productType: 'TShirt',
        color: 'camo',
        img: '',
        cost: '$20'
    }, {
        name: 'Ape CEO',
        url: '#!/ApeCEOTShirtWhite',
        productType: 'TShirt',
        color: 'white',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/White%20T-Shirts/ape1.JPG',
        cost: '$20'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOTShirtWhite',
        productType: 'TShirt',
        color: 'white',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/T-Shirts/White%20T-Shirts/lion.JPG',
        cost: '$20'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOTShirtWhite',
        productType: 'TShirt',
        color: 'white',
        img: '',
        cost: '$20'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOTShirtWhite',
        productType: 'TShirt',
        color: 'white',
        img: '',
        cost: '$20'
    }, ]

}