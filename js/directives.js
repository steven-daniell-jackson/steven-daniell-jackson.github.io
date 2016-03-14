angular.module('resume-directives', [])


.directive('navbar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '../templates/partials/navbar.html' 
  }; 
});