<?php include('includes/page_navbar.php') ?>

<div class="container">
	<div class="panel panel-primary">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<div class="row">
				<div class="col-md-6"><h4>Member Lists</h4></div>
				<div class="col-md-6">
					<div class="navbar-form navbar-right" role="search">
						<button type="submit" class="btn btn-default" ng-click='Member.toggleFiltering()'>Toggle Record Filter</button>
					</div>
				</div>
			</div>		
		</div>
		<div class="panel-body">
			<p>This is the listing of Jesus the River of Life Gospel Church's members</p>	
			<button class="btn btn-success btn-sm" ng-click="Member.openModalAddMember()">Add Member</button>
			<hr>
			<div ui-grid="Member.gridOptions" ui-grid-pagination></div>
		</div>

		<!-- Table -->
	</div>
</div>

<script type="text/ng-template" id="myModalContent.html">
	<div class="modal-header">
	    <h3 class="modal-title">Register a member</h3>
	</div>
	<div class="modal-body">
	<div class="row">
	<div class="col-md-2"></div>
    <div class="col-md-8">
		<center><h4>Jesus <small>is welcoming you in Jesus the River of Life Gospel Church!</small></h4></center>
		<hr class="colorgraph">
			<div class="form-group">
				<input type="text" class="form-control" placeholder="First Name" ng-model="ModalInstance.member.firstname">
			</div>
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Middle Name" ng-model="ModalInstance.member.middlename">
			</div>	
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Last Name"  ng-model="ModalInstance.member.lastname">
			</div>
			<div class="form-group">
				<input type="date" class="form-control" placeholder="Last Name"  ng-model="ModalInstance.member.firstattend">
			</div>

		</div>
	<div class="col-md-2"></div>

	</div>
	</div>
	<div class="modal-footer">
	    <button class="btn btn-primary btn-lg" ng-click="ModalInstance.addMember()">Add</button>
	    <button class="btn btn-warning btn-lg" ng-click="ModalInstance.cancel()">Cancel</button>
	</div>
</script>