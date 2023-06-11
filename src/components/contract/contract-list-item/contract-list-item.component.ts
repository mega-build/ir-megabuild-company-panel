import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-list-item',
		templateUrl: './contract-list-item.component.html',
		styleUrls: ['./contract-list-item.component.css']
	}
)
export class ContractListItemComponent
	{
		@Input() contract: any={};
	}
