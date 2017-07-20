 function currentLocation() {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((function (position) {
                 var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                 marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();

             }));
         } else {
             alert("La géolocalisation n'est pas supportée par ce navigateur.");
         }
 }
 $('#myLocation').click(function (e) {
     currentLocation();
 });


$("document").ready(function() {

  console.log('load ok');

  $( function() {
    $( ".list-group" ).sortable({

      update: function( event, ui ) {

        var newSort = JSON.stringify($( ".list-group" ).sortable( "toArray" ));

        $.get("./updatesort?sort="+newSort, function(data) {
          console.log($( ".list-group-item" ));
          $( ".list-group-item" ).each(function( i ) {
            $( this ).attr("id", i);
          });
        });
      }


    });
    $( ".list-group" ).disableSelection();
  } );

  var mymap = L.map("mapid").setView([48.866667, 2.333333], 11);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

});
