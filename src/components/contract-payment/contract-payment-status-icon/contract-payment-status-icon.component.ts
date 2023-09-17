import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-payment-status-icon',
		templateUrl: './contract-payment-status-icon.component.html',
		styleUrls: ['./contract-payment-status-icon.component.css']
	}
)

export class ContractPaymentStatusIconComponent
	{
		@Input() contractPayment: any={};

		getStatus
		():any
			{

				if
				(
					this.contractPayment.isSettled == true
				)
					{
						return {
							text: 'واریز شده',
							class: 'settled'
						}
					}
				else
					{
						const nowTime = new Date().getTime();
						const contractPaymentDueDateTime = new Date(this.contractPayment.dueDate).getTime();

						if
						(
							this.contractPayment.isSettled != true &&
							nowTime < contractPaymentDueDateTime
						)
							{
								return {
									text: 'زمان دارد',
									class: 'notReached'
								}
							}
						else if
						(
							this.contractPayment.isSettled != true &&
							nowTime > contractPaymentDueDateTime
						)
							{
								return {
									text: 'موعد گذشته',
									class: 'settlementPending'
								}
							}
						else 
							{
								return {
									text: 'نامشخص',
									class: 'unknown'
								}
							}
					}
			}

		getStatusText
		():string
			{
				return this.getStatus().text;
			}

		getStatusClass
		():string
			{
				return this.getStatus().class;
			}

	}
