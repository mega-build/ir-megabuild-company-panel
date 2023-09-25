import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-detail',
		templateUrl: './contract-detail.component.html',
		styleUrls: ['./contract-detail.component.css']
	}
)

export class ContractDetailComponent
	{
		@Input() contract: any;

		isNavigattingToProjectItemAvailable
		():boolean
			{
				if
				(
					this.contract &&
					this.contract.projectItem
				)
					{
						return true
					}
				else
					{
						return false;
					}
				
			}

		isNavigattingToPaymentListAvailable
		():boolean
			{
				if
				(
					this.contract &&
					this.contract.payablePrice 
				)
					{
						return true
					}
				else
					{
						return false;
					}
			}

		isNavigattingToEditContentAvailable
		():boolean
			{
				if
				(
					this.contract &&
					this.contract.customers &&
					this.contract.customers.length > 0 &&
					this.contract.projectItem &&
					this.contract.payablePrice &&
					this.contract.contractPayments && 
					this.contract.contractPayments.length >0
				)
					{
						return true
					}
				else
					{
						return false;
					}
			}
	}
