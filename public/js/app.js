/* =============================================
 * AngularJS - JTROL - Ushering System
 * https://github.com/gidj02/Jtrol-System
 * ============================================= */

var app = angular.module('jtrol-app', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'ui.bootstrap', 'toastr', 'ngAnimate']);

app.config(['$routeProvider', 'toastrConfig', function ($routeProvider, toastrConfig) {

	/* =============================================
	 * Routing Configuratipon
	 * ngRoute
	 * ============================================= */

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


	/* =============================================
	 * AngularJS - Toastr Configuratipon
	 * https://github.com/Foxandxss/angular-toastr
	 * ============================================= */

    angular.extend(toastrConfig, {
		allowHtml: false,
		autoDismiss: false,
		closeButton: true,
		closeHtml: '<button>&times;</button>',
		containerId: 'toast-container',
		extendedTimeOut: 1000,
		iconClasses: {
			error: 'toast-error',
			info: 'toast-info',
			success: 'toast-success',
			warning: 'toast-warning'
		},
		maxOpened: 0,    
		messageClass: 'toast-message',
		newestOnTop: true,
		onHidden: null,
		onShown: null,
		positionClass: 'toast-bottom-right',
		preventDuplicates: false,
		preventOpenDuplicates: false,
		progressBar: true,
		tapToDismiss: true,
		target: 'body',
		templates: {
			toast: 'directives/toast/toast.html',
			progressbar: 'directives/progressbar/progressbar.html'
		},
		timeOut: 5000,
		titleClass: 'toast-title',
		toastClass: 'toast'
	});
}]);


/* =============================================
 * Main Controller
 * ============================================= */

app.controller('main-controller',['$scope', '$http', 'uiGridConstants', '$modal', '$log', 'toastr', function ($scope, $http, uiGridConstants, $modal, $log, toastr){
	$scope.members = [];
	$scope.loading = false;
	$scope.member = '';
 	toastr.success('Hello world!', 'Toastr fun!');
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

	
    /**
     * Initial function
     * - Assign value to $scope.members usign members api
     * - Assign value to GridOptions
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
     * - Assign value to $scope.members usign members api
     * - Assign value to GridOptions
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