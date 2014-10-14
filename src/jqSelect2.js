(function () {
    "use strict";

    angular.module('jq.select2', [])

    .directive('jqSelect2', [function() {

        return {
            restrict: 'EA',
            link: function(scope, element, attrs) {

                var params = attrs.jqSelect2 ? scope.$eval(attrs.jqSelect2) : {allowClear: true, minimumResultsForSearch: 8};

                scope.$watch(function() {
                    return $('option:selected', element).val();
                }, function(val) {
                    element.select2('val', val);
                });

                //select 2 needs to be manually updated for IE if ng-disabled changes
                if(/msie/.test(navigator.userAgent.toLowerCase())) {
                    attrs.$observe('disabled', function(val) {
                        element.select2("enable", !val);
                    });
                };

                //dynamic placeholder support
                attrs.$observe('placeholder', function(val) {
                    if(val) {
                        params.placeholder = val;
                        element.select2(params);
                    }
                });

                element.select2(params);

            }
        };

    }]);

}());


