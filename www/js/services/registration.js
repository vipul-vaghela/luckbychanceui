(function () {
    'use strict';

    var Registration = function ($resource, $rootScope, APP_CONFIG) {
        var RegistrationService = $resource(APP_CONFIG.apiPath + 'api/users/:action/:id', {}, {
            create: {
                method: 'POST'
            }
        });
        return RegistrationService;

    };
    angular.module('plc.services')
            .factory('Registration', ['$resource', '$rootScope', 'APP_CONFIG', Registration]);
})();
