import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-detail',
		templateUrl: './contract-detail.component.html',
		styleUrls: ['./contract-detail.component.css']
	}
)

export class ContractDetailComponent
	{
		@Input() contract: any;
	}
