import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/services/user/user.service';

@Component(
	{
		selector: 'select-user-list',
		templateUrl: './select-user-list.component.html',
		styleUrls: ['./select-user-list.component.css']
	}
)

export class SelectUserListComponent implements OnInit
	{

		@Output() onSelectedUserChanged = new EventEmitter<any>();

		selectedUserList: any[]=[];

		userList: any[] = [];
		isLoading: boolean = false;

		constructor
		(
			private userService: UserService
		)
			{}

		ngOnInit(): void {
			this.getAllUsers();
		}

		async getAllUsers
		():Promise<void>
			{
				
				this.isLoading = true;

					try 
						{
							const data = await this.userService.getAll()
							
							console.log(data.userList);
							this.userList = data.userList;
							this.isLoading = false;
						}
					catch
					(
						error: any
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

		selectedUserChanged
		(
			element:HTMLInputElement,
			user:any
		):void
			{
				console.log(element);

				if
				(
					element.checked == true
				)
					{
						this.selectedUserList.push(user);
						
					}
				else
					{
						this.selectedUserList.splice(
							this.selectedUserList.indexOf(user),
							1
						);
					}
				
				this.onSelectedUserChanged.emit(this.selectedUserList);
			}
	}
