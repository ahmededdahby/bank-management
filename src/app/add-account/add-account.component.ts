import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../models/account.model';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  accountform: FormGroup;
  isloading = false;


  
  constructor(private formbuilder : FormBuilder , private service : AccountService ,private router : Router) {
    this.accountform = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      type: ['', Validators.required],
      balance: [0, Validators.required]
    });
    
  }

  onsubmit() {
    this.isloading = true;
    this.service.create(this.accountform.value)
    .subscribe((data: Account) => {
      this.isloading = false;
      this.accountform.reset();
      this.router.navigate(['/']);
      
    })
    alertify.success('Account created successfully');
  }
  getControl(controlname : string) {
    return this.accountform.get(controlname);

  }
  cansubmit() : boolean {
    return this.accountform.dirty && this.accountform.valid;
  }
}
