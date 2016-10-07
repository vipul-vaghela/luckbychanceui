var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            
            ngModel.$validators.compareTo = function(modelValue) {
                 console.log("modelValue="+modelValue);
                 console.log("otherModelValue="+scope.otherModelValue);
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                 console.log("comare..dfdf...");
                ngModel.$validate();
            });
        }
    };
};
 

angular.module('plc.directives')
        .directive('compareTo', ['$interval','dateFilter',compareTo]);