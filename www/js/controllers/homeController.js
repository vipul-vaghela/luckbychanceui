

var homeController = function ($scope, $timeout, $interval) {
    $scope.userNames = [
        {id: 1, name: "amit"},
        {id: 2, name: "dk"},
        {id: 3, name: "hitesh"},
        {id: 4, name: "jigo"},
        {id: 5, name: "nihar"},
        {id: 6, name: "vipul"},
        {id: 7, name: "ssss"}

    ];
    $scope.randomUser = {};
    var counter = 0;
    var stop;
    var delay = 1000;
    $scope.isStart = true;
    $scope.setName = function (name) {
        $scope.randomUser = $scope.userNames[counter];
        $scope.$apply(function () {
            $scope.randomUser = $scope.userNames[counter];
            if (counter === $scope.userNames.length) {
                counter = 0;
            } else {
                counter++;
            }
            if (delay > 50 && $scope.isDrawInProgress !== false) {
                delay = delay - 50;
            } else {
                delay = delay + 50;
            }
            stop = setTimeout($scope.setName, delay);
        });


    };
    $scope.isDrawInProgress = false;
    $scope.startDraw = function () {
        $scope.isDrawInProgress = true;
        $scope.winnerMessage = undefined;
        stop = setTimeout($scope.setName, delay);
    };
    $scope.stopDraw = function () {
//        delay = 900;
        $scope.isDrawInProgress = false;
        $timeout(function () {
            if (angular.isDefined(stop)) {
                clearInterval(stop);
                $scope.isDrawInProgress = false;
                if (angular.isUndefined($scope.randomUser) || $scope.randomUser === "" || angular.equals({}, $scope.randomUser)) {
                    var randomNo = Math.floor(Math.random() * (($scope.userNames.length - 1) - 0 + 1) + 0);
                    $scope.randomUser = $scope.userNames[randomNo];
                    $scope.winnerMessage = "Congratulations " + $scope.randomUser.name + " you are the winner...";

                }
                $scope.winnerMessage = "Congratulations " + $scope.randomUser.name + " you are the winner...";
                stop = undefined;
                counter = 0;
                delay = 1000;
            }
        }, 5000);


    };
    var temp = {};
    $scope.$on('$destroy', function () {
        // Make sure that the interval is destroyed too
        $scope.stopDraw();
    });

//    var counter1 = 100;
//    var temp = 0;
//    var myFunction = function () {
//        counter1 = counter1 + 10;
//        console.log(counter1);
//        $scope.$apply(function () {
//            $scope.randomUser = $scope.userNames[temp];
//            if (temp === $scope.userNames.length) {
//                temp = 0;
//            } else {
//                temp++;
//            }
//        });
//
//        timeout = setTimeout(myFunction, counter1);
//    }
//    var timeout = setTimeout(myFunction, counter1);


    /* var counter1 = 100;
     
     var myFunction = function () {
     //        clearInterval(interval);
     counter1 = counter1 + 10;
     interval = setInterval(myFunction, counter1);
     $scope.randomUser = $scope.userNames[temp];
     if (temp === $scope.userNames.length) {
     temp = 0;
     } else {
     temp++;
     }
     }
     var interval = setInterval(myFunction, counter1);*/
};
angular.module('plc.controllers')
        .controller('homeController', ['$scope', '$timeout', '$interval', homeController]);