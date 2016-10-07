

var createAccountController = function ($scope) {

    console.log("This is createAccountController controller...");
    $scope.user={
        firstName:"",
        lastName:"",
        email:"",
        mobileNumber:"",
        password:"",
        confirmPassword:""
    };
    $scope.createUserAccount=function(){
       $scope.submitted=true;
        
    };
    
};
angular.module('plc.controllers')
        .controller('createAccountController', ['$scope', createAccountController]);