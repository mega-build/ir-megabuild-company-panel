import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'customer-list',
		templateUrl: './customer-list.component.html',
		styleUrls: ['./customer-list.component.css']
	}
)

export class CustomerListComponent
	{
		@Input() customerList!:any[];
	}
