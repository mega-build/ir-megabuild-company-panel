import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-list-item',
		templateUrl: './contract-payment-list-item.component.html',
		styleUrls: ['./contract-payment-list-item.component.css']
	}
)

export class ContractPaymentListItemComponent
	{
		@Input() contractPayment: any={};
	}
