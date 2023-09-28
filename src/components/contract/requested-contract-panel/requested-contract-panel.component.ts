import { Component, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'requested-contract-panel',
		templateUrl: './requested-contract-panel.component.html',
		styleUrls: ['./requested-contract-panel.component.css']
	}
)

export class RequestedContractPanelComponent implements OnInit
	{
		contractList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private contractService: ContractService,
			private errorHelper: ErrorHelper
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
						
						const data = await this.contractService.getAllRequested();
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
