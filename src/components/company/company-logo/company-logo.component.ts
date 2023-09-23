import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'company-logo',
		templateUrl: './company-logo.component.html',
		styleUrls: ['./company-logo.component.css']
	}
)

export class CompanyLogoComponent
	{
		@Input() company!:any;
	}
