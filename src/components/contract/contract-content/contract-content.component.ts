import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

		getContent
		():string
			{
				if
				(
					!this.isLoading &&
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
				private contractService: ContractService
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

		getContract
		(): void
			{
				this.isLoading = true;
				this.contractService
					.get(
						this.contractId
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contract);
								this.contract = data.contract;
								this.isLoading = false;
							}
					)
			}

		getTitle
		(
			contractType:any,
			projectType:any
		):string
			{
				return ` قرارداد ${contractType.title} ${projectType.title}`;
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

		getProjectItemContent
		(
			contractType:any,
			projectType:any,
			project:any,
			projectItem:any
		):string
			{
				return `موضوع قرارداد عبارت است از ${contractType.title} ${projectType.title} شماره ${projectItem.unit} واقع در طبقه ${projectItem.floor} بلوک ${projectItem.block} ${project.title} با زیربنای حدودا ${projectItem.buildupArea} متر مربع طبق نقشه پیوست به نشانی ${project.address} `
			}

		getPayablePriceContent
		(
			contract:any,
			projectItem:any
		):string
			{
				return `بهای موضوع قرارداد از قرار هر مترمربع ${this.priceWithCommas(projectItem.unitPrice)} ريال که با توجه مساحت تقریبی موضوع قرارداد(${projectItem.buildupArea} متر مربع)، جمعا  ${this.priceWithCommas(projectItem.buildupArea*projectItem.unitPrice)} ريال میباشد که با احتساب ${this.priceWithCommas(contract.discount)} ريال تخفیف، به شرح آتی پرداخت میگردد.`
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
								currentContractPayment.paymentMethod.componentName == "CHEQUE"
							)
								{
									return `بخشی از بهای موضوع قرارداد به مبلغ ${this.priceWithCommas(currentContractPayment.price)} (${this.priceToWord(currentContractPayment.price)}) ريال طی چک شماره ${currentContractPayment.chequeNumber} مورخ ${currentContractPayment.dueDate} عهده ی ${currentContractPayment.bank.title_fa} به فروشنده تحویل میگردد.`
								}
							else if
							(
								currentContractPayment.paymentMethod.componentName == "DIPOSIT"
							)
								{
									return `بخشی از بهای موضوع قرارداد به مبلغ ${this.priceWithCommas(currentContractPayment.price)} ريال در تاریخ ${currentContractPayment.dueDate} پرداخت میگردد.`
								}
							else if
							(
								currentContractPayment.paymentMethod.componentName == "DEED"
							)
								{
									return `باقیمانده بهای موضوع قرارداد به مبلغ ${this.priceWithCommas(currentContractPayment.price)} در روز انتقال سند واگذاری و قبل از واگذاری پرداخت میگردد.`
								}
							else
								{
									return '';
								}
							
						}
				).join('</br>');

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
	}
