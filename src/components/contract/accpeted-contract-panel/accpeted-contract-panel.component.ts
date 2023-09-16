import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'accpeted-contract-panel',
		templateUrl: './accpeted-contract-panel.component.html',
		styleUrls: ['./accpeted-contract-panel.component.css']
	}
)

export class AccpetedContractPanelComponent implements OnInit
{
	contractList: any[]=[];
	isLoading: boolean = false;

	constructor
		(
			private contractService: ContractService
		){}

	ngOnInit(): void {
		this.getAllAcceptedContractList()
	}
		

	async getAllAcceptedContractList
	(): Promise<void>
		{

			try
				{
					this.isLoading = true;
					
					const data = await this.contractService.getAllAccepted();
					
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