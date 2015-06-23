@extends('master')

@section('content')
<div ng-controller="list-controller">
	<div class="list-group" >
		<li class="list-group-item" ng-repeat="member in members">@{{ member.first_name }}</li>	
	</div>
</div>
@stop