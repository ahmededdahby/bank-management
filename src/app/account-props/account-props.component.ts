import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-props',
  templateUrl: './account-props.component.html',
  styleUrls: ['./account-props.component.css']
})
export class AccountPropsComponent implements OnInit {
ngOnInit(): void {
  
} 
@Input() Account : Account | undefined;
@Output() myVariableUpdated = new EventEmitter<string>();
@Input() value:string | undefined;


}
