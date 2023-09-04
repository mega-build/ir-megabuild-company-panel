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

		async save
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.customerService
							.add(
								this.customer.firstname,
								this.customer.lastname,
								this.customer.nationalCode,
								this.customer.mobileNumber,
								this.customer.phoneNumber,
								this.customer.postalCode,
								this.customer.address
							);

						console.log(data.customerId);
						this.customer._id = data.customerId
						this.isLoading = false;
						this.onCustomerAdded.emit(this.customer);
					}
				catch
				(
					error:any
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


