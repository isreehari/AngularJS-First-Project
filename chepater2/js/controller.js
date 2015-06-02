/**
 * Created by sinukoll on 6/1/15.
 * controller
 */

(function(angular) {
'use strict';
var spl_app = angular.module('spl_app_controller',[]);

spl_app.controller("registrationCtr",['$scope','$rootScope','AUTH_EVENTS','reg_service',function($scope,$rootScope,AUTH_EVENTS,reg_service){
    reg_service.createUserSession();
   $scope.items = reg_service.studentData();
}]);

spl_app.constant('AUTH_EVENTS', {
                                    loginSuccess: 'auth-login-success',
                                    loginFailed: 'auth-login-failed',
                                    logoutSuccess: 'auth-logout-success',
                                    sessionTimeout: 'auth-session-timeout',
                                    notAuthenticated: 'auth-not-authenticated',
                                    notAuthorized: 'auth-not-authorized'
                                })
        .constant('USER_ROLES', {
            admin: 'admin',
            institute_admin: 'institute_admin',
            college_admin: 'college_admin',
            normal: 'normal'
        })


})(window.angular);









