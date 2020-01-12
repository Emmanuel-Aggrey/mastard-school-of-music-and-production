$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({

        autoplay: 3000, //Set AutoPlay to 3 seconds
        margin:10,
        loop:true,
        nav:false,
       
        paginationNumbers:true,
        items : 2,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
   
    });
   
  });

