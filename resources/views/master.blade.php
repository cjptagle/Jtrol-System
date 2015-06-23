<!DOCTYPE html>
<html lang="en" ng-app="jtrol-app">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	{!! HTML::style('css/bootstrap.css') !!}
	{!! HTML::script('js/angular.js') !!}
	{!! HTML::script('js/app.js') !!}
</head>
<body>
	<div class="container">
		@yield('content')
	</div>
</body>
</html>