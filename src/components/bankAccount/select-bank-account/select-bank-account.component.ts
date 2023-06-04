import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'select-bank-account',
		templateUrl: './select-bank-account.component.html',
		styleUrls: ['./select-bank-account.component.css']
	}
)

export class SelectBankAccountComponent {
	@Output() setBankAccount = new EventEmitter<any>();

	bankAccountList: any[]= [
		{
			_id: "6477369739a5055a5148044e",
			title: "پیش فروش"
		},
		{
			_id: "647736a739a5055a5148044f",
			title: "فروش"
		}
	];

	selectBankAccount
	(
		bankAccount:any
	):void
		{
			this.setBankAccount.emit(bankAccount);
		}
}
