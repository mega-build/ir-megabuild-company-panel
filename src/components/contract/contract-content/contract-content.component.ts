import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractContentHelper } from 'src/helper/contractContentHelper';
import { ContractHelper } from 'src/helper/contractHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';



@Component(
	{
		selector: 'contract-content',
		templateUrl: './contract-content.component.html',
		styleUrls: ['./contract-content.component.css']
	}
)

export class ContractContentComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId!:string;
		contract!: any;

		content :string ="";

		selectedContractTemplate:any={};

		setContractTemplate
		(
			contractTemplate:any
		):void
			{
				this.selectedContractTemplate = contractTemplate;
				if
				(
					contractTemplate
				)
					{
						this.content = this.getContentFromTemplate(
							this.selectedContractTemplate.htmlContent
						);	
					}
			}

		getContentFromTemplate(
			htmlTemplate:string
		):string
		{
			
			const result = htmlTemplate
				.replace(
					this.contractContentHelper.TITLE_PALACE_HOLDER,
					this.contractHelper.getContractTitle(
						this.contract.contractType,
						this.contract.project.projectType,
						this.contract.project
					)
				)
				.replace(
					this.contractContentHelper.CUSTOMERS_PALACE_HOLDER,
					this.contractContentHelper.getCustomersContent(
						this.contract.customers
					)
				)
				.replace(
					this.contractContentHelper.PAYMENTS_PALACE_HOLDER,
					this.contractContentHelper.getPaymentListContent(
						this.contract.contractPayments
					)
				)
				.replace(
					this.contractContentHelper.PAYABLE_PRICE_PALACE_HOLDER,
					this.contractContentHelper.getPayablePriceContent(
						this.contract,
						this.contract.projectItem
					)
				)
				.replace(
					this.contractContentHelper.SUBJECT_PALACE_HOLDER,
					this.contractContentHelper.getProjectItemContent(
						this.contract.contractType,
						this.contract.project.projectType,
						this.contract.project,
						this.contract.projectItem,
					)
				)
			return result;
		}

		constructor
			(
				private route: ActivatedRoute,
				private contractService: ContractService,
				private errorHelper: ErrorHelper,
				private router:Router,
				private contractHelper:ContractHelper,
				private contractContentHelper: ContractContentHelper
			)
				{}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						let contractIdParameter = params['contractId'];
						if
						(
							contractIdParameter	
						)
							{
								this.contractId =  contractIdParameter
								this.getContract();
							}
						else
							{
								alert("آدرس اشتباه");
								this.navigate_contractDetail();
							}
						
					}
				);

			
			}

		async getContract
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;

						const data = await this.contractService
							.get(
								this.contractId
							);
						console.log(data.contract);
						this.contract = data.contract;
						this.content = data.contract.content;

						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
				
			}

		async saveContent
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractService
							.setContent(
								this.contractId,
								this.content
							);
						console.log(data.result);
						this.isLoading = false;

						this.navigate_contractDetail();
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}

		navigate_contractDetail
		():void
			{
				const nvaigationRouteList = ['contractManagement','list','draft'];
				this.router.navigate(nvaigationRouteList);
			}
	}
