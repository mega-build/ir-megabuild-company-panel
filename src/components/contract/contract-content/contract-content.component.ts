import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChequeContractPaymentHelper } from 'src/helper/contractPayment/chequeContractPaymentHelper';
import { DeedContractPaymentHelper } from 'src/helper/contractPayment/deedContractPaymentHelper';
import { DipositContractPaymentHelper } from 'src/helper/contractPayment/dipositContractPaymentHelper';
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
		contractId:string = "";
		contract: any= {};

		content :string ="";

		paragraphList:any[] =[];

		getContent
		():string
			{
				if
				(
					this.contract 
				)
					{
						if
						(
							this.contract &&
							this.contract.contractType &&
							this.contract.project
						)
							{
								this.content = this.getTitle(
									this.contract.contractType,
									this.contract.project.projectType,
								);
							}
						if
						(
							this.contract.customers
						)
							{
								this.content = this.content + '</br>' + this.getCustomersContent(this.contract.customers);
							}

						if
						(
							this.contract &&
							this.contract.contractType &&
							this.contract.project &&
							this.contract.projectItem 

						)
							{
								this.content = this.content + this.getProjectItemContent(
									this.contract.contractType,
									this.contract.project.projectType,
									this.contract.project,
									this.contract.projectItem,
								);
							}

						if
						(
							this.contract &&
							this.contract.projectItem

						)
							{
								this.content = this.content + this.getPayablePriceContent(
									this.contract,
									this.contract.projectItem,
								);
							}

						if
						(
							this.contract.contractPayments 

						)
							{
								this.content = this.content + this.getPaymentListContent(
									this.contract.contractPayments
								);
							}
							

						return this.content;
					}
				else
					{
						return ""
					}
				
			}

		constructor
			(
				private route: ActivatedRoute,
				private contractService: ContractService,
				private chequeContractPaymentHelper: ChequeContractPaymentHelper,
				private dipositContractPaymentHelper: DipositContractPaymentHelper,
				private deedContractPaymentHelper: DeedContractPaymentHelper
			)
				{}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractId = params['contractId']; 
						this.getContract();
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
						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						alert(error.error);
					}
				
			}

		addTitle
		():void
			{
				const titleContnet = this.getTitle(
					this.contract.contractType,
					this.contract.project.projectType
				);

				this.paragraphList.push(titleContnet)
			}

		getTitle
		(
			contractType:any,
			projectType:any
		):string
			{
				return ` قرارداد ${contractType.title} ${projectType.title}`;
			}

		addCustomersContent
		():void
			{
				const customersContent = this.getCustomersContent(
					this.contract.customers
				);

				this.paragraphList.push(customersContent)

			}

		getCustomersContent
		(
			customerList:any[]
		):string
			{

				let result:string = customerList.map(
					(
						currentCustomer:any
					) => 
						{
							return `${currentCustomer.firstname} ${currentCustomer.lastname} با شماره ملی ${currentCustomer.nationalCode} به عنوان خریدار به نشانی ${currentCustomer.address} کد پستی ${currentCustomer.postalCode} شماره تماس ${currentCustomer.mobileNumber}`
						}
				).join('');

				return result;
			}

		addProjectItemContent
		():void
			{
				const contet = this.getProjectItemContent(
					this.contract.contractType,
					this.contract.project.projectType,
					this.contract.project,
					this.contract.projectItem
				);
				this.paragraphList.push(contet)
			}

		getProjectItemContent
		(
			contractType:any,
			projectType:any,
			project:any,
			projectItem:any
		):string
			{
				return `
				<h2>
				ماده 1) موضوع قرارداد
				</h2>
				<br>
				<p>
				موضوع قرارداد عبارت است از ${contractType.title} ${projectType.title} شماره ${projectItem.unit} واقع در طبقه ${projectItem.floor} بلوک ${projectItem.block} ${project.title} با زیربنای حدودا ${projectItem.buildupArea} متر مربع طبق نقشه پیوست به نشانی ${project.address}
				</p>
				`
			}

		getPayablePriceContent
		(
			contract:any,
			projectItem:any
		):string
			{
				return `بهای موضوع قرارداد از قرار هر مترمربع ${this.priceWithCommas(projectItem.unitPrice)} (${this.priceToWord(projectItem.unitPrice)} ريال) که با توجه مساحت تقریبی موضوع قرارداد(${projectItem.buildupArea} متر مربع)، جمعا  ${this.priceWithCommas(projectItem.buildupArea*projectItem.unitPrice)} ريال میباشد که با احتساب ${this.priceWithCommas(contract.discount)} ريال تخفیف، به شرح آتی پرداخت میگردد.`
			}

		addPaymentListContent
		():void
			{
				const content = this.getPaymentListContent(
					this.contract.contractPayments
				);
				console.log('content');
				console.log(content);
				
				
				this.paragraphList.push(content)
			}

		getPaymentListContent
		(
			contractPaymentList:any[]
		):string
			{
				let result:string = contractPaymentList.map(
					(
						currentContractPayment:any
					) => 
						{
							if
							(
								currentContractPayment.contractPaymentMethod.componentName == "CHEQUE"
							)
								{
									return this.chequeContractPaymentHelper.getContractContent(
										currentContractPayment
									);
								}
							else if
							(
								currentContractPayment.contractPaymentMethod.componentName == "DIPOSIT"
							)
								{
									return this.dipositContractPaymentHelper.getContractContent(
										currentContractPayment
									);
								}
							else if
							(
								currentContractPayment.contractPaymentMethod.componentName == "DEED"
							)
								{
									return this.deedContractPaymentHelper.getContractContent(
										currentContractPayment
									);
								}
							else
								{
									return '';
								}
							
						}
				).join('</br>');

				result = `
				<h2>
				ماده 2 ) بهاي موضوع قرارداد :
				</h2>
				<br>
				<p>
				${result}
				</p>
				`

				return result;
			}

		priceWithCommas
		(
			price: number
		):string
			{
				return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

		priceToWord
		(
			price: number
		):string
			{
				return  "";//wordifynumbers(price)
			}

		async saveContent
		():Promise<void>
			{
				try
					{
						console.log('here');
						
						this.isLoading = true;
						const data = await this.contractService
							.setContent(
								this.contractId,
								this.getContent()
							);
						console.log(data.result);
						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						alert(error.error);
					}
			}
	}
