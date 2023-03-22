import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountPropsComponent } from './account-props/account-props.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcountDetailsComponent } from './acount-details/acount-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAccountComponent,
    AccountCardComponent,
    AccountPropsComponent,
    AddAccountComponent,
    NavigationComponent,
    AcountDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
