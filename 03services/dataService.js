app.service('dataService', function($http) {
	var self = this;

	this.getAllEmployees = function() {
		return $http.get('../03views/data.json')
						.then(function (response) {
							return response.data;
						});
	}

	this.getEmployee = function(id) {
		var el = {};
		return $http.get('../03views/data.json')
						.then(function (response) {
							response.data.forEach(function(item, index) {
								if(item.id == id) {
									el = item;
								}
							})
							return el;
						});
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