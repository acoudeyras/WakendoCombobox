(function(WakendoCombobox) {
    'use strict';
	
    WakendoCombobox.setWidth('130');
    WakendoCombobox.setHeight('22');
	
    WakendoCombobox.addLabel({
        'defaultValue': 'Label',
        'position': 'left'
    });
    WakendoCombobox.setPanelStyle({
	        'fClass': true,
	        'text': true,
	        'background': true,
	        'border': true,
	        'sizePosition': true,
	        'label': true,
	        'disabled': ['border-radius']
    	});
    
});
