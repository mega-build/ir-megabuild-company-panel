import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'customer-list-label',
		templateUrl: './customer-list-label.component.html',
		styleUrls: ['./customer-list-label.component.css']
	}
)

export class CustomerListLabelComponent
	{
		@Input() customerList!:any[];

		getTitle
		():string
			{
				const result: string = this.customerList.map(
					(
						customer:any
					)=>
						{
							return `${customer.firstname} ${customer. lastname}` ;
						}
				).join(',');
				
				return result;
			}
	}
