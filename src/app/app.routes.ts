import { Routes } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SetContractProjectItemComponent } from './set-contract-project-item/set-contract-project-item.component';
import { SetContractCustomerListComponent } from './set-contract-customer-list/set-contract-customer-list.component';
import { SetContractPaymentLisComponent } from './set-contract-payment-lis/set-contract-payment-lis.component';

export const routes: Routes = [
    {
        path:'addContract', component: AddContractComponent,
        
    },
    {
        path:'setContractProjectItem', component: SetContractProjectItemComponent,
    },
    {
        path:'setContractCustomerList', component: SetContractCustomerListComponent,
    },
    {
        path:'setContractPaymentList', component: SetContractPaymentLisComponent,
    },


];