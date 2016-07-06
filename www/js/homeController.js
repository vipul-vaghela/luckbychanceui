

var homeController = function ($scope, $timeout,$interval) {
    $scope.userNames = [
        "aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh", "iii", "jjj", "kkk", "lll", "mmm"
    ]
    var counter=0;
    $scope.setName = function (name) {
       
        $scope.randomUser =$scope.userNames[counter] ;
        counter++;
         console.log($scope.randomUser + counter);
        // $timeout(function(){$scope.randomUser=name;}, 3000); 
    }
    $interval($scope.setName, 1000, $scope.userNames.length);
};
angular.module('plc.controllers')
        .controller('homeController', ['$scope', '$timeout','$interval', homeController]);