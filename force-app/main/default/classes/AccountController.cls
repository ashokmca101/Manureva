public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountList() {
        return [SELECT Id, Name, LastName, Email,Phone,AccountId,Account.Name FROM Contact WITH SECURITY_ENFORCED LIMIT 10];
    }
}