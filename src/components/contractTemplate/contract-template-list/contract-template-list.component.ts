import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component(
	{
		selector: 'contract-template-list',
		templateUrl: './contract-template-list.component.html',
		styleUrls: ['./contract-template-list.component.css']
	}
)

export class ContractTemplateListComponent
	{
		
		@Output() onContractTemplateRemoved = new EventEmitter();
		@Input() contractTemplateList: any[]=[];

		contractTemplateRemoved
		():void
			{
				this.onContractTemplateRemoved.emit();
			}
	}
