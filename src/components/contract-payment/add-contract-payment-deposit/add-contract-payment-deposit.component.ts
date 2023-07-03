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
		save
		():void
			{
				this.contractPaymentService.addDeposit(
					this.contractId,
					this.contractPayment.price,
					this.contractPayment.bankAccount._id,
					this.contractPayment.dueDate,
					this.contractPayment.dueDateShamsi
				).subscribe(
					(data: any) => 
						{
							console.log(data.contractPaymentId);
							this.contractPayment._id = data.contractPaymentId
							this.isLoading = false;
						}
				)
			}
	}
