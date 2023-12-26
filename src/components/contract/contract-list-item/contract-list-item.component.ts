import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-list-item',
		templateUrl: './contract-list-item.component.html',
		styleUrls: ['./contract-list-item.component.css']
	}
)
export class ContractListItemComponent
	{
		@Input() contract: any={};
		@Output() onContractRemoved = new EventEmitter();

		isLoading:boolean = false;


		constructor
		(
			public contractHelper: ContractHelper,
			private contractService: ContractService,
			private errorHelper: ErrorHelper
		){}

		downloadDoc
		():void
			{
				const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
						xmlns:w='urn:schemas-microsoft-com:office:word' 
						xmlns='http://www.w3.org/TR/REC-html40' lang='fa' dir='rtl'>
						<head><meta charset='utf-8'><title>${this.contract.contractNumber}</title>
						<style>
						@font-face {
								font-family:"IRANSansWeb";
								src: url('https://assets.megabuild.ir/fonts/IRANSansWeb_Bold.woff2');
						}
						body{
							font-family:"Tahoma","2  Koodak","B Jadid", "IRANSansWeb";
						}
						</style>
						</head><body>`;
				const footer = "</body></html>";
				const sourceHTML = header+this.contract.content+footer;
				
				const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
				let fileDownload = document.createElement("a");
				document.body.appendChild(fileDownload);
				fileDownload.href = source;
				fileDownload.download = `${this.contract.contractNumber}.doc`;
				fileDownload.click();
				document.body.removeChild(fileDownload);
			}

			
		async remove
		():Promise<void>
			{
				
				try
					{

						this.isLoading = true;

						const data = await this.contractService.remove(
							this.contract._id
						)

						this.isLoading = false;

						this.onContractRemoved.emit();

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
