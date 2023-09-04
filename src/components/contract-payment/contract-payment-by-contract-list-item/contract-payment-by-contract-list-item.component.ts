import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-list-item',
		templateUrl: './contract-payment-by-contract-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-list-item.component.css']
	}
)

export class ContractPaymentByContractListItemComponent
	{
		@Input() contractPayment: any={};
	}
