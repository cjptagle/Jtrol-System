@extends('master')

@section('content')
<div ng-controller="list-controller">
	<div class="panel panel-primary">
		<!-- Default panel contents -->
		<div class="panel-heading">Attendance</div>
		<div class="panel-body">
			<p>This is the listing of Jesus the River of Life Gospel Church's members</p>
		</div>

		<!-- Table -->
		<table class="table">
			<tr>
				<th>First Name</th>
				<th>Middle Name</th>
				<th>Last Name</th>
				<th>Date Attended</th>
			</tr>
			<tr ng-repeat="(key, member) in members">
				<td>@{{ member.first_name }}</td>
				<td>@{{ member.middle_name }}</td>
				<td>@{{ member.last_name }}</td>
				<td>@{{ member.first_attend }}</td>
			</tr>
			<tr ng-repeat="(key, member) in members">
				<td>
					<div class="input-group"><input type="text" class="form-control" name="first_name" placeholder="First Name" required></div>
				</td>
				<td>
					<div class="input-group"><input type="text" class="form-control" name="middle_name" placeholder="Middle Name" required></div>
				</td>
				<td>
					<div class="input-group"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required></div>
				</td>
				<td>
					<div class="input-group"><input type="date" class="form-control" name="first_attend" value="" required></div>
				</td>
			</tr>
		</table>
		<div class="panel-footer">
			<button class="btn btn-success btn-sm">Add Member</button>
		</div>
	</div>
</div>
@stop