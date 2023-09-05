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
		validationResult: any ={};

		constructor
		(
			private customerService: CustomerService
		){}

		ngOnInit
		(): void 
			{
				this.customer.nationalCode = this.newNationalCode;
			}


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
				else
					{
						this.validationResult = validationResult;
					}
				
			}
	}


