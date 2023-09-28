import { Component, OnInit } from '@angular/core';
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
		private errorHelper: ErrorHelper
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
					
					console.log(data.contractList);
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
	}