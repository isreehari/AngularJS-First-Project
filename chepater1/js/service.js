/**
 * Created by sinukoll on 6/1/15.
 */
'use strict';

/* services */

var spl_app_service = angular.module('spl_app_service',[]);

spl_app_service.factory('reg_service',function($http){
    return {
        studentData : function(){
            var items = ['item1', 'item2', 'item3'];
            return items;
        }
    }
});