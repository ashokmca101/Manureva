({
	handleClick : function(component, event, helper) {
        var appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({
            "message" : "value from AuraP1 Page" 
        });
        appEvent.fire();
	}
})