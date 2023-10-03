import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';

@Component(
	{
		selector: 'set-user-company-access-permission',
		templateUrl: './set-user-company-access-permission.component.html',
		styleUrls: ['./set-user-company-access-permission.component.css']
	}
)

export class SetUserCompanyAccessPermissionComponent implements OnInit
{
	isLoading:boolean = false;
	userCompanyAccessId!:string;
	userCompanyAccess: any = {};

	constructor
	(
		private route: ActivatedRoute,
		private router:Router,
		private UserCompanyAccessService: UserCompanyAccessService,
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
							let userCompanyAccessIdParameter = params['userCompanyAccessId']; 

							if
							(
								userCompanyAccessIdParameter
							)
								{
									this.userCompanyAccessId = userCompanyAccessIdParameter; 
									this.getUserCompanyAccess();
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

	async getUserCompanyAccess
	(): Promise<void>
		{
			this.isLoading = true;

			try 
				{
					const data = await this.UserCompanyAccessService
						.get(
							this.userCompanyAccessId
						);
					
					console.log(data.userCompanyAccess);
					this.userCompanyAccess = data.userCompanyAccess;
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
					const data = await this.UserCompanyAccessService
						.setAccess(
							this.userCompanyAccessId,
							this.userCompanyAccess.isAddContractTemplate,
							this.userCompanyAccess.isAddProject,
							this.userCompanyAccess.isAddContract,
							this.userCompanyAccess.isUserManager,
							this.userCompanyAccess.isCustomerManager,
							this.userCompanyAccess.isContractManager,
							this.userCompanyAccess.isContractPaymentManager,
							this.userCompanyAccess.isContractReviewer,
							this.userCompanyAccess.isActive
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
			const nvaigationRouteList = ['/','userCompanyAccessManagement','list'];
			this.router.navigate(nvaigationRouteList);
		}

}
