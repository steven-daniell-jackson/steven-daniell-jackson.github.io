var app = angular.module('resumeRoutes',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'templates/home.html',
        })
        .when('/about', {
            templateUrl: 'templates/about-me.html',
        })
        .when('/experience', {
            templateUrl: 'templates/experience.html',
            controller: 'experienceCtrl'
        })
        .when('/profile', {
            templateUrl: 'templates/profile.html',
        })
        .when('/employment', {
            templateUrl: 'templates/employment.html',
            controller: 'employmentCtrl'
        })
        .when('/references', {
           templateUrl: 'templates/references.html',
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
        })
       
        .otherwise({
            redirectTo: '/home'
        });
    }]);