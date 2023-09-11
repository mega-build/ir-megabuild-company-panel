import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-cheque-list-item',
		templateUrl: './contract-payment-by-contract-cheque-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-cheque-list-item.component.css']
	}
)

export class ContractPaymentByContractChequeListItemComponent
	{
		@Input() chequeContractPayment: any={};
	}
