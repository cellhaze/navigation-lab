$(document).ready(function() {
    $('.sections')
    .css('visibility', 'hidden');
    
    $(window).scroll(function() {
		$('.sections').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});
	});
 
    $('#trigger').click(function() {
        $('.sections').each().addClass("slideLeft");
    })
    
    
});

