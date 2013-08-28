var map = {
	getLocation: function (callback)
	{
	  if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                console.log(error);
                alert('Error occurred. Error code: ' + error.code);   
            });
        }else{
            alert('no geolocation support');
        }
	}
	
}