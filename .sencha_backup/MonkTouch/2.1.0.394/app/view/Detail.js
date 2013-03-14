Ext.define('MonkTouch.view.Detail', {
    extend: 'Ext.Container',
    xtype: 'itemdetail',
    requires:'MonkTouch.view.AudioPlayer',
    config: {
        styleHtmlContent: true,
        scrollable:{
            direction: 'vertical',
            directionLock: true
        }
        
    },
    initialize:function(){
      //var playbtn = this.query("a[class='audioplay']");
      this.relayEvents(this.element,['tap']);
    }
    
}); 