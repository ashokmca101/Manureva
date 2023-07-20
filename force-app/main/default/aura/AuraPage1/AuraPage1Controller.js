({
    handleFilesChange : function (cmp, event) {
        var files = event.getSource().get("v.files");
        alert(files.length + ' files !!');
    },    
	doInit : function(component, event, helper) {
		var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                component.set("v.acList",response.getReturnValue());
                console.log('Res :'+response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    changeValue : function(component, event, helper) 
    {
        console.log('inside');
       	console.log('distance ' + component.find("acId").get("v.value"));
		
        var selId =component.find("acId").get("v.value");
        console.log('selId :'+selId);
        component.set("v.sname",selId);
        
    },
    
    onChangeP : function (Component,event,helper)
    {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({ "url": "/lightning/cmp/AuraP2" });
        urlEvent.fire();
    }
})