import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountform } from './models/account-form.model';
import { Account } from './models/account.model';

const APP_URL ="http://localhost:3000/customers"
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  getCustomers() : Observable<Account[]> {
    return this.http.get<Account[]>(APP_URL);
  }
  search(name:string) : Observable<Account[]> {
    return this.http.get<Account[]>(`${APP_URL}?q=${name}`);
  }
  create(account:accountform) : Observable<Account> {
    return this.http.post<Account>(APP_URL, account);
  }
  delete(account:Account)  {
    return this.http.delete(`${APP_URL}/${account.id}`);
  }
  update(account:Account) : Observable<Account> {
    return this.http.put<Account>(`${APP_URL}/${account.id}`, account);
  }
  getbyid(id:string) : Observable<Account> {
    return this.http.get<Account>(`${APP_URL}/${id}`);
  }
}
