/* =============================================
 * Member Controller
 * ============================================= */

app.controller('memberController', ['$http', 'uiGridConstants', '$modal', '$log', 'toastr', function ($http, uiGridConstants, $modal, $log, toastr){
	
	Member = this;

	Member.members = [];
	Member.loading = false;
	Member.member = '';
 	
	Member.gridOptions = {
        paginationPageSizes: [10, 25],
        paginationPageSize: 10,
        enableFiltering: true,
		onRegisterApi: function(gridApi){
			Member.gridApi = gridApi;
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

	Member.init = function() {
		Member.loading = true;
		$http.get('/api/member').success(function(data, status, headers, config) {
			Member.members = data;
		  	Member.gridOptions.data = Member.members;
			Member.loading = false;
		});
		
	};	


	/**
     * Adding member function
     */

	Member.addMember = function() {
		Member.loading = true;

		$http.post('/api/member', {
			first_name: Member.member.firstname,
			middle_name: Member.member.middlename,
			last_name: Member.member.lastname,
			first_attend: Member.member.firstattend
		}).success(function(data, status, headers, config) {
			Member.members.push(data);
			Member.member = '';
			Member.loading = false;
			toastr.success('Record Successfully Added!.', 'Welcome!')
		});
	};

	Member.toggleFiltering = function(){
		Member.gridOptions.enableFiltering = !Member.gridOptions.enableFiltering;
		Member.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
	};	

	Member.openModalAddMember = function () {
		var modalInstance = $modal.open({
			animation: Member.animationsEnabled,
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl as ModalInstance',
			size: 'lg'
		});
		
		modalInstance.result.then(function (data) {
			Member.member = data;
			Member.addMember();
		}, 
		function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};


	Member.init();
}]);