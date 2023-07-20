({
	testfun : function(component, event, helper) {
        console.log('Parent Log');
		var msg = event.getParam("name1");
        component.set("v.pName",msg);
	}
})