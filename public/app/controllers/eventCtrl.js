homeComponent.controller("eventCtrl", eventCtrl);


function eventCtrl($scope, $filter, $http, $q) {

    $scope.team = [{
        member: 'Artists',
        url: '#!/Artists',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/mic.jpg'
    }, 
    // {
    //     member: 'Engineers',
    //     url: '#!/Engineers',
    //     img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Engineering.jpg'
    // }, 
    {
        member: 'Producers',
        url: '#!/Producers',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/booth.jpg'
    }, {
        member: 'Dancers',
        url: '#!/Dancers',
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/b-boying.jpg'
    }];

    $scope.events = [{
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Gloria-Jeans-Flyer-copy.png'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Event7%20jun-23-17.png'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Gloria_Jean_OP_Fyler_IG.png'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Dance%20Fever%203-10.png'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/SavageCEOsflyer.jpg'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Charparti%202-17.jpg'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Event1%20Dec-23-16.png'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/Chaparti1.jpg'
    }, {
        img: 'https://storage.googleapis.com/savageceos-e2eeb.appspot.com/Media/BollywoodBash1.1.jpg'
    }];
    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function(direction) {
      $scope.direction = direction;
      $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function(date) {
      $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function(data) {
      $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function(data) {
      $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function(date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve("&lt;p&gt;&lt;/p&gt;");
        }, 1000);
        return deferred.promise;

    };

}
