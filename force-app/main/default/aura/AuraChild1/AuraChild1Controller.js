({
    change1 : function(component, event, helper) {
        console.log('Testing');
        var componentEvent = component.getEvent("empEvent");
        var msg = component.get("v.messageString");
       // msg = $A.util.isEmpty(msg)?"it is empty":msg;
        console.log('val1 cmpevnt1 :'+componentEvent);
        componentEvent.setParams({
            "name1" : msg,
            "name2" : msg
        });
        componentEvent.fire();
        console.log('val2');
        
        var x = event.getParam("name1 :");
        console.log('val3 msg :'+msg);
        console.log('val3 :'+x);
        //component.set("v.messageString",msg);
    }
})