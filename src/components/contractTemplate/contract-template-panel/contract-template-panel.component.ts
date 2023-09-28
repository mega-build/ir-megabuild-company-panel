import { Component, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractTemplateService } from 'src/services/contractTemplate/contract-template.service';

@Component(
	{
		selector: 'contract-template-panel',
		templateUrl: './contract-template-panel.component.html',
		styleUrls: ['./contract-template-panel.component.css']
	}
)

export class ContractTemplatePanelComponent  implements OnInit
	{

		contractTemplateList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private contractTemplateService: ContractTemplateService,
			private errorHelper:ErrorHelper
		){}
			
		ngOnInit
		(): void 
			{
				this.getAllContractTemplateList();
			}

		async getAllContractTemplateList
			(): Promise<void>
				{
					try
						{
							this.isLoading = true;

							const data = await this.contractTemplateService.getAll()
							this.contractTemplateList = data.contractTemplateList;

							this.isLoading = false;
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
