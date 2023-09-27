import { Component, Input } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';

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

		constructor(
			public contractHelper:ContractHelper
		){}
	}
