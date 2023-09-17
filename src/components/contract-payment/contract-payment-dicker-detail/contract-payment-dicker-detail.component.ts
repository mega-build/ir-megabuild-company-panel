import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-dicker-detail',
		templateUrl: './contract-payment-dicker-detail.component.html',
		styleUrls: ['./contract-payment-dicker-detail.component.css']
	}
)

export class ContractPaymentDickerDetailComponent
	{
		@Input() dickerContractPayment: any={};
	}
