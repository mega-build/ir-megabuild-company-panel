import { Component, Input } from '@angular/core';
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
			private contractPaymentService: ContractPaymentService
		)
			{}

		setBankAccount(
			bankAccount:any
		):void
			{
				this.contractPayment.bankAccount = bankAccount;
			}

		save
		():void
			{
				this.contractPaymentService.addDeposit(
					this.contractId,
					this.contractPayment.price,
					this.contractPayment.bankAccount._id,
					this.contractPayment.dueDate
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
