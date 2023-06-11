import { Routes } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SetContractProjectItemComponent } from './set-contract-project-item/set-contract-project-item.component';
import { SetContractPaymentLisComponent } from './set-contract-payment-lis/set-contract-payment-lis.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { ContractPayablePriceComponent } from 'src/components/contract/contract-payable-price/contract-payable-price.component';
import { ContractCustomerListComponent } from '../components/contract/contract-customer-list/contract-customer-list.component';
import { ContractPaymentListComponent } from 'src/components/contract/contract-payment-list/contract-payment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractProjectItemComponent } from 'src/components/contract/contract-project-item/contract-project-item.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SetUserAccessComponent } from 'src/components/user/set-user-access/set-user-access.component';
import { AddUserComponent } from 'src/components/user/add-user/add-user.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { AddProjectComponent } from 'src/components/project/add-project/add-project.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';

export const routes: Routes = [
    {
        path:'', component: DashboardComponent,
    },
    {
        path:'projectManagement', component: ProjectManagementComponent,
        children:[
            {
                path: 'add',
                component: AddProjectComponent
            },
        ]
    },
    {
        path:'contractManagement', component: ContractManagementComponent,
    },
    {
        path:'userManagement', component: UserManagementComponent,
        children:[
            {
                path: 'add',
                component: AddUserComponent
            },
            {
                path: 'setAccess',
                component: SetUserAccessComponent,
                data:{
                    userId:undefined
                },
            },
        ]
    },
    {
        path:'addContract', component: AddContractComponent,
    },

    {
        path: 'editContract',
        component: EditContractComponent,
        data:{
            contractId:undefined
        },
        children:[
            {
                path: 'paymentList',
                component: ContractPaymentListComponent
            },
            {
                path: 'customerList',
                component: ContractCustomerListComponent
            },
            {
                path: 'projectItem',
                component: ContractProjectItemComponent
            },
            {
                path: 'payablePrice',
                component: ContractPayablePriceComponent
            },
        ]
    },
    {
        path:'setContractProjectItem', component: SetContractProjectItemComponent,
    },
    {
        path:'setContractPaymentList', component: SetContractPaymentLisComponent,
    },


];