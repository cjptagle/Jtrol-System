<?php include('includes/page_navbar.php') ?>

<div class="container">
	<div class="panel panel-primary">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<div class="row">
				<div class="col-md-6"><h4>Member Lists</h4></div>
				<div class="col-md-6">
					<div class="form-group-sm">
						<input type="text" class="form-control" placeholder="Search Member" ng-model="filterName">
					</div>
				</div>
			</div>		
		</div>
		<div class="panel-body">
			<p>This is the listing of Jesus the River of Life Gospel Church's members</p>	
			<a class="btn btn-success btn-sm" href="#/add_member">Add Member</a>
			<hr>
			<div ui-grid="gridOptions" ui-grid-pagination></div>
		</div>

		<!-- Table -->
	</div>
</div>