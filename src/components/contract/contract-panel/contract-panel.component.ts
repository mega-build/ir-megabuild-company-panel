import { Component } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
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
		contractList!: any[];
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
			private contractService: ContractService,
			private errorHelper:ErrorHelper,
			private contractHelper: ContractHelper
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

		async downloadDoc
		():Promise<void>
			{
				const sourceHTML = this.contractHelper.generateContractReportTable(
					"companyName",
					this.filterOptions.project.title,
					this.filterOptions.startDateShamsi,
					this.filterOptions.endDateShamsi,
					this.contractList
				);
				
				const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
				const fileDownload = document.createElement("a");
				document.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = `لیست قراردادها.doc`;
				fileDownload.click();
				document.body.removeChild(fileDownload);
			}

		
	}
