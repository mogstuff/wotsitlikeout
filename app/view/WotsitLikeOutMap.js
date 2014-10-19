Ext.define('WotsitLikeOut.view.WotsitLikeOutMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'wotsitlikeoutmap',
 
    config: {
        layout: {
            type: 'fit'
        },       
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.HYBRID,
                    zoom: 14
                },
                useCurrentLocation: true
            }
        ]
    },
 
    initialize: function(){
        var me = this;
        me.callParent(arguments);
        this.initMap();
    },
 
    initMap: function(){
 
        var mapPanel = this.down('map');
        var gMap = mapPanel.getMap(); 

 if(navigator.geolocation) {
	 var map = gMap;
	 
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
     console.log('your coordinates: ' + pos);
     
     var contentString = '<h2>You are here</h2>';
   

var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'You are here'
  });

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });


      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
//
 
    }
});

