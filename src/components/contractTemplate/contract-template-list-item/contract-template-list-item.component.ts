import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-template-list-item',
		templateUrl: './contract-template-list-item.component.html',
		styleUrls: ['./contract-template-list-item.component.css']
	}
)

export class ContractTemplateListItemComponent
	{
		@Input() contractTemplate: any={};
	}
