var app = angular.module('jtrol-app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
    	controller: "list-controller",
        templateUrl: "js/view/home.blade.php"
    });
}]);


app.controller('list-controller',['$scope', '$http', function ($scope, $http){
	$scope.members = [];
	$scope.member = '';
	$scope.loading = false;

	$scope.init = function() {
		$scope.loading = true;
		$http.get('/api/member').
		success(function(data, status, headers, config) {
			$scope.members = data;
			$scope.loading = false;
		});
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