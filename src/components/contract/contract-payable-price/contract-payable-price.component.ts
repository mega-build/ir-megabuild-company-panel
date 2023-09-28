import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		contractId!: string;
		contract!:any;

		payablePrice!: number;
		discount!: number;

		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper:ErrorHelper

		){}

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
								this.errorHelper.showErrorAsAlert(error);
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
								let contractIdParameter = params['contractId'];
								if
								(
									contractIdParameter
								)
									{
										this.contractId = contractIdParameter;
										this.getContract();
									}
								else
									{
										alert("آدرس اشتباه است")
									}
								
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
						this.errorHelper.showErrorAsAlert(error);
					}
				
			}
	}
