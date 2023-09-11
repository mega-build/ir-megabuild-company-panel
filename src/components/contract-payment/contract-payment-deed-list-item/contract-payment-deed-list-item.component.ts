import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-deed-list-item',
		templateUrl: './contract-payment-deed-list-item.component.html',
		styleUrls: ['./contract-payment-deed-list-item.component.css']
	}
)

export class ContractPaymentDeedListItemComponent
	{
		@Input() deedContractPayment: any={};
	}
