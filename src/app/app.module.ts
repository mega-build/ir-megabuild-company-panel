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
import { SelectUserCompanyAccessComponent } from '../components/userCompanyAccess/select-user-company-access/select-user-company-access.component';
import { ContractPaymentManagementComponent } from './contract-payment-management/contract-payment-management.component';
import { ContractPaymentPanelComponent } from 'src/components/contract-payment/contract-payment-panel/contract-payment-panel.component';
import { AddContractPaymentDeedComponent } from '../components/contract-payment/add-contract-payment-deed/add-contract-payment-deed.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginWithEmailPasswordComponent } from './auth/components/login-with-email-password/login-with-email-password.component';
import { ShmasiDatePickerComponent } from '../components/share/shmasi-date-picker/shmasi-date-picker.component';
import { PriceInputComponent } from '../components/share/price-input/price-input.component';
import { ProjectItemAbbreviationComponent } from '../components/projectItem/project-item-abbreviation/project-item-abbreviation.component';
import { ContractPaymentListItemComponent } from 'src/components/contract-payment/contract-payment-list-item/contract-payment-list-item.component';
import { ContractContractPaymentListComponent } from '../components/contract/contract-contract-payment-list/contract-contract-payment-list.component';
import { ContractPaymentListComponent } from 'src/components/contract-payment/contract-payment-list/contract-payment-list.component';
import { PriceLabelComponent } from '../components/share/price-label/price-label.component';
import { ContractReviewIconComponent } from '../components/contractReview/contract-review-icon/contract-review-icon.component';
import { MenuSelectUserCompanyAccessComponent } from 'src/components/userCompanyAccess/menu-select-user-company-access/menu-select-user-company-access.component';
import { ProjectLabelComponent } from '../components/project/project-label/project-label.component';
import { ContractPaymentByContractListItemComponent } from 'src/components/contract-payment/contract-payment-by-contract-list-item/contract-payment-by-contract-list-item.component';
import { ContractPaymentByContractListComponent } from 'src/components/contract-payment/contract-payment-by-contract-list/contract-payment-by-contract-list.component';
import { ContractPaymentByContractPanelComponent } from 'src/components/contract-payment/contract-payment-by-contract-panel/contract-payment-by-contract-panel.component';
import { ContractPaymentFilterComponent } from '../components/contract-payment/contract-payment-filter/contract-payment-filter.component';
import { LoadingComponent } from 'src/components/share/loading/loading.component';
import { ValidationResultComponent } from 'src/components/share/validation-result/validation-result.component';
import { ProjectListComponent } from '../components/project/project-list/project-list.component';
import { ProjectListItemComponent } from '../components/project/project-list-item/project-list-item.component';
import { DraftContractPanelComponent } from 'src/components/contract/draft-contract-panel/draft-contract-panel.component';
import { BankAccountLabelComponent } from '../components/bankAccount/bank-account-label/bank-account-label.component';
import { BankLabelComponent } from '../components/bank/bank-label/bank-label.component';
import { ContractPaymentByContractChequeListItemComponent } from 'src/components/contract-payment/contract-payment-by-contract-cheque-list-item/contract-payment-by-contract-cheque-list-item.component';
import { ContractPaymentByContractDeedListItemComponent } from 'src/components/contract-payment/contract-payment-by-contract-deed-list-item/contract-payment-by-contract-deed-list-item.component';
import { ContractPaymentByContractDepositListItemComponent } from 'src/components/contract-payment/contract-payment-by-contract-deposit-list-item/contract-payment-by-contract-deposit-list-item.component';
import { ContractPaymentByContractDickerListItemComponent } from 'src/components/contract-payment/contract-payment-by-contract-dicker-list-item/contract-payment-by-contract-dicker-list-item.component';
import { ContractPaymentChequeListItemComponent } from 'src/components/contract-payment/contract-payment-cheque-list-item/contract-payment-cheque-list-item.component';
import { ContractPaymentDeedListItemComponent } from 'src/components/contract-payment/contract-payment-deed-list-item/contract-payment-deed-list-item.component';
import { ContractPaymentDepositListItemComponent } from 'src/components/contract-payment/contract-payment-deposit-list-item/contract-payment-deposit-list-item.component';
import { ContractPaymentDickerListItemComponent } from 'src/components/contract-payment/contract-payment-dicker-list-item/contract-payment-dicker-list-item.component';
import { ContractPreviewComponent } from 'src/components/contract/contract-preview/contract-preview.component';
import { RequestedContractPanelComponent } from '../components/contract/requested-contract-panel/requested-contract-panel.component';
import { AccpetRequestedContractComponent } from '../components/contract/accpet-requested-contract/accpet-requested-contract.component';
import { AccpetedContractPanelComponent } from '../components/contract/accpeted-contract-panel/accpeted-contract-panel.component';
import { AddContractTemplateComponent } from '../components/contractTemplate/add-contract-template/add-contract-template.component';
import { ContractTemplatePanelComponent } from '../components/contractTemplate/contract-template-panel/contract-template-panel.component';
import { ContractTemplateListComponent } from '../components/contractTemplate/contract-template-list/contract-template-list.component';
import { ContractTemplateListItemComponent } from 'src/components/contractTemplate/contract-template-list-item/contract-template-list-item.component';
import { ReviewContractPaymentComponent } from '../components/contract-payment/review-contract-payment/review-contract-payment.component';
import { ContractPaymentDetailComponent } from '../components/contract-payment/contract-payment-detail/contract-payment-detail.component';
import { ContractPaymentDeedDetailComponent } from '../components/contract-payment/contract-payment-deed-detail/contract-payment-deed-detail.component';
import { ContractPaymentChequeDetailComponent } from 'src/components/contract-payment/contract-payment-cheque-detail/contract-payment-cheque-detail.component';
import { ContractPaymentDepositDetailComponent } from '../components/contract-payment/contract-payment-deposit-detail/contract-payment-deposit-detail.component';
import { ContractPaymentDickerDetailComponent } from '../components/contract-payment/contract-payment-dicker-detail/contract-payment-dicker-detail.component';
import { NotSettledContractPaymentPanelComponent } from '../components/contract-payment/not-settled-contract-payment-panel/not-settled-contract-payment-panel.component';
import { ContractPaymentStatusIconComponent } from '../components/contract-payment/contract-payment-status-icon/contract-payment-status-icon.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { CompanyLogoComponent } from '../components/company/company-logo/company-logo.component';
import { ContractFullDetailComponent } from '../components/contract/contract-full-detail/contract-full-detail.component';
import { NationalCodeInputComponent } from '../components/share/national-code-input/national-code-input.component';
import { EditContractNavigationComponent } from '../components/contract/edit-contract-navigation/edit-contract-navigation.component';
import { ContractStatusIconComponent } from 'src/components/contract/contract-status-icon/contract-status-icon.component';
import { ContractCustomerPanelComponent } from '../components/customer/contract-customer-panel/contract-customer-panel.component';
import { CustomerListItemComponent } from 'src/components/customer/customer-list-item/customer-list-item.component';
import { CustomerListComponent } from 'src/components/customer/customer-list/customer-list.component';
import { ProjectItemResidentialDetailComponent } from '../components/projectItem/project-item-residential-detail/project-item-residential-detail.component';
import { ProjectItemLandParcelDetailComponent } from '../components/projectItem/project-item-land-parcel-detail/project-item-land-parcel-detail.component';
import { CustomerListLabelComponent } from '../components/customer/customer-list-label/customer-list-label.component';
import { EmptyListComponent } from '../components/share/empty-list/empty-list.component';
import { LoadingListComponent } from '../components/share/loading-list/loading-list.component';
import { UserLabelComponent } from '../components/user/user-label/user-label.component';
import { SelectContractReviewerUserCompanyAccessListComponent } from '../components/userCompanyAccess/select-contract-reviewer-user-company-access-list/select-contract-reviewer-user-company-access-list.component';
import { SetUserCompanyAccessPermissionComponent } from '../components/userCompanyAccess/set-user-company-access-permission/set-user-company-access-permission.component';
import { UserCompanyAccessPanelComponent } from '../components/userCompanyAccess/user-company-access-panel/user-company-access-panel.component';
import { AddProjectItemGalleryComponent } from 'src/components/project-item-gallery/add-project-item-gallery/add-project-item-gallery.component';
import { AddContractPayablePriceComponent } from 'src/components/contract-payable-price/add-contract-payable-price/add-contract-payable-price.component';
import { ContractPayablePriceDetailComponent } from '../components/contract-payable-price/contract-payable-price-detail/contract-payable-price-detail.component';
import { AddUserUserCompanyAccessComponent } from 'src/components/userCompanyAccess/add-user-user-company-access/add-user-user-company-access.component';
import { CompanyLabelComponent } from '../components/company/company-label/company-label.component';
import { EditContractTemplateComponent } from '../components/contractTemplate/edit-contract-template/edit-contract-template.component';





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
    SelectUserCompanyAccessComponent,
    ContractPaymentPanelComponent,
    ContractPaymentManagementComponent,
    AddContractPaymentDeedComponent,
    LoginComponent,
    LoginWithEmailPasswordComponent,
    ShmasiDatePickerComponent,
    PriceInputComponent,
    ProjectItemAbbreviationComponent,
    ContractPaymentListComponent,
    ContractPaymentListItemComponent,
    ContractContractPaymentListComponent,
    PriceLabelComponent,
    ContractReviewIconComponent,
    MenuSelectUserCompanyAccessComponent,
    ProjectLabelComponent,
    ContractPaymentByContractPanelComponent,
    ContractPaymentByContractListComponent,
    ContractPaymentByContractListItemComponent,
    ContractPaymentFilterComponent,
    LoadingComponent,
    ValidationResultComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    DraftContractPanelComponent,
    ContractPaymentChequeListItemComponent,
    ContractPaymentDeedListItemComponent,
    ContractPaymentDepositListItemComponent,
    ContractPaymentDickerListItemComponent,
    BankAccountLabelComponent,
    BankLabelComponent,
    ContractPaymentByContractDeedListItemComponent,
    ContractPaymentByContractChequeListItemComponent,
    ContractPaymentByContractDepositListItemComponent,
    ContractPaymentByContractDickerListItemComponent,
    ContractPreviewComponent,
    RequestedContractPanelComponent,
    AccpetRequestedContractComponent,
    AccpetedContractPanelComponent,
    AddContractTemplateComponent,
    ContractTemplatePanelComponent,
    ContractTemplateListComponent,
    ContractTemplateListItemComponent,
    ReviewContractPaymentComponent,
    ContractPaymentDetailComponent,
    ContractPaymentChequeDetailComponent,
    ContractPaymentDeedDetailComponent,
    ContractPaymentDepositDetailComponent,
    ContractPaymentDickerDetailComponent,
    NotSettledContractPaymentPanelComponent,
    ContractPaymentStatusIconComponent,
    SelectCompanyComponent,
    CompanyLogoComponent,
    ContractFullDetailComponent,
    NationalCodeInputComponent,
    EditContractNavigationComponent,
    ContractStatusIconComponent,
    ContractCustomerPanelComponent,
    CustomerListComponent,
    CustomerListItemComponent,
    ProjectItemResidentialDetailComponent,
    ProjectItemLandParcelDetailComponent,
    CustomerListLabelComponent,
    EmptyListComponent,
    LoadingListComponent,
    UserLabelComponent,
    SelectContractReviewerUserCompanyAccessListComponent,
    SetUserCompanyAccessPermissionComponent,
    UserCompanyAccessPanelComponent,
    AddProjectItemGalleryComponent,
    AddContractPayablePriceComponent,
    ContractPayablePriceDetailComponent,
    AddUserUserCompanyAccessComponent,
    CompanyLabelComponent,
    EditContractTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ShareModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
