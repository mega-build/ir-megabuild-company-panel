import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'customer-list-item',
		templateUrl: './customer-list-item.component.html',
		styleUrls: ['./customer-list-item.component.css']
	}
)

export class CustomerListItemComponent
	{
		@Input() customer!:any;
	}
