import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'add-contract-customer',
		templateUrl: './add-contract-customer.component.html',
		styleUrls: ['./add-contract-customer.component.css']
	}
)

export class AddContractCustomerComponent
	{
		
		@Output() onSelectedCustomer = new EventEmitter<any>();

		selectedCustomer:any = {};

		selectCustomer
		(
			customer:any
		):void
			{
				console.log(customer);
				
				this.selectedCustomer = customer;
				this.onSelectedCustomer.emit(this.selectedCustomer)
			}
	}
