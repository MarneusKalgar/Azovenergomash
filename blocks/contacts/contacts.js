/*********************************************
		initialize Google Maps JavaScript API
*********************************************/
function initMap() {

	var center1 = new google.maps.LatLng(50.407372, 30.555019); //for #azovenergo
	var center2 = new google.maps.LatLng(50.438016, 30.551959); //for #azovenergomash

	var mapProp1 = {
		center: center1,
		zoom: 16,
		disableDefaultUI:true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapProp2 = {
		center: center2,
		zoom: 17,
		disableDefaultUI:true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map1 = new google.maps.Map(document.querySelector("#azovenergoMap"), mapProp1);
	var map2 = new google.maps.Map(document.querySelector("#azovenergomashMap"), mapProp2);

	var marker1 = new google.maps.Marker({
		position: center1
	});
	var marker2 = new google.maps.Marker({
		position: center2
	});
	marker1.setMap(map1);
	marker2.setMap(map2);
}