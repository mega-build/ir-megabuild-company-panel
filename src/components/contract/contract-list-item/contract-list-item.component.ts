import { Component, Input } from '@angular/core';
import { ContractHelper } from 'src/helper/contractHelper';

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

		isLoading:boolean = false;

		constructor
		(
			public contractHelper:ContractHelper
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

		remove
		():void
			{
				
			}
	}
