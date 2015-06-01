/**
 * Created by sinukoll on 6/1/15.
 */
'use strict';

/* controller */
var spl_app = angular.module('spl_app_controller',[]);
spl_app.controller("registration",['$http','$scope','$element','spl_app_service',function($http,$scope,$element,scholarship_app_service){
    $scope.items = scholarship_app_service.studentData;
}]);









