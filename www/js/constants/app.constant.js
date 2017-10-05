//Add application level constatns here
(function () {
    console.log("calleConstan");
    angular.module('plc')
            .constant('APP_CONFIG', {
                apiPath: "http://localhost:8080",
                angularDateFormat: 'dd/MM/yy'
            }
            );
}());