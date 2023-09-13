import { Component, OnInit } from '@angular/core';
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
						
						const data = await this.contractService.getAllRequested();
						
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
