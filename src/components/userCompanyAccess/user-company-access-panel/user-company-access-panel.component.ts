import { Component, OnInit } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';

@Component(
	{
		selector: 'user-company-access-panel',
		templateUrl: './user-company-access-panel.component.html',
		styleUrls: ['./user-company-access-panel.component.css']
	}
)

export class UserCompanyAccessPanelComponent implements OnInit
{

	userCompanyAccessList!: any[];
	isLoading: boolean = false;

	constructor
	(
		private userCompanyAccessService: UserCompanyAccessService,
		private errorHelper: ErrorHelper
	){}

	ngOnInit
	(): void 
		{
			this.getAllUserCompanyAccessList();
		}

	async getAllUserCompanyAccessList
	():Promise<void>
		{
			try 
				{
					this.isLoading = true;

					const data = await this.userCompanyAccessService.getAllByCompany();
					
					console.log(data.userCompanyAccessList);
					this.userCompanyAccessList = data.userCompanyAccessList;
					
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
