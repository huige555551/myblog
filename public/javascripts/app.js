'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
    }).when('/signin', {
        templateUrl: 'partials/signin',
        controller: SigninCtrl
    }).when('/signinPost', {
        templateUrl: 'partials/signinPost',
        controller: SigninPostCtrl
    }).when('/signup', {
        templateUrl: 'partials/signup',
        controller: SignupCtrl
    }).when('/signupPost', {
        templateUrl: 'partials/signupPost',
        controller: SignupPostCtrl
    }).when('/signout', {

    }).when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
    }).when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
    }).when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
    }).when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);