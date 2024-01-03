import { LightningElement, wire } from 'lwc';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
{ label: 'First Name',fieldName: CONTACT_FIRSTNAME.fieldApiName, type: 'text' },
{ label: 'Last Name', fieldName: CONTACT_LASTNAME.fieldApiName, type: 'text' },
{ label: 'Email', fieldName: CONTACT_EMAIL.fieldApiName, type: 'email' }
];
export default class ContactList extends LightningElement {
columns = COLUMNS;
@wire(getContacts)
contacts;
error;
wiredContacts({ error, data }) {
if (data) {
this.contacts = data;
this.error = undefined;
} else if (error) {
this.error = error;
this.contacts = undefined;
}
}
get errors() {
return (this.accounts.error) ?
reduceErrors(this.accounts.error) : [];
}
}