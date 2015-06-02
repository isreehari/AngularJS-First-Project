/**
 * Created by sinukoll on 6/1/15.
 * services
 */

(function(angular) {
    'use strict';

    var spl_app_service = angular.module('spl_app_service',[]);
    spl_app_service.factory('reg_service',['$http','Session',function($http,Session){
                var registrationService = {};

                registrationService.createUserSession=function(){
                    /* return $http
                          .get('system/getCurrentUserSession.json')
                          .then(function(returnData){
                              Session.create(returnData.data.validUserStatus,returnData.data.userInstitution,returnData.data.isUserTTU,returnData.data.isUserHSC,returnData.data.userRole,returnData.data.adminUserInstitute);
                              return returnData.data.validUserStatus;
                          }); */
                          
                    return Session.create("yes","TTU","Yes","No","normal",null);

                };

                registrationService.isAuthenticated = function () {
                            return !!Session.userId;
                        };

                registrationService.isAuthorized = function (authorizedRoles) {
                            if (!angular.isArray(authorizedRoles)) {
                                authorizedRoles = [authorizedRoles];
                            }
                            return (authService.isAuthenticated() &&
                                authorizedRoles.indexOf(Session.userRole) !== -1);
                        };


                registrationService.studentData = function(){

                        var items = ['item1', 'item2', 'item3'];
                        return items;
                    }


                return registrationService;
            }]); // end of reg_service

    spl_app_service.service('Session',function(){

        this.create = function(req_validUserStatus,req_userInstitution,req_isUserTTU,req_isUserHSC,req_userRole,req_adminUserInstitute){
            this.validUserStatus = req_validUserStatus;
            this.userInstitution = req_userInstitution;
            this.isUserTTU = req_isUserTTU;
            this.isUserHSC = req_isUserHSC;
            this.userRole = req_userRole;
            this.adminUserInstitute = req_adminUserInstitute;
        }; // end create

        this.destroy = function(){
            this.req_validUserStatus = null;
            this.userInstitution = null;
            this.isUserTTU = null;
            this.isUserHSC = null;
            this.userRole = null;
            this.adminUserInstitute = null;
        }; // end destroy

    }); // end of Session service
})(window.angular);