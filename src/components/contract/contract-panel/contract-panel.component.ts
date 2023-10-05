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
				let tableHeader = this.contractHelper.generateContractReportTableHeader();
				console.log('ww');
				
				let tableRowListContent:string ="";

				for (let index = 0; index < this.contractList.length; index++) {
					const contract:any = this.contractList[index];
					tableRowListContent = tableRowListContent+ this.contractHelper.generateContractReportTableRow(contract)
				}

				let tableContent = `<table>${tableHeader}${tableRowListContent}</table>`;

				var header = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
						xmlns:w='urn:schemas-microsoft-com:office:word' 
						xmlns='http://www.w3.org/TR/REC-html40' lang='fa' dir='rtl'>
						<head><meta charset='utf-8'><title>لیست قراردادها</title>
						<style>
						@font-face {
								font-family:"IRANSansWeb";
								src: url('https://assets.megabuild.ir/fonts/IRANSansWeb_Bold.woff2');
						}
						@page WordSection1
							{size:792.0pt 612.0pt;
							mso-page-orientation:landscape;
							margin:72.0pt 72.0pt 72.0pt 72.0pt;
							mso-header-margin:36.0pt;
							mso-footer-margin:36.0pt;
							mso-paper-source:0;}
						div.WordSection1
							{page:WordSection1;}
						body{
							font-family:"Tahoma","2  Koodak","B Jadid", "IRANSansWeb";
						}
						</style>
						</head><body><div class=WordSection1>`;
				var footer = "</div></body></html>";
				var sourceHTML = header+tableContent+footer;
				
				var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
				var fileDownload = document.createElement("a");
				document.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = `لیست قراردادها.doc`;
				fileDownload.click();
				document.body.removeChild(fileDownload);
			}

		
	}
