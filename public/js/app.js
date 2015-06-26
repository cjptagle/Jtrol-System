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
        templateUrl: "js/view/home.php",
        controller: "mainController"

    });
    $routeProvider.when("/members", {
    	controller: "memberController",
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
		preventDuplicates: true,
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


