import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-payable-price',
		templateUrl: './contract-payable-price.component.html',
		styleUrls: ['./contract-payable-price.component.css']
	}
)

export class ContractPayablePriceComponent implements OnInit
	{

		contractId: string = "";
		contract:any ={};

		payablePrice: number = 0;
		discount: number = 0;

		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService
		)
			{}

		setDiscount
		(
			price:number
		):void
			{
				this.discount = price;
			}

		setPayablePrice
		(
			price:number
		):void
			{
				this.payablePrice = price;
			}

		validate
		(): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!this.payablePrice
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش مبلغ نهایی را وارد کنید.");
					}
			
				if
				(
					typeof this.discount !== 'number'
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش تخفیف را وارد کنید.");
					}
			
				return validationResult;
			}
		
		async save
		():Promise<void>
			{
				const validationResult = this.validate();

				if
				(
					!validationResult.hasError
				)
					{
						try
							{
								this.isLoading = true;
								const data = await this.contractService
									.setPayablePrice(
										this.contractId,
										this.payablePrice,
										this.discount
									);

								console.log(data);
								this.isLoading = false;
							}
						catch
						(
							error: any
						)
							{
								this.isLoading = false;
								if
								(
									error.error &&
									error.error.message
								)
									{
										alert(error.error.message);
									}
								else
									{
										alert(error)
									}
							}

					}
				else
					{
						this.validationResult = validationResult;
					}
				
			}
			
		ngOnInit
		(): void
			{
				if
				(
					this.route.parent
				)
					{
						this.route.parent.params.subscribe(params => 
							{
								this.contractId = params['contractId'];
								this.getContract();
							}
						);
					}
				
				
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
						const contract = data.contract;
						this.contract = contract;
						this.discount = contract.discount;
						this.payablePrice = contract.payablePrice;
						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						if
						(
							error.error &&
							error.error.message
						)
							{
								alert(error.error.message);
							}
						else
							{
								alert(error)
							}
					}
				
			}
	}
