import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { UserCompanyAccessService } from 'src/services/userCompanyAccess/user-company-access.service';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'select-user-company-access',
		templateUrl: './select-user-company-access.component.html',
		styleUrls: ['./select-user-company-access.component.css']
	}
)

export class SelectUserCompanyAccessComponent implements OnInit
{

	@Output() setUserCompanyAccess = new EventEmitter<any>();
	@Input() selectedUserCompanyAccess:any ={};

	userCompanyAccessList!: any[];
	isLoading: boolean = false;
	
		
	constructor
	(
		private router: Router,
		private userCompanyAccessService: UserCompanyAccessService,
		private localStorageService: LocalStorageService,
		private errorHelper: ErrorHelper
	){}
			
	ngOnInit
	(): void 
		{
			this.getAllUserCompanyAccessList();
		}

	async getAllUserCompanyAccessList
	(): Promise<void>
		{
			{

				try
					{
						this.isLoading = true;

						const data = await this.userCompanyAccessService.getAll();

						this.userCompanyAccessList = data.userCompanyAccessList;

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


	

	selectUserCompanyAccess
	(
		userCompanyAccess:any
	):void
		{
			this.selectedUserCompanyAccess = userCompanyAccess;
			this.localStorageService.setUserCompanyAccess(this.selectedUserCompanyAccess);
			
			this.navigate_home();
		}

	navigate_home
	():void
		{
			const nvaigationRouteList = ['home'];
			this.router.navigate(nvaigationRouteList);
		}
}