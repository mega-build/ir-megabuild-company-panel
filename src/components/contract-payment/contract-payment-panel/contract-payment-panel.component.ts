import { Component } from '@angular/core';
import { ContractPaymentHelper } from 'src/helper/contractPayment/contractPaymentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'contract-payment-panel',
		templateUrl: './contract-payment-panel.component.html',
		styleUrls: ['./contract-payment-panel.component.css']
	}
)
export class ContractPaymentPanelComponent
	{
		contractPaymentList!: any[];
		isLoading: boolean = false;
		filterOptions!: any;
		REPORT_TITLE: string = "فهرست دریافتی های صادره";
		
		constructor
		(
			private contractPaymentService: ContractPaymentService,
			private errorHelper:ErrorHelper,
			private contractPaymentHelper: ContractPaymentHelper,
			private localStorageService: LocalStorageService
		){}

		setFilter
		(
			filterOptions:any
		):void
			{
				this.filterOptions = filterOptions;
				if
				(
					filterOptions.startDate &&
					filterOptions.endDate 
				)
					{
						console.log(filterOptions);
						this.getAllContractPaymentListFromDateToDate();
					}
				else
					{
						this.contractPaymentList = [];
					}
				
			}

		async getAllContractPaymentListFromDateToDate
			(): Promise<void>
				{

					try
						{
							this.isLoading = true;
							
							const data = await this.contractPaymentService
								.getAllFromDateToDate(
									this.filterOptions.startDate,
									this.filterOptions.endDate
								);
							this.contractPaymentList = data.contractPaymentList;
							
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							this.errorHelper.showErrorAsAlert(error);
						}

				}

		async downloadReportDoc
		():Promise<void>
			{

				const companyName: string = this.localStorageService.getUserCompanyAccess().company.title;
			
				const paymentListWithoutDicker = this.contractPaymentHelper.getPaymentListWithoutDicker(this.contractPaymentList);
				const sourceHTML = this.contractPaymentHelper.generateContractPaymentReportTable(
					this.REPORT_TITLE,
					companyName,
					this.filterOptions.startDateShamsi,
					this.filterOptions.endDateShamsi,
					paymentListWithoutDicker
				);
				
				const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);

				this.downloadDoc(
					document,
					source,
					`لیست پرداخت ها.doc`
				)
			}

		downloadDoc
		(
			documentHtmlElement:any,
			source:string,
			fileName:string
		):void
			{
				const fileDownload = documentHtmlElement.createElement("a");
				documentHtmlElement.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = fileName;
				fileDownload.click();
				documentHtmlElement.body.removeChild(fileDownload);
			}
	}
