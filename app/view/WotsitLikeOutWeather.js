/**
 * Weather Forecast View
 * 
 */
Ext.define("WotsitLikeOut.view.WotsitLikeOutWeather", {
    extend: "Ext.Carousel",
    requires: ["Ext.Carousel"],
    alias: "widget.wotsitlikeoutweather",
    xtype: 'wotsitlikeoutweather',
    requires: [ 'Ext.TitleBar'],
    
     config:{
          layout: 'vbox',
           flex: 1,
          items: [
								 {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Weather Forecast'
                },
								
								{
								xtype: 'panel',
								html: '<h2>Weather Forecast for next 5 days</h2>'
								},
							
							]
    },
    
    
    
    initialize: function () {

        this.callParent(arguments);

    }
});


