import { Component } from '@angular/core';

@Component(
	{
		selector: 'add-contract-payment',
		templateUrl: './add-contract-payment.component.html',
		styleUrls: ['./add-contract-payment.component.css']
	}
)

export class AddContractPaymentComponent
	{

		contract:any = {};

		setBankAccount
		(
			bankAccount:any
		):void
			{
				this.contract.bankAccount = bankAccount;
				console.log(this.contract);
				
			}

		setContractPaymentMethod
		(
			contractPaymentMethod:any
		):void
			{
				this.contract.contractPaymentMethod = contractPaymentMethod;
				console.log(this.contract);
				
			}

	}
