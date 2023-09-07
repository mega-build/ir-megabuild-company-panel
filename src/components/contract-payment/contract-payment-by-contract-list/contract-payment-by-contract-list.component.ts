import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-by-contract-list',
		templateUrl: './contract-payment-by-contract-list.component.html',
		styleUrls: ['./contract-payment-by-contract-list.component.css']
		}
)

export class ContractPaymentByContractListComponent
	{
		@Output() onRemove = new EventEmitter<any>();
		@Input() contractPaymentList: any[]=[];

		onItemRemoved(
			removedContractPayment:any
		):void
			{
				this.onRemove.emit();
			}
	}
