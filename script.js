$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#bcHeading').toggleClass('hidden');
	});	
	$('#highrise').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#hrHeading').toggleClass('hidden');
	});	
	$('#campfire').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#cfHeading').toggleClass('hidden');
	});	
});
