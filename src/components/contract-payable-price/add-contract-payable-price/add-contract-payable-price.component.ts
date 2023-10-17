import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ProjectItemHelper } from 'src/helper/projectItemHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'add-contract-payable-price',
		templateUrl: './add-contract-payable-price.component.html',
		styleUrls: ['./add-contract-payable-price.component.css']
	}
)

export class AddContractPayablePriceComponent
	{

		@Input() contract!:any;
		@Output() onContractPayablePriceSet = new EventEmitter<any>();

		payablePrice!: number;
		discount!: number;

		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper:ErrorHelper,
			public projectItemHelper: ProjectItemHelper
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
										this.contract._id,
										this.payablePrice,
										this.discount
									);

								this.isLoading = false;

								this.onContractPayablePriceSet.emit();
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

		setValueFromProjectItemDate
		():void
			{
				this.setDiscount(0);
				const total = this.projectItemHelper.calculateTotalPrice(this.contract.projectItem);
				this.setPayablePrice(total)
			}

	}
