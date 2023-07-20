public class GetContacts {
@AuraEnabled
    public static List<Contact> getContactsList(String searchText) {
        List<Contact> contacts = 
                [SELECT Id,FirstName,LastName, Name, MailingStreet,AccountId,Account.Name, Phone, Email FROM Contact limit 10];

        //Add isAccessible() check
        System.debug('Contacts :'+contacts);
        return contacts;
    }

}