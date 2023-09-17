import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-deposit-detail',
		templateUrl: './contract-payment-deposit-detail.component.html',
		styleUrls: ['./contract-payment-deposit-detail.component.css']
	}
)

export class ContractPaymentDepositDetailComponent
	{
		@Input() depositContractPayment: any={};
	}
