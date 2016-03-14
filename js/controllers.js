angular.module('app.controllers', [])
  
.controller('employmentCtrl', function($scope) {

		$('div.employment').on('click', function(){
			$(this).find('.trigger').slideToggle(300);
		});

})
      
.controller('experienceCtrl', function($scope) {

		$('div.experience').on('click', function(){
			$(this).find('.trigger').slideToggle(300);
		});

})
      