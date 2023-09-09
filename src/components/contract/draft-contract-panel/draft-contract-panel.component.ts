import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'draft-contract-panel',
		templateUrl: './draft-contract-panel.component.html',
		styleUrls: ['./draft-contract-panel.component.css']
	}
)

export class DraftContractPanelComponent implements OnInit
	{

		contractList: any[]=[];
		isLoading: boolean = false;

		constructor
			(
				private contractService: ContractService
			){}

		ngOnInit(): void {
			this.getAllDraftedContractList()
		}
			

		async getAllDraftedContractList
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;
						
						const data = await this.contractService.getAll();
						
						console.log(data.contractList);
						this.contractList = data.contractList;
						
						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						if
						(
							error.error &&
							error.error.message
						)
							{
								alert(error.error.message);
							}
						else
							{
								alert(error)
							}
					}
				
			}

	}
