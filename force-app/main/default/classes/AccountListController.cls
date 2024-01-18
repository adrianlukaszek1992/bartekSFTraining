/**
*
* @author  Govind Thathera
* @version 1.0
* @since   12/17/2018
* 
*/

public with sharing class AccountListController {
	/*
	 * Get recently modified top 15 accounts.
	 * 
	 */
    @AuraEnabled(cacheable=true)
    public static list<Account> getRecentModifiedAccounts(){
        return [SELECT Id, Name, AccountNumber, OwnerId, Owner.Name, AccountSource,  
                AnnualRevenue, Type, Industry,
                BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry,
                Website, LastModifiedById, NumberofLocations__c
                FROM Account 
                WHERE Name != 'Pyramid Construction Inc.'
                Order By LastModifiedDate desc 
                limit 3];
    }
    @AuraEnabled(cacheable=true)
    public static list<Account> getSecondModifiedAccounts(){
        return [SELECT Id, AccountNumber, Type, Industry, Site
                FROM Account  
                limit 10];
    }
}