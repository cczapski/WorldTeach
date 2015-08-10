

    $('#cssmenu > ul > li:has(ul)').addClass("has-sub");

    $('#cssmenu > ul > li > a').click(function() {
    var checkElement = $(this).next();
    
    $('#cssmenu li').removeClass('active');
    $(this).closest('li').addClass('active'); 
    $(".second-section").css("display", "block");
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#cssmenu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;  
    }   
  });

// if ($(window).width() >= 947){  
//         $(".thirds a").removeAttr('href');
//   } 
    

// $(window).resize(function(){
//   if ($(window).width() >= 947){  
//         $(".thirds span").css("background-image", "none");
//   } 
//   else if ($(window).width() < 947 ){
//     $(".thirds span").css("background-image", "../menu_images/icon_plus.png");
//   }
// });

// $('.maps').click(function () {
//     $('.maps iframe').css("pointer-events", "auto");
// });

function initialize() {
         var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(0,0), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [ {   "featureType":"landscape",    "stylers":[     {       "hue":"#FFAD00"     },      {       "saturation":50.2     },      {       "lightness":-34.8     },      {       "gamma":1     }   ] },  {   "featureType":"road.highway",   "stylers":[     {       "hue":"#FFAD00"     },      {       "saturation":-19.8      },      {       "lightness":-1.8      },      {       "gamma":1     }   ] },  {   "featureType":"road.arterial",    "stylers":[     {       "hue":"#FFAD00"     },      {       "saturation":72.4     },      {       "lightness":-32.6     },      {       "gamma":1     }   ] },  {   "featureType":"road.local",   "stylers":[     {       "hue":"#FFAD00"     },      {       "saturation":74.4     },      {       "lightness":-18     },      {       "gamma":1     }   ] },  {   "featureType":"water",    "stylers":[     {       "hue":"#00FFA6"     },      {       "saturation":-63.2      },      {       "lightness":38      },      {       "gamma":1     }   ] },  {   "featureType":"poi",    "stylers":[     {       "hue":"#FFC300"     },      {       "saturation":54.2     },      {       "lightness":-14.4     },      {       "gamma":1     }   ] }]
                };

              

          
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-14.2777, -170.7040),
                    map: map,
                    title: 'American Samoa'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(23.6903, 90.3443),
                    map: map,
                    title: 'Bangladesh'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-36.7394, -71.0565),
                    map: map,
                    title: 'Chile'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(27.3813, 111.5260),
                    map: map,
                    title: 'Chile'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(4.1145, -72.9538),
                    map: map,
                    title: 'Colombia'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(9.6301, -84.2541),
                    map: map,
                    title: 'Costa Rica'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-1.7864, -78.1368),
                    map: map,
                    title: 'Ecuador'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(4.8556, -58.9530),
                    map: map,
                    title: 'Guyana'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(19.0557, -73.0513),
                    map: map,
                    title: 'Haiti'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(6.0683, 171.9893),
                    map: map,
                    title: 'Marshall Islands'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(6.8874, 158.2150),
                    map: map,
                    title: 'Micronesia'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(31.7948, -7.0847),
                    map: map,
                    title: 'Morocco'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-22.9670, 18.4929),
                    map: map,
                    title: 'Namibia'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(28.3974, 84.1299),
                    map: map,
                    title: 'Nepal'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(51.9189, 19.1343),
                    map: map,
                    title: 'Poland'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-28.4792, 24.6722),
                    map: map,
                    title: 'South Africa'
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(13.0388, 101.4901),
                    map: map,
                    title: 'Thailand'
                });

      };
      google.maps.event.addDomListener(window, 'load', initialize);
