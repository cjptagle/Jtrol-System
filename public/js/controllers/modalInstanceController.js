/* =============================================
 * Modal Instance Controller
 * ============================================= */

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