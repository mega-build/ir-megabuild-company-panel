import { Component, Input } from '@angular/core';
import { DateHelper } from 'src/helper/dateHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-deposit',
		templateUrl: './add-contract-payment-deposit.component.html',
		styleUrls: ['./add-contract-payment-deposit.component.css']
	}
)

export class AddContractPaymentDepositComponent 
	{
		@Input() contractId:string = "";
		contractPayment:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private contractPaymentService: ContractPaymentService,
			private dateHelper:DateHelper
		)
			{}

		setBankAccount(
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

		setDueDate
		(
			contractPaymentDueDate:any
		):void
			{
				console.log('contractPaymentDueDate');
				console.log(contractPaymentDueDate);
				
				this.contractPayment.dueDate = this.dateHelper.getDateTehranTimeZoneDate(
					contractPaymentDueDate.year,
					contractPaymentDueDate.month,
					contractPaymentDueDate.day
				);
				
				this.contractPayment.dueDateShamsi = this.dateHelper.getDateTehranTimeZoneDateString(
					contractPaymentDueDate.year,
					contractPaymentDueDate.month,
					contractPaymentDueDate.day
				);
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

				if(!contractPayment.dueDate){
					validationResult.hasError = true;
					validationResult.messageList.push("بخش تاریخ سررسید را وارد کنید.");
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
		
								const data = await this.contractPaymentService.addDeposit(
									this.contractId,
									this.contractPayment.price,
									this.contractPayment.bankAccount._id,
									this.contractPayment.dueDate,
									this.contractPayment.dueDateShamsi
								);
		
								console.log(data.contractPaymentId);
								this.contractPayment._id = data.contractPaymentId
							
								this.isLoading = false;
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
