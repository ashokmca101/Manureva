({
	handleLoad : function(component, event, helper) {
		var columns =[
            {label:"First Name",fieldname:"FirstName",type:"text"},
            {label:"Last Name",fieldname:"LastName",type:"text"},
            {label:"Name",fieldname:"Name",type:"text"},
            {label:"Account Name",fieldname:"Account.Name",type:"text"},
            {label:"Email",fieldname:"Email",type:"text"}
        ];
        component.set("v.columns",columns);
	},
    handleSearch : function(component, event, helper) {
	console.log("Sample Text");
      var searchText = component.get("v.st");
        console.log("Search Text :"+searchText);
        var action = component.get("c.getContactsList");
        action.setParams({
            "searchText":searchText
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state=="SUCCESS")
            {
                var result = response.getReturnValue();
                console.log("Response :"+result);
                component.set("v.data",result);
            }
        });
        $A.enqueueAction(action);
	},
})