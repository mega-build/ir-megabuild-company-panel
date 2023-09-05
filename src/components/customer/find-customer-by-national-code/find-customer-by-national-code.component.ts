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
		validationResult: any ={};

		constructor
		(
			private customerService: CustomerService
		){}

		validate
		(): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!this.nationalCode
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش کدملی را وارد کنید.");
					}
				else
					{
						if
						(
							this.nationalCode.toString().trim().length != 10
						)
							{
								validationResult.hasError = true;
								validationResult.messageList.push("کد ملی باید 10 رقم باشد");
							}

					}

				return validationResult;
			}

		async getByNationalCode
		():Promise<void>
			{
				this.validationResult = this.validate();

				if
				(
					this.validationResult.hasError
				)
					{
						 return
					}
				else
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
