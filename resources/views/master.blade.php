<!DOCTYPE html>
<html lang="en" ng-app="jtrol-app">
<head>
	<meta charset="UTF-8">
	<title>JTROL | Jesus at the Center</title>
	
	<!-- Main CSS -->
	{!! HTML::style('css/bootstrap.css') !!}
	{!! HTML::style('css/mystyle.css') !!}

	<!-- AngularJS -->
	{!! HTML::script('js/angular.js') !!}
	{!! HTML::script('js/angular-route.js') !!}
	{!! HTML::script('js/app.js') !!}
	{!! HTML::script('js/ui-bootstrap-0.13.0.min.js') !!}
	{!! HTML::script('js/ui-bootstrap-tpls-0.10.0.js') !!}
	
	<!-- Main JS -->
	{!! HTML::script('js/jquery-2.1.1.js') !!}
	{!! HTML::script('js/bootstrap.js') !!}

	<!--ng ui-grid  -->
	{!! HTML::style('css/ui-grid-unstable.css') !!}
	{!! HTML::script('js/ui-grid-unstable.js') !!}
</head>
<body ng-controller="main-controller">
	<ng-view></ng-view>
</body>
</html>