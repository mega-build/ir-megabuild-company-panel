import { Routes } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SetContractProjectItemComponent } from './set-contract-project-item/set-contract-project-item.component';
import { SetContractPaymentLisComponent } from './set-contract-payment-lis/set-contract-payment-lis.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { ContractPayablePriceComponent } from 'src/components/contract/contract-payable-price/contract-payable-price.component';
import { ContractCustomerListComponent } from '../components/contract/contract-customer-list/contract-customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractProjectItemComponent } from 'src/components/contract/contract-project-item/contract-project-item.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from 'src/components/user/add-user/add-user.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { AddProjectComponent } from 'src/components/project/add-project/add-project.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';
import { RequestContractReviewComponent } from 'src/components/contractReview/request-contract-review/request-contract-review.component';
import { ContractReviewManagementComponent } from './contract-review-management/contract-review-management.component';
import { ReviewContractReviewComponent } from './review-contract-review/review-contract-review.component';
import { ContractContentComponent } from 'src/components/contract/contract-content/contract-content.component';
import { ContractPanelComponent } from 'src/components/contract/contract-panel/contract-panel.component';
import { ContractPaymentManagementComponent } from './contract-payment-management/contract-payment-management.component';
import { LoginComponent } from './auth/login/login.component';
import { ContractPaymentPanelComponent } from 'src/components/contract-payment/contract-payment-panel/contract-payment-panel.component';
import { ContractContractPaymentListComponent } from 'src/components/contract/contract-contract-payment-list/contract-contract-payment-list.component';
import { DraftContractPanelComponent } from 'src/components/contract/draft-contract-panel/draft-contract-panel.component';
import { AddContractPaymentComponent } from 'src/components/contract-payment/add-contract-payment/add-contract-payment.component';
import { ContractPreviewComponent } from 'src/components/contract/contract-preview/contract-preview.component';
import { RequestedContractPanelComponent } from 'src/components/contract/requested-contract-panel/requested-contract-panel.component';
import { AddContractCustomerComponent } from 'src/components/contractCustomer/add-contract-customer/add-contract-customer.component';
import { AccpetRequestedContractComponent } from 'src/components/contract/accpet-requested-contract/accpet-requested-contract.component';
import { AccpetedContractPanelComponent } from 'src/components/contract/accpeted-contract-panel/accpeted-contract-panel.component';
import { AddContractTemplateComponent } from 'src/components/contractTemplate/add-contract-template/add-contract-template.component';
import { ContractTemplatePanelComponent } from 'src/components/contractTemplate/contract-template-panel/contract-template-panel.component';
import { ReviewContractPaymentComponent } from 'src/components/contract-payment/review-contract-payment/review-contract-payment.component';
import { NotSettledContractPaymentPanelComponent } from 'src/components/contract-payment/not-settled-contract-payment-panel/not-settled-contract-payment-panel.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { SetUserCompanyAccessPermissionComponent } from 'src/components/userCompanyAccess/set-user-company-access-permission/set-user-company-access-permission.component';
import { UserCompanyAccessPanelComponent } from 'src/components/userCompanyAccess/user-company-access-panel/user-company-access-panel.component';
import { AddProjectItemGalleryComponent } from 'src/components/project-item-gallery/add-project-item-gallery/add-project-item-gallery.component';
import { AddUserUserCompanyAccessComponent } from 'src/components/userCompanyAccess/add-user-user-company-access/add-user-user-company-access.component';
import { EditContractTemplateComponent } from 'src/components/contractTemplate/edit-contract-template/edit-contract-template.component';
import { EditContractCustomerComponent } from 'src/components/contractCustomer/edit-contract-customer/edit-contract-customer.component';


