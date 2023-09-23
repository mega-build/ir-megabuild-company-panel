import { Component } from '@angular/core';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-panel',
		templateUrl: './contract-panel.component.html',
		styleUrls: ['./contract-panel.component.css']
	}
)

export class ContractPanelComponent
	{
		contractList: any[]=[];
		filterOptions: any ={};
		selectedProject:any ={};
		selectedSort:string="";
		isLoading: boolean = false;


		setFilter
		(
			filterOptions:any
		):void
			{
				console.log(filterOptions);
				this.filterOptions = filterOptions;

				if
				(
					filterOptions.startDate &&
					filterOptions.endDate 
				)
					{
						this.selectedProject = filterOptions.project;
						this.getAllContractListByProject();
					}
				else
					{
						this.contractList = [];
					}
			}
		
		constructor
		(
			private contractService: ContractService
		){}
			

		async getAllContractListByProject
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;
						
						const data = await this.contractService
							.getAllByProject(
								this.selectedProject._id
							);
						
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
