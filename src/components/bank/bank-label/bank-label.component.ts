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
		@Input() bank!:any;

		getLogoUrl
		():string
			{
				return `https://assets.megabuild.ir/bank/logo/${this.bank._id.toString()}.svg`;
			}
	}
