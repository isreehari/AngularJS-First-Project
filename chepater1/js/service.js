/**
 * Created by sinukoll on 6/1/15.
 * services 
 */
 
(function(angular) {
'use strict';
var spl_app_service = angular.module('spl_app_service',[]);

spl_app_service.factory('reg_service',['$http',function($http){
    return {
        studentData : function(){
            var items = ['item1', 'item2', 'item3'];
            return items;
        }
    }
	}]);
})(window.angular);