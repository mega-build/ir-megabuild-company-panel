import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/services/user/user.service';

@Component(
	{
		selector: 'add-user',
		templateUrl: './add-user.component.html',
		styleUrls: ['./add-user.component.css']
	}
)

export class AddUserComponent
	{

		@Output() onUserAdded = new EventEmitter<any>();

		user:any = {};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private userService: UserService
		){}

		validate
		(
			user: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!user.firstname
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام را وارد کنید.");
					}
			
				if
				(
					!user.lastname
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام خانوادگی را وارد کنید.");
					}
			
			
				if
				(
					!user.username
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش نام کاربری را وارد کنید.");
					}

				if
				(
					!user.password
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("بخش کلمه ی عبور را وارد کنید.");
					}

				return validationResult;
			}

		async createUser
		():Promise<void>
			{

				this.validationResult  = this.validate(this.user);

				if
				(
					this.validationResult .hasError
				)
					{
						return;
					}
				else
					{
						try
						{
	
							this.isLoading = true;
	
							const data = await this.userService
								.create(
									this.user.firstname,
									this.user.lastname,
									this.user.username,
									this.user.password
								);
	
							console.log(data.userId);
							this.user._id = data.userId

							this.isLoading = false;
							
							this.onUserAdded.emit(this.user);
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
	}
