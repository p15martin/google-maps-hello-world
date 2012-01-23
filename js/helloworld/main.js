require.config({
	paths:{
		jquery: "../libs/jquery-1.6.2",
		async: "../libs/async",
		google: "google"
	}
});

require(
	[ "jquery", "google" ],
	function( $, google ) {

		var mapCanvas = $( "#map_canvas" )[0];

		google.addMapToCanvas( mapCanvas );
	}
);

