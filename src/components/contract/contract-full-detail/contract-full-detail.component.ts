import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-full-detail',
		templateUrl: './contract-full-detail.component.html',
		styleUrls: ['./contract-full-detail.component.css']
	}
)

export class ContractFullDetailComponent
	{
		@Input() contract: any;
	}
