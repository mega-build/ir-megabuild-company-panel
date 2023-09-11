import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-dicker-list-item',
		templateUrl: './contract-payment-by-contract-dicker-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-dicker-list-item.component.css']
	}
)

export class ContractPaymentByContractDickerListItemComponent
	{
		@Input() dickerContractPayment: any={};
	}
