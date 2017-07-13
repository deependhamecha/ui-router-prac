var myApp = angular.module('hellogalaxy', ['ui.router']);

myApp
	.component('hello', {

		template: `<h3>{{ $ctrl.greeting }} Solar System
					<button ng-click="$ctrl.toggleGreeting()">Toggle Greeting</button>`,

		controller: function() {
			this.greeting = 'Hello!',
			this.toggleGreeting = function() {
				this.greeting = (this.greeting == 'Hello!') ? 'SSup!' : 'Hello!';
			};
		}

	});

myApp
	.component('people', {
		bindings: { people : '<' },

		template: `<h3>Some people: </h3>
					<ul>
						<li ng-repeat="person in $ctrl.people">
							<a ui-sref="person({ personId: person.id })">
								{{ person.name }}
							</a>
						</li>
					</ul>,
					`
});

myApp
	.component('person', {
		template: `<h3>{{$ctrl.person.name}}</h3>`
	});

// Defining States
var helloState = {
	name: 'hello',
	url: '/hello',
	component: 'hello'
};

var peopleState = {
	name: 'people',
	url: '/people',
	component: 'people',
	// Resolve : Getting Data from Service
	resolve: {
		people: function(PeopleService) {
			return PeopleService.getAllPeople();
		}
	}
};

var personState = {
  name: 'person',
  url: '/people/:personId',
  component: 'person',
  resolve: {
    person: function(PeopleService, $transition$) {
      return PeopleService.getPerson($transition$.params().personId);
    }
  }
};

// Defining Services
myApp
	.service('PeopleService', function($http) {

		var self = this;

		this.people = $http.get('data.json')
							.then(function(response) {
								return response.data;
							});

		this.getAllPeople = function() {
			return self.people;
		};

		this.getPerson = function(personId) {
			console.log(self.people.$$state.value)
			self.people.$$state.value.forEach(function(item, index) {
				if(item.id == personId) {
					return '/person/'+personId;
				}
			});
		};

	});

// Declaring Routing
myApp
	.config(function($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state(helloState)
			.state(peopleState)
			.state(personState);

});