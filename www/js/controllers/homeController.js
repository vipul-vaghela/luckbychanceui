

var homeController = function ($scope, $timeout, $interval) {
    $scope.userNames = [
        {id: 6, name: "vipul"},
        {id: 3, name: "hitesh"},
        {id: 2, name: "dk"},
        {id: 4, name: "jigo"},
        {id: 5, name: "nihar"},
        {id: 1, name: "amit"}
    ]
    var counter = 0;
    var stop;

    $scope.isStart = true;
    $scope.setName = function (name) {
        $scope.randomUser = $scope.userNames[counter];
        if (counter === $scope.userNames.length) {
            counter = 0;
        } else {
            counter++;
        }

    };
    $scope.isDrawInProgress = false;
    $scope.startDraw = function () {
        $scope.isDrawInProgress = true;
        stop = $interval($scope.setName, 100);
    };
    $scope.stopDraw = function () {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            $scope.isDrawInProgress = false;
            stop = undefined;
        }

    };
    $scope.$on('$destroy', function () {
        // Make sure that the interval is destroyed too
        $scope.stopDraw();
    });

};
angular.module('plc.controllers')
        .controller('homeController', ['$scope', '$timeout', '$interval', homeController]);