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
import { SetContractPaymentLisComponent } from './set-contract-payment-lis/set-contract-payment-lis.component';
import { AddContractPaymentComponent } from 'src/components/contract-payment/add-contract-payment/add-contract-payment.component';
import { ShareModule } from 'src/share/share.module';
import { ContractDetailComponent } from '../components/contract/contract-detail/contract-detail.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { ContractPayablePriceComponent } from '../components/contract/contract-payable-price/contract-payable-price.component';
import { ContractCustomerListComponent } from '../components/contract/contract-customer-list/contract-customer-list.component';
import { FindCustomerByNationalCodeComponent } from '../components/customer/find-customer-by-national-code/find-customer-by-national-code.component';
import { AddContractCustomerComponent } from '../components/contractCustomer/add-contract-customer/add-contract-customer.component';
import { ContractPaymentListComponent } from '../components/contract/contract-payment-list/contract-payment-list.component';
import { AddContractPaymentDepositComponent } from '../components/contract-payment/add-contract-payment-deposit/add-contract-payment-deposit.component';
import { AddContractPaymentChequeComponent } from '../components/contract-payment/add-contract-payment-cheque/add-contract-payment-cheque.component';
import { AddContractPaymentDickerComponent } from '../components/contract-payment/add-contract-payment-dicker/add-contract-payment-dicker.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractPanelComponent } from 'src/components/contract/contract-panel/contract-panel.component';
import { ContractProjectItemComponent } from '../components/contract/contract-project-item/contract-project-item.component';
import { ProjectItemDetailComponent } from '../components/projectItem/project-item-detail/project-item-detail.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserPanelComponent } from '../components/user/user-panel/user-panel.component';
import { AddUserComponent } from '../components/user/add-user/add-user.component';
import { SetUserAccessComponent } from '../components/user/set-user-access/set-user-access.component';
import { PanelNavigationComponent } from '../components/share/panel-navigation/panel-navigation.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectPanelComponent } from '../components/project/project-panel/project-panel.component';
import { AddProjectComponent } from '../components/project/add-project/add-project.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';
import { ContractFilterComponent } from '../components/contract/contract-filter/contract-filter.component';
import { ContractListComponent } from '../components/contract/contract-list/contract-list.component';
import { ContractListItemComponent } from '../components/contract/contract-list-item/contract-list-item.component';
import { RequestContractReviewComponent } from '../components/contractReview/request-contract-review/request-contract-review.component';
import { SelectUserListComponent } from '../components/user/select-user-list/select-user-list.component';
import { ContractReviewManagementComponent } from './contract-review-management/contract-review-management.component';
import { ContractReviewPanelComponent } from '../components/contractReview/contract-review-panel/contract-review-panel.component';
import { ContractReviewListComponent } from '../components/contractReview/contract-review-list/contract-review-list.component';
import { ContractReviewListItemComponent } from 'src/components/contractReview/contract-review-list-item/contract-review-list-item.component';
import { ContractReviewDetailComponent } from '../components/contractReview/contract-review-detail/contract-review-detail.component';
import { ReviewContractReviewComponent } from './review-contract-review/review-contract-review.component';
import { CustomerLabelComponent } from '../components/customer/customer-label/customer-label.component';
import { CustomerDetailComponent } from '../components/customer/customer-detail/customer-detail.component';
import { AddLandParcelProjectItemComponent } from '../components/projectItem/add-land-parcel-project-item/add-land-parcel-project-item.component';
import { SelectContractTemplateComponent } from '../components/contractTemplate/select-contract-template/select-contract-template.component';
import { ContractTemplateEditorComponent } from '../components/contractTemplate/contract-template-editor/contract-template-editor.component';
import { ContractContentComponent } from '../components/contract/contract-content/contract-content.component';
import { SelectCompanyComponent } from '../components/company/select-company/select-company.component';
import { SelectUserCompanyAccessComponent } from '../components/userCompanyAccess/select-user-company-access/select-user-company-access.component';
import { ContractPaymentManagementComponent } from './contract-payment-management/contract-payment-management.component';
import { ContractPaymentPanelComponent } from 'src/components/contract-payment/contract-payment-panel/contract-payment-panel.component';





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
    SetContractPaymentLisComponent,
    AddContractPaymentComponent,
    ContractDetailComponent,
    EditContractComponent,
    ContractPayablePriceComponent,
    ContractCustomerListComponent,
    FindCustomerByNationalCodeComponent,
    AddContractCustomerComponent,
    ContractPaymentListComponent,
    AddContractPaymentDepositComponent,
    AddContractPaymentChequeComponent,
    AddContractPaymentDickerComponent,
    ContractPanelComponent,
    DashboardComponent,
    ContractProjectItemComponent,
    ProjectItemDetailComponent,
    UserManagementComponent,
    UserPanelComponent,
    AddUserComponent,
    SetUserAccessComponent,
    PanelNavigationComponent,
    ProjectManagementComponent,
    ProjectPanelComponent,
    AddProjectComponent,
    ContractManagementComponent,
    ContractFilterComponent,
    ContractListComponent,
    ContractListItemComponent,
    RequestContractReviewComponent,
    SelectUserListComponent,
    ContractReviewManagementComponent,
    ContractReviewPanelComponent,
    ContractReviewListComponent,
    ContractReviewListItemComponent,
    ContractReviewDetailComponent,
    ReviewContractReviewComponent,
    CustomerLabelComponent,
    CustomerDetailComponent,
    AddLandParcelProjectItemComponent,
    SelectContractTemplateComponent,
    ContractTemplateEditorComponent,
    ContractContentComponent,
    SelectCompanyComponent,
    SelectUserCompanyAccessComponent,
    ContractPaymentPanelComponent,
    ContractPaymentManagementComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
