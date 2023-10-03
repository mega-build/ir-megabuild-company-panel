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

		constructor
		(
			private localStorageService: LocalStorageService,
			private router: Router
		){
			let firstname = this.localStorageService.getFirstname();
			let lastname = this.localStorageService.getLastname();
			let _id = this.localStorageService.getId();

			if
			(
				firstname &&
				lastname &&
				_id
			)
				{
					this.user = {
						_id: _id,
						firstname: firstname,
						lastname: lastname
					}
				}
			else
				{
					this.navigate_login()
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
						this.router.navigate(['/']);

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

		navigate_login
		():void
			{
				this.router.navigate(['login']);
			}
	}
