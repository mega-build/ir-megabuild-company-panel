import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

	userCompanyAccessList: any[]= [];
	isLoading: boolean = false;
	
		
	constructor
	(
		private router: Router,
		private userCompanyAccessService: UserCompanyAccessService,
		private localStorageService: LocalStorageService
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

						console.log(data.userCompanyAccessList);
						this.userCompanyAccessList = data.userCompanyAccessList;

						this.isLoading = false;
					}
				catch
				(
					error:any
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
	
	}


	

	selectUserCompanyAccess
	(
		userCompanyAccess:any
	):void
		{
			this.selectedUserCompanyAccess = userCompanyAccess;
			this.localStorageService.setUserCompanyAccess(this.selectedUserCompanyAccess);
			
			const nvaigationRouteList = ['home'];
			this.router.navigate(nvaigationRouteList);
		}
}