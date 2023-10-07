import { Component, OnInit } from '@angular/core';
import { ContractPaymentHelper } from 'src/helper/contractPayment/contractPaymentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'not-settled-contract-payment-panel',
		templateUrl: './not-settled-contract-payment-panel.component.html',
		styleUrls: ['./not-settled-contract-payment-panel.component.css']
	}
)

export class NotSettledContractPaymentPanelComponent  implements OnInit
{

	contractPaymentList!: any[];
	isLoading: boolean = false;

	constructor
	(
		private contractPaymentService: ContractPaymentService,
		private errorHelper: ErrorHelper,
		private contractPaymentHelper: ContractPaymentHelper
	){}

	ngOnInit
	(): void
		{
			this.getAllNotSettledContractPaymentList()
		}
		

	async getAllNotSettledContractPaymentList
	(): Promise<void>
		{

			try
				{
					this.isLoading = true;
					
					const data = await this.contractPaymentService.getAllNotSettled();
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

	