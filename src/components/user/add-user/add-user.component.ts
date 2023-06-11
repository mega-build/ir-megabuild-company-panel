import { Component } from '@angular/core';
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

		user:any = {};
		isLoading:boolean = false;

		constructor
		(
			private userService: UserService
		)
			{}

		createUser
		():void
			{

				this.userService
				.create(
					this.user.firstname,
					this.user.lastname,
					this.user.username,
					this.user.password
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.userId);
							this.user._id = data.userId
							//this.onProjectItemAdded.emit(this.residentialProjectItem);
							this.isLoading = false;
						}
				)
			}
	}
