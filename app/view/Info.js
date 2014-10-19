/**
 * Info View
 * 
 */
Ext.define("WotsitLikeOut.view.Info", {
    extend: "Ext.Carousel",
    requires: ["Ext.Carousel"],
    alias: "widget.info",
    xtype: 'info',
    requires: [ 'Ext.TitleBar'],
    
     config:{
          layout: 'vbox',
           flex: 1,
          items: [
								 {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Info'
                },
								
								{
								xtype: 'panel',
								html: '<h2>Contact Info</h2><h3>Full Name: Mark Morgan</h3><h3>Email: markmorgan.mcp@gmail.com</h3>'
								},
							
							]
    },
    
    
    
    initialize: function () {

        this.callParent(arguments);

    }
});

