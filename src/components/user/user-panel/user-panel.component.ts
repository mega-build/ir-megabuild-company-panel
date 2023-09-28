import { Component, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserService } from 'src/services/user/user.service';

@Component(
	{
		selector: 'user-panel',
		templateUrl: './user-panel.component.html',
		styleUrls: ['./user-panel.component.css']
	}
)	

export class UserPanelComponent implements OnInit
	{

		userList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private userService: UserService,
			private errorHelper: ErrorHelper
		){}

		ngOnInit
		(): void 
			{
				this.getAllUsers();
			}

		async getAllUsers
		():Promise<void>
			{
				try 
					{
						this.isLoading = true;

						const data = await this.userService.getAll();
						
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

	}