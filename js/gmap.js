$(document).ready(function(){

//Gmap
	
	var map;

	var marker;

	var LatLng = new google.maps.LatLng(32.8225886, -117.1862209);
	var markerPosition = new google.maps.LatLng(32.8225886, -117.1862209);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
		{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#93AED1' },
			{ saturation: -10 },
			{ lightness: -10 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#e3e3e3' },
			{ saturation: -80 },
			{ lightness: -2 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#B5D638' },
			{ saturation: -2 },
			{ lightness: -1 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'administrative.country',
		elementType: 'all',
		stylers: [
			{ hue: '#71db8e' },
			{ saturation: 100 },
			{ lightness: -0 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{ hue: '#FDB913' },
			{ saturation: -0 },
			{ lightness: -6 },
			{ visibility: 'on' }
		]
	}
		];

  var mapOptions = {
    zoom: 16,
	center: LatLng,
	scrollwheel: false, 

    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  marker =  new google.maps.Marker({
		draggable:true,
		position: markerPosition,
    	animation: google.maps.Animation.DROP,
		map:map
		
	})
		
		var infoWindow = new google.maps.InfoWindow({
			position: LatLng,
			maxwidth: 320 
		})
		google.maps.event.addListener(marker,'click', function(){

			infoWindow.open(map);
			toggleBounce();
		});

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

function toggleBounce() {

  		if (marker.getAnimation() != null) {
    		marker.setAnimation(null);
  		} 		else {
    		marker.setAnimation(google.maps.Animation.BOUNCE);
  		}
	}
	google.maps.event.addDomListener(window, "resize", function() {
	 	var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});


}

initialize();
	//Gmap END


})


