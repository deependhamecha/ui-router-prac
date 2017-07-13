var lastApp = angular.module('lastApp', ['ui.router']);

lastApp.config(function($stateProvider, $urlRouterProvider) {   

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    	.state('home', {
    		url: '/home',
    		templateUrl: '../last/home.html'
    	})
    	// .state('emp', {
    	// 	url: '/emp',
    	// 	templateUrl: '../last/emp.html'
    	// })
    	.state('emp', {
    		url: '/emp', // not necessary unless its reffered to.
    		views: {
    			'@': {
    				templateUrl: '../last/emp.html',
    				controller: function($scope) {
    					$scope.names = ['Pradeep', 'Deepen', 'Mandar', 'Imran']
    				}
				},
    			'eachemp@emp': {
    				url: '/eachemp/:name',
    				templateUrl: '../last/eachemp.html',
    				controller: function($scope, $stateParams) {
    					console.log('COMING TO DADDY');
    					$scope.name = $stateParams.name;
    				}
    			}
    		}
    	});
});