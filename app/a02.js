var myApp = angular.module('a02App', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('root', {
		url: '/',
		template: 'Home Sweet Home!'	
	})
	.state('calc', {
		url: '/calc?a&b',
		templateUrl: '../calc/calc.html',
		// $state to access different states
		controller: function($scope, $stateParams, $state) {

			// All state information
			// console.log($state.get());

			// Only add state information
			// If you need to provide any additional information then define data
			// console.log($state.get('calc'));

			$scope.a = $state.params.a | 0;
			$scope.b = $state.params.b | 0;

			$scope.add = function() {
				// Calling 'add' state
				$state.go('add', {
					// Passing Params to 'add' state
					a: $scope.a,
					b: $scope.b
				});
			}
		},
		data: {
			multiplier: 10
		}
	})
	.state('add', {
		url: '/add/{a:[0-9]+}/{b:[0-9]+}',
		templateUrl: '../calc/result.html',
		controller: function($scope, $stateParams, $state) {
			// $scope.a = $stateParams.a;
			// $scope.b = $stateParams.b;
			$scope.a = $state.params.a;
			$scope.b = $state.params.b;
			$scope.result = (parseInt($scope.a) + parseInt($scope.b)) * $state.get('calc').data.multiplier;
		},
		params: {
			a: { value: '0' },
			b: { value: '0' }
		}
	})
});

// Set an Event on RootScope
myApp.run(function($rootScope) {
	$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams, options) {
		console.log('State Start!');
	});

	// no options for $stateChangeSuccess
	$rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
		console.log('State Changed!');
	});
});
