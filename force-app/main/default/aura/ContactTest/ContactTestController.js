({
	init : function(component, event, helper) {
        component.set('v.columns', [
//            {label: 'Opportunity name', fieldName: 'opportunityName', type: 'text', editable: true, typeAttributes: { required: true }},
            {label: 'Contact Name', fieldName: 'Name', type: 'text', editable: true },
            {label: 'Email', fieldName: 'Email', type: 'text', editable: true},
            {label: 'Account Name', fieldName: 'AccountName', type: 'search', editable: true}
        ]);
        console.log('inside init');
        var action = component.get("c.getContactsList");
        action.setCallback(this, function(response) {
            console.log('Success');
        var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set("v.data", response.getReturnValue());
                console.log('Result :'+response.getReturnValue());
            }
        
    }); $A.enqueueAction(action);
    }
})