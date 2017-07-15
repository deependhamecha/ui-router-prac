var app = angular.module('a04App', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('root', {
		url: '/',
		template: '<h3>Home Sweet Home</h3>'
	})
	.state('employees', {
		views: {
			'' : {
				templateUrl: '../04views/emp-layout.html'
			},
			// view@state
			'emp-header@employees' : {
				templateUrl: '../04views/emp-header.html'
			}
		}
	})
	// This will include all the ui-views and paste it as of their places.
	/*
		If you include emp-header to emp-list.html then it wont resolve.
	*/
	.state('employees.list', {
		url: '/employees',
		views: {
			'emp-list@employees' : {
				templateUrl: '../04views/emp-list.html',
				controller: function($scope, dataService) {
					$scope.isLoading = true;
					dataService.getAllEmployees().then(function(response) {
						$scope.data = response;
						$scope.isLoading = false;
					});
				}
			}
		}
	})
	// .state('employees.list.detail', { // EITHER GIVE A FULL NAME OR USE PARENT ATTRIBUTE
	.state('detail', {
		parent: 'employees.list', // it says employees.detail
		url: '/:id',
		views: {
			// emp-detail should be defined in emp-list.html*
			'emp-detail@employees.list' : {
				templateUrl: '../04views/emp-detail.html',
				controller: function($scope, $stateParams, dataService) {
					dataService.getEmployee($stateParams.id).then(function(response) {
						$scope.emp = response;
					});
				}
			}
		}
	})
});