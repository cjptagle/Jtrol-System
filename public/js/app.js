var app = angular.module('jtrol-app', ['ngRoute', 'ui.grid', 'ui.grid.pagination']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "js/view/home.php"

    });
    $routeProvider.when("/members", {
    	controller: "list-controller",
        templateUrl: "js/view/members.php"
    });
    $routeProvider.when("/add_member", {
    	controller: "list-controller",
        templateUrl: "js/view/add_member.php"
    });
    $routeProvider.when("/home", {
    	redirectTo: '/'
    });
}]);


app.controller('list-controller',['$scope', '$http', function ($scope, $http){
	$scope.members = [];
	$scope.member = '';
	$scope.loading = false;



	$scope.init = function() {
		$scope.loading = true;

		$http.get('/api/member').success(function(data, status, headers, config) {
			$scope.members = data;
		  	console.log(data);
			$scope.loading = false;
		});
		$scope.gridOptions = {
	        data: 'members',
	        paginationPageSizes: [5, 10, 25],
	        paginationPageSize: 5,
	        columnDefs: [
	          {name: 'id'},
	          {name: 'last_name'},
	          {name: 'first_name'},
	          {name: 'middle_name'},
	          {name: 'first_attend'},
	        ]
        }
	}

	$scope.addMember = function() {
		$scope.loading = true;

		$http.post('/api/member', {
			first_name: $scope.member.firstname,
			middle_name: $scope.member.middlename,
			last_name: $scope.member.lastname,
			first_attend: $scope.member.firstattend
		}).success(function(data, status, headers, config) {
			$scope.members.push(data);
			$scope.member = '';
				$scope.loading = false;

		});
	};

	$scope.init();
}]);
