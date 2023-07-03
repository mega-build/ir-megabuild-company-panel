import { Component, OnInit } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'contract-payment-panel',
		templateUrl: './contract-payment-panel.component.html',
		styleUrls: ['./contract-payment-panel.component.css']
	}
)
export class ContractPaymentPanelComponent implements OnInit
	{
		contractPaymentList: any[]=[];
		selectedFromDate:any =new Date();
		selectedToDate:any =new Date();
		
		constructor
			(
				private contractPaymentService: ContractPaymentService
			)
				{}

		ngOnInit
		(): void 
			{
				this.getAllContractPaymentListFromDateToDate();
			}

		getAllContractPaymentListFromDateToDate
			(): void
				{
					this.contractPaymentService
						.getAllFromDateToDate(
							this.selectedFromDate,
							this.selectedToDate
						)
						.subscribe(
							(data: any) => 
								{
									console.log(data.contractPaymentList);
									this.contractPaymentList = data.contractPaymentList;
								}
						)
				}

	}
