import { Component, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		contractList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private contractService: ContractService,
			private errorHelper:ErrorHelper
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
						
						const data = await this.contractService.getAllDrafed();
						this.contractList = data.contractList;
						
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
