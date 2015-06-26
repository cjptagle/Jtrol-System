/* =============================================
 * Modal Instance Controller
 * ============================================= */

app.controller('ModalInstanceCtrl', function ($modalInstance) {
	
	ModalInstance = this;

	ModalInstance.member = [{
		firstname: '',
		middlename: '',
		lastname: '',
		firstattend: ''
	}];
	
	ModalInstance.addMember = function () {
		$modalInstance.close(ModalInstance.member);
	};

	ModalInstance.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});