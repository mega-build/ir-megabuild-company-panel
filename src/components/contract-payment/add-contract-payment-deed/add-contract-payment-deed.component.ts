import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-deed',
		templateUrl: './add-contract-payment-deed.component.html',
		styleUrls: ['./add-contract-payment-deed.component.css']
	}
)

export class AddContractPaymentDeedComponent
	{
		@Input() contractId:string = "";
		@Output() onItemAdded = new EventEmitter<any>();
		
		contractPayment:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private contractPaymentService: ContractPaymentService
		)
			{}

		setBankAccount
		(
			bankAccount:any
		):void
			{
				this.contractPayment.bankAccount = bankAccount;
			}

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
			
				if(!contractPayment.bankAccount){
					validationResult.hasError = true;
					validationResult.messageList.push("شماره حساب را انتخاب کنید.");
				}
			
				return validationResult;
			}

		async save
		():Promise<void>
			{
				this.validationResult  = this.validate(this.contractPayment);

				if
				(
					this.validationResult .hasError
				)
					{
						return;
					}
				else
					{
						try
							{
		
								this.isLoading = true;
		
								const data = await this.contractPaymentService.addDeed(
									this.contractId,
									this.contractPayment.price,
									this.contractPayment.bankAccount._id
								);
		
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
