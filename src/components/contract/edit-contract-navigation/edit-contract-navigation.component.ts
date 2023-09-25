import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'edit-contract-navigation',
		templateUrl: './edit-contract-navigation.component.html',
		styleUrls: ['./edit-contract-navigation.component.css']
	}
)

export class EditContractNavigationComponent
	{
		@Input() contractId: string = "";
		@Input() isInCustomerListSection!: boolean;
		@Input() hasAnyCostomer!: boolean;
		@Input() isInProjectItemSection!: boolean;
		@Input() hasProjectItem!: boolean;
		@Input() isInPayablePriceSection!: boolean;
		@Input() hasPayablePrice!: boolean;
		@Input() isInPaymentListSection!: boolean;
		@Input() hasAnyPayment!: boolean;



		isNavigatingToPayablePriceAvailable
		():boolean
			{
				if
				(
					typeof this.hasProjectItem === "boolean" &&
					this.hasProjectItem 
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
					typeof this.hasPayablePrice === "boolean" &&
					this.hasPayablePrice 
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
					this.isNavigatingToPayablePriceAvailable() &&
					this.isNavigattingToPaymentListAvailable() &&
					typeof this.hasAnyPayment === "boolean" &&
					this.hasAnyPayment
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
