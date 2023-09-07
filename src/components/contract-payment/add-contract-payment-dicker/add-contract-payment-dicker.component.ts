import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-dicker',
		templateUrl: './add-contract-payment-dicker.component.html',
		styleUrls: ['./add-contract-payment-dicker.component.css']
	}
)

export class AddContractPaymentDickerComponent
	{
		@Input() contractId:string = "";
		@Output() onItemAdded = new EventEmitter<any>();
		
		contractPayment:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private contractPaymentService: ContractPaymentService
		){}

		setPrice
		(
			price:number
		):void
			{
				this.contractPayment.price = price;
			}

		validate
		(
			contractPayment: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if (!contractPayment.price){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش مبلغ را وارد کنید.");
				}
			
				return validationResult;
			}

		async save
		():Promise<void>
			{

				this.validationResult  = this.validate(this.contractPayment);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						try
							{
		
								this.isLoading = true;
		
								const data = await this.contractPaymentService.addDicker(
									this.contractId,
									this.contractPayment.price
								)
		
								console.log(data.contractPaymentId);
								this.contractPayment._id = data.contractPaymentId
							
								this.isLoading = false;

								this.onItemAdded.emit(this.contractPayment);
							}
						catch
						(
							error:any
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
	}
