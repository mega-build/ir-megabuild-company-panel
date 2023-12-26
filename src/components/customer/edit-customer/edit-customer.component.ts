import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from 'src/services/customer/customer.service';

@Component(
	{
		selector: 'edit-customer',
		templateUrl: './edit-customer.component.html',
		styleUrls: ['./edit-customer.component.css']
	}
)

export class EditCustomerComponent
	{
		@Output() onCustomerEdited = new EventEmitter();
		@Input() customer: any = {};

		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private customerService: CustomerService
		){}


		validate
		(
			customer: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!customer.firstname
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام را وارد کنید.");
					}
			
				if
				(
					!customer.lastname
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام خانوادگی را وارد کنید.");
					}

				if
				(
					!customer.nationalCode
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش کدملی را وارد کنید.");
					}
				
				if
				(
					!customer.mobileNumber
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش شماره موبایل را وارد کنید.");
					}

				if
				(
					!customer.phoneNumber
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش شماره تماس را وارد کنید.");
					}

				if
				(
					!customer.postalCode
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش کدپستی را وارد کنید.");
					}

				if
				(
					!customer.address
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش آدرس را وارد کنید.");
					}

				return validationResult;
			}

		async save
		():Promise<void>
			{
				const validationResult = this.validate(this.customer);

				if
				(
					!validationResult.hasError
				)
					{
						try
							{
								this.isLoading = true;
								const data = await this.customerService
									.update(
										this.customer._id,
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
								this.onCustomerEdited.emit();
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
				else
					{
						this.validationResult = validationResult;
					}
			}
	}
