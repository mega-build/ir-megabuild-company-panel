import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserService } from 'src/services/user/user.service';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';

@Component(
	{
		selector: 'add-user-user-company-access',
		templateUrl: './add-user-user-company-access.component.html',
		styleUrls: ['./add-user-user-company-access.component.css']
	}
)

export class AddUserUserCompanyAccessComponent implements OnInit
{
	isLoading:boolean = false;
	validationResult!: any;

	userId!:string;
	user!: any;

	loggedinUserCompanyAccessList!: any[];
	currentUserCompanyAccessList!:any[];
	currentUserCompanyAccessCompanyIdList!:string[];
	unassignedCompanyList!:any[];

	selectedCompanyList:any[]= [];


	constructor
	(
		private route: ActivatedRoute,
		private router:Router,
		private userCompanyAccessService: UserCompanyAccessService,
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
					this.route.params.subscribe(async params => 
						{
							let userIdParameter = params['userId']; 

							if
							(
								userIdParameter
							)
								{
									this.userId = userIdParameter; 
									await this.getUser();
									await this.getAllCompanyAccessList();
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
					await this.getAllUserCompanyAccessList();
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

	async getAllCompanyAccessList
	(): Promise<void>
		{
			{

				try
				{
					this.isLoading = true;

					const data = await this.userCompanyAccessService.getAll();

					console.log(data.userCompanyAccessList);
					this.loggedinUserCompanyAccessList = data.userCompanyAccessList;

					this.unassignedCompanyList = this.getUnassignedCompanyList();

					this.isLoading = false;
				}
			catch
			(
				error:any
			)
				{
					this.isLoading = false;
					this.errorHelper.showErrorAsAlert(error);
				}

		}
	
	}

	getUnassignedCompanyList
	():any[]
		{
			console.log('hhhh');
			
			let result:any[] = [];
			result = this.loggedinUserCompanyAccessList.filter(
				(
					loggedinUserCompanyAccess:any
				)=>
					{
						if
						(
							
							!this.currentUserCompanyAccessCompanyIdList.includes(loggedinUserCompanyAccess.company._id)
						)
							{
								return loggedinUserCompanyAccess;
							}
					}
			)
			return result;
		}

	async getAllUserCompanyAccessList
	(): Promise<void>
		{
			{

				try
				{
					this.isLoading = true;

					const data = await this.userCompanyAccessService.getAllByUser(
						this.user._id
					);

					console.log(data.userCompanyAccessList);
					this.currentUserCompanyAccessList = data.userCompanyAccessList;

					this.currentUserCompanyAccessCompanyIdList = this.currentUserCompanyAccessList.map(
						(
							currentUserCompanyAccess:any
						)=>
							{
								return currentUserCompanyAccess.company._id;
							}
					);
					console.log('asdasd');
					
					console.log(this.currentUserCompanyAccessCompanyIdList);
					

					this.isLoading = false;
				}
			catch
			(
				error:any
			)
				{
					this.isLoading = false;
					this.errorHelper.showErrorAsAlert(error);
				}

		}
	
	}

	validate
	(): any
		{
			let validationResult: any ={
				hasError: false,
				messageList: []
			};
		
			if
			(
				!this.user
			)
				{
					validationResult.hasError = true;
					validationResult.messageList.push("کاربر تامعتبر است");
				}
		
			if
			(
				this.selectedCompanyList.length == 0
			)
				{
					validationResult.hasError = true;
					validationResult.messageList.push("شرکت های مورد دسترسی کاربر را انتخاب کنید.");
				}
		
		
			return validationResult;
		}

	async save
	():Promise<void>
		{
			this.validationResult  = this.validate();

			if
			(
				this.validationResult .hasError
			)
				{
					return;
				}
			else
				{
					this.isLoading = true;

					try 
						{
							this.selectedCompanyList.forEach(
								async (currentCompany:any) =>
									{
										const data = await this.userCompanyAccessService
											.add(
												this.user._id,
												currentCompany._id
											);	
									}
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

		}

	selectedCompanyChanged
	(
		element:HTMLInputElement,
		company:any
	):void
		{
			console.log(company);

			if
			(
				element.checked == true
			)
				{
					this.selectedCompanyList.push(company);
					
				}
			else
				{
					this.selectedCompanyList.splice(
						this.selectedCompanyList.indexOf(company),
						1
					);
				}
			console.log(this.selectedCompanyList);
			
		}

	navigate_userList
	():void
		{
			const nvaigationRouteList = ['/','userCompanyAccessManagement','list'];
			this.router.navigate(nvaigationRouteList);
		}

}
