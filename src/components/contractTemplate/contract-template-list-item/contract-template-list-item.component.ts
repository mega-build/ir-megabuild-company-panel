import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractTemplateService } from 'src/services/contractTemplate/contract-template.service';

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
		@Output() onContractTemplateRemoved = new EventEmitter();

		isLoading:boolean = false;

		constructor
		(
			private contractTemplateService:ContractTemplateService,
			private errorHelper: ErrorHelper
		){}

		async remove
		():Promise<void>
			{
				
				try
					{

						this.isLoading = true;

						const data = await this.contractTemplateService.remove(
							this.contractTemplate._id
						)

						this.contractTemplate._id = data.contractTemplateId

						this.isLoading = false;

						this.onContractTemplateRemoved.emit();

					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}
	}
