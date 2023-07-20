({
    doInit: function (component, event, helper) {
        component.set('v.columns', [
            {label: 'Id', fieldName: 'Id', type: 'text' , editable: false},
            {label: 'Name', fieldName: 'Name', type: 'text' ,editable: true},
            {label: 'Amount', fieldName: 'Amount', type: 'currency' ,editable: true},
            {label: 'Close Date', fieldName: 'CloseDate', type: 'date-local' ,editable: true}
        ]);
        component.set('v.columns1', [
            {label: 'Id', fieldName: 'Id', type: 'text' , editable: false},
            {label: 'Name', fieldName: 'Name', type: 'text' ,editable: true},
            {label: 'LastName', fieldName: 'LastName', type: 'text' ,editable: true}
            
        ]);        
        
        helper.fetchData(component,event, helper);
        helper.fetchData1(component,event, helper);
    },
    handleSave: function (component, event, helper) {
        var draftValues = event.getParam('draftValues');
        var action = component.get("c.updateOppotunitys");
        action.setParams({"oppList" : draftValues});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                if(data === true){
                    helper.showSuccessToast(component,event, helper, 'success','record updated successfully');
                    $A.get('e.force:refreshView').fire();
                }else{
                    helper.showSuccessToast(component,event, helper, 'error','please try again')
                }
            }
        });
        $A.enqueueAction(action);
    },
    handleSave1: function (component, event, helper) {
        var draftValues1 = event.getParam('draftValues1');
        console.log("DFV :"+draftValues1);
        var action1 = component.get("c.updateContacts");
        action1.setParams({"conList" : draftValues1});
        action1.setCallback(this, function(response1) {
            var state = response1.getState();
            if (state === "SUCCESS") {
                var data1 = response1.getReturnValue();
                if(data1 === true){
                    helper.showSuccessToast(component,event, helper, 'success','record updated successfully');
                    $A.get('e.force:refreshView').fire();
                }else{
                    helper.showSuccessToast(component,event, helper, 'error','please try again')
                }
            }
        });
        $A.enqueueAction(action1);
    },    
})