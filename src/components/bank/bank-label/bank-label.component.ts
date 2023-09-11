import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'bank-label',
		templateUrl: './bank-label.component.html',
		styleUrls: ['./bank-label.component.css']
	}
)

export class BankLabelComponent
	{
		@Input() bank: any = {};
	}
