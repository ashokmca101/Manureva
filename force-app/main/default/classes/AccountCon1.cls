public class AccountCon1 
{
	@AuraEnabled
    public static List<Account> getAccounts() 
    { 
        return [select Id,Name from Account limit 10];
    }
}