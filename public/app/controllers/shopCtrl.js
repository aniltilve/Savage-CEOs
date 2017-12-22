var shop = angular.module('shop', []);

shop.controller('shopCtrl', shopCtrl);

//Brands (savage, AR, John Hawkdoe, Remain Infinite, etc)

//Categories: mens, womens

function shopCtrl($scope) {
    $scope.products = [{
            type: 'Hats',
            url: '#!/Hats',
            img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Shop/Mens/Hats/Camo%20Blue%20Hats/ApeCEOHatCamoBlue.JPG'
        },
        {
            type: 'T-Shirts',
            url: '#!/TShirts',
            img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Shop/Mens/T-Shirts/Red%20T-Shirts/SharkCEOTShirtRed.JPG'
        },
        {
            type: 'Hoodies',
            url: '#!/Hoodies',
            img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Shop/Mens/Hoodies/Camo%20Hoodies/WolfCEOHoodieCamo.JPG'
        }
    ]

}