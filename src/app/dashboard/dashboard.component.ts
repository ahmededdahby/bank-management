import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  account: Account[]=[];

  sum: number = 0;
  acc:number = 0;

  constructor(private service: AccountService) {}
  ngOnInit(): void {
    this.service.getCustomers().subscribe((customers) => {
      customers.map((cust) => {
        this.acc++
        console.log(this.sum)
        return (this.sum += cust.balance);
      });
      ;
    });
    
  }
}
