import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractCustomerService } from 'src/services/contractCustomer/contract-customer.service';
import { CustomerService } from 'src/services/customer/customer.service';

@Component(
	{
		selector: 'edit-contract-customer',
		templateUrl: './edit-contract-customer.component.html',
		styleUrls: ['./edit-contract-customer.component.css']
	}
)

export class EditContractCustomerComponent
	{
		isLoading: boolean = false;
		customerId?: string;
		customer?:any;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private customerService: CustomerService,
			private errorHelper:ErrorHelper
		){}

		ngOnInit
		(): void
			{
				if
				(
					this.route.parent &&
					this.route.parent.parent
				)
					{
						this.route.params.subscribe(params => 
							{
								let customerIdParameter:string = params['customerId']; 

								if
								(
									customerIdParameter
								)
									{
										this.customerId = customerIdParameter;
										this.getCustomerById();

									}
								else
									{
										alert("آدرس اشتباه است");
										//navigatte to home
									}
							}
						);
					}
				
				
			}

		async getCustomerById
		(): Promise<void>
			{
				try
					{
						if
						(
							this.customerId
						)
							{
								this.isLoading = true;

								const data = await this.customerService
									.get(
										this.customerId
									);
								this.customer = data.customer;
		
								this.isLoading = false;
							}
						
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}
			
			navigate_contractCustomerList
			():void
				{
					this.router.navigate(
						["../../list"],
						{
							relativeTo:this.route
						}
					);
				}



	}
