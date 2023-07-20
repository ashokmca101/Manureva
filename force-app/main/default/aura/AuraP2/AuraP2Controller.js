({
	fireAppEvent : function(component, event, helper) {
		var mes = event.getParam("message");
        component.set("v.m1",mes);
	} 
})