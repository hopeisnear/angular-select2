'use strict';

describe('jq select 2 directive', function() {

    beforeEach(module('jq.select2'));

    it('should render select 2 with 3 options', inject(function($rootScope, $compile) {

        var element = angular.element('<select data-jq-select2="" data-ng-model="country" data-ng-options="country.code as country.name for country in countries" placeholder="Select country"></select>');

        var scope = $rootScope;
        $compile(element)(scope);

        scope.countries = [{
            name: '1',
            code: '2'
        }, {
            name: '3',
            code: '4'
        }, {
            name: '5',
            code: '6'
        }];

        scope.country = scope.countries[1].code;

        scope.$digest();

        var options = element.find('option');

        expect(options.length).toBe(3);
        expect(options.eq(0).text()).toBe(scope.countries[0].name);
        expect(options.eq(1).text()).toBe(scope.countries[1].name);
        expect(options.eq(2).text()).toBe(scope.countries[2].name);

    }));

});