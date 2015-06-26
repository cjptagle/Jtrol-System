/* =============================================
 * Main Controller
 * ============================================= */

app.controller('mainController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr){	
    /**
     * Initial function
     */

	$scope.init = function() {
		toastr.success('JTROL Ushering System!', 'Welcome!');		
	};	

	$scope.init();
}]);