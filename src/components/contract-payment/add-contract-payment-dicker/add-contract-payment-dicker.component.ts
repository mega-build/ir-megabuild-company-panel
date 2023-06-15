import { Component, Input } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-dicker',
		templateUrl: './add-contract-payment-dicker.component.html',
		styleUrls: ['./add-contract-payment-dicker.component.css']
	}
)

export class AddContractPaymentDickerComponent
	{
		@Input() contractId:string = "";
		contractPayment:any ={};
		isLoading:boolean = false;

		constructor
		(
			private contractPaymentService: ContractPaymentService
		)
			{}

		save
		():void
			{
				this.contractPaymentService.addDicker(
					this.contractId,
					this.contractPayment.price
				).subscribe(
					(data: any) => 
						{
							console.log(data.contractPaymentId);
							this.contractPayment._id = data.contractPaymentId
							this.isLoading = false;
						}
				)
			}
	}
