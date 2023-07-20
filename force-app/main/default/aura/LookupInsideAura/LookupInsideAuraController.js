({
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("ContactsList");
        var flow1 = component.find("flowData1");
        // In that component, start your flow. Reference the flow's API Name.
        flow1.startFlow("Sample_Lookup1");        
    },
})