export const routes: Routes = [
    {
        path:'',
        component: LoginComponent,
    },
    {
        path:'company',
        component: SelectCompanyComponent,
    },
    {
        path:'home',
        component: DashboardComponent,
    },
    {
        path:'contractTemplateManagement',
        children:[
            {
                path: 'list',
                component: ContractTemplatePanelComponent
            },
            {
                path: 'add',
                component: AddContractTemplateComponent
            },
            {
                path: 'edit/:contractTemplateId',
                component: EditContractTemplateComponent
            }
        ]
    },
    {
        path:'projectManagement',
        children:[
            {
                path: 'list',
                component: ProjectManagementComponent
            },
            {
                path: 'add',
                component: AddProjectComponent
            },
        ]
    },
    {
        path:'contractReviewManagement',
        children:[
            {
                path:'list/pending',
                component: ContractReviewManagementComponent,
            },
            {
                path:'detail/contractReviewId/:contractReviewId',
                component: ReviewContractReviewComponent,
            }
        ]
        
    },
    {
        path:'reviewContractReview',
        component: ReviewContractReviewComponent,
        data:{
            contractReviewId:undefined
        },
    },
    {
        path:'contractManagement',
        component: ContractManagementComponent,
        children:[
            {
                path: 'list',
                children:[
                    {
                        path: 'draft',
                        component: DraftContractPanelComponent,
                    },
                    {
                        path: 'filter',
                        component: ContractPanelComponent,
                    },
                    {
                        path: 'requested',
                        component: RequestedContractPanelComponent,
                    },
                    {
                        path: 'accepted',
                        component: AccpetedContractPanelComponent,
                    }
                    
                ],
            },
            {
                path: 'detail/contractId/:contractId',
                children:[
                    {
                        path: 'requestReview',
                        component: RequestContractReviewComponent
                    },
                    {
                        path: 'acceptRequest',
                        component: AccpetRequestedContractComponent
                    }
                ]
            },
            
            {
                path: 'editContent/contractId/:contractId',
                component: ContractContentComponent
            },
            {
                path: 'editContract/contractId/:contractId',
                component: EditContractComponent,
                children:[
                    {
                        path: 'paymentList',
                        children:[
                            {
                                path: 'list',
                                component: ContractContractPaymentListComponent
                            },
                            {
                                path: 'add',
                                component: AddContractPaymentComponent
                            }
                        ]
                    },
                    {
                        path: 'customerList',
                        children:[
                            {
                                path: 'list',
                                component: ContractCustomerListComponent
                            },
                            {
                                path: 'add',
                                component: AddContractCustomerComponent
                            },
                            {
                                path: 'edit/:customerId',
                                component: EditContractCustomerComponent
                            },
                        ]
                    },
                    {
                        path: 'projectItem',
                        component: ContractProjectItemComponent
                    },
                    {
                        path: 'payablePrice',
                        component: ContractPayablePriceComponent
                    },
                    {
                        path: 'preview',
                        component: ContractPreviewComponent
                    }
                ]
            },
            {
                path:'addContract',
                component: AddContractComponent,
            },
        ]
    },
    {
        path:'userManagement',
        children:[
            {
                path: 'list',
                component: UserManagementComponent
            },
            {
                path: 'add',
                component: AddUserComponent
            },
            {
                path: 'setAccess/userId/:userId',
                component: AddUserUserCompanyAccessComponent
            },
            {
                path: 'detail/userId/:userId',
                children:[]
            },
        ]
    },
    {
        path:'userCompanyAccessManagement',
        children:[
            {
                path: 'list',
                component: UserCompanyAccessPanelComponent
            },
            {
                path: 'detail/userCompanyAccessId/:userCompanyAccessId/setAccess',
                component: SetUserCompanyAccessPermissionComponent
            },
            {
                path: 'detail/userCompanyAccessId/:userCompanyAccessId/setAccess',
                component: SetUserCompanyAccessPermissionComponent
            }
        ]
    },
    
    {
        path:'setContractProjectItem', component: SetContractProjectItemComponent,
    },
    {
        path:'setContractPaymentList', component: SetContractPaymentLisComponent,
    },
    {
        path:'projectItemGalleryManagement',
        children:[
            {
                path:'add',
                component:AddProjectItemGalleryComponent
            }
        ]
    },
    {
        path:'contractPaymentManagement', component: ContractPaymentManagementComponent,
        children:[
            {
                path: 'list',
                children:[
                    {
                        path:'filter',
                        component:ContractPaymentPanelComponent
                    },
                    {
                        path:'notSettled',
                        component:NotSettledContractPaymentPanelComponent
                    },
                ]

            },
            {
                path: 'detail/contractPaymentId/:contractPaymentId',
                children:[
                    {
                        path: 'review',
                        component: ReviewContractPaymentComponent
                    }
                ]
            },
        ]
    },


];