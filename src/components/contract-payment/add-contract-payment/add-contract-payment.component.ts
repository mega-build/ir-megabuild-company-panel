import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component(
	{
		selector: 'add-contract-payment',
		templateUrl: './add-contract-payment.component.html',
		styleUrls: ['./add-contract-payment.component.css']
	}
)

export class AddContractPaymentComponent
	{

		@Input() contractId= "";
		@Output() onItemAdded = new EventEmitter<any>();

		contract:any = {};

		setBankAccount
		(
			bankAccount:any
		):void
			{
				this.contract.bankAccount = bankAccount;
				console.log(this.contract);
				
			}

		setContractPaymentMethod
		(
			contractPaymentMethod:any
		):void
			{
				this.contract.contractPaymentMethod = contractPaymentMethod;
				console.log(this.contract);
				
			}

		save
		():void
			{}

		isChequePaymentMethod
		():boolean
			{
				if
				(
					this.contract.contractPaymentMethod &&
					this.contract.contractPaymentMethod.componentName == "CHEQUE"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDepositPaymentMethod
		():boolean
			{
				if
				(
					this.contract.contractPaymentMethod &&
					this.contract.contractPaymentMethod.componentName == "DIPOSIT"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDickerPaymentMethod
		():boolean
			{
				if
				(
					this.contract.contractPaymentMethod &&
					this.contract.contractPaymentMethod.componentName == "DICKER"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDeedPaymentMethod
		():boolean
			{
				if
				(
					this.contract.contractPaymentMethod &&
					this.contract.contractPaymentMethod.componentName == "DEED"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		itemAdded
		(
			addedContractPayment: any
		):void
			{
				this.onItemAdded.emit(addedContractPayment);
			}

	}
