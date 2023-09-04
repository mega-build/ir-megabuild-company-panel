import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-list',
		templateUrl: './contract-payment-by-contract-list.component.html',
		styleUrls: ['./contract-payment-by-contract-list.component.css']
		}
)

export class ContractPaymentByContractListComponent
	{
		@Input() contractPaymentList: any[]=[];
	}
