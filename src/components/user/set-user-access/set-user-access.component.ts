import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user/user.service';

@Component(
	{
		selector: 'set-user-access',
		templateUrl: './set-user-access.component.html',
		styleUrls: ['./set-user-access.component.css']
	}
)

export class SetUserAccessComponent implements OnInit
	{
		isLoading:boolean = false;
		userId:string = "";
		user: any= {};

		constructor
			(
				private route: ActivatedRoute,
				private userService: UserService
			)
				{}
				
		ngOnInit
		(): void 
			{
				if
				(
					this.route
				)
					{
						this.route.params.subscribe(params => 
							{
								this.userId = params['userId']; 
								console.log(this.userId);
								
								this.getUser();
							}
						);
					}
			}

		getUser
		(): void
			{
				this.isLoading = true;
				this.userService
					.get(
						this.userId
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.user);
								this.user = data.user;
								this.isLoading = false;
								
							}
					)
			}

		save
		():void
			{
				this.isLoading = true;
				this.userService
					.setAccess(
						this.userId,
						this.user.isAddContract,
						this.user.isUserManager,
						this.user.isCustomerManager,
						this.user.isContractManager,
						this.user.isContractPaymentManager,
						this.user.isContractReviwer,
						this.user.isActive
					)
					.subscribe(
						(data: any) => 
							{
								this.isLoading = false;
							}
					)
			}
	}
