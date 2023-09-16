import { Component, OnInit } from '@angular/core';
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

		contractTemplateList: any[]= [];
		isLoading: boolean = false;

		constructor
		(
			private contractTemplateService: ContractTemplateService
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
							console.log(data.contractTemplateList);
							this.contractTemplateList = data.contractTemplateList;

							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							alert(error.error);
						}
					
				}

	}
