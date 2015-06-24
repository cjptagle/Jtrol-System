<?php include('includes/page_navbar.php') ?>

<div class="container">
	<div class="panel panel-primary">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<div class="row">
				<div class="col-md-6"><h4>Member Lists</h4></div>
				<div class="col-md-6">
					<div class="navbar-form navbar-right" role="search">
						<button type="submit" class="btn btn-default" ng-click='toggleFiltering()'>Toggle Record Filter</button>
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