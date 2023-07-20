public class inlineEditDataTablectrl {
    @AuraEnabled
    public static List<Opportunity> getOpportunitys(){
        return [SELECT Id, Name, Amount, CloseDate FROM Opportunity];
    }
    
        @AuraEnabled
    public static List<Contact> getContacts(){
        return [SELECT Id,FirstName,LastName, Name, MailingStreet,AccountId,Account.Name, Phone, Email FROM Contact limit 10];
    }
    @AuraEnabled
    public static boolean updateOppotunitys(List<Opportunity> oppList){
        sYSTEM.debug('Conlist :'+oppList);
        try {
            update oppList;
            return true;
        } catch(Exception e) {
            return false;
        }
    }
    
    @AuraEnabled
    public static boolean updateContacts(List<Contact> conList){
        sYSTEM.debug('Conlist :'+conList);
        try {
            update conList;
            return true;
        } catch(Exception e) {
            return false;
        }
    }    
}