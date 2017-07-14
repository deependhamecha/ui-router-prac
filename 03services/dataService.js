app.service('dataService', function($http) {
	var self = this;

	this.data = [];

	this.getAllEmployees = function() {
		return $http.get('../03views/data.json')
						.then(function successCallback(response) {
							self.data =  response.data;
						});
		// console.log(dude);
	}

	this.getEmployee = function(id) {
		data.forEach(function(item, index) {
			if(item.id == id) {
				return item;
			}
		});

		return null;
	}

	this.getEmployeeByDept = function(deptname) {
		var list = [];

		data.forEach(function(item, index) {
			if(item.deptname == deptname) {
				list.push(item);
			}
		});

		return list;
	}
});