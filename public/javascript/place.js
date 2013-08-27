var map = {
	getLocation: function (callback)
	{
	  if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            	// var latlon=position.coords.latitude+","+position.coords.longitude;
                callback(position);
            }, function(error) {
                alert('Error occurred. Error code: ' + error.code);         
            });
        }else{
            alert('no geolocation support');
        }
	}
	
}