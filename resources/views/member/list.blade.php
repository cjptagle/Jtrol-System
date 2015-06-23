@extends('master')

@section('content')
<div class="list-group">
	@foreach ($members as $member)
		<li class="list-group-item">{{ $member->first_name }}</li>
	@endforeach
</div>
@stop