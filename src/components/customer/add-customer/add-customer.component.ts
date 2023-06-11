import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from 'src/services/customer/customer.service';

@Component(
	{
		selector: 'add-customer',
		templateUrl: './add-customer.component.html',
		styleUrls: ['./add-customer.component.css']
	}
)

export class AddCustomerComponent
	{
		@Output() onCustomerAdded = new EventEmitter<any>();
		
		customer: any = {};
		isLoading:boolean = false;

		constructor
		(
			private customerService: CustomerService
		)
			{}

		save
		():void
			{
				this.isLoading = true;
				this.customerService
				.add(
					this.customer.firstname,
					this.customer.lastname,
					this.customer.nationalCode,
					this.customer.mobileNumber,
					this.customer.phoneNumber,
					this.customer.postalCode,
					this.customer.address
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.customerId);
							this.customer._id = data.customerId
							this.isLoading = false;
							this.onCustomerAdded.emit(this.customer);
							
						}
				)
			}
	}
