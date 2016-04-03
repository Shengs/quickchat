'use strict';

//Set Modules and app
 var app = angular.module('quickchat',['ngRoute']);

//Routing
app.config(function($routeProvider) {
    
    $routeProvider
        // Conditions
        .when('/', {
        templateUrl: '/views/welcome.html',
        controller: 'welcome'
    })
        .when('/chatroom', {
        templateUrl:'/views/chatroom.html',
        controller:'chatroom'
    })
});

//Controller

app.controller('chatroom',['$scope', function($scope) {
    var username = $scope.username;
}]);

app.controller('welcome',['$scope', function($scope) {
    
}]);

               