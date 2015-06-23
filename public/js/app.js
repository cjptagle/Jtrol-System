var app = angular.module('jtrol-app', []);

app.controller('list-controller',['$scope', '$http', function ($scope, $http){
	$scope.members = [];
	$scope.loading = false;

	$scope.init = function() {
		$scope.loading = true;
		$http.get('/api/member').
		success(function(data, status, headers, config) {
			$scope.members = data;
			$scope.loading = false;
		});
	}
	
	$scope.init();
}]);