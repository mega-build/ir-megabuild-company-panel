import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-template-list',
		templateUrl: './contract-template-list.component.html',
		styleUrls: ['./contract-template-list.component.css']
	}
)

export class ContractTemplateListComponent
	{
		@Input() contractTemplateList: any[]=[];
	}
