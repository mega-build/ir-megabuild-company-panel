import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { PriceHelper } from 'src/helper/priceHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-contract-payment-list',
		templateUrl: './contract-contract-payment-list.component.html',
		styleUrls: ['./contract-contract-payment-list.component.css']
	}
)

export class ContractContractPaymentListComponent implements OnInit
	{

		@Input() contractId: string = "";

		contract!:any;
		contractPaymentList: any[]=[]
		isLoading:boolean = false;
		hasAnyPayment:boolean = false;
		totalRegisteredPaymentListPrice:number = 0;
		

		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper:ErrorHelper,
			public priceHelper:PriceHelper
		){}

		getRemainingPrice
		():number
			{
				const remainingPrice:number = this.contract.payablePrice - this.totalRegisteredPaymentListPrice;
				return remainingPrice;
			}
		
		paymentListLengthChanged
		(
			paymentListLength:number
		):void
			{
				console.log(paymentListLength);

				if
				(
					paymentListLength == 0
				)
					{
						this.hasAnyPayment = false;
					}
				else
					{
						this.hasAnyPayment = true;
					}
				
				
			}

		paymentTotalPriceChanged
		(
			totalPrice:number
		)
			{
				this.totalRegisteredPaymentListPrice = totalPrice;
			}

		ngOnInit
		(): void
			{
				if
				(
					this.route.parent &&
					this.route.parent.parent
				)
					{
						this.route.parent.parent.params.subscribe(params => 
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
