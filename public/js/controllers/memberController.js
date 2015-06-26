/* =============================================
 * Member Controller
 * ============================================= */

app.controller('memberController', ['$scope', '$http', 'uiGridConstants', '$modal', '$log', 'toastr', function ($scope, $http, uiGridConstants, $modal, $log, toastr){
	$scope.members = [];
	$scope.loading = false;
	$scope.member = '';
 	
	$scope.gridOptions = {
        paginationPageSizes: [10, 25],
        paginationPageSize: 10,
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

	
    /**
     * Initial function
     */

	$scope.init = function() {
		$scope.loading = true;
		$http.get('/api/member').success(function(data, status, headers, config) {
			$scope.members = data;
		  	$scope.gridOptions.data = $scope.members;
			$scope.loading = false;
		});
		
	};	


	/**
     * Adding member function
     */

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
			toastr.success('Record Successfully Added!.', 'Welcome!')
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