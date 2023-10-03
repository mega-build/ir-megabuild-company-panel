import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'panel-navigation',
		templateUrl: './panel-navigation.component.html',
		styleUrls: ['./panel-navigation.component.css']
	}
)

export class PanelNavigationComponent
	{
		user:any;
		isLoading: boolean = false;
		userCompanyAccess!:any;

		constructor
		(
			private localStorageService: LocalStorageService,
			private router: Router
		){
			
			let userFormLogacStorage = this.localStorageService.getUser();
			if
			(
				userFormLogacStorage
			)
				{
					this.user = userFormLogacStorage;
				}
			else
				{
					this.localStorageService.logout();
					this.navigate_login()
				}

			let userCompanyAccessFromLocalStorage = this.localStorageService.getUserCompanyAccess();

			if
			(
				userCompanyAccessFromLocalStorage
			)
				{
					this.userCompanyAccess = userCompanyAccessFromLocalStorage;
				}
		}

		getWorkingCompany
		():any
			{
				const workingUserCompanyAccess =  this.localStorageService.getUserCompanyAccess();
				const company = workingUserCompanyAccess.company;

				return company;
			}

		logout
		():void
			{
				try
					{
						this.isLoading = true;

						this.localStorageService.logout();
						
						this.isLoading = false;

						this.navigate_login()
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

		navigate_login
		():void
			{
				this.router.navigate(['/']);
			}
	}
