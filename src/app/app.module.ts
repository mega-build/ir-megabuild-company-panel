import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SelectBankComponent } from 'src/components/bank/select-bank/select-bank.component';
import { SelectBankAccountComponent } from 'src/components/bankAccount/select-bank-account/select-bank-account.component';
import { SelectContractPaymentMethodComponent } from 'src/components/contractPaymentMethod/select-contract-payment-method/select-contract-payment-method.component';
import { SelectContractTypeComponent } from 'src/components/contractType/select-contract-type/select-contract-type.component';
import { SelectProjectComponent } from 'src/components/project/select-project/select-project.component';
import { SelectProjectTypeComponent } from 'src/components/projectType/select-project-type/select-project-type.component';
import { DraftContractComponent } from '../components/contract/draft-contract/draft-contract.component';
import { AppRoutingModule } from './app-routing.module';
import { AddResidentialProjectItemComponent } from 'src/components/projectItem/add-residential-project-item/add-residential-project-item.component';
import { SetContractProjectItemComponent } from './set-contract-project-item/set-contract-project-item.component';
import { AddCustomerComponent } from '../components/customer/add-customer/add-customer.component';
import { SetContractCustomerListComponent } from './set-contract-customer-list/set-contract-customer-list.component';
import { SetContractPaymentLisComponent } from './set-contract-payment-lis/set-contract-payment-lis.component';
import { AddContractPaymentComponent } from 'src/components/contract-payment/add-contract-payment/add-contract-payment.component';




@NgModule({
  declarations: [
    AppComponent,
    AddContractComponent,
    SelectBankComponent,
    SelectBankAccountComponent,
    SelectContractPaymentMethodComponent,
    SelectContractTypeComponent,
    SelectProjectTypeComponent,
    SelectProjectComponent,
    DraftContractComponent,
    AddResidentialProjectItemComponent,
    SetContractProjectItemComponent,
    AddCustomerComponent,
    SetContractCustomerListComponent,
    SetContractPaymentLisComponent,
    AddContractPaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
