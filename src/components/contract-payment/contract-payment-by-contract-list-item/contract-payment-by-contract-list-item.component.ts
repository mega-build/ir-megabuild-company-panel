import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'contract-payment-by-contract-list-item',
		templateUrl: './contract-payment-by-contract-list-item.component.html',
		styleUrls: ['./contract-payment-by-contract-list-item.component.css']
	}
)

export class ContractPaymentByContractListItemComponent
	{
		@Output() onRemove = new EventEmitter<any>();
		@Input() contractPayment: any={};

		isLoading: boolean = false;


		constructor
			(
				private contractPaymentService: ContractPaymentService
			)
				{}
		

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

		async removeContractPayment
		():Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.contractPaymentService
							.remove(
								this.contractPayment._id
							);

						this.isLoading = false;

						this.onRemove.emit(this.contractPayment);
					}
				catch
				(
					error: any
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
