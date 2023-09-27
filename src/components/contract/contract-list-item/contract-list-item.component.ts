import { Component, Input } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';

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

		constructor
		(
			public contractHelper:ContractHelper
		){}
	}
