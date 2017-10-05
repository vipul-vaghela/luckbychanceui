

var createAccountController = function ($scope, $rootScope, $state, $ionicHistory, Registration, APP_CONFIG) {

    $scope.lat = undefined;
    $scope.lng = undefined;

    $scope.$on('gmPlacesAutocomplete::placeChanged', function () {
        var location = $scope.user.cityName.getPlace().geometry.location;
        $scope.lat = location.lat();
        $scope.lng = location.lng();
        $scope.$apply();
    });
    $scope.user = {};

    console.log(APP_CONFIG);
    $scope.submitted = false;
    $scope.createUserAccount = function (createAccountForm) {
        $scope.submitted = true;
        if (createAccountForm.$valid) {
            console.log($scope.user);
            // $scope.submitted = false;
            $scope.user = {};
            $rootScope.alerts = [
                {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
                {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
            ];
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $scope.submitted = false;
            createAccountForm.$setPristine();
            $state.go("app.home");
        }


    };

};
angular.module('plc.controllers')
        .controller('createAccountController', ['$scope', '$rootScope', '$state', '$ionicHistory', 'Registration', 'APP_CONFIG', createAccountController]);