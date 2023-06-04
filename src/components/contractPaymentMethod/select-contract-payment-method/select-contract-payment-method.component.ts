import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'select-contract-payment-method',
		templateUrl: './select-contract-payment-method.component.html',
		styleUrls: ['./select-contract-payment-method.component.css']
	}
)

export class SelectContractPaymentMethodComponent {
	@Output() setContractPaymentMethod = new EventEmitter<any>();

	contractPaymentMehodList: any[]= [
		{
			_id: "6478c456bc098039ca4f379a",
			title: "نقدی"
		},
		{
			_id: "6478c467bc098039ca4f379b",
			title: "چک"
		},
		{
			_id: "6478c472bc098039ca4f379c",
			title: "تهاتر"
		}
	];

	selectContractPaymentMehod
	(
		contractPaymentMehod:any
	):void
		{
			this.setContractPaymentMethod.emit(contractPaymentMehod);
		}
}
