var map;
function initMap() {
  var building1 = {lat: 56.065774, lng: 47.270642}
  var building2 = {lat: 56.066355, lng: 47.271451}
  var building3 = {lat:56.065288, lng:47.273287}
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 56.065831, lng: 47.272370},
    zoom: 17,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['satellite','terrain']
    }
  });
  map.setMapTypeId('satellite');
  var NovgorodInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Нижний Новгород</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:460 км²<p>'+'<p>Население:1 266 871 человек</p>'
            +'<p>Дата Основания:1221 год</p>'
            +'<p>Города-спутники:Кстово, Бор, Дзержинск</p>'
            '</div>'+
            '</div>';

  var KazanInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Казань</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:614,16 км²<p>'+'<p>Население: 1 231 878 человек</p>'
            +'<p>Дата Основания:1005 год</p>'
            +'<p>Города-спутники:Иннополис, Салават Купере, СМАРТ Сити Казань, Зелёный Дол</p>'
            '</div>'+
            '</div>';

  var CheboksaryInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Чебоксары</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:200 км²<p>'+'<p>Население: 480 536 человек</p>'
            +'<p>Дата Основания:1469 год</p>'
            +'<p>Город-спутник: Новочебоксарск</p>'
            '</div>'+
            '</div>';

  /*Novgorod*/
  var infowindow = new google.maps.InfoWindow({
          content: NovgorodInfo
  });

  var marker = new google.maps.Marker({
          position: building1,
          map: map,
          title: 'building1'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
  });
  /*Kazan*/
  var infowindow1 = new google.maps.InfoWindow({
          content: KazanInfo
  });

  var marker1 = new google.maps.Marker({
          position: building2,
          map: map,
          title: 'building2'
       });
       marker1.addListener('click', function() {
         infowindow1.open(map, marker1);
  });
  /*Cheboksary*/
  var infowindow2 = new google.maps.InfoWindow({
          content: CheboksaryInfo
  });

  var marker2 = new google.maps.Marker({
          position: building3,
          map: map,
          title: 'building3'
       });
       marker2.addListener('click', function() {
         infowindow2.open(map, marker2);
  });
}
