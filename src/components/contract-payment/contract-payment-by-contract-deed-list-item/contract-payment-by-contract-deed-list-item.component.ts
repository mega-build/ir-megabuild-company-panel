import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-deed-list-item',
		templateUrl: './contract-payment-by-contract-deed-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-deed-list-item.component.css']
	}
)

export class ContractPaymentByContractDeedListItemComponent
	{
		@Input() deedContractPayment: any={};
	}
