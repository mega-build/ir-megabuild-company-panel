import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'company-label',
		templateUrl: './company-label.component.html',
		styleUrls: ['./company-label.component.css']
	}
)

export class CompanyLabelComponent
	{
		@Input() company!:any;
	}
