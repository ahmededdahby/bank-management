import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AccountService } from '../account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-acount-details',
  templateUrl: './acount-details.component.html',
  styleUrls: ['./acount-details.component.css']
})
export class AcountDetailsComponent implements OnInit  {

  account?: Account ;

  constructor(private active : ActivatedRoute , private route : Router , private service : AccountService) {
   

  }
  ngOnInit(): void {
    this.active.params
    .pipe(switchMap((params) => this.service.getbyid(params['id'])))
    .subscribe({
      next: (data) => (this.account = data , console.log(data)),
      error : ()=>{
        this.route.navigate(['/']);
      }
    })
  }

}
