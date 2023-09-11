import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-list-item',
		templateUrl: './contract-payment-list-item.component.html',
		styleUrls: ['./contract-payment-list-item.component.css']
	}
)

export class ContractPaymentListItemComponent
	{
		@Input() contractPayment: any={};

		isChequePaymentMethod
		():boolean
			{
				if
				(
					this.contractPayment &&
					this.contractPayment.contractPaymentMethod &&
					this.contractPayment.contractPaymentMethod.componentName &&
					this.contractPayment.contractPaymentMethod.componentName == "CHEQUE"
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
					this.contractPayment &&
					this.contractPayment.contractPaymentMethod &&
					this.contractPayment.contractPaymentMethod.componentName &&
					this.contractPayment.contractPaymentMethod.componentName == "DIPOSIT"
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
					this.contractPayment &&
					this.contractPayment.contractPaymentMethod &&
					this.contractPayment.contractPaymentMethod.componentName &&
					this.contractPayment.contractPaymentMethod.componentName == "DICKER"
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
					this.contractPayment &&
					this.contractPayment.contractPaymentMethod &&
					this.contractPayment.contractPaymentMethod.componentName &&
					this.contractPayment.contractPaymentMethod.componentName == "DEED"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}
	}
