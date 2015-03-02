$(document).ready(function() {

	//prevents the default behavior of anchor elements;
	$('a').click(function() {
		return false;
	});

	//function which scrolls down to a specific adress of the page;
	function scrollToAnchor(aid) {
		var aName = $("a[name='"+ aid +"']");
		$("html,body").animate({scrollTop: aName.offset().top}, 'slow');
	}

	//on click the function scrollToAnchor is called;
	$("a.page-ref").click(function() {
		aHref = $(this).attr('href').replace('#', '');
		scrollToAnchor(aHref);
	});

	// displays or hide text in facts section;
	$("a.read").click(function() {
		var spanVis = $(this).parent().find("span");
		if ($(spanVis).is(":visible")) {
			spanVis.hide();
			$(this).text('read more...');
		} else {
			spanVis.show().css('display','inline-block'); 
			$(this).text('read less');
		};
	});
/*
	$("form").keyup(function() {
		$("#name").blur('input', function() {
			var valueInput = $(this).val();
			if (valueInput === 0) {
				$(this).addClass("invalid");
			} else {
				$(this).addClass("valid");
			};
			
		})
	});*/
/*		
		var $emptyFields = formFields.filter(function() {
        	return $.trim(this.value) === "";
        });
		if ( $emptyFields > 0 ) {
			console.log("campuri complete");
		} else {
			console.log("campuri incomplete");
		};*/
});