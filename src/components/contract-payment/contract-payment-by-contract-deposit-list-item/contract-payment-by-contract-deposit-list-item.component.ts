import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-deposit-list-item',
		templateUrl: './contract-payment-by-contract-deposit-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-deposit-list-item.component.css']
	}
)

export class ContractPaymentByContractDepositListItemComponent
	{
		@Input() depositContractPayment: any={};
	}
