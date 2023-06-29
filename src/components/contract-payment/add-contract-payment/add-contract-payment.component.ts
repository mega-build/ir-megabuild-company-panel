import { Component, Input } from '@angular/core';

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
						//return false;
						return true;
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
						//return false;
						return true;
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
						//return false;
						return true;
					}
			}
	}
