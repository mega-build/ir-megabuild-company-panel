import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from 'src/services/customer/customer.service';

@Component(
	{
		selector: 'add-customer',
		templateUrl: './add-customer.component.html',
		styleUrls: ['./add-customer.component.css']
	}
)

export class AddCustomerComponent implements OnInit
	{
		@Output() onCustomerAdded = new EventEmitter<any>();
		@Input() newNationalCode :string = "";
		
		customer: any = {};
		isLoading:boolean = false;

		constructor
		(
			private customerService: CustomerService
		)
			{}

		ngOnInit
		(): void 
			{
				this.customer.nationalCode = this.newNationalCode;
			}

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


