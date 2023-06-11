import { Component } from '@angular/core';
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

		isLoading:boolean = false;
		nationalCode:string = "0080122957";
		customer:any={};

		constructor
		(
			private customerService: CustomerService
		)
			{}

		getByNationalCode
		():void
			{
				this.isLoading = true;
				this.customerService
					.findByNationalCode(
						this.nationalCode
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.customer);
								this.customer = data.customer;
								this.isLoading = false;
								
							}
					)
			}
	}
