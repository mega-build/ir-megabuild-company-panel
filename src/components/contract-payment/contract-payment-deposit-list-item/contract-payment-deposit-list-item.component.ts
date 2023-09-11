import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-deposit-list-item',
		templateUrl: './contract-payment-deposit-list-item.component.html',
		styleUrls: ['./contract-payment-deposit-list-item.component.css']
	}
)

export class ContractPaymentDepositListItemComponent
	{
		@Input() depositContractPayment: any={};
	}
