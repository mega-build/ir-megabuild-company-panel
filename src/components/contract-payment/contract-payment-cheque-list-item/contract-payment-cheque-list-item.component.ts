import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-cheque-list-item',
		templateUrl: './contract-payment-cheque-list-item.component.html',
		styleUrls: ['./contract-payment-cheque-list-item.component.css']
	}
)

export class ContractPaymentChequeListItemComponent
	{
		@Input() chequeContractPayment: any={};
	}
