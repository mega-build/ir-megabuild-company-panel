import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-list',
		templateUrl: './contract-payment-list.component.html',
		styleUrls: ['./contract-payment-list.component.css']
	}
)

export class ContractPaymentListComponent
	{
		@Input() contractPaymentList: any[]=[];
	}
