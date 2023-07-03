import { Component, Input } from '@angular/core';
import { PriceHelper } from 'src/helper/priceHelper';

@Component(
	{
		selector: 'contract-list-item',
		templateUrl: './contract-list-item.component.html',
		styleUrls: ['./contract-list-item.component.css']
	}
)
export class ContractListItemComponent
	{
		@Input() contract: any={};

		constructor(
			private priceHelper:PriceHelper
		){}

		getPaymentPrice
		():string
			{
				return this.priceHelper.priceWithCommas(
					this.contract.payablePrice
				)
			}

		getPaymentPriceInWord
		():string
			{
				return this.priceHelper.priceToWord(
					this.contract.payablePrice
				)
			}
	}
