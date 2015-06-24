var app = angular.module('jtrol-app', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "js/view/home.php"

    });
    $routeProvider.when("/members", {
    	controller: "main-controller",
        templateUrl: "js/view/members.php"
    });
    $routeProvider.when("/home", {
    	redirectTo: '/'
    });
}]);


app.controller('main-controller',['$scope', '$http', 'uiGridConstants', '$modal', '$log', function ($scope, $http, uiGridConstants, $modal, $log, $modalInstance){
	$scope.members = [];
	$scope.loading = false;
	$scope.member = '';

	$scope.gridOptions = {
        paginationPageSizes: [5, 10, 25],
        paginationPageSize: 5,
        enableFiltering: true,
		onRegisterApi: function(gridApi){
			$scope.gridApi = gridApi;
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
			}
		]
	}	

	$scope.init = function() {
		$scope.loading = true;

		$http.get('/api/member').success(function(data, status, headers, config) {
			$scope.members = data;
		  	$scope.gridOptions.data = $scope.members;
			$scope.loading = false;
		});
		
	};	


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
		$scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
	};	

	$scope.openModalAddMember = function () {
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: 'lg'
		});
		
		modalInstance.result.then(function (data) {
			$scope.member = data;
			$scope.addMember();
		}, 
		function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};


	$scope.init();
}]);


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
	$scope.member = [{
		firstname: '',
		middlename: '',
		lastname: '',
		firstattend: ''
	}];
	
	$scope.addMember = function () {
		$modalInstance.close($scope.member);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});