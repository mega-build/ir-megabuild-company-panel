import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-panel',
		templateUrl: './contract-panel.component.html',
		styleUrls: ['./contract-panel.component.css']
	}
)

export class ContractPanelComponent implements OnInit
	{
		contractList: any[]=[];
		selectedProject:any ={};
		selectedSort:string="";


		setFilter
		(
			filterOptions:any
		):void
			{
				console.log(filterOptions);
				
				this.selectedProject = filterOptions.project;
				this.getAllContractListByProject();
			}
		
		constructor
			(
				private contractService: ContractService
			)
				{}
			
		ngOnInit
		(): void 
			{
				this.getAllContractList();
			}

		getAllContractList
			(): void
				{
					this.contractService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.contractList);
									this.contractList = data.contractList;
								}
						)
				}

		getAllContractListByProject
		(): void
			{
				this.contractService
					.getAllByProject(
						this.selectedProject._id
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contractList);
								this.contractList = data.contractList;
							}
					)
			}
	}
