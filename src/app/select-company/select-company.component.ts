import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/share/services/local-storage/local-storage.service';

@Component(
	{
		selector: 'select-company',
		templateUrl: './select-company.component.html',
		styleUrls: ['./select-company.component.css']
	}
)

export class SelectCompanyComponent
	{
		user:any;
		constructor
		(
			private localStorageService: LocalStorageService,
			private router:Router
		)
			{
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
							firstname: firstname,
							lastname: lastname,
							_id: _id
						}
					}
				else
					{
						this.navigate_login()
					}
			}

		navigate_login
		():void
			{
				this.router.navigate(['login']);
			}
	}
