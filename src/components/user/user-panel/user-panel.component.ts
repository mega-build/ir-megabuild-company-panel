import { Component, OnInit } from '@angular/core';
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

		userList: any[] = [];

		constructor
		(
			private userService: UserService
		)
			{}

		ngOnInit(): void {
			this.getAllUsers();
		}

		getAllUsers
		():void
			{
				this.userService
				.getAll()
				.subscribe(
					(data: any) => 
						{
							console.log(data.userList);
							this.userList = data.userList;
							
						}
				)
			}

	}
