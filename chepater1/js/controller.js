/**
 * Created by sinukoll on 6/1/15.
 * controller 
 */
 
(function(angular) {
'use strict';
var spl_app = angular.module('spl_app_controller',[]);
spl_app.controller("registrationCtr",['$scope','reg_service',function($scope,reg_service){
    $scope.items = reg_service.studentData();
}]);
})(window.angular);









