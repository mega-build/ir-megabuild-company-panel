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
