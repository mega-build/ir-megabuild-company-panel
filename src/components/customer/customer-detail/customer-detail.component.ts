import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'customer-detail',
		templateUrl: './customer-detail.component.html',
		styleUrls: ['./customer-detail.component.css']
	}
)

export class CustomerDetailComponent
	{
		@Input() customer:any ={};
	}
