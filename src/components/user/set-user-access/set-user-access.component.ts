import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
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
		userId!:string;
		user!: any;

		constructor
		(
			private route: ActivatedRoute,
			private router:Router,
			private userService: UserService,
			private errorHelper:ErrorHelper,
		){}
				
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
								let userIdParameter = params['userId']; 
								if
								(
									userIdParameter
								)
									{
										this.userId = userIdParameter; 
										this.getUser();
									}
								else
									{
										alert("آدرس مورد نظر اشتباه میباشد.");
										this.navigate_userList();
									}
								
							}
						);
					}
			}

		async getUser
		(): Promise<void>
			{
				this.isLoading = true;

				try 
					{
						const data = await this.userService
							.get(
								this.userId
							);
						
						console.log(data.user);
						this.user = data.user;
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

		async save
		():Promise<void>
			{
				this.isLoading = true;

				try 
					{
						const data = await this.userService
							.setAccess(
								this.userId,
								this.user.isAddContractTemplate,
								this.user.isAddProject,
								this.user.isAddContract,
								this.user.isUserManager,
								this.user.isCustomerManager,
								this.user.isContractManager,
								this.user.isContractPaymentManager,
								this.user.isContractReviwer,
								this.user.isActive
							);
						
						this.isLoading = false;

						this.navigate_userList();
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

		navigate_userList
		():void
			{
				const nvaigationRouteList = ['/','userManagement','list'];
				this.router.navigate(nvaigationRouteList);
			}
	}
