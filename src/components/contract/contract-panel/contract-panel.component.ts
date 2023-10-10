import { Component } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

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
				this.filterOptions = filterOptions;

				if
				(
					filterOptions.startDate &&
					filterOptions.endDate 
				)
					{
						this.selectedProject = filterOptions.project;
						this.getAllByProjectAndStartDateAndEndDate();
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
			private contractHelper: ContractHelper,
			private localStorageService:LocalStorageService
		){}
			

		async getAllByProjectAndStartDateAndEndDate
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;
						
						const data = await this.contractService
							.getAllByProjectAndStartDateAndEndDate(
								this.selectedProject._id,
								this.filterOptions.startDate,
								this.filterOptions.endDate
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

		async downloadReportDoc
		():Promise<void>
			{
				const companyName: string = this.localStorageService.getUserCompanyAccess().company.title;
				const sourceHTML = this.contractHelper.generateContractReportTable(
					companyName,
					this.filterOptions.project.title,
					this.filterOptions.startDateShamsi,
					this.filterOptions.endDateShamsi,
					this.contractList,
				);
				
				const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);

				this.downloadDoc(
					document,
					source,
					`لیست قراردادها.doc`
				)
			}

			

		downloadDoc
		(
			documentHtmlElement:any,
			source:string,
			fileName:string
		):void
			{
				const fileDownload = documentHtmlElement.createElement("a");
				documentHtmlElement.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = fileName;
				fileDownload.click();
				documentHtmlElement.body.removeChild(fileDownload);
			}

		
	}
