import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-list',
		templateUrl: './contract-list.component.html',
		styleUrls: ['./contract-list.component.css']
	}
)

export class ContractListComponent
	{
	 	@Input() contractList: any[]=[];
	}
