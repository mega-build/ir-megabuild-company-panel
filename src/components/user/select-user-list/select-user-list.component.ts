import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		selectedUserList!: any[];
		userList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private userService: UserService,
			private errorHelper: ErrorHelper
		){}

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
							this.errorHelper.showErrorAsAlert(error);
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
