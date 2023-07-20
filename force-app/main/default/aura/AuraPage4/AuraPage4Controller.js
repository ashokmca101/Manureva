({
    Save1 : function(component, event, helper) 
    {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'success',
            message: 'Contact Record Saved Successfully',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'dismissible'
        });
        toastEvent.fire();
        
    }

})