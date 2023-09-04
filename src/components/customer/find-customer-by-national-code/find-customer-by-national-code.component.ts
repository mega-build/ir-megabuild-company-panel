import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from 'src/services/customer/customer.service';

@Component(
	{
		selector: 'find-customer-by-national-code',
		templateUrl: './find-customer-by-national-code.component.html',
		styleUrls: ['./find-customer-by-national-code.component.css']
	}
)

export class FindCustomerByNationalCodeComponent
	{

		@Output() onCustomerSelected = new EventEmitter<any>();
		@Output() onRequestAddNewCustomerWithNationalCode = new EventEmitter<any>();

		isLoading:boolean = false;
		nationalCode:string = "";
		customer:any={};

		constructor
		(
			private customerService: CustomerService
		){}

		async getByNationalCode
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.customerService
							.findByNationalCode(
								this.nationalCode
							)
						console.log(data.customer);
						this.customer = data.customer;
						this.isLoading = false;
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

		selectCustomer
		():void
			{
				this.onCustomerSelected.emit(this.customer);
				this.nationalCode = "";
				this.customer = {};
			}

		addNewCustomerWithNationalCode
		():void
			{
				this.onRequestAddNewCustomerWithNationalCode.emit(this.nationalCode);
			}
	}
