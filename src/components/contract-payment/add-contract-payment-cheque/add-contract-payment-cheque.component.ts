import { Component, Input } from '@angular/core';
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
			private contractPaymentService: ContractPaymentService
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

		save
		():void
			{
				this.contractPaymentService.addCheque(
					this.contractId,
					this.contractPayment.price,
					this.contractPayment.bankAccount._id,
					this.contractPayment.dueDate,
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
