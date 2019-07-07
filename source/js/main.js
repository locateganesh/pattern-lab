(function global() {
	
	$('#js-menuToggle').on('click', function(){
      $('body').toggleClass('menu-open');
      $('.nav__sub-list').slideUp(100);
      $('#mainNav').slideToggle(200);
    });
		
	$('.nav--has-submenu>a').on('click', function(e){
        e.preventDefault();
        var $current = $(this).parents('li').find('ul.nav__sub-list');
        $('ul.nav__sub-list').not($current).slideUp(200);
		$(this).parents('li').find('ul.nav__sub-list').slideToggle(200);
    });	
	
	
	
})();