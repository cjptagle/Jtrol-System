<?php include('includes/page_navbar.php') ?>

<div class="container" style="margin-top:8%">
	<div class="panel panel-primary">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<div class="row">
				<div class="col-md-6"><h4>Attendance</h4></div>
				<div class="col-md-6">
					<div class="form-group-sm">
						<input type="text" class="form-control" placeholder="Search Member" ng-model="filterName">
					</div>
				</div>
			</div>		
		</div>
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
			<tr ng-repeat="(key, member) in members | filter: filterName">
				<td>{{ member.first_name }}</td>
				<td>{{ member.middle_name }}</td>
				<td>{{ member.last_name }}</td>
				<td>{{ member.first_attend }}</td>
			</tr>
			<tr>
				<td>
					<div class="form-group-sm"><input type="text" class="form-control" name="first_name" placeholder="First Name" ng-model="member.firstname" required></div>
				</td>
				<td>
					<div class="form-group-sm"><input type="text" class="form-control" name="middle_name" placeholder="Middle Name" ng-model="member.middlename" required></div>
				</td>
				<td>
					<div class="form-group-sm"><input type="text" class="form-control" name="last_name" placeholder="Last Name" ng-model="member.lastname" required></div>
				</td>
				<td>
					<div class="form-group-sm"><input type="date" class="form-control" name="first_attend" value="" ng-model="member.firstattend" required></div>
				</td>
			</tr>
		</table>
		<div class="panel-footer">
			<button class="btn btn-success btn-sm" ng-click="addMember()">Add Member</button>
		</div>
	</div>
</div>