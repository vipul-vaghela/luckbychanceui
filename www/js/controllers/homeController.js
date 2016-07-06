

var homeController = function ($scope, $timeout, $interval) {
    $scope.userNames = [
        {id: 1, name: "vipul"},
        {id: 2, name: "hitesh"},
        {id: 3, name: "dk"},
        {id: 4, name: "jigo"},
        {id: 5, name: "nihar"},
        {id: 6, name: "amit"}
    ]
    var counter = 0;
    $scope.isStart=true;
    $scope.setName = function (name) {
        $scope.randomUser = $scope.userNames[counter];
        counter++;
    };
    $scope.startDraw = function () {
        $interval($scope.setName, 100, $scope.userNames.length);
    };

};
angular.module('plc.controllers')
        .controller('homeController', ['$scope', '$timeout', '$interval', homeController]);