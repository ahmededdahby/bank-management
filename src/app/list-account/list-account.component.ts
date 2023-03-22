import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { AccountService } from '../account.service';
import { Account } from '../models/account.model';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css'],
})
export class ListAccountComponent implements OnInit {
  Accounts: Account[] = [];
  searchQuerySubject = new Subject<string>();
  isdeleteloading: any[] = [];

  constructor(private accountService: AccountService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((querry: string) => {
        this.search(querry);
      });
  }

  ngOnInit(): void {
    this.accountService.getCustomers().subscribe((customers) => {
      // console.log(customers )
      this.Accounts = customers;
      this.isdeleteloading = customers.map((customer) => ({
        id: customer.id,
        isloading: false,
      }));
    });
  }
  search(query: string) {
    this.accountService.search(query).subscribe((customers) => {
      this.Accounts = customers;
    });
  }
  serchquery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }
  delete(account: Account) {
    this.setinloading(account, true);
    this.accountService.delete(account).subscribe(() => {
      this.Accounts.splice(this.Accounts.indexOf(account), 1);
      this.setinloading(account, false);
     
      
    });
    alertify.error
    ("you have deleted an account");
  }
  private setinloading(account: Account, isloading: boolean) {
    this.isdeleteloading = this.isdeleteloading.map((p) => {
      if (p.id === account.id) {
        return { ...p, isloading: isloading };
      }
      return p;
    });
  }
  getinloading(account: Account) {
    return this.isdeleteloading.find((p) => p.id === account.id).isloading;
  }
  updateaccount(event: any) {
    console.log(event);
    this.accountService
      .update(event)
      .subscribe((updated) => {
        this.Accounts = this.Accounts.map((account) => {
          if (account.id === updated.id) {
           
            return updated;
          }
          return account;
        });
      });
      alertify.notify
      ("you have updated an account");
  }
}
