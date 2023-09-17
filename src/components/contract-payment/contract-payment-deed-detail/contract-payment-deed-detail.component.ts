import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-deed-detail',
		templateUrl: './contract-payment-deed-detail.component.html',
		styleUrls: ['./contract-payment-deed-detail.component.css']
	}
)

export class ContractPaymentDeedDetailComponent
	{
		@Input() deedContractPayment: any={};
	}
