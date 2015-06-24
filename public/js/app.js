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

	$scope.gridOptions = {
        paginationPageSizes: [5, 10, 25],
        paginationPageSize: 5,
        enableFiltering: true,
		onRegisterApi: function(gridApi){
			$scope.gridApi = gridApi;
			$scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );
		},
        columnDefs: [
			{
				field: 'id',
				filter: { placeholder: 'Filter Id' }
			},
			{
				field: 'last_name',
				filter: { placeholder: 'FilterLast Name' }
			},
			{
				field: 'first_name',
				filter: { placeholder: 'Filter First Name' }
			},
			{
				field: 'middle_name',
				filter: { placeholder: 'Filter Middle Name' }
			},
			{
				field: 'first_attend',
				filter: { placeholder: 'Filter First Date Attended' }
			},
			]
    	}

	$scope.init = function() {
		$scope.loading = true;

		$http.get('/api/member').success(function(data, status, headers, config) {
			$scope.members = data;
		  	$scope.gridOptions.data = $scope.members;
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

	$scope.toggleFiltering = function(){
		$scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
	};	

	$scope.init();
}]);
