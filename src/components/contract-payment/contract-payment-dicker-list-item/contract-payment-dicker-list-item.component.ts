import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-dicker-list-item',
		templateUrl: './contract-payment-dicker-list-item.component.html',
		styleUrls: ['./contract-payment-dicker-list-item.component.css']
	}
)

export class ContractPaymentDickerListItemComponent
	{
		@Input() dickerContractPayment: any={};
	}
