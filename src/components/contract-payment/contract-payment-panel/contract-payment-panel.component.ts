import { Component } from '@angular/core';
import { ContractPaymentHelper } from 'src/helper/contractPayment/contractPaymentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

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
		
		constructor
		(
			private contractPaymentService: ContractPaymentService,
			private errorHelper:ErrorHelper,
			private contractPaymentHelper: ContractPaymentHelper
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

		async downloadDoc
		():Promise<void>
			{
				const paymentListWithoutDicker = this.contractPaymentHelper.getPaymentListWithoutDicker(this.contractPaymentList);
				const sourceHTML = this.contractPaymentHelper.generateContractReportTable(paymentListWithoutDicker);
				
				const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
				const fileDownload = document.createElement("a");
				document.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = `لیست پرداخت ها.doc`;
				fileDownload.click();
				document.body.removeChild(fileDownload);
			}
	}
