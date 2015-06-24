<!DOCTYPE html>
<html lang="en" ng-app="jtrol-app">
<head>
	<meta charset="UTF-8">
	<title>JTROL | Jesus at the Center</title>
	
	<!-- Main CSS -->
	{!! HTML::style('css/bootstrap.css') !!}
	{!! HTML::style('css/carousel.css') !!}

	<!-- AngularJS -->
	{!! HTML::script('js/angular.js') !!}
	{!! HTML::script('js/angular-route.js') !!}
	{!! HTML::script('js/app.js') !!}
	
	<!-- Main JS -->
	{!! HTML::script('js/jquery-2.1.1.js') !!}
	{!! HTML::script('js/bootstrap.js') !!}
</head>
<body ng-controller="list-controller">
	@include('includes.navbar')
	
	<ng-view></ng-view>
<!-- 	@yield('content')	 -->
</body>
</html>