/* =============================================
 * Main Controller
 * ============================================= */

app.controller('mainController', ['$http', 'toastr', function ($http, toastr){	

    Main = this;

    /**
     * Initial function
     */
	Main.init = function() {
		toastr.success('JTROL Ushering System!', 'Welcome!');		
	};	

	Main.init();
}]);