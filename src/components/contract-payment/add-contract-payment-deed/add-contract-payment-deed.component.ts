import { Component, Input } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-deed',
		templateUrl: './add-contract-payment-deed.component.html',
		styleUrls: ['./add-contract-payment-deed.component.css']
	}
)

export class AddContractPaymentDeedComponent
	{
		@Input() contractId:string = "";
		contractPayment:any ={};
		isLoading:boolean = false;

		constructor
		(
			private contractPaymentService: ContractPaymentService
		)
			{}

		setBankAccount
		(
			bankAccount:any
		):void
			{
				this.contractPayment.bankAccount = bankAccount;
			}

		setPrice
		(
			price:number
		):void
			{
				this.contractPayment.price = price;
			}

		save
		():void
			{
				this.contractPaymentService.addDeed(
					this.contractId,
					this.contractPayment.price,
					this.contractPayment.bankAccount._id
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
