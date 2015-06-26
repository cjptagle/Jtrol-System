<!DOCTYPE html>
<html lang="en" ng-app="jtrol-app">
<head>
	<meta charset="UTF-8">
	<title>JTROL | Jesus at the Center</title>
	
	<!-- Main CSS -->
	{!! HTML::style('css/bootstrap.css') !!}
	{!! HTML::style('css/mystyle.css') !!}

	<!--ng ui-grid  -->
	{!! HTML::style('css/ui-grid-unstable.css') !!}

	<!-- AngularJS Toastr--> 
	{!! HTML::style('css/angular-toastr.min.css') !!}
</head>
<body>
	<ng-view></ng-view>


	<!-- Main JS -->
	{!! HTML::script('js/jquery-2.1.1.js') !!}
	{!! HTML::script('js/bootstrap.js') !!}
	
	{!! HTML::script('js/angular.js') !!}
	{!! HTML::script('js/angular-animate.min.js') !!}
	{!! HTML::script('js/angular-route.js') !!}
	{!! HTML::script('js/angular-toastr.tpls.min.js') !!}

	{!! HTML::script('js/ui-bootstrap-0.13.0.min.js') !!}
	{!! HTML::script('js/ui-bootstrap-tpls-0.10.0.js') !!}

	{!! HTML::script('js/ui-grid-unstable.js') !!}
	<!-- Scripts -->
	{!! HTML::script('js/app.js') !!}
	{!! HTML::script('js/controllers/mainController.js') !!}
	{!! HTML::script('js/controllers/memberController.js') !!}
	{!! HTML::script('js/controllers/modalInstanceController.js') !!}
</body>
</html>