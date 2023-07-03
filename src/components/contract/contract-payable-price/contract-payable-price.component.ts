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

		payablePrice: number = 0;
		discount: number = 0;

		isLoading:boolean = false;

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
		
		save():void
			{
				this.isLoading = true;
				this.contractService
				.setPayablePrice(
					this.contractId,
					this.payablePrice,
					this.discount
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data);
							this.isLoading = false;
						}
				)
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
								let contract = data.contract;
								this.discount = contract.discount;
								this.payablePrice = contract.payablePrice;
								this.isLoading = false;
							}
					)
			}
	}
