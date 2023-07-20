trigger ContactTrigger on Contact (before insert,before Update) 
{
    List<String> demails = new List<String>();
    Map<Id,Contact> oldMap = trigger.oldMap;
    Map<Id,Contact> newMap = trigger.newMap;
    List<Contact> conList = new List<Contact>();
	if(trigger.isInsert || trigger.isUpdate && trigger.isBefore)
    {
		for(Contact con: trigger.new)
        {
            if(String.isNotBlank(con.Email))
            {
                System.debug('Email found :'+con.Email);
                demails.add(con.Email);                
            }
        }
        if(!demails.isEmpty())
        {
            System.debug('demails :'+demails);
            conList = [select Id,Name,Email from Contact where Email IN : demails];
        }
        
        if(!conList.isEmpty())
        {
            System.debug('conList :'+conList);
            for(Contact c:trigger.new)
            {
                if(trigger.isUpdate)
                {
                    Contact oldCon = oldMap.get(c.Id);
                    Contact newCon = newMap.get(c.Id);
                    if(oldCon.Email !=newCon.Email)
                    {
                        c.addError('Found Duplicate Contact Name'+conList[0].Name+' Email :'+conList[0].Email);
                        c.Email.addError('Found Duplicate Email With Another Contact');
                    }                    
                }
                if(trigger.isInsert)
                {
                        c.Email.addError('Found Duplicate Contact Name'+conList[0].Name+' Email :'+conList[0].Email);                    
                }
            }
        }
        
    }
}