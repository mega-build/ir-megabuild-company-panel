import { Component, OnInit } from '@angular/core';
import { ContractPaymentHelper } from 'src/helper/contractPayment/contractPaymentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'not-settled-contract-payment-panel',
		templateUrl: './not-settled-contract-payment-panel.component.html',
		styleUrls: ['./not-settled-contract-payment-panel.component.css']
	}
)

export class NotSettledContractPaymentPanelComponent  implements OnInit
{

	contractPaymentList!: any[];
	isLoading: boolean = false;
	REPORT_TITLE: string ="فهرست تعدات مالی واریز نشده خریداران";

	constructor
	(
		private contractPaymentService: ContractPaymentService,
		private errorHelper: ErrorHelper,
		private contractPaymentHelper: ContractPaymentHelper,
		private localStorageService: LocalStorageService
	){}

	ngOnInit
	(): void
		{
			this.getAllNotSettledContractPaymentList()
		}
		

	async getAllNotSettledContractPaymentList
	(): Promise<void>
		{

			try
				{
					this.isLoading = true;
					
					const data = await this.contractPaymentService.getAllNotSettled();
					this.contractPaymentList = data.contractPaymentList;
					
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
			
			const paymentListWithoutDicker = this.contractPaymentHelper.getPaymentListWithoutDicker(this.contractPaymentList);
			const sourceHTML = this.contractPaymentHelper.generateContractPaymentReportTable(
				this.REPORT_TITLE,
				companyName,
				"-",
				"-",
				paymentListWithoutDicker
			);
						
			const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);

			this.downloadDoc(
				document,
				source,
				`لیست پرداخت ها.doc`
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

	