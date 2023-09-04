import { Component, Input } from '@angular/core';
import { PriceHelper } from 'src/helper/priceHelper';

@Component(
	{
		selector: 'price-label',
		templateUrl: './price-label.component.html',
		styleUrls: ['./price-label.component.css']
	}
)

export class PriceLabelComponent
	{
		@Input() price: number=0;

		constructor(
			private priceHelper:PriceHelper
		){}

		getPrice
		():string
			{
				return this.priceHelper.priceWithCommas(
					this.price
				)
			}

		getPriceInWord
		():string
			{
				return this.priceHelper.priceToWord(
					this.price
				)
			}
	}
