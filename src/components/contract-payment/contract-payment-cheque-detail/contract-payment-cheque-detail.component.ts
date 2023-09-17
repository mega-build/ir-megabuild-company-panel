import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-cheque-detail',
		templateUrl: './contract-payment-cheque-detail.component.html',
		styleUrls: ['./contract-payment-cheque-detail.component.css']
	}
)

export class ContractPaymentChequeDetailComponent
	{
		@Input() chequeContractPayment: any={};
	}
