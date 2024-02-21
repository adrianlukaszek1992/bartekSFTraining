
public with sharing class ContactListController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, MailingAddress, CreatedDate, CreatedBy.Name, Account.Name 
        FROM Contact where MailingStreet != null LIMIT 10];
    }
}
