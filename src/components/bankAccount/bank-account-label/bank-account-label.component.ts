import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'bank-account-label',
		templateUrl: './bank-account-label.component.html',
		styleUrls: ['./bank-account-label.component.css']
	}
)

export class BankAccountLabelComponent
	{
		@Input() bankAccount: any={};
	}
