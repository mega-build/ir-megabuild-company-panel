import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-detail',
		templateUrl: './contract-payment-detail.component.html',
		styleUrls: ['./contract-payment-detail.component.css']
	}
)

export class ContractPaymentDetailComponent
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
