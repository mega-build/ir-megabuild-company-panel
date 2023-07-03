import { Component, Input } from '@angular/core';
import { DateHelper } from 'src/helper/dateHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'add-contract-payment-cheque',
		templateUrl: './add-contract-payment-cheque.component.html',
		styleUrls: ['./add-contract-payment-cheque.component.css']
	}
)

export class AddContractPaymentChequeComponent
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

		setBank(
			bank:any
		):void
			{
				this.contractPayment.bank = bank;
			}

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
				this.contractPaymentService.addCheque(
					this.contractId,
					this.contractPayment.price,
					this.contractPayment.bankAccount._id,
					this.contractPayment.dueDate,
					this.contractPayment.dueDateShamsi,
					this.contractPayment.chequeNumber,
					this.contractPayment.bank._id
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
