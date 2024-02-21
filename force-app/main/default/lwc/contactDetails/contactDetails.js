
import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactListController.getContacts';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Address', fieldName: 'mailingAddress' },
    { label: 'ID', fieldName: 'Id' },
    { label: 'Created By', fieldName: 'createdByName' },
    { label: 'Created Date', fieldName: 'CreatedDate', type: 'date' },
    { label: 'Account Name', fieldName: 'accountName' }
];

export default class ContactTable extends LightningElement {
    contacts;
    columns = columns;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        console.log(data)
        if (data) {
            this.contacts = data.map(row=>{
            return{...row, accountName: row.Account?.Name, createdByName: row.CreatedBy.Name,
                 mailingAddress: row.MailingAddress?.city + " " +  row.MailingAddress?.street + " " + row.MailingAddress?.country + " " + row.MailingAddress?.postalCode

 
            } 
        })
        } else if (error) {
            console.error(error);
        }
    } 
}
