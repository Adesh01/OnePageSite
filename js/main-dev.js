$(document).ready(function(){
  /*smooth scroll*/
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });

        /* slider*/
        function slide_slide () {
            $('.sliding img:eq(1)').delay(3000).animate({'left':'0px'}, 2000);
            $('.sliding img:eq(0)').delay(3000).animate({'left':'-100%'}, 2000, slide_shuffle);
        }
        function slide_shuffle () {
            $('.sliding img:eq(0)').css({'left':'100%'}).appendTo('.sliding');
            slide_slide(); //keep it going
        }
        slide_slide(); //start

    /*sweepstake-pop-up*/
         /* default settings */
        $('.venobox').venobox(); 


        /* custom settings */
        $('.venobox_custom').venobox({
            framewidth: '1150px',        // default: ''
            frameheight: '1150px',       // default: ''
            border: '10px',             // default: '0'
            bgcolor: '#5dff5e',         // default: '#fff'
            titleattr: 'data-title',    // default: 'title'
            numeratio: true,            // default: false
            infinigall: true            // default: false
        });

        $("#winTicketsToggle").on("click", function(){
            if($("#winTicketsForm").css("margin-top")==='0px'){
                $("#winTicketsForm").css("margin-top", "-50vh");
            }else {
                $("#winTicketsForm").css("margin-top","0vh");
            }
        });

        /* popup window */
        $('.popdown').popdown({width:700});


        // Get the modal
            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");
            var stringBtn = document.getElementById("stringBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal
            /*btn.onclick=function() {
              console.log("Buttons been triggered");
                modal.style.display = "block";
            }*/

            stringBtn.onclick = function(){
              console.log("String button triggered");
              modal.style.display = "block";
              return false;
            }

            stringBtn2.onclick = function(){
              console.log("String button triggered");
              modal.style.display = "block";
              return false;
            }

            // close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // click outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
   });



/*Black Googlr MAP */
 // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,
                    draggable: false,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(33.8050, -117.9141), // Anaheim

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"all","stylers":[{"lightness":"29"},{"invert_lightness":true},{"hue":"#008fff"},{"saturation":"-73"}]},{"featureType":"all","elementType":"labels","stylers":[{"saturation":"-72"}]},{"featureType":"administrative","elementType":"all","stylers":[{"lightness":"32"},{"weight":"0.42"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":"-53"},{"saturation":"-66"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"-86"},{"gamma":"1.13"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"hue":"#006dff"},{"lightness":"4"},{"gamma":"1.44"},{"saturation":"-67"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"lightness":"5"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"weight":"0.84"},{"gamma":"0.5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"weight":"0.79"},{"gamma":"0.5"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"-78"},{"saturation":"-91"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#ffffff"},{"lightness":"-69"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"5"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"saturation":"-100"}]},{"featureType":"transit","elementType":"all","stylers":[{"lightness":"-35"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":"-97"},{"lightness":"-14"}]}]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(33.8050, -117.9141),
                    map: map,
                    title: 'Snazzy!'
                });
            }
