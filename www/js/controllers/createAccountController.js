

var createAccountController = function ($scope) {

    console.log("This is createAccountController controller...");
    $scope.createUserAccount=function(){
        console.log("called");
        $scope.submitted=true;
        
    };
    
};
angular.module('plc.controllers')
        .controller('createAccountController', ['$scope', createAccountController]);