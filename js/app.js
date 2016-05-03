var app = angular.module('App', ['ngRoute']);
app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/profile',{
				templateUrl: 'pages/profile.html',
				controller: 'profilePageCtrl'
			})
			.when('/contact',{
				templateUrl: 'pages/contact.html',
				controller: 'contactPageCtrl'
			})
			.when('/project', {
				templateUrl: 'pages/project.html',
				controller: 'projectPageCtrl'
			})
			.otherwise({
				templateUrl: 'pages/home.html',
				redirectTo: '/'
			});
}]);

app.controller('HeaderCtrl', function($scope, $location) {
		$scope.isActive  = function(viewLocation) {
			return viewLocation == $location.path();
		};
	});
app.controller('profilePageCtrl', function($scope) {
	//code here
	});
app.controller('contactPageCtrl', function($scope) {
	//code here
	});
app.controller('projectPageCtrl', function($scope) {
	//code here
});
	
/*
Copyright (c) 2016 Joonas Vainionpää

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/