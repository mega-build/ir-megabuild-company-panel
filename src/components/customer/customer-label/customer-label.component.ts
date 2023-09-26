import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'customer-label',
		templateUrl: './customer-label.component.html',
		styleUrls: ['./customer-label.component.css']
	}
)

export class CustomerLabelComponent
	{
		@Input() customer!:any;
	}
