import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

@Input() account?: Account;
@Input() index?: number;
@Input() isdeleteloading  = false;

@Output() ondelete = new EventEmitter<Account>();
@Output() onupdate = new EventEmitter<any>();

  myprop: string | undefined;
  show: boolean = false;
  // firstname  :any;
  // lastname :any;
  // email :any;
  // address :any;
 updatedvalue:any={
    id : '',
    firstName  :'',
  lastName  : '',
  gender : '',
  email : '',
  address : ''
}
  


ngOnInit(): void {
  // this.firstname  = this.account?.firstName;
  // this.lastname  = this.account?.lastName;
  // this.email = this.account?.email;
  // this.address = this.account?.address;
  this.updatedvalue = {
    id : this.account?.id,
    firstName  : this.account?.firstName,
  lastName  : this.account?.lastName,
  gender : this.account?.gender,
  email : this.account?.email,
  address : this.account?.address,
  type : this.account?.type,
  balance : this.account?.balance,
  }
  console.log(this.account?.firstName);
  
}
propupdate(prop : string){
  this.myprop = prop;
}
delete(){
  this.ondelete.emit(this.account)
}
update(){
 
  this.onupdate.emit(this.updatedvalue)
  // this.onupdate.emit({value : this.firstname,key :'firstName',acc:this.account})
  // this.onupdate.emit({value : this.email,key :'email',acc:this.account})
  // this.onupdate.emit({value : this.address,key :'address',acc:this.account})
}
}
