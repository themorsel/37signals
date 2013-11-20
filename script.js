$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#basecampHeading').toggleClass('hidden');
	});	
	$('#highrise').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#highriseHeading').toggleClass('hidden');
	});	
	$('#campfire').hover(function() {
		$('#defaultHeading').toggleClass('hidden');
		$('#campfireHeading').toggleClass('hidden');
	});	
});