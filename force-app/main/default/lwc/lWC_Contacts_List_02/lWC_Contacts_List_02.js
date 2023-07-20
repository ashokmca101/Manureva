/* myDatatable.js */
import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import Conatct_Id from '@salesforce/schema/Contact.Id';
import Conatct_Name from '@salesforce/schema/Contact.Name';
import Conatct_Email from '@salesforce/schema/Contact.Email';
import Conatct_Phone from '@salesforce/schema/Contact.Phone';
import Conatct_AccountId from '@salesforce/schema/Contact.AccountId';
import Conatct_AccountName from '@salesforce/schema/Contact.Account.Name';

const COLS = [
 {
     label:'Account Name',
     fieldName: 'Contact.Account.Name',
     type:'text',
     editable: true
 },

 {
     label:'Account Name1',
     fieldName: Conatct_AccountId.fieldApiName,
     type:'text',
     editable: true
 },

 {
     label:'Name',
     fieldName: Conatct_Name.fieldApiName,
     type:'text',
     editable: true
 },
 {
     label:'Email',
     fieldName: Conatct_Email.fieldApiName,
     type:'Email'
 },
  {
     label:'Phone',
     fieldName: Conatct_Phone.fieldApiName,
     type:'Phone'
 }
];

export default class MyDatatable extends LightningElement {
    columns = COLS;
    @track Contacts = [];

    @wire(getAccountList)
    wiredAccounts({error, data}) {
        if (error) {
            // Handle error
        } else if (data) {
            // Process record data
            this.Contacts = data.map((record) => {
                let industryColor = record.Industry === 'Energy' ? 'slds-text-color_success': '';
                let status = record.NumberOfEmployees > 10000 ? 'utility:ribbon' : '';
                return {...record, 
                    'industryColor': industryColor,
                    'status': status
                }
            });
            
        }
    }
}