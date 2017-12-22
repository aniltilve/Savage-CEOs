var shop = angular.module('shop', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

    }]);

shop.controller('shopCtrl', shopCtrl);

//Brands (savage, AR, John Hawkdoe, Remain Infinite, etc)

//Categories: mens, womens

function shopCtrl($scope) {
    $scope.products = [
    	{
        name: 'Ape CEO',
        url: '#!/ApeCEOHatBlack',
        productType: 'Hat',
        color: 'black',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/Black%20Hats/ApeCEOHatBlack.JPG',
        cost: '$30'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHatBlack',
        productType: 'Hat',
        color: 'black',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/Black%20Hats/LionCEOHatBlack.JPG',
        cost: '$30'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHatBlack',
        productType: 'Hat',
        color: 'black',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/Black%20Hats/WolfCEOHatBlack.JPG',
        cost: '$30'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHatBlack',
        productType: 'Hat',
        color: 'black',
        img: '',
        cost: '$30'
    },{
        name: 'Ape CEO',
        url: '#!/ApeCEOHatCamo',
        productType: 'Hat',
        color: 'camo',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/Camo%20Hats/hat2.JPG',
        cost: '$30'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHatCamoGrey',
        productType: 'Hat',
        color: 'Camo Grey',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/Camo%20Hats/lion%20grey.JPG',
        cost: '$30'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHatCamo',
        productType: 'Hat',
        color: 'camo',
        img: '',
        cost: '$30'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHatCamo',
        productType: 'Hat',
        color: 'camo',
        img: '',
        cost: '$30'
    },{
        name: 'Ape CEO',
        url: '#!/ApeCEOHatWhite',
        productType: 'Hat',
        color: 'white',
        sizes: 'One Size Fits All',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Mens/Hats/White%20Hats/hat.JPG',
        cost: '$30'
    }, {
        name: 'Lion CEO',
        url: '#!/LionCEOHatWhite',
        productType: 'Hat',
        color: 'white',
        img: '',
        cost: '$30'
    }, {
        name: 'Wolf CEO',
        url: '#!/WolfCEOHatWhite',
        productType: 'Hat',
        color: 'white',
        img: '',
        cost: '$30'
    }, {
        name: 'Shark CEO',
        url: '#!/SharkCEOHatWhite',
        productType: 'Hat',
        color: 'white',
        img: '',
        cost: '$30'
    }
    ]

}