var app = angular.module('a01App', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			url: '/',
			template: 'Home Sweet Home!'
		})
		.state('firstMessage', {
			url: '/first-msg',
			template: '<strong>Hi, {{ name }} this is first message</strong>',
			controller: function($scope) {
				$scope.name = 'Deepen Dhamecha'
			}
		})
		// .state('noroute', { // DEFAULT ROUTE
		// 	url: '*path',
		// 	template: 'Route Not Present'
		// });

		// Two Ways to send parameters through ui-sref or Query Parameters
		// Use Either(One) of those



		/* UI Router Parameters
			1. Optional Params
			2. Default Values
			3. Regex support
			4. ui-sref support
			5. Array support
			6. Squashing - How to represent default values in URL, when they are same as the current value
		*/
		.state('myparams1', {
			// url: '/myparams1/:a/:b',
			// You can also use {} instead of :a and :b
			url: '/myparams1/{a}/{b}',

			template: 'Value of A : {{ a }} & B : {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			}
		})

		.state('myparams2', {
			// Using Regex restrictions for params
			// Regex is only possible with {a} and not with :a
			// If you provide params other than this regex, then it will ignore and go to route to default route
			url: '/myparams2/{a:[0-9]+}/{b}',
			template: 'Value of A : {{ a }} & B : {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			}
		})

		.state('myparams3', {
			// Only one parameter is optional but not more than one.
			// It will throw error. Try not to provide myparams2 params
			// If you wana pass only one or optional, pass null value of the variable
			url: '/myparams3/{a}', // Optional by default
			template: 'Value of A : {{ a }}',
			controller: function($scope, $stateParams) {
				// Trying to provide default value
				$scope.a = ($stateParams.a.trim() == "") ? -1 : $stateParams.a;
			}
		})

		.state('myparams4', {
			// Only one parameter is optional but not more than one.
			// It will throw error. Try not to provide myparams2 params
			// If you wana pass only one or optional, pass null value of the variable
			url: '/myparams4/:a/:b', // Optional by default
			template: 'Value of A : {{ a }} & B : {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			},
			// it wont work if it comes from href
			// Provide Default Value
			params: {
				// It should be string and not number
				// a: '6'
				a : { value: '6', squash: true }, // do not need to provided trailing / when using squash
				b : { value: '7', squash: true }
			}
		})

		.state('myparams5', {
			// Only one parameter is optional but not more than one.
			// It will throw error. Try not to provide myparams2 params
			// If you wana pass only one or optional, pass null value of the variable
			url: '/myparams5/:a/:b', // Optional by default
			template: 'Value of A : {{ a }} & B : {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			},
			// Default value wont work if it comes from href

			// Provide Default Value
			params: {
				// It should be string and not number
				a : { value: '9', squash: '-' }, // If value of a is - then use 9
				b : { value: '10', squash: '~' } // If value of b is - then use 10
			}
		})


		// Query Params
		.state('myparams6', {
			url: '/myparams6?a&b',
			template: 'Value of A : {{ a }} & B : {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			},
			params: {
				a: { value: '90' },
				b: { value: '80'}
			}
		})
		.state('myparams7', {
			url: '/myparams7?a&b',
			template: 'Value of A : {{ a }}, B: {{ b }}',
			controller: function($scope, $stateParams) {
				$scope.a = $stateParams.a;
				$scope.b = $stateParams.b;
			},
			params: {
				a: { value: '0' },
				b: { array: true, value: 'YOYO' } // It should be always array
			}
		})
});
