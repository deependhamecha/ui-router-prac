var app = angular.module('multipleViews', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('root', {
		url: '/',

	})
	.state('sample1', {
		url: '/sample1',
		template: 'Message 1 A : {{a}} & B: {{b}}',
		controller: function($scope) {
			$scope.a = 1;
			$scope.b = 2;
		}
	})
	.state('sample2', {
		url: '/sample2',
		views: {
			'' : {
				template: 'Default View'
			},
			'test' : {
				template: 'Test View'
			}
		}
	})
	.state('employees', {
		url: '/employees',
		views: {
			'' : {
				template: 'DEFAULT employees view'
			},
			'emp-header' : {
				template: 'EMP Header'
			},
			'emp-list' : {
				templateUrl: '../03views/emp-list.html',
				controller: function($scope, $http, dataService) {
					$scope.isLoading = false;
					$scope.emplist = dataService.getAllEmployees();
				}
			}
		}
	})
